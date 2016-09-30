/**
 * Created by My on 2016/9/29.
 */
//由于较大，单独定义一个模块
define(['backbone'],function(){

    var Router = Backbone.Router.extend({

        routes: {
            //前边的是自定义，  后边的是调用的函数的名字
            "home":  "home",
            "store": "store",
            "order":"order",
            "cart":"cart",
            "mine":"mine",
            //进行网址后边的适配
            "*actions":"defaultAction"
        },
        //每一个对应一个函数
        home: function() {
            require(['./components/home/home.js',],function(home){
                home.render();
            })
        },
        store: function() {
            require(['./components/store/store.js',],function(store){
                store.render();
            })
        },
        order: function() {
            require(['./components/order/order.js',],function(order){
                order.render();
            })
        },
        cart: function() {
            require(['./components/cart/cart.js',],function(cart){
                cart.render();
            })
        },
        mine: function() {
            require(['./components/mine/mine.js',],function(mine){
                mine.render();
            })
        },
        defaultAction:function(){
            location.hash = "home";
        }

    });
    //创造一个路由
    var router = new Router();

    return router;

})


