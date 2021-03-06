"use strict";

// background color - navigation
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".navbar-scroll-background").css("background" , "rgba(49, 49, 49, 0.8)");
        }
        else{
            if ($(".navbar").hasClass("collapsed")) {
                $(".navbar-scroll-background").css("background", "transparent");
            }
        }
    })
})
// background color - navigation -end
$(".navbar-toggler").on("click", function(){
    if ($(".navbar").hasClass("collapsed")) {
        $(".navbar-scroll-background").css("background", "rgba(49, 49, 49, 0.8)");
        $(".navbar").removeClass("collapsed");
    } else {
        $(".navbar").addClass("collapsed");
    }
});

$(document).ready(function( $ ) {
    // subscribe:
    $("#buttonSubscribe").on("click", function(){
        var vemail = $("#email").val();
        if(vemail==='')
        {
            alert("Please fill out the form");
        }
        else if(vemail===''){alert('Email field is required')}
        else{
            $.get("php/email.php", { email:vemail },
                function(response, status){
                    $("#email").val('');
                    alert(response+"\n\nStatus : " + status);
                });
        }
    });

    // contact
    $("#buttonContact").on("click", function(){
        var vname = $("#InputName").val();
        var vemail = $("#InputEmail").val();
        var vmessage = $("#InputMessage").val();
        if(vname==='' || vemail==='' || vmessage==='')
        {
            alert("Please fill out the form");
        }
        else{
            $.get("php/contact.php", { name:vname,email:vemail,message:vmessage },
                function(response, status){
                    $("#InputName").val('');
                    $("#InputEmail").val('');
                    $("#InputMessage").val('');
                    alert(response+"\n\nStatus : " + status);
                });
        }
    });

    $('.tlt').textillate({
        // the default selector to use when detecting multiple texts to animate
        selector: '.texts',

        // enable looping
        loop: true,

        // sets the minimum display time for each text before it is replaced
        minDisplayTime: 2000,

        // sets the initial delay before starting the animation
        // (note that depending on the in effect you may need to manually apply
        // visibility: hidden to the element before running this plugin)
        initialDelay: 1,

        // set whether or not to automatically start animating
        autoStart: true,

        // custom set of 'in' effects. This effects whether or not the
        // character is shown/hidden before or after an animation
        inEffects: [],

        // custom set of 'out' effects
        outEffects: [ 'RotateOut' ],

        // in animation settings
        in: {
            // set the effect name
            effect: 'fadeIn',

            // set the delay factor applied to each consecutive character
            delayScale: 1.5,

            // set the delay between each character
            delay: 100,

            // set to true to animate all the characters at the same time
            sync: false,

            // randomize the character sequence
            // (note that shuffle doesn't make sense with sync = true)
            shuffle: true,

            // reverse the character sequence
            // (note that reverse doesn't make sense with sync = true)
            reverse: false,

            // callback that executes once the animation has finished
            callback: function () {}
        },

        // out animation settings.
        out: {
            effect: 'RotateOut',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: true,
            reverse: false,
            callback: function () {}
        },

        // callback that executes once textillate has finished
        callback: function () {},

        // set the type of token to animate (available types: 'char' and 'word')
        type: 'char'
    });

    // counterUp
    $('span.counter').counterUp({
       delay: 10, // the delay time in ms
       time: 1000 // the speed time in ms
    });

    // ScrollReveal
    window.sr = new ScrollReveal(); //{ reset: true }
    // sr.reveal('.row');

    $('section[data-type="background"]').each(function(){
// declare the variable to affect the defined data-type
        var $scroll = $(this);

        $(window).scroll(function() {
// HTML5 proves useful for helping with creating JS functions!
// also, negative value because we're scrolling upwards
            var yPos = -($(window).scrollTop() / $scroll.data('speed'));

// background position
            var coords = '50% '+ yPos + 'px';

// move the background
            $scroll.css({ backgroundPosition: coords });
        }); // end windowreveal scroll
    });  // end section function

    $("#owl").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });


    document.querySelector('.gallery');
    $('.carousel').carousel();


    if( $('.gallery').length ) {
        mixitup('.gallery', {
            controls: {
                scope: 'local'
            }
        });
    }

    // preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
});

