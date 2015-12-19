$(document).ready(function() {
    // nav toggle
    $('nav a#toggle').on('click', function() {
        $('nav ul.nav').slideToggle(function complete() {
            if ($(this).css('display') === 'block') {
                $('a#toggle').html("&#8964;"); // chevron down
            } else {
                $(this).removeClass('visible');
                $('a#toggle').html("&#8801;"); // triple bars
            }
        }).addClass('visible');
    });

    $('nav ul.nav li').on('click', function(event) {
        event.preventDefault();

        // animate scroll to top
        var href = $(this).children('a').attr('href');
        var element = $(href);
        var scrollTop = element.offset().top - 47.5; // align bottom of section h2 with navbar 
        $('html, body').animate({
            scrollTop: scrollTop
        }, 1000);
        window.location.hash = href;

        // hide mobile nav if visible
        if ($('nav ul.nav').hasClass('visible')) {
            $('nav ul.nav').slideToggle().removeClass('visible');
            // reset content to triple bars
            $('a#toggle').html("&#8801;");
        }
    });

    // if resize, hide mobile nav
    $(window).resize(function() {
        $('nav ul.nav').removeClass('visible');
        if (window.innerWidth > 550) { // desktop
            $('nav ul.nav').css({'display': 'block'});
        } else { // phablet or smaller
            $('nav ul.nav').css({'display': 'none'});
        }
    });

    $('body').scrollspy({
        target: 'nav',
        offset: 90 // this needs to match section.content h2 margin-top
    });
});
