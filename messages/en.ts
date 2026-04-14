import type { Dictionary } from "@/messages/fr";

export const en: Dictionary = {
  site: {
    name: "ETS RUNI",
    shortName: "RUNI",
    tagline: "Institutional presence based in Casablanca, Morocco.",
  },
  seo: {
    home: {
      title: "Home",
      description:
        "RUNI presents a stronger visual homepage and a category-based catalogue entry point.",
    },
    catalog: {
      title: "Catalogue",
      description:
        "Explore RUNI catalogue categories: beers, wines, whisky, arak, vodka, and additional spirits.",
    },
    about: {
      title: "About",
      description:
        "Explore RUNI's history, identity, experience, and legal information.",
    },
    contact: {
      title: "Contact",
      description:
        "Contact ETS RUNI through its public details or secure bilingual contact form.",
    },
  },
  nav: {
    home: "Home",
    catalog: "Catalogue",
    about: "About",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    contactCta: "Contact us",
    languageSwitcherLabel: "Change language",
  },
  home: {
    hero: {
      eyebrow: "RUNI SARL | Casablanca",
      title: "A more direct, more visual RUNI catalogue homepage ready for every range.",
      description:
        "The homepage now works as a stronger promotional front for RUNI, with dominant visuals and immediate access to a category-based catalogue structure.",
      primaryCta: "View catalogue",
      secondaryCta: "About RUNI",
      collageCaption:
        "A more assertive visual direction for the RUNI brand and its future catalogue ranges.",
      stats: [
        { value: "6", label: "Categories" },
        { value: "1984", label: "Since" },
        { value: "Casablanca", label: "Location" },
        { value: "RUNI", label: "Brand" },
      ],
    },
    intro: {
      eyebrow: "Overview",
      title: "A company built for continuity",
      body:
        "The ETS RUNI website provides a clear information base about the company, its location, its experience, and its public contact points. The approach remains deliberately institutional, with content focused on company structure and professional communication.",
      highlights: [
        {
          title: "Clear organization",
          description:
            "Structured communication that makes the company's identity and operating framework easier to understand.",
        },
        {
          title: "Operational continuity",
          description:
            "An established presence in Casablanca spanning several decades and grounded in long-term continuity.",
        },
        {
          title: "Professional exchange",
          description:
            "Communication designed around information requests, coordination, and direct contact follow-up.",
        },
      ],
    },
    experience: {
      eyebrow: "Track record",
      title: "A trajectory shaped by consistency",
      body:
        "Since its creation, ETS RUNI has relied on a steady operating framework, practical field knowledge, and a stable professional presence.",
      timeline: [
        {
          year: "1984",
          title: "Company founded",
          description:
            "The company was established in Casablanca and anchored its presence within a structured operating framework from the outset.",
        },
        {
          year: "Development",
          title: "Activity consolidation",
          description:
            "The company progressively strengthened its coordination methods, organization, and professional footprint.",
        },
        {
          year: "Today",
          title: "Clear institutional positioning",
          description:
            "The website now highlights the company's identity, legal references, and key public contact information.",
        },
      ],
    },
    values: {
      eyebrow: "Values",
      title: "Clear working principles",
      items: [
        {
          title: "Discipline",
          description:
            "A careful presentation of essential information without excess or overly commercial messaging.",
        },
        {
          title: "Stability",
          description:
            "A professional trajectory focused on continuity, local presence, and structural clarity.",
        },
        {
          title: "Availability",
          description:
            "Public contact details and a contact form designed to support relevant business inquiries.",
        },
      ],
    },
    cta: {
      title: "Connect with our team",
      body:
        "For institutional contact or information requests, our bilingual online contact form is available.",
      button: "Go to contact page",
    },
  },
  about: {
    hero: {
      eyebrow: "About",
      title: "Identity, structure, and positioning",
      description:
        "This page brings together ETS RUNI's core institutional information: identity, location, legal framework, and a neutral reading of the company's positioning.",
    },
    identity: {
      title: "Company identity",
      body:
        "ETS RUNI is a company based in Casablanca. This institutional website emphasizes a sober, professional, and legible identity suited to corporate communication.",
    },
    background: {
      title: "Anchoring and continuity",
      body:
        "Established in 1984, the company is positioned within a long-term trajectory. That history supports a presentation centered on stability, experience, and operational understanding.",
    },
    positioning: {
      title: "Business positioning",
      body:
        "This website is neither a commercial catalog nor a transactional platform. Its role is to present the company, its operational references, and its public information through a strictly institutional lens.",
      points: [
        "Informational and non-transactional communication.",
        "Neutral presentation of the company and its operating framework.",
        "Focus on identity, experience, and direct contact.",
      ],
    },
    legalIntro: {
      title: "Legal and structural information",
      body:
        "The information below is displayed to provide a clear reading of the company's status and administrative registration.",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Get in touch with ETS RUNI",
      description:
        "Use our public contact details or the form below to send a professional or institutional request.",
    },
    details: {
      title: "Public contact details",
      intro:
        "These details are published to support direct and structured communication with the company.",
      officeTitle: "Casablanca headquarters",
      officeNote:
        "Requests sent through the form are forwarded by email to the designated internal contact address.",
    },
    form: {
      title: "Contact form",
      intro:
        "Please provide the relevant information needed to facilitate the handling of your request.",
      privacy:
        "The information provided is used only to respond to your contact request.",
    },
  },
  catalog: {
    hero: {
      eyebrow: "Catalogue",
      title: "A catalogue foundation ready to receive the full RUNI offering.",
      description:
        "The catalogue is now structured by major product families. Product visuals, detailed copy, and final item sheets can be added progressively.",
      primaryCta: "Contact RUNI",
      secondaryCta: "Back to home",
    },
    preview: {
      eyebrow: "Categories",
      title: "Explore the main families",
      description:
        "The site now places stronger emphasis on the RUNI offer with a clearer category-first reading inspired by specialist catalogue platforms.",
      cta: "View all categories",
    },
    filtersLabel: "Quick access",
    sectionNote: "Content in preparation",
    slotLabel: "Reference",
    placeholderTitle: "Product sheet coming soon",
    placeholderBody:
      "Visuals, volumes, descriptions, and detailed references will be added later.",
    categories: [
      {
        id: "beer",
        name: "Beers",
        description:
          "A section ready to group RUNI beer references by format, profile, and major family.",
        tags: ["Lager", "Cans", "Bottles"],
      },
      {
        id: "wine",
        name: "Wines",
        description:
          "A structure designed to host wine ranges by color, profile, and commercial presentation.",
        tags: ["Red", "White", "Rose"],
      },
      {
        id: "whisky",
        name: "Whisky",
        description:
          "A dedicated category for whisky references with room for formats, variants, and future editions.",
        tags: ["Blended", "Reserves", "Formats"],
      },
      {
        id: "arak",
        name: "Arak",
        description:
          "A distinct catalogue base for classic and flavored arak references.",
        tags: ["Classic", "Axuss", "Lemon"],
      },
      {
        id: "vodka",
        name: "Vodka",
        description:
          "A dedicated family for plain and flavored vodkas with a simple structure for future product sheets.",
        tags: ["Plain", "Flavored", "Formats"],
      },
      {
        id: "spirits",
        name: "Additional spirits",
        description:
          "A family planned for complementary references such as gin, pastis, and other spirits.",
        tags: ["Pastis", "Gin", "Other"],
      },
    ],
  },
  form: {
    labels: {
      fullName: "Full name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      message: "Message",
      cityCountry: "City / Country",
      inquiryType: "Inquiry type",
      preferredLanguage: "Preferred language",
      website: "Website",
    },
    placeholders: {
      fullName: "Your full name",
      company: "Company name (optional)",
      email: "name@company.com",
      phone: "+212 ...",
      subject: "Subject of your inquiry",
      message: "Describe your request",
      cityCountry: "City / country (optional)",
    },
    inquiryTypes: {
      "": "Inquiry type (optional)",
      general: "General inquiry",
      partnership: "Partnership",
      administrative: "Administrative matter",
      other: "Other",
    },
    preferredLanguages: {
      "": "Preferred language (optional)",
      fr: "French",
      en: "English",
    },
    submit: {
      idle: "Send message",
      loading: "Sending...",
    },
    feedback: {
      success:
        "Your message has been sent successfully. Our team will respond shortly.",
      error:
        "An error occurred while sending your message. Please try again later.",
    },
    validation: {
      required: "This field is required.",
      invalid_email: "Please enter a valid email address.",
      too_long: "The value entered is too long.",
      spam_detected: "Submission rejected.",
    },
  },
  footer: {
    navigationTitle: "Navigation",
    legalTitle: "Legal details",
    contactTitle: "Contact",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    rights: "All rights reserved.",
  },
  legal: {
    registeredNameLabel: "Registered name",
    registeredName: "RUNI (ETS) / ETS RUNI",
    iceLabel: "ICE",
    ice: "001862537000084",
    rcLabel: "RC",
    rc: "45019 (Casablanca)",
    ifLabel: "IF",
    if: "1020957",
    capitalLabel: "Capital",
    capital: "100 000 MAD",
    legalFormLabel: "Legal form",
    legalForm: "SARL",
    creationDateLabel: "Creation date",
    creationDate: "08/10/1984",
    addressLabel: "Address",
    address: "125 BD Ziraoui, Casablanca, Morocco",
    statusLabel: "Status",
    status: "Active",
    phoneLabel: "Phone",
    phone: "+212 0000000",
    emailLabel: "Public email",
    email: "etsrunicasa@gmail.com",
  },
  imageAlts: {
    logo: "ETS RUNI institutional logo",
    mark: "RUNI monogram",
    collage: {
      IMG_0599:
        "Archive visual showing bottles and cans arranged in a metal bucket.",
      IMG_0601:
        "Archive visual presenting multiple bottles held in the foreground.",
      IMG_0603:
        "Archive visual showing several references arranged on a light background.",
      IMG_0605:
        "Archive visual showing multiple formats aligned in a vertical layout.",
      IMG_0607:
        "Archive visual showing several bottles placed in a vineyard setting.",
      IMG_0608:
        "Archive visual featuring bottles on a textured brown background.",
      IMG_0610:
        "Archive visual presenting several bottles against a pale blue background.",
      IMG_0613:
        "Archive visual showing multiple bottles set against a darker scene.",
    },
  },
};
