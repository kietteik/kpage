$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 3,
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
$(".owl-carousel-navlist").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 3,
        },
        864: {
            items: 4,
        },
        1000: {
            items: 6,
            loop: false,
        },
    },
});
