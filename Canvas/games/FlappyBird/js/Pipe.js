/**
 * Created by Danny on 2015/9/10 11:38.
 */
(function(){
    //管子类
    window.Pipe = Class.extend({
        init : function(){
            //0表示管子向上、1表示管子向下。
            this.type = _.random(0,1);
            //管子的高度
            this.h = _.random(100 ,game.canvas.height / 2);
            //x位置
            this.x = game.canvas.width;
            //y位置
            this.y = this.type == 0 ? game.canvas.height - this.h - 44 : 0;
            //宽度
            this.w = 148;
            //速度
            this.speed = 3;
        },
        pause : function(){
            this.speed = 0;
        },
        update : function(){
            this.x -= this.speed;
            if(this.x < -this.w){
                game.pipeArray = _.without(game.pipeArray,this);
            }

            //碰撞检测
            if(game.bird.x > this.x - game.bird.w && game.bird.x < this.x + this.w){
                //此时小鸟进入到了this表示的这个管子的领空
                if(this.type == 0){
                    //向上的管子
                    if(game.bird.y >= this.y - game.bird.h){
                        //碰撞了
                        game.gameover();
                        return;
                    }
                }else if(this.type == 1){
                    //向下的管子
                    if(game.bird.y <= this.h){
                        //碰撞了
                        game.gameover();
                        return;
                    }
                }
            }

            //加分
            if(!this.done && this.x < canvas.width / 2 - this.w){
                game.scoreManager.addPoint();
                this.done = true;
            }
        },
        render : function(){
            if(this.type == 0){
                //向上的管子
                game.ctx.drawImage(game.images.pipe0,0,0,this.w,this.h,this.x,this.y,this.w,this.h);
            }else if(this.type == 1){
                //向下的管子
                game.ctx.drawImage(game.images.pipe1,0,1664 - this.h,this.w,this.h,this.x,this.y,this.w,this.h);
            }
        }
    });
})();