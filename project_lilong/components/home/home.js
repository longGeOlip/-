
define([
        'text!./home.html',
        '$css!./home.css',
        '$css!../swiper/swiper-3.3.1.min.css',
        '../../lib/swiper-3.3.1.jquery.min.js'
    ],
    function(html) {

        function render() {

            $('.container').html(html);
            getAjax();
            slider();
        }
        return {
            render:render,
            bindEvent:bindEvent
        }
    })
        //轮播图
        function slider(){
            var mySwiper = new Swiper('.slider', {
                autoplay:2000,//可选选项，自动滑动
                loop:true,
//      分页符class名
                pagination : '.swiper-pagination',
                paginationClickable :true,
//      设置回调函数 监听事件
                onAutoplayStop:function(swiper){
//      停止后调用
                    swiper.startAutoplay();
                }
            })

        }
        //调用
        //ajax
        function getAjax(){
            $.get('http://www.vrserver.applinzi.com/aixianfeng/apihome.php',function(data, textstatus, xhr){
                var word = data.substring(0,data.indexOf("<script"));
                var imgInfo = (JSON.parse(word)).data.slide;
                console.log(JSON.parse(word).data.slide.length)
                for(var i = 0;i<imgInfo.length;i++) {
                    var imgAdress = imgInfo[i].activity.img;
                    //console.log(imgInfo[i])
                    $(".rollImg").eq(i).html("<img src=" + imgAdress + " alt=''>");
                }
                slider();
                console.log($(".rollImg"))

                //console.log(word);
                //console.log((data.slide));
                //var img = data.slide;



            })
        }

        function bindEvent(){

        }
//        一楼商品信息拼接模板
//            <div class="main2_footer">
//                <div class="main2_left">
//                    <div class="main2_left_img">
//                        <img src="components/img/main2_banner2.jpg" alt="">
//                    </div>
//                    <h4>蜂觅·15度蜜梨</h4>
//                    <div class="main2_left_left2">
//                        <span>精选</span>
//                        <span>买一赠一</span>
//                    </div>
//                    <p>400-500g/盒</p>
//                    <div class="main2_left_footer">
//                        <span>￥14.6</span>
//                        <span><s>￥16</s></span>
//                    </div>
//                    <div class="main2_left_add">
//                    +
//                    </div>
//                </div>
//            </div>



