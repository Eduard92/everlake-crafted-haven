export type Lang = "en" | "es";

const translations = {
  // Nav
  "nav.hideaways": { en: "Hideaways", es: "Cabañas" },
  "nav.experiences": { en: "Experiences", es: "Experiencias" },
  "nav.vipShop": { en: "VIP Shop", es: "Tienda VIP" },
  "nav.faq": { en: "FAQ", es: "Preguntas" },

  // Hero
  "hero.badge": { en: "VIP Early Access · Covington, Georgia", es: "Acceso VIP · Covington, Georgia" },
  "hero.title1": { en: "The Getaway", es: "La Escapada" },
  "hero.title2": { en: "That Stays", es: "Que Se Queda" },
  "hero.title3": { en: "With You", es: "Contigo" },
  "hero.subtitle1": {
    en: "Before Everlake opens its gates to the world, you, our Founders, have first access to the lake.",
    es: "Antes de que Everlake abra sus puertas, ustedes, nuestros Fundadores, tienen acceso prioritario.",
  },
  "hero.subtitle2": {
    en: "Your Exclusive Discounted Packages Are Now Available.",
    es: "Sus Paquetes Exclusivos Con Descuento Ya Están Disponibles.",
  },
  "hero.cta": { en: "VIP Packages", es: "Paquetes VIP" },
  "hero.scroll": { en: "Scroll", es: "Desplazar" },

  // Intro
  "intro.badge": { en: "A Limited Invitation", es: "Una Invitación Limitada" },
  "intro.title": {
    en: "A sanctuary where <italic>personalized rest</italic> is embedded in every element of our design.",
    es: "Un santuario donde el <italic>descanso personalizado</italic> está integrado en cada elemento de nuestro diseño.",
  },
  "intro.subtitle": {
    en: "In a world that never stops, we're building a place where you can. Surrounded by nature, wrapped in comfort, finally still.",
    es: "En un mundo que nunca se detiene, estamos construyendo un lugar donde tú puedes. Rodeado de naturaleza, envuelto en comodidad, finalmente en calma.",
  },
  "intro.founders": {
    en: "You believed in Everlake before anyone else did. Your Founders Reward is now waiting.",
    es: "Creíste en Everlake antes que nadie. Tu Recompensa de Fundador te espera.",
  },

  // Hideaways
  "hideaways.badge": { en: "Our Hideaways", es: "Nuestras Cabañas" },
  "hideaways.title": { en: "Designed for", es: "Diseñados para el" },
  "hideaways.titleItalic": { en: "stillness", es: "silencio" },
  "hideaways.imgLabel1": { en: "Exterior · Forest Setting", es: "Exterior · Entorno Boscoso" },
  "hideaways.imgLabel2": { en: "Interior · Bedroom Suite", es: "Interior · Suite Dormitorio" },
  "hideaways.tourBadge": { en: "Take a Cabin Tour", es: "Haz un Recorrido por la Cabaña" },
  "hideaways.feat1Title": { en: "Private Space", es: "Espacio Privado" },
  "hideaways.feat1Desc": {
    en: "Each hideaway is entirely yours. Slow mornings and quiet nights beneath the stars.",
    es: "Cada cabaña es completamente tuya. Mañanas tranquilas y noches silenciosas bajo las estrellas.",
  },
  "hideaways.feat2Title": { en: "Scenic Views", es: "Vistas Panorámicas" },
  "hideaways.feat2Desc": {
    en: "Nestled on the lake or tucked into the woods — serene nature is just a step away.",
    es: "Junto al lago o entre el bosque — la naturaleza serena está a un paso.",
  },
  "hideaways.feat3Title": { en: "Skip Check-In", es: "Sin Check-In" },
  "hideaways.playOverlay": { en: "Play Cabin Tour", es: "Ver Recorrido por la Cabaña" },
  "hideaways.feat3Desc": {
    en: "Digital check-in grants instant access. Arrive with ease and step straight into calm.",
    es: "El check-in digital te da acceso inmediato. Llega con tranquilidad y entra directo a la calma.",
  },

  // VIP Shop
  "vip.badge": { en: "Exclusive VIP Access", es: "Acceso VIP Exclusivo" },
  "vip.title1": { en: "Lock in your rate.", es: "Asegura tu tarifa." },
  "vip.title2": { en: "Unlock Your Stay", es: "Desbloquea Tu Estadía" },
  "vip.title3": { en: "Before Everyone Else", es: "Antes Que Nadie" },
  "vip.subtitle": {
    en: "Each package below is a discounted rate voucher — not a booking. Purchase yours now at Founders pricing, with up to 45% discount, then use it to book your actual stay once our calendar opens on May 1st. You will have a 2-Week Exclusive Window to book your preferred dates.",
    es: "Cada paquete a continuación es un cupón con tarifa de descuento — no una reserva. Compra el tuyo ahora a precio de Fundador, con hasta un 45% de descuento, luego úsalo para reservar tu estadía una vez que nuestro calendario abra el 1 de mayo. Tendrás una Ventana Exclusiva de 2 Semanas para reservar tus fechas preferidas.",
  },

  // Countdown
  "countdown.expired": { en: "Offer Expired", es: "Oferta Expirada" },
  "countdown.days": { en: "Days", es: "Días" },
  "countdown.hours": { en: "Hours", es: "Horas" },
  "countdown.minutes": { en: "Minutes", es: "Minutos" },
  "countdown.seconds": { en: "Seconds", es: "Segundos" },
  "countdown.launches": { en: "Launches", es: "Comienza" },

  // VIP Gate
  "gate.badge": { en: "Founders Only", es: "Solo Fundadores" },
  "gate.heading": { en: "Enter your email to access the VIP experience.", es: "Ingresa tu correo para acceder a la experiencia VIP." },
  "gate.placeholder": { en: "Your email address", es: "Tu correo electrónico" },
  "gate.button": { en: "Enter", es: "Entrar" },
  "gate.error": { en: "This email is not on the VIP list.", es: "Este correo no está en la lista VIP." },

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
  "map.title2": { en: "10 Lakeside Hideaways.", es: "10 Cabañas Junto al Lago." },
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
    en: "Tucked into the woods on 110 acres just <strong>45 minutes</strong> from Atlanta. Everlake is your invitation to escape the noise and unplug with ease.",
    es: "Ubicado en el bosque en 110 acres a solo <strong>45 minutos</strong> de Atlanta. Everlake es tu invitación a escapar del ruido y desconectarte con facilidad.",
  },
  "loc.from": { en: "from", es: "desde" },

  // FAQ
  "faq.badge": { en: "Questions", es: "Preguntas" },
  "faq.title": { en: "Frequently", es: "Preguntas" },
  "faq.titleItalic": { en: "Asked", es: "Frecuentes" },
  "faq.q1": { en: "When will Everlake open?", es: "¿Cuándo abrirá Everlake?" },
  "faq.a1": { en: "Everlake is in the final stages of construction and will begin hosting guests in June 2026.", es: "Everlake está en las etapas finales de construcción y comenzará a recibir huéspedes en junio de 2026." },
  "faq.q2": { en: "What are the VIP Packages?", es: "¿Qué son los Paquetes VIP?" },
  "faq.a2": { en: "VIP Packages are prepaid stays at our best launch pricing (up to ~40–45% off). While you'll use them like credits when booking, each package is designed as a complete stay (for example: 2-night weekday, 3-night weekend), not just an open dollar balance. You're securing fully designed stays in advance, at a discounted rate, with flexibility to choose your dates later.", es: "Los Paquetes VIP son estadías prepagadas a nuestro mejor precio de lanzamiento (hasta ~40–45% de descuento). Aunque los usarás como créditos al reservar, cada paquete está diseñado como una estadía completa (por ejemplo: 2 noches entre semana, 3 noches de fin de semana), no como un saldo abierto. Estás asegurando estadías completas por adelantado, a un precio con descuento, con la flexibilidad de elegir tus fechas más tarde." },
  "faq.q3": { en: "Can I buy more than one package?", es: "¿Puedo comprar más de un paquete?" },
  "faq.a3": { en: "Yes — and many guests do. You can purchase multiple VIP Packages, which means you can secure multiple future stays at launch pricing. Just keep in mind: some packages are limited in quantity, so availability may run out during the campaign.", es: "Sí — y muchos huéspedes lo hacen. Puedes comprar varios Paquetes VIP, lo que significa que puedes asegurar varias estadías futuras al precio de lanzamiento. Ten en cuenta: algunos paquetes son de cantidad limitada, así que la disponibilidad puede agotarse durante la campaña." },
  "faq.q4": { en: "What packages are available?", es: "¿Qué paquetes están disponibles?" },
  "faq.a4": { en: "Stays: 2-Night Stay (Weekday), 3-Night Stay (Weekday), 2-Night Stay (Weekend), 3-Night Stay (Weekend). Each package corresponds to a specific type of stay, which you'll later redeem when selecting your dates. Add-ons: Priority Status Add-On, Food & Beverage Credit, Spa Credit, Activities Credit, and Discounted Pet Fee.", es: "Estadías: 2 Noches (Entre Semana), 3 Noches (Entre Semana), 2 Noches (Fin de Semana), 3 Noches (Fin de Semana). Cada paquete corresponde a un tipo específico de estadía, que canjearás al seleccionar tus fechas. Complementos: Estatus Prioritario, Crédito de Comida y Bebida, Crédito de Spa, Crédito de Actividades y Tarifa de Mascota con Descuento." },
  "faq.q5": { en: "What is Priority Status?", es: "¿Qué es el Estatus Prioritario?" },
  "faq.a5": { en: "Priority Status gives you earlier access within the VIP group. All VIP members get 2-week early access; Priority Status members book before other VIPs. Best for guests who want specific high-demand dates.", es: "El Estatus Prioritario te da acceso anticipado dentro del grupo VIP. Todos los miembros VIP reciben 2 semanas de acceso anticipado; los miembros con Estatus Prioritario reservan antes que los demás VIPs. Ideal para huéspedes que desean fechas específicas de alta demanda." },
  "faq.q6": { en: "What is the difference between April 28th and May 12th?", es: "¿Cuál es la diferencia entre el 28 de abril y el 12 de mayo?" },
  "faq.a6": { en: "April 28th is the VIP Campaign Launch — when you purchase your VIP Packages and lock in discounted rates. May 12th is when Booking Opens — when you use your packages to select your exact dates. In simple terms: April 28 = buy your stays at a discount, May 12 = choose your dates.", es: "El 28 de abril es el Lanzamiento de la Campaña VIP — cuando compras tus Paquetes VIP y aseguras tarifas con descuento. El 12 de mayo abren las Reservas — cuando usas tus paquetes para seleccionar tus fechas exactas. En pocas palabras: 28 de abril = compra tus estadías con descuento, 12 de mayo = elige tus fechas." },
  "faq.q7": { en: "When do I get to book my dates?", es: "¿Cuándo puedo reservar mis fechas?" },
  "faq.a7": { en: "The booking calendar opens on May 12th. VIP members will have exclusive access for 2 weeks to book before the public.", es: "El calendario de reservas abre el 12 de mayo. Los miembros VIP tendrán acceso exclusivo durante 2 semanas para reservar antes que el público." },
  "faq.q8": { en: "What dates can I book?", es: "¿Qué fechas puedo reservar?" },
  "faq.a8": { en: "Once the calendar opens, you'll be able to book any available date within the next 12 months, starting June 2026.", es: "Una vez que abra el calendario, podrás reservar cualquier fecha disponible dentro de los próximos 12 meses, a partir de junio de 2026." },
  "faq.q9": { en: "Do the packages expire?", es: "¿Los paquetes caducan?" },
  "faq.a9": { en: "No — your VIP Packages do not expire. You can use them anytime, based on availability.", es: "No — tus Paquetes VIP no caducan. Puedes usarlos en cualquier momento, según disponibilidad." },
  "faq.q10": { en: "Are these discounts permanent?", es: "¿Estos descuentos son permanentes?" },
  "faq.a10": { en: "No. The VIP campaign is when the discounts are the deepest they will ever be. By purchasing now, you're locking in those rates for your stays. As a VIP, you'll continue to receive exclusive offers and preferred pricing in the future, but not at this same launch level.", es: "No. La campaña VIP es cuando los descuentos son los más profundos que existirán. Al comprar ahora, aseguras esas tarifas para tus estadías. Como VIP, seguirás recibiendo ofertas exclusivas y precios preferenciales en el futuro, pero no al mismo nivel del lanzamiento." },
  "faq.q11": { en: "Are VIP Packages refundable?", es: "¿Los Paquetes VIP son reembolsables?" },
  "faq.a11": { en: "No — VIP Packages are non-refundable. However, they are flexible in terms of when you use them.", es: "No — los Paquetes VIP no son reembolsables. Sin embargo, son flexibles en cuanto a cuándo los usas." },
  "faq.q12": { en: "What exactly am I committing to?", es: "¿A qué me estoy comprometiendo exactamente?" },
  "faq.a12": { en: "You're committing to future stays at Everlake, at a discounted rate. You are not selecting dates today — only the price and type of stay.", es: "Te estás comprometiendo a estadías futuras en Everlake, a una tarifa con descuento. Hoy no seleccionas fechas — solo el precio y el tipo de estadía." },
  "faq.q13": { en: "How does booking work after I purchase?", es: "¿Cómo funciona la reserva después de comprar?" },
  "faq.a13": { en: "You purchase your VIP Packages now. On May 12th, you receive access to the booking calendar. You select your dates in a few clicks. Your $100 Resort Credit is automatically applied at booking.", es: "Compras tus Paquetes VIP ahora. El 12 de mayo recibes acceso al calendario de reservas. Seleccionas tus fechas en unos clics. Tu Crédito de Resort de $100 se aplica automáticamente al reservar." },
  "faq.q14": { en: "How many cabins are available?", es: "¿Cuántas cabañas hay disponibles?" },
  "faq.a14": { en: "We will launch with 10 fully completed cabins, all available for booking. More will be added over time.", es: "Lanzaremos con 10 cabañas totalmente terminadas, todas disponibles para reservar. Se añadirán más con el tiempo." },
  "faq.q15": { en: "Where is Everlake located?", es: "¿Dónde está ubicado Everlake?" },
  "faq.a15": { en: "Everlake is built on 110 acres in Covington, Georgia — just 1 hour from Atlanta's Hartsfield-Jackson Airport. Nestled in the woods beside two different bodies of water.", es: "Everlake está construido en 110 acres en Covington, Georgia — a solo 1 hora del Aeropuerto Hartsfield-Jackson de Atlanta. Ubicado en el bosque junto a dos cuerpos de agua." },
  "faq.q16": { en: "Who can I contact if I have questions?", es: "¿Con quién puedo contactar si tengo preguntas?" },
  "faq.a16": { en: "Please don't hesitate to reach out to our Guest Services team at guestservices@everlakega.com", es: "No dudes en comunicarte con nuestro equipo de Guest Services en guestservices@everlakega.com" },

  // Shop Gate
  "shopgate.prompt": {
    en: "Enter your VIP email to unlock your exclusive Founders packages.",
    es: "Ingresa tu correo VIP para desbloquear tus paquetes exclusivos de Fundador.",
  },
  "shopgate.unlock": { en: "Unlock", es: "Desbloquear" },

  // Upgrade Dialog
  "upgrade.badge": { en: "Limited-Time Offer", es: "Oferta por Tiempo Limitado" },
  "upgrade.title": { en: "Become a Founding VIP", es: "Conviértete en VIP Fundador" },
  "upgrade.subtitle": {
    en: "Your email isn't on the VIP list yet — but you can join right now. Pay $50 today and unlock up to $445 in exclusive perks.",
    es: "Tu correo aún no está en la lista VIP — pero puedes unirte ahora. Paga $50 hoy y desbloquea hasta $445 en beneficios exclusivos.",
  },
  "upgrade.pathA": { en: "Pay $50 Now", es: "Paga $50 Ahora" },
  "upgrade.pathA1": { en: "Save up to 40% on your stay (rates from $330 vs. $600)", es: "Ahorra hasta 40% en tu estadía (tarifas desde $330 vs. $600)" },
  "upgrade.pathA2": { en: "Book your preferred dates 15 days before the public", es: "Reserva tus fechas preferidas 15 días antes que el público" },
  "upgrade.pathA3": { en: "$100 resort credit + welcome basket included", es: "$100 de crédito en el resort + canasta de bienvenida incluida" },
  "upgrade.pathB": { en: "Wait & Do Nothing", es: "Espera y No Hagas Nada" },
  "upgrade.pathB1": { en: "Pay full price ($600/night)", es: "Paga precio completo ($600/noche)" },
  "upgrade.pathB2": { en: "Wait 15 extra days to even see the calendar", es: "Espera 15 días más solo para ver el calendario" },
  "upgrade.pathB3": { en: "Hope your dates are still available after 2,000 VIPs book first", es: "Espera que tus fechas sigan disponibles después de que 2,000 VIPs reserven primero" },
  "upgrade.reframe": { en: "Your $50 isn't a fee — it's applied directly to your stay.", es: "Tus $50 no son una tarifa — se aplican directamente a tu estadía." },
  "upgrade.cta": { en: "Reserve Your VIP Access", es: "Reserva Tu Acceso VIP" },
  "upgrade.footnote": {
    en: "You'll be redirected to our reservation page to complete your purchase.",
    es: "Serás redirigido a nuestra página de reservación para completar tu compra.",
  },

  // Gallery
  "gallery.badge": { en: "A Glimpse Into The Quiet", es: "Un Vistazo a la Tranquilidad" },
  "gallery.title": { en: "Every detail is crafted for", es: "Cada detalle está diseñado para" },
  "gallery.titleItalic": { en: "your perfect getaway", es: "tu escapada perfecta" },

  // Footer
  "footer.tagline": { en: "The Getaway That Stays With You", es: "La Escapada Que Se Queda Contigo" },
  "footer.rights": { en: "All rights reserved.", es: "Todos los derechos reservados." },
  "footer.location": { en: "Covington, Georgia · 110 acres of quiet", es: "Covington, Georgia · 110 acres de tranquilidad" },
  "footer.contactCta": { en: "Contact Guest Services", es: "Contactar Guest Services" },
} as const;

export type TranslationKey = keyof typeof translations;

export default translations;
