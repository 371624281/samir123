define(["text!./home.html", "css!./swiper-3.4.0.min.css"], function(homePage) {

	return {
		init: function() {

			$("#index").html(homePage).show().siblings("div").hide();

			$.ajax({
				type: "get",
				url: "data/home.json",
				async: true,
				success: function(data) {
					$("#moban").load("templete/homeTmp.html", function() {
						var htmlstr = baidu.template('homeTmp', data),
							htmlstr1 = baidu.template("homeTmp1", data),
							htmlstr2 = baidu.template("homeTmp2", data),
							htmlstr3 = baidu.template("homeTmp3", data);
						$("#ico_meu").html(htmlstr);
						$("#column").html(htmlstr1);
						$("#swiper-wrapper").html(htmlstr2),
							$("#tuijian").html(htmlstr3);
						$(this).children().remove()
							//异步问题(swiper插件的初始化)
						var mySwiper = new Swiper('.swiper-container', {
							autoplay: 2000, //可选选项，自动滑动(时间:毫秒)
							loop: true, //循环
							pagination: '.swiper-pagination', //分页器
							mousewheelControl: true,
							autoplayDisableOnInteraction: false,
						});
						//为全局的add上点击事件
						var count = 0;
						$('#order_count').text(count)
						$('.add_food').on('click', function(e) {
							count++
							$('#order_count').text(count)
							var cImg = $(this).parent().find('img').clone()
							cImg.attr('class', 'cimg')
							var x = (e.pageX - 20) + 'px',
								y = (e.pageY)+'px';
							cImg.css({
								left: x,top:y
							})
							console.log(x+','+y)
							cImg.appendTo($(this).parent().find('.img_warp'))
//							var clearImg = setInterval(function(){
//								clearInterval(clearImg);
//								cImg.remove()
//							},800)	s
						})
					})

				}
			});

		},

	}
});