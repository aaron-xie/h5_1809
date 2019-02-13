/**
 * Created by Danny on 2015/9/9 14:56.
 */
(function () {
    //游戏类。最最核心的类。
    window.Game = Class.extend({
        //初始化
        init: function (paramsJSON) {
            var self = this;
            this.gameend = false;
            //fps表示frames per seceond每秒多少帧
            //默认值是60
            this.fps = paramsJSON.fps || 60;
            //定时器
            this.timer = null;
            //我的帧工具
            this.frameUtil = new FrameUtil();
            //得到canvas
            this.canvas = document.getElementById(paramsJSON.canvasId);
            //得到上下文
            this.ctx = this.canvas.getContext("2d");
            //所有图片
            this.images = null;
            //实例化一个静态资源管理工具
            this.sr = new StaticResoucesUtil();
            //命令这个静态资源管理工具，开始加载图片
            this.sr.loadImages("r.json", function (alreayLoadNum, allNum, imagesObj) {
                //清屏
                self.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                //打印当前加载图片个数
                self.ctx.font = "20px 黑体";
                self.ctx.fillText("正在加载" + alreayLoadNum + "/" + allNum, 30, 50);
                //如果已经加载的图片个数，等于了图片总数，那么运行游戏
                if (alreayLoadNum == allNum) {
                    self.images = imagesObj;
                    self.run();
                }
            });

        },
        //开始游戏
        run: function () {
            //备份this
            var self = this;
            //定时器
            this.timer = setInterval(function () {
                //主循环
                self.mainloop();
            }, 1000 / self.fps);

            //自己的一些演员，罗列出来
            this.fangzi = new Background({
                "image" : this.images.fangzi,
                "width" : 300,
                "height" : 256,
                "speed" : 1,
                "y" : this.canvas.height - 296
            });

            this.dashu = new Background({
                "image" : this.images.shu,
                "width" : 300,
                "height" : 216,
                "speed" : 2,
                "y" : this.canvas.height - 264
            });

            this.diban = new Background({
                "image" : this.images.diban,
                "width" : 48,
                "height" : 48,
                "speed" : 3,
                "y" : this.canvas.height - 48
            });

            //实例化一个鸟
            this.bird = new Bird();

            //管子数组
            this.pipeArray = [new Pipe()];

            //分数对象
            this.scoreManager = new ScoreManager();
        },
        //主循环
        mainloop: function () {
            //里面的语句，每帧执行。
            this.frameUtil.update();
            //清屏
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            //打印fps
            this.ctx.font = "16px Consolas";
            this.ctx.fillText("FPS / " + this.frameUtil.realFps, 10, 20);
            //打印帧编号
            this.ctx.fillText("FNO / " + this.frameUtil.currentFrame, 10, 40);

            //房子更新、渲染
            this.fangzi.update();
            this.fangzi.render();

            //地板更新、渲染
            this.diban.update();
            this.diban.render();

            //大树的更新、渲染
            this.dashu.update();
            this.dashu.render();

            //鸟的更新、渲染
            this.bird.update();
            this.bird.render();

            //判断当前的帧数是不是100的整数倍，如果是，那么new一个新管子
            if(!this.gameend && this.frameUtil.currentFrame % 130 == 0){
                this.pipeArray.push(new Pipe());
            }

            //遍历所有的管子，让所有的管子都更新、渲染
            for(var i = 0 ; i < this.pipeArray.length ; i++){
                this.pipeArray[i].update();
                if(this.pipeArray[i]) {
                    this.pipeArray[i].render();
                }
            }

            //分数的更新、渲染
            this.scoreManager.update();
            this.scoreManager.render();
        },
        //暂停游戏
        pause: function () {
            //清除定时器
            clearInterval(this.timer);
        },
        gameover : function(){
            //各种暂停
            this.fangzi.pause();
            this.diban.pause();
            this.dashu.pause();
            for(var i = 0 ; i < this.pipeArray.length ; i++) {
                this.pipeArray[i].pause();
            }
            //
            this.gameend = true;
            //小鸟死亡
            this.bird.die = true;
        }
    });
})();