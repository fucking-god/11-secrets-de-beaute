/**
 * 11 Secrets de Beauté — Composant Header Réutilisable
 */
import { SALON_DATA } from '../data/salon.js';

export function renderHeader(activePage = 'accueil') {
  const headerMount = document.getElementById('site-header-mount');
  if (!headerMount) return;

  const navItems = [
    { id: 'accueil', label: 'Accueil', url: 'index.html' },
    { id: 'institut', label: "L'institut", url: 'institut.html' },
    { id: 'soins', label: 'Soins', url: 'soins.html' },
    { id: 'tarifs', label: 'Tarifs', url: 'tarifs.html' },
    { id: 'onglerie', label: 'Onglerie', url: 'onglerie.html' },
    { id: 'marques', label: 'Marques', url: 'marques.html' },
    { id: 'partenariat', label: 'Partenariat', url: 'partenariat.html' },
    { id: 'contact', label: 'Contact', url: 'contact.html' }
  ];

  const navLinksHtml = navItems.map(item => `
    <a href="${item.url}" class="nav-link ${activePage === item.id ? 'is-active' : ''}">
      ${item.label}
    </a>
  `).join('');

  const mobileNavLinksHtml = navItems.map((item, idx) => `
    <a href="${item.url}" class="mobile-nav-link ${activePage === item.id ? 'is-active' : ''}">
      <span class="num">0${idx + 1}</span>
      <span>${item.label}</span>
    </a>
  `).join('');

  headerMount.innerHTML = `
    <header class="site-header" id="mainHeader">
      <div class="container header-container">
        <!-- Logo de marque -->
        <a href="index.html" class="brand-link" aria-label="11 Secrets de Beauté — Accueil">
          <div class="brand-symbol">
            <img src="public/images/logo/logo-11secrets.png" alt="11 Secrets de Beauté Logo" width="44" height="44">
          </div>
          <div class="brand-text">
            <span class="brand-name">11 Secrets</span>
            <span class="brand-script">de beauté</span>
          </div>
        </a>

        <!-- Navigation Desktop -->
        <nav class="nav-menu" aria-label="Menu principal">
          ${navLinksHtml}
        </nav>

        <!-- Actions & CTA permanent -->
        <div class="header-actions">
          <button type="button" class="btn btn-champagne open-booking-btn" data-soin="">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>Prendre rendez-vous</span>
          </button>

          <!-- Burger Mobile -->
          <button class="burger-btn" id="burgerToggle" aria-label="Ouvrir le menu mobile" aria-expanded="false">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Tiroir Mobile -->
    <div class="mobile-drawer" id="mobileDrawer" aria-hidden="true">
      <nav class="mobile-nav-links" aria-label="Menu mobile">
        ${mobileNavLinksHtml}
      </nav>
      <div class="mobile-drawer-footer">
        <button type="button" class="btn btn-champagne btn-lg open-booking-btn" style="width: 100%;">
          Prendre rendez-vous
        </button>
        <div class="mobile-drawer-contact">
          <p><strong>${SALON_DATA.address.street}</strong><br>${SALON_DATA.address.postalCode} ${SALON_DATA.address.city}, Suisse</p>
          <p>Tél : <a href="tel:${SALON_DATA.contact.phoneTel}" style="color: var(--color-ink); text-decoration: underline;">${SALON_DATA.contact.phoneDisplay}</a></p>
          <p style="font-size: 0.8rem; color: var(--color-muted);">${SALON_DATA.hoursSummary}</p>
        </div>
      </div>
    </div>
  `;

  // Écouteurs d'événements pour le scroll
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });

  // Écouteur pour le menu burger mobile
  const burgerToggle = document.getElementById('burgerToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  
  if (burgerToggle && mobileDrawer) {
    burgerToggle.addEventListener('click', () => {
      const isOpen = burgerToggle.classList.contains('is-active');
      burgerToggle.classList.toggle('is-active', !isOpen);
      burgerToggle.setAttribute('aria-expanded', String(!isOpen));
      mobileDrawer.classList.toggle('is-open', !isOpen);
      mobileDrawer.setAttribute('aria-hidden', String(isOpen));
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });
  }
}
