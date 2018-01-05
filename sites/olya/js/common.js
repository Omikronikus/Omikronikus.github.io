$(function() {
var height = $('main').height();
$('.aside').height(height);
var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop: true,
		autoplay: true,
		items: 2,
		margin: 10,
		dots: true
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
$(window).on('load', function(){
	$('.wrapper').delay(3000).fadeOut('slow');
})
