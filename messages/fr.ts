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
      title: "Un catalogue RUNI plus direct, plus visuel, et prêt à accueillir toutes les gammes.",
      description:
        "La homepage devient une vitrine plus promotionnelle pour la SARL RUNI, avec des visuels dominants et un accès immédiat à un catalogue organisé par catégories.",
      primaryCta: "Voir le catalogue",
      secondaryCta: "Découvrir RUNI",
      collageCaption:
        "Une mise en avant visuelle plus assumée pour la marque RUNI et ses futures références catalogue.",
      stats: [
        { value: "6", label: "Catégories" },
        { value: "1984", label: "Depuis" },
        { value: "Casablanca", label: "Implantation" },
        { value: "RUNI", label: "Marque" },
      ],
    },
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
        "Le présent site ne constitue ni un catalogue commercial ni une plateforme transactionnelle. Il a pour objectif de présenter l'entreprise, ses repères de fonctionnement et ses informations publiques de manière institutionnelle.",
      points: [
        "Communication informative et non marchande.",
        "Présentation neutre de l'entreprise et de son cadre d'activité.",
        "Accent mis sur l'identité, l'expérience et la prise de contact.",
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
      title: "Une base catalogue prête à recevoir toute l'offre RUNI.",
      description:
        "Le catalogue est désormais structuré par grandes familles. Les visuels produit, les textes détaillés et les fiches finales pourront être ajoutés progressivement.",
      primaryCta: "Contacter RUNI",
      secondaryCta: "Retour à l'accueil",
    },
    preview: {
      eyebrow: "Catégories",
      title: "Explorer les familles principales",
      description:
        "Le site met désormais l'accent sur l'offre RUNI avec une lecture claire par catégories, dans un esprit catalogue plus proche d'un site spécialisé.",
      cta: "Voir toutes les catégories",
    },
    filtersLabel: "Accès rapide",
    sectionNote: "Contenu en préparation",
    slotLabel: "Référence",
    placeholderTitle: "Fiche produit à venir",
    placeholderBody:
      "Les visuels, volumes, descriptions et références détaillées seront ajoutés ultérieurement.",
    categories: [
      {
        id: "beer",
        name: "Bières",
        description:
          "Une section prête pour regrouper les références bière RUNI par formats, profils et familles principales.",
        tags: ["Lager", "Canettes", "Bouteilles"],
      },
      {
        id: "wine",
        name: "Vins",
        description:
          "Une structure pensée pour accueillir les gammes vin par couleur, profil et présentation commerciale.",
        tags: ["Rouges", "Blancs", "Rosés"],
      },
      {
        id: "whisky",
        name: "Whisky",
        description:
          "Une catégorie dédiée aux références whisky, avec de l'espace pour les formats, variantes et éditions futures.",
        tags: ["Blended", "Réserves", "Formats"],
      },
      {
        id: "arak",
        name: "Arak",
        description:
          "Une base catalogue distincte pour les références arak classiques et aromatisées.",
        tags: ["Classique", "Axuss", "Citron"],
      },
      {
        id: "vodka",
        name: "Vodka",
        description:
          "Une famille dédiée aux vodkas nature et aromatisées, avec une lecture simple pour les futures fiches.",
        tags: ["Nature", "Aromatisée", "Formats"],
      },
      {
        id: "spirits",
        name: "Spiritueux divers",
        description:
          "Un ensemble prévu pour les références complémentaires comme le gin, le pastis et d'autres spiritueux.",
        tags: ["Pastis", "Gin", "Autres"],
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
    legalTitle: "Informations légales",
    contactTitle: "Contact",
    addressLabel: "Adresse",
    phoneLabel: "Téléphone",
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
    phone: "+212 0000000",
    emailLabel: "Email public",
    email: "etsrunicasa@gmail.com",
  },
  imageAlts: {
    logo: "Logo institutionnel ETS RUNI",
    mark: "Monogramme RUNI",
    collage: {
      IMG_0599:
        "Visuel d'archive montrant des bouteilles et des canettes disposées dans un seau métallique.",
      IMG_0601:
        "Visuel d'archive présentant plusieurs bouteilles tenues en premier plan.",
      IMG_0603:
        "Visuel d'archive présentant plusieurs références alignées sur fond clair.",
      IMG_0605:
        "Visuel d'archive présentant des formats alignés dans une mise en page verticale.",
      IMG_0607:
        "Visuel d'archive présentant plusieurs bouteilles sur un décor paysager.",
      IMG_0608:
        "Visuel d'archive montrant des bouteilles sur un fond brun texturé.",
      IMG_0610:
        "Visuel d'archive présentant plusieurs bouteilles sur un fond bleu clair.",
      IMG_0613:
        "Visuel d'archive montrant plusieurs bouteilles disposées sur un décor sombre.",
    },
  },
} as const;

export type Dictionary = DeepWiden<typeof frDictionary>;

export const fr: Dictionary = frDictionary;
