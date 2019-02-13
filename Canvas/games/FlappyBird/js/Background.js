/**
 * Created by Danny on 2015/9/9 16:19.
 */
(function () {
    //背景类，就是所有的平铺背景
    //一会这个类将有三个实例：房子、大树、地板
    window.Background = Class.extend({
        //初始化
        init: function (params) {
            this.image = params.image;
            this.width = params.width;
            this.height = params.height;
            this.speed = params.speed;
            this.y = params.y;
            //队首的位置
            this.x = 0;

            //图片个数，图片要能够平铺，所以个数就是画布总宽度除以图片宽度
            this.amount = parseInt(game.canvas.width / this.width) + 1;
        },
        pause : function(){
            this.speed = 0;
        },
        update: function () {
            this.x -= this.speed;
            if (this.x <= -this.width * this.amount) {
                this.x = 0;
            }
        },
        //渲染，这个函数，每帧执行
        render: function () {
            //绘制这个图片，绘制2倍的图片数量
            for (var i = 0; i < this.amount * 2; i++) {
                game.ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x + this.width * i, this.y, this.width, this.height);
            }
        }
    });
})();