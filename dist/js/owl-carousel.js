// Home page carousel
$('.portfolio-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    autoplay: true,
    dots: false,
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:2,
        },
        768:{
            loop: true,
            items:3,
        },
        1025:{
            items:5,
        }
    }
});

// simgle portfolio page carousel one
$('.single-portfolio-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        1025:{
            items:2
        }
    }
});

// simgle portfolio page carousel two
$('.portfolio-carousel-two').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        1025:{
            items:5
        }
    }
});