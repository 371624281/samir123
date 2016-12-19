define(["text!./mine.html"],function(minePage){
	
	return{
		init : function(){
			
			$("#mine").html(minePage).show().siblings("div").hide();
		}
	}
})