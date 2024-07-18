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