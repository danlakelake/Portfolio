// Inicializar scripts cuando el DOM este cargado
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa Swiper
  const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });

  // Menú navegación
  const nav = document.getElementById('mainMenu');

  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        nav.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'z-50');
        nav.classList.replace('mt-10', 'mt-5');
      } else {
        nav.classList.remove('fixed', 'top-0', 'left-0', 'w-full', 'z-50');
        nav.classList.replace('mt-5', 'mt-10');
      }
    });
  }

  // Emojis
  const nameLink = document.getElementById('nameLink');
  const emoji = document.getElementById('emoji');

  nameLink.addEventListener('mouseenter', () => {
    emoji.textContent = '😁';
  });

  nameLink.addEventListener('mouseleave', () => {
    emoji.textContent = '👋🏻';
  });
});
