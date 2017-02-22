$(function(){
	$(".tabbott>div").eq(1).hide();
	$(".tabli").children().click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var index=$(this).index();
		$(".tabbott>div").eq(index).show().siblings("div").hide();
	})
});
