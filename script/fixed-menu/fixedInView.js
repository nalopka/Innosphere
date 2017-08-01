// SHOW MENU
$(document).ready(function() {
	 $(window).scroll(function() {
	var scrollTop = $(document).scrollTop();
	if (scrollTop > 500) {
		$(".fixed-menu").css("opacity", "1");
	} else { 
		$(".fixed-menu").css("opacity", "0");
	}
	});
});

// HIGHLIGHT ELEMENTS
$(document).ready(function() {

	inView.threshold(0.7);
	inView('.section').on('enter', function(el){
	var blockName = $(el).attr('id');
	$('.fixed-menu').find('a[href="#'+blockName+'"]').addClass("active-fixed");
	});

	inView('.section').on('exit', function(el){
	var blockName = $(el).attr('id');
	$('.fixed-menu').find('a[href="#'+blockName+'"]').removeClass("active-fixed");
	});
});