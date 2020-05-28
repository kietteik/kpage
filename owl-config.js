$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        425: {
            items: 2,
        },
        864: {
            items: 3,
        },
        1000: {
            items: 4,
            loop: false,
        },
    },
});
