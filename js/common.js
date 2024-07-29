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


$type="text/javascript">
        document.addEventListener("DOMContentLoaded", function() {
            document.querySelectorAll('.dropdown-menu').forEach(function(element) {
                element.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
            })
            if (window.innerWidth < 992) {

                // close all inner dropdowns when parent is closed
                document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown) {
                    everydropdown.addEventListener('hidden.bs.dropdown', function() {
                        // after dropdown is hidden, then find all submenus
                        this.querySelectorAll('.submenu').forEach(function(everysubmenu) {
                            // hide every submenu as well
                            everysubmenu.style.display = 'none';
                        });
                    })
                });

                document.querySelectorAll('.dropdown-menu a').forEach(function(element) {
                    element.addEventListener('click', function(e) {

                        let nextEl = this.nextElementSibling;
                        if (nextEl && nextEl.classList.contains('submenu')) {
                            // prevent opening link if link needs to open dropdown
                            e.preventDefault();
                            console.log(nextEl);
                            if (nextEl.style.display == 'block') {
                                nextEl.style.display = 'none';
                            } else {
                                nextEl.style.display = 'block';
                            }

                        }
                    });
                })
            }
        });
   