document.addEventListener("DOMContentLoaded", function() {
  const heroes = document.querySelectorAll('.hero');

  heroes.forEach(hero => {
    hero.addEventListener('mouseenter', () => {
      hero.style.transition = 'transform 0.3s';
      hero.style.transform = 'scale(1.05)';
    });

    hero.addEventListener('mouseleave', () => {
      hero.style.transition = 'transform 0.3s';
      hero.style.transform = 'scale(1)';
    });
  });
});
