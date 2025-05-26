//1. Placeholder for interactivity or enhancements
console.log('Modern CV loaded successfully.');
//2. Apply animations on DOM load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.sidebar').classList.add('slide-in-left');
  document.querySelector('.main').classList.add('slide-in-right');

  //3. Fade in each section on scroll
  const sections = document.querySelectorAll('.section');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
      const position = section.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        section.classList.add('fade-in');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); //4. Initial check
});
