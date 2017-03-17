$(document).ready(function(){

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


	/* 추상화 */

	/*

	nature_slide

	기능
	==============================

	1. 재생();
	2. 일시정지();
	3. pagination이동();
	4. 제품보기();
	5. 원료보기();

	*/



});