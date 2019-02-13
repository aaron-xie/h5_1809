/**
 * Created by Danny on 2015/9/9 17:20.
 */
(function () {
    //鸟类
    window.Bird = Class.extend({
        init: function () {
            this.x = (game.canvas.width - 85) / 2;
            this.y = 100;
            this.w = 85;
            this.h = 60;
            //翅膀形态，合法值0、1、2
            this.swing = 0;
            //y的变化值
            this.dY = 1;
            //开始掉落的帧数
            this.dropStatFram = game.frameUtil.currentFrame;
            //鸟的方向
            this.ro = 0;
            //添加监听
            this.bindClickListener();
            //小鸟的状态
            this.state = 0; //0就是下降，1是上升
            //
            this.deltaY = 1;
            //翅膀煽动速度
            this.swingSpeed = 5;
            //是否已经死了
            this.die = false;
            //死亡血迹动画
            this.dieAnimate = 0;
        },
        // 往上飞
        fly : function(){
            // 改变状态
            this.state = 1;
            // 改变角度
            this.ro = -25;
            // 初试的每帧移动的距离
            this.deltaY = 1;
            // 改变翅膀速度
            this.swingSpeed = 2;
        },
        //每帧都要执行
        update: function () {
            //如果小鸟死了
            if(this.die){
                this.dieAnimate ++;
                if(this.dieAnimate == 30){
                    game.pause();
                }
                return;
            }
            //翅膀的煽动
            //如果当前的帧编号是5的倍数，那么换翅膀
            if (game.frameUtil.currentFrame % this.swingSpeed == 0) {
                this.swing++;
                if (this.swing > 2) {
                    this.swing = 0;
                }
            }

            //如果当前小鸟状态是0
            if(this.state == 0) {
                this.swingSpeed = 5;
                //dY再变化，就是越掉越快
                this.dY = 0.010 * Math.pow(game.frameUtil.currentFrame - this.dropStatFram, 2);
                //旋转的改变
                this.ro++;
            }else if(this.state == 1){
                //小鸟上升
                this.deltaY += 1;
                this.dY = -14 + this.deltaY;

                //小鸟上升的极限，就是上升那一瞬间，往上120px
                if(this.dY > 0){
                    //下落：
                    this.state = 0;
                    this.dropStatFram = game.frameUtil.currentFrame;
                }
            }
            //y的改变
            this.y += this.dY;

            //验收
            if(this.y < 0){
                this.y = 0;
            }
            //碰地板
            if(this.y > game.canvas.height - 50 - this.h){
                game.gameover();
            }
        },
        render: function () {
            //如果小鸟已经死了
            if(this.die){
                var row = parseInt(this.dieAnimate / 5);
                var col = this.dieAnimate % 5;
                game.ctx.drawImage(game.images.blood,325 * col , 138*row,325,138,this.x - 155,this.y + 50,325,138)
                return;
            }
            // 旋转公式
            game.ctx.save();
            game.ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
            game.ctx.rotate((Math.PI / 180) * this.ro);
            game.ctx.translate(-(this.x + this.w / 2 ), -( this.y + this.h / 2));
            game.ctx.drawImage(game.images.bird, this.swing * this.w, 0, this.w, this.h, this.x, this.y, this.w, this.h);
            game.ctx.restore();
        },
        //绑定监听
        bindClickListener : function(){
            var self = this;
            game.canvas.addEventListener("mousedown",function(){
                self.fly();
            });

            game.canvas.addEventListener("touchstart",function(e){
                e.preventDefault();
                self.fly();
            });
        }
    });
})();