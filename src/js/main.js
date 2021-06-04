$(document).ready(function (){
    $("#team").owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        center: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });
    let leads=$("#leads")
    leads.owlCarousel({
        items: 2,
        loop: true,
        center: true,
        margin: 70,
        dots: false,
        nav: false,
        navContainerClass: 'leadsNav'
    })
// Go to the next item
    $('.prevBtn').click(function() {
        leads.trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.nextBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        leads.trigger('prev.owl.carousel', [300]);
    })
});
