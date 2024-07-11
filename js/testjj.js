// تحديد مدة عرض السلايدات 
$('#recipeCarousel').carousel({ interval: 3000 })


$('.carousel .carousel-item').each(function () {
    var minPerSlide = 3;
    var next = $(this).next();    //جلب معلومات العنصر التالي 
    // alert(next.text());
    // alert(next.length);
    if (!next.length)    //تعني false اذا العنصر موجود سيتم النفي وينتقل لخارج الif
    { next = $(this).siblings(':first'); }

    next.children(':first-child').clone().appendTo($(this));
    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();  //جلب العنصر 3 هواوي
        // alert(next.text()); 
        if (!next.length) { next = $(this).siblings(':first'); }
        next.children(':first-child').clone().appendTo($(this));
    }
});


