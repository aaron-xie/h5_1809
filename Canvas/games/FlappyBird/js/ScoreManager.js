/**
 * Created by Danny on 2015/9/10 15:57.
 */
(function(){
    //打分类
    window.ScoreManager = Class.extend({
        init : function(){
            this.score = 0;
        },
        addPoint : function(){
            this.score++;
        },
        update : function(){

        },
        render : function(){
            //分析当前的分数有几位
            var weishu = this.score.toString().length;

            //判断位数是奇数还是偶数
            //奇数
            //基准位置就是第一个数字的x值
            var jizhunwei = game.canvas.width / 2 - (40 * weishu) / 2;

            //循环语句，循环遍历每一位
            for(var i = 0 ; i < weishu ; i++){
                var zheyiwei = parseInt(this.score.toString().substr(i,1));
                render1weishu(zheyiwei,jizhunwei + i * 40 ,100);
            }
        }
    });

    //渲染一位数。
    function render1weishu(num,x,y){
        game.ctx.drawImage(game.images.number,40 * num , 0, 40,57,x,y,40,57);
    }
})();