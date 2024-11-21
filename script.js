// Scroll Fade-in Effect
document.addEventListener('scroll', () => {
    const fadeSection = document.querySelector('.fade-up');
    const sectionTop = fadeSection.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
        fadeSection.classList.add('visible');
    }
});
