$(function() {
// mnu
	$('.toggle-mnu').click(function(){
		$(this).toggleClass('on');
		$('.header-top__nav').slideToggle();
	});
// scroll-down
	$('.arrow-bottom').click(function(){
		$('html, body').animate({ scrollTop: $('.header').height()}, 'slow');
		return false;
	});

// scrol-top
	$('.top').click(function(){
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});
// mask
	$("#phone").mask("+7(999) 999-99-99");
	$("#phone-popup").mask("+7(999) 999-99-99");

// magnific-popup
	$('.header-left__btn').magnificPopup();
});

