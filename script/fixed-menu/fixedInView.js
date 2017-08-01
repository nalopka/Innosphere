$(document).ready(function() {
	inView.offset(50);
	inView("header").on("exit", function() {
		$(".fixed-menu").css("opacity", "1");
	});
	inView("header").on("enter", function() {
		$(".fixed-menu").css("opacity", "0");
	});
});
$(document).ready(function() {

	inView.threshold(0.7);
	inView('.section').on('enter', function(el){
	console.log($(el));
	var blockName = $(el).attr('id');
	$('.fixed-menu').find('a[href="#'+blockName+'"]').addClass("active-fixed");
	});

	inView('.section').on('exit', function(el){
	console.log($(el));
	var blockName = $(el).attr('id');
	$('.fixed-menu').find('a[href="#'+blockName+'"]').removeClass("active-fixed");
	});
});