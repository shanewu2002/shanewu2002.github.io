var menuOpen = false;
var translate = false;

function showHideMenuItems (event) {
	event.stopPropagation();
	let menuItems = $('nav > a:not(:first-of-type)');
	if (menuOpen) {
		// menuItems.css('display', 'none');
		menuItems.removeClass('open');
		$('nav > a > span').removeClass('rotated');
		menuOpen = false;
	}
	else {
		// menuItems.css('display', 'inline');
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

function Translate (event) {
	let articles = $('article');
	if (translate) {
		articles.eq(0).addClass('show');
		articles.eq(1).removeClass('show');
		translate = false;
	} else {
		articles.eq(0).removeClass('show');
		articles.eq(1).addClass('show');
		translate = true;
	}
}

window.onload = function () {
	$('nav > a:first-of-type').on('click', showHideMenuItems);
	$('button').on('click', Translate);
	$(document).on('click', hideMenuItems);
}