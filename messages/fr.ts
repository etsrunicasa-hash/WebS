type DeepWiden<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly DeepWiden<U>[]
    : T extends object
      ? { [K in keyof T]: DeepWiden<T[K]> }
      : T;

const frDictionary = {
  site: {
    name: "ETS RUNI",
    shortName: "RUNI",
    tagline: "Présence institutionnelle basée à Casablanca, Maroc.",
  },
  seo: {
    home: {
      title: "Accueil",
      description:
        "RUNI présente un univers visuel plus fort et une entrée catalogue structurée par catégories.",
    },
    catalog: {
      title: "Catalogue",
      description:
        "Explorez les catégories du catalogue RUNI: bières, vins, whisky, arak, vodka et spiritueux divers.",
    },
    about: {
      title: "À propos",
      description:
        "Retrouvez l'histoire, l'identité, l'expérience et les informations légales de RUNI.",
    },
    contact: {
      title: "Contact",
      description:
        "Contactez ETS RUNI via nos coordonnées publiques ou notre formulaire bilingue sécurisé.",
    },
  },
  nav: {
    home: "Accueil",
    catalog: "Catalogue",
    about: "À propos",
    contact: "Contact",
    menu: "Menu",
    close: "Fermer",
    contactCta: "Nous contacter",
    languageSwitcherLabel: "Changer de langue",
  },
  home: {
    hero: {
      eyebrow: "RUNI SARL | Casablanca",
      title: "RUNI SARL",
      description:
        "Importateur et distributeur de spiritueux au Maroc.",
      primaryCta: "Voir le catalogue",
      secondaryCta: "Découvrir RUNI",
      collageCaption:
        "Une mise en avant visuelle plus assumée pour la marque RUNI, ses gammes et ses références principales.",
      stats: [
        { value: "6", label: "Catégories" },
        { value: "1984", label: "Depuis" },
        { value: "Casablanca", label: "Implantation" },
        { value: "RUNI", label: "Marque" },
      ],
    },
    company: {
      title: "Depuis 1952",
      body:
        "Depuis 1952, RUNI SARL accompagne le marché marocain avec une activité d'importation et de distribution structurée, portée par l'expérience, la continuité et la qualité de ses partenariats.",
      facts: ["6 partenaires", "Basé à Casablanca"],
    },
    disclaimer:
      "La consommation d'alcool est strictement réservée aux personnes majeures de 18 ans et plus.",
    intro: {
      eyebrow: "Présentation",
      title: "Une entreprise installée dans la durée",
      body:
        "Le site ETS RUNI présente une base d'information claire sur l'entreprise, son implantation, son expérience et ses coordonnées publiques. L'approche reste volontairement institutionnelle, avec un discours centré sur la structure de l'entreprise et la qualité de sa relation professionnelle.",
      highlights: [
        {
          title: "Organisation lisible",
          description:
            "Une communication structurée pour faciliter la compréhension de l'identité et du cadre d'activité de l'entreprise.",
        },
        {
          title: "Continuité d'exploitation",
          description:
            "Une présence établie à Casablanca depuis plusieurs décennies, avec une trajectoire inscrite dans la durée.",
        },
        {
          title: "Relation professionnelle",
          description:
            "Des échanges orientés vers les demandes d'information, la coordination et le suivi des prises de contact.",
        },
      ],
    },
    experience: {
      eyebrow: "Parcours",
      title: "Une trajectoire bâtie sur la continuité",
      body:
        "Depuis sa création, ETS RUNI s'appuie sur un cadre de travail régulier, une connaissance opérationnelle du terrain et une présence stable au sein de son environnement professionnel.",
      timeline: [
        {
          year: "1984",
          title: "Création de la société",
          description:
            "L'entreprise est constituée à Casablanca et inscrit dès l'origine sa présence dans un cadre d'exploitation structuré.",
        },
        {
          year: "Développement",
          title: "Consolidation de l'activité",
          description:
            "La société renforce progressivement ses méthodes de coordination, son organisation et son ancrage professionnel.",
        },
        {
          year: "Aujourd'hui",
          title: "Position institutionnelle claire",
          description:
            "Le site valorise désormais l'identité de l'entreprise, ses références légales et ses points de contact essentiels.",
        },
      ],
    },
    values: {
      eyebrow: "Valeurs",
      title: "Des principes de travail clairs",
      items: [
        {
          title: "Rigueur",
          description:
            "Une présentation soignée des informations essentielles, sans surcharge ni discours commercial excessif.",
        },
        {
          title: "Stabilité",
          description:
            "Une trajectoire professionnelle qui met l'accent sur la continuité, l'ancrage local et la lisibilité de la structure.",
        },
        {
          title: "Disponibilité",
          description:
            "Des coordonnées publiques et un formulaire de contact conçus pour faciliter les demandes pertinentes.",
        },
      ],
    },
    cta: {
      title: "Échanger avec notre équipe",
      body:
        "Pour toute prise de contact institutionnelle ou demande d'information, notre formulaire bilingue est disponible en ligne.",
      button: "Accéder à la page contact",
    },
  },
  about: {
    hero: {
      eyebrow: "Entreprise",
      title: "Identité, structure et positionnement",
      description:
        "Cette page rassemble les éléments institutionnels essentiels d'ETS RUNI: identité, ancrage, cadre juridique et lecture neutre du positionnement de l'entreprise.",
    },
    identity: {
      title: "Identité de l'entreprise",
      body:
        "ETS RUNI est une société basée à Casablanca. Cette présence institutionnelle met l'accent sur une image sobre, professionnelle et lisible, adaptée à une communication d'entreprise.",
    },
    background: {
      title: "Ancrage et continuité",
      body:
        "Créée en 1984, l'entreprise inscrit sa trajectoire dans le temps long. Cette ancienneté nourrit une présentation orientée vers la stabilité, l'expérience et la compréhension des enjeux opérationnels.",
    },
    positioning: {
      title: "Positionnement",
      body:
        "Le présent site propose un catalogue informatif de l'offre RUNI, sans vente en ligne, sans affichage de prix et sans parcours transactionnel. Son rôle reste de présenter l'entreprise, ses catégories et ses informations publiques de manière structurée.",
      points: [
        "Catalogue informatif sans commande en ligne.",
        "Présentation structurée par catégories, marques et formats.",
        "Accent maintenu sur l'identité de l'entreprise et la prise de contact.",
      ],
    },
    legalIntro: {
      title: "Informations légales et structurelles",
      body:
        "Les informations ci-dessous sont affichées pour donner une lecture claire du statut de l'entreprise et de son inscription administrative.",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Entrer en relation avec ETS RUNI",
      description:
        "Utilisez nos coordonnées publiques ou le formulaire ci-dessous pour transmettre une demande professionnelle ou institutionnelle.",
    },
    details: {
      title: "Coordonnées publiques",
      intro:
        "Ces informations sont publiées pour permettre des échanges directs et structurés avec l'entreprise.",
      officeTitle: "Siège à Casablanca",
      officeNote:
        "Les demandes envoyées via le formulaire sont transmises par email à l'adresse de contact interne désignée.",
    },
    form: {
      title: "Formulaire de contact",
      intro:
        "Merci de renseigner les informations utiles afin de faciliter le traitement de votre demande.",
      privacy:
        "Les données transmises sont utilisées uniquement pour répondre à votre prise de contact.",
    },
  },
  catalog: {
    hero: {
      eyebrow: "Catalogue",
      title: "Le catalogue RUNI s'organise désormais par catégories, marques et formats.",
      description:
        "Retrouvez une première sélection texte organisée par familles de produits, marques et contenances. Les visuels détaillés et les compléments éditoriaux pourront être ajoutés progressivement.",
      primaryCta: "Contacter RUNI",
      secondaryCta: "Retour à l'accueil",
    },
    preview: {
      eyebrow: "Catégories",
      title: "Explorer les familles principales du catalogue",
      description:
        "Le catalogue RUNI s'appuie désormais sur une lecture claire par catégories, avec des groupes de marque et des références déjà structurées.",
      cta: "Voir toutes les catégories",
    },
    filtersLabel: "Accès rapide",
    sectionNote: "Sélection actuelle",
    categories: [
      {
        id: "beer",
        name: "Bières",
        description:
          "Les références bière RUNI sont organisées par marque, degré et type de conditionnement.",
        tags: ["Lager", "Canettes", "Bouteilles"],
        groups: [
          {
            title: "Heineken",
            description:
              "Références Heineken Original en bouteille et en canette.",
            items: [
              {
                id: "heineken-original-bottle-33cl",
                name: "Heineken Original",
                meta: "Bouteille 33 cl",
                description: "",
                imageSrc: "/products/beers/heineken-original-bottle-33cl.png",
                imageAlt: "Heineken Original bouteille 33 cl",
              },
              {
                id: "heineken-original-can-50cl",
                name: "Heineken Original",
                meta: "Canette 50 cl",
                description: "",
                imageSrc: "/products/beers/heineken-original-can-50cl.png",
                imageAlt: "Heineken Original canette 50 cl",
              },
              {
                id: "heineken-original-can-33cl",
                name: "Heineken Original",
                meta: "Canette 33 cl",
                description: "",
                imageSrc: "/products/beers/heineken-original-can-33cl.png",
                imageAlt: "Heineken Original canette 33 cl",
              },
            ],
          },
          {
            title: "Vitalsberg",
            description:
              "Sélection Vitalsberg Original avec plusieurs degrés et formats.",
            items: [
              {
                id: "vitalsberg-original-5-can-50cl",
                name: "Vitalsberg Original 5%",
                meta: "Canette 50 cl",
                description: "",
                imageSrc: "/products/beers/vitalsberg-original-5-can-50cl.png",
                imageAlt: "Vitalsberg Original 5 pour cent canette 50 cl",
              },
              {
                id: "vitalsberg-original-8-can-50cl",
                name: "Vitalsberg Original 8%",
                meta: "Canette 50 cl",
                description: "",
                imageSrc: "/products/beers/vitalsberg-original-8-can-50cl.png",
                imageAlt: "Vitalsberg Original 8 pour cent canette 50 cl",
              },
              {
                id: "vitalsberg-original-12-can-50cl",
                name: "Vitalsberg Original 12%",
                meta: "Canette 50 cl",
                description: "",
                imageSrc: "/products/beers/vitalsberg-original-12-can-50cl.jpg",
                imageAlt: "Vitalsberg Original 12 pour cent canette 50 cl",
              },
            ],
          },
        ],
      },
      {
        id: "wine",
        name: "Vins",
        description:
          "La sélection vin est structurée par marque, couleur et format 750 ml.",
        tags: ["Rouge", "Blanc", "Rosé"],
        groups: [
          {
            title: "Barkan",
            description:
              "Références Barkan en rouge, blanc et rosé au format 750 ml.",
            items: [
              {
                id: "barkan-classic-red-750ml",
                name: "Barkan Classic",
                meta: "Vin Rouge • 750 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Barkan Classic vin rouge 750 ml",
              },
              {
                id: "barkan-reserve-cabernet-red-750ml",
                name: "Barkan Reserve Cabernet",
                meta: "Vin Rouge • 750 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Barkan Reserve Cabernet vin rouge 750 ml",
              },
              {
                id: "barkan-platinum-cabernet-sauvignon-red-750ml",
                name: "Barkan Platinum Cabernet Sauvignon",
                meta: "Vin Rouge • 750 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Barkan Platinum Cabernet Sauvignon vin rouge 750 ml",
              },
              {
                id: "barkan-classic-edition-white-750ml",
                name: "Barkan Classic Edition",
                meta: "Vin Blanc • 750 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Barkan Classic Edition vin blanc 750 ml",
              },
              {
                id: "barkan-gold-edition-white-750ml",
                name: "Barkan Gold Edition",
                meta: "Vin Blanc • 750 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Barkan Gold Edition vin blanc 750 ml",
              },
              {
                id: "barkan-gold-edition-rose-750ml",
                name: "Barkan Gold Edition",
                meta: "Vin Rosé • 750 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Barkan Gold Edition vin rose 750 ml",
              },
            ],
          },
        ],
      },
      {
        id: "whisky",
        name: "Whisky",
        description:
          "La famille whisky présente les références Glen Scott par variante et format.",
        tags: ["Imported", "Honey", "Formats"],
        groups: [
          {
            title: "Glen Scott",
            description:
              "Références Glen Scott Imported et Honey déclinées en plusieurs formats.",
            items: [
              {
                id: "glen-scott-1854-imported-1l",
                name: "Glen Scott 1854 Imported",
                meta: "1 L",
                description: "",
                imageSrc: "",
                imageAlt: "Glen Scott 1854 Imported 1 litre",
              },
              {
                id: "glen-scott-honey-1l",
                name: "Glen Scott Honey",
                meta: "1 L",
                description: "",
                imageSrc: "",
                imageAlt: "Glen Scott Honey 1 litre",
              },
              {
                id: "glen-scott-1854-imported-700ml",
                name: "Glen Scott 1854 Imported",
                meta: "700 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Glen Scott 1854 Imported 700 ml",
              },
              {
                id: "glen-scott-1854-imported-175ml",
                name: "Glen Scott 1854 Imported",
                meta: "175 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Glen Scott 1854 Imported 175 ml",
              },
            ],
          },
        ],
      },
      {
        id: "arak",
        name: "Arak",
        description:
          "La sélection arak distingue les références classiques, aromatisées et petits formats.",
        tags: ["Classique", "Fruit", "Citron"],
        groups: [
          {
            title: "Arak Shalit",
            description:
              "Références 750 ml avec profils classique et aromatisés.",
            items: [
              {
                id: "arak-shalit-extra-750ml",
                name: "Arak Shalit Extra",
                meta: "40% • 750 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Arak Shalit Extra 750 ml",
              },
              {
                id: "arak-shalit-axsus-750ml",
                name: "Arak Shalit Axsus",
                meta: "40% • 750 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Arak Shalit Axsus 750 ml",
              },
              {
                id: "arak-shalit-fruit-750ml",
                name: "Arak Shalit Fruit",
                meta: "40% • 750 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Arak Shalit Fruit 750 ml",
              },
              {
                id: "arak-shalit-lemon-750ml",
                name: "Arak Shalit Lemon",
                meta: "40% • 750 ml",
                description: "",
                imageSrc: "/products/arak/arak-shalit-lemon-750ml.jpg",
                imageAlt: "Arak Shalit Lemon 750 ml",
              },
            ],
          },
          {
            title: "Petits formats",
            description:
              "Formats 175 ml pour les références arak principales.",
            items: [
              {
                id: "arak-shalit-extra-175ml",
                name: "Arak Shalit Extra",
                meta: "175 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Arak Shalit Extra 175 ml",
              },
              {
                id: "arak-shalit-axsus-175ml",
                name: "Arak Shalit Axsus",
                meta: "175 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Arak Shalit Axsus 175 ml",
              },
              {
                id: "arak-shalit-lemon-175ml",
                name: "Arak Shalit Lemon",
                meta: "175 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Arak Shalit Lemon 175 ml",
              },
            ],
          },
        ],
      },
      {
        id: "vodka",
        name: "Vodka",
        description:
          "La famille vodka rassemble les déclinaisons Imperial Vodka par parfum et contenance.",
        tags: ["Nature", "Caramel", "Fraise", "Pomme"],
        groups: [
          {
            title: "Imperial Vodka",
            description:
              "Références Imperial Vodka déclinées en 50 cl, 70 cl et 175 ml.",
            items: [
              {
                id: "imperial-vodka-nature-50cl",
                name: "Imperial Vodka Nature",
                meta: "37,5% • 50 cl",
                description: "",
                imageSrc: "",
                imageAlt: "Imperial Vodka Nature 50 cl",
              },
              {
                id: "imperial-vodka-caramel-50cl",
                name: "Imperial Vodka Caramel",
                meta: "37,5% • 50 cl",
                description: "",
                imageSrc: "",
                imageAlt: "Imperial Vodka Caramel 50 cl",
              },
              {
                id: "imperial-vodka-fraise-50cl",
                name: "Imperial Vodka Fraise",
                meta: "37,5% • 50 cl",
                description: "",
                imageSrc: "",
                imageAlt: "Imperial Vodka Fraise 50 cl",
              },
              {
                id: "imperial-vodka-pomme-50cl",
                name: "Imperial Vodka Pomme",
                meta: "37,5% • 50 cl",
                description: "",
                imageSrc: "",
                imageAlt: "Imperial Vodka Pomme 50 cl",
              },
              {
                id: "imperial-vodka-nature-70cl",
                name: "Imperial Vodka Nature",
                meta: "37,5% • 70 cl",
                description: "",
                imageSrc: "",
                imageAlt: "Imperial Vodka Nature 70 cl",
              },
              {
                id: "imperial-vodka-caramel-70cl",
                name: "Imperial Vodka Caramel",
                meta: "37,5% • 70 cl",
                description: "",
                imageSrc: "",
                imageAlt: "Imperial Vodka Caramel 70 cl",
              },
              {
                id: "imperial-vodka-fraise-70cl",
                name: "Imperial Vodka Fraise",
                meta: "37,5% • 70 cl",
                description: "",
                imageSrc: "",
                imageAlt: "Imperial Vodka Fraise 70 cl",
              },
              {
                id: "imperial-vodka-pomme-70cl",
                name: "Imperial Vodka Pomme",
                meta: "37,5% • 70 cl",
                description: "",
                imageSrc: "",
                imageAlt: "Imperial Vodka Pomme 70 cl",
              },
              {
                id: "imperial-vodka-nature-175ml",
                name: "Imperial Vodka Nature",
                meta: "37,5% • 175 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Imperial Vodka Nature 175 ml",
              },
            ],
          },
        ],
      },
      {
        id: "spirits",
        name: "Spiritueux divers",
        description:
          "Une sélection complémentaire dédiée au pastis et au gin avec plusieurs formats.",
        tags: ["Pastis", "Gin"],
        groups: [
          {
            title: "Pastis de Shalit",
            description:
              "Références Pastis de Shalit en 1 L, 50 cl et 175 ml.",
            items: [
              {
                id: "pastis-de-shalit-1l",
                name: "Pastis",
                meta: "40% • 1 L",
                description: "",
                imageSrc: "",
                imageAlt: "Pastis de Shalit 1 litre",
              },
              {
                id: "pastis-de-shalit-50cl",
                name: "Pastis",
                meta: "40% • 50 cl",
                description: "",
                imageSrc: "",
                imageAlt: "Pastis de Shalit 50 cl",
              },
              {
                id: "pastis-de-shalit-175ml",
                name: "Pastis",
                meta: "40% • 175 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Pastis de Shalit 175 ml",
              },
            ],
          },
          {
            title: "Dry Gin (Experience)",
            description:
              "Références Dry Gin Experience en 1 L et 175 ml.",
            items: [
              {
                id: "dry-gin-experience-1l",
                name: "Dry Gin",
                meta: "40% • 1 L",
                description: "",
                imageSrc: "",
                imageAlt: "Dry Gin Experience 1 litre",
              },
              {
                id: "dry-gin-experience-175ml",
                name: "Dry Gin",
                meta: "40% • 175 ml",
                description: "",
                imageSrc: "",
                imageAlt: "Dry Gin Experience 175 ml",
              },
            ],
          },
        ],
      },
    ],
  },
  form: {
    labels: {
      fullName: "Nom complet",
      company: "Société",
      email: "Email",
      phone: "Téléphone",
      subject: "Objet",
      message: "Message",
      cityCountry: "Ville / Pays",
      inquiryType: "Type de demande",
      preferredLanguage: "Langue préférée",
      website: "Site web",
    },
    placeholders: {
      fullName: "Votre nom et prénom",
      company: "Nom de la société (facultatif)",
      email: "nom@entreprise.com",
      phone: "+212 ...",
      subject: "Objet de votre demande",
      message: "Décrivez votre demande",
      cityCountry: "Ville / pays (facultatif)",
    },
    inquiryTypes: {
      "": "Type de demande (facultatif)",
      general: "Demande générale",
      partnership: "Partenariat",
      administrative: "Sujet administratif",
      other: "Autre",
    },
    preferredLanguages: {
      "": "Langue préférée (facultatif)",
      fr: "Français",
      en: "English",
    },
    submit: {
      idle: "Envoyer le message",
      loading: "Envoi en cours...",
    },
    feedback: {
      success:
        "Votre message a bien été envoyé. Notre équipe vous répondra prochainement.",
      error:
        "Une erreur est survenue lors de l'envoi. Merci de réessayer ultérieurement.",
    },
    validation: {
      required: "Ce champ est requis.",
      invalid_email: "Veuillez renseigner une adresse email valide.",
      too_long: "La valeur saisie est trop longue.",
      spam_detected: "Envoi refusé.",
    },
  },
  footer: {
    navigationTitle: "Navigation",
    contactTitle: "Contact",
    addressLabel: "Adresse",
    phoneLabel: "Téléphone",
    faxLabel: "Fax",
    gsmLabel: "GSM",
    emailLabel: "Email",
    rights: "Tous droits réservés.",
  },
  legal: {
    registeredNameLabel: "Raison sociale",
    registeredName: "RUNI (ETS) / ETS RUNI",
    iceLabel: "ICE",
    ice: "001862537000084",
    rcLabel: "RC",
    rc: "45019 (Casablanca)",
    ifLabel: "IF",
    if: "1020957",
    capitalLabel: "Capital",
    capital: "100 000 MAD",
    legalFormLabel: "Forme juridique",
    legalForm: "SARL",
    creationDateLabel: "Date de création",
    creationDate: "08/10/1984",
    addressLabel: "Adresse",
    address: "125 BD Ziraoui, Casablanca, Maroc",
    statusLabel: "Statut",
    status: "En activité",
    phoneLabel: "Téléphone",
    phone: "+212 5 22 49 27 70",
    fax: "+212 5 22 49 27 70",
    gsm: "+212 6 60 40 74 74",
    emailLabel: "Email public",
    email: "etsrunicasa@gmail.com",
  },
  imageAlts: {
    logo: "Logo institutionnel ETS RUNI",
    mark: "Monogramme RUNI",
    collage: {
      IMG_0599:
        "Visuel Heineken montrant des bouteilles et des canettes disposées dans un seau métallique.",
      IMG_0601:
        "Visuel Vitalsberg montrant plusieurs bouteilles levées au premier plan.",
      IMG_0603:
        "Visuel Arak Shalit montrant plusieurs bouteilles aromatisées et deux verres sur une table.",
      IMG_0605:
        "Visuel Glen Scott montrant un whisky en train d'être versé dans un verre.",
      IMG_0607:
        "Visuel Barkan montrant plusieurs bouteilles devant un paysage viticole.",
      IMG_0608:
        "Visuel Glen Scott montrant plusieurs bouteilles et un verre sur un fond brun texturé.",
      IMG_0610:
        "Visuel Imperial Vodka montrant plusieurs bouteilles sur un fond bleu clair.",
      IMG_0613:
        "Visuel Pastis et Dry Gin montrant plusieurs bouteilles sur une table devant un décor de bar.",
    },
  },
} as const;

export type Dictionary = DeepWiden<typeof frDictionary>;

export const fr: Dictionary = frDictionary;
