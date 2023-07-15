
// slider-js
$('.owl-carousel-first').owlCarousel({
    loop: true,
    margin: 11,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    navText: [
            '<i class="fa-solid fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa-solid fa-angle-right" aria-hidden="true"></i>'
        ],
    responsive: {
        100: {
            items: 2
        },
        
        500: {
            items: 3
        },
        768: {
            items: 4
        },

        1100: {
            items: 5
        },

        1300: {
            items: 5
        }
    }
})


// slider-js
$('.owl-carousel-second').owlCarousel({
    loop: true,
    margin: 11,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    navText: [
            '<i class="fa-solid fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa-solid fa-angle-right" aria-hidden="true"></i>'
        ],
    responsive: {
        100: {
            items: 1
        },
        
        500: {
            items: 1
        },
        1300: {
            items: 1
        }
    }
})


// slider-js
$('.owl-carousel-third').owlCarousel({
    loop: true,
    margin: 11,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    navText: [
            '<i class="fa-solid fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa-solid fa-angle-right" aria-hidden="true"></i>'
        ],
    responsive: {
        300: {
            items: 1
        },
        
        500: {
            items: 1
        },
        768: {
            items: 1
        },

        1100: {
            items: 1
        },

        1300: {
            items: 1
        }
    }
})