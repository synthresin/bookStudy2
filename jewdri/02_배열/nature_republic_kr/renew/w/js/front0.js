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
	var idx_size = $('.hidden.story_list > li').size();
	var exc = 0;
	var h = $(window).scrollTop();
	var now_slide = '.story_list';

	function start(){
	
		// alert(now_slide);
		if(now_slide=='.story_list'){
			$('.txt.promo_content').hide();
			$('.txt.story_content').show();
		}
		if(now_slide=='.promo_list'){
			$('.txt.story_content').hide();
			$('.txt.promo_content').show();
		}
		myVar = setTimeout(start,5000); // 1초 후 start를 재귀호출한다. 
		if( idx >= 0 && idx < idx_size && exc == 0 ){
			idx++;
			slide_auto();
		}
		if ( idx == idx_size){
			idx = 0;
			exc = 1;
		}
		if( exc == 1 && idx == 0){
			$('.main_visual .btn_slide ul li').eq(0).addClass('active');
			$('.main_visual .btn_slide ul li').eq(0).siblings().removeClass('active');
			$('.txt li').eq(0).addClass('active');
			$('.txt li').eq(0).siblings().removeClass('active');
			var replace_src = $(now_slide+' li').eq(idx).children('img').attr('src');
			$('.parallax-slider').attr('src',replace_src);
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
		// setTimeout(start,3000);
		$('.main_visual .btn_slide ul li').eq(idx).addClass('active');
		$('.main_visual .btn_slide ul li').eq(idx).siblings().removeClass('active');

		$('.txt.story_content li').eq(idx).addClass('active');
		$('.txt.story_content li').eq(idx).siblings().removeClass('active');
		$('.txt.promo_content li').eq(idx).addClass('active');
		$('.txt.promo_content li').eq(idx).siblings().removeClass('active');
		
		var w = $('.parallax-slider').css('width');
		var h = $('.parallax-slider').css('height');
		var top = $('.parallax-slider').css('top');
		var left = $('.parallax-slider').css('left');
		var src = $('.parallax-slider').attr('src');
		$('.parallax-mirror').css('background-position',left+' '+top);
		$('.parallax-mirror').css('background-size',w+' '+h);
		$('.parallax-mirror').css('background-image','url('+src+')');

		$('.parallax-slider').fadeOut('700', function(){
			var replace_src = $(now_slide+' li').eq(idx).children('img').attr('src');
			$('.parallax-slider').attr('src',replace_src);
			$('.parallax-slider').fadeIn('300');

		});
	}


	$('.slide_btn').click(function(){

		if(now_slide == '.story_list'){
			now_slide = '.promo_list';
			$('.txt.story_content').hide();
			$('.txt.promo_content').show();
		}else if(now_slide == '.promo_list'){
			now_slide = '.story_list';
			$('.txt.promo_content').hide();
			$('.txt.story_content').show();
		}
		// if(now_slide == '.promo_list') now_slide = '.story_list';
		// if(myVar) clearTimeout(myVar);
		idx = $(this).attr('idx');
		// myVar = setTimeout(start,0);
		slide_auto(idx);

		// 비디오처리
		if ($(this).hasClass('video')){
			// alert('video');
			if(myVar) clearTimeout(myVar);
			$('.btn_slide .btn_play').attr('class','btn_stop');
			clearTimeout(myVar);

		}

	});
});