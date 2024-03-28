var images = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var text = document.querySelector('.text')
var aslose = document.querySelector('.aslose')
var galleryImg = document.querySelector('.gallery_inner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0

function showGallery() {
    if (currentIndex == 0) {
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
    }
}

if (currentIndex === images.length - 1) {
    text.classList.add('hide');
} else {
    text.classList.remove('hide');
}

galleryImg.src = images[currentIndex].src;


images.forEach((item, index) => {
item.addEventListener('click', function() {
    currentIndex = index;
    showGallery();
    gallery.classList.add('show');
})
})

close.addEventListener('click', function() {
gallery.classList.remove('show');
})

document.addEventListener('keydown', function(e) {
if (e.keycode == 27) {
    gallery.classList.remove('show');
}
})

prev.addEventListener('click', function() {
if (currentIndex > 0) {
    currentIndex--;
    showGallery();
}
})

text.addEventListener('click', function() {
if (currentIndex < images.length - 1) {
    currentIndex++;
    showGallery();
}
})
