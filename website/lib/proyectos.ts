export const categorias = ["TODOS", "CABINAS", "VENTANERÍA", "PASAMANOS", "DOMOS", "ESTRUCTURAS"] as const

export const proyectos = [
  {
    slug: "cabina-bano-lujo-premium",
    titulo: "Cabina de Baño de Lujo Premium",
    categoria: "CABINAS",
    img: "/images/cabina-bano-lujo.jpg",
    desc: "Vidrio templado 10mm, accesorios negro mate, puerta corrediza. Acabado hotel 5 estrellas.",
    caracteristicas: ["Vidrio 10mm templado", "Herrajes negro mate", "Sellado anti-fugas", "Garantía 2 años"],
    precioDesde: "Desde $1.200.000"
  },
  {
    slug: "cabina-bano-esquinera",
    titulo: "Cabina Esquinera Minimalista",
    categoria: "CABINAS",
    img: "/images/cabina-bano-lujo.jpg",
    desc: "Optimiza espacio en baños pequeños con diseño esquinero en vidrio transparente.",
    caracteristicas: ["Vidrio 8mm", "Apertura 90°", "Fácil limpieza"],
    precioDesde: "Desde $950.000"
  },
  {
    slug: "ventanal-industrial-loft",
    titulo: "Ventanal Industrial Tipo Loft",
    categoria: "VENTANERÍA",
    img: "/images/ventanal-industrial.jpg",
    desc: "Ventanales de piso a techo con perfilería negra tipo industrial. Ideal para lofts en Medellín.",
    caracteristicas: ["Vidrio laminado 6+6", "Perfilería negra mate", "Aislamiento térmico y acústico"],
    precioDesde: "Desde $2.500.000"
  },
  {
    slug: "ventanal-corredero-panoramico",
    titulo: "Ventanal Corredero Panorámico",
    categoria: "VENTANERÍA",
    img: "/images/ventanal-industrial.jpg",
    desc: "Sistema corredero con rieles embutidos para vista panorámica sin obstáculos.",
    caracteristicas: ["Rieles de alta resistencia", "Vidrio templado", "Apertura suave"],
    precioDesde: "Desde $1.800.000"
  },
  {
    slug: "division-oficina-vidrio",
    titulo: "División de Oficina en Vidrio Templado",
    categoria: "ESTRUCTURAS",
    img: "/images/division-oficina.jpg",
    desc: "Divisiones para oficinas modernas que mantienen luz natural y privacidad.",
    caracteristicas: ["Vidrio 10mm", "Perfilería aluminio negro", "Instalación 48h"],
    precioDesde: "Desde $1.500.000"
  },
  {
    slug: "fachada-flotante-vidrio",
    titulo: "Fachada Flotante en Vidrio",
    categoria: "ESTRUCTURAS",
    img: "/images/division-oficina.jpg",
    desc: "Fachadas estructurales con vidrio de seguridad para locales y oficinas.",
    caracteristicas: ["Vidrio laminado templado", "Estructura oculta", "Diseño premium"],
    precioDesde: "Desde $4.000.000"
  },
  {
    slug: "pasamanos-vidrio-acero",
    titulo: "Pasamanos en Vidrio y Acero",
    categoria: "PASAMANOS",
    img: "/images/division-oficina.jpg",
    desc: "Pasamanos con vidrio templado y acero inoxidable para escaleras y balcones.",
    caracteristicas: ["Vidrio 12mm", "Acero inox 304", "Seguridad certificada"],
    precioDesde: "Desde $1.100.000 / ml"
  },
  {
    slug: "domo-vidrio-laminado",
    titulo: "Domo en Vidrio Laminado",
    categoria: "DOMOS",
    img: "/images/ventanal-industrial.jpg",
    desc: "Domos para iluminar naturalmente patios y terrazas con protección UV.",
    caracteristicas: ["Vidrio laminado con filtro UV", "Estructura aluminio", "Impermeable"],
    precioDesde: "Desde $3.200.000"
  }
]