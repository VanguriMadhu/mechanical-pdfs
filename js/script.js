document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const quickLinks = document.querySelectorAll('.quick-links ul li a');
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav ul');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        quickLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            if (text.includes(query)) {
                link.parentElement.style.display = '';
            } else {
                link.parentElement.style.display = 'none';
            }
        });
    });

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });
});