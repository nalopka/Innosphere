// SHOW MENU
$(document).ready(function() {

	var fixMenu = $(".fixed-menu");
	
	 $(window).scroll(function() {
		var scrollTop = $(document).scrollTop();
		if (scrollTop > 500) {
			fixMenu.css("opacity", "1");
		} else { 
			fixMenu.css("opacity", "0");
		}
	});


// HIGHLIGHT ELEMENTS


	inView.threshold(0.7);
	inView('.section').on('enter', function(el){
		var blockName = $(el).attr('id');
		fixMenu.find('a[href="#'+blockName+'"]').addClass("active-fixed");
	});

	inView('.section').on('exit', function(el){
		var blockName = $(el).attr('id');
		fixMenu.find('a[href="#'+blockName+'"]').removeClass("active-fixed");
	});
});