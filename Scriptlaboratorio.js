(() => {
  'use strict';

  // Validación del formulario de contacto
  const form = document.querySelector('#contactForm');
  const formAlert = document.querySelector('#formAlert');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      formAlert.classList.add('d-none');
      return;
    }

    formAlert.classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');
  });

  // Cerrar el menú móvil al elegir un enlace (excepto el desplegable "Más")
  document.querySelectorAll('#mainNav .nav-link:not(.dropdown-toggle), #mainNav .btn').forEach((link) => {
    link.addEventListener('click', () => {
      const menu = document.querySelector('#mainNav');
      bootstrap.Collapse.getInstance(menu)?.hide();
    });
  });

  // Aviso de bienvenida cerrable
  document.querySelector('#noticeClose').addEventListener('click', () => {
    document.querySelector('#notice').remove();
    document.body.classList.remove('has-notice');
  });

  // "Ver detalles" abre el acordeón del proyecto correspondiente
  document.querySelectorAll('[data-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const panel = document.getElementById(btn.dataset.open);
      bootstrap.Collapse.getOrCreateInstance(panel, { toggle: false }).show();
    });
  });
})();