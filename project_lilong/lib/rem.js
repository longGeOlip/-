/**
 * Created by My on 2016/9/26.
 */
(function(window){
    var winW = document.documentElement.clientWidth || document.body.clientWidth;
    document.documentElement.style.fontSize = winW / 10 + "px";
    window.onresize = function(){
        var winW = document.documentElement.clientWidth || document.body.clientWidth;
        document.documentElement.style.fontSize = winW / 10 + "px";
    }
})(window);

