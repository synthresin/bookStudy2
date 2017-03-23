$(document).ready(function(){
	var h = $(window).scrollTop();
	scroll_motion(h);
	// window.onload = function()
	// {
	// 	//adding the event listerner for Mozilla
	// 	if(window.addEventListener)
	// 		document.addEventListener('DOMMouseScroll', moveObject, false);

	// 	//for IE/OPERA etc
	// 	document.onmousewheel = moveObject;
	// }

	// 변수선언

	function scroll_motion(h){


		var win_top = $(this).scrollTop();
		// console.log(win_top);

		// alert(win_top);
		var obj1 = $('.main_section .w_cont .news_area li:first-child');
		var obj2 = $('.main_section .w_cont .news_area .news_02');
		var obj3 = $('.main_section .w_cont .news_area .news_03');
		var obj4 = $('.main_section .w_cont .ingredients_slide');
		var obj4_down = $('.ingredients_slide > dd .slides li.down');
		var obj4_up = $('.ingredients_slide > dd .slides li.up');

		var obj1_offset = $(obj1).offset().top-700;
		var obj2_offset = $(obj2).offset().top-700;
		var obj3_offset = $(obj3).offset().top-700;
		var obj4_offset = $(obj4).offset().top-700;

		if(win_top >= obj1_offset) $(obj1).addClass('active');
		if(win_top >= obj2_offset) $(obj2).addClass('active');
		if(win_top >= obj3_offset) $(obj3).addClass('active');
		if(win_top >= obj4_offset){
			$(obj4).addClass('active');
			$(obj4_down).addClass('active');
			$(obj4_up).addClass('active');
		}
	}

	$(window).scroll(function(){
		var h = $(window).scrollTop();
		scroll_motion(h);
	});


	$('.scrolling').click(function(){
		scroll_motion(800);
	});

});