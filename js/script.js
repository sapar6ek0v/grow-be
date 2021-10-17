$('.testimonials__card-boxes').slick({
    dots: true,
    centerMode: true,
    centerPadding: "400",
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});