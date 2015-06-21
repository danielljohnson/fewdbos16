var photos = [{
    path: 'images/amazon.jpg',
    caption: 'Amazon'
},{
    path: 'images/argentina.jpg',
    caption: 'Argentina'
},{
    path: 'images/galapagos.jpg',
    caption: 'Galapagos'
},{
    path: 'images/chile.jpg',
    caption: 'Chile'
}];

var galleryHTML = '';
var indicators = '';

for (var i = 0; i < photos.length; i++) {
    if (i === 0) {
        galleryHTML += '<div class="item active">';

        indicators += '<li data-target="#carousel-example-generic" data-slide-to="' + i + '" class="active"></li>';
    } else {
        galleryHTML += '<div class="item">';

        indicators += '<li data-target="#carousel-example-generic" data-slide-to="' + i + '"></li>';
    }

    galleryHTML += '<img src="' + photos[i].path + '" alt="">';

    galleryHTML += '<div class="carousel-caption">';

    galleryHTML += '<p>' + photos[i].caption + '</p>';

    galleryHTML += '</div>';

    galleryHTML += '</div>';
}

$('.carousel-inner').html(galleryHTML);

$('.carousel-indicators').html(indicators);

$('.carousel').carousel();

