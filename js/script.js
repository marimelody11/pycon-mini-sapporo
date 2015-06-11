$(function(){
function glnav(){
	var nav = $('.glnav');
	var winWidth = $(window).width();
	if(winWidth < 768){
		nav.hide();
		nav.find('a').on('click',function(){nav.hide();});
	} else {
		nav.show();
	}
}
glnav();
$(window).resize(function(){glnav();});

$('.sp-menu-btn').on('click',function(){
	$('.glnav').slideToggle(400);
});

//scroll
$('a[href^=#]').click(function() {
	var speed = 800;
	var href = $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top;
	$('body,html').animate({scrollTop:position}, speed);
	return false;
});


//sidenav
var nav= $('.pagetop');
offset = nav.offset();
if(nav.css('height') != '100px'){
	nav.hide();
}
$(window).scroll(function () {
	if(nav.css('height') != '100px'){
		if($(window).scrollTop() > 450) {
			nav.fadeIn(200);
		} else {
			nav.fadeOut(200);
		}
	}
});


});