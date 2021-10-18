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
            480:{
                items:1.3,
            },
            768 : {
                items: 2,
            }
        }
    });
});