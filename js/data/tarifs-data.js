/**
 * 11 Secrets de Beauté — Grille tarifaire officielle en Francs Suisses (CHF)
 * Données réelles extraites du site officiel
 */
export const TARIFS_DATA = {
  onglerie: {
    categoryName: "Onglerie & Beauté des Mains et Pieds",
    intro: "Protocoles d'onglerie d'excellence réalisés avec des marques professionnelles renommées (Peggy Sage, Kiara Sky). Finition soignée et tenue longue durée.",
    sections: [
      {
        title: "Ongles en gel",
        items: [
          { name: "Supplément longueur", price: 10, currency: "CHF" },
          { name: "Pose complète avec chablon", price: 120, currency: "CHF" },
          { name: "Pose complète avec tips", price: 109, currency: "CHF" },
          { name: "Renforcement ongles naturels", price: 79, currency: "CHF" },
          { name: "Remplissage", price: 69, currency: "CHF" }
        ]
      },
      {
        title: "Ongles en acrygel",
        items: [
          { name: "Pose complète avec chablon", price: 120, currency: "CHF" },
          { name: "Pose complète avec tips", price: 109, currency: "CHF" },
          { name: "Renforcement ongles naturels", price: 79, currency: "CHF" },
          { name: "Remplissage", price: 69, currency: "CHF" }
        ]
      },
      {
        title: "Ongles porcelaine",
        items: [
          { name: "Pose complète avec tips", price: 89, currency: "CHF" },
          { name: "Renforcement ongles naturels", price: 65, currency: "CHF" },
          { name: "Remplissage", price: 75, currency: "CHF" },
          { name: "Réparation par ongle", price: 8, currency: "CHF" },
          { name: "Strass et Paillettes (plus de 3)", price: 1, currency: "CHF" }
        ]
      },
      {
        title: "Soins des mains",
        items: [
          { name: "Dépose : Gel, Acryl", price: 25, currency: "CHF" },
          { name: "Dépose + manucure express", price: 45, currency: "CHF" },
          { name: "Vernis semi-permanent + manucure", price: 59, currency: "CHF" },
          { name: "Vernis semi-permanent", price: 39, currency: "CHF" },
          { name: "Dépose : Gel, Porcelaine, Acryl", price: 15, currency: "CHF" },
          { name: "Dépose + pose vernis semi-permanent", price: 49, currency: "CHF" },
          { name: "Dépose semi-permanent", price: 10, currency: "CHF" },
          { name: "Manucure express", price: 25, currency: "CHF" },
          { name: "Manucure brésilienne ou à l’eau", price: 35, currency: "CHF" },
          { name: "Manucure tiède", price: 45, currency: "CHF" },
          { name: "Bain de paraffine mains", price: 19, currency: "CHF" }
        ]
      },
      {
        title: "Soins des pieds",
        items: [
          { name: "Bain de paraffine pieds", price: 29, currency: "CHF" },
          { name: "Pose de gel (classique ou gel couleur) pour les pieds", price: 59, currency: "CHF" },
          { name: "Pose de vernis semi-permanent", price: 49, currency: "CHF" },
          { name: "Beauté des pieds express", price: 69, duration: "30 min", currency: "CHF" },
          { name: "Calluspeeling (traitement anti-callosités)", price: 49, currency: "CHF" },
          { name: "Bain de paraffine", price: 29, currency: "CHF" },
          { name: "Beauté des pieds complète – vernis classique offert", price: 89, duration: "60 min", currency: "CHF" },
          { name: "Supplément vernis classique", price: 15, currency: "CHF" },
          { name: "Supplément vernis permanent", price: 39, currency: "CHF" },
          { name: "Supplément vernis french", price: 25, currency: "CHF" }
        ]
      },
      {
        title: "Autres prestations",
        items: [
          { name: "Réparation d’un ongle", price: 8, currency: "CHF" },
          { name: "Strass et paillettes (plus de 3)", price: 1, currency: "CHF" }
        ]
      }
    ]
  },

  coiffure: {
    categoryName: "Coiffure & Rituels Capillaires",
    intro: "Soins personnalisés, coupes sur mesure, rituels vapeur et lissages brésiliens de haute technologie Ybera Paris.",
    sections: [
      {
        title: "Coupes & Coiffage",
        items: [
          { name: "Shampoing + séchage (court / moyen / long)", price: "9 / 9 / 9", currency: "CHF" },
          { name: "Démêlant", price: 8, currency: "CHF" },
          { name: "Soin capillaire", price: 12, currency: "CHF" },
          { name: "Séchage (court / moyen / long)", price: "9 / 13 / 17", currency: "CHF" },
          { name: "Masque hydratant", price: 26, currency: "CHF" },
          { name: "Coupe entretien avec service", price: 38, currency: "CHF" },
          { name: "Coupe frange", price: 19, currency: "CHF" },
          { name: "Coupe transformation", price: 45, currency: "CHF" },
          { name: "Brushing (court / moyen / long)", price: "35 / 45 / 55", currency: "CHF" },
          { name: "Boucles au fer (court / moyen / long)", price: "29 / 39 / 49", currency: "CHF" },
          { name: "Mise en pli (court / moyen / long)", price: "48 / 58 / 68", currency: "CHF" },
          { name: "Enfants (jusqu'à 12 ans) : Shampoing + Coupe + Séchage", price: "18 à 38", currency: "CHF" }
        ]
      },
      {
        title: "Techniques & Rituels Haute Technologie",
        items: [
          { name: "Couleur sans ammoniaque (court / moyen / long)", price: "55 / 65 / 75", currency: "CHF" },
          { name: "Racines (3 cm maximum)", price: 45, currency: "CHF" },
          { name: "Mèches et balayage (court / moyen / long)", price: "75 / 95 / 105", currency: "CHF" },
          { name: "Décoloration (court / moyen / long)", price: "45 / 65 / 85", currency: "CHF" },
          { name: "Ombré et lumière (court / moyen / long)", price: "69 / 79 / 89", currency: "CHF" },
          { name: "Soin à la vapeur (court / moyen / long)", price: "29 / 39 / 49", currency: "CHF" },
          { name: "Botox capillaire express Ybera", price: "79 à 99", currency: "CHF" },
          { name: "Botox capillaire profond Ybera", price: "139 à 159", currency: "CHF" },
          { name: "Lissage brésilien Ybera (court / moyen / long)", price: "189 / 249 / 319", currency: "CHF" },
          { name: "Coiffure mariée (essai complet compris)", price: 189, currency: "CHF" },
          { name: "Chignon stylé", price: "80 à 100", currency: "CHF" },
          { name: "Chignon express avec tresses", price: 65, currency: "CHF" }
        ]
      },
      {
        title: "Forfaits Coiffure (Shampoing & démêlant inclus)",
        items: [
          { name: "Coupe + Séchage", price: "55 à 75", currency: "CHF" },
          { name: "Coupe + Brushing", price: "79 à 99", currency: "CHF" },
          { name: "Couleur + Brushing", price: "85 à 105", currency: "CHF" },
          { name: "Balayage ou Mèches + Coupe + Brushing", price: "149 à 209", currency: "CHF" },
          { name: "Lissage + Botox Ybera", price: "259 à 379", currency: "CHF" },
          { name: "Abonnement 7 brushings + masque hydratant", price: 249, currency: "CHF" }
        ]
      }
    ]
  },

  esthetique: {
    categoryName: "Soins du Visage & Technologies Cutanées",
    intro: "Soins dermo-cosmétiques d'exception Ella Baché et technologies de pointe (Radiofréquence, Mésothérapie, Microdermabrasion).",
    sections: [
      {
        title: "Soins du Visage Ella Baché",
        items: [
          { name: "Soin du visage express", price: 45, duration: "30 min", currency: "CHF" },
          { name: "Soin du visage Ella Perfect coup d'éclat", price: 99, duration: "40 min", currency: "CHF" },
          { name: "Soin classique avec extraction comédons", price: 120, duration: "45 min", currency: "CHF" },
          { name: "Soin repulpant hyaluronique intensif", price: 129, duration: "60 min", currency: "CHF" },
          { name: "Soin lifting green rides & fermeté", price: 130, duration: "60 min", currency: "CHF" },
          { name: "Peeling sal-exfo visage rénovateur", price: 129, duration: "60 min", currency: "CHF" },
          { name: "Masque Vital C antioxydant", price: 99, duration: "40 min", currency: "CHF" }
        ]
      },
      {
        title: "Technologies Haute Précision",
        items: [
          { name: "Microdermabrasion + soin visage", price: 119, duration: "60 min", currency: "CHF" },
          { name: "Microdermabrasion + masque hydra collagène", price: 79, duration: "30 min", currency: "CHF" },
          { name: "Électro-mésothérapie visage sans aiguille", price: 129, duration: "45 min", currency: "CHF" },
          { name: "Mésothérapie visage complet + cou + décolleté", price: 169, duration: "90 min", currency: "CHF" },
          { name: "Radiofréquence visage complet raffermissante", price: 229, duration: "100 min", currency: "CHF" },
          { name: "Radiofréquence haut du visage + contour yeux", price: 149, duration: "60 min", currency: "CHF" },
          { name: "Radiofréquence bas du visage (ovale)", price: 139, duration: "60 min", currency: "CHF" },
          { name: "Radiofréquence lèvres repulpant", price: 99, duration: "30 min", currency: "CHF" }
        ]
      }
    ]
  },

  regard: {
    categoryName: "Regard & Maquillage",
    intro: "Mettez vos yeux et vos traits en valeur grâce à nos rituels de restructuration du regard et maquillages sur mesure.",
    sections: [
      {
        title: "Cils & Sourcils",
        items: [
          { name: "Teinture des sourcils", price: 25, currency: "CHF" },
          { name: "Teinture des cils", price: 25, currency: "CHF" },
          { name: "Teinture duo cils et sourcils", price: 45, currency: "CHF" },
          { name: "Browlift des sourcils + soin mascara", price: 89, currency: "CHF" }
        ]
      },
      {
        title: "Maquillage & Ateliers",
        items: [
          { name: "Maquillage flash jour", price: 45, currency: "CHF" },
          { name: "Maquillage libanais / soirée sophistiquée", price: 85, currency: "CHF" },
          { name: "Atelier maquillage & conseils morpho-couleurs", price: "25 à 35", currency: "CHF" },
          { name: "Cours particulier de maquillage (afterwork)", price: 149, currency: "CHF" }
        ]
      }
    ]
  },

  massages: {
    categoryName: "Massages & Détente Corporelle",
    intro: "Rituels de relaxation profonde inspirés des traditions du monde pour libérer les tensions et revitaliser l'esprit.",
    sections: [
      {
        title: "Massages du Monde & Bien-être",
        items: [
          { name: "Massage relaxant sérénité", price: 89, duration: "45 min", currency: "CHF" },
          { name: "Massage du dos décontracturant", price: 69, duration: "35 min", currency: "CHF" },
          { name: "Massage aux pierres chaudes volcaniques", price: 99, duration: "45 min", currency: "CHF" },
          { name: "Massage ayurvédique traditionnel", price: "110 / 130", duration: "60 min / 80 min", currency: "CHF" },
          { name: "Massage californien enveloppant", price: "110 / 130", duration: "60 min / 80 min", currency: "CHF" },
          { name: "Massage Lomi-Lomi hawaïen", price: "110 / 120", duration: "60 min / 80 min", currency: "CHF" },
          { name: "Massage anti-cellulite drainant", price: 79, duration: "35 min", currency: "CHF" }
        ]
      },
      {
        title: "Soins du Corps Spécifiques",
        items: [
          { name: "Gommage du corps aux sels délicats", price: 89, duration: "40 min", currency: "CHF" },
          { name: "Gommage + massage du dos", price: 175, duration: "75 min", currency: "CHF" },
          { name: "Pressothérapie infrarouge drainante", price: 79, duration: "30 min", currency: "CHF" },
          { name: "Électrostimulation tonifiante (une zone)", price: 89, duration: "30 min", currency: "CHF" },
          { name: "Radiofréquence corps + électrostimulation", price: 179, duration: "75 min", currency: "CHF" }
        ]
      }
    ]
  },

  epilation: {
    categoryName: "Épilation Précision Visage & Corps",
    intro: "Cires professionnelles tièdes et chaudes ultra-douces respectant l'intégrité de la peau.",
    sections: [
      {
        title: "Visage & Corps",
        items: [
          { name: "Ligne de sourcils", price: 20, currency: "CHF" },
          { name: "Petites zones (lèvres, menton, nez ou oreilles)", price: 15, currency: "CHF" },
          { name: "Visage complet", price: 45, currency: "CHF" },
          { name: "Aisselles", price: 19, currency: "CHF" },
          { name: "Demi-bras / Bras complets", price: "35 / 45", currency: "CHF" },
          { name: "Maillot classique / Maillot intégral", price: "25 / 45", currency: "CHF" },
          { name: "Demi-jambes / Jambes complètes", price: "39 / 69", currency: "CHF" },
          { name: "Pack Maillot classique + Aisselles + Demi-jambes", price: 89, currency: "CHF" },
          { name: "Pack Maillot classique + Aisselles + Jambes complètes", price: 119, currency: "CHF" },
          { name: "Corps complet", price: 249, currency: "CHF" }
        ]
      }
    ]
  }
};
