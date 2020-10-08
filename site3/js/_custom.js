document.addEventListener("DOMContentLoaded", function() {

	$('.slider').slick({
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2000,
	  });

		  $("footer").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
