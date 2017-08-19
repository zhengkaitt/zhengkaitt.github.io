//
//
////	首页轮播图
//
//	var imgUl = $('.ad-position-img-list ul');
//	var eachImg = $('.ad-position-img-list ul li');
//	
//	
//	var width = $('.ad-position-img-list>ul li>a>img').width();
//	
////	function scroll(){
////		imgUl.animate({"margin-left":-width+'px'},function(){
////			eachImg.eq(0).appendTo(imgUl)
////			imgUl.css({"margin-left":0})
////				})
////			}
//// 		setInterval(scroll,3000);
// 		
//  
//  var imgBtn = $('.ad-position>ul>li');
//  var imgLis = $('ad-position-img-list');
//  var ul = $('.ad-position-img-list>ul');
//  var firstImgLis = ul.children[0];
//  
//  var timer = null;
//  var index = 0;
//  index = $(this).index();
//  
//		imgBtn.click(function(){
//		$(this).addClass('ad-position-active').siblings().removeClass('ad-position-active');
//		var index = $(this).index();
//		
//		console.log(index);
//		nowIndex = index;
//	
//		ul.css('margin-left',-nowIndex*width+'px');
//
//	});

//	首页滚动图片
	$(document).ready(function () {

                var i = 0;

                var clone = $(".banner .img li").first().clone();//克隆第一张图片
                $(".banner .img").append(clone);//复制到列表最后
                var size = $(".banner .img li").size();
//             	console.log(size);

                for (var j = 0; j < size-1; j++) {
                    $(".num").append("<li></li>");
                }

                $(".num li").first().addClass("ad-position-active");

                /*自动轮播*/

                var t = setInterval(function () { i++; move();},2000);

                /*鼠标悬停事件*/

                $(".banner").hover(function () {
                    clearInterval(t);//鼠标悬停时清除定时器
                }, function () {
                    t = setInterval(function () { i++; move(); }, 2000); //鼠标移出时清除定时器
                });


			var width = $('.ad-position-img-list>ul li>a>img').width();

                /*鼠标滑入原点事件*/

                $(".num li").hover(function () {

                    var index = $(this).index();//获取当前索引值
                    i = index;
                    $(".banner .img").stop().animate({ left: -index * width }, 500);
                    $(this).addClass("ad-position-active").siblings().removeClass("ad-position-active");
                });



                /*向左按钮*/
                $(".banner .btn_l").click(function () {
                    i++;
                    move();
                })

                
                /*向右按钮*/
                $(".banner .btn_r").click(function () {
                    i--;
                    move();
                })

                /*移动事件*/
                function move() {
                	var width = $('.ad-position-img-list>ul li>a>img').width();
                    if (i == size-1) {
                        $(".banner .img").css({ left: 0 });
                        i = 0;
                    }
                    if (i == -1) {
                        $(".banner .img").css({ left: -(size - 1) * width });
                        i = size - 1;
                    }
                    $(".banner .img").stop().animate({ left: -i * width }, 500);

                    if (i == size - 1) {
                        $(".num li").eq(0).addClass("ad-position-active").siblings().removeClass("ad-position-active");
                    } else {
                        $(".num li").eq(i).addClass("ad-position-active").siblings().removeClass("ad-position-active");
                    }
                }
            });
            

		//导航栏
		$('.footer-img1').click(function(){
			$(this).css('background-image','url(images/homePage/nav1-1.png)');
			$('.footer-img2').css('background-image','url(images/homePage/nav2.png)');
			$('.footer-img3').css('background-image','url(images/homePage/nav3.png)');
			$('.footer-img4').css('background-image','url(images/homePage/nav4.png)');
		});
		$('.footer-img2').click(function(){
			$(this).css('background-image','url(images/homePage/nav2-1.png)');
			$('.footer-img1').css('background-image','url(images/homePage/nav1.png)');
			$('.footer-img3').css('background-image','url(images/homePage/nav3.png)');
			$('.footer-img4').css('background-image','url(images/homePage/nav4.png)');
		});
		$('.footer-img3').click(function(){
			$(this).css('background-image','url(images/homePage/nav3-1.png)');
			$('.footer-img2').css('background-image','url(images/homePage/nav2.png)');
			$('.footer-img1').css('background-image','url(images/homePage/nav1.png)');
			$('.footer-img4').css('background-image','url(images/homePage/nav4.png)');
		});
		$('.footer-img4').click(function(){
			$(this).css('background-image','url(images/homePage/nav4-1.png)');
			$('.footer-img2').css('background-image','url(images/homePage/nav2.png)');
			$('.footer-img3').css('background-image','url(images/homePage/nav3.png)');
			$('.footer-img1').css('background-image','url(images/homePage/nav1.png)');
		});

//	美食滚动图片
		$(document).ready(function () {
				
				
                var i = 0;

                var clone = $(".food-header-img-list .img li").first().clone();//克隆第一张图片
//              $(".food-header-img-list .img").append(clone);//复制到列表最后
                var size = $(".food-header-img-list .img li").size();
               	console.log(size);

                for (var j = 0; j < size-1; j++) {
                    $(".food-header-num").append("<li></li>");
                }

                $(".food-header-num li").first().addClass("ad-position-active");

                /*自动轮播*/

                var t = setInterval(function () { i++; move();},2000);

                /*鼠标悬停事件*/

                $(".food-header-img-list").hover(function () {
                    clearInterval(t);//鼠标悬停时清除定时器
                }, function () {
                    t = setInterval(function () { i++; move(); }, 2000); //鼠标移出时清除定时器
                });


			var width = $('food-header-img-list>.img>li').width();
			console.log(width);
                /*鼠标滑入原点事件*/

                $(".num li").hover(function () {

                    var index = $(this).index();//获取当前索引值
                    i = index;
                    $(".food-header-img-list .img").stop().animate({ left: -index * width }, 500);
                    $(this).addClass("ad-position-active").siblings().removeClass("ad-position-active");
                });



                /*向左按钮*/
                $(".food-header-img-list .btn_l").click(function () {
                    i++;
                    move();
                })

                
                /*向右按钮*/
                $(".food-header-img-list .btn_r").click(function () {
                    i--;
                    move();
                })

                /*移动事件*/
                function move() {
                	var width = $('.food-header-img-list>ul li>a>img').width();
                    if (i == size-1) {
                        $(".food-header-img-list .img").css({ left: 0 });
                        i = 0;
                    }
                    if (i == -1) {
                        $(".food-header-img-list .img").css({ left: -(size - 1) * width });
                        i = size - 1;
                    }
                    $(".food-header-img-list .img").stop().animate({ left: -i * width }, 500);

                    if (i == size - 1) {
                        $(".food-header-num li").eq(0).addClass("ad-position-active").siblings().removeClass("ad-position-active");
                    } else {
                        $(".food-header-num li").eq(i).addClass("ad-position-active").siblings().removeClass("ad-position-active");
                    }
                }
            });
            
			