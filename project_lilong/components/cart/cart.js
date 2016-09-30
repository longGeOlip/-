/**
 * Created by My on 2016/9/29.
 */
define([
        'text!./cart.html', '$css!./cart.css',
    ],
    function(html){

        function render(){

            $('.container').html(html);
            getAjax();
        }


        function getAjax(){
            $.get('url',function(){

            })
        }

        function bindEvent(){

        }


        return {
            render:render,
            bindEvent:bindEvent
        }





    }
)
