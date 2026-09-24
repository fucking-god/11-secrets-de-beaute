/**
 * 11 Secrets de Beauté — Script Principal d'Orchestration
 */
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { initBookingModal } from './components/booking-modal.js';
import { SALON_DATA } from './data/salon.js';
import { TARIFS_DATA } from './data/tarifs-data.js';
import { SOINS_CATEGORIES } from './data/soins-data.js';
import { MARQUES_DATA } from './data/marques-data.js';

document.addEventListener('DOMContentLoaded', () => {
  // Déterminer la page active selon le nom du fichier
  const path = window.location.pathname;
  let activePage = 'accueil';

  if (path.includes('institut')) activePage = 'institut';
  else if (path.includes('soins')) activePage = 'soins';
  else if (path.includes('tarifs')) activePage = 'tarifs';
  else if (path.includes('onglerie')) activePage = 'onglerie';
  else if (path.includes('marques')) activePage = 'marques';
  else if (path.includes('partenariat')) activePage = 'partenariat';
  else if (path.includes('contact')) activePage = 'contact';

  // Monter les composants globaux
  renderHeader(activePage);
  renderFooter();
  initBookingModal();

  // Initialisation spécifique à la page Tarifs (Tabs de filtrage)
  initTarifsTabs();

  // Initialisation du formulaire de contact direct sur contact.html
  initContactPageForm();
});

/**
 * Gestionnaire des onglets sur la page Tarifs
 */
function initTarifsTabs() {
  const tabs = document.querySelectorAll('.pricing-tab-btn');
  const sections = document.querySelectorAll('.pricing-category-section');

  if (!tabs.length || !sections.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetCat = tab.dataset.category;

      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      sections.forEach(sec => {
        if (targetCat === 'all' || sec.dataset.category === targetCat) {
          sec.style.display = 'block';
        } else {
          sec.style.display = 'none';
        }
      });
    });
  });

  // Prise en charge des ancres hash dans l'URL (#coiffure, #onglerie, etc.)
  if (window.location.hash) {
    const hash = window.location.hash.replace('#', '');
    const matchedTab = document.querySelector(`.pricing-tab-btn[data-category="${hash}"]`);
    if (matchedTab) {
      matchedTab.click();
    }
  }
}

/**
 * Gestionnaire pour la page Contact
 */
function initContactPageForm() {
  const directContactForm = document.getElementById('pageContactForm');
  const successBox = document.getElementById('pageContactSuccess');

  if (directContactForm && successBox) {
    directContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!directContactForm.checkValidity()) {
        directContactForm.reportValidity();
        return;
      }

      directContactForm.style.display = 'none';
      successBox.style.display = 'block';
    });
  }
}
