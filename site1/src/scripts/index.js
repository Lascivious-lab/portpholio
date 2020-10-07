(() => {
    // slider1
    // var swiper1 = new Swiper('#swiper-container-1', {
    //     direction: 'vertical',
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //     // mousewheel: true,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    // });

    // slider2
    // var swiper2 = new Swiper('#swiper-container-2', {
    //     slidesPerView: 4,
    //     spaceBetween: 30,
    //     slidesPerGroup: 1,
    //     loop: true,
    //     loopFillGroupWithBlank: true,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '#swiper-button1',
    //         prevEl: '#swiper-button2',
    //     },
    // });

    //section 3
    // var swiper3 = new Swiper('.swiper-container', {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    // });


    // slider4
    var swiper4 = new Swiper('#swiper-container-4', {
        slidesPerView: 1,
        spaceBetween: 1,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

})();