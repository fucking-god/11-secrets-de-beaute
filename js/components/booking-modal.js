/**
 * 11 Secrets de Beauté — Modale de Réservation Universelle
 */
import { SALON_DATA } from '../data/salon.js';

export function initBookingModal() {
  const modalMount = document.getElementById('booking-modal-mount');
  if (!modalMount) return;

  modalMount.innerHTML = `
    <div class="modal-overlay" id="bookingModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div class="modal-window">
        <button type="button" class="modal-close-btn" id="modalCloseBtn" aria-label="Fermer la fenêtre">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div style="text-align: center; margin-bottom: 1.75rem;">
          <span class="section-eyebrow">Votre Moment Privilège</span>
          <h3 id="modalTitle" style="font-family: var(--font-serif); font-size: 1.85rem; color: var(--color-ink); margin-bottom: 0.5rem;">
            Prendre rendez-vous
          </h3>
          <p style="font-size: var(--text-sm); color: var(--color-muted); max-width: 480px; margin-inline: auto;">
            Complétez ce formulaire ou contactez-nous directement par téléphone au 
            <a href="tel:${SALON_DATA.contact.phoneTel}" style="color: var(--color-gold-deep); font-weight: 600; text-decoration: underline;">${SALON_DATA.contact.phoneDisplay}</a>.
          </p>
        </div>

        <form id="bookingForm" novalidate>
          <div class="form-grid">
            
            <div class="form-group">
              <label for="bookingNom" class="form-label">Nom <span class="req">*</span></label>
              <input type="text" id="bookingNom" name="nom" required class="form-control" placeholder="Votre nom" autocomplete="family-name">
            </div>

            <div class="form-group">
              <label for="bookingPrenom" class="form-label">Prénom <span class="req">*</span></label>
              <input type="text" id="bookingPrenom" name="prenom" required class="form-control" placeholder="Votre prénom" autocomplete="given-name">
            </div>

            <div class="form-group">
              <label for="bookingTel" class="form-label">Téléphone <span class="req">*</span></label>
              <input type="tel" id="bookingTel" name="telephone" required class="form-control" placeholder="+41 79 000 00 00" autocomplete="tel">
            </div>

            <div class="form-group">
              <label for="bookingEmail" class="form-label">Adresse E-mail <span class="req">*</span></label>
              <input type="email" id="bookingEmail" name="email" required class="form-control" placeholder="votre@email.ch" autocomplete="email">
            </div>

            <div class="form-group form-grid-full">
              <label for="bookingSoin" class="form-label">Soin souhaité <span class="req">*</span></label>
              <select id="bookingSoin" name="soin" required class="form-control">
                <option value="">Sélectionnez votre univers de soin...</option>
                <optgroup label="Onglerie & Beauté des Mains / Pieds">
                  <option value="Ongles en gel complet / remplissage">Ongles en gel complet / remplissage</option>
                  <option value="Ongles en acrygel">Ongles en acrygel</option>
                  <option value="Ongles porcelaine dipping (Kiara Sky)">Ongles porcelaine dipping (Kiara Sky)</option>
                  <option value="Vernis semi-permanent + manucure">Vernis semi-permanent + manucure</option>
                  <option value="Beauté des pieds & Calluspeeling">Beauté des pieds & Calluspeeling</option>
                </optgroup>
                <optgroup label="Soins Visage & Dermo-Esthétique">
                  <option value="Soin visage Ella Baché">Soin visage Ella Baché personnalisé</option>
                  <option value="Radiofréquence visage & cou">Radiofréquence visage & cou</option>
                  <option value="Mésothérapie cutanée sans aiguille">Mésothérapie cutanée sans aiguille</option>
                  <option value="Microdermabrasion diamant">Microdermabrasion diamant</option>
                </optgroup>
                <optgroup label="Coiffure & Rituels Capillaires">
                  <option value="Coupe, Couleur & Brushing">Coupe, Couleur sans ammoniaque & Brushing</option>
                  <option value="Lissage brésilien Ybera Paris">Lissage brésilien Ybera Paris</option>
                  <option value="Botox capillaire régénérant">Botox capillaire régénérant Ybera</option>
                  <option value="Coiffure de mariée / événement">Coiffure de mariée / événement</option>
                </optgroup>
                <optgroup label="Massages & Bien-être">
                  <option value="Massage relaxant signature (45/60 min)">Massage relaxant signature (45/60 min)</option>
                  <option value="Massage aux pierres chaudes">Massage aux pierres chaudes</option>
                  <option value="Massage ayurvédique ou californien">Massage ayurvédique ou californien</option>
                  <option value="Pressothérapie infrarouge / Minceur">Pressothérapie infrarouge / Minceur</option>
                </optgroup>
                <optgroup label="Regard & Épilation">
                  <option value="Browlift & Teinture des cils">Browlift & Teinture des cils</option>
                  <option value="Épilation visage / corps">Épilation visage / corps</option>
                  <option value="Maquillage soirée / libanais">Maquillage soirée / libanais</option>
                </optgroup>
                <option value="Autre demande / Conseil personnalisé">Autre demande / Conseil personnalisé</option>
              </select>
            </div>

            <div class="form-group">
              <label for="bookingDate" class="form-label">Date souhaitée <span class="req">*</span></label>
              <input type="date" id="bookingDate" name="date" required class="form-control">
            </div>

            <div class="form-group">
              <label for="bookingHeure" class="form-label">Plage horaire préférée</label>
              <select id="bookingHeure" name="heure" class="form-control">
                <option value="Matinée (09h30 – 12h00)">Matinée (09h30 – 12h00)</option>
                <option value="Début d'après-midi (12h00 – 15h00)">Début d'après-midi (12h00 – 15h00)</option>
                <option value="Fin d'après-midi (15h00 – 19h00)">Fin d'après-midi (15h00 – 19h00)</option>
              </select>
            </div>

            <div class="form-group form-grid-full">
              <label for="bookingMessage" class="form-label">Remarque ou précision particulière</label>
              <textarea id="bookingMessage" name="message" class="form-control" placeholder="Précisez ici vos attentes ou questions particulières..."></textarea>
            </div>

            <div class="form-grid-full" style="margin-top: 0.5rem;">
              <button type="submit" class="btn btn-champagne btn-lg" style="width: 100%;">
                Confirmer ma demande de rendez-vous
              </button>
              <p style="font-size: 0.72rem; color: var(--color-muted); text-align: center; margin-top: 0.75rem;">
                Notre équipe vous contactera sous 24h ouvrées pour valider définitivement votre créneau.
              </p>
            </div>

          </div>
        </form>

        <div id="bookingSuccessNotice" style="display: none; text-align: center; padding: 2rem 1rem;">
          <div style="width: 58px; height: 58px; border-radius: 50%; background: var(--color-nude); color: var(--color-gold-deep); display: flex; align-items: center; justify-content: center; margin-inline: auto; margin-bottom: 1.25rem;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <h4 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-ink); margin-bottom: 0.75rem;">
            Merci pour votre confiance
          </h4>
          <p style="color: var(--color-muted); font-size: var(--text-sm); line-height: 1.7; max-width: 440px; margin-inline: auto;">
            Votre demande de rendez-vous a bien été enregistrée. Notre équipe de l'institut <strong>11 Secrets de Beauté</strong> vous contactera dans les plus brefs délais pour vous confirmer votre horaire.
          </p>
          <div style="margin-top: 1.75rem; display: flex; justify-content: center; gap: 1rem;">
            <button type="button" class="btn btn-outline" id="bookingSuccessClose">Fermer</button>
            <a href="tel:${SALON_DATA.contact.phoneTel}" class="btn btn-primary">Nous appeler directement</a>
          </div>
        </div>

      </div>
    </div>
  `;

  const modal = document.getElementById('bookingModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const form = document.getElementById('bookingForm');
  const successNotice = document.getElementById('bookingSuccessNotice');
  const successClose = document.getElementById('bookingSuccessClose');
  const soinSelect = document.getElementById('bookingSoin');
  const dateInput = document.getElementById('bookingDate');

  // Empêcher la sélection d'une date passée
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  function openModal(preselectedSoin = '') {
    if (preselectedSoin && soinSelect) {
      // Tenter de présélectionner
      for (let option of soinSelect.options) {
        if (option.value.toLowerCase().includes(preselectedSoin.toLowerCase()) || 
            option.text.toLowerCase().includes(preselectedSoin.toLowerCase())) {
          option.selected = true;
          break;
        }
      }
    }
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (form) form.style.display = 'block';
      if (successNotice) successNotice.style.display = 'none';
      if (form) form.reset();
    }, 400);
  }

  // Écouteur global pour tous les boutons d'ouverture
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-booking-btn');
    if (btn) {
      e.preventDefault();
      const soin = btn.dataset.soin || '';
      openModal(soin);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (successClose) successClose.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Simulation de soumission avec feedback clair
      form.style.display = 'none';
      successNotice.style.display = 'block';
    });
  }
}
