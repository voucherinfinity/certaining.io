$(document).ready(function () {
    $('#certificationSlider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: false,
        margin: 20,
        autoplayTimeout: 50000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
$('#clientsSlider').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: false,
    margin: 40,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});
$('#testimonials').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: false,
    margin: 40,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
$('#blogs').owlCarousel({
    loop: true,
    navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
    dots: false,
    autoplay: true,
    autoplayHoverPause: false,
    margin: 40,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});
