document.addEventListener("DOMContentLoaded", function() {

        $('#slider1').slick({
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            initialslide: 1,
            centerMode: true,
            variableWidth: true,
            autoplay: false,
            prevArrow: $('#slider1_button1'),
            nextArrow: $('#slider1_button2'),
        });

        $('#slider2').slick({
            arrows: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            autoplay: false,
            autoplaySpeed: 2000,
            prevArrow: $('#slider2_button1'),
            nextArrow: $('#slider2_button2'),

        });

        $('#slider3').slick({
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('#slider3_button1'),
            nextArrow: $('#slider3_button2'),
            dots: true
        });

        $('.slide .slick-slide').eq(2).addClass('slick-active');

        
		  $("footer").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
