// function SwitchMenu(x) {
// 			x.classList.toggle("change");
// 			document.getElementById("dropMenu").classList.toggle("show");
// 		}
// function showAbout() {
// 	document.getElementById("mobile-about").classList.toggle("show");
// }

$(document).ready(function(){
  $(".link").click(function(){
  var navlink = $(this).attr("data-link");
  var link = ("[data-link-dest="+ navlink +"]");
  $(link).toggleClass("active");
  });
   
});
$(document).ready(function(){ 
	$("body").on("click", ".menu", function(){
		$(this).toggleClass("change");
	});
});