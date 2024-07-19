document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const quickLinks = document.querySelectorAll('.quick-links ul li a');
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
// Search functionality
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    quickLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        link.parentElement.style.display = text.includes(query) ? '' : 'none';
    });
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Display popup after 4 seconds
setTimeout(() => {
    popup.classList.add('show');
}, 3000);

// Close popup
closePopup.addEventListener('click', () => {
    popup.classList.remove('show');
});
});