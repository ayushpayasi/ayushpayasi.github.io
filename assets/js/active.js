(function ($) {
    "use strict";
	
	$(document).on('ready', function() {

	    //Home Slider
        var homeslider = $("#slider-wrapper");

        homeslider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: true,
            smartSpeed:1000,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            dots: true,
            mouseDrag: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        });

        homeslider.on("translate.owl.carousel", function(){
            var layer = $("[data-animation]");
            layer.each(function() {
                var anim_name = $(this).data("animation");
                $(this).removeClass("animated " + anim_name).css("opacity", "0");
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data("delay");
            $(this).css("animation-delay", anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data("duration");
            $(this).css("animation-duration", anim_dur);
        });

        homeslider.on("translated.owl.carousel", function () {
            var layer = homeslider.find(".owl-item.active").find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data("animation");
                $(this).addClass("animated " + anim_name).css("opacity", "1");
            });
        });

        //Testimonial Slider
        $("#testimonial-wrapper").owlCarousel({
            items:3,
            smartSpeed:1000,
            loop: true,
            margin: 30,
            dots: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: true,
            autoplayTimeout: 4000,
            responsive : {

                0 : {
                    items:1
                },
                768 : {
                    items:2
                },
                992 : {
                    items:3
                }
            }
        });


        //Isotop Filter
        $(".isotpo-mobile-title").on("click", function(){
            $(this).toggleClass("active").next(".work-filter-btn").slideToggle();
            return false;
        });

        $(".work-filter-btn li").on("click", function() {
            if($(this).hasClass("active")) return false;
            $(".isotpo-mobile-title, .work-filter-btn li").removeClass("active");
            $(this).addClass("active");
            $(".isotpo-mobile-title").text($(this).find(".title-text").text());
            if($(".isotpo-mobile-title").is(":visible")) $(".work-filter-btn").slideUp();
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });
        });
        var $grid = $(".project-item-wrapper").isotope({
            itemSelector: ".single-project-item",
            percentPosition: true,
            masonry: {
                columnWidth: 1
            }
        });


        //Image Popup
        $( ".image-popup-link" ).magnificPopup({
            type:"image",
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });

        //Counter
        $(".count-number").counterUp({
            delay: 10,
            time: 2000
        });

        //Blog Carousel
        $(".blog-carousel-items").owlCarousel({
            items:3,
            smartSpeed:1000,
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: true,
            autoplayTimeout: 4000,
            responsive : {

                0 : {
                    items:1,
                    margin: 0,
                },
                768 : {
                    items:2
                },
                992 : {
                    items:3
                }
            }
        });

        //Client / Brand Carousel
        $(".xzopro-client").owlCarousel({
            loop:true,
            nav:false,
            smartSpeed:1000,
            margin: 30,
            dots: false,
            autoplay:true,
            autoplayTimeout: 3000,
            responsive:{
                0:{
                    items: 2,
                    margin: 0,
                },
                480:{
                    items: 3
                },
                768:{
                    items: 4
                },
                992:{
                    items: 5
                }
            }
        });

        //Mobile Menu
        $("#primary-menu").slicknav({
            allowParentLinks: false,
            prependTo: '#mobile-menu-wrap',
            label: ''
        });


        //Sticky Menu
        $(".top-fixed-menu").sticky({
            stopSpacing: 0
        });

        // Header Scroll
        $(window).on("scroll",function(){
            var pagescroll = $(window).scrollTop();
            if(pagescroll > 100){
                $(".header-style-2 .header-menu-area").addClass("scrolled");

            }else{
                $(".header-style-2 .header-menu-area").removeClass("scrolled");
            }
        });

        //Team Carousel
        $(".team-carousel-wrap").owlCarousel({
            items:3,
            smartSpeed:1000,
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: true,
            autoplayTimeout: 4000,
            responsive : {

                0 : {
                    items:1,
                    margin: 0,
                },
                768 : {
                    items:2
                },
                992 : {
                    items:3
                }
            }
        });


        //Search trigger
        $(".search-trigger i").on("click", function(e) {
            $(".search-wrapper").addClass("show");
            e.stopPropagation();
        });

        $(document).on("click", function(e) {
            if ($(e.target).is(".search-form") === false && $(e.target).is(".search-field") === false) {
                $(".search-wrapper").removeClass("show");
            }
        });


        //Skill bar
        $(".skillbar").each(function() {
            $(this).appear(function() {
                $(this).find(".progress-fill-bar").animate({
                    width:$(this).attr("data-percent")
                },3000);
            });
        });

        // Skill Counter Up
        $(".skill-percent-count").counterUp({
            delay: 10,
            time: 2500
        });

        //Video Popup
        $(".video-play-button").magnificPopup({
            type: 'video'
        });

        //Project Image Gallery Carousel
        $(".project-gallery-wrap").owlCarousel({
            items:1,
            smartSpeed:1000,
            loop: true,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: true,
            autoplayTimeout: 4000,
        });
	});

    $(window).on ('load', function (){
        // preloader js
        setTimeout(function() {
            $('.site').addClass('loaded');
        }, 500);
    })

})(jQuery);