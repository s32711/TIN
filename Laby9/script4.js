const obrazki = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const przycisk_zamknij = document.getElementById('zamknij');

obrazki.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        lightboxImg.src = this.src;
        lightbox.classList.add('active');
    });
});

przycisk_zamknij.addEventListener('click', function() {
    lightbox.classList.remove('active');
});