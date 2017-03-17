$(document).ready(function(){
	var h = $(window).scrollTop();
	var wh = $(window).height() * 0.4;
	var once_check = true;

	function scroll_motion(h){


		var win_top = $(this).scrollTop();

		var obj1 = $('.main_section .w_cont .news_area li:first-child');
		var obj2 = $('.main_section .w_cont .news_area .news_02');
		var obj3 = $('.main_section .w_cont .news_area .news_03');
		var obj4 = $('.main_section .w_cont .ingredients_slide');
		var obj4_down = $('.ingredients_slide > dd .slides li.down');
		var obj4_up = $('.ingredients_slide > dd .slides li.up');
		var obj5 = $('.beauty_celeb ul .celeb01');
		var obj5_title = $('.beauty_celeb ul .celeb01 dl dt');
		var obj5_contents = $('.beauty_celeb ul .celeb01 dl dd');
		var obj6 = $('.beauty_celeb ul .celeb02');
		var obj6_title = $('.beauty_celeb ul .celeb02 dl dt');
		var obj6_contents = $('.beauty_celeb ul .celeb02 dl dd');
		var obj7 = $('.insta_area');
		var obj7_list = $('.insta_area ul li');

		var obj1_offset = $(obj1).offset().top-700;
		var obj2_offset = $(obj2).offset().top-700;
		var obj3_offset = $(obj3).offset().top-700;
		var obj4_offset = $(obj4).offset().top-800;
		var obj5_offset = $(obj5).offset().top-900;
		// 2016-10-19//수정(s)
		var obj6_offset = $(obj6).offset().top-900;
		// 2016-10-19//수정(e)
		var obj7_offset = $(obj7).offset().top-900;


		if ( win_top > wh ) {
	        
	        if ( once_check ) {
	            
	            var offset = $("#wrap").offset();
	            if($('html','body').is(':animated')) return false;
	            $('html, body').animate({scrollTop : offset.top}, 400);
	            once_check = false;
	        }
	     } else { 

	     		once_check = true;
	     }



		if(win_top >= obj1_offset) $(obj1).addClass('active');
		if(win_top >= obj2_offset) $(obj2).addClass('active');
		if(win_top >= obj3_offset) $(obj3).addClass('active');
		if(win_top >= obj4_offset){
			$(obj4).addClass('active');
			$(obj4_down).addClass('active');
			$(obj4_up).addClass('active');
		}

		if(win_top >= obj5_offset){
			$(obj5).addClass('active');
			$(obj5_title).addClass('active');
			$(obj5_contents).addClass('active');
		}

		if(win_top >= obj6_offset){
			$(obj6).addClass('active');
			$(obj6_title).addClass('active');
			$(obj6_contents).addClass('active');
		}

		if(win_top >= obj7_offset){
			$(obj7).addClass('active');
			$(obj7_list).addClass('active');
		}

	}


	$(window).scroll(function(){
		var h = $(window).scrollTop();
		scroll_motion(h);
	});




});