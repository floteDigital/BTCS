/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

//Google Maps js
$(function () {

    function initMap() {

        var location = new google.maps.LatLng(53.388870, -2.915799);
        
        var myStyles =[
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                      { visibility: "off" }
                ]
            }
        ];
        
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            scrollwheel: false,
            zoom: 17,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: myStyles
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        
        var markerImage = '../img/BTCSLogoPinYellow.png';
        
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });
        
        var contentString = '<div class="info-window">' +
                '<h3>Find Us</h3>' +
                '<div class="info-content">' +
                '<p>We are situated at the corner of the world famous Penny Lane and Smithdown Road; just across the road from Penny Lane Wine Bar and St. Barnabas church.</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });
        
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
        
        google.maps.event.addListenerOnce(map, 'idle', function() {
            setTimeout(function() {
                // wait some more (...)
                google.maps.event.trigger(marker, 'click'); //still doesn't work
            },10);
        });
        
    }

    google.maps.event.addDomListener(window, 'load', initMap);
});
