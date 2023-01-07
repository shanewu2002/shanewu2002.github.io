var menuOpen = false;
// var scrollTop = $('html').scrollTop();
// var windowHeight = $(window).height();


function showHideMenuItems (event) {
	event.stopPropagation();
	let menuItems = $('nav > a:not(:first-of-type)');
	if (menuOpen) {
		menuItems.removeClass('open');
		$('nav > a > span').removeClass('rotated');
		menuOpen = false;
	}
	else {
		menuItems.addClass('open');
		$('nav > a > span').addClass('rotated');
		menuOpen = true;
	}
}

function hideMenuItems () {
	let menuItems = $('nav > a:not(:first-of-type)');
	// menuItems.css('display', 'none');
	menuItems.removeClass('open');
	$('nav > a > span').removeClass('rotated');
	menuOpen = false;
}

function checkRestoreSecs () {
	let vpHeight = $(window).height();
	let scrollTop = $(window).scrollTop();
	let sections = $('section');
	sections.each(function (index) {
		let sectionTop = $(this).offset().top;
		if(vpHeight + scrollTop - 50 > sectionTop) {
			$(this).addClass('scrolled');
		}
	});
}

window.onload = function() {
	checkRestoreSecs();
 	$(window).on('scroll', function() {
 		let scrollTop = $('html').scrollTop();
 		let windowHeight = $(window).height();
 		if(scrollTop > windowHeight * 0.25) {
 			// $('div#backToTop_theme').addClass('display');
 			// $('div#backToTop_bio').addClass('display');
 			$('div#backToTop_theme').show(500);
 			$('div#backToTop_bio').show(500);
 		}
 		else {
 			// $('div#backToTop_theme').removeClass('display');
 			// $('div#backToTop_bio').removeClass('display');
 			$('div#backToTop_theme').hide(500);
 			$('div#backToTop_bio').hide(500);
 		}
 	});

 	$('div#backToTop_theme').on('click', function() {
 		alert('Why So Serious?');
 		console.log('Why So Serious?');
 		$('html, body').delay(0).animate({'scrollTop': 2000}, 500);
 		$('html, body').delay(0).animate({'scrollTop': 2500}, 500);
 		$('html, body').delay(0).animate({'scrollTop': 1500}, 500);
 		$('html, body').delay(0).animate({'scrollTop': 2000}, 500);
 		$('html, body').delay(500).animate({'scrollTop': 2500}, 500);
 		$('html, body').delay(0).animate({'scrollTop': 0}, 500);
 	});
 	$('div#backToTop_bio').on('click', function() {
 		$('html, body').animate({'scrollTop': 800}, 500);
 		$('html, body').animate({'scrollTop': 0}, 500);
 	});
	$(document).on('scroll', checkRestoreSecs);
 	$('nav > a:first-of-type').on('click', showHideMenuItems);
	$(document).on('click', hideMenuItems);
	$('img#joker').on('click', whySoSerious);
};