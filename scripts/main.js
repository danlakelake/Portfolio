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

  // Menú Web y Toggle Idioma
  const nav = document.getElementById('mainMenu');
  const langMenuDiv = document.getElementById('langMenuDiv');

  if (nav && langMenuDiv) {
    window.addEventListener('scroll', () => {
      const isDesktop = window.innerWidth >= 768;
      const isScrolled = window.scrollY > 80;

      // Aplica en cualquier tamaño
      if (isScrolled) {
        nav.classList.add('fixed', 'top-5');
        langMenuDiv.classList.add('fixed');

        // Aplica solo en desktop
        if (isDesktop) {
          nav.classList.add('left-0', 'w-full', 'z-1');
          langMenuDiv.classList.add('z-2', 'top-5', 'right-[14vw]');
          langMenuDiv.classList.remove('bg-white');
        } else {
          //Aplica solo en responsive
          langMenuDiv.classList.add('bg-white', 'z-2', 'top-0', 'py-3');
          nav.classList.add('w-full', 'bg-white', 'top-14', 'z-1');
        }
      } else {
        // Se remueven clases en todos los tamaños
        nav.classList.remove('fixed', 'top-5', 'left-0', 'w-full', 'z-1', 'bg-white');
        langMenuDiv.classList.remove('fixed', 'top-5', 'right-[14vw]', 'bg-white', 'py-3');
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

      // Cambia texto e ícono manejando multiples idiomas
      const verMas = button.querySelector('[data-i18n="ver_mas"]');
      const verMenos = button.querySelector('[data-i18n="ver_menos"]');

      // Muestra u oculta según el estado de collapse
      verMas.style.display = isCollapsed ? 'none' : '';
      verMenos.style.display = isCollapsed ? '' : 'none';

      // Cambia icono segun el estado del collapse
      icon_arrow.classList.toggle('fa-chevron-down');
      icon_arrow.classList.toggle('fa-chevron-up');
    });
  });
});
