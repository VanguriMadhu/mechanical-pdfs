document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const quickLinks = document.querySelectorAll('.quick-links ul li a');
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        quickLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            link.parentElement.style.display = text.includes(query) ? '' : 'none';
        });
    });

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const quickLinks = document.querySelectorAll('.quick-links ul li a');
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        quickLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            link.parentElement.style.display = text.includes(query) ? '' : 'none';
        });
    });

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Show popup after 3 seconds
    setTimeout(() => {
        popup.classList.add('show');
    }, 4000);

    // Close popup event
    closePopup.addEventListener('click', () => {
        popup.classList.remove('show');
    });

    // Close popup when clicking outside of the content
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('show');
        }
    });
});