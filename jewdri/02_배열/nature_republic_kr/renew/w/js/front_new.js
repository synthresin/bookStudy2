$(document).ready(function(){

	// $("html,body").animate({scrollTop: 0}, 100);

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


	myVar = setTimeout(start,5000); 
	var idx = 0;
	// var exc = 0;
	var pro_list_num
	var story_list_num
	var idx_size = 0;
	var h = $(window).scrollTop();
	var now_slide = '.story_list';

	function start(){
		pro_list_num = $('.promo_list li').size();
		story_list_num = $('.story_list li').size();
		// alert(story_list_num);
		if(now_slide=='.story_list'){
			// $('.txt.promo_content').hide();
			// $('.txt.story_content').show();
			idx_size = story_list_num;
		}
		if(now_slide=='.promo_list'){
			// $('.txt.story_content').hide();
			// $('.txt.promo_content').show();
			idx_size = pro_list_num;
		}


		if(myVar) clearTimeout(myVar);
		myVar = setTimeout(start,5000); // recursion

		// if( idx >= 0 && idx <= idx_size){
		// 	idx++;
		// 	slide_auto();
		// } else if ( idx > idx_size ){
		// 	idx = 0;
		// 	// slide_auto();
		// }
		var st = $('.promo_content li').eq(prod_idx).hasClass('video');
		var vd = $('.promo_content li').eq(prod_idx).find('iframe').attr('id');
		// alert(prod_idx);
		if(st) {
			videoStop( player[ vd ] );
		}else{
			// alert('비디오없음');
		}

		if( idx >= 0 && idx < idx_size ){
			idx++;
			slide_auto();
		}
		if ( idx >= idx_size){
			idx = 0;
			slide_auto();
			// exc = 1;
		}
		// if( exc == 1 && idx == 0){
		// 	$('.main_visual .btn_slide ul li').eq(0).addClass('active');
		// 	$('.main_visual .btn_slide ul li').eq(0).siblings().removeClass('active');
		// 	if(now_slide == '.story_list'){
		// 		$('.txt.story_content li').eq(idx).addClass('active');
		// 		$('.txt.story_content li').eq(idx).siblings().removeClass('active');
		// 	}else if(now_slide == '.promo_list'){
		// 		$('.txt.promo_content li').eq(idx).addClass('active');
		// 		$('.txt.promo_content li').eq(idx).siblings().removeClass('active');
		// 	}
		// 	var replace_src = $(now_slide+' li').eq(idx).children('img').attr('src');
		// 	$('.parallax-slider').attr('src',replace_src);
		// 	exc = 0;
		// 	idx = 0;

		// }
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
		// $('.main_visual .btn_slide ul li').eq(idx).addClass('active');
		// $('.main_visual .btn_slide ul li').eq(idx).siblings().removeClass('active');


		// });



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
			$('.parallax-slider').fadeIn('300', function(){
				// alert('test');

				if(now_slide == '.story_list'){
					$('.main_visual .btn_slide.story ul li').eq(idx).addClass('active');
					$('.main_visual .btn_slide.story ul li').eq(idx).siblings().removeClass('active');

					$('.txt.story_content li').eq(idx).addClass('active');
					$('.txt.story_content li').eq(idx).siblings().removeClass('active');
				}else if(now_slide == '.promo_list'){
					$('.main_visual .btn_slide.promo ul li').eq(idx).addClass('active');
					$('.main_visual .btn_slide.promo ul li').eq(idx).siblings().removeClass('active');

					$('.txt.promo_content li').eq(idx).addClass('active');
					$('.txt.promo_content li').eq(idx).siblings().removeClass('active');
					if($('.slide_content .txt li.active').hasClass('video')){
						$('.slide_content .txt li.active .vd_player').show();
						if(myVar) clearTimeout(myVar);
						$('.btn_slide .btn_play').attr('class','btn_stop');
						clearTimeout(myVar);
					}else{
						$('.vd_player').hide();
					}
				}

				

			});

		});
	}



	var prod_idx = 0;
	var slide_btn = $('.slide_btn');
	var story_idx;
	var promo_idx;
	

	$('.slide_btn.story').click(function(){
		story_idx = $(this).parents('li').attr('idx');
	});

	$('.slide_btn.promo').click(function(){
		promo_idx = $(this).parents('li').attr('idx');
	});
	
	// alert(slide_idx);

	$('.slide_btn').click(function(){

		var slide_idx = $('.promo_content li[idx=' +  story_idx +  ']').eq(0).index();
		var slide_promo = $('.story_content li[idx=' +  promo_idx +  ']').eq(0).index();

		if($(this).hasClass('story')){
			if(story_idx == undefined){
				return false;
			}
			now_slide = '.promo_list';
			$('.btn_slide.story').hide();
			$('.btn_slide.promo').show();

			$('.story_content').addClass('active');
			$('.promo_content').addClass('active');

			$('.story_content li').removeClass('active');
			$('.promo_content li').removeClass('active');

			$('.promo_content li').eq(story_idx).addClass('active');
			idx = slide_idx;
			slide_auto();

			// $('.promo_content li[idx="' +  slide_idx +  '"]').eq(0).addClass('active');
			// idx = slide_idx;
			// alert(story_idx)
		}else if($(this).hasClass('promo')){
			// alert(promo_idx);
			if(promo_idx == undefined){
				idx=0;
				slide_auto();
			}
			now_slide = '.story_list';

			$('.btn_slide.story').show();
			$('.btn_slide.promo').hide();

			$('.story_content').removeClass('active');
			$('.promo_content').removeClass('active');

			$('.story_content li').removeClass('active');
			$('.promo_content li').removeClass('active');

			$('.promo_content li').eq(promo_idx).addClass('active');
			idx = slide_promo;
			slide_auto();

		}
		

		// video control
		if ($(this).hasClass('video')){
			// alert('video');
			if(myVar) clearTimeout(myVar);
			$('.btn_slide .btn_play').attr('class','btn_stop');
			clearTimeout(myVar);

		}

	});
	// promotion_page -> brand
	$('.nav_brand').click(function(){

		var nav_brand_idx = $('.promo_content li.active').attr('idx');
		var story_slide = $('.story_content li[idx=' +  nav_brand_idx +  ']').eq(0).index();
		// var story_slide;

		if(now_slide=='.story_list'){
			return false;
		}
		else if(now_slide=='.promo_list'){

			// alert(story_slide);
			// alert(nav_brand_idx);
			now_slide = '.story_list';

			$('.btn_slide.story').show();
			$('.btn_slide.promo').hide();

			$('.story_content').removeClass('active');
			$('.promo_content').removeClass('active');

			$('.story_content li').removeClass('active');
			$('.promo_content li').removeClass('active');

			if(nav_brand_idx == undefined){
				idx = 0;
				slide_auto();
			}else if(nav_brand_idx){

				$('.promo_content li').eq(nav_brand_idx).addClass('active');
				idx = story_slide;
				slide_auto();
			}
		}
	});


});