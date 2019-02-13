/**
 * Created by Danny on 2015/9/9 15:46.
 */
(function () {
    //静态资源管理类，这个类用于加载所有的静态图片、音乐。
    window.StaticResoucesUtil = Class.extend({
        init: function () {
            this.images = {};
        },
        //读取图片
        //调用loadImages有两个参数。
        //第一个是JSON，表示读取的列表
        //第二个是回调函数，回调函数又接受3个参数：已经加载的数量、总数量、图片对象
        loadImages: function (jsonURL, callback) {
            //备份this
            var self = this;
            //先要去读取json文件，用什么读？Ajax来读！
            var xhr = new XMLHttpRequest();
            //Ajax三步走
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                        //已经加载好的图片数量
                        var alreayLoadNumber = 0;
                        //将json文件里面的纯文本，转为json对象
                        var jsonObj = JSON.parse(xhr.responseText);
                        //循环语句，去挨个向每个图片发出请求
                        for (var i = 0; i < jsonObj.images.length; i++) {
                            // 创建一个图片
                            var image = new Image();
                            // 一旦设置src属性，请求发出
                            image.src = jsonObj.images[i].src;
                            // 编号
                            image.index = i;
                            image.onload = function () {
                                //让已经加载好的图片数量加1
                                alreayLoadNumber++;
                                //保存在自己的images属性里
                                self.images[jsonObj.images[this.index].name] = this;
                                //回调传进来的函数
                                callback(alreayLoadNumber, jsonObj.images.length, self.images);
                            }
                        }
                    }
                }
            }
            xhr.open("get", jsonURL, true);
            xhr.send(null);
        }
    });
})();