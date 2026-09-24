/**
 * 11 Secrets de Beauté — Script d'Interaction Éditorial Universel
 * Curseur, Menu Plein Écran, Lenis Smooth Scroll, GSAP & Modale de Réservation
 */

import { initBookingModal } from './components/booking-modal.js';

function initEditorial() {
  const motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const desktop = () => window.innerWidth > 860;

  document.documentElement.classList.add(motionOK ? 'anim' : 'no-anim');

  /* ---------- Marcos abiertos: inyectar los 8 trazos ---------- */
  document.querySelectorAll('.oframe').forEach(f => {
    if (!f.children.length) {
      for (let i = 0; i < 8; i++) f.appendChild(document.createElement('i'));
    }
  });

  /* ---------- Initialisation de la Modale Universelle ---------- */
  try {
    initBookingModal();
  } catch (err) {
    console.warn('Booking modal initialization notice:', err);
  }

  /* ---------- Lenis — défilement doux (si disponible) ---------- */
  let lenis = null;
  if (motionOK && (window.Lenis || typeof Lenis !== 'undefined')) {
    try {
      const LenisClass = window.Lenis || Lenis;
      lenis = new LenisClass({ duration: 1.1, smoothWheel: true });
      if (window.ScrollTrigger) {
        lenis.on('scroll', window.ScrollTrigger.update);
      }
      if (window.gsap) {
        window.gsap.ticker.add(t => lenis.raf(t * 1000));
        window.gsap.ticker.lagSmoothing(0);
      }
    } catch (e) {
      console.warn('Lenis scroll smooth fallback to native:', e);
    }
  }

  /* ---------- Menu plein écran ---------- */
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  const nav = document.getElementById('nav');

  const closeMenu = () => {
    if (!menu || !menu.classList.contains('is-open')) return;
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    if (burger) {
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }
    if (nav) nav.classList.remove('menu-open');
    document.body.classList.remove('no-scroll');
    if (lenis) lenis.start();
  };

  if (burger && menu) {
    burger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const open = !menu.classList.contains('is-open');
      menu.classList.toggle('is-open', open);
      menu.setAttribute('aria-hidden', String(!open));
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      if (nav) nav.classList.toggle('menu-open', open);
      document.body.classList.toggle('no-scroll', open);
      if (lenis) open ? lenis.stop() : lenis.start();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
      if (desktop()) closeMenu();
    });
  }

  // Fermer le menu lors du clic sur les liens
  document.querySelectorAll('.menu-links a, .menu-cta, .open-booking-btn').forEach(b => {
    b.addEventListener('click', closeMenu);
  });

  // Défilement doux des ancres locales (#...)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id.length < 2 || id === '#bookingModal' || a.classList.contains('open-booking-btn')) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      if (lenis) {
        lenis.scrollTo(target, { offset: -70, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: motionOK ? 'smooth' : 'auto' });
      }
    });
  });

  // Défilement automatique si l'URL contient une ancre (#)
  if (window.location.hash && window.location.hash.length > 1) {
    const hashTarget = document.querySelector(window.location.hash);
    if (hashTarget) {
      setTimeout(() => {
        if (lenis) lenis.scrollTo(hashTarget, { offset: -70, immediate: true });
        else hashTarget.scrollIntoView();
      }, 350);
    }
  }

  /* ---------- Navigation: sticky et fin de page ---------- */
  if (nav) {
    const handleScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 48);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const footer = document.querySelector('.footer');
    if (footer && 'IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        entries.forEach(entry => {
          nav.classList.toggle('is-end', entry.isIntersecting);
        });
      }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 }).observe(footer);
    }
  }

  /* ---------- Curseur éditorial ---------- */
  if (finePointer) {
    document.body.classList.add('has-cursor');
    const cursor = document.getElementById('cursor');
    if (cursor && window.gsap) {
      const dot = cursor.querySelector('.cursor-dot');
      const ring = cursor.querySelector('.cursor-ring');
      const label = cursor.querySelector('.cursor-label');
      const dxq = window.gsap.quickTo(dot, 'x', { duration: .12 });
      const dyq = window.gsap.quickTo(dot, 'y', { duration: .12 });
      const rxq = window.gsap.quickTo(ring, 'x', { duration: .45, ease: 'power3' });
      const ryq = window.gsap.quickTo(ring, 'y', { duration: .45, ease: 'power3' });

      window.addEventListener('mousemove', e => {
        dxq(e.clientX);
        dyq(e.clientY);
        rxq(e.clientX);
        ryq(e.clientY);

        cursor.classList.toggle('on-dark', !!(e.target.closest && e.target.closest('.theme-dark, .theme-ink, .menu, .footer')));
        const hit = e.target.closest && e.target.closest('a, button, [data-cursor]');
        const voir = hit && hit.dataset && hit.dataset.cursor === 'voir';
        window.gsap.to(ring, { scale: hit ? (voir ? 2.5 : 1.75) : 1, duration: .35, ease: 'power3.out' });
        window.gsap.to(dot, { scale: hit ? .5 : 1, duration: .35 });
        if (label) {
          label.textContent = voir ? 'voir' : '';
          window.gsap.to(label, { autoAlpha: voir ? 1 : 0, scale: voir ? 1 : .6, duration: .3 });
        }
      }, { passive: true });
    }
  }

  /* ---------- GSAP ScrollTrigger Reveals (si chargé) ---------- */
  if (motionOK && window.gsap && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);

    window.gsap.utils.toArray('[data-reveal="fade"]').forEach(el => {
      window.gsap.from(el, {
        y: 28, autoAlpha: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' }
      });
    });

    window.gsap.utils.toArray('[data-reveal="clip"]').forEach(el => {
      window.gsap.from(el, {
        clipPath: 'inset(0% 0% 0% 100%)', duration: 1.35, ease: 'power3.inOut',
        scrollTrigger: { trigger: el, start: 'top 85%' }
      });
    });

    window.gsap.utils.toArray('[data-draw]').forEach(el => {
      window.gsap.from(el, {
        scaleX: 0, duration: 1.4, ease: 'power2.inOut',
        scrollTrigger: { trigger: el, start: 'top 92%' }
      });
    });

    window.addEventListener('load', () => window.ScrollTrigger.refresh());
  }
}

// Exécution garantie, que le document soit en cours de chargement ou déjà prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEditorial);
} else {
  initEditorial();
}
