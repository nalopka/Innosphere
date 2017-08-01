$(document).ready(function(){
	var menu = ".menu";
	var mobile = ".mobile-menu";
	inView("header").on("exit", function() {
		$(menu).removeClass("change");
		$(mobile).removeClass("active");
	});
});