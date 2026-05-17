(function () {
  document.querySelectorAll('a.page-scroll[href*="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      var href = this.getAttribute('href');
      if (!href || href.charAt(0) !== '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      contactForm.reset();
      var success = document.getElementById('success');
      if (success) {
        success.textContent = 'Thank you! We will get back to you soon.';
      }
    });
  }

  var applyForm = document.getElementById('applyForm');
  if (applyForm) {
    applyForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var data = {
        name: document.getElementById('app-name').value || '',
        phone: document.getElementById('app-phone').value || '',
        email: document.getElementById('app-email').value || '',
        current_address: document.getElementById('app-address').value || '',
        adults: document.getElementById('app-adults').value || '0',
        children: document.getElementById('app-children').value || '0',
        notes: document.getElementById('app-notes').value || '',
        created_at: new Date().toISOString()
      };
      try {
        var apps = JSON.parse(localStorage.getItem('applications') || '[]');
        apps.push(data);
        localStorage.setItem('applications', JSON.stringify(apps));
      } catch (err) {
        console.error('Could not save application', err);
      }
      applyForm.reset();
      var s = document.getElementById('applySuccess');
      if (s) {
        s.style.display = 'block';
        setTimeout(function () {
          s.style.display = 'none';
        }, 5000);
      }
    });
  }
})();
