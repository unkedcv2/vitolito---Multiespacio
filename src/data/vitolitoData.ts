export interface AttractionItem {
  id: string;
  name: string;
  badge: string;
  description: string;
  specs?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const VITOLITO_INFO = {
  name: 'Vitolito Eventos',
  tagline: 'Hacé de tu fiesta un parque de diversiones',
  subtitle: 'Juegos, desafíos, animación y experiencias para disfrutar una fiesta diferente en City Bell.',
  address: 'C. Cantilo 1481, B1896 City Bell, Provincia de Buenos Aires, Argentina',
  phone: '0221 459-1756',
  instagramUrl: 'https://www.instagram.com/multiespacio_vitolito/',
  instagramHandle: '@multiespacio_vitolito',
  whatsappNumber: '5492214591756', // Formato estándar de marcación argentina
};

export const ATTRACTIONS: AttractionItem[] = [
  {
    id: 'carrera-obstaculos',
    name: 'Carrera de Obstáculos Gigante',
    badge: 'Inflable Principal',
    description: 'Inflable gigante con recorrido de saltos, trepadas y desafíos interactivos.',
    specs: 'Medidas: 8 x 4 metros'
  },
  {
    id: 'pentatejo',
    name: 'Pentatejo de Aire',
    badge: '5 Jugadores en Simultáneo',
    description: 'Juego de competencia activa y velocidad sobre colchón de aire para 5 participantes.'
  },
  {
    id: 'laberinto-laser',
    name: 'Laberinto Láser',
    badge: 'Detector de Movimiento',
    description: 'Circuito de destreza y precisión donde los chicos atraviesan haces de luz sin activar los sensores.'
  },
  {
    id: 'just-dance',
    name: 'Proyector Just Dance',
    badge: 'Música & Pantalla',
    description: 'Coreografías interactivas con pantalla gigante, proyector y sonido para bailar y divertirse.'
  },
  {
    id: 'metegol',
    name: 'Metegol Profesional',
    badge: 'Clásico de Siempre',
    description: 'Partidos dinámicos y torneos entre amigos durante toda la fiesta.'
  },
  {
    id: 'mangrullo',
    name: 'Mangrullo Recreativo',
    badge: 'Parque Exterior',
    description: 'Estructura de trepada y juego al aire libre en nuestro parque verde.'
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'juegos-desafios',
    title: 'Juegos y Desafíos',
    description: 'Dinámicas activas pensadas para que cada chico participe, juegue y se divierta en equipo.',
    iconName: 'Trophy'
  },
  {
    id: 'actividades-guiadas',
    title: 'Actividades Guiadas',
    description: 'Coordinación y guía constante para acompañar el ritmo y las edades de cada grupo.',
    iconName: 'Compass'
  },
  {
    id: 'animacion-especial',
    title: 'Animación según la Edad',
    description: 'Materiales y propuestas lúdicas seleccionadas específicamente para las etapas de los chicos.',
    iconName: 'Wand2'
  },
  {
    id: 'luces-humo',
    title: 'Luces & Máquina de Humo',
    description: 'Efectos especiales de iluminación y humo que transforman el salón en una pista de fiesta.',
    iconName: 'Flame'
  },
  {
    id: 'globos-burbujas',
    title: 'Lluvia de Globos & Burbujas',
    description: 'Momento mágico e interactivo durante la fiesta con globos incluidos.',
    iconName: 'PartyPopper'
  },
  {
    id: 'oso-tolito',
    title: 'Show del Oso Tolito',
    description: 'Presencia del personaje que alegra y protagoniza momentos inolvidables del evento.',
    iconName: 'Smile'
  },
  {
    id: 'maquillaje',
    title: 'Maquillaje Artístico',
    description: 'Detalles y diseños artísticos para los chicos durante la celebración.',
    iconName: 'Palette'
  },
  {
    id: 'cotillon',
    title: 'Cotillón de Fantasía',
    description: 'Accesorios divertidos preparados especialmente para la foto grupal de recuerdo.',
    iconName: 'Camera'
  }
];

export const ADULT_SERVICES = [
  {
    id: 'espacio-relax',
    title: 'Espacio para Relajarse',
    description: 'Área cómoda diseñada para que los adultos puedan charlar, descansar y disfrutar de la fiesta.'
  },
  {
    id: 'servicio-adultos',
    title: 'Servicio para Adultos',
    description: 'Atención pensada para que los padres y familiares vivan una experiencia agradable y cómoda.'
  },
  {
    id: 'juegos-mesa',
    title: 'Juegos de Mesa',
    description: 'Opciones de entretenimiento clásicas para compartir momentos amenos entre los grandes.'
  },
  {
    id: 'equipo-presente',
    title: 'Equipo Completo durante el Evento',
    description: 'Personal presente y dedicado a la atención y supervisión constante de toda la fiesta.'
  }
];
