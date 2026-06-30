(() => {
  const menuButton = document.querySelector('.menu-button');
  const siteNav = document.querySelector('.site-nav');
  if (menuButton && siteNav) {
    menuButton.addEventListener('click', () => {
      const open = siteNav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const filterButtons = document.querySelectorAll('.filter-button');
  const groups = document.querySelectorAll('.portfolio-group');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach(btn => btn.classList.toggle('active', btn === button));
      filterButtons.forEach(btn => btn.setAttribute('aria-pressed', String(btn === button)));
      groups.forEach(group => {
        group.classList.toggle('hidden', filter !== 'all' && group.dataset.group !== filter);
      });
    });
  });

  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const image = lightbox.querySelector('img');
    const caption = lightbox.querySelector('.lightbox-caption');
    const close = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const source = item.querySelector('img');
        image.src = source.src;
        image.alt = source.alt;
        caption.textContent = source.alt;
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        lightbox.querySelector('.lightbox-close').focus();
      });
    });
    lightbox.querySelector('.lightbox-close').addEventListener('click', close);
    lightbox.addEventListener('click', event => { if (event.target === lightbox) close(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
  }
})();
