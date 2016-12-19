define(["text!./order.html"],function(orderPage){
	return {
		init:function(){
			$("#order").html(orderPage).show().siblings("div").hide();
		}
	}
})