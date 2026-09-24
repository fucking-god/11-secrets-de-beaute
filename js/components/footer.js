/**
 * 11 Secrets de Beauté — Composant Footer Réutilisable
 */
import { SALON_DATA } from '../data/salon.js';

export function renderFooter() {
  const footerMount = document.getElementById('site-footer-mount');
  if (!footerMount) return;

  const hoursRowsHtml = SALON_DATA.hours.map(h => `
    <div class="footer-hours-row">
      <span>${h.day}</span>
      <span style="${h.isClosed ? 'color: #A3A08C; font-style: italic;' : 'font-weight: 500;'}">${h.schedule}</span>
    </div>
  `).join('');

  footerMount.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top-grid">
          
          <!-- Colonne 1 : Identité & Philosophie -->
          <div class="footer-brand">
            <a href="index.html" class="brand-link" style="margin-bottom: 0.5rem;" aria-label="11 Secrets de Beauté — Accueil">
              <div class="brand-symbol">
                <img src="public/images/logo/logo-11secrets.png" alt="11 Secrets de Beauté Logo" width="44" height="44">
              </div>
              <div class="brand-text">
                <span class="brand-name">11 Secrets</span>
                <span class="brand-script">de beauté</span>
              </div>
            </a>
            <p class="footer-desc">
              Votre espace bien-être d'exception au cœur de Renens. Coiffure, onglerie d'art, dermo-esthétique Ella Baché et massages bien-être sur rendez-vous.
            </p>
            <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem;">
              <a href="${SALON_DATA.social.instagram}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="color: var(--color-dark-text); border-color: rgba(255,255,255,0.2);">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
              </a>
              <a href="${SALON_DATA.social.facebook}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="color: var(--color-dark-text); border-color: rgba(255,255,255,0.2);">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                Facebook
              </a>
            </div>
          </div>

          <!-- Colonne 2 : Navigation -->
          <div>
            <h4 class="footer-col-title">Navigation</h4>
            <div class="footer-links">
              <a href="index.html">Accueil</a>
              <a href="institut.html">L'institut</a>
              <a href="soins.html">Nos soins & rituels</a>
              <a href="tarifs.html">Grille des tarifs</a>
              <a href="onglerie.html">Onglerie & mains</a>
              <a href="marques.html">Nos marques partenaires</a>
              <a href="partenariat.html">Espace partenariat</a>
              <a href="contact.html">Prendre rendez-vous</a>
            </div>
          </div>

          <!-- Colonne 3 : Horaires d'ouverture -->
          <div>
            <h4 class="footer-col-title">Horaires d'ouverture</h4>
            <div class="footer-hours-list">
              ${hoursRowsHtml}
            </div>
            <p style="font-size: 0.75rem; color: var(--color-champagne-light); margin-top: 0.75rem;">
              * Tous les soins sont réalisés sur rendez-vous personnalisé.
            </p>
          </div>

          <!-- Colonne 4 : Localisation & Accès -->
          <div>
            <h4 class="footer-col-title">Venir à l'institut</h4>
            <p style="color: var(--color-dark-muted); font-size: var(--text-sm); line-height: 1.6; margin-bottom: 0.75rem;">
              <strong>${SALON_DATA.name}</strong><br>
              ${SALON_DATA.address.street}<br>
              ${SALON_DATA.address.postalCode} ${SALON_DATA.address.city}, Suisse
            </p>
            <p style="font-size: var(--text-xs); color: var(--color-dark-muted); line-height: 1.5; margin-bottom: 1rem;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline; vertical-align:middle; margin-right:4px;" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              À 1 min à pied de la gare CFF de Renens.<br>
              Parkings publics Coop et Migros à 50 mètres.
            </p>
            <p style="font-size: var(--text-sm);">
              Tél : <a href="tel:${SALON_DATA.contact.phoneTel}" style="color: var(--color-champagne-light); font-weight: 500; text-decoration: underline;">${SALON_DATA.contact.phoneDisplay}</a>
            </p>
          </div>

        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} ${SALON_DATA.name} · Tous droits réservés.</p>
          <div style="display: flex; gap: 1.5rem;">
            <span>Renens · Canton de Vaud · Suisse</span>
            <a href="contact.html" style="color: var(--color-dark-muted); text-decoration: underline;">Mentions & Contact</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
