// Inicializa scripts cuando el DOM este cargado
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa Swiper
  const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 24,
    breakpoints: {
      // Breakpoints
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });

  // Menú Responsive
  const menuToggle = document.getElementById('menuToggle');
  const menuList = document.getElementById('mainMenu');
  const iconMenu = document.getElementById('icon_menu');

  menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('hidden');
    iconMenu.classList.toggle('fa-xmark');
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

  // Ver Más Toggle Btn Exp.
  const toggleButtons = document.querySelectorAll('.viewMoreToggle');

  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const article = button.closest('article');
      const job_desc = article.querySelector('.job-desc');
      const isCollapsed = job_desc.classList.contains('line-clamp-2');

      // Alterna texto en dropdown limita a 2 líneas
      job_desc.classList.toggle('line-clamp-2');
      // Icono dentro de los botónes
      const icon_arrow = button.querySelector('i');
      // Cambia texto e ícono
      button.childNodes[0].textContent = isCollapsed ? 'Ver menos ' : 'Ver más ';
      icon_arrow.classList.toggle('fa-chevron-down');
      icon_arrow.classList.toggle('fa-chevron-up');
    });
  });
});
