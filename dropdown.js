const dropdownIcon = document.querySelector('.fa-bars');
const dropdownMenu = document.querySelector('.dropdown-content')


dropdownIcon.addEventListener('click', () => {
    if (dropdownMenu.style.display === 'block'){
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});