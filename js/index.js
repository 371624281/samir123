$(function(){
	var time=setInterval(function(){
		$(".bootstrap").hide()
		$('.index_main').show()
		clearInterval(time)
	},1000);
	
	$(".footer").on('click','a',function(){
		switch ($(this).index()){
			case 0:
				$(this).find('i').addClass("sy-1");
				$(this).parent().find('i').removeClass("cs-1")
				$(this).parent().find('i').removeClass("gwc-1")
				$(this).parent().find('i').removeClass("my-1")
				break;
				case 1:
				$(this).find('i').addClass("cs-1");
				$(this).parent().find('i').removeClass("sy-1")
				$(this).parent().find('i').removeClass("gwc-1")
				$(this).parent().find('i').removeClass("my-1")
				
				
				break;
				case 2:
				$(this).find('i').addClass("gwc-1");
				$(this).parent().find('i').removeClass("sy-1")
				$(this).parent().find('i').removeClass("cs-1")
				$(this).parent().find('i').removeClass("my-1")
				break;
				case 3:
				$(this).find('i').addClass("my-1");
				$(this).parent().find('i').removeClass("sy-1")
				$(this).parent().find('i').removeClass("gwc-1")
				$(this).parent().find('i').removeClass("cs-1")
				break;
			default:
				break;
		}
	})
	
})
