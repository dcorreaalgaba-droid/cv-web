/*
 * Todo el texto de la web está aquí. Para actualizar el CV solo hay que tocar este archivo.
 * `pending: true` muestra una marca "Por completar": quítala cuando el dato sea definitivo.
 * Para cambiar la foto: sustituye assets/foto.jpg por la nueva, con el mismo nombre.
 */
window.CV = {
  name: ["David", "Correa"],
  fullName: "David Correa Algaba", // para buscadores, pie y descripciones
  photo: "assets/foto.jpg",
  email: ["dcorreaalgaba", "gmail.com"], // se une en el navegador para dificultar el spam
  linkedin: "https://www.linkedin.com/in/davidcorreaalg/",
  linkedinLabel: "linkedin.com/in/davidcorreaalg",

  // Logos de assets/logos/ para cada nombre que aparece en la web
  logos: {
    "Exus": ["exus"],
    "Kynaxis": ["kynaxis"],
    "Banco Santander (CIB)": ["santander"],
    "Kynaxis / Banco Santander (CIB)": ["kynaxis", "santander"],
    "WiZink Bank": ["wizink"],
    "Universidad Complutense": ["ucm"],
    "Universidad Complutense de Madrid": ["ucm"],
    "Universidad Nebrija": ["nebrija"],
    "CFA Institute": ["cfa"],
    "IEB": ["ieb"],
    "Mirabal International School": ["mirabal"],
    "Programa Erasmus+": ["erasmus"],
    "Erasmus+ Programme": ["erasmus"],
  },
  wideLogos: ["erasmus"], // logos apaisados, en un recuadro más ancho

  es: {
    meta: {
      title: "David Correa Algaba | Controller · Digitalización, automatización e IFRS 9",
      description:
        "CV de David Correa Algaba, controller de digitalización y automatización en Madrid, con experiencia en banca: IFRS 9, coberturas contables, tesorería y reporting.",
    },
    ui: {
      skip: "Saltar al contenido",
      nav: { experience: "Experiencia", education: "Formación", skills: "Competencias", contact: "Contacto" },
      email: "Escríbeme",
      download: "Descargar CV",
      career: "Trayectoria",
      current: "Puesto actual",
      pending: "Por completar",
      fullProfile: "Perfil completo en LinkedIn",
      footer: "Madrid, España",
    },
    hero: {
      eyebrow: "Controller en Exus, Madrid",
      roles: ["Digitalización y automatización", "IFRS 9", "Tesorería"],
      statement:
        "Controller de digitalización y automatización, con experiencia previa en banca: transformación IFRS 9, coberturas contables, tesorería y reporting que conecta a finanzas con tecnología.",
    },
    facts: [
      { label: "Ahora", value: "Controller, Exus", note: "Digitalización y automatización" },
      { label: "Experiencia", value: "Banca y finanzas", note: "Banco Santander CIB, WiZink Bank" },
      { label: "Especialidad", value: "IFRS 9 y coberturas", note: "Tesorería y reporting regulatorio" },
      { label: "Formación", value: "Doble Grado, UCM", note: "Gestión y Administración Pública y Economía" },
      { label: "Certificación", value: "CFA Level 1", note: "Candidato 2026" },
      { label: "Idiomas", value: "Español, inglés (C1)", note: "Alemán básico" },
      { label: "Ubicación", value: "Madrid, España" },
    ],
    experienceIntro:
      "De la contabilidad y la tesorería en banca a un puesto de controller centrado en digitalización y automatización.",
    experience: [
      {
        date: "Ago 2026 – Actualidad",
        company: "Exus",
        role: "Controller de Digitalización y Automatización",
        where: "Madrid, España",
        current: true,
        bullets: [
          "Rediseño del modelo de reporting financiero en Power BI.",
          "Diseño de un modelo de reporting escalable para todas las filiales del grupo.",
          "Automatización de procesos financieros con Python y Git.",
          "Soporte al control de gestión y a la toma de decisiones de la dirección.",
        ],
        tags: ["Control de gestión", "Reporting financiero", "Power BI", "Python", "Git", "Automatización"],
      },
      {
        date: "Oct 2024 – Ago 2026",
        duration: "1 año 11 meses",
        company: "Kynaxis / Banco Santander (CIB)",
        role: "Consultor",
        where: "Madrid, España",
        summary:
          "Consultoría en el área de Corporate & Investment Banking de Banco Santander, entre contabilidad, tesorería y reporting.",
        bullets: [
          "Apoyo en proyectos de transformación contable bajo IFRS 9.",
          "Seguimiento de coberturas contables y contratos de tesorería.",
          "Participación en el diseño y la mejora de soluciones de reporting en Power BI para tesorería y actividad regulatoria.",
          "Contribución a iniciativas de mejora de procesos, coordinando a los equipos de negocio y tecnología.",
          "Colaboración con finanzas y tecnología para definir requisitos de negocio y necesidades de reporting.",
        ],
        tags: ["IFRS 9", "Hedge accounting", "Tesorería", "Power BI", "Reporting regulatorio", "Mejora de procesos"],
      },
      {
        date: "Jun 2023 – Ago 2024",
        duration: "1 año 3 meses",
        company: "WiZink Bank",
        role: "Junior Financial Controller",
        where: "Madrid, España",
        summary: "Control financiero en Aplazame, del grupo WiZink: facturación, tesorería, presupuesto y costes.",
        bullets: [
          "Apoyo en la gestión de la facturación y el control de facturas.",
          "Conciliaciones bancarias y seguimiento de tesorería.",
          "Apoyo en presupuestos y en el control de costes de proveedores.",
          "Periodificaciones mensuales, provisiones y apoyo al reporting interno.",
        ],
        tags: ["Control financiero", "Conciliaciones", "Presupuestos", "Provisiones"],
      },
    ],
    educationIntro: "Una base doble en economía y administración pública, ampliada ahora con el programa CFA.",
    education: [
      {
        date: "2026",
        school: "CFA Institute",
        title: "CFA Level 1",
        note: "Candidato 2026",
      },
      {
        date: "Feb – Ago 2024",
        school: "Universidad Nebrija",
        title: "Curso en Análisis de Estados Financieros y Económicos de la Empresa",
      },
      {
        date: "2019 – 2024",
        school: "Universidad Complutense de Madrid",
        title: "Doble Grado en Gestión y Administración Pública y Economía",
        stats: [
          { value: "9", label: "TFG de Economía: economía ambiental" },
          { value: "9,5", label: "TFG de Administración Pública" },
        ],
      },
      {
        date: "2021 – 2022",
        school: "Programa Erasmus+",
        title: "Estancia académica en Cracovia, Polonia",
      },
      {
        date: "2018",
        school: "IEB",
        title: "Financial Workshop",
      },
      {
        school: "Mirabal International School",
        title: "Educación secundaria",
      },
    ],
    skillsIntro: "Conocimiento técnico contable y de tesorería, con las herramientas para convertirlo en reporting útil.",
    skills: [
      {
        title: "Finanzas",
        note: "En lo que trabajo",
        items: [
          "IFRS 9",
          "Hedge accounting",
          "Operaciones de tesorería",
          "Reporting regulatorio",
          "Análisis financiero",
          "Mejora y optimización de procesos financieros",
        ],
      },
      {
        title: "Herramientas",
        note: "Con lo que trabajo",
        items: ["Excel: Power Query, tablas dinámicas, reporting", "Power BI", "Dynamics 365", "Python básico", "Git"],
      },
    ],
    languages: {
      title: "Idiomas",
      items: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Avanzado (Cambridge C1)" },
        { name: "Alemán", level: "Básico" },
      ],
    },
    contact: {
      title: "¿Hablamos?",
      text: "La forma más rápida de contactar conmigo es por email o LinkedIn.",
    },
  },

  en: {
    meta: {
      title: "David Correa Algaba | Controller · Digitalisation, Automation & IFRS 9",
      description:
        "CV of David Correa Algaba, a digitalisation and automation controller in Madrid with banking experience: IFRS 9, hedge accounting, treasury and reporting.",
    },
    ui: {
      skip: "Skip to content",
      nav: { experience: "Experience", education: "Education", skills: "Skills", contact: "Contact" },
      email: "Email me",
      download: "Download CV",
      career: "Career so far",
      current: "Current role",
      pending: "To complete",
      fullProfile: "Full profile on LinkedIn",
      footer: "Madrid, Spain",
    },
    hero: {
      eyebrow: "Controller at Exus, Madrid",
      roles: ["Digitalisation & Automation", "IFRS 9", "Treasury"],
      statement:
        "Digitalisation and automation controller with a background in banking: IFRS 9 transformation, hedge accounting, treasury and reporting that connects finance with technology.",
    },
    facts: [
      { label: "Now", value: "Controller, Exus", note: "Digitalisation and automation" },
      { label: "Experience", value: "Banking and finance", note: "Banco Santander CIB, WiZink Bank" },
      { label: "Focus", value: "IFRS 9 and hedging", note: "Treasury and regulatory reporting" },
      { label: "Education", value: "Double degree, UCM", note: "Economics and Public Administration" },
      { label: "Certification", value: "CFA Level 1", note: "2026 candidate" },
      { label: "Languages", value: "Spanish, English (C1)", note: "Basic German" },
      { label: "Based in", value: "Madrid, Spain" },
    ],
    experienceIntro:
      "From accounting and treasury in banking to a controller role focused on digitalisation and automation.",
    experience: [
      {
        date: "Aug 2026 – Present",
        company: "Exus",
        role: "Digitalisation & Automation Controller",
        where: "Madrid, Spain",
        current: true,
        bullets: [
          "Redesigned the financial reporting model in Power BI.",
          "Designed a scalable reporting model for all group subsidiaries.",
          "Automated financial processes with Python and Git.",
          "Supported management control and senior management decision-making.",
        ],
        tags: ["Management control", "Financial reporting", "Power BI", "Python", "Git", "Automation"],
      },
      {
        date: "Oct 2024 – Aug 2026",
        duration: "1 yr 11 mos",
        company: "Kynaxis / Banco Santander (CIB)",
        role: "Consultant",
        where: "Madrid, Spain",
        summary:
          "Consulting for Banco Santander's Corporate & Investment Banking division, across accounting, treasury and reporting.",
        bullets: [
          "Supported IFRS 9 accounting transformation projects.",
          "Monitored accounting hedges and treasury contracts.",
          "Took part in designing and enhancing Power BI reporting solutions for treasury and regulatory activities.",
          "Contributed to process improvement initiatives by coordinating business and technical stakeholders.",
          "Worked with finance and technical teams to define business requirements and reporting needs.",
        ],
        tags: ["IFRS 9", "Hedge accounting", "Treasury", "Power BI", "Regulatory reporting", "Process improvement"],
      },
      {
        date: "Jun 2023 – Aug 2024",
        duration: "1 yr 3 mos",
        company: "WiZink Bank",
        role: "Junior Financial Controller",
        where: "Madrid, Spain",
        summary: "Financial control at Aplazame, part of the WiZink Group: billing, treasury, budgeting and costs.",
        bullets: [
          "Supported billing management and invoicing control processes.",
          "Performed bank reconciliations and treasury monitoring.",
          "Supported budgeting activities and supplier cost control.",
          "Handled monthly accruals and provisions, and supported internal reporting.",
        ],
        tags: ["Financial control", "Reconciliations", "Budgeting", "Provisions"],
      },
    ],
    educationIntro: "A double foundation in economics and public administration, now extended with the CFA programme.",
    education: [
      {
        date: "2026",
        school: "CFA Institute",
        title: "CFA Level 1",
        note: "2026 candidate",
      },
      {
        date: "Feb – Aug 2024",
        school: "Universidad Nebrija",
        title: "Course in Financial and Economic Statement Analysis",
      },
      {
        date: "2019 – 2024",
        school: "Universidad Complutense de Madrid",
        title: "Double Bachelor's Degree in Economics and Public Administration",
        stats: [
          { value: "9", label: "Economics final project: environmental economics" },
          { value: "9.5", label: "Public Administration final project" },
        ],
      },
      {
        date: "2021 – 2022",
        school: "Erasmus+ Programme",
        title: "Academic exchange in Kraków, Poland",
      },
      {
        date: "2018",
        school: "IEB",
        title: "Financial Workshop",
      },
      {
        school: "Mirabal International School",
        title: "Secondary education",
      },
    ],
    skillsIntro: "Technical accounting and treasury knowledge, with the tools to turn it into useful reporting.",
    skills: [
      {
        title: "Finance",
        note: "What I work on",
        items: [
          "IFRS 9",
          "Hedge accounting",
          "Treasury operations",
          "Regulatory reporting",
          "Financial analysis",
          "Financial process improvement and optimisation",
        ],
      },
      {
        title: "Tools",
        note: "What I work with",
        items: ["Excel: Power Query, pivot tables, reporting", "Power BI", "Dynamics 365", "Basic Python", "Git"],
      },
    ],
    languages: {
      title: "Languages",
      items: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Advanced (Cambridge C1)" },
        { name: "German", level: "Basic" },
      ],
    },
    contact: {
      title: "Let's talk",
      text: "The fastest way to reach me is by email or LinkedIn.",
    },
  },
};
