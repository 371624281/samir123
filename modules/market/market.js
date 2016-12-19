define(["text!./market.html"], function(homePage) {

	return {
		init: function() {

			$("#market").html(homePage).show().siblings("div").hide();
			$.ajax({
				type: "get",
				url: "data/market.json",
				async: true,
				success: function(data) {
					$("#moban").load("templete/marketTmp.html", function() {
						var htmlStr = baidu.template('marketTmp', data);
							htmlStr2 = baidu.template("marketTmp2", {
								data: data.data.products[104749]
							});

						$('#market_left').html(htmlStr)
						$('#market_right').html(htmlStr2);
						
					//懒加载中首先将图片的class名改为统一的(class="lazy")
					//将src的属性换成data-original
					//函数.lazyload调用懒加载函数
					//函数参数中加入container:select来指定滚动条的相对元素
						$(function() {
								$('img.lazy').lazyload({
									container: $("#market_right")
								})
							})
							//为左侧列表上点击事件
						$('.shop_type li:first').addClass('xz');
						$(".shop_type").on('click', 'li', function() {
							$(this).addClass('xz').siblings('li').removeClass('xz')
							var idNum = data.data.categories[$(this).index()].id;
							var xx = data.data.products[idNum];
							var htmlStr2 = baidu.template("marketTmp2", {
								data: xx
							});
							$('#market_right').html(htmlStr2);
							$(function() {
								$('img.lazy').lazyload(
									{
									container: $("#market_right")
								}
									)
							})
						})
					})
				}
			})
		}
	};
})