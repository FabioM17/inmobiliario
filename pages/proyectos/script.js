function cambiarVista(boton, archivo) {
    document.getElementById('visor3d').setAttribute('src', archivo);
    document.querySelectorAll('.btn-vista').forEach(b => {
        b.classList.remove('activo');
    });
    boton.classList.add('activo');
}

const lightbox = document.getElementById('miLightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');
const imagenesGaleria = document.querySelectorAll('.media-gallery img');

imagenesGaleria.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('is-active');
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('is-active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('is-active');
    }
});