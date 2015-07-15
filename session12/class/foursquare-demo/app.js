$('form').on('submit', function(e) {
    e.preventDefault();

    var near = $('input[name="near"]').val();
    var query = $('input[name="query"]').val();

    $('.venues').empty();

    $.get('https://api.foursquare.com/v2/venues/search?client_id=NKWJSREZJH33S0O3UIYTMTRYMSVRRBGMPXB1RI3HS12FNPUJ&client_secret=CM1PQPLNRYXL04UDNPAWTANBCMBJ1YBOKRDM4GJT0LNAY0EJ&v=20130815&near='+near+'&4&query='+query, function(data) {

        var venues = data.response.venues;

        for (var i = 0; i < venues.length; i++) {
            $('.venues').append('<li>'+venues[i].name+'</li>');
        }
    });
});