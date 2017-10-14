$(function(){
	addTopBodyMargin();
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

function addTopBodyMargin(){
	if($('nav').hasClass('fixed-nav')){
		$('body').addClass('non-overlap-body');
	}
	$('body').show();
}