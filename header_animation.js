let lastScrollY = window.scrollY; // Keeps track of the last scroll position
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scrolling down: hide header
        header.classList.add('hidden');
    } else {
        // Scrolling up: show header
        header.classList.remove('hidden');
    }

    // Update lastScrollY to the current position
    lastScrollY = currentScrollY;
});