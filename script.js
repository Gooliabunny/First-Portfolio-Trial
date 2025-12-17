const scrollButtons = document.querySelectorAll('[data-scroll]');

let scrolling = (button) => {
    const targetId = button.getAttribute('data-scroll');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        targetElement.style.color = '#006600';
      }, 100);
      setTimeout(() => {
        targetElement.style.color = '#d9d9d9';
      }, 600);
    }
}

scrollButtons.forEach(button => {
  button.addEventListener('click', () => scrolling(button));
});
