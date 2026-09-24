/**
 * 11 Secrets de Beauté — Données officielles de l'institut
 * Rue de Lausanne 11, 1020 Renens · Suisse
 */
export const SALON_DATA = {
  name: "11 Secrets de Beauté",
  legalName: "Institut 11 Secrets de Beauté Sàrl",
  baseline: "Votre espace bien-être · Institut de beauté, coiffure et onglerie",
  subtitle: "Maison de beauté & bien-être au cœur de Renens",
  address: {
    street: "Rue de Lausanne 11",
    postalCode: "1020",
    city: "Renens",
    canton: "Vaud",
    country: "Suisse",
    display: "Rue de Lausanne 11, 1020 Renens, Suisse",
    accessNote: "À 1 minute à pied de la gare de Renens. Desservi par les transports publics (CFF, TL). Parkings Coop et Migros à proximité immédiate."
  },
  contact: {
    phoneDisplay: "+41 76 660 60 26",
    phoneTel: "+41766606026",
    email: "contact@11secretsdebeaute.ch",
    bookingUrl: "contact.html#reservation"
  },
  social: {
    instagram: "https://www.instagram.com/11secretsdebeaute/",
    facebook: "https://www.facebook.com/11-secrets-de-beaut%C3%A9-102190431902767"
  },
  hours: [
    { day: "Lundi", schedule: "Fermé", isClosed: true },
    { day: "Mardi", schedule: "09h30 – 19h00", isClosed: false },
    { day: "Mercredi", schedule: "09h30 – 19h00", isClosed: false },
    { day: "Jeudi", schedule: "09h30 – 19h00", isClosed: false },
    { day: "Vendredi", schedule: "09h30 – 19h00", isClosed: false },
    { day: "Samedi", schedule: "09h30 – 17h00", isClosed: false },
    { day: "Dimanche", schedule: "Fermé", isClosed: true }
  ],
  hoursSummary: "Mar. – Ven. : 09h30 – 19h00 · Sam. : 09h30 – 17h00",
  membership: {
    title: "Carte Membre Privilège",
    discount: "-20% toute l'année",
    priceCHF: 149,
    description: "Profitez de 20% de réduction immédiate sur tous vos soins et forfaits pendant 12 mois complets."
  },
  seo: {
    metaTitle: "11 Secrets de Beauté — Institut de Beauté, Coiffure & Onglerie à Renens (Lausanne)",
    metaDesc: "Institut de beauté & bien-être à Renens (Rue de Lausanne 11). Coiffure, onglerie, soins visage Ella Baché, massages et technologies esthétiques. Sur rendez-vous.",
    keywords: "institut de beauté renens, onglerie renens, coiffure renens, massage renens, botox capillaire ybera, soins visage ella bache, manucure lausanne"
  }
};
