// من اجل تحديد مدة عرض السلايد

// $('.carousel').carousel({
//     interval: 1000
// });


$(function () {

    var winH = $(window).height();
    // upperH = $('.upper-bar').innerHeight();
    nevH = $('.navbar').innerHeight();
    $('.slider .carousel-item').height(winH - nevH);

    
});