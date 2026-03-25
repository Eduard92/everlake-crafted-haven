export type Lang = "en" | "es";

const translations = {
  // Nav
  "nav.hideaways": { en: "Hideaways", es: "Refugios" },
  "nav.experiences": { en: "Experiences", es: "Experiencias" },
  "nav.vipShop": { en: "VIP Shop", es: "Tienda VIP" },
  "nav.faq": { en: "FAQ", es: "Preguntas" },

  // Hero
  "hero.badge": { en: "VIP Early Access · Covington, Georgia", es: "Acceso VIP Anticipado · Covington, Georgia" },
  "hero.title1": { en: "The Getaway", es: "La Escapada" },
  "hero.title2": { en: "That Stays", es: "Que Se Queda" },
  "hero.title3": { en: "With You", es: "Contigo" },
  "hero.subtitle1": {
    en: "Before Everlake opens its gates to the world, you — our Founders — have first access to the lake.",
    es: "Antes de que Everlake abra sus puertas al mundo, ustedes — nuestros Fundadores — tienen acceso prioritario al lago.",
  },
  "hero.subtitle2": {
    en: "Your 2-Week Exclusive Window Is Now Open.",
    es: "Su Ventana Exclusiva de 2 Semanas Está Abierta.",
  },
  "hero.cta": { en: "See My VIP Packages", es: "Ver Mis Paquetes VIP" },
  "hero.scroll": { en: "Scroll", es: "Desplazar" },

  // Intro
  "intro.badge": { en: "A Limited Invitation", es: "Una Invitación Limitada" },
  "intro.title": {
    en: "A sanctuary where <italic>personalized rest</italic> is embedded in every element of our design.",
    es: "Un santuario donde el <italic>descanso personalizado</italic> está integrado en cada elemento de nuestro diseño.",
  },
  "intro.subtitle": {
    en: "In a world that never stops, we're building a place where you can. Find yourself completely immersed in nature without sacrificing a single comfort.",
    es: "En un mundo que nunca se detiene, estamos construyendo un lugar donde tú puedes hacerlo. Sumérgete completamente en la naturaleza sin sacrificar una sola comodidad.",
  },
  "intro.founders": {
    en: "You believed in Everlake before anyone else did. Your Founders Reward is now waiting.",
    es: "Creíste en Everlake antes que nadie. Tu Recompensa de Fundador te espera.",
  },

  // Hideaways
  "hideaways.badge": { en: "Our Hideaways", es: "Nuestros Refugios" },
  "hideaways.title": { en: "Designed for", es: "Diseñados para la" },
  "hideaways.titleItalic": { en: "stillness", es: "quietud" },
  "hideaways.imgLabel1": { en: "Exterior · Forest Setting", es: "Exterior · Entorno Boscoso" },
  "hideaways.imgLabel2": { en: "Interior · Bedroom Suite", es: "Interior · Suite Dormitorio" },
  "hideaways.tourBadge": { en: "Take a Cabin Tour", es: "Haz un Recorrido por la Cabaña" },
  "hideaways.feat1Title": { en: "Private Space", es: "Espacio Privado" },
  "hideaways.feat1Desc": {
    en: "Each hideaway is entirely yours. Slow mornings and quiet nights beneath the stars.",
    es: "Cada refugio es completamente tuyo. Mañanas tranquilas y noches silenciosas bajo las estrellas.",
  },
  "hideaways.feat2Title": { en: "Scenic Views", es: "Vistas Panorámicas" },
  "hideaways.feat2Desc": {
    en: "Nestled on the lake or tucked into the woods — serene nature is just a step away.",
    es: "Junto al lago o entre el bosque — la naturaleza serena está a un paso.",
  },
  "hideaways.feat3Title": { en: "Skip Check-In", es: "Sin Registro" },
  "hideaways.feat3Desc": {
    en: "Digital check-in grants instant access. Arrive with ease and step straight into calm.",
    es: "El registro digital te da acceso inmediato. Llega con tranquilidad y entra directo a la calma.",
  },

  // VIP Shop
  "vip.badge": { en: "Exclusive VIP Access", es: "Acceso VIP Exclusivo" },
  "vip.title1": { en: "Lock in your rate.", es: "Asegura tu tarifa." },
  "vip.title2": { en: "Unlock Your Stay", es: "Desbloquea Tu Estadía" },
  "vip.title3": { en: "Before Everyone Else", es: "Antes Que Nadie" },
  "vip.subtitle": {
    en: "Each package below is a discounted rate voucher — not a booking. Purchase yours now at Founders pricing, then use it to book your actual stay once our calendar opens after April 27th.",
    es: "Cada paquete a continuación es un cupón con tarifa de descuento — no una reserva. Compra el tuyo ahora a precio de Fundador, luego úsalo para reservar tu estadía una vez que nuestro calendario abra después del 27 de abril.",
  },

  // Countdown
  "countdown.expired": { en: "Offer Expired", es: "Oferta Expirada" },
  "countdown.days": { en: "Days", es: "Días" },
  "countdown.hours": { en: "Hours", es: "Horas" },
  "countdown.minutes": { en: "Minutes", es: "Minutos" },
  "countdown.seconds": { en: "Seconds", es: "Segundos" },

  // Experiences
  "exp.badge": { en: "On-Property", es: "En la Propiedad" },
  "exp.title": { en: "Experiences", es: "Experiencias" },
  "exp.titleItalic": { en: "& Adventures", es: "y Aventuras" },
  "exp.subtitle": {
    en: "Everlake is more than a place to stay — it's a place to truly experience nature and reconnect with those who matter most.",
    es: "Everlake es más que un lugar para hospedarse — es un lugar para vivir la naturaleza y reconectar con quienes más importan.",
  },
  "exp.showAll": { en: "Show All {count} Experiences", es: "Ver Las {count} Experiencias" },
  "exp.showLess": { en: "Show Less", es: "Ver Menos" },

  // Experience items
  "exp.kayak.title": { en: "Canoeing & Kayaking", es: "Canoa y Kayak" },
  "exp.kayak.desc": { en: "Paddle peacefully along the lake with scenic views all around.", es: "Rema tranquilamente por el lago con vistas panorámicas." },
  "exp.bonfire.title": { en: "Lakeside Bonfires", es: "Fogatas Junto al Lago" },
  "exp.bonfire.desc": { en: "S'mores by the fire pit as the stars come alive above the lake.", es: "S'mores junto a la fogata mientras las estrellas brillan sobre el lago." },
  "exp.yoga.title": { en: "Forest Yoga", es: "Yoga en el Bosque" },
  "exp.yoga.desc": { en: "Morning sessions overlooking the water. Breathe deep, let go.", es: "Sesiones matutinas con vista al agua. Respira profundo, déjate ir." },
  "exp.cinema.title": { en: "Cinema Under the Trees", es: "Cine Bajo los Árboles" },
  "exp.cinema.desc": { en: "A private outdoor movie experience surrounded by nature and starlight.", es: "Una experiencia privada de cine al aire libre rodeada de naturaleza y estrellas." },
  "exp.massage.title": { en: "Couple's Massage", es: "Masaje en Pareja" },
  "exp.massage.desc": { en: "Unwind together on our forest deck with a rejuvenating couples massage.", es: "Relájense juntos en nuestra terraza del bosque con un masaje rejuvenecedor." },
  "exp.picnic.title": { en: "Lakeside Picnics", es: "Picnics Junto al Lago" },
  "exp.picnic.desc": { en: "Spread out by the water with a curated picnic basket and blankets.", es: "Disfruta junto al agua con una canasta de picnic y mantas." },
  "exp.biking.title": { en: "Biking Trails", es: "Senderos para Bicicleta" },
  "exp.biking.desc": { en: "Explore winding trails through the forest and along the lake's edge.", es: "Explora senderos sinuosos por el bosque y la orilla del lago." },
  "exp.painting.title": { en: "Painting by the Pond", es: "Pintura Junto al Estanque" },
  "exp.painting.desc": { en: "Let the landscape inspire your creativity with a paint-and-sip session.", es: "Deja que el paisaje inspire tu creatividad con una sesión de pintura." },
  "exp.fireside.title": { en: "Fireside Relaxation", es: "Relajación Junto al Fuego" },
  "exp.fireside.desc": { en: "Cozy up with your favorite person and enjoy the warmth of a woodland fire.", es: "Acurrúcate con tu persona favorita y disfruta del calor de una fogata." },

  // Activity list
  "act.smores": { en: "S'mores Making", es: "Preparar S'mores" },
  "act.hammock": { en: "Hammock Lounging", es: "Descanso en Hamaca" },
  "act.bbq": { en: "BBQ Grilling", es: "Parrillada" },
  "act.massage": { en: "Couple's Massage", es: "Masaje en Pareja" },
  "act.cinema": { en: "Cinema Under the Trees", es: "Cine Bajo los Árboles" },
  "act.hiking": { en: "Hiking Trails", es: "Senderismo" },
  "act.biking": { en: "Biking", es: "Ciclismo" },
  "act.birds": { en: "Bird Watching", es: "Observación de Aves" },
  "act.painting": { en: "Painting by the Pond", es: "Pintura en el Estanque" },
  "act.jacuzzi": { en: "Jacuzzi", es: "Jacuzzi" },
  "act.picnic": { en: "Picnic Kits", es: "Kits de Picnic" },
  "act.rocks": { en: "Rock Skipping", es: "Lanzar Piedras" },

  // Property Map
  "map.badge": { en: "The Property", es: "La Propiedad" },
  "map.title1": { en: "110 Acres. Two Lakes.", es: "110 Acres. Dos Lagos." },
  "map.title2": { en: "10 Lakeside Hideaways.", es: "10 Refugios Junto al Lago." },
  "map.phase1": {
    en: "Everlake is designed to grow in intentional phases — perfecting every detail while honoring the natural landscape. Phase 1 introduces our flagship 10 lakeside cabins, each crafted to deliver the full Everlake experience from day one.",
    es: "Everlake está diseñado para crecer en fases intencionales — perfeccionando cada detalle mientras honramos el paisaje natural. La Fase 1 presenta nuestras 10 cabañas insignia junto al lago, cada una diseñada para ofrecer la experiencia completa de Everlake desde el primer día.",
  },
  "map.phase2Badge": { en: "Coming in Phase 2", es: "Próximamente en Fase 2" },
  "map.phase2": {
    en: "Lodge · Spa · Event Space · Wedding Venue",
    es: "Lodge · Spa · Espacio para Eventos · Salón de Bodas",
  },

  // Location
  "loc.badge": { en: "Closer Than You Think", es: "Más Cerca de lo Que Crees" },
  "loc.title": { en: "Covington,", es: "Covington," },
  "loc.titleItalic": { en: "Georgia", es: "Georgia" },
  "loc.subtitle": {
    en: "Tucked into the woods on 110 acres just <strong>1 hour</strong> from Atlanta's Hartsfield-Jackson Airport. Everlake is your invitation to unplug with ease and stay present with joy.",
    es: "Ubicado en el bosque en 110 acres a solo <strong>1 hora</strong> del Aeropuerto Hartsfield-Jackson de Atlanta. Everlake es tu invitación a desconectarte con facilidad y vivir el presente con alegría.",
  },
  "loc.from": { en: "from", es: "desde" },

  // FAQ
  "faq.badge": { en: "Questions", es: "Preguntas" },
  "faq.title": { en: "Frequently", es: "Preguntas" },
  "faq.titleItalic": { en: "Asked", es: "Frecuentes" },
  "faq.q1": { en: "When will Everlake open?", es: "¿Cuándo abrirá Everlake?" },
  "faq.a1": { en: "Everlake is currently in the late stages of construction. We will begin hosting in Spring 2026.", es: "Everlake está actualmente en las últimas etapas de construcción. Comenzaremos a recibir huéspedes en la Primavera de 2026." },
  "faq.q2": { en: "Where is Everlake located?", es: "¿Dónde está ubicado Everlake?" },
  "faq.a2": { en: "Everlake is built on 110 acres in Covington, Georgia. Nestled in the woods beside two different bodies of water.", es: "Everlake está construido en 110 acres en Covington, Georgia. Ubicado en el bosque junto a dos cuerpos de agua." },
  "faq.q3": { en: "What does VIP membership include?", es: "¿Qué incluye la membresía VIP?" },
  "faq.a3": { en: "VIP members get early access to the booking calendar and discounted rates on stays, packages, and add-ons before public availability.", es: "Los miembros VIP obtienen acceso anticipado al calendario de reservas y tarifas con descuento en estadías, paquetes y complementos antes de la disponibilidad pública." },
  "faq.q4": { en: "Who can I contact if I have questions?", es: "¿Con quién puedo contactar si tengo preguntas?" },
  "faq.a4": { en: "Please don't hesitate to reach out to our wonderful Resort Manager, Montana at montana@everlakega.com", es: "No dudes en comunicarte con nuestra maravillosa Gerente del Resort, Montana en montana@everlakega.com" },

  // Gallery
  "gallery.badge": { en: "A Glimpse Into The Quiet", es: "Un Vistazo a la Tranquilidad" },
  "gallery.title": { en: "Every detail is crafted for", es: "Cada detalle está diseñado para" },
  "gallery.titleItalic": { en: "your perfect getaway", es: "tu escapada perfecta" },

  // Footer
  "footer.tagline": { en: "The Getaway That Stays With You", es: "La Escapada Que Se Queda Contigo" },
  "footer.rights": { en: "All rights reserved.", es: "Todos los derechos reservados." },
  "footer.location": { en: "Covington, Georgia · 110 acres of quiet", es: "Covington, Georgia · 110 acres de tranquilidad" },
} as const;

export type TranslationKey = keyof typeof translations;

export default translations;
