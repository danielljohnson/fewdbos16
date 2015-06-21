var photos = [{
    path: 'images/amazon.jpg',
    caption: 'Amazon'
},{
    path: 'images/argentina.jpg',
    caption: 'Argentina'
},{
    path: 'images/galapagos.jpg',
    caption: 'Galapagos'
}];

var galleryHTML = '';

for (var i = 0; i < photos.length; i++) {
    if (i === 0) {
        galleryHTML += '<div class="item active">';
    } else {
        galleryHTML += '<div class="item">';
    }

    galleryHTML += '<img src="' + photos[i].path + '" alt="">';

    galleryHTML += '<div class="carousel-caption">';

    galleryHTML += '<p>' + photos[i].caption + '</p>';

    galleryHTML += '</div>';

    galleryHTML += '</div>';
}

$('.carousel-inner').html(galleryHTML);

$('.carousel').carousel();
