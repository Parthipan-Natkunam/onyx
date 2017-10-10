$(function(){
	$('.nav-toggler').click(toggleNavMenu);
	$(window).resize(windowResizeActions);
});

function toggleNavMenu(){
	$('.nav-menu').slideToggle("fast");
}

function windowResizeActions(){
	if($(this).width() > 767) $('.nav-menu').show();
	else $('.nav-menu').hide();
}