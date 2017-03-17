$(document).ready(function(){

	// main_visual{s}
	
	// main_visual{e}

	var o = 0;
	var o2 = 0;
	var o3 = 0;
	var o4 = 0;
	var o5 = 0;
	var o6 = 0;
	var o7 = 0;
	var o7_up = 1;
	var a = 100;
	var b = 200;
	var c = 400;
	var d = 200;
	var f = 200;
	var g = 410;
	var j = 200;
	var j_up = 0;
	var top = 0;
	var top2 = 0;

	$(window).bind('mousewheel DOMMouseScroll', function(e){

		var delta = e.originalEvent.wheelDelta || e.originalEvent.detail*-1;
		
		var elem01 = $('.main_section .w_cont .news_area li:first-child');
		var elem02 = $('.main_section .w_cont .news_area .news_02');
		var elem03 = $('.main_section .w_cont .news_area .news_03');
		var elem04 = $('.main_section .w_cont .ingredients_slide');
		var elem05 = $('.beauty_celeb ul .celeb01');
		var elem06 = $('.beauty_celeb ul .celeb02');
		var elem07 = $('.insta_area');

		if ( delta < 0 ) {
			var h = $(window).scrollTop();
			if(top>-2276){
				top = top - 100;
				top2 = top2 + 80;
			}

			$('.parallax-mirror').css('top',top);
			$('.parallax-slider').css('top',top2);
			

			if(h>250){
				
				// news_section
				if(a>0){
					a = a-20;
					o = o+0.2;
					elem01.css('opacity',o);
					elem01.css('top',a);
				}

				if(h>400){
					if( b>0){
						b = b-40;
						o2 = o2+0.3;
						elem02.css('top',b);
						elem02.css('opacity',o2);
					}
				}
				if(h>450){
					if( c>207){
						c = c-32.2;
						o3 = o3+0.3;
						elem03.css('top',c);
						elem03.css('opacity',o3);
					}
				}

				// ingredients
				if(h>350){
					if( d>0 ){
						d = d-20;
						o4 = o4+0.2;
						elem04.css('top',d);
						elem04.css('opacity',o4);
					}
				}

				// beauty celb
				if(h>700){
					if( f>0 ){
						f = f-30;
						o5 = o5+0.2;
						elem05.css('top',f);
						elem05.css('opacity',o5);
					}
				}

				if(h>1400){
					if( g>210 ){
						g = g-30;
						o6 = o6+0.1;
						elem06.css('top',g);
						elem06.css('opacity',o5);
					}
				}

				if(h>1600){
					if( j>0 ){
						j = j-30;
						if(o7<=1){
							o7 = o7+0.2;
						}
						elem07.css('top',j);
						elem07.css('opacity',o7);
					}
				}


			}
			
			
			
		}
		
		else if ( delta > 0 ) {

			var h = $(window).scrollTop();
			if(top<0){
				top = top + 100;
			}
			if(top2>0){
				top2 = top2 - 80;
			}
			
			

			$('.parallax-mirror').css('top',top);
			$('.parallax-slider').css('top',top2);


			if(h<2500){
				if( j<200 ){
					j = j+30;
					o7 = o7-0.2;
					elem07.css('top',j);
					elem07.css('opacity',o7);
					console.log(j);
				}
			}
			if(h<1800){
				if( g<410 ){
					g = g+30;
					o6 = o6-0.1;
					elem06.css('top',g);
					elem06.css('opacity',o6);

				}
			}

			if(h<1500){
				if( f<200 ){
					f = f+30;
					o5 = o5-0.2;
					elem05.css('top',f);
					elem05.css('opacity',o5);

				}
			}

			if(h<1200){
				if( d<200 ){
					d = d+30;
					o4 = o4-0.2;
					elem04.css('top',d);
					elem04.css('opacity',o4);

				}
			}

			if(h<1000){
				if( c<400 ){
					c = c+32.2;
					o3 = o3-0.3;
					elem03.css('top',c);
					elem03.css('opacity',o3);

				}
			}

			if(h<900){
				if( b<200){
					b = b+40;
					o2 = o2-0.3;
					elem02.css('top',b);
					elem02.css('opacity',o2);
				}
			}

			if(h<800){
				if( a<100){
					a = a+20;
					o = o-0.2;
					elem01.css('opacity',o);
					elem01.css('top',a);
				}
			}


		}
	});

});