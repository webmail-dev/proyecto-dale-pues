export default {
  base: process.env.BASE_URL || "/",
  lang: "es-CO",
  title: "Dale Pues MVP",
  description: "Propuesta comercial y técnica para la plataforma Dale Pues.",
  cleanUrls: true,
  appearance: true,
  lastUpdated: false,
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark"
    }
  },
  themeConfig: {
    siteTitle: "Dale Pues",
    logo: {
      light: "/logo-light.svg",
      dark: "/logo-dark.svg"
    },
    nav: [
      { text: "Inicio", link: "/" },
      {
        text: "Propuesta",
        items: [
          { text: "Resumen ejecutivo", link: "/#_1-resumen-ejecutivo" },
          { text: "Alcance MVP", link: "/#_4-alcance-del-mvp" },
          { text: "Funcionalidades", link: "/#_6-funcionalidades-por-actor" },
          { text: "Inversión", link: "/#_24-inversion" },
          { text: "Forma de pago", link: "/#_25-forma-de-pago" }
        ]
      },
      {
        text: "Producto",
        items: [
          { text: "Roadmap", link: "/#roadmap-del-producto" },
          { text: "Evolución del producto", link: "/#_26-evolucion-del-producto" },
          { text: "Futuras etapas", link: "/#_28-futuras-etapas-del-proyecto" }
        ]
      },
      { text: "Guía visual", link: "/guia-visual" }
    ],
    sidebar: [
      {
        text: "Inicio",
        items: [
          { text: "Portada ejecutiva", link: "/" },
          { text: "Resumen ejecutivo", link: "/#_1-resumen-ejecutivo" },
          { text: "Alcance MVP", link: "/#_4-alcance-del-mvp" }
        ]
      },
      {
        text: "Propuesta",
        collapsed: false,
        items: [
          { text: "Actores del sistema", link: "/#_5-actores-del-sistema" },
          { text: "Funcionalidades", link: "/#_6-funcionalidades-por-actor" },
          { text: "Arquitectura", link: "/#_8-arquitectura-general" },
          { text: "Entregables", link: "/#_13-entregables" },
          { text: "Inversión", link: "/#_24-inversion" },
          { text: "Forma de pago", link: "/#_25-forma-de-pago" }
        ]
      },
      {
        text: "Producto",
        collapsed: false,
        items: [
          { text: "Roadmap", link: "/#roadmap-del-producto" },
          { text: "Evolución del producto", link: "/#_26-evolucion-del-producto" },
          { text: "Futuras etapas", link: "/#_28-futuras-etapas-del-proyecto" }
        ]
      },
      {
        text: "Diseño",
        items: [{ text: "Guía visual", link: "/guia-visual" }]
      }
    ],
    aside: true,
    outline: {
      level: "deep",
      label: "En este documento"
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Buscar",
            buttonAriaLabel: "Buscar"
          },
          modal: {
            displayDetails: "Mostrar detalles",
            resetButtonTitle: "Limpiar búsqueda",
            backButtonTitle: "Cerrar búsqueda",
            noResultsText: "Sin resultados para",
            footer: {
              selectText: "seleccionar",
              navigateText: "navegar",
              closeText: "cerrar"
            }
          }
        }
      }
    },
    docFooter: {
      prev: false,
      next: false
    },
    footer: {
      message: "Propuesta Comercial y Técnica",
      copyright: "BUCKAPI"
    }
  }
};
