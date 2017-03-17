$(document).ready(function(){

	$("html,body").animate({scrollTop: 0}, 100);

	/*** smooth scrolling ***/
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 500);
			return false;
		  }
		}
	  });
	});


	start();
	var idx = 0;
	var exc = 0;
	var h = $(window).scrollTop();

	function start(){  
		myVar = setTimeout(start,4000); // 1초 후 start를 재귀호출한다. 
		if( idx >= 0 && idx < 4 && exc == 0 ){
			idx++;
			slide_auto();
		}
		if ( idx == 4){
			idx = 0;
			exc = 1;
		}
		if( exc == 1 && idx == 0){
			$('.main_visual .btn_slide ul li').eq(0).addClass('active');
			$('.main_visual .btn_slide ul li').eq(0).siblings().removeClass('active');
			$('.txt li').eq(0).addClass('active');
			$('.txt li').eq(0).siblings().removeClass('active');
			$('.parallax-slider').attr('src','../../img/tmp/main_img_visual00.jpg');
			exc = 0;
			idx = 0;

		}
	}

	

	$('.main_visual .btn_slide>ul>li>a').click(function(){
		$('.btn_play').attr('class','btn_stop');
		clearTimeout(myVar);
		idx = $(this).parents('li').index();
		slide_auto(idx);
	});

	$('.main_visual .btn_slide>a').click(function(){

		if($(this).hasClass('btn_play')){
			$(this).attr('class','btn_stop');
			clearTimeout(myVar);
		}else if($(this).hasClass('btn_stop')){
			$(this).attr('class','btn_play');
			start();
		}
	});



	function slide_auto(){
		$('.main_visual .btn_slide ul li').eq(idx).addClass('active');
		$('.main_visual .btn_slide ul li').eq(idx).siblings().removeClass('active');

		$('.txt li').eq(idx).addClass('active');
		$('.txt li').eq(idx).siblings().removeClass('active');

		$('.parallax-mirror').fadeOut('slow', function(){
			$('.parallax-slider').attr('src',replace_src);
			$('.parallax-mirror').fadeIn('fast');

		});

		var replace_src = $('.blind li').eq(idx).children('img').attr('src');

	}

	$('.slide_btn').click(function(){

		clearTimeout(myVar);
		idx = $(this).attr('idx');
		slide_auto(idx);
	});
});