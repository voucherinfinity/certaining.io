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
   

        $(document).ready(function(){
    
            var current_fs, next_fs, previous_fs; //fieldsets
            var opacity;
            
            $(".next").click(function(){
                
                current_fs = $(this).parent();
                next_fs = $(this).parent().next();
                
                //Add Class Active
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                
                //show the next fieldset
                next_fs.show(); 
                //hide the current fieldset with style
                current_fs.animate({opacity: 0}, {
                    step: function(now) {
                        // for making fielset appear animation
                        opacity = 1 - now;
            
                        current_fs.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        next_fs.css({'opacity': opacity});
                    }, 
                    duration: 600
                });
            });
            
            $(".previous").click(function(){
                
                current_fs = $(this).parent();
                previous_fs = $(this).parent().prev();
                
                //Remove class active
                $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
                
                //show the previous fieldset
                previous_fs.show();
            
                //hide the current fieldset with style
                current_fs.animate({opacity: 0}, {
                    step: function(now) {
                        // for making fielset appear animation
                        opacity = 1 - now;
            
                        current_fs.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        previous_fs.css({'opacity': opacity});
                    }, 
                    duration: 600
                });
            });
            
            $('.radio-group .radio').click(function(){
                $(this).parent().find('.radio').removeClass('selected');
                $(this).addClass('selected');
            });
            
            $(".submit").click(function(){
                return false;
            })
                
            });





    //yes radio button in become test center
        document.addEventListener('DOMContentLoaded', function() {
            const yesRadio = document.getElementById('yesRadio');
            const noRadio = document.getElementById('noRadio');
            const videoDiv = document.getElementById('videoDiv');

            yesRadio.addEventListener('change', function() {
                if (yesRadio.checked) {
                    videoDiv.classList.remove('showbutton');
                }
            });

            noRadio.addEventListener('change', function() {
                if (noRadio.checked) {
                    videoDiv.classList.add('showbutton');
                }
            });
        });


//select all exam in become test center 

function toggleSelectAll() {
    var selectAllCheckbox = document.getElementById('selectAll');
    var checkboxes = document.querySelectorAll('.exam_center_list .checkbox');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = selectAllCheckbox.checked;
    });
}


//split button in login page

$('#splitbutton').click(function(e) {
    if (e.clientX < $(this).offset().left + $(this).outerWidth() / 2)
        console.log('left');
    else
        console.log('right');
});
    


//-----login form-----//
document.getElementById('btnradio1').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registerForm').style.display = 'none';
    }
});

document.getElementById('btnradio2').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
    }
});




//-------- student panel -------//

function showActiveDiv(divId) {
    // Hide all divs
    var divs = document.getElementsByClassName('student-panel');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.remove('active');
    }

    // Show the active div
    var activeDiv = document.getElementById(divId);
    activeDiv.classList.add('active');
}



//----------dsjkhgbkfdjg--------//

function toggleFields() {
    const occupation = document.getElementById('ddCenterCountryd').value;
    const companyName = document.getElementById('companyNamed');
    const designation = document.getElementById('designationd');
    
    if (occupation === '-student') {
        companyNamed.disabled = true;
        designationd.disabled = true;
    } else {
        companyNamed.disabled = false;
        designationd.disabled = false;
    }
}

//--------------candidate panel examdropdown hinde --------//
document.getElementById('candidatecounty').addEventListener('change', function() {
    var examSection = document.getElementById('exam-section');
    if (this.value !== "Please select Country *") {
        examSection.style.display = 'block';
    } else {
        examSection.style.display = 'none';
    }
});