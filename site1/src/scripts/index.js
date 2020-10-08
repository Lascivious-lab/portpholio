(() => {
    // slider1
    var swiper1 = new Swiper('#swiper-container-1', {
        direction: 'vertical',
        slidesPerView: 1,
        slidesPerGroup: 1,
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: false,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    //slider2
    var swiper2 = new Swiper('#swiper-container-2', {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '#swiper-button1',
            prevEl: '#swiper-button2',
        },
    });

    //section 3
    var swiper3 = new Swiper('#swiper-container-3', {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '#swiper-button-next-4',
            prevEl: '#swiper-button-prev-4',
        },
    });


    // slider4
    var swiper4 = new Swiper('#swiper-container-4', {
        slidesPerView: 1,
        spaceBetween: 100,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '#swiper-button-next-4',
            prevEl: '#swiper-button-prev-4',
        },
    });

})();