

//启动文件   配置文件
require.config({
    //路径
    paths:{
        //进行命名
        'jquery':'./lib/jquery',
        'swiper':'./lib/swiper-3.3.1.jquery.min',
        'backbone':'./lib/backbone',
        'underscore':'./lib/underscore',
        'text':'./lib/text',
        '$css':'./lib/css',
        'rem':'./lib/rem'
    }
});

//怎样使用
//引一下模块
require(['jquery','swiper','backbone','./router.js'],function($,a,Backbone){

    Backbone.history.start();
})
