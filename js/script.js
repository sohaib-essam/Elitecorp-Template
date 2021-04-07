$(function () {

    "use strict";

    //adjust slider height

    let winH = $(window).height(),

        upperH = $(".upperbar").innerHeight(),

        navH = $(".navbar").innerHeight();

    $(".slider, .carousel-item").height(winH - (upperH + navH));

    //featured work shuffle images
    $(".featured-work ul li").on("click", function() {

        $(this).addClass("active").siblings().removeClass("active");

        if($(this).data("class") === 'all') {

            $(".shuffle-images .col-md").css("opacity", 1);

        } else {

            $(".shuffle-images .col-md").css("opacity", ".08");

            $($(this).data("class")).parent().css("opacity", 1);

        }

    })

});