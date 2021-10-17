$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        nav: true,
        loop: true,
        margin: 20,
        center: true,
        mergeFit: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
            },
            769 : {
                items: 2,
            }
        }
    });
});