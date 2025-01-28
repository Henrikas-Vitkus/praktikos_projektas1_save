let currentSlideIndex = 0;
const images = Array.from(document.querySelectorAll('.moteru_galerija img'));

function openModal(index) {
    const modal = document.getElementById('slideshowModal');
    const modalImage = document.getElementById('slideshowImage');

    currentSlideIndex = index;
    modalImage.src = images[index].src;

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('slideshowModal').style.display = 'none';
}

function changeSlide(step) {
    currentSlideIndex += step;

    if (currentSlideIndex < 0) {
        currentSlideIndex = images.length - 1;
    } else if (currentSlideIndex >= images.length) {
        currentSlideIndex = 0;
    }

    const modalImage = document.getElementById('slideshowImage');
    modalImage.src = images[currentSlideIndex].src;
}

// Close modal when clicking outside the image
document.getElementById('slideshowModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('slideshowModal')) {
        closeModal();
    }
});