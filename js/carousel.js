$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    items:4,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
});

function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var map2 = new google.maps.Map(document.getElementById("googleMap2"),mapProp);
};

$(document).ready(function () {
    $('#btnLogin').click(function (e) {
        e.preventDefault();
        $('#message').fadeIn();
    });

});
$(document).ready(function () {
    $('#close').click(function (e) {
        e.preventDefault();

        $('#message').fadeOut();
    });

});