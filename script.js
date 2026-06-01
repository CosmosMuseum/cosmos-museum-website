// ═══════════════════════════════════════════════════════
//  Cosmic Explorer — Built by Ritesh Meena (github.com/rtm20)
//  Licensed under CC BY-NC 4.0
//  https://github.com/rtm20/cosmic-explorer
// ═══════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════
//  PLANET DATA
// ═══════════════════════════════════════════════════════
const PLANET_DATA = {
  Sun: {
    name: 'Sol', type: 'Estrella tipo G (Secuencia Principal)',
    radius: 5, distance: 0, orbitalSpeed: 0, rotationSpeed: 0.001,
    color: '#FDB813', emissive: '#F97C0A',
    glowColor: '#FF8C00',
    description: 'El preludio de fuego que ilumina el vacío. Nuestro Sol es el faro cálido que guía la danza eterna de los mundos, derramando su abrazo dorado sobre cada rincón de nuestra existencia.<br><br><b>🧬 Chispa de origen:</b> Aunque el fuego ardiente en su corazón no permite que la vida eche raíces allí, es su luz la que teje el milagro de la biología. Un recordatorio humilde del poder necesario para sostener la vida, brillando con una serenidad inquebrantable a pesar de su caos interior.',
    diameter: '1,392,684 km', mass: '1.989 × 10³⁰ kg',
    distanceFromSun: '0 km', gravity: '274 m/s²',
    dayLength: '25 Earth days (equatorial)', yearLength: 'N/A',
    avgTemp: '5,500°C', minTemp: '5,500°C (surface)', maxTemp: '15,000,000°C (core)',
    moons: 0, moonNames: '',
    orbitalVelocity: 'N/A',
    atmosphere: [
      { name: 'Hidrógeno', pct: 74.9 },
      { name: 'Helio', pct: 23.8 },
      { name: 'Oxígeno', pct: 0.65 },
      { name: 'Otros', pct: 0.65 }
    ],
    facts: [
      { icon: '🔥', text: 'La temperatura del núcleo del Sol alcanza 15 millones de grados Celsius — suficiente para alimentar la fusión nuclear.' },
      { icon: '⚡', text: 'Cada segundo, el Sol fusiona 600 millones de toneladas de hidrógeno en helio, liberando energía enorme.' },
      { icon: '🌊', text: 'La superficie del Sol está cubierta de ondas de plasma y gránulos causados por celdas de convección que ascienden desde el interior.' },
      { icon: '☄', text: 'Las llamaradas solares pueden eyectar plasma a más de 2,000 km/s, a veces interrumpiendo el campo magnético de la Tierra.' },
    ],
    missions: [
      { year: '1990', name: 'Ulysses', agency: 'ESA/NASA' },
      { year: '2018', name: 'Parker Solar Probe', agency: 'NASA' },
      { year: '2020', name: 'Solar Orbiter', agency: 'ESA/NASA' },
    ],
    cssColor: '#FDB813', ringColor: null,
    textureType: 'sun',
    axialTilt: 0.1265,
  },
  Mercury: {
    name: 'Mercurio', type: 'Planeta terrestre',
    radius: 0.6, distance: 14, orbitalSpeed: 0.0041, rotationSpeed: 0.003,
    color: '#b5b5b5', emissive: '#333',
    glowColor: '#888',
    description: 'El silencioso centinela de ceniza que se atreve a rozar el Sol. Mercurio baila en la frontera de las sombras y el fuego, con cicatrices marcadas por la historia primordial de nuestro sistema cósmico.<br><br><b>🧬 Susurro del vacío:</b> En su soledad extrema, donde el calor derrite y el frío congela, el silencio es absoluto. Es un lienzo austero de roca y polvo, una nota muda en el gran concierto, esperando eternamente un aliento que jamás llegará.',
    diameter: '4,879 km', mass: '3.30 × 10²³ kg',
    distanceFromSun: '57.9 million km', gravity: '3.7 m/s²',
    dayLength: '1,408 hours', yearLength: '88 Earth days',
    avgTemp: '167°C', minTemp: '-180°C', maxTemp: '430°C',
    moons: 0, moonNames: 'None',
    orbitalVelocity: '47.4 km/s',
    atmosphere: [
      { name: 'Oxígeno', pct: 42 },
      { name: 'Sodio', pct: 29 },
      { name: 'Hidrógeno', pct: 22 },
      { name: 'Otros', pct: 7 }
    ],
    facts: [
      { icon: '🌡', text: 'Mercurio tiene los cambios de temperatura más extremos del Sistema Solar — de -180°C de noche a 430°C de día.' },
      { icon: '🧲', text: 'A pesar de su pequeño tamaño, Mercurio tiene un campo magnético global, generado probablemente por su gran núcleo de hierro.' },
      { icon: '💨', text: 'Mercurio prácticamente no tiene atmósfera para retener calor o proteger su superficie de impactos de micrometeoritos.' },
      { icon: '🌀', text: 'Mercurio rota 3 veces por cada 2 órbitas alrededor del Sol — una resonancia de rotación-órbita 3:2.' },
    ],
    missions: [
      { year: '1974', name: 'Mariner 10', agency: 'NASA' },
      { year: '2004', name: 'MESSENGER', agency: 'NASA' },
      { year: '2018', name: 'BepiColombo', agency: 'ESA/JAXA' },
    ],
    cssColor: '#b5b5b5', ringColor: null,
    textureType: 'rocky',
    axialTilt: 0.034,
  },
  Venus: {
    name: 'Venus', type: 'Planeta terrestre',
    radius: 0.95, distance: 20, orbitalSpeed: 0.0016, rotationSpeed: -0.0007,
    color: '#E8B96F', emissive: '#7a4a00',
    glowColor: '#D4A843',
    description: 'Una belleza velada por misterios ardientes, flotando en el cielo como la estrella del alba. Venus es el espejo turbulento de la Tierra, un poema sobre los delicados equilibrios de la naturaleza y la furia contenida de sus nubes doradas.<br><br><b>🧬 Vientos de misterio:</b> Su abrazo sofocante parece descartar cualquier semilla de vida, pero en los mares de nubes muy por encima de la superficie ardiente, la imaginación nos permite soñar con ecos sutiles de vida flotante, recordándonos que el universo siempre guarda secretos impredecibles.',
    diameter: '12,104 km', mass: '4.87 × 10²⁴ kg',
    distanceFromSun: '108.2 million km', gravity: '8.87 m/s²',
    dayLength: '5,832 hours (retrograde)', yearLength: '225 Earth days',
    avgTemp: '465°C', minTemp: '460°C', maxTemp: '470°C',
    moons: 0, moonNames: 'None',
    orbitalVelocity: '35.0 km/s',
    atmosphere: [
      { name: 'Dióxido de carbono', pct: 96.5 },
      { name: 'Nitrógeno', pct: 3.5 },
      { name: 'Dióxido de azufre', pct: 0.015 },
      { name: 'Otros', pct: 0 },
    ],
    facts: [
      { icon: '♨', text: 'A 465°C, Venus es lo suficientemente caliente para derretir plomo — más caliente que Mercurio a pesar de estar al doble de distancia del Sol.' },
      { icon: '🔄', text: 'Venus rota al revés comparado con la mayoría de los planetas. En Venus, el Sol sale por el oeste y se pone por el este.' },
      { icon: '☁', text: 'La densa capa de nubes de ácido sulfúrico refleja el 70% de la luz solar, haciendo de Venus el objeto más brillante del cielo después del Sol y la Luna.' },
      { icon: '💎', text: 'La presión atmosférica en la superficie de Venus es 90 veces la de la Tierra — equivalente a estar a 900 m bajo el agua.' },
    ],
    missions: [
      { year: '1970', name: 'Venera 7', agency: 'Soviet' },
      { year: '1989', name: 'Magellan', agency: 'NASA' },
      { year: '2005', name: 'Venus Express', agency: 'ESA' },
    ],
    cssColor: '#E8B96F', ringColor: null,
    textureType: 'rocky_hot',
    axialTilt: 3.096,
  },
  Earth: {
    name: 'Tierra', type: 'Planeta terrestre',
    radius: 1, distance: 28, orbitalSpeed: 0.001, rotationSpeed: 0.01,
    color: '#2E86C1', emissive: '#0a3055',
    glowColor: '#4fc3f7',
    description: 'Un oasis azul y verde, nuestro querido hogar, suspendido como una joya frágil y vibrante en la oscuridad del espacio. Aquí es donde los ecos del cosmos tomaron forma, floreciendo bajo el abrazo suave del Sol y las caricias del agua.<br><br><b>🧬 El poema de la vida:</b> En este pequeño refugio, cada grano de arena y cada criatura microscópica es un verso vital. La vida se entrelaza de manera inseparable y majestuosa, un vasto coro donde la Tierra entera respira y siente, albergando en su seno la consciencia misma del universo.',
    diameter: '12,742 km', mass: '5.97 × 10²⁴ kg',
    distanceFromSun: '149.6 million km', gravity: '9.81 m/s²',
    dayLength: '24 hours', yearLength: '365.25 days',
    avgTemp: '15°C', minTemp: '-89.2°C', maxTemp: '56.7°C',
    moons: 1, moonNames: 'The Moon',
    orbitalVelocity: '29.8 km/s',
    atmosphere: [
      { name: 'Nitrógeno', pct: 78.1 },
      { name: 'Oxígeno', pct: 20.9 },
      { name: 'Argón', pct: 0.93 },
      { name: 'CO₂ y otros', pct: 0.04 },
    ],
    facts: [
      { icon: '💧', text: 'Más del 71% de la superficie terrestre está cubierta por agua líquida — un ingrediente clave para la química de la vida.' },
      { icon: '🧲', text: 'El campo magnético de la Tierra actúa como escudo contra el viento solar dañino y la radiación cósmica.' },
      { icon: '🌙', text: 'La Luna es inusualmente grande en relación a la Tierra — su atracción gravitacional estabiliza la inclinación axial de la Tierra y genera las mareas oceánicas.' },
      { icon: '🌍', text: 'La Tierra es el planeta más denso del Sistema Solar, con una densidad promedio de 5,515 kg/m³.' },
    ],
    missions: [
      { year: '1972', name: 'Apollo 17 (last lunar)', agency: 'NASA' },
      { year: '1999', name: 'Terra Satellite', agency: 'NASA' },
      { year: '2014', name: 'Sentinel Series', agency: 'ESA' },
    ],
    cssColor: '#2E86C1', ringColor: null,
    textureType: 'earth',
    axialTilt: 0.4091,
  },
  Mars: {
    name: 'Marte', type: 'Planeta terrestre',
    radius: 0.75, distance: 37, orbitalSpeed: 0.00053, rotationSpeed: 0.0097,
    color: '#C0392B', emissive: '#5a0000',
    glowColor: '#E74C3C',
    description: 'El guardián rojo del silencio, marcado por el tiempo y el viento. Marte duerme en polvo rojizo y antiguas memorias de agua, una ensoñación de mundos pasados que aguarda pacientemente por nuevas historias bajo su cielo rosado.<br><br><b>🧬 Ecos de vida pasada:</b> Entre sus valles silenciosos y sus vastos desiertos, escuchamos el eco melancólico de la posibilidad. Quizás, hace incontables eras, la vida despertó aquí, dejando su leve susurro grabado en las frías rocas, como una promesa susurrada desde un pasado lejano.',
    diameter: '6,779 km', mass: '6.39 × 10²³ kg',
    distanceFromSun: '227.9 million km', gravity: '3.72 m/s²',
    dayLength: '24.6 hours', yearLength: '687 Earth days',
    avgTemp: '-63°C', minTemp: '-143°C', maxTemp: '35°C',
    moons: 2, moonNames: 'Phobos, Deimos',
    orbitalVelocity: '24.1 km/s',
    atmosphere: [
      { name: 'Dióxido de carbono', pct: 95.3 },
      { name: 'Nitrógeno', pct: 2.6 },
      { name: 'Argón', pct: 1.9 },
      { name: 'Otros', pct: 0.3 },
    ],
    facts: [
      { icon: '🏔', text: 'El Monte Olimpo en Marte es el volcán más grande del Sistema Solar — 3 veces la altura del Monte Everest.' },
      { icon: '🌊', text: 'Valles Marineris es un sistema de cañones de 4,000 km de largo y hasta 7 km de profundidad — empequeñeciendo al Gran Cañón de la Tierra.' },
      { icon: '💨', text: 'Las tormentas de polvo en Marte pueden cubrir todo el planeta y durar meses, bloqueando la luz solar.' },
      { icon: '🧊', text: 'Marte tiene casquetes polares que contienen hielo de agua y hielo seco (CO₂ congelado) que crecen y se encogen con las estaciones.' },
    ],
    missions: [
      { year: '1976', name: 'Viking 1 & 2', agency: 'NASA' },
      { year: '2012', name: 'Curiosity Rover', agency: 'NASA' },
      { year: '2021', name: 'Perseverance + Ingenuity', agency: 'NASA' },
    ],
    cssColor: '#C0392B', ringColor: null,
    textureType: 'rocky_red',
  },
  Jupiter: {
    name: 'Júpiter', type: 'Gigante gaseoso',
    radius: 2.5, distance: 55, orbitalSpeed: 0.000084, rotationSpeed: 0.04,
    color: '#C88B3A', emissive: '#3a1a00',
    glowColor: '#D4A843',
    description: 'El majestuoso gigante, una colosal pintura al óleo que remolina con fuerza eterna. Júpiter es el director de la orquesta celestial, su inmenso abrazo gravitacional protege los mundos interiores mientras canta su antigua canción de tormentas.<br><br><b>🧬 Mares de esperanza:</b> Mientras el soberano mismo es una tormenta interminable e indomable, sus hijos más amados, las lunas, esconden océanos subterráneos, un abrazo acuático y misterioso que nos invita a soñar con reinos donde un nuevo aliento vital podría florecer en la cálida oscuridad de sus profundidades.',
    diameter: '139,820 km', mass: '1.898 × 10²⁷ kg',
    distanceFromSun: '778.5 million km', gravity: '24.8 m/s²',
    dayLength: '9.93 hours', yearLength: '11.86 Earth years',
    avgTemp: '-110°C', minTemp: '-145°C (cloud tops)', maxTemp: '24,000°C (core)',
    moons: 95, moonNames: 'Io, Europa, Ganymede, Callisto + 91 more',
    orbitalVelocity: '13.1 km/s',
    atmosphere: [
      { name: 'Hidrógeno', pct: 89.9 },
      { name: 'Helio', pct: 10.2 },
      { name: 'Metano', pct: 0.3 },
      { name: 'Otros', pct: 0.1 },
    ],
    facts: [
      { icon: '🌀', text: 'La Gran Mancha Roja es una tormenta que ha durado al menos 350 años y es 1.3 veces el diámetro de la Tierra.' },
      { icon: '🔱', text: 'El campo magnético de Júpiter es 14 veces más fuerte que el de la Tierra, creando la estructura más grande del Sistema Solar.' },
      { icon: '🌐', text: 'Júpiter es tan masivo que no orbita al Sol — Júpiter y el Sol orbitan un baricentro común.' },
      { icon: '🧲', text: 'La luna Europa de Júpiter es considerada uno de los mejores candidatos para vida extraterrestre, con un océano subterráneo.' },
    ],
    missions: [
      { year: '1979', name: 'Voyager 1 & 2', agency: 'NASA' },
      { year: '1995', name: 'Galileo', agency: 'NASA' },
      { year: '2016', name: 'Juno', agency: 'NASA' },
    ],
    cssColor: '#C88B3A', ringColor: null,
    textureType: 'gas_giant_jupiter',
    axialTilt: 0.0546,
  },
  Saturn: {
    name: 'Saturno', type: 'Gigante gaseoso',
    radius: 2.1, distance: 75, orbitalSpeed: 0.0000339, rotationSpeed: 0.038,
    color: '#E4C07A', emissive: '#5a3d00',
    glowColor: '#F0D090',
    description: 'La corona del cielo, adornada con alas de luz que giran en perfecta armonía. Saturno flota sereno, una obra maestra de cristal y belleza que nos recuerda la perfección matemática y el delicado arte escondido en el silencio espacial.<br><br><b>🧬 Sueños distantes:</b> Sus anillos brillan como un faro para los corazones inquietos. Y allá, entre sus lunas lejanas, el rocío cósmico y los ríos de metano susurran historias de química misteriosa, posibilidades tan maravillosas como exóticas, un testimonio de que la creación siempre encuentra un camino nuevo.',
    diameter: '116,460 km', mass: '5.68 × 10²⁶ kg',
    distanceFromSun: '1.43 billion km', gravity: '10.4 m/s²',
    dayLength: '10.7 hours', yearLength: '29.46 Earth years',
    avgTemp: '-140°C', minTemp: '-185°C', maxTemp: '11,700°C (core)',
    moons: 146, moonNames: 'Titán, Encélado, Mimas, Rea + 142 más',
    orbitalVelocity: '9.7 km/s',
    atmosphere: [
      { name: 'Hidrógeno', pct: 96.3 },
      { name: 'Helio', pct: 3.25 },
      { name: 'Metano', pct: 0.45 },
      { name: 'Otros', pct: 0.05 },
    ],
    facts: [
      { icon: '💍', text: 'Los anillos de Saturno están hechos de trozos de hielo y roca que van desde diminutos granos hasta objetos del tamaño de casas.' },
      { icon: '🌊', text: 'La luna Encélado de Saturno dispara géiseres de hielo de agua a 500 km en el espacio, insinuando un océano subterráneo.' },
      { icon: '🪐', text: 'Saturno tiene la densidad más baja de cualquier planeta — flotaría si se colocara en un cuerpo de agua suficientemente grande.' },
      { icon: '🌀', text: 'Una tormenta hexagonal en el polo norte de Saturno abarca 30,000 km de ancho — suficientemente grande para 4 Tierras.' },
    ],
    missions: [
      { year: '1980', name: 'Voyager 1', agency: 'NASA' },
      { year: '2004', name: 'Cassini-Huygens', agency: 'NASA/ESA' },
      { year: '2030', name: 'Dragonfly (Titan)', agency: 'NASA (planned)' },
    ],
    cssColor: '#E4C07A', ringColor: '#c8a04a',
    textureType: 'gas_giant_saturn',
    hasRings: true,
    axialTilt: 0.4665,
  },
  Uranus: {
    name: 'Urano', type: 'Gigante de hielo',
    radius: 1.6, distance: 94, orbitalSpeed: 0.0000119, rotationSpeed: -0.022,
    color: '#7DE8E8', emissive: '#003a3a',
    glowColor: '#5DADE2',
    description: 'El lánguido soñador turquesa, que reposa de lado bajo la tranquila luz lejana. Urano guarda secretos azules en sus hielos profundos, una suave y serena presencia que gira lentamente en una órbita melancólica y solitaria.<br><br><b>🧬 Serenidad escarchada:</b> Un mundo de hielo pacífico y enigmático donde la frialdad es suprema. Lejos de la vibrante calidez, es un lugar de inmovilidad sagrada. Si existe algún pulso oculto, debe ser tan tenue y silencioso como una plegaria exhalada en el silencio de una catedral de cristal.',
    diameter: '50,724 km', mass: '8.68 × 10²⁵ kg',
    distanceFromSun: '2.87 billion km', gravity: '8.87 m/s²',
    dayLength: '17.2 hours (retrograde)', yearLength: '84 Earth years',
    avgTemp: '-195°C', minTemp: '-224°C', maxTemp: '-153°C',
    moons: 27, moonNames: 'Miranda, Ariel, Umbriel, Titania, Oberon',
    orbitalVelocity: '6.8 km/s',
    atmosphere: [
      { name: 'Hidrógeno', pct: 82.5 },
      { name: 'Helio', pct: 15.2 },
      { name: 'Metano', pct: 2.3 },
      { name: 'Otros', pct: 0 },
    ],
    facts: [
      { icon: '↔', text: 'Urano rota casi completamente de lado, por lo que sus polos reciben más luz solar que su ecuador durante su órbita de 84 años.' },
      { icon: '🌊', text: 'Urano es un gigante de hielo — contiene una mezcla semilíquida de hielos de agua, metano y amoníaco bajo su atmósfera.' },
      { icon: '💨', text: 'Las velocidades del viento en Urano pueden superar los 900 km/h, a pesar de ser el planeta más frío del Sistema Solar.' },
      { icon: '💍', text: 'Urano tiene 13 anillos conocidos que son muy oscuros (casi negros como el carbón) y relativamente delgados.' },
    ],
    missions: [
      { year: '1986', name: 'Voyager 2 (flyby)', agency: 'NASA' },
      { year: '2030s', name: 'Uranus Orbiter (proposed)', agency: 'NASA' },
    ],
    cssColor: '#7DE8E8', ringColor: '#5DADE2',
    textureType: 'ice_giant_uranus',
    hasRings: true, thinRings: true,
    axialTilt: 1.7064,
  },
  Neptune: {
    name: 'Neptuno', type: 'Gigante de hielo',
    radius: 1.55, distance: 112, orbitalSpeed: 0.000006, rotationSpeed: 0.023,
    color: '#3455DB', emissive: '#000a3a',
    glowColor: '#5D6CC0',
    description: 'El centinela místico del abismo índigo. Neptuno danza en los confines de la noche, un fiero espíritu del viento en los límites de lo conocido, envuelto en nubes celestes donde la imaginación humana apenas se asoma.<br><br><b>🧬 Misterios del abismo:</b> Aunque sus vientos cantan la furia de lo inaccesible, es en sus gélidos dominios donde reside un eco solemne del infinito. Tritón, capturado en la danza, promete mares ocultos que quizás sostengan latidos frágiles que se esconden en la más íntima sombra cósmica.',
    diameter: '49,244 km', mass: '1.02 × 10²⁶ kg',
    distanceFromSun: '4.5 billion km', gravity: '11.15 m/s²',
    dayLength: '16.1 hours', yearLength: '164.8 Earth years',
    avgTemp: '-200°C', minTemp: '-218°C', maxTemp: '-200°C',
    moons: 16, moonNames: 'Triton, Proteus, Nereid + 13 more',
    orbitalVelocity: '5.4 km/s',
    atmosphere: [
      { name: 'Hidrógeno', pct: 80 },
      { name: 'Helio', pct: 19 },
      { name: 'Metano', pct: 1.5 },
      { name: 'Otros', pct: 0 },
    ],
    facts: [
      { icon: '💨', text: 'Neptuno tiene los vientos más fuertes del Sistema Solar — hasta 2,100 km/h, más de 6 veces la fuerza de un huracán en la Tierra.' },
      { icon: '🌀', text: 'La Gran Mancha Oscura — una tormenta del tamaño de la Tierra — fue observada por la Voyager 2 pero desapareció en 1994.' },
      { icon: '🔵', text: 'La luna Tritón de Neptuno orbita en dirección opuesta a la rotación de Neptuno — probablemente fue capturada del Cinturón de Kuiper.' },
      { icon: '🌊', text: 'Neptuno fue el primer planeta encontrado mediante predicción matemática en lugar de observación directa, en 1846.' },
    ],
    missions: [
      { year: '1989', name: 'Voyager 2 (flyby)', agency: 'NASA' },
      { year: '2040s', name: 'Neptune Probe (concept)', agency: 'NASA' },
    ],
    cssColor: '#3455DB', ringColor: null,
    textureType: 'ice_giant_neptune',
    axialTilt: 0.4943,
  },
  Moon: {
    name: 'Luna', type: 'Satélite natural',
    radius: 0.22, distance: 1.8, orbitalSpeed: 0, rotationSpeed: 0.001,
    color: '#cccccc', emissive: '#222222',
    glowColor: '#888888',
    description: 'La eterna confidente de nuestros sueños y vigilante plateada de la noche. La Luna ilumina los caminos inciertos y guía el ritmo de los mares, una presencia constante que conecta a la humanidad bajo un mismo firmamento compartido.<br><br><b>🧬 Reflejo del espíritu:</b> Silenciosa e inerte, la Luna es la memoria intocable de nuestro pasado. Aunque carezca de un latido propio, su brillo ha servido como la cuna de los sueños, la luz que siempre nos susurra que, más allá de la soledad y la esterilidad, siempre aguarda un nuevo horizonte iluminado.',
    diameter: '3,474 km', mass: '7.34 × 10²² kg',
    distanceFromSun: '384,400 km (from Earth)', gravity: '1.62 m/s²',
    dayLength: '29.5 Earth days', yearLength: '27.3 Earth days (orbit)',
    avgTemp: '-23°C', minTemp: '-173°C', maxTemp: '127°C',
    moons: 0, moonNames: 'N/A — the Moon is itself a satellite',
    orbitalVelocity: '1.022 km/s',
    atmosphere: [
      { name: 'Helio', pct: 25 },
      { name: 'Neón', pct: 25 },
      { name: 'Hidrógeno', pct: 23 },
      { name: 'Argón', pct: 20 },
    ],
    facts: [
      { icon: '🌕', text: 'La Luna se está alejando lentamente de la Tierra a 3.8 cm por año debido a interacciones de marea.' },
      { icon: '👣', text: '12 humanos han caminado sobre la Luna entre 1969 y 1972 — los únicos humanos en pisar otro mundo.' },
      { icon: '🌑', text: 'La Luna está bloqueada por marea — siempre muestra la misma cara a la Tierra. La cara oculta fue fotografiada por primera vez por Luna 3 en 1959.' },
      { icon: '💧', text: 'La misión LCROSS de la NASA confirmó hielo de agua en cráteres permanentemente sombreados en el polo sur en 2009.' },
      { icon: '🌊', text: 'La gravedad de la Luna es el principal motor de las mareas oceánicas de la Tierra, atrayendo agua hacia protuberancias en lados opuestos del planeta.' },
    ],
    missions: [
      { year: '1969', name: 'Apollo 11 (first landing)', agency: 'NASA' },
      { year: '1970', name: 'Luna 17 (first rover)', agency: 'USSR' },
      { year: '2009', name: 'LCROSS (water discovery)', agency: 'NASA' },
      { year: '2019', name: 'Chang\'e 4 (far side)', agency: 'CNSA' },
      { year: '2023', name: 'Chandrayaan-3', agency: 'ISRO' },
      { year: '2025', name: 'Artemis III (planned)', agency: 'NASA' },
    ],
    cssColor: '#cccccc', ringColor: null,
    textureType: 'rocky',
  },
};

// ═══════════════════════════════════════════════════════
//  PROCEDURAL TEXTURE GENERATOR
// ═══════════════════════════════════════════════════════
// ── 3D NOISE SYSTEM FOR SEAMLESS SPHERE TEXTURES ──
function _hash3(x, y, z) {
  let h = ((x * 374761393 + y * 668265263 + z * 1274126177) | 0);
  h = ((h ^ (h >> 13)) * 1103515245 + 12345) & 0x7fffffff;
  return h / 0x7fffffff;
}
function _smoothNoise3(x, y, z) {
  const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
  const fx = x - ix, fy = y - iy, fz = z - iz;
  const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy), sz = fz * fz * (3 - 2 * fz);
  const n000 = _hash3(ix, iy, iz), n100 = _hash3(ix + 1, iy, iz);
  const n010 = _hash3(ix, iy + 1, iz), n110 = _hash3(ix + 1, iy + 1, iz);
  const n001 = _hash3(ix, iy, iz + 1), n101 = _hash3(ix + 1, iy, iz + 1);
  const n011 = _hash3(ix, iy + 1, iz + 1), n111 = _hash3(ix + 1, iy + 1, iz + 1);
  const nx00 = n000 * (1 - sx) + n100 * sx, nx10 = n010 * (1 - sx) + n110 * sx;
  const nx01 = n001 * (1 - sx) + n101 * sx, nx11 = n011 * (1 - sx) + n111 * sx;
  const nxy0 = nx00 * (1 - sy) + nx10 * sy, nxy1 = nx01 * (1 - sy) + nx11 * sy;
  return nxy0 * (1 - sz) + nxy1 * sz;
}
function fbm3(x, y, z, octaves, lacunarity, gain) {
  let val = 0, amp = 0.5, freq = 1;
  lacunarity = lacunarity || 2.0; gain = gain || 0.5;
  for (let i = 0; i < octaves; i++) {
    val += amp * _smoothNoise3(x * freq, y * freq, z * freq);
    amp *= gain; freq *= lacunarity;
  }
  return val;
}
function sphereCoords(x, y, W, H) {
  const lat = Math.PI * (0.5 - y / H);
  const lon = 2 * Math.PI * x / W;
  return {
    nx: Math.cos(lat) * Math.cos(lon),
    ny: Math.cos(lat) * Math.sin(lon),
    nz: Math.sin(lat),
    lat, lon
  };
}
function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v; }
function lerp(a, b, t) { return a + (b - a) * t; }
function lerpColor(r1, g1, b1, r2, g2, b2, t) {
  return [lerp(r1, r2, t) | 0, lerp(g1, g2, t) | 0, lerp(b1, b2, t) | 0];
}

function createTexture(type) {
  const W = 1024, H = 512;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  const imgData = ctx.createImageData(W, H);
  const px = imgData.data;
  function setP(x, y, r, g, b) {
    const i = (y * W + x) * 4;
    px[i] = r; px[i + 1] = g; px[i + 2] = b; px[i + 3] = 255;
  }
  function rand(a, b) { return Math.random() * (b - a) + a; }

  // ═══════ SUN ═══════
  if (type === 'sun') {
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const s = sphereCoords(x, y, W, H);
      const n1 = fbm3(s.nx * 4 + 10, s.ny * 4 + 10, s.nz * 4 + 10, 4, 2.2, 0.55);
      const n2 = fbm3(s.nx * 8 + 30, s.ny * 8 + 30, s.nz * 8 + 30, 3, 2.5, 0.45);
      const gran = fbm3(s.nx * 20 + 50, s.ny * 20 + 50, s.nz * 20 + 50, 2, 2, 0.5);
      const v = n1 * 0.6 + n2 * 0.25 + gran * 0.15;
      const r = clamp(200 + v * 55, 180, 255) | 0;
      const g = clamp(120 + v * 135 - (1 - v) * 40, 50, 255) | 0;
      const b = clamp(v * 60 - 20, 0, 80) | 0;
      setP(x, y, r, g, b);
    }
    ctx.putImageData(imgData, 0, 0);
    // Sunspots
    for (let i = 0; i < 15; i++) {
      const sx = rand(W * 0.1, W * 0.9), sy = rand(H * 0.2, H * 0.8), sr = rand(8, 35);
      const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr);
      grd.addColorStop(0, 'rgba(40,10,0,0.8)'); grd.addColorStop(0.4, 'rgba(80,20,0,0.5)');
      grd.addColorStop(1, 'rgba(200,100,0,0)');
      ctx.fillStyle = grd; ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fill();
    }
    // Bright granulation highlights
    for (let i = 0; i < 4000; i++) {
      const gx = rand(0, W), gy = rand(0, H), gr = rand(1, 5);
      ctx.fillStyle = `rgba(255,${(rand(200, 255)) | 0},${(rand(50, 150)) | 0},${rand(0.1, 0.4)})`;
      ctx.beginPath(); ctx.arc(gx, gy, gr, 0, Math.PI * 2); ctx.fill();
    }
  }

  // ═══════ MERCURY ═══════
  else if (type === 'rocky') {
    // Base terrain with noise
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const s = sphereCoords(x, y, W, H);
      const n = fbm3(s.nx * 5 + 7, s.ny * 5 + 7, s.nz * 5 + 7, 4, 2.1, 0.48);
      const fine = fbm3(s.nx * 25 + 3, s.ny * 25 + 3, s.nz * 25 + 3, 2, 2, 0.5);
      const v = n * 0.75 + fine * 0.25;
      const base = 90 + v * 80;
      const r = clamp(base + rand(-5, 5), 60, 190) | 0;
      const g = clamp(base - 5 + rand(-5, 5), 55, 180) | 0;
      const b = clamp(base - 10 + rand(-3, 3), 50, 170) | 0;
      setP(x, y, r, g, b);
    }
    ctx.putImageData(imgData, 0, 0);
    // Caloris Basin (huge impact)
    const cx = W * 0.35, cy = H * 0.4;
    const cGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 120);
    cGrd.addColorStop(0, 'rgba(100,95,85,0.6)'); cGrd.addColorStop(0.5, 'rgba(120,115,105,0.4)');
    cGrd.addColorStop(0.8, 'rgba(140,135,125,0.2)'); cGrd.addColorStop(1, 'rgba(150,145,135,0)');
    ctx.fillStyle = cGrd; ctx.beginPath(); ctx.arc(cx, cy, 120, 0, Math.PI * 2); ctx.fill();
    // Many impact craters of various sizes
    for (let i = 0; i < 500; i++) {
      const crx = rand(0, W), cry = rand(0, H), crr = rand(2, 40);
      const depth = crr > 20 ? 0.6 : crr > 10 ? 0.5 : 0.35;
      ctx.beginPath(); ctx.arc(crx, cry, crr, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(50,48,44,${depth})`; ctx.lineWidth = crr > 15 ? 2 : 1; ctx.stroke();
      // Crater floor (darker)
      const innerGrd = ctx.createRadialGradient(crx, cry, 0, crx, cry, crr * 0.8);
      innerGrd.addColorStop(0, `rgba(60,58,52,${depth * 0.5})`);
      innerGrd.addColorStop(1, `rgba(100,96,88,0)`);
      ctx.fillStyle = innerGrd; ctx.fill();
      // Bright rim highlight
      if (crr > 8) {
        ctx.beginPath(); ctx.arc(crx - crr * 0.15, cry - crr * 0.15, crr * 1.02, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(180,175,165,${depth * 0.3})`; ctx.lineWidth = 1; ctx.stroke();
      }
      // Ray ejecta for large craters
      if (crr > 25) {
        for (let r2 = 0; r2 < 8; r2++) {
          const angle = rand(0, Math.PI * 2), len = rand(crr * 1.5, crr * 4);
          ctx.beginPath(); ctx.moveTo(crx, cry);
          ctx.lineTo(crx + Math.cos(angle) * len, cry + Math.sin(angle) * len);
          ctx.strokeStyle = `rgba(170,165,155,0.15)`; ctx.lineWidth = rand(1, 3); ctx.stroke();
        }
      }
    }
    // Scarps (linear ridges)
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      let sx2 = rand(0, W), sy2 = rand(0, H);
      ctx.moveTo(sx2, sy2);
      for (let j = 0; j < 5; j++) { sx2 += rand(-60, 60); sy2 += rand(-30, 30); ctx.lineTo(sx2, sy2); }
      ctx.strokeStyle = `rgba(80,75,68,${rand(0.15, 0.3)})`; ctx.lineWidth = rand(1, 2); ctx.stroke();
    }
  }

  // ═══════ VENUS ═══════
  else if (type === 'rocky_hot') {
    // Dense sulfuric cloud bands
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const s = sphereCoords(x, y, W, H);
      const band = fbm3(s.nx * 2 + 5, s.ny * 2 + 15, s.nz * 2 + 5, 3, 2.0, 0.5);
      const swirl = fbm3(s.nx * 6 + 20, s.ny * 6 + 20, s.nz * 6 + 20, 3, 2.2, 0.5);
      const turb = fbm3(s.nx * 12 + 40, s.ny * 12 + 40, s.nz * 12 + 40, 2, 2.0, 0.45);
      const fine = fbm3(s.nx * 30 + 60, s.ny * 30 + 60, s.nz * 30 + 60, 2, 2.0, 0.4);
      const v = band * 0.35 + swirl * 0.3 + turb * 0.2 + fine * 0.15;
      // Highland topology visible underneath
      const topo = fbm3(s.nx * 3 + 80, s.ny * 3 + 80, s.nz * 3 + 80, 2, 2.0, 0.5);
      const t = v * 0.85 + topo * 0.15;
      const r = clamp(180 + t * 75, 150, 255) | 0;
      const g = clamp(130 + t * 60 - (1 - t) * 10, 100, 210) | 0;
      const b = clamp(50 + t * 40, 20, 120) | 0;
      setP(x, y, r, g, b);
    }
    ctx.putImageData(imgData, 0, 0);
    // Vortex patterns at poles
    for (let p = 0; p < 2; p++) {
      const py = p === 0 ? H * 0.05 : H * 0.95;
      for (let i = 0; i < 60; i++) {
        const a = rand(0, Math.PI * 2), r2 = rand(20, 150);
        ctx.beginPath();
        ctx.arc(W * 0.5 + Math.cos(a) * r2 * 0.3, py + Math.sin(a) * r2 * 0.15, rand(10, 40), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(200,160,80,${rand(0.05, 0.15)})`; ctx.lineWidth = rand(1, 3); ctx.stroke();
      }
    }
    // Lightning glow spots
    for (let i = 0; i < 12; i++) {
      const lx = rand(W * 0.1, W * 0.9), ly = rand(H * 0.15, H * 0.85);
      const lg = ctx.createRadialGradient(lx, ly, 0, lx, ly, rand(15, 40));
      lg.addColorStop(0, 'rgba(255,240,180,0.15)'); lg.addColorStop(1, 'rgba(255,200,100,0)');
      ctx.fillStyle = lg; ctx.beginPath(); ctx.arc(lx, ly, 40, 0, Math.PI * 2); ctx.fill();
    }
  }

  // ═══════ EARTH ═══════
  else if (type === 'earth') {
    // Generate heightmap for realistic continents
    const heightMap = new Float32Array(W * H);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const s = sphereCoords(x, y, W, H);
      // Multi-scale continental noise
      const cont = fbm3(s.nx * 2.5 + 10, s.ny * 2.5 + 10, s.nz * 2.5 + 10, 5, 2.1, 0.52);
      const detail = fbm3(s.nx * 8 + 30, s.ny * 8 + 30, s.nz * 8 + 30, 3, 2.0, 0.48);
      const fine = fbm3(s.nx * 20 + 50, s.ny * 20 + 50, s.nz * 20 + 50, 2, 2.0, 0.45);
      const micro = fbm3(s.nx * 50 + 70, s.ny * 50 + 70, s.nz * 50 + 70, 2, 2.0, 0.4);
      const h = cont * 0.55 + detail * 0.25 + fine * 0.13 + micro * 0.07;
      heightMap[y * W + x] = h;
    }
    // Find sea level to get ~70% ocean coverage
    const sorted = Float32Array.from(heightMap).sort();
    const seaLevel = sorted[Math.floor(W * H * 0.62)];

    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const s = sphereCoords(x, y, W, H);
      const h = heightMap[y * W + x];
      const absLat = Math.abs(s.lat) / (Math.PI / 2);
      let r, g, b;

      if (h < seaLevel) {
        // OCEAN with depth shading
        const depth = clamp((seaLevel - h) / 0.3, 0, 1);
        const shallow = depth < 0.15;
        if (shallow) {
          // Coastal shallow water (lighter blue-green)
          const t = depth / 0.15;
          [r, g, b] = lerpColor(70, 180, 170, 40, 120, 170, t);
        } else {
          // Deep ocean
          const t = clamp((depth - 0.15) / 0.85, 0, 1);
          [r, g, b] = lerpColor(30, 100, 165, 8, 25, 80, t);
        }
        // Polar ocean is darker/greyer
        if (absLat > 0.7) {
          const pt = (absLat - 0.7) / 0.3;
          r = lerp(r, r * 0.7 + 40, pt) | 0;
          g = lerp(g, g * 0.7 + 50, pt) | 0;
          b = lerp(b, b * 0.8 + 40, pt) | 0;
        }
      } else {
        // LAND — biome based on latitude and elevation
        const elev = clamp((h - seaLevel) / 0.25, 0, 1);
        const moisture = fbm3(s.nx * 5 + 100, s.ny * 5 + 100, s.nz * 5 + 100, 2, 2, 0.5);

        if (absLat > 0.82) {
          // Ice cap
          const snow = fbm3(s.nx * 15 + 90, s.ny * 15 + 90, s.nz * 15 + 90, 2, 2, 0.5);
          r = clamp(220 + snow * 35, 210, 255) | 0;
          g = clamp(230 + snow * 25, 220, 255) | 0;
          b = clamp(240 + snow * 15, 235, 255) | 0;
        } else if (absLat > 0.65) {
          // Tundra / boreal
          const t = (absLat - 0.65) / 0.17;
          if (t > 0.6) {
            // Snow-dusted
            [r, g, b] = lerpColor(140, 155, 130, 210, 220, 215, (t - 0.6) / 0.4);
          } else {
            // Dark boreal forest
            [r, g, b] = lerpColor(50, 80, 40, 100, 120, 80, t / 0.6);
          }
        } else if (absLat > 0.4) {
          // Temperate — forests and grasslands
          if (elev > 0.7) {
            // Mountain snow
            [r, g, b] = lerpColor(160, 155, 140, 230, 230, 225, (elev - 0.7) / 0.3);
          } else if (elev > 0.5) {
            // Rocky mountains
            r = (130 + elev * 40) | 0; g = (125 + elev * 30) | 0; b = (110 + elev * 20) | 0;
          } else if (moisture > 0.45) {
            // Forest
            r = (30 + elev * 50) | 0; g = (90 + elev * 60 + moisture * 30) | 0; b = (25 + elev * 30) | 0;
          } else {
            // Grassland
            r = (80 + elev * 50) | 0; g = (120 + elev * 40) | 0; b = (40 + elev * 25) | 0;
          }
        } else if (absLat > 0.15) {
          // Subtropical
          if (elev > 0.6) {
            r = (150 + elev * 50) | 0; g = (140 + elev * 40) | 0; b = (110 + elev * 30) | 0;
          } else if (moisture < 0.35) {
            // Desert
            const dn = fbm3(s.nx * 12 + 120, s.ny * 12 + 120, s.nz * 12 + 120, 2, 2, 0.5);
            r = (190 + dn * 40) | 0; g = (170 + dn * 30) | 0; b = (120 + dn * 25) | 0;
          } else {
            // Mediterranean / savanna
            r = (90 + elev * 50) | 0; g = (110 + elev * 45 + moisture * 20) | 0; b = (40 + elev * 20) | 0;
          }
        } else {
          // Tropical
          if (elev > 0.6) {
            r = (120 + elev * 50) | 0; g = (115 + elev * 40) | 0; b = (100 + elev * 30) | 0;
          } else if (moisture > 0.4) {
            // Tropical rainforest (deep green)
            r = (15 + elev * 35) | 0; g = (70 + elev * 60 + moisture * 25) | 0; b = (10 + elev * 25) | 0;
          } else if (moisture < 0.25) {
            // Arid tropical
            r = (170 + elev * 40) | 0; g = (145 + elev * 35) | 0; b = (90 + elev * 25) | 0;
          } else {
            // Tropical grassland
            r = (70 + elev * 50) | 0; g = (100 + elev * 50) | 0; b = (30 + elev * 20) | 0;
          }
        }
        // Coastal beach fringe
        if (h < seaLevel + 0.005 && h >= seaLevel) {
          r = clamp(r * 0.5 + 100, 160, 220) | 0;
          g = clamp(g * 0.5 + 90, 155, 210) | 0;
          b = clamp(b * 0.3 + 60, 100, 160) | 0;
        }
      }
      setP(x, y, clamp(r, 0, 255), clamp(g, 0, 255), clamp(b, 0, 255));
    }
    ctx.putImageData(imgData, 0, 0);
    // River systems (thin blue lines following terrain gradients)
    ctx.strokeStyle = 'rgba(30,90,160,0.35)'; ctx.lineWidth = 1;
    for (let ri = 0; ri < 80; ri++) {
      let rx = (rand(0, W)) | 0, ry = (rand(H * 0.1, H * 0.9)) | 0;
      if (heightMap[ry * W + rx] < seaLevel) continue;
      ctx.beginPath(); ctx.moveTo(rx, ry);
      for (let step = 0; step < 200; step++) {
        let minH = heightMap[ry * W + rx], bestX = rx, bestY = ry;
        for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
          const nx2 = (rx + dx + W) % W, ny2 = clamp(ry + dy, 0, H - 1);
          if (heightMap[ny2 * W + nx2] < minH) { minH = heightMap[ny2 * W + nx2]; bestX = nx2; bestY = ny2; }
        }
        if (bestX === rx && bestY === ry) break;
        rx = bestX; ry = bestY;
        ctx.lineTo(rx, ry);
        if (heightMap[ry * W + rx] < seaLevel) break;
      }
      ctx.stroke();
    }
  }

  // ═══════ MARS ═══════
  else if (type === 'rocky_red') {
    // Detailed terrain
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const s = sphereCoords(x, y, W, H);
      const absLat = Math.abs(s.lat) / (Math.PI / 2);
      const terrain = fbm3(s.nx * 4 + 15, s.ny * 4 + 15, s.nz * 4 + 15, 4, 2.1, 0.5);
      const detail = fbm3(s.nx * 15 + 35, s.ny * 15 + 35, s.nz * 15 + 35, 3, 2.0, 0.45);
      const albedo = fbm3(s.nx * 2 + 55, s.ny * 2 + 55, s.nz * 2 + 55, 3, 2.0, 0.5);
      const v = terrain * 0.5 + detail * 0.25 + albedo * 0.25;
      let r, g, b;
      if (absLat > 0.85) {
        // Polar ice cap
        const ice = fbm3(s.nx * 10 + 80, s.ny * 10 + 80, s.nz * 10 + 80, 2, 2, 0.5);
        const t = (absLat - 0.85) / 0.15;
        const ir = 220 + ice * 35, ig = 225 + ice * 30, ib = 235 + ice * 20;
        r = lerp(160 + v * 50, ir, t) | 0;
        g = lerp(70 + v * 20, ig, t) | 0;
        b = lerp(50 + v * 15, ib, t) | 0;
      } else if (albedo > 0.52) {
        // Dark terrain regions (like Syrtis Major)
        r = clamp(100 + v * 40, 70, 150) | 0;
        g = clamp(45 + v * 20, 30, 80) | 0;
        b = clamp(30 + v * 15, 20, 60) | 0;
      } else {
        // Bright rust terrain
        r = clamp(165 + v * 60, 120, 230) | 0;
        g = clamp(75 + v * 35, 50, 120) | 0;
        b = clamp(45 + v * 25, 25, 80) | 0;
      }
      setP(x, y, clamp(r, 0, 255), clamp(g, 0, 255), clamp(b, 0, 255));
    }
    ctx.putImageData(imgData, 0, 0);
    // Olympus Mons (huge shield volcano)
    const omx = W * 0.38, omy = H * 0.35;
    const omGrd = ctx.createRadialGradient(omx, omy, 0, omx, omy, 80);
    omGrd.addColorStop(0, 'rgba(100,40,25,0.5)'); omGrd.addColorStop(0.2, 'rgba(140,60,35,0.35)');
    omGrd.addColorStop(0.7, 'rgba(170,80,50,0.15)'); omGrd.addColorStop(1, 'rgba(180,90,55,0)');
    ctx.fillStyle = omGrd; ctx.beginPath(); ctx.arc(omx, omy, 80, 0, Math.PI * 2); ctx.fill();
    // Caldera
    ctx.beginPath(); ctx.arc(omx, omy, 12, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(60,25,15,0.6)'; ctx.fill();
    ctx.strokeStyle = 'rgba(80,35,20,0.4)'; ctx.lineWidth = 2; ctx.stroke();
    // Valles Marineris (canyon system)
    ctx.beginPath(); ctx.moveTo(W * 0.45, H * 0.47);
    ctx.bezierCurveTo(W * 0.5, H * 0.46, W * 0.55, H * 0.48, W * 0.65, H * 0.47);
    ctx.bezierCurveTo(W * 0.7, H * 0.465, W * 0.72, H * 0.46, W * 0.75, H * 0.47);
    ctx.strokeStyle = 'rgba(60,20,10,0.6)'; ctx.lineWidth = 6; ctx.stroke();
    ctx.strokeStyle = 'rgba(90,35,20,0.3)'; ctx.lineWidth = 12; ctx.stroke();
    // Impact craters
    for (let i = 0; i < 300; i++) {
      const crx = rand(0, W), cry = rand(0, H), crr = rand(2, 25);
      ctx.beginPath(); ctx.arc(crx, cry, crr, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(80,30,15,${crr > 10 ? 0.35 : 0.2})`; ctx.lineWidth = 1; ctx.stroke();
      if (crr > 8) {
        const ig2 = ctx.createRadialGradient(crx, cry, 0, crx, cry, crr * 0.7);
        ig2.addColorStop(0, 'rgba(70,25,12,0.25)'); ig2.addColorStop(1, 'rgba(120,50,30,0)');
        ctx.fillStyle = ig2; ctx.fill();
      }
    }
    // Dust storm wisps
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      const dx = rand(0, W), dy = rand(H * 0.2, H * 0.8);
      ctx.ellipse(dx, dy, rand(30, 100), rand(8, 25), rand(0, Math.PI), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,140,90,${rand(0.04, 0.1)})`; ctx.fill();
    }
  }

  // ═══════ JUPITER ═══════
  else if (type === 'gas_giant_jupiter') {
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const s = sphereCoords(x, y, W, H);
      const bLat = s.lat / (Math.PI / 2); // -1 to 1
      // Atmospheric bands with turbulence
      const bandBase = Math.sin(bLat * 14) * 0.5 + 0.5;
      const turb = fbm3(s.nx * 6 + 5, s.ny * 6 + bLat * 3 + 5, s.nz * 6 + 5, 3, 2.2, 0.5);
      const fine = fbm3(s.nx * 20 + 25, s.ny * 20 + 25, s.nz * 20 + 25, 3, 2.0, 0.45);
      const micro = fbm3(s.nx * 40 + 45, s.ny * 40 + 45, s.nz * 40 + 45, 2, 2.0, 0.4);
      const v = bandBase * 0.4 + turb * 0.3 + fine * 0.2 + micro * 0.1;
      // Band edge turbulence (eddies)
      const edgeTurb = fbm3(s.nx * 12 + 65, s.ny * 12 + 65, s.nz * 12 + 65, 3, 2.3, 0.5);
      const vt = v + edgeTurb * 0.08;
      let r, g, b;
      if (vt > 0.65) {
        // Light zone
        [r, g, b] = lerpColor(230, 195, 100, 245, 215, 130, (vt - 0.65) / 0.35);
      } else if (vt > 0.45) {
        // Mid band
        [r, g, b] = lerpColor(180, 120, 50, 210, 160, 70, (vt - 0.45) / 0.2);
      } else if (vt > 0.3) {
        // Dark belt
        [r, g, b] = lerpColor(110, 60, 25, 160, 95, 40, (vt - 0.3) / 0.15);
      } else {
        // Very dark belt
        [r, g, b] = lerpColor(70, 35, 15, 110, 55, 25, vt / 0.3);
      }
      setP(x, y, clamp(r, 0, 255), clamp(g, 0, 255), clamp(b, 0, 255));
    }
    ctx.putImageData(imgData, 0, 0);
    // Great Red Spot (complex layered storm)
    const grsX = W * 0.6, grsY = H * 0.57;
    for (let layer = 0; layer < 8; layer++) {
      const lr = 90 - layer * 8, lh = 55 - layer * 5;
      const rot = layer * 0.15;
      ctx.save(); ctx.translate(grsX, grsY); ctx.rotate(rot);
      const grsGrd = ctx.createRadialGradient(0, 0, 0, 0, 0, lr);
      const op = layer < 3 ? 0.3 : 0.15;
      if (layer < 3) {
        grsGrd.addColorStop(0, `rgba(180,50,20,${op})`);
        grsGrd.addColorStop(0.5, `rgba(200,70,30,${op * 0.7})`);
        grsGrd.addColorStop(1, `rgba(210,100,50,0)`);
      } else {
        grsGrd.addColorStop(0, `rgba(210,80,30,${op})`);
        grsGrd.addColorStop(1, `rgba(220,120,60,0)`);
      }
      ctx.fillStyle = grsGrd; ctx.beginPath(); ctx.ellipse(0, 0, lr, lh, 0, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
    // White ovals & smaller storms
    const storms = [[W * 0.25, H * 0.68, 30, 18], [W * 0.8, H * 0.42, 22, 14], [W * 0.15, H * 0.35, 18, 10], [W * 0.7, H * 0.72, 25, 15]];
    storms.forEach(([sx2, sy2, sw, sh]) => {
      const sg = ctx.createRadialGradient(sx2, sy2, 0, sx2, sy2, sw);
      sg.addColorStop(0, 'rgba(240,230,200,0.3)'); sg.addColorStop(0.6, 'rgba(230,210,170,0.15)');
      sg.addColorStop(1, 'rgba(220,190,140,0)');
      ctx.fillStyle = sg; ctx.beginPath(); ctx.ellipse(sx2, sy2, sw, sh, 0, 0, Math.PI * 2); ctx.fill();
    });
    // Band-edge chevron patterns
    for (let i = 0; i < 80; i++) {
      const cx2 = rand(0, W), cy2 = rand(0, H);
      ctx.beginPath(); ctx.ellipse(cx2, cy2, rand(8, 35), rand(2, 6), rand(-0.3, 0.3), 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(180,140,70,${rand(0.05, 0.15)})`; ctx.lineWidth = 1; ctx.stroke();
    }
  }

  // ═══════ SATURN ═══════
  else if (type === 'gas_giant_saturn') {
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const s = sphereCoords(x, y, W, H);
      const bLat = s.lat / (Math.PI / 2);
      const band = Math.sin(bLat * 12) * 0.5 + 0.5;
      const turb = fbm3(s.nx * 5 + 10, s.ny * 5 + 10, s.nz * 5 + 10, 3, 2.0, 0.48);
      const fine = fbm3(s.nx * 18 + 30, s.ny * 18 + 30, s.nz * 18 + 30, 3, 2.0, 0.45);
      const v = band * 0.5 + turb * 0.3 + fine * 0.2;
      let r, g, b;
      if (v > 0.6) {
        [r, g, b] = lerpColor(235, 210, 150, 245, 225, 175, (v - 0.6) / 0.4);
      } else if (v > 0.35) {
        [r, g, b] = lerpColor(200, 170, 100, 225, 195, 130, (v - 0.35) / 0.25);
      } else {
        [r, g, b] = lerpColor(160, 130, 70, 195, 160, 90, v / 0.35);
      }
      // North polar hexagon region
      if (bLat > 0.8) {
        const hexAngle = Math.atan2(s.ny, s.nx);
        const hexR = Math.cos(Math.PI / 6) / Math.cos((hexAngle % (Math.PI / 3)) - Math.PI / 6);
        const polarDist = (bLat - 0.8) / 0.2;
        const hexV = Math.sin(hexAngle * 3 + polarDist * 6) * 0.15;
        r = clamp(r - polarDist * 40 + hexV * 30, 80, 255) | 0;
        g = clamp(g - polarDist * 30 + hexV * 25, 70, 255) | 0;
        b = clamp(b - polarDist * 10 + hexV * 15, 50, 255) | 0;
      }
      setP(x, y, clamp(r, 0, 255), clamp(g, 0, 255), clamp(b, 0, 255));
    }
    ctx.putImageData(imgData, 0, 0);
    // Subtle storms
    for (let i = 0; i < 25; i++) {
      const sx2 = rand(0, W), sy2 = rand(H * 0.15, H * 0.85);
      ctx.beginPath(); ctx.ellipse(sx2, sy2, rand(10, 45), rand(4, 12), rand(-0.2, 0.2), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(240,220,160,${rand(0.03, 0.08)})`; ctx.fill();
    }
  }

  // ═══════ URANUS ═══════
  else if (type === 'ice_giant_uranus') {
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const s = sphereCoords(x, y, W, H);
      const bLat = s.lat / (Math.PI / 2);
      const haze = fbm3(s.nx * 3 + 8, s.ny * 3 + 8, s.nz * 3 + 8, 3, 2.0, 0.48);
      const band = fbm3(s.nx * 1.5 + 20, s.ny * 1.5 + 20, s.nz * 1.5 + 20, 3, 2.0, 0.5);
      const detail = fbm3(s.nx * 12 + 40, s.ny * 12 + 40, s.nz * 12 + 40, 3, 2.0, 0.45);
      const fine = fbm3(s.nx * 30 + 60, s.ny * 30 + 60, s.nz * 30 + 60, 2, 2.0, 0.4);
      const v = haze * 0.35 + band * 0.3 + detail * 0.2 + fine * 0.15;
      // Subtle latitude-dependent color shift
      const latTint = Math.abs(bLat);
      let r = clamp(100 + v * 50 + latTint * 20, 70, 180) | 0;
      let g = clamp(200 + v * 35 - latTint * 10, 170, 250) | 0;
      let b = clamp(210 + v * 30 - latTint * 5, 180, 250) | 0;
      // Polar brightening
      if (latTint > 0.7) {
        const pt = (latTint - 0.7) / 0.3;
        r = lerp(r, r + 30, pt) | 0; g = lerp(g, g + 15, pt) | 0; b = lerp(b, b + 10, pt) | 0;
      }
      setP(x, y, clamp(r, 0, 255), clamp(g, 0, 255), clamp(b, 0, 255));
    }
    ctx.putImageData(imgData, 0, 0);
    // Methane cloud patches
    for (let i = 0; i < 40; i++) {
      const cx2 = rand(0, W), cy2 = rand(0, H);
      const cg = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, rand(10, 40));
      cg.addColorStop(0, `rgba(180,240,240,${rand(0.05, 0.12)})`); cg.addColorStop(1, 'rgba(150,220,220,0)');
      ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(cx2, cy2, rand(10, 40), 0, Math.PI * 2); ctx.fill();
    }
  }

  // ═══════ NEPTUNE ═══════
  else if (type === 'ice_giant_neptune') {
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const s = sphereCoords(x, y, W, H);
      const bLat = s.lat / (Math.PI / 2);
      const atmo = fbm3(s.nx * 3 + 12, s.ny * 3 + 12, s.nz * 3 + 12, 4, 2.1, 0.5);
      const band = Math.sin(bLat * 10) * 0.3;
      const turb = fbm3(s.nx * 8 + 30, s.ny * 8 + 30, s.nz * 8 + 30, 3, 2.2, 0.48);
      const detail = fbm3(s.nx * 20 + 50, s.ny * 20 + 50, s.nz * 20 + 50, 3, 2.0, 0.45);
      const v = atmo * 0.35 + band * 0.2 + turb * 0.25 + detail * 0.2;
      let r = clamp(20 + v * 40, 10, 80) | 0;
      let g = clamp(40 + v * 50 + Math.abs(bLat) * 15, 25, 110) | 0;
      let b = clamp(140 + v * 80, 100, 230) | 0;
      setP(x, y, clamp(r, 0, 255), clamp(g, 0, 255), clamp(b, 0, 255));
    }
    ctx.putImageData(imgData, 0, 0);
    // Great Dark Spot
    const gdx = W * 0.3, gdy = H * 0.45;
    for (let layer = 0; layer < 5; layer++) {
      const lr = 65 - layer * 8, lh = 42 - layer * 5;
      const gd = ctx.createRadialGradient(gdx, gdy, 0, gdx, gdy, lr);
      gd.addColorStop(0, `rgba(10,15,${80 - layer * 10},${0.35 - layer * 0.05})`);
      gd.addColorStop(1, `rgba(20,30,${100 - layer * 8},0)`);
      ctx.fillStyle = gd; ctx.beginPath(); ctx.ellipse(gdx, gdy, lr, lh, 0.15, 0, Math.PI * 2); ctx.fill();
    }
    // Bright companion clouds ("Scooter" and others)
    const brightClouds = [[W * 0.35, H * 0.38, 25, 10], [W * 0.55, H * 0.6, 35, 8], [W * 0.7, H * 0.35, 20, 6], [W * 0.15, H * 0.55, 28, 7]];
    brightClouds.forEach(([bx, by, bw, bh]) => {
      ctx.beginPath(); ctx.ellipse(bx, by, bw, bh, rand(-0.3, 0.3), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(150,180,255,${rand(0.15, 0.3)})`; ctx.fill();
    });
    // High-altitude methane clouds
    for (let i = 0; i < 60; i++) {
      const mcx = rand(0, W), mcy = rand(0, H);
      ctx.beginPath(); ctx.ellipse(mcx, mcy, rand(5, 25), rand(2, 8), rand(0, Math.PI), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(120,160,255,${rand(0.05, 0.15)})`; ctx.fill();
    }
  }

  if (type !== 'sun' && type !== 'earth' && type !== 'rocky' && type !== 'rocky_hot' && type !== 'rocky_red' &&
    type !== 'gas_giant_jupiter' && type !== 'gas_giant_saturn' && type !== 'ice_giant_uranus' && type !== 'ice_giant_neptune') {
    // Fallback
    ctx.fillStyle = '#444'; ctx.fillRect(0, 0, W, H);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return tex;
}

// ═══════ EARTH CLOUD LAYER TEXTURE ═══════
function createCloudTexture() {
  const W = 512, H = 256;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  const imgData = ctx.createImageData(W, H);
  const px = imgData.data;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const s = sphereCoords(x, y, W, H);
    // Multi-octave cloud noise at different scales
    const c1 = fbm3(s.nx * 3 + 200, s.ny * 3 + 200, s.nz * 3 + 200, 4, 2.0, 0.55);
    const c2 = fbm3(s.nx * 8 + 220, s.ny * 8 + 220, s.nz * 8 + 220, 3, 2.2, 0.5);
    const c3 = fbm3(s.nx * 20 + 240, s.ny * 20 + 240, s.nz * 20 + 240, 2, 2.0, 0.45);
    const cloud = c1 * 0.5 + c2 * 0.3 + c3 * 0.2;
    // Threshold for cloud visibility
    const threshold = 0.42;
    let alpha = 0;
    if (cloud > threshold) {
      alpha = clamp((cloud - threshold) / 0.25, 0, 0.85);
      // Thicker clouds near equator
      const absLat = Math.abs(s.lat) / (Math.PI / 2);
      if (absLat < 0.3) alpha *= 1.1;
      // Less clouds at poles
      if (absLat > 0.8) alpha *= 0.4;
    }
    const i = (y * W + x) * 4;
    px[i] = 255; px[i + 1] = 255; px[i + 2] = 255; px[i + 3] = clamp(alpha * 255, 0, 255) | 0;
  }
  ctx.putImageData(imgData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return tex;
}

// ═══════ TERRAIN MAP GENERATOR (Normal + Displacement + Specular) ═══════
function createTerrainMaps(type) {
  const W = 512, H = 256;
  const heights = new Float32Array(W * H);

  // Generate heightmap
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const s = sphereCoords(x, y, W, H);
    let h;
    if (type === 'earth') {
      h = fbm3(s.nx * 2.5 + 10, s.ny * 2.5 + 10, s.nz * 2.5 + 10, 5, 2.1, 0.52) * 0.45
        + fbm3(s.nx * 8 + 30, s.ny * 8 + 30, s.nz * 8 + 30, 3, 2.0, 0.48) * 0.3
        + fbm3(s.nx * 20 + 50, s.ny * 20 + 50, s.nz * 20 + 50, 2, 2.0, 0.45) * 0.25;
    } else if (type === 'rocky_red') {
      h = fbm3(s.nx * 4 + 15, s.ny * 4 + 15, s.nz * 4 + 15, 4, 2.1, 0.5) * 0.5
        + fbm3(s.nx * 15 + 35, s.ny * 15 + 35, s.nz * 15 + 35, 3, 2.0, 0.45) * 0.3
        + fbm3(s.nx * 2 + 55, s.ny * 2 + 55, s.nz * 2 + 55, 2, 2.0, 0.5) * 0.2;
    } else {
      h = fbm3(s.nx * 5 + 7, s.ny * 5 + 7, s.nz * 5 + 7, 4, 2.1, 0.48) * 0.55
        + fbm3(s.nx * 25 + 3, s.ny * 25 + 3, s.nz * 25 + 3, 3, 2, 0.5) * 0.45;
    }
    heights[y * W + x] = h;
  }

  // ── NORMAL MAP (much sharper surface detail than bump) ──
  const normCanvas = document.createElement('canvas');
  normCanvas.width = W; normCanvas.height = H;
  const nctx = normCanvas.getContext('2d');
  const nImg = nctx.createImageData(W, H);
  const npx = nImg.data;
  const str = { earth: 6, rocky_red: 8, rocky: 10, rocky_hot: 5 }[type] || 6;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const l = heights[y * W + ((x - 1 + W) % W)];
    const r = heights[y * W + ((x + 1) % W)];
    const u = heights[((y - 1 + H) % H) * W + x];
    const d = heights[((y + 1) % H) * W + x];
    let dnx = (l - r) * str;
    let dny = (u - d) * str;
    let dnz = 1.0;
    const len = Math.sqrt(dnx * dnx + dny * dny + dnz * dnz);
    const i = (y * W + x) * 4;
    npx[i] = clamp((dnx / len * 0.5 + 0.5) * 255, 0, 255) | 0;
    npx[i + 1] = clamp((dny / len * 0.5 + 0.5) * 255, 0, 255) | 0;
    npx[i + 2] = clamp((dnz / len * 0.5 + 0.5) * 255, 0, 255) | 0;
    npx[i + 3] = 255;
  }
  nctx.putImageData(nImg, 0, 0);

  // ── DISPLACEMENT MAP (grayscale heights for vertex displacement) ──
  const dispCanvas = document.createElement('canvas');
  dispCanvas.width = W; dispCanvas.height = H;
  const dctx = dispCanvas.getContext('2d');
  const dImg = dctx.createImageData(W, H);
  const dpx = dImg.data;
  for (let i = 0; i < W * H; i++) {
    const v = clamp(heights[i] * 255, 0, 255) | 0;
    dpx[i * 4] = v; dpx[i * 4 + 1] = v; dpx[i * 4 + 2] = v; dpx[i * 4 + 3] = 255;
  }
  dctx.putImageData(dImg, 0, 0);

  // ── SPECULAR MAP (Earth only: ocean = reflective, land = matte) ──
  let specTex = null;
  if (type === 'earth') {
    const specCanvas = document.createElement('canvas');
    specCanvas.width = W; specCanvas.height = H;
    const sctx = specCanvas.getContext('2d');
    const sImg = sctx.createImageData(W, H);
    const spx = sImg.data;
    const sorted = Float32Array.from(heights).sort();
    const seaLevel = sorted[Math.floor(W * H * 0.62)];
    for (let i = 0; i < W * H; i++) {
      const isOcean = heights[i] < seaLevel;
      // Bright = reflective (ocean), dark = matte (land)
      const v = isOcean ? 180 : 12;
      spx[i * 4] = v; spx[i * 4 + 1] = v; spx[i * 4 + 2] = v; spx[i * 4 + 3] = 255;
    }
    sctx.putImageData(sImg, 0, 0);
    specTex = new THREE.CanvasTexture(specCanvas);
    specTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  }

  const normalTex = new THREE.CanvasTexture(normCanvas);
  normalTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const dispTex = new THREE.CanvasTexture(dispCanvas);
  dispTex.anisotropy = renderer.capabilities.getMaxAnisotropy();

  return { normalTex, dispTex, specTex };
}

// ═══════════════════════════════════════════════════════
//  THREE.JS SETUP
// ═══════════════════════════════════════════════════════
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);
// Planetarium starts hidden for entrance animation
renderer.domElement.style.transform = 'scale(0.85)';
renderer.domElement.style.opacity = '0';
renderer.domElement.style.filter = 'blur(16px)';
renderer.domElement.style.willChange = 'transform, opacity, filter';

// UI overlays start hidden
const uiOverlays = [
  document.getElementById('header'),
  document.getElementById('controls-panel'),
  document.getElementById('hint'),
  document.getElementById('planet-nav'),
  document.querySelector('.nav-controls'),
  document.getElementById('controls-hint'),
  document.getElementById('planet-panel'),
  document.getElementById('about-btn'),
  document.getElementById('header-game-btn'),

  document.getElementById('ship-hud'),
  document.getElementById('minimap'),
];
uiOverlays.forEach(el => {
  if (el) {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.6s ease';
    el.style.pointerEvents = 'none';
  }
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.005, 5000);
camera.position.set(0, 40, 120);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 3;
controls.maxDistance = 500;
controls.enablePan = true;
controls.panSpeed = 1.2;
controls.zoomSpeed = 2.5;
controls.rotateSpeed = 1.8;
controls.maxPolarAngle = Math.PI * 0.85;
controls.minPolarAngle = Math.PI * 0.15;

// ── POST-PROCESSING (Bloom) ──
const composer = new THREE.EffectComposer(renderer);
composer.addPass(new THREE.RenderPass(scene, camera));
const bloomPass = new THREE.UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.05,  // strength
  0.5,   // radius
  0.92   // threshold
);
composer.addPass(bloomPass);

// Lighting
const ambientLight = new THREE.AmbientLight(0x111122, 1.2);
scene.add(ambientLight);
const sunLight = new THREE.PointLight(0xfff4e0, 0.6, 1000);
sunLight.position.set(0, 0, 0);
sunLight.castShadow = true;
sunLight.shadow.mapSize.width = 2048;
sunLight.shadow.mapSize.height = 2048;
sunLight.shadow.bias = -0.00005;
sunLight.shadow.normalBias = 0.02;
if (sunLight.shadow.camera) {
  // PointLight uses PerspectiveCamera for each face
  sunLight.shadow.camera.near = 0.5;
  sunLight.shadow.camera.far = 300;
}
scene.add(sunLight);

// Secondary fill light to soften shadows
const fillLight = new THREE.DirectionalLight(0x446688, 0.3);
fillLight.position.set(-50, 30, -50);
scene.add(fillLight);

// Hemisphere light for ambient sky color
const hemiLight = new THREE.HemisphereLight(0x223366, 0x000000, 0.4);
scene.add(hemiLight);

// ── REAL SATELLITE TEXTURES (NASA Blue Marble via Three.js CDN) ──
const textureLoader = new THREE.TextureLoader();
const REAL_TEXTURE_URLS = {
  // Sun
  sun_map: 'img/textures/sol.jpg',
  // Mercury
  mercury_map: 'https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images/mercurymap.jpg',
  mercury_bump: 'https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images/mercurybump.jpg',
  // Venus
  venus_map: 'https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images/venusmap.jpg',
  venus_bump: 'https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images/venusbump.jpg',
  // Earth (NASA Blue Marble — highest quality)
  earth_map: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/earth_atmos_2048.jpg',
  earth_normal: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/earth_normal_2048.jpg',
  earth_specular: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/earth_specular_2048.jpg',
  earth_clouds: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/earth_clouds_1024.png',
  earth_lights: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/earth_lights_2048.png',
  // Moon
  moon_map: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/moon_1024.jpg',
  // Mars
  mars_map: 'https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images/marsmap1k.jpg',
  mars_bump: 'https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images/marsbump1k.jpg',
  // Jupiter
  jupiter_map: 'https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images/jupitermap.jpg',
  // Saturn
  saturn_map: 'https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images/saturnmap.jpg',
  saturn_ring: 'https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images/saturnringcolor.jpg',
  // Uranus
  uranus_map: 'https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images/uranusmap.jpg',
  // Neptune
  neptune_map: 'https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images/neptunemap.jpg',
};
const realTextures = {};

function loadRealTextures() {
  const entries = Object.entries(REAL_TEXTURE_URLS);
  let loaded = 0;
  return new Promise((resolve) => {
    entries.forEach(([key, url]) => {
      textureLoader.load(
        url,
        (tex) => { realTextures[key] = tex; if (++loaded >= entries.length) resolve(); },
        undefined,
        () => { realTextures[key] = null; if (++loaded >= entries.length) resolve(); }
      );
    });
  });
}

// ── TWINKLING STARFIELD ──
let starUniforms;
function createStarfield() {
  const geo = new THREE.BufferGeometry();
  const count = 15000;
  const pos = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const phase = new Float32Array(count);
  const colors = new Float32Array(count * 3);
  const starColors = [
    [1.0, 1.0, 1.0], [0.8, 0.85, 1.0], [1.0, 0.95, 0.8],
    [1.0, 0.8, 0.7], [0.7, 0.8, 1.0], [1.0, 0.9, 0.95],
  ];
  for (let i = 0; i < count; i++) {
    const r = 300 + Math.random() * 500;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = r * Math.cos(phi);
    sizes[i] = Math.random() * 2.5 + 0.3;
    phase[i] = Math.random() * Math.PI * 2;
    const c = starColors[Math.floor(Math.random() * starColors.length)];
    colors[i * 3] = c[0]; colors[i * 3 + 1] = c[1]; colors[i * 3 + 2] = c[2];
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  geo.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  starUniforms = { uTime: { value: 0 } };
  const mat = new THREE.ShaderMaterial({
    uniforms: starUniforms,
    vertexShader: `
      attribute float aSize;
      attribute float aPhase;
      uniform float uTime;
      varying float vAlpha;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        float twinkle = sin(uTime * 1.5 + aPhase) * 0.5 + 0.5;
        gl_PointSize = aSize * (350.0 / -mvPos.z) * (0.4 + twinkle * 0.6);
        vAlpha = 0.25 + twinkle * 0.75;
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      varying float vAlpha;
      varying vec3 vColor;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float glow = 1.0 - smoothstep(0.0, 0.5, d);
        gl_FragColor = vec4(vColor, vAlpha * glow);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });
  return new THREE.Points(geo, mat);
}
scene.add(createStarfield());

// ── PLANETS & OBJECTS ──
const planetObjects = {};
const orbitLines = [];
let animationTime = 0;

// Orbit path helper — luminous pulsating lines with direction comet head
function createOrbitLine(radius, color, planetKey) {
  const pts = [];
  const segments = 256;
  for (let i = 0; i <= segments; i++) {
    const a = (i / segments) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
  }
  const geo = new THREE.BufferGeometry().setFromPoints(pts);
  const alphas = new Float32Array(segments + 1);
  for (let i = 0; i <= segments; i++) {
    alphas[i] = 1.0;
  }
  geo.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));

  const colorHex = color || 0x4488cc;
  const c = new THREE.Color(colorHex);
  const mat = new THREE.LineBasicMaterial({
    color: colorHex,
    transparent: true,
    opacity: 0.3,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const line = new THREE.Line(geo, mat);

  const headGeo = new THREE.SphereGeometry(0.25, 8, 8);
  const headMat = new THREE.MeshBasicMaterial({
    color: colorHex,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
  });
  const head = new THREE.Mesh(headGeo, headMat);
  head.userData = { isOrbitHead: true, planetKey, radius };

  const headGlow = createGlowSprite(colorHex, 3);
  headGlow.material.opacity = 0.4;
  headGlow.userData = { isOrbitHead: true, planetKey, radius };

  const group = new THREE.Group();
  group.add(line);
  group.add(head);
  group.add(headGlow);
  group.userData = { isOrbitLine: true, planetKey, radius, line, head, headGlow, color: colorHex };

  orbitLines.push(group);
  return group;
}

// Update orbit line glow and head position
function updateOrbitLines(time) {
  orbitLines.forEach(og => {
    if (!og.userData || !og.visible) return;
    const { planetKey, radius, line, head, headGlow } = og.userData;
    if (!planetKey) return;
    const po = planetObjects[planetKey];
    if (!po) return;

    const pulse = Math.sin(time * 1.5 + radius * 0.1) * 0.15 + 0.25;
    line.material.opacity = pulse;

    const angle = po.angle || 0;
    const leadAngle = angle + 0.04;
    const hx = Math.cos(leadAngle) * radius;
    const hz = Math.sin(leadAngle) * radius;
    head.position.set(hx, 0, hz);
    headGlow.position.set(hx, 0, hz);

    const headPulse = Math.sin(time * 3 + radius) * 0.2 + 0.6;
    head.material.opacity = headPulse * 0.8;
    const s = 0.8 + Math.sin(time * 2 + radius) * 0.2;
    head.scale.set(s, s, s);
    headGlow.scale.set(s * 2, s * 2, 1);
  });
}

// Glow sprite helper
function createGlowSprite(color, size) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const grd = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  const r = (color >> 16) & 0xff;
  const g = (color >> 8) & 0xff;
  const b = color & 0xff;
  grd.addColorStop(0, `rgba(${r},${g},${b},0.9)`);
  grd.addColorStop(0.25, `rgba(${r},${g},${b},0.4)`);
  grd.addColorStop(0.7, `rgba(${r},${g},${b},0.08)`);
  grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({ map: tex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(size, size, 1);
  return sprite;
}

// ── TEXT SPRITE FOR FLOATING LABELS ──
function createTextSprite(text, opts) {
  opts = opts || {};
  const fontSize = opts.fontSize || 48;
  const color = opts.color || '#ffffff';
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = `italic ${fontSize}px 'Playfair Display', Georgia, serif`;
  const metrics = ctx.measureText(text);
  const pad = 20;
  canvas.width = Math.ceil(metrics.width + pad * 2);
  canvas.height = Math.ceil(fontSize * 1.6 + pad * 2);
  // Re-set font after resize
  ctx.font = `italic ${fontSize}px 'Playfair Display', Georgia, serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  // No shadow/glow — clean text
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.fillStyle = color;
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  const tex = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, sizeAttenuation: true });
  const sprite = new THREE.Sprite(mat);
  const aspect = canvas.width / canvas.height;
  const scale = opts.scale || 3;
  sprite.scale.set(scale * aspect, scale, 1);
  sprite.userData.isLabel = true;
  return sprite;
}

// ── FRESNEL ATMOSPHERE SHADER ──
function createAtmosphere(radius, color, intensity) {
  const geo = new THREE.SphereGeometry(radius * 1.08, 64, 64);
  const mat = new THREE.ShaderMaterial({
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      uniform float intensity;
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vec3 viewDir = normalize(-vPosition);
        float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
        float glow = pow(rim, 3.0) * intensity;
        gl_FragColor = vec4(glowColor, glow * 0.7);
      }
    `,
    uniforms: {
      glowColor: { value: new THREE.Color(color) },
      intensity: { value: intensity || 1.5 },
    },
    transparent: true,
    side: THREE.BackSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  return new THREE.Mesh(geo, mat);
}

// ── RAYLEIGH SCATTERING ATMOSPHERE SHADER (realistic) ──
function createAtmosphereScattering(radius, color, intensity) {
  const c = new THREE.Color(color);
  const R = c.r, G = c.g, B = c.b;
  const geo = new THREE.SphereGeometry(radius * 1.12, 64, 64);
  const mat = new THREE.ShaderMaterial({
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vWorldPos;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPos = worldPos.xyz;
        vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 scatterColor;
      uniform float intensity;
      uniform vec3 sunDir;
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vWorldPos;
      void main() {
        vec3 viewDir = normalize(-vPosition);
        vec3 normal = normalize(vNormal);
        float rim = 1.0 - max(dot(viewDir, normal), 0.0);
        float rimPow = pow(rim, 4.0);
        vec3 scattering = scatterColor * rimPow * intensity;
        float sunDot = max(dot(normal, normalize(sunDir)), 0.0);
        float forwardScatter = pow(sunDot, 8.0) * intensity * 0.5;
        scattering += vec3(forwardScatter * 0.8, forwardScatter * 0.6, forwardScatter);
        float multiScatter = rimPow * rim * intensity * 0.3;
        scattering += vec3(multiScatter * 0.3, multiScatter * 0.5, multiScatter);
        float alpha = max(length(scattering), rimPow * intensity * 0.5);
        gl_FragColor = vec4(scattering, alpha * 0.65);
      }
    `,
    uniforms: {
      scatterColor: { value: new THREE.Color(color) },
      intensity: { value: intensity || 1.5 },
      sunDir: { value: new THREE.Vector3(0, 0, 0) },
    },
    transparent: true,
    side: THREE.BackSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  return new THREE.Mesh(geo, mat);
}

// ── NEBULA BACKGROUND ──
const nebulaParticles = [];
function buildNebulaBackground() {
  const tex = new THREE.TextureLoader().load('img/textures/8k_stars_milky_way.jpg', (loaded) => {
    loaded.generateMipmaps = true;
    loaded.minFilter = THREE.LinearMipmapLinearFilter;
    loaded.magFilter = THREE.LinearFilter;
    loaded.anisotropy = renderer.capabilities.getMaxAnisotropy();
    loaded.needsUpdate = true;
  });
  const geo = new THREE.SphereGeometry(900, 96, 96);
  const mat = new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, depthWrite: false });
  const bgMesh = new THREE.Mesh(geo, mat);
  bgMesh.rotation.x = 0;
  scene.add(bgMesh);
  window._bgMesh = bgMesh;

  // ── 3D NEBULA DUST CLOUDS (volumetric gas) ──
  const dustCount = 3000;
  const dustGeo = new THREE.BufferGeometry();
  const dustPos = new Float32Array(dustCount * 3);
  const dustSizes = new Float32Array(dustCount);
  const dustColors = new Float32Array(dustCount * 3);
  const dustAlphas = new Float32Array(dustCount);
  const dustPhases = new Float32Array(dustCount);
  for (let i = 0; i < dustCount; i++) {
    const r = 80 + Math.random() * 650;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    dustPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    dustPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.4;
    dustPos[i * 3 + 2] = r * Math.cos(phi);
    dustSizes[i] = Math.random() * 10 + 3;
    dustAlphas[i] = Math.random() * 0.18 + 0.03;
    dustPhases[i] = Math.random() * Math.PI * 2;
    const hue = 180 + Math.random() * 80;
    const c = new THREE.Color().setHSL(hue / 360, 0.45, 0.12 + Math.random() * 0.18);
    dustColors[i * 3] = c.r; dustColors[i * 3 + 1] = c.g; dustColors[i * 3 + 2] = c.b;
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  dustGeo.setAttribute('aSize', new THREE.BufferAttribute(dustSizes, 1));
  dustGeo.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));
  dustGeo.setAttribute('aAlpha', new THREE.BufferAttribute(dustAlphas, 1));
  dustGeo.setAttribute('aPhase', new THREE.BufferAttribute(dustPhases, 1));

  const dustMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
      attribute float aSize;
      attribute float aAlpha;
      attribute float aPhase;
      uniform float uTime;
      varying float vAlpha;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        float drift = sin(uTime * 0.3 + aPhase) * 0.5 + 0.5;
        gl_PointSize = aSize * (220.0 / -mvPos.z) * (0.7 + drift * 0.3);
        vAlpha = aAlpha * (0.6 + drift * 0.4);
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      varying float vAlpha;
      varying vec3 vColor;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float glow = 1.0 - smoothstep(0.0, 0.5, d);
        glow = glow * glow;
        gl_FragColor = vec4(vColor, vAlpha * glow * 0.7);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });
  const dustPoints = new THREE.Points(dustGeo, dustMat);
  dustPoints.userData = { isNebulaDust: true };
  scene.add(dustPoints);
  nebulaParticles.push(dustPoints);

  // ── BRIGHT GLOWING STARDUST (sparkle particles) ──
  const sparkleCount = 800;
  const sparkleGeo = new THREE.BufferGeometry();
  const sparklePos = new Float32Array(sparkleCount * 3);
  const sparkleSizes = new Float32Array(sparkleCount);
  const sparklePhase = new Float32Array(sparkleCount);
  const sparkleColors = new Float32Array(sparkleCount * 3);
  for (let i = 0; i < sparkleCount; i++) {
    const r = 180 + Math.random() * 520;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    sparklePos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    sparklePos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.5;
    sparklePos[i * 3 + 2] = r * Math.cos(phi);
    sparkleSizes[i] = Math.random() * 3.5 + 0.5;
    sparklePhase[i] = Math.random() * Math.PI * 2;
    const hue = 160 + Math.random() * 120;
    const c = new THREE.Color().setHSL(hue / 360, 0.7, 0.5 + Math.random() * 0.3);
    sparkleColors[i * 3] = c.r; sparkleColors[i * 3 + 1] = c.g; sparkleColors[i * 3 + 2] = c.b;
  }
  sparkleGeo.setAttribute('position', new THREE.BufferAttribute(sparklePos, 3));
  sparkleGeo.setAttribute('aSize', new THREE.BufferAttribute(sparkleSizes, 1));
  sparkleGeo.setAttribute('aPhase', new THREE.BufferAttribute(sparklePhase, 1));
  sparkleGeo.setAttribute('color', new THREE.BufferAttribute(sparkleColors, 3));

  const sparkleMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
      attribute float aSize;
      attribute float aPhase;
      uniform float uTime;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vColor = color;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        float twinkle = sin(uTime * 2.0 + aPhase) * 0.5 + 0.5;
        gl_PointSize = aSize * (250.0 / -mvPos.z) * (0.3 + twinkle * 0.7);
        vAlpha = 0.1 + twinkle * 0.5;
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float glow = 1.0 - smoothstep(0.0, 0.5, d);
        gl_FragColor = vec4(vColor, vAlpha * glow);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });
  const sparklePoints = new THREE.Points(sparkleGeo, sparkleMat);
  sparklePoints.userData = { isNebulaSparkle: true };
  scene.add(sparklePoints);
  nebulaParticles.push(sparklePoints);
}

// ── BUILD THE SUN ──
function buildSun() {
  const group = new THREE.Group();
  group.userData = { planetName: 'Sun' };
  const tex = realTextures.sun_map || createTexture('sun');
  const geo = new THREE.SphereGeometry(5, 128, 128);
  const mat = new THREE.MeshBasicMaterial({ map: tex });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.userData = { name: 'Sun', isSun: true };
  group.add(mesh);

  // Inner corona (hot white)
  for (let i = 0; i < 3; i++) {
    const sprite = createGlowSprite(0xFFF4E0, 7 + i * 1.2);
    sprite.material.opacity = 0.08 - i * 0.015;
    group.add(sprite);
  }
  // Mid corona (orange)
  for (let i = 0; i < 4; i++) {
    const sprite = createGlowSprite(0xFF8C00, 9 + i * 2);
    sprite.material.opacity = 0.05 - i * 0.008;
    group.add(sprite);
  }
  // Outer corona (deep red)
  for (let i = 0; i < 3; i++) {
    const sprite = createGlowSprite(0xFF4500, 14 + i * 3);
    sprite.material.opacity = 0.03 - i * 0.007;
    group.add(sprite);
  }
  // Outer bright glow
  const bright = createGlowSprite(0xFFEE88, 12);
  bright.material.opacity = 0.08;
  group.add(bright);

  // ── LENS FLARE ──
  const flareCanvas = document.createElement('canvas');
  flareCanvas.width = flareCanvas.height = 256;
  const fctx = flareCanvas.getContext('2d');
  const fgrd = fctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  fgrd.addColorStop(0, 'rgba(255,248,220,0.7)');
  fgrd.addColorStop(0.1, 'rgba(255,230,170,0.4)');
  fgrd.addColorStop(0.3, 'rgba(255,180,80,0.1)');
  fgrd.addColorStop(0.6, 'rgba(255,120,20,0.03)');
  fgrd.addColorStop(1, 'rgba(255,80,0,0)');
  fctx.fillStyle = fgrd;
  fctx.fillRect(0, 0, 256, 256);
  const flareTex = new THREE.CanvasTexture(flareCanvas);
  // Secondary flare element
  const flare2Canvas = document.createElement('canvas');
  flare2Canvas.width = flare2Canvas.height = 64;
  const f2ctx = flare2Canvas.getContext('2d');
  const f2grd = f2ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  f2grd.addColorStop(0, 'rgba(120,180,255,0.3)');
  f2grd.addColorStop(0.5, 'rgba(100,150,255,0.08)');
  f2grd.addColorStop(1, 'rgba(80,120,255,0)');
  f2ctx.fillStyle = f2grd;
  f2ctx.fillRect(0, 0, 64, 64);
  const flare2Tex = new THREE.CanvasTexture(flare2Canvas);
  const lensflare = new THREE.Lensflare();
  lensflare.addElement(new THREE.LensflareElement(flareTex, 350, 0, new THREE.Color(0xFFF8DC)));
  lensflare.addElement(new THREE.LensflareElement(flare2Tex, 50, 0.3));
  lensflare.addElement(new THREE.LensflareElement(flare2Tex, 80, 0.4));
  lensflare.addElement(new THREE.LensflareElement(flare2Tex, 35, 0.5));
  lensflare.addElement(new THREE.LensflareElement(flare2Tex, 70, 0.6));
  lensflare.addElement(new THREE.LensflareElement(flare2Tex, 40, 0.7));
  group.add(lensflare);

  // ── PULSE ANIMATION ──
  group.userData._pulsePhase = 0;
  group.userData._pulse = (dt) => {
    group.userData._pulsePhase += dt * 0.8;
    const s = 1 + Math.sin(group.userData._pulsePhase) * 0.015;
    mesh.scale.set(s, s, s);
  };

  scene.add(group);
  planetObjects['Sun'] = { group, mesh, data: PLANET_DATA['Sun'] };

  // Sun floating label
  const sunLabel = createTextSprite('\u2606 Sun', {
    fontSize: 36,
    color: '#ffffff',
    glowColor: '#FF8C00',
    scale: 3.0,
  });
  sunLabel.position.y = 7;
  group.add(sunLabel);

  return group;
}
// Sun built via deferred queue below

// ── BUILD PLANETS ──
function buildPlanet(key) {
  const data = PLANET_DATA[key];
  if (!data || key === 'Sun') return;

  const group = new THREE.Group();
  group.userData = { planetName: key };
  scene.add(group);

  // Luminous orbit line
  const hexColor = data.cssColor ? parseInt(data.cssColor.replace('#', ''), 16) : 0x334466;
  const orbitGroup = createOrbitLine(data.distance, hexColor, key);
  scene.add(orbitGroup);

  // Planet mesh — prefer real satellite textures, fallback to procedural
  const _realTexKeys = { Mercury: 'mercury_map', Venus: 'venus_map', Earth: 'earth_map', Mars: 'mars_map', Jupiter: 'jupiter_map', Saturn: 'saturn_map', Uranus: 'uranus_map', Neptune: 'neptune_map' };
  const _realBumpKeys = { Mercury: 'mercury_bump', Venus: 'venus_bump', Mars: 'mars_bump' };
  const useRealTex = _realTexKeys[key] && realTextures[_realTexKeys[key]];
  const useRealEarth = (key === 'Earth' && useRealTex);

  const tex = useRealTex ? realTextures[_realTexKeys[key]] : createTexture(data.textureType);
  const geo = new THREE.SphereGeometry(data.radius, 128, 128);
  const isTerrestrial = ['rocky', 'rocky_hot', 'earth', 'rocky_red'].includes(data.textureType);
  const matOpts = {
    map: tex,
    emissive: new THREE.Color(data.emissive),
    emissiveIntensity: useRealTex ? 0.08 : 0.3,
    shininess: isTerrestrial ? 35 : 15,
  };
  // Surface detail maps
  let terrainMaps = null;
  if (useRealEarth) {
    // Earth: full NASA satellite normal + specular + city lights
    if (realTextures.earth_normal) {
      matOpts.normalMap = realTextures.earth_normal;
      matOpts.normalScale = new THREE.Vector2(3.0, 3.0);
    }
    if (realTextures.earth_specular) {
      matOpts.specularMap = realTextures.earth_specular;
      matOpts.specular = new THREE.Color(0x888888);
      matOpts.shininess = 30;
    }
    if (realTextures.earth_lights) {
      matOpts.emissiveMap = realTextures.earth_lights;
      matOpts.emissive = new THREE.Color(0xffcc88);
      matOpts.emissiveIntensity = 1.5;
    }
  } else if (useRealTex && _realBumpKeys[key] && realTextures[_realBumpKeys[key]]) {
    // Planets with real bump maps (Mercury, Venus, Mars)
    matOpts.bumpMap = realTextures[_realBumpKeys[key]];
    matOpts.bumpScale = data.radius * 0.05;
    matOpts.shininess = 25;
  } else if (isTerrestrial && !useRealTex) {
    // Procedural terrain maps as fallback
    terrainMaps = createTerrainMaps(data.textureType);
    matOpts.normalMap = terrainMaps.normalTex;
    matOpts.normalScale = new THREE.Vector2(1.2, 1.2);
    matOpts.displacementMap = terrainMaps.dispTex;
    matOpts.displacementScale = data.radius * 0.035;
    matOpts.displacementBias = -data.radius * 0.017;
    if (terrainMaps.specTex) {
      matOpts.specularMap = terrainMaps.specTex;
      matOpts.specular = new THREE.Color(0x555555);
      matOpts.shininess = 80;
    }
  }
  const mat = new THREE.MeshPhongMaterial(matOpts);

  // Rayleigh scattering atmosphere (realistic)
  const _atmoColors = { Venus: '#E8B96F', Earth: '#4fc3f7', Mars: '#C06030', Jupiter: '#D4A843', Saturn: '#F0D090', Uranus: '#7DE8E8', Neptune: '#5D6CC0' };
  if (false && _atmoColors[key]) {
    const atmoIntensity = (key === 'Mars') ? 0.5 : (key === 'Earth') ? 1.8 : (key === 'Venus') ? 1.5 : (key === 'Jupiter') ? 1.0 : (key === 'Saturn') ? 0.9 : 1.2;
    group.add(createAtmosphereScattering(data.radius, _atmoColors[key], atmoIntensity));
  }
  // Earth cloud layer (separate rotating sphere)
  if (key === 'Earth') {
    const cloudTex = (realTextures.earth_clouds) ? realTextures.earth_clouds : createCloudTexture();
    const cloudGeo = new THREE.SphereGeometry(data.radius * 1.015, 128, 128);
    const cloudMat = new THREE.MeshPhongMaterial({
      map: cloudTex, transparent: true, depthWrite: false,
      side: THREE.FrontSide, opacity: realTextures.earth_clouds ? 0.65 : 0.95,
    });
    const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
    cloudMesh.userData = { isCloudLayer: true, name: key };
    if (data.axialTilt) cloudMesh.rotation.z = data.axialTilt;
    group.add(cloudMesh);
    planetObjects['Earth_clouds'] = cloudMesh;
  }

  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData = { name: key };
  // Apply real axial tilt
  if (data.axialTilt) mesh.rotation.z = data.axialTilt;
  group.add(mesh);

  // Planet glow sprite
  const hex = parseInt(data.glowColor.replace('#', ''), 16);
  const glow = createGlowSprite(hex, data.radius * 4);
  glow.material.opacity = 0.35;
  group.add(glow);

  // Floating name label
  const esName = { Sun: 'Sol', Mercury: 'Mercurio', Venus: 'Venus', Earth: 'Tierra', Mars: 'Marte', Jupiter: 'Júpiter', Saturn: 'Saturno', Uranus: 'Urano', Neptune: 'Neptuno', Moon: 'Luna' }[key] || key;
  const nameLabel = createTextSprite(esName, {
    fontSize: 36,
    color: '#ffffff',
    glowColor: data.cssColor,
    scale: Math.max(data.radius * 1.2, 1.5),
  });
  nameLabel.position.y = data.radius * 2.2;
  group.add(nameLabel);

  // Saturn / Uranus rings
  if (data.hasRings) {
    const ir = data.radius * 1.35;
    const or2 = data.thinRings ? data.radius * 2.0 : data.radius * 2.8;
    const ringGeo = new THREE.RingGeometry(ir, or2, 128);
    // Remap UVs for radial texture mapping
    const uvAttr = ringGeo.attributes.uv;
    const posAttr = ringGeo.attributes.position;
    for (let i = 0; i < uvAttr.count; i++) {
      const x = posAttr.getX(i), z = posAttr.getY(i);
      const dist = Math.sqrt(x * x + z * z);
      uvAttr.setXY(i, (dist - ir) / (or2 - ir), 0.5);
    }
    const ringCanvas = document.createElement('canvas');
    ringCanvas.width = 1024; ringCanvas.height = 64;
    const rctx = ringCanvas.getContext('2d');
    if (key === 'Saturn') {
      // Detailed ring bands: C ring, B ring, Cassini Division, A ring, F ring
      const bands = [
        [0, 0.12, 'rgba(140,120,80,0.35)'],   // C ring (faint)
        [0.12, 0.14, 'rgba(160,140,90,0.45)'],
        [0.14, 0.40, 'rgba(200,170,100,0.85)'], // B ring (bright)
        [0.40, 0.46, 'rgba(210,185,120,0.9)'],
        [0.46, 0.52, 'rgba(30,25,15,0.15)'],    // Cassini Division (dark gap)
        [0.52, 0.78, 'rgba(205,175,95,0.75)'],  // A ring
        [0.78, 0.82, 'rgba(190,165,90,0.6)'],
        [0.82, 0.86, 'rgba(40,35,20,0.1)'],     // Encke Gap
        [0.86, 0.92, 'rgba(175,150,80,0.5)'],   // Outer A ring
        [0.92, 0.96, 'rgba(50,45,30,0.05)'],    // Gap
        [0.96, 1.0, 'rgba(160,140,100,0.35)'],  // F ring (thin bright)
      ];
      bands.forEach(([start, end, color]) => {
        rctx.fillStyle = color;
        rctx.fillRect(start * 1024, 0, (end - start) * 1024, 64);
      });
      // Add noise/texture variation
      for (let i = 0; i < 2000; i++) {
        const x = Math.random() * 1024;
        const w = Math.random() * 3 + 0.5;
        const a = Math.random() * 0.15;
        rctx.fillStyle = `rgba(${180 + Math.random() * 40 | 0},${150 + Math.random() * 30 | 0},${80 + Math.random() * 30 | 0},${a})`;
        rctx.fillRect(x, 0, w, 64);
      }
    } else {
      // Uranus rings (thin, dark)
      const rg = rctx.createLinearGradient(0, 0, 1024, 0);
      rg.addColorStop(0, 'rgba(93,173,226,0)');
      rg.addColorStop(0.25, 'rgba(93,173,226,0.35)');
      rg.addColorStop(0.5, 'rgba(125,200,230,0.25)');
      rg.addColorStop(0.75, 'rgba(93,173,226,0.35)');
      rg.addColorStop(1, 'rgba(93,173,226,0)');
      rctx.fillStyle = rg; rctx.fillRect(0, 0, 1024, 64);
    }
    const ringTex = new THREE.CanvasTexture(ringCanvas);
    const ringMat = new THREE.MeshBasicMaterial({
      map: ringTex, side: THREE.DoubleSide, transparent: true, depthWrite: false,
    });
    const rings = new THREE.Mesh(ringGeo, ringMat);
    rings.castShadow = true;
    rings.receiveShadow = true;
    rings.rotation.x = Math.PI / 2;
    if (key === 'Uranus') rings.rotation.x = Math.PI / 8;
    group.add(rings);
    // Ring shadow on planet (subtle dark band)
    if (key === 'Saturn') {
      const shadowGeo = new THREE.RingGeometry(data.radius * 0.01, data.radius * 1.01, 64);
      const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.15, side: THREE.DoubleSide, depthWrite: false });
      const shadow = new THREE.Mesh(shadowGeo, shadowMat);
      shadow.rotation.x = Math.PI / 2;
      shadow.position.y = 0.01;
      group.add(shadow);
    }
  }

  // Moons
  if (key === 'Earth') {
    const moonGeo = new THREE.SphereGeometry(0.22, 32, 32);
    const moonMatOpts = { emissive: 0x111111, emissiveIntensity: 0.15 };
    if (realTextures.moon_map) {
      moonMatOpts.map = realTextures.moon_map;
    } else {
      moonMatOpts.color = 0xaaaaaa;
      moonMatOpts.emissive = 0x222222;
    }
    const moonMat = new THREE.MeshPhongMaterial(moonMatOpts);
    const moonMesh = new THREE.Mesh(moonGeo, moonMat);
    moonMesh.userData = { isMoon: true, name: 'Moon' };
    group.add(moonMesh);
    planetObjects['Earth_moon'] = moonMesh;
    // Store Moon as a clickable planet object for panel display
    planetObjects['Moon'] = { mesh: moonMesh, data: PLANET_DATA['Moon'], group: group, isTerrestrial: true, baseDisplacementScale: 0, baseNormalScale: 0 };
  }
  if (key === 'Jupiter') {
    const moonDists = [3.2, 4.2, 5.4, 6.5];
    const moonCols = [0xff9900, 0xcccccc, 0xbb9977, 0x998877];
    moonDists.forEach((d, i) => {
      const m = new THREE.Mesh(
        new THREE.SphereGeometry(0.18 - i * 0.02, 12, 12),
        new THREE.MeshPhongMaterial({ color: moonCols[i], emissive: 0x111111 })
      );
      m.userData = { isMoon: true, dist: d, speed: 0.015 - i * 0.003, angle: Math.random() * Math.PI * 2 };
      group.add(m);
    });
  }

  // Set initial position
  const angle = Math.random() * Math.PI * 2;
  group.position.x = Math.cos(angle) * data.distance;
  group.position.z = Math.sin(angle) * data.distance;

  planetObjects[key] = {
    group, mesh, data, angle,
    isTerrestrial,
    baseDisplacementScale: (useRealEarth) ? 0 : (isTerrestrial && !useRealTex ? data.radius * 0.035 : 0),
    baseNormalScale: (useRealEarth) ? 3.0 : (isTerrestrial && !useRealTex ? 1.2 : 0),
  };
}

// Planets built via deferred queue below

// ── ASTEROID BELT ──
function createRockGeometry() {
  const geo = new THREE.IcosahedronGeometry(0.12, 0);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    pos.setX(i, pos.getX(i) * (0.7 + Math.random() * 0.6));
    pos.setY(i, pos.getY(i) * (0.7 + Math.random() * 0.6));
    pos.setZ(i, pos.getZ(i) * (0.7 + Math.random() * 0.6));
  }
  geo.computeVertexNormals();
  return geo;
}

function buildAsteroidBelt() {
  const count = 4000;
  const rockGeo = createRockGeometry();
  const rockMat = new THREE.MeshPhongMaterial({ color: 0x998877, shininess: 5 });
  const mesh = new THREE.InstancedMesh(rockGeo, rockMat, count);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < count; i++) {
    const r = 43 + Math.random() * 8;
    const a = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 1.5;
    dummy.position.set(Math.cos(a) * r, y, Math.sin(a) * r);
    dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    const s = 0.2 + Math.random() * 1.8;
    dummy.scale.set(s, s, s);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  scene.add(mesh);
}
// Asteroid belt built via deferred queue below

// ── KUIPER BELT ──
function buildKuiperBelt() {
  const count = 4000;
  const rockGeo = createRockGeometry();
  const rockMat = new THREE.MeshPhongMaterial({ color: 0x667788, shininess: 3 });
  const mesh = new THREE.InstancedMesh(rockGeo, rockMat, count);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < count; i++) {
    const r = 122 + Math.random() * 18;
    const a = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 4;
    dummy.position.set(Math.cos(a) * r, y, Math.sin(a) * r);
    dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    const s = 0.15 + Math.random() * 2.0;
    dummy.scale.set(s, s, s);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  scene.add(mesh);
}
// Kuiper belt built via deferred queue below

// ── SHOOTING STARS ──
const shootingStars = [];
function spawnShootingStar() {
  const count = 20; // trail length
  const positions = new Float32Array(count * 3);
  const alphas = new Float32Array(count);
  const start = new THREE.Vector3(
    (Math.random() - 0.5) * 500,
    50 + Math.random() * 200,
    (Math.random() - 0.5) * 500
  );
  const dir = new THREE.Vector3(
    (Math.random() - 0.5) * 2, -(0.3 + Math.random() * 0.7), (Math.random() - 0.5) * 2
  ).normalize();
  for (let i = 0; i < count; i++) {
    const p = start.clone().add(dir.clone().multiplyScalar(-i * 1.2));
    positions[i * 3] = p.x; positions[i * 3 + 1] = p.y; positions[i * 3 + 2] = p.z;
    alphas[i] = 1 - i / count;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.LineBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 0.8,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const line = new THREE.Line(geo, mat);
  line.userData = { dir, speed: 3 + Math.random() * 4, life: 0, maxLife: 40 + Math.random() * 40 };
  scene.add(line);
  shootingStars.push(line);
}
function updateShootingStars() {
  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const s = shootingStars[i];
    s.userData.life++;
    const posArr = s.geometry.attributes.position.array;
    for (let j = 0; j < posArr.length; j += 3) {
      posArr[j] += s.userData.dir.x * s.userData.speed;
      posArr[j + 1] += s.userData.dir.y * s.userData.speed;
      posArr[j + 2] += s.userData.dir.z * s.userData.speed;
    }
    s.geometry.attributes.position.needsUpdate = true;
    s.material.opacity = 0.8 * (1 - s.userData.life / s.userData.maxLife);
    if (s.userData.life >= s.userData.maxLife) {
      scene.remove(s); s.geometry.dispose(); s.material.dispose();
      shootingStars.splice(i, 1);
    }
  }
  if (Math.random() < 0.008) spawnShootingStar(); // ~every 2-3 seconds
}

// ── COMET ──
let cometGroup, cometTrail;
function buildComet() {
  cometGroup = new THREE.Group();
  // Comet nucleus
  const nucleusGeo = new THREE.SphereGeometry(0.3, 16, 16);
  const nucleusMat = new THREE.MeshBasicMaterial({ color: 0xccddff });
  cometGroup.add(new THREE.Mesh(nucleusGeo, nucleusMat));
  // Coma glow
  const coma = createGlowSprite(0x88bbff, 4);
  coma.material.opacity = 0.5;
  cometGroup.add(coma);
  // Tail particles
  const tailCount = 800;
  const tailPos = new Float32Array(tailCount * 3);
  const tailAlphas = new Float32Array(tailCount);
  for (let i = 0; i < tailCount; i++) {
    tailPos[i * 3] = -Math.random() * 15 - 1;
    tailPos[i * 3 + 1] = (Math.random() - 0.5) * 2 * (1 + Math.abs(tailPos[i * 3]) * 0.15);
    tailPos[i * 3 + 2] = (Math.random() - 0.5) * 2 * (1 + Math.abs(tailPos[i * 3]) * 0.15);
    tailAlphas[i] = 1 - Math.abs(tailPos[i * 3]) / 16;
  }
  const tailGeo = new THREE.BufferGeometry();
  tailGeo.setAttribute('position', new THREE.BufferAttribute(tailPos, 3));
  const tailMat = new THREE.PointsMaterial({
    color: 0xaaddff, size: 0.25, transparent: true, opacity: 0.5,
    blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
  });
  cometTrail = new THREE.Points(tailGeo, tailMat);
  cometGroup.add(cometTrail);
  // Floating label
  const cometLabel = createTextSprite('\u2604 Halley\'s Comet', {
    fontSize: 30,
    color: '#aaddff',
    glowColor: '#88bbff',
    scale: 2.0,
  });
  cometLabel.position.y = 2;
  cometGroup.add(cometLabel);
  cometGroup.userData = { angle: 0, orbitRadius: 80, orbitSpeed: 0.002, inclination: 0.4 };
  scene.add(cometGroup);
}

// ═══════════════════════════════════════════════════════
//  INTERACTION
// ═══════════════════════════════════════════════════════
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let currentFocus = null;
let isCameraAnimating = false;
let cameraTarget = null;
let cameraOffset = null;
let cameraLerpT = 0;
let cameraStartPos = new THREE.Vector3();
let cameraStartTarget = new THREE.Vector3();
let panelOpen = false;

const tooltip = document.getElementById('tooltip');
const hint = document.getElementById('hint');
const panel = document.getElementById('planet-panel');

function getClickableMeshes() {
  const meshes = [];
  Object.values(planetObjects).forEach(p => {
    if (!p || !p.group) return;
    p.group.traverse(child => {
      if (child.isMesh) meshes.push(child);
    });
  });
  return meshes;
}

renderer.domElement.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  window._mouseParallaxX = mouse.x;
  window._mouseParallaxY = mouse.y;

  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(getClickableMeshes());
  if (hits.length > 0) {
    const name = hits[0].object.userData.name;
    if (name) {
      const esNames = { Sun: 'Sol', Mercury: 'Mercurio', Venus: 'Venus', Earth: 'Tierra', Mars: 'Marte', Jupiter: 'Júpiter', Saturn: 'Saturno', Uranus: 'Urano', Neptune: 'Neptuno', Moon: 'Luna' };
      tooltip.style.display = 'block';
      tooltip.style.left = (e.clientX + 14) + 'px';
      tooltip.style.top = (e.clientY - 14) + 'px';
      tooltip.textContent = esNames[name] || name;
      renderer.domElement.style.cursor = 'pointer';
    } else {
      tooltip.style.display = 'none';
      renderer.domElement.style.cursor = 'grab';
    }
  } else {
    tooltip.style.display = 'none';
    renderer.domElement.style.cursor = 'grab';
  }
});

let hintTimeout;
function hideHint() {
  hint.classList.add('hidden');
  clearTimeout(hintTimeout);
}
function scheduleHintShow() {
  clearTimeout(hintTimeout);
  hintTimeout = setTimeout(() => {
    if (!currentFocus && !panelOpen) hint.classList.remove('hidden');
  }, 3000);
}
renderer.domElement.addEventListener('mousedown', () => {
  renderer.domElement.style.cursor = 'grabbing';
  hideHint();
});
renderer.domElement.addEventListener('mouseup', () => {
  renderer.domElement.style.cursor = 'grab';
  scheduleHintShow();
});
controls.addEventListener('start', hideHint);
controls.addEventListener('end', scheduleHintShow);

renderer.domElement.addEventListener('click', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(getClickableMeshes());
  if (hits.length > 0) {
    let name = hits[0].object.userData.name;
    if (!name) {
      let obj = hits[0].object;
      while (obj) {
        if (obj.userData && obj.userData.planetName) { name = obj.userData.planetName; break; }
        obj = obj.parent;
      }
    }
    if (name) {
      if (name === 'Moon') {
        showPlanetPanel('Moon');
      } else {
        focusPlanet(name);
      }
    }
  }
});

// Double-click a planet to open modal

// Fly camera to surface-level view of a planet
window.surfaceZoom = function (name, hitPoint) {
  if (!planetObjects[name]) return;
  hint.classList.add('hidden');
  currentFocus = name;
  const pObj = planetObjects[name];
  const data = PLANET_DATA[name];
  const worldPos = new THREE.Vector3();
  if (name === 'Sun') worldPos.set(0, 0, 0);
  else pObj.group.getWorldPosition(worldPos);

  // Camera position: very close to surface, offset from hit point
  const surfaceDir = hitPoint.clone().sub(worldPos).normalize();
  const surfaceDist = data.radius * 1.3; // Just above surface
  const camPos = worldPos.clone().add(surfaceDir.clone().multiplyScalar(surfaceDist));

  cameraStartPos.copy(camera.position);
  cameraStartTarget.copy(controls.target);
  cameraTarget = worldPos.clone();
  cameraOffset = camPos;
  cameraLerpT = 0;
  isCameraAnimating = true;
  controls.minDistance = 3;
  showPlanetPanel(name);
};

window.focusPlanet = function (name) {
  if (!planetObjects[name]) return;
  hint.classList.add('hidden');
  currentFocus = name;
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`.nav-btn[data-planet="${name}"]`);
  if (activeBtn) activeBtn.classList.add('active');
  if (window.updateNavScale) window.updateNavScale();

  // Hide borders on all, show on non-focused
  Object.keys(planetObjects).forEach(key => {
    if (key === 'Sun' || key === 'Moon' || key.includes('_clouds')) return;
    const po = planetObjects[key];
    if (!po || !po.group) return;
    const isFocused = (key === name);
    po.group.traverse(child => {
      if (child.userData && child.userData.isBorderRing) {
        child.visible = !isFocused;
      }
    });
  });

  // Particle burst at planet position
  const pObj = planetObjects[name];
  const worldPos = new THREE.Vector3();
  if (name === 'Sun') worldPos.set(0, 0, 0);
  else pObj.group.getWorldPosition(worldPos);
  const pColor = parseInt(PLANET_DATA[name].cssColor.replace('#', ''), 16);
  spawnSelectionParticles(worldPos, pColor);

  // Animate camera

  const data = PLANET_DATA[name];
  const camDist = data.radius * 4 + 5;
  cameraStartPos.copy(camera.position);
  cameraStartTarget.copy(controls.target);
  cameraTarget = worldPos.clone();
  const offset = new THREE.Vector3(camDist, camDist * 0.35, camDist);
  cameraOffset = worldPos.clone().add(offset);
  cameraLerpT = 0;
  isCameraAnimating = true;

  // Set dynamic zoom limits for this planet
  controls.minDistance = 3;

  // Show panel
  showPlanetPanel(name);

  // Track achievement
  trackVisit(name);
};

window.resetView = function () {
  if (screensaverMode) toggleScreensaver();
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  currentFocus = null;

  // Show all borders again
  Object.keys(planetObjects).forEach(key => {
    if (key === 'Sun' || key === 'Moon' || key.includes('_clouds')) return;
    const po = planetObjects[key];
    if (!po || !po.group) return;
    po.group.traverse(child => {
      if (child.userData && child.userData.isBorderRing) {
        child.visible = true;
      }
    });
  });

  cameraStartPos.copy(camera.position);
  cameraStartTarget.copy(controls.target);
  cameraTarget = new THREE.Vector3(0, 0, 0);
  cameraOffset = new THREE.Vector3(0, 40, 120);
  cameraLerpT = 0;
  isCameraAnimating = true;
  controls.minDistance = 3; // Reset to default
  closePanel();
  hint.classList.remove('hidden');
};

function easeInOut(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

// ═══════════════════════════════════════════════════════
//  PLANET INFO PANEL
// ═══════════════════════════════════════════════════════
let closePanelTimeout = null;

function showPlanetPanel(name) {
  const d = PLANET_DATA[name];
  if (!d) return;

  panel.style.setProperty('--planet-color', d.cssColor);

  // Short description (first paragraph before the life section)
  const shortDesc = d.description.split('<br><br>')[0];

  // Wrap characters for animation
  function wrapChars(text, delay = 0.03) {
    return text.split('').map((c, i) =>
      c === ' ' ? ' ' : `<span class="panel-char" style="animation-delay:${i * delay}s">${c}</span>`
    ).join('');
  }

  // Build panel content with character wrapping restored
  const body = document.getElementById('panel-body');
  body.innerHTML = `
    <div class="panel-name">${wrapChars(d.name)}</div>
    <div class="panel-type">${wrapChars(d.type)}</div>
    <div class="panel-desc">${wrapChars(shortDesc, 0.008)}</div>
    <div class="panel-footer-btn" onclick="openPlanetModal()">
      Saber más
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_1460_2346)"><path d="M31.7261 15.9148C25.2964 15.9148 20.0781 10.5769 20.0781 3.99988" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10"></path><path d="M31.7261 15.9149C25.2964 15.9149 20.0781 21.2528 20.0781 27.8298" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10"></path><path d="M32 15.9147L0 15.9147" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10"></path></g><defs><clipPath id="clip0_1460_2346"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>
    </div>
  `;

  // Store current planet name for the modal
  panel.dataset.planet = name;

  // Cancel any pending close animation
  if (closePanelTimeout) {
    clearTimeout(closePanelTimeout);
    closePanelTimeout = null;
  }

  // Transition in — no display toggling needed, CSS handles opacity/filter/transform
  panel.classList.remove('closing');
  panel.offsetHeight; // force reflow so transition restarts cleanly
  panel.classList.add('open');
  panelOpen = true;
}

window.closePanel = function () {
  panelOpen = false;
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  currentFocus = null;

  // Freeze animated characters so parent blur/opacity transition is smooth
  document.querySelectorAll('.panel-char').forEach(el => {
    el.style.opacity = '1';
    el.style.filter = 'none';
    el.style.transform = 'none';
    el.style.animation = 'none';
  });

  // Remove .open — the CSS transition handles the blur/fade out automatically
  panel.classList.remove('open');

  if (closePanelTimeout) clearTimeout(closePanelTimeout);
  closePanelTimeout = setTimeout(() => {
    panel.classList.remove('closing');
    closePanelTimeout = null;
  }, 650);
};

// ── PLANET MODAL (full-screen details) ──
let currentPlanetData = null;

window.openPlanetModal = function () {
  const name = panel.dataset.planet;
  const d = PLANET_DATA[name];
  if (!d) return;
  currentPlanetData = d;

  const content = document.getElementById('modal-content');
  const chars = d.name.split('').map((c, i) =>
    c === ' ' ? ' ' : `<span class="modal-name-char" style="animation-delay:${i * 0.06}s">${c}</span>`
  ).join('');
  content.innerHTML = `
    <div class="modal-name" style="--planet-color:${d.cssColor}">${chars}</div>
    <div class="modal-type">${d.type}</div>
    <div class="modal-desc">${d.description}</div>

    <div class="section-title">Esencia física</div>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Amplitud</div>
        <div class="stat-value">${d.diameter}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Peso del ser (Masa)</div>
        <div class="stat-value" style="font-size:0.75rem">${d.mass}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Abrazo gravitatorio</div>
        <div class="stat-value">${d.gravity}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Distancia de la luz</div>
        <div class="stat-value" style="font-size:0.72rem">${d.distanceFromSun}</div>
      </div>
    </div>

    <div class="section-title">El latido del tiempo</div>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Alba y Ocaso (Día)</div>
        <div class="stat-value" style="font-size:0.75rem">${d.dayLength}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Ciclo eterno (Año)</div>
        <div class="stat-value" style="font-size:0.75rem">${d.yearLength}</div>
      </div>
    </div>

    <div class="section-title">Clima del alma</div>
    <div class="temp-gauge">
      <div class="temp-value" style="color:${d.cssColor}">${d.avgTemp}</div>
      <div class="temp-label">CALIDEZ MEDIA SUPERFICIAL</div>
      <div class="temp-range">
        <div class="temp-range-item">
          <div class="temp-range-label">Mín</div>
          <div class="temp-range-val" style="color:#5DADE2">${d.minTemp}</div>
        </div>
        <div class="temp-range-item">
          <div class="temp-range-label">Máx</div>
          <div class="temp-range-val" style="color:#E74C3C">${d.maxTemp}</div>
        </div>
      </div>
    </div>

    ${d.name !== 'Sol' ? `
    <div class="orbital-speed">
      <div class="speed-icon">🚀</div>
      <div class="speed-text">
        <div class="speed-label">RITMO DE LA DANZA (ÓRBITA)</div>
        <div class="speed-val">${d.orbitalVelocity}</div>
      </div>
    </div>` : ''}

    <div class="section-title">Hijos celestiales</div>
    <div class="moon-info">
      <div>
        <div class="moon-count">${d.moons}</div>
      </div>
      <div>
        <div class="moon-label">Compañeros descubiertos</div>
        <div class="moon-names">${d.moonNames || 'Silencio absoluto'}</div>
      </div>
    </div>

    ${d.atmosphere ? `
    <div class="section-title">Aliento vital (Atmósfera)</div>
    <div class="atmo-list">
      ${d.atmosphere.map(a => `
        <div class="atmo-item">
          <div class="atmo-header">
            <span class="atmo-name">${a.name}</span>
            <span class="atmo-pct">${a.pct}%</span>
          </div>
          <div class="atmo-bar"><div class="atmo-fill" data-pct="${a.pct}"></div></div>
        </div>
      `).join('')}
    </div>` : ''}

    <div class="section-title">Datos fascinantes</div>
    <div class="fact-list">
      ${d.facts.map(f => `
        <div class="fact-item">
          <span class="fact-icon">${f.icon}</span>
          <span>${f.text}</span>
        </div>
      `).join('')}
    </div>

    ${d.missions ? `
    <div class="section-title">Misiones espaciales</div>
    <div class="mission-list">
      ${d.missions.map(m => `
        <div class="mission-item">
          <span class="mission-year">${m.year}</span>
          <div>
            <div class="mission-name">${m.name}</div>
            <div class="mission-agency">${m.agency}</div>
          </div>
        </div>
      `).join('')}
    </div>` : ''}
    <div style="height:2rem"></div>
  `;

  const modal = document.getElementById('planet-modal');

  modal.classList.remove('active');
  modal.offsetHeight;
  modal.classList.add('active');

  setTimeout(() => {
    document.querySelectorAll('#modal-content .atmo-fill').forEach(el => {
      el.style.width = el.dataset.pct + '%';
    });
  }, 400);
};

window.closePlanetModal = function () {
  document.getElementById('planet-modal').classList.remove('active');
};

function initPlanetModalEffects() {
  const pm = document.getElementById('planet-modal');
  const container = document.getElementById('modal-stars');
  if (container && container.children.length === 0) {
    for (let i = 0; i < 120; i++) {
      const star = document.createElement('div');
      star.className = 'welcome-star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.width = star.style.height = (Math.random() * 2.5 + 0.5) + 'px';
      star.style.animationDelay = (Math.random() * 4) + 's';
      star.style.animationDuration = (Math.random() * 3 + 2) + 's';
      container.appendChild(star);
    }
  }

  const spotlight = pm.querySelector('.welcome-spotlight');
  const bgImage = document.getElementById('modal-bg-image');
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  pm.addEventListener('mousemove', (e) => {
    const rect = pm.getBoundingClientRect();
    targetX = (e.clientX - rect.left) / rect.width - 0.5;
    targetY = (e.clientY - rect.top) / rect.height - 0.5;
  });

  const animate = () => {
    if (pm.classList.contains('active')) {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      const px = (currentX + 0.5) * 100;
      const py = (currentY + 0.5) * 100;

      if (bgImage) {
        bgImage.style.transform = `translate3d(${currentX * -15}px, ${currentY * -15}px, 0)`;
      }

      if (spotlight) {
        spotlight.style.background = `radial-gradient(600px circle at ${px}% ${py}%, rgba(79, 195, 247, 0.08), transparent 60%)`;
      }

      const content = document.getElementById('modal-content');
      if (content) {
        content.style.transform = `translate3d(${currentX * -20}px, ${currentY * -20}px, 0) rotateX(${currentY * -2}deg) rotateY(${currentX * 2}deg)`;
      }

      if (container) {
        container.style.transform = `translate3d(${currentX * -40}px, ${currentY * -40}px, 0)`;
      }
    }
    requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
}
// Init globally when script runs
setTimeout(initPlanetModalEffects, 1000);

function hexToRgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

function buildPlanetGradient(name, d) {
  const c = d.cssColor;
  if (name === 'Earth') return 'radial-gradient(circle at 35% 35%, #5DADE2, #1a6ba0, #2E86C1, #0a3055)';
  if (name === 'Jupiter') return 'radial-gradient(circle at 40% 40%, #E8C060, #C88B3A, #8B4513)';
  if (name === 'Saturn') return 'radial-gradient(circle at 40% 40%, #F0D880, #E4C07A, #B8803A)';
  if (name === 'Mars') return 'radial-gradient(circle at 35% 35%, #E74C3C, #C0392B, #7B241C)';
  if (name === 'Venus') return 'radial-gradient(circle at 35% 35%, #F0C040, #E8B96F, #A0522D)';
  if (name === 'Sun') return 'radial-gradient(circle at 35% 35%, #FFFDE7, #FFD600, #FF8F00, #E64A19)';
  if (name === 'Uranus') return 'radial-gradient(circle at 40% 40%, #A0F0E8, #7DE8E8, #5DADE2)';
  if (name === 'Neptune') return 'radial-gradient(circle at 40% 40%, #5D6CC0, #3455DB, #1a1880)';
  return `radial-gradient(circle at 40% 40%, ${c}, #111)`;
}

function drawHeroBg(d) {
  const canvas = document.getElementById('panel-hero-canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 480, 220);
  const grd = ctx.createRadialGradient(240, 110, 20, 240, 110, 200);
  const r = parseInt(d.cssColor.slice(1, 3), 16), g2 = parseInt(d.cssColor.slice(3, 5), 16), b = parseInt(d.cssColor.slice(5, 7), 16);
  grd.addColorStop(0, `rgba(${r},${g2},${b},0.15)`);
  grd.addColorStop(1, `rgba(${r},${g2},${b},0)`);
  ctx.fillStyle = grd; ctx.fillRect(0, 0, 480, 220);
  for (let i = 0; i < 80; i++) {
    const x = Math.random() * 480, y = Math.random() * 220, s = Math.random() * 2;
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.6})`;
    ctx.beginPath(); ctx.arc(x, y, s, 0, Math.PI * 2); ctx.fill();
  }
}

// ═══════════════════════════════════════════════════════
//  ANIMATION LOOP
// ═══════════════════════════════════════════════════════

// Selection particle burst
let selectionParticles = null;
function spawnSelectionParticles(position, color) {
  if (selectionParticles) { scene.remove(selectionParticles); selectionParticles.geometry.dispose(); selectionParticles.material.dispose(); }

  // Circular particle texture
  const pCanvas = document.createElement('canvas');
  pCanvas.width = pCanvas.height = 64;
  const pCtx = pCanvas.getContext('2d');
  const pGrad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
  pGrad.addColorStop(0, 'rgba(255,255,255,1)');
  pGrad.addColorStop(0.2, 'rgba(255,255,255,0.8)');
  pGrad.addColorStop(0.5, 'rgba(255,255,255,0.3)');
  pGrad.addColorStop(1, 'rgba(255,255,255,0)');
  pCtx.fillStyle = pGrad;
  pCtx.fillRect(0, 0, 64, 64);
  const pTex = new THREE.CanvasTexture(pCanvas);

  const count = 60;
  const pos = new Float32Array(count * 3);
  const vel = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = position.x; pos[i * 3 + 1] = position.y; pos[i * 3 + 2] = position.z;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const speed = 0.2 + Math.random() * 0.6;
    vel[i * 3] = Math.sin(phi) * Math.cos(theta) * speed;
    vel[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * speed;
    vel[i * 3 + 2] = Math.cos(phi) * speed;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    color: color || 0x4fc3f7, map: pTex, size: 0.5, transparent: true, opacity: 1.0,
    blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
  });
  selectionParticles = new THREE.Points(geo, mat);
  selectionParticles.userData = { vel, life: 0, maxLife: 50 };
  scene.add(selectionParticles);
}
function updateSelectionParticles() {
  if (!selectionParticles) return;
  const sp = selectionParticles;
  sp.userData.life++;
  const t = sp.userData.life / sp.userData.maxLife;
  const posArr = sp.geometry.attributes.position.array;
  const vel = sp.userData.vel;
  for (let i = 0; i < posArr.length; i += 3) {
    posArr[i] += vel[i]; posArr[i + 1] += vel[i + 1]; posArr[i + 2] += vel[i + 2];
    vel[i] *= 0.96; vel[i + 1] *= 0.96; vel[i + 2] *= 0.96;
  }
  sp.geometry.attributes.position.needsUpdate = true;
  sp.material.opacity = 1 - t;
  sp.material.size = 0.5 * (1 - t * 0.4);
  if (sp.userData.life >= sp.userData.maxLife) {
    scene.remove(sp); sp.geometry.dispose(); sp.material.dispose();
    selectionParticles = null;
  }
}

function animate() {
  requestAnimationFrame(animate);
  const speedMul = parseFloat(document.getElementById('speed-slider').value) || 1;
  animationTime += 0.005 * speedMul;

  // Twinkling stars
  if (starUniforms) starUniforms.uTime.value = animationTime;

  // Background galaxy follows camera
  if (window._bgMesh) window._bgMesh.position.copy(camera.position);

  // Mouse parallax effect on camera
  if (!isCameraAnimating && !shipMode && window._mouseParallaxX !== undefined) {
    const px = (window._mouseParallaxX || 0) * 3;
    const py = (window._mouseParallaxY || 0) * 2;
    camera.position.x += (px - camera.position.x * 0.001) * 0.02;
    camera.position.y += (py - camera.position.y * 0.001) * 0.02;
  }

  // Sun pulse
  if (planetObjects.Sun && planetObjects.Sun.group.userData._pulse) {
    planetObjects.Sun.group.userData._pulse(0.016 * speedMul);
  }

  // Update luminous orbit lines
  updateOrbitLines(animationTime);

  // Update nebula dust particles
  nebulaParticles.forEach(p => {
    if (p.material.uniforms && p.material.uniforms.uTime) {
      p.material.uniforms.uTime.value = animationTime;
    }
  });

  // Shooting stars
  updateShootingStars();

  // Comet orbit
  if (cometGroup) {
    const cd = cometGroup.userData;
    cd.angle += cd.orbitSpeed * speedMul;
    cometGroup.position.x = Math.cos(cd.angle) * cd.orbitRadius;
    cometGroup.position.z = Math.sin(cd.angle) * cd.orbitRadius;
    cometGroup.position.y = Math.sin(cd.angle * 0.7) * cd.orbitRadius * cd.inclination;
    // Point tail away from sun
    cometGroup.lookAt(0, 0, 0);
    cometGroup.rotateY(Math.PI);
  }

  // Orbit planets
  ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'].forEach(key => {
    const po = planetObjects[key];
    if (!po) return;
    const d = po.data;
    po.angle = (po.angle || 0) + d.orbitalSpeed * speedMul;
    po.group.position.x = Math.cos(po.angle) * d.distance;
    po.group.position.z = Math.sin(po.angle) * d.distance;

    // Update atmosphere shader sun direction
    po.group.children.forEach(child => {
      if (child.isMesh && child.material.type === 'ShaderMaterial' && child.material.uniforms && child.material.uniforms.sunDir) {
        const sunDir = new THREE.Vector3(-po.group.position.x, -po.group.position.y, -po.group.position.z).normalize();
        child.material.uniforms.sunDir.value.copy(sunDir);
      }
    });

    // Rotate planet
    if (po.mesh) po.mesh.rotation.y += d.rotationSpeed * speedMul;

    // Rotate cloud layer (slightly different speed for visual effect)
    if (key === 'Earth' && planetObjects['Earth_clouds']) {
      planetObjects['Earth_clouds'].rotation.y += d.rotationSpeed * 0.7 * speedMul;
    }

    // Moons
    po.group.children.forEach(child => {
      if (child.userData && child.userData.isMoon) {
        if (key === 'Earth') {
          const t = animationTime * 1.2;
          child.position.x = Math.cos(t) * 1.8;
          child.position.z = Math.sin(t) * 1.8;
          child.position.y = Math.sin(t * 0.5) * 0.3;
        } else if (key === 'Jupiter' && child.userData.dist) {
          child.userData.angle = (child.userData.angle || 0) + child.userData.speed;
          child.position.x = Math.cos(child.userData.angle) * child.userData.dist;
          child.position.z = Math.sin(child.userData.angle) * child.userData.dist;
        }
      }
    });
  });

  // Sun pulse
  const sunPO = planetObjects['Sun'];
  if (sunPO) {
    const pulse = 1 + Math.sin(animationTime * 2) * 0.01;
    sunPO.mesh.scale.set(pulse, pulse, pulse);
  }

  // Camera animation
  if (isCameraAnimating && cameraTarget && cameraOffset) {
    cameraLerpT += 0.022;
    if (cameraLerpT >= 1) { cameraLerpT = 1; isCameraAnimating = false; }
    const t = easeInOut(cameraLerpT);

    // If following a planet, update target to planet's current world position
    let target = cameraTarget.clone();
    if (currentFocus && currentFocus !== 'Sun' && planetObjects[currentFocus]) {
      planetObjects[currentFocus].group.getWorldPosition(target);
    }

    const desiredCamPos = target.clone().add(
      cameraOffset.clone().sub(cameraTarget).normalize().multiplyScalar(
        cameraOffset.distanceTo(cameraTarget)
      )
    );

    camera.position.lerpVectors(cameraStartPos, desiredCamPos, t);
    controls.target.lerpVectors(cameraStartTarget, target, t);
    controls.update();
  } else if (currentFocus && currentFocus !== 'Sun' && planetObjects[currentFocus] && !isCameraAnimating) {
    // Follow planet smoothly
    const worldPos = new THREE.Vector3();
    planetObjects[currentFocus].group.getWorldPosition(worldPos);
    const camOffset = camera.position.clone().sub(controls.target);
    controls.target.lerp(worldPos, 0.08);
    camera.position.copy(controls.target.clone().add(camOffset));
    controls.update();
  } else {
    controls.update();
  }

  // ── DYNAMIC LOD: adjust surface detail based on zoom distance ──

  ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'].forEach(key => {
    const po = planetObjects[key];
    if (!po || !po.mesh || !po.mesh.material) return;
    const mat = po.mesh.material;
    const worldPos = new THREE.Vector3();
    po.group.getWorldPosition(worldPos);
    const dist = camera.position.distanceTo(worldPos);
    const radius = po.data.radius;
    const zoomRatio = dist / radius; // 1.0 = at surface, 10+ = far away

    if (po.isTerrestrial && mat.normalScale) {
      // Increase normal/displacement intensity when zoomed close
      let ns, ds;
      if (zoomRatio < 1.5) {
        ns = 4.0; ds = 2.5;
      } else if (zoomRatio < 3) {
        ns = 3.0; ds = 1.8;
      } else if (zoomRatio < 6) {
        ns = 2.0; ds = 1.2;
      } else if (zoomRatio < 12) {
        ns = 1.5; ds = 1.0;
      } else {
        ns = po.baseNormalScale; ds = 1.0;
      }
      mat.normalScale.set(ns, ns);
      if (mat.displacementScale !== undefined) {
        mat.displacementScale = po.baseDisplacementScale * ds;
        mat.displacementBias = -mat.displacementScale * 0.5;
      }
      // Increase shininess for close-up detail
      mat.shininess = zoomRatio < 3 ? 50 : 35;
    }

    // Dynamic minDistance — prevent camera from going inside any planet
    if (key === currentFocus) {
      controls.minDistance = 3;
    }

    // Helper to animate hint text changes
    window.changeHintText = function(newText) {
      if (!hint || hint.dataset.currentText === newText) return;
      hint.dataset.currentText = newText;
      
      if (hint.changeTimeout) clearTimeout(hint.changeTimeout);
      
      hint.style.opacity = '0';
      hint.style.filter = 'blur(6px)';
      hint.style.transform = 'translateX(-50%) scale(0.9)';
      hint.changeTimeout = setTimeout(() => {
        hint.textContent = newText;
        hint.style.color = 'rgba(255, 255, 255, 0.6)'; // Always use default color
        hint.style.opacity = '1';
        hint.style.filter = 'blur(0px)';
        hint.style.transform = 'translateX(-50%) scale(1)';
      }, 500); // Wait for CSS opacity transition
    };

    // Update zoom indicator in the hint pill
    if (key === currentFocus && hint) {
      let label = '';
      if (zoomRatio < 1.8) {
        label = '✦ Vista superficial';
      } else if (zoomRatio < 4) {
        label = '✦ Órbita baja';
      } else if (zoomRatio < 10) {
        label = '✦ Vista orbital';
      } else if (zoomRatio < 25) {
        label = '✦ Aproximación';
      } else {
        label = '✦ Arrastra para navegar · Escribe MURPH para un eco del pasado';
      }

      window.changeHintText(label);
    }

    // Fade labels based on distance (hide when very close)
    po.group.children.forEach(child => {
      if (child.userData && child.userData.isLabel) {
        if (zoomRatio < 3) child.material.opacity = 0;
        else if (zoomRatio < 6) child.material.opacity = (zoomRatio - 3) / 3;
        else child.material.opacity = 1;
      }
    });
  });

  // Fade Sun label too
  const sunPO2 = planetObjects['Sun'];
  if (sunPO2 && sunPO2.group) {
    const sunDist = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));
    const sunZR = sunDist / 5;
    sunPO2.group.children.forEach(child => {
      if (child.userData && child.userData.isLabel) {
        if (sunZR < 3) child.material.opacity = 0;
        else if (sunZR < 6) child.material.opacity = (sunZR - 3) / 3;
        else child.material.opacity = 1;
      }
    });
  }

  // Update selection particles
  updateSelectionParticles();

  // Spaceship mode
  updateShipMode();

  // Minimap
  updateMinimap();

  // Screensaver slow orbit rotation
  if (screensaverMode && !isCameraAnimating && currentFocus) {
    const orbitAngle = animationTime * 0.3;
    const po = planetObjects[currentFocus];
    if (po && po.group) {
      const wp = new THREE.Vector3();
      if (currentFocus === 'Sun') wp.set(0, 0, 0);
      else po.group.getWorldPosition(wp);
      const data = PLANET_DATA[currentFocus];
      const dist = data.radius * 5 + 8;
      const camX = wp.x + Math.cos(orbitAngle) * dist;
      const camZ = wp.z + Math.sin(orbitAngle) * dist;
      const camY = wp.y + dist * 0.3 + Math.sin(orbitAngle * 0.5) * dist * 0.2;
      camera.position.lerp(new THREE.Vector3(camX, camY, camZ), 0.02);
      controls.target.lerp(wp, 0.02);
      controls.update();
    }
  }

  // Reset zoom indicator when no focus
  if (!currentFocus && hint && typeof window.changeHintText === 'function') {
    window.changeHintText('✦ Arrastra para navegar · Escribe MURPH para un eco del pasado');
  }

  composer.render();
}

// ═══════════════════════════════════════════════════════
//  RESIZE
// ═══════════════════════════════════════════════════════
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
});

// ═══════════════════════════════════════════════════════
//  KEYBOARD — arrows cycle planets, numbers jump, M = music
// ═══════════════════════════════════════════════════════
const planetOrder = ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

window.navPlanet = function (dir) {
  const idx = currentFocus ? planetOrder.indexOf(currentFocus) : -1;
  let nIdx;
  if (dir > 0) nIdx = idx < planetOrder.length - 1 ? idx + 1 : 0;
  else nIdx = idx > 0 ? idx - 1 : planetOrder.length - 1;
  focusPlanet(planetOrder[nIdx]);
};

window.addEventListener('keydown', e => {
  if (shipMode) return; // Ship mode has its own keydown handler
  if (e.key === 'Escape') {
    if (screensaverMode) { toggleScreensaver(); return; }
    if (panelOpen) closePanel();
    else resetView();
  }
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    const idx = currentFocus ? planetOrder.indexOf(currentFocus) : -1;
    let nIdx;
    if (e.key === 'ArrowRight') nIdx = idx < planetOrder.length - 1 ? idx + 1 : 0;
    else nIdx = idx > 0 ? idx - 1 : planetOrder.length - 1;
    focusPlanet(planetOrder[nIdx]);
  }
  const num = parseInt(e.key);
  if (num >= 1 && num <= 9) focusPlanet(planetOrder[num - 1]);
  if (e.key === 'm' || e.key === 'M') toggleMusic();
  if (e.key === 'p' || e.key === 'P') takePhoto();
  if (e.key === 'f' || e.key === 'F') toggleShipMode();
  if (e.key === 'g' || e.key === 'G') launchGame();
});

// ═══════════════════════════════════════════════════════
//  SPEED CONTROL
// ═══════════════════════════════════════════════════════
const speedSlider = document.getElementById('speed-slider');
const speedVal = document.getElementById('speed-val');
if (speedSlider) {
  speedSlider.addEventListener('input', () => {
    const v = parseFloat(speedSlider.value);
    speedVal.textContent = v === 0 ? '⏸' : v.toFixed(1) + '×';
  });
}

// ═══════════════════════════════════════════════════════
//  ORBIT LINE TOGGLE
// ═══════════════════════════════════════════════════════
let orbitsVisible = true;
window.toggleOrbits = function () {
  orbitsVisible = !orbitsVisible;
  orbitLines.forEach(g => {
    g.visible = orbitsVisible;
    g.traverse(child => { if (child.isLine || child.isMesh) child.visible = orbitsVisible; });
  });
  const btn = document.getElementById('orbit-btn');
  if (btn) btn.classList.toggle('active', orbitsVisible);
};

window.toggleMinimap = function () {
  const el = document.getElementById('minimap');
  const btn = document.getElementById('sidebar-map-btn');
  if (!el) return;
  const isHidden = el.style.display === 'none';
  el.style.display = isHidden ? '' : 'none';
  if (btn) btn.classList.toggle('active', isHidden);
};

// ═══════════════════════════════════════════════════════
//  SPACESHIP MODE — WASD+MOUSE first-person flight
// ═══════════════════════════════════════════════════════
let shipMode = false;
const shipVelocity = new THREE.Vector3();
const shipKeys = { w: false, a: false, s: false, d: false, shift: false, space: false, q: false, e: false };
let shipSpeed = 0;
const SHIP_MAX_SPEED = 3;
const SHIP_ACCEL = 0.04;
const SHIP_DRAG = 0.97;
let engineSoundNode = null, engineGainNode = null;

window.toggleShipMode = function () {
  shipMode = !shipMode;
  const hud = document.getElementById('ship-hud');
  const btn = document.getElementById('ship-btn');
  if (shipMode) {
    hud.classList.add('active');
    btn.classList.add('active');
    controls.enabled = false;
    document.body.style.cursor = 'none';
    // Engine sound
    if (audioCtx) {
      engineSoundNode = audioCtx.createOscillator();
      engineSoundNode.type = 'sawtooth'; engineSoundNode.frequency.value = 45;
      engineGainNode = audioCtx.createGain(); engineGainNode.gain.value = 0;
      const engFilter = audioCtx.createBiquadFilter();
      engFilter.type = 'lowpass'; engFilter.frequency.value = 200;
      engineSoundNode.connect(engFilter); engFilter.connect(engineGainNode);
      engineGainNode.connect(audioCtx.destination);
      engineSoundNode.start();
    }
    closePanel();
    // Reset screensaver if active
    if (screensaverMode) toggleScreensaver();
  } else {
    hud.classList.remove('active');
    btn.classList.remove('active');
    controls.enabled = true;
    document.body.style.cursor = '';
    shipVelocity.set(0, 0, 0); shipSpeed = 0;
    if (engineSoundNode) { engineSoundNode.stop(); engineSoundNode = null; }
    if (engineGainNode) { engineGainNode = null; }
  }
};

function updateShipMode() {
  if (!shipMode) return;
  const dir = new THREE.Vector3();
  camera.getWorldDirection(dir);
  const right = new THREE.Vector3().crossVectors(dir, camera.up).normalize();
  const up = camera.up.clone();

  let thrust = 0;
  if (shipKeys.w) { shipVelocity.addScaledVector(dir, SHIP_ACCEL); thrust = 1; }
  if (shipKeys.s) { shipVelocity.addScaledVector(dir, -SHIP_ACCEL * 0.6); thrust = 0.3; }
  if (shipKeys.a) shipVelocity.addScaledVector(right, -SHIP_ACCEL * 0.7);
  if (shipKeys.d) shipVelocity.addScaledVector(right, SHIP_ACCEL * 0.7);
  if (shipKeys.space) shipVelocity.addScaledVector(up, SHIP_ACCEL * 0.5);
  if (shipKeys.shift) shipVelocity.addScaledVector(up, -SHIP_ACCEL * 0.5);

  // Speed boost with Q
  if (shipKeys.q) shipVelocity.multiplyScalar(1.06);

  shipVelocity.multiplyScalar(SHIP_DRAG);
  shipSpeed = shipVelocity.length();
  if (shipSpeed > SHIP_MAX_SPEED) {
    shipVelocity.normalize().multiplyScalar(SHIP_MAX_SPEED);
    shipSpeed = SHIP_MAX_SPEED;
  }

  camera.position.add(shipVelocity);

  // HUD updates
  const hudSpeed = document.getElementById('hud-speed');
  const hudThrottle = document.getElementById('hud-throttle');
  const hudCompass = document.getElementById('hud-compass');
  const hudProx = document.getElementById('hud-proximity');
  if (hudSpeed) hudSpeed.textContent = (shipSpeed * 10).toFixed(2) + ' AU/s';
  if (hudThrottle) hudThrottle.style.width = ((shipSpeed / SHIP_MAX_SPEED) * 100) + '%';

  // Compass heading
  const heading = Math.round(((Math.atan2(dir.x, dir.z) * 180 / Math.PI) + 360) % 360);
  if (hudCompass) hudCompass.textContent = 'HEADING ' + String(heading).padStart(3, '0') + '°';

  // Proximity display — find nearest planets
  if (hudProx) {
    let proxText = '';
    const camPos = camera.position;
    const dists = [];
    Object.keys(planetObjects).forEach(name => {
      if (name.includes('_') || name === 'Moon') return;
      const po = planetObjects[name];
      if (!po || !po.group) return;
      const wp = new THREE.Vector3();
      po.group.getWorldPosition(wp);
      const d = camPos.distanceTo(wp);
      dists.push({ name, dist: d });
    });
    dists.sort((a, b) => a.dist - b.dist);
    dists.slice(0, 3).forEach(p => {
      proxText += `${p.name} — ${p.dist.toFixed(1)} AU<br>`;
    });
    hudProx.innerHTML = proxText;
  }

  // Engine sound pitch/volume
  if (engineSoundNode && engineGainNode) {
    engineGainNode.gain.value = Math.min(shipSpeed * 0.03, 0.05);
    engineSoundNode.frequency.value = 45 + shipSpeed * 30;
  }
}

// Mouse look for ship mode
let shipMouseX = 0, shipMouseY = 0;
document.addEventListener('mousemove', e => {
  if (!shipMode) return;
  const dx = e.movementX || 0;
  const dy = e.movementY || 0;
  // Yaw
  camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), -dx * 0.002);
  // Pitch
  const right = new THREE.Vector3();
  camera.getWorldDirection(new THREE.Vector3());
  right.crossVectors(camera.getWorldDirection(new THREE.Vector3()), camera.up).normalize();
  camera.rotateOnAxis(new THREE.Vector3(1, 0, 0), -dy * 0.002);
});

// Ship mode keydown/keyup
document.addEventListener('keydown', e => {
  const k = e.key.toLowerCase();
  if (k === 'w') shipKeys.w = true;
  if (k === 'a') shipKeys.a = true;
  if (k === 's') shipKeys.s = true;
  if (k === 'd') shipKeys.d = true;
  if (k === 'q') shipKeys.q = true;
  if (k === 'e') shipKeys.e = true;
  if (k === ' ') { shipKeys.space = true; e.preventDefault(); }
  if (k === 'shift') shipKeys.shift = true;
  // Exit ship mode with Escape
  if (k === 'escape' && shipMode) { toggleShipMode(); e.stopPropagation(); }
});
document.addEventListener('keyup', e => {
  const k = e.key.toLowerCase();
  if (k === 'w') shipKeys.w = false;
  if (k === 'a') shipKeys.a = false;
  if (k === 's') shipKeys.s = false;
  if (k === 'd') shipKeys.d = false;
  if (k === 'q') shipKeys.q = false;
  if (k === 'e') shipKeys.e = false;
  if (k === ' ') shipKeys.space = false;
  if (k === 'shift') shipKeys.shift = false;
});

// ═══════════════════════════════════════════════════════
//  MOBILE TOUCH CONTROLS FOR SPACESHIP MODE
// ═══════════════════════════════════════════════════════
(function initTouchControls() {
  const isTouchDevice = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  if (!isTouchDevice) return;

  const touchUI = document.getElementById('touch-ship-controls');
  const moveStick = document.getElementById('touch-move-stick');
  const moveKnob = document.getElementById('touch-move-knob');
  const lookStick = document.getElementById('touch-look-stick');
  const lookKnob = document.getElementById('touch-look-knob');
  const boostBtn = document.getElementById('touch-boost-btn');
  const upBtn = document.getElementById('touch-up-btn');
  const downBtn = document.getElementById('touch-down-btn');

  if (!moveStick || !lookStick) return;

  // Patch toggleShipMode to show/hide touch controls
  const origToggleShip = window.toggleShipMode;
  window.toggleShipMode = function () {
    origToggleShip();
    if (shipMode) {
      touchUI.classList.add('active');
      document.body.style.cursor = '';
    } else {
      touchUI.classList.remove('active');
    }
  };

  function getStickInput(stick, knob, touchId, e) {
    const rect = stick.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const radius = rect.width / 2;
    let touch = null;
    for (let t of e.touches) {
      if (t.identifier === touchId) { touch = t; break; }
    }
    if (!touch) return { dx: 0, dy: 0 };
    let dx = (touch.clientX - cx) / radius;
    let dy = (touch.clientY - cy) / radius;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > 1) { dx /= dist; dy /= dist; }
    // Move knob visually
    knob.style.left = (50 + dx * 35) + '%';
    knob.style.top = (50 + dy * 35) + '%';
    knob.classList.add('active');
    return { dx, dy };
  }

  function resetKnob(knob) {
    knob.style.left = '50%';
    knob.style.top = '50%';
    knob.classList.remove('active');
  }

  // Movement stick
  let moveTouchId = null;
  moveStick.addEventListener('touchstart', e => {
    e.preventDefault();
    moveTouchId = e.changedTouches[0].identifier;
  }, { passive: false });
  moveStick.addEventListener('touchmove', e => {
    e.preventDefault();
    if (moveTouchId === null) return;
    const { dx, dy } = getStickInput(moveStick, moveKnob, moveTouchId, e);
    shipKeys.w = dy < -0.2;
    shipKeys.s = dy > 0.2;
    shipKeys.a = dx < -0.2;
    shipKeys.d = dx > 0.2;
  }, { passive: false });
  moveStick.addEventListener('touchend', e => {
    for (let t of e.changedTouches) {
      if (t.identifier === moveTouchId) {
        moveTouchId = null;
        shipKeys.w = shipKeys.s = shipKeys.a = shipKeys.d = false;
        resetKnob(moveKnob);
      }
    }
  });
  moveStick.addEventListener('touchcancel', () => {
    moveTouchId = null;
    shipKeys.w = shipKeys.s = shipKeys.a = shipKeys.d = false;
    resetKnob(moveKnob);
  });

  // Look stick
  let lookTouchId = null;
  lookStick.addEventListener('touchstart', e => {
    e.preventDefault();
    lookTouchId = e.changedTouches[0].identifier;
  }, { passive: false });
  lookStick.addEventListener('touchmove', e => {
    e.preventDefault();
    if (lookTouchId === null || !shipMode) return;
    const { dx, dy } = getStickInput(lookStick, lookKnob, lookTouchId, e);
    // Apply yaw and pitch
    camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), -dx * 0.03);
    const right = new THREE.Vector3();
    right.crossVectors(camera.getWorldDirection(new THREE.Vector3()), camera.up).normalize();
    camera.rotateOnAxis(new THREE.Vector3(1, 0, 0), -dy * 0.03);
  }, { passive: false });
  lookStick.addEventListener('touchend', e => {
    for (let t of e.changedTouches) {
      if (t.identifier === lookTouchId) {
        lookTouchId = null;
        resetKnob(lookKnob);
      }
    }
  });
  lookStick.addEventListener('touchcancel', () => {
    lookTouchId = null;
    resetKnob(lookKnob);
  });

  // Action buttons
  boostBtn.addEventListener('touchstart', e => { e.preventDefault(); shipKeys.q = true; boostBtn.classList.add('pressed'); }, { passive: false });
  boostBtn.addEventListener('touchend', () => { shipKeys.q = false; boostBtn.classList.remove('pressed'); });
  upBtn.addEventListener('touchstart', e => { e.preventDefault(); shipKeys.space = true; upBtn.classList.add('pressed'); }, { passive: false });
  upBtn.addEventListener('touchend', () => { shipKeys.space = false; upBtn.classList.remove('pressed'); });
  downBtn.addEventListener('touchstart', e => { e.preventDefault(); shipKeys.shift = true; downBtn.classList.add('pressed'); }, { passive: false });
  downBtn.addEventListener('touchend', () => { shipKeys.shift = false; downBtn.classList.remove('pressed'); });
})();

// ═══════════════════════════════════════════════════════
//  WORMHOLE TRAVEL EFFECT — CINEMATIC SCI-FI ENGINE
// ═══════════════════════════════════════════════════════
let wormholeActive = false;

// Lightning bolt generator
function drawLightningBolt(ctx, x1, y1, x2, y2, opts) {
  const { width = 2, glow = 8, color = 'rgba(140,200,255,0.9)', branches = 3, depth = 0, maxDepth = 3 } = opts || {};
  const segments = 8 + Math.floor(Math.random() * 6);
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const jitter = len * 0.15;
  const pts = [{ x: x1, y: y1 }];
  for (let i = 1; i < segments; i++) {
    const t = i / segments;
    pts.push({ x: x1 + dx * t + (Math.random() - 0.5) * jitter, y: y1 + dy * t + (Math.random() - 0.5) * jitter });
  }
  pts.push({ x: x2, y: y2 });
  // glow
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = glow;
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
  // bright core
  ctx.shadowBlur = 0;
  ctx.strokeStyle = 'rgba(255,255,255,0.8)';
  ctx.lineWidth = width * 0.4;
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
  ctx.stroke();
  ctx.restore();
  // branches
  if (depth < maxDepth) {
    for (let b = 0; b < branches; b++) {
      if (Math.random() > 0.4) continue;
      const idx = Math.floor(Math.random() * (pts.length - 2)) + 1;
      const bAngle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.5;
      const bLen = len * (0.15 + Math.random() * 0.2);
      drawLightningBolt(ctx, pts[idx].x, pts[idx].y,
        pts[idx].x + Math.cos(bAngle) * bLen, pts[idx].y + Math.sin(bAngle) * bLen,
        { width: width * 0.6, glow: glow * 0.5, color, branches: 2, depth: depth + 1, maxDepth }
      );
    }
  }
}

function triggerWormhole(targetPlanet, callback) {
  if (wormholeActive) return;
  wormholeActive = true;

  const overlay = document.getElementById('wormhole-overlay');
  const canvas = document.getElementById('wormhole-canvas');
  const vignette = document.getElementById('wormhole-vignette');
  const flashEl = document.getElementById('wormhole-flash');
  const speedHud = document.getElementById('wormhole-speed-hud');
  const speedVal = document.getElementById('wh-speed-val');
  const speedStatus = document.getElementById('wh-speed-status');
  const destLabel = document.getElementById('wh-dest-label');
  const destName = document.getElementById('wh-dest-name');

  overlay.classList.add('active');
  vignette.classList.add('active');
  speedHud.classList.add('active');
  destLabel.classList.add('active');
  destName.textContent = targetPlanet.toUpperCase();
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');

  // ── Pre-generate persistent star positions for streaks ──
  const starCount = 180;
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = 0.08 + Math.random() * 0.92;
    const bright = 0.3 + Math.random() * 0.7;
    const hue = 190 + Math.random() * 40;
    stars.push({ angle, dist, bright, hue, width: 0.5 + Math.random() * 1.5 });
  }

  // ── Lightning bolts state ──
  let lightningBolts = [];
  let nextLightning = 0;

  // ── Phases: CHARGE(0-0.2) → JUMP(0.2-0.25) → TUNNEL(0.25-0.75) → EXIT(0.75-1.0) ──
  const TOTAL_FRAMES = 180; // 3 seconds at 60fps
  const LIGHT_SPEED = 299792; // km/s
  let t = 0;
  let teleported = false;

  function drawFrame() {
    t++;
    const p = t / TOTAL_FRAMES; // 0→1
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const maxR = Math.sqrt(cx * cx + cy * cy);

    // ── Phase detection ──
    let phase, phaseP;
    if (p < 0.2) { phase = 'charge'; phaseP = p / 0.2; }
    else if (p < 0.25) { phase = 'jump'; phaseP = (p - 0.2) / 0.05; }
    else if (p < 0.75) { phase = 'tunnel'; phaseP = (p - 0.25) / 0.5; }
    else { phase = 'exit'; phaseP = (p - 0.75) / 0.25; }

    // ── Speed calculation ──
    let speed = 0;
    if (phase === 'charge') speed = phaseP * phaseP * 50000;  // 0 → 50,000
    if (phase === 'jump') speed = 50000 + phaseP * 250000;  // 50k → 300k (light speed)
    if (phase === 'tunnel') speed = LIGHT_SPEED * (1 + phaseP * 99);  // 1c → 100c
    if (phase === 'exit') speed = LIGHT_SPEED * 100 * (1 - phaseP * phaseP); // decelerate

    // ── Update speed HUD ──
    if (speed < 1000) speedVal.textContent = Math.floor(speed).toLocaleString();
    else if (speed < 1000000) speedVal.textContent = (speed / 1000).toFixed(1) + 'K';
    else speedVal.textContent = (speed / 1000000).toFixed(1) + 'M';

    if (phase === 'charge') {
      speedStatus.className = 'wh-speed-status wh-status-subluminal';
      speedStatus.textContent = phaseP < 0.5 ? 'ENGAGING WARP DRIVE' : 'ACCELERATING TO LIGHT SPEED';
    } else if (phase === 'jump') {
      speedStatus.className = 'wh-speed-status wh-status-lightspeed';
      speedStatus.textContent = '⚡ LIGHT SPEED ACHIEVED ⚡';
    } else if (phase === 'tunnel') {
      speedStatus.className = 'wh-speed-status wh-status-superluminal';
      const multiple = Math.floor(1 + phaseP * 99);
      speedStatus.textContent = `SUPERLUMINAL — WARP ${multiple}×c`;
    } else {
      speedStatus.className = 'wh-speed-status wh-status-exit';
      speedStatus.textContent = 'DECELERATING — APPROACHING ' + targetPlanet.toUpperCase();
    }

    // ── Background fade ──
    const fadeAlpha = phase === 'charge' ? 0.08 + phaseP * 0.07 :
      phase === 'jump' ? 0.02 :
        phase === 'tunnel' ? 0.06 : 0.12 + phaseP * 0.15;
    ctx.fillStyle = `rgba(0,0,${phase === 'tunnel' ? 8 : 3},${fadeAlpha})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ═══ CHARGE PHASE — gravitational lensing, slow star stretch ═══
    if (phase === 'charge') {
      // Gravitational distortion rings
      for (let i = 0; i < 8; i++) {
        const r = 40 + i * 25 + Math.sin(t * 0.1 + i) * 15;
        const a = 0.08 * (1 - i * 0.008) * phaseP;
        ctx.beginPath();
        ctx.ellipse(cx, cy, r * (1 + phaseP * 0.3), r, t * 0.02, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(100,180,255,${a})`;
        ctx.lineWidth = 1 + phaseP;
        ctx.stroke();
      }
      // Stars begin stretching
      const streakLen = phaseP * phaseP * maxR * 0.3;
      for (const s of stars) {
        const outerR = s.dist * maxR;
        const innerR = Math.max(5, outerR - streakLen * s.bright);
        const x1 = cx + Math.cos(s.angle) * innerR;
        const y1 = cy + Math.sin(s.angle) * innerR;
        const x2 = cx + Math.cos(s.angle) * outerR;
        const y2 = cy + Math.sin(s.angle) * outerR;
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
        ctx.strokeStyle = `hsla(${s.hue},70%,80%,${s.bright * phaseP * 0.5})`;
        ctx.lineWidth = s.width * (0.5 + phaseP * 0.5);
        ctx.stroke();
      }
      // Central glow building up
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60 + phaseP * 80);
      cg.addColorStop(0, `rgba(200,230,255,${0.15 + phaseP * 0.4})`);
      cg.addColorStop(0.5, `rgba(80,150,255,${phaseP * 0.15})`);
      cg.addColorStop(1, 'rgba(20,40,100,0)');
      ctx.fillStyle = cg; ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // ═══ JUMP PHASE — white flash, everything stretches to infinity ═══
    if (phase === 'jump') {
      // Flash
      const flashIntensity = Math.sin(phaseP * Math.PI);
      ctx.fillStyle = `rgba(255,255,255,${flashIntensity * 0.6})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Extreme star streaks
      for (const s of stars) {
        const outerR = maxR * 1.2;
        const innerR = 2;
        const x1 = cx + Math.cos(s.angle) * innerR;
        const y1 = cy + Math.sin(s.angle) * innerR;
        const x2 = cx + Math.cos(s.angle) * outerR;
        const y2 = cy + Math.sin(s.angle) * outerR;
        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, `rgba(255,255,255,${0.9 * s.bright})`);
        grad.addColorStop(0.3, `hsla(${s.hue},80%,80%,${0.6 * s.bright})`);
        grad.addColorStop(1, 'rgba(0,0,30,0)');
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
        ctx.strokeStyle = grad; ctx.lineWidth = s.width * 2.5; ctx.stroke();
      }
      // Lightning bursts at jump
      for (let i = 0; i < 4; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = 30 + Math.random() * 100;
        drawLightningBolt(ctx, cx, cy,
          cx + Math.cos(a) * r * 3, cy + Math.sin(a) * r * 3,
          { width: 3, glow: 20, color: 'rgba(180,220,255,0.9)', branches: 4, maxDepth: 3 }
        );
      }
    }

    // ═══ TUNNEL PHASE — swirling wormhole tunnel with energy walls ═══
    if (phase === 'tunnel') {
      const tunnelSpeed = 3 + phaseP * 5;

      // ── Chromatic tunnel rings ──
      for (let i = 0; i < 40; i++) {
        const ringT = ((i / 40 + t * 0.025 * tunnelSpeed * 0.3) % 1);
        const r = ringT * maxR;
        const alpha = (1 - ringT) * 0.35;
        const hue = (220 + t * 3 + i * 9) % 360;
        const wobbleX = Math.sin(t * 0.04 + i * 0.7) * r * 0.08;
        const wobbleY = Math.cos(t * 0.035 + i * 0.5) * r * 0.06;
        ctx.beginPath();
        ctx.ellipse(cx + wobbleX, cy + wobbleY,
          r * (0.55 + Math.sin(t * 0.06 + i) * 0.08),
          r * (0.75 + Math.cos(t * 0.05 + i) * 0.06),
          t * 0.008 + i * 0.02, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${hue}, 80%, 55%, ${alpha})`;
        ctx.lineWidth = 2 + (1 - ringT) * 5;
        ctx.stroke();
        // secondary ring (chromatic split)
        if (i % 3 === 0) {
          ctx.beginPath();
          ctx.ellipse(cx + wobbleX * 1.1, cy + wobbleY * 1.1,
            r * (0.56 + Math.sin(t * 0.06 + i) * 0.08),
            r * (0.76 + Math.cos(t * 0.05 + i) * 0.06),
            t * 0.008 + i * 0.02, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${(hue + 30) % 360}, 90%, 65%, ${alpha * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // ── Hyper star streaks (continuous) ──
      for (const s of stars) {
        const outerR = s.dist * maxR;
        const streakLen = maxR * 0.4 * (0.5 + phaseP * 0.5) * s.bright;
        const innerR = Math.max(3, outerR - streakLen);
        const x1 = cx + Math.cos(s.angle + t * 0.003) * innerR;
        const y1 = cy + Math.sin(s.angle + t * 0.003) * innerR;
        const x2 = cx + Math.cos(s.angle + t * 0.003) * outerR;
        const y2 = cy + Math.sin(s.angle + t * 0.003) * outerR;
        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, `hsla(${s.hue},70%,90%,${s.bright * 0.6})`);
        grad.addColorStop(1, `hsla(${s.hue},70%,60%,0)`);
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
        ctx.strokeStyle = grad; ctx.lineWidth = s.width; ctx.stroke();
      }

      // ── Energy particles flowing along tunnel walls ──
      for (let i = 0; i < 25; i++) {
        const at = ((i / 25 + t * 0.02) % 1);
        const pr = at * maxR * 0.6;
        const a = i * 0.5 + t * 0.04;
        const px = cx + Math.cos(a) * pr * 0.55;
        const py = cy + Math.sin(a) * pr * 0.7;
        const sz = (1 - at) * 3 + 1;
        ctx.beginPath(); ctx.arc(px, py, sz, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${(200 + i * 15 + t * 2) % 360},90%,70%,${(1 - at) * 0.5})`;
        ctx.fill();
      }

      // ── Lightning bolts along tunnel ──
      nextLightning -= 1;
      if (nextLightning <= 0) {
        const boltCount = 1 + Math.floor(Math.random() * 2);
        for (let b = 0; b < boltCount; b++) {
          const a1 = Math.random() * Math.PI * 2;
          const r1 = 50 + Math.random() * 100;
          const a2 = a1 + (Math.random() - 0.5) * 1.5;
          const r2 = r1 + 80 + Math.random() * 150;
          lightningBolts.push({
            x1: cx + Math.cos(a1) * r1, y1: cy + Math.sin(a1) * r1,
            x2: cx + Math.cos(a2) * r2, y2: cy + Math.sin(a2) * r2,
            life: 6 + Math.floor(Math.random() * 6),
            hue: 190 + Math.random() * 60
          });
        }
        nextLightning = 5 + Math.floor(Math.random() * 10);
      }
      for (let i = lightningBolts.length - 1; i >= 0; i--) {
        const lb = lightningBolts[i];
        lb.life--;
        if (lb.life <= 0) { lightningBolts.splice(i, 1); continue; }
        drawLightningBolt(ctx, lb.x1, lb.y1, lb.x2, lb.y2,
          { width: 1.5 + lb.life * 0.3, glow: 12, color: `hsla(${lb.hue},80%,75%,${lb.life * 0.12})`, branches: 3, maxDepth: 2 }
        );
      }

      // ── Central wormhole eye ──
      const eyeR = 30 + Math.sin(t * 0.06) * 8;
      const eyeGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, eyeR * 3);
      eyeGrad.addColorStop(0, `rgba(0,0,20,${0.4 + phaseP * 0.3})`);
      eyeGrad.addColorStop(0.4, `rgba(40,80,180,${0.15})`);
      eyeGrad.addColorStop(0.7, `rgba(100,160,255,${0.05})`);
      eyeGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = eyeGrad;
      ctx.beginPath(); ctx.arc(cx, cy, eyeR * 3, 0, Math.PI * 2); ctx.fill();

      // Bright rim of the eye
      ctx.beginPath(); ctx.arc(cx, cy, eyeR, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(150,200,255,${0.2 + Math.sin(t * 0.1) * 0.1})`;
      ctx.lineWidth = 2; ctx.stroke();
    }

    // ═══ EXIT PHASE — tunnel collapses, destination emerges ═══
    if (phase === 'exit') {
      // Collapsing tunnel rings
      const ringCount = Math.floor(40 * (1 - phaseP));
      for (let i = 0; i < ringCount; i++) {
        const ringT = ((i / 40 + t * 0.02) % 1);
        const r = ringT * maxR * (1 - phaseP * 0.7);
        const alpha = (1 - ringT) * 0.25 * (1 - phaseP);
        const hue = (200 + t * 2 + i * 8) % 360;
        ctx.beginPath();
        ctx.ellipse(cx, cy, r * 0.6, r * 0.8, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${hue},70%,55%,${alpha})`;
        ctx.lineWidth = 2; ctx.stroke();
      }
      // Star streaks shortening
      for (const s of stars) {
        const outerR = s.dist * maxR * (1 - phaseP * 0.5);
        const streakLen = maxR * 0.3 * (1 - phaseP) * s.bright;
        const innerR = Math.max(5, outerR - streakLen);
        const x1 = cx + Math.cos(s.angle) * innerR;
        const y1 = cy + Math.sin(s.angle) * innerR;
        const x2 = cx + Math.cos(s.angle) * outerR;
        const y2 = cy + Math.sin(s.angle) * outerR;
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
        ctx.strokeStyle = `hsla(${s.hue},60%,80%,${s.bright * (1 - phaseP) * 0.4})`;
        ctx.lineWidth = s.width * (1 - phaseP); ctx.stroke();
      }
      // Destination glow expanding from center
      const destGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 50 + phaseP * maxR * 0.4);
      destGrad.addColorStop(0, `rgba(255,250,240,${phaseP * 0.3})`);
      destGrad.addColorStop(0.5, `rgba(100,160,255,${phaseP * 0.1})`);
      destGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = destGrad; ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Final flash on last frames
      if (phaseP > 0.85) {
        const ff = (phaseP - 0.85) / 0.15;
        ctx.fillStyle = `rgba(255,255,255,${ff * 0.5})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }

    // ── Teleport at midpoint of tunnel phase ──
    if (!teleported && p >= 0.5) {
      teleported = true;
      if (callback) callback();
    }

    // ── Continue or finish ──
    if (t < TOTAL_FRAMES) {
      requestAnimationFrame(drawFrame);
    } else {
      // Clean up
      overlay.classList.remove('active');
      vignette.classList.remove('active');
      speedHud.classList.remove('active');
      destLabel.classList.remove('active');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      wormholeActive = false;
      lightningBolts = [];
    }
  }

  // ═══ CINEMATIC WORMHOLE AUDIO ═══
  if (audioCtx) {
    try {
      const now = audioCtx.currentTime;
      const dur = TOTAL_FRAMES / 60; // ~3 seconds

      // 1) Deep sub-bass rumble — builds up during charge
      const subOsc = audioCtx.createOscillator();
      subOsc.type = 'sine'; subOsc.frequency.value = 30;
      const subGain = audioCtx.createGain(); subGain.gain.value = 0;
      subOsc.connect(subGain).connect(audioCtx.destination);
      subOsc.start(now);
      subGain.gain.linearRampToValueAtTime(0.12, now + dur * 0.2);
      subGain.gain.linearRampToValueAtTime(0.06, now + dur * 0.7);
      subGain.gain.linearRampToValueAtTime(0, now + dur);
      subOsc.stop(now + dur + 0.1);

      // 2) Rising pitch whoosh — charge to jump
      const whoosh = audioCtx.createOscillator();
      whoosh.type = 'sawtooth'; whoosh.frequency.value = 40;
      const whooshG = audioCtx.createGain(); whooshG.gain.value = 0;
      const whooshF = audioCtx.createBiquadFilter();
      whooshF.type = 'lowpass'; whooshF.frequency.value = 200;
      whoosh.connect(whooshF).connect(whooshG).connect(audioCtx.destination);
      whoosh.start(now);
      whoosh.frequency.exponentialRampToValueAtTime(500, now + dur * 0.25);
      whoosh.frequency.exponentialRampToValueAtTime(80, now + dur * 0.5);
      whoosh.frequency.exponentialRampToValueAtTime(40, now + dur);
      whooshF.frequency.linearRampToValueAtTime(800, now + dur * 0.25);
      whooshF.frequency.linearRampToValueAtTime(300, now + dur * 0.75);
      whooshG.gain.linearRampToValueAtTime(0.08, now + dur * 0.15);
      whooshG.gain.setValueAtTime(0.1, now + dur * 0.25);
      whooshG.gain.linearRampToValueAtTime(0.04, now + dur * 0.5);
      whooshG.gain.linearRampToValueAtTime(0, now + dur);
      whoosh.stop(now + dur + 0.1);

      // 3) Thunder crack at jump moment
      const thunderBuf = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.4, audioCtx.sampleRate);
      const td = thunderBuf.getChannelData(0);
      for (let i = 0; i < td.length; i++) {
        const env = Math.exp(-i / (audioCtx.sampleRate * 0.08));
        td[i] = (Math.random() * 2 - 1) * env;
      }
      const thunderSrc = audioCtx.createBufferSource(); thunderSrc.buffer = thunderBuf;
      const thunderG = audioCtx.createGain(); thunderG.gain.value = 0.2;
      const thunderF = audioCtx.createBiquadFilter(); thunderF.type = 'lowpass'; thunderF.frequency.value = 1000;
      thunderSrc.connect(thunderF).connect(thunderG).connect(audioCtx.destination);
      thunderSrc.start(now + dur * 0.22);

      // 4) Sustained tunnel hum — eerie resonant drone
      const droneOsc = audioCtx.createOscillator();
      droneOsc.type = 'triangle'; droneOsc.frequency.value = 65;
      const droneG = audioCtx.createGain(); droneG.gain.value = 0;
      const droneF = audioCtx.createBiquadFilter(); droneF.type = 'bandpass'; droneF.frequency.value = 120; droneF.Q.value = 8;
      droneOsc.connect(droneF).connect(droneG).connect(audioCtx.destination);
      droneOsc.start(now + dur * 0.25);
      droneG.gain.linearRampToValueAtTime(0.06, now + dur * 0.35);
      droneG.gain.setValueAtTime(0.06, now + dur * 0.65);
      droneG.gain.linearRampToValueAtTime(0, now + dur * 0.9);
      droneOsc.stop(now + dur);

      // 5) High shimmer for tunnel
      const shimOsc = audioCtx.createOscillator();
      shimOsc.type = 'sine'; shimOsc.frequency.value = 2000;
      const shimG = audioCtx.createGain(); shimG.gain.value = 0;
      shimOsc.connect(shimG).connect(audioCtx.destination);
      shimOsc.start(now + dur * 0.25);
      shimOsc.frequency.setValueAtTime(2000, now + dur * 0.25);
      shimOsc.frequency.linearRampToValueAtTime(4000, now + dur * 0.5);
      shimOsc.frequency.linearRampToValueAtTime(1500, now + dur * 0.75);
      shimG.gain.linearRampToValueAtTime(0.015, now + dur * 0.35);
      shimG.gain.setValueAtTime(0.015, now + dur * 0.6);
      shimG.gain.linearRampToValueAtTime(0, now + dur * 0.85);
      shimOsc.stop(now + dur);

      // 6) Filtered noise — spacetime distortion
      const nBuf = audioCtx.createBuffer(1, audioCtx.sampleRate * dur, audioCtx.sampleRate);
      const nd = nBuf.getChannelData(0);
      for (let i = 0; i < nd.length; i++) nd[i] = (Math.random() * 2 - 1);
      const nsrc = audioCtx.createBufferSource(); nsrc.buffer = nBuf;
      const nfilt = audioCtx.createBiquadFilter(); nfilt.type = 'bandpass'; nfilt.frequency.value = 400; nfilt.Q.value = 5;
      const ng = audioCtx.createGain(); ng.gain.value = 0;
      nsrc.connect(nfilt).connect(ng).connect(audioCtx.destination);
      nsrc.start(now);
      ng.gain.linearRampToValueAtTime(0.04, now + dur * 0.2);
      ng.gain.setValueAtTime(0.06, now + dur * 0.25);
      ng.gain.linearRampToValueAtTime(0.03, now + dur * 0.7);
      ng.gain.linearRampToValueAtTime(0, now + dur);
      nfilt.frequency.linearRampToValueAtTime(1200, now + dur * 0.25);
      nfilt.frequency.linearRampToValueAtTime(600, now + dur * 0.5);
      nfilt.frequency.linearRampToValueAtTime(200, now + dur);
      nsrc.stop(now + dur + 0.1);

      // 7) Arrival chime — bright bell at exit
      const chimeOsc = audioCtx.createOscillator();
      chimeOsc.type = 'sine'; chimeOsc.frequency.value = 880;
      const chimeG = audioCtx.createGain(); chimeG.gain.value = 0;
      chimeOsc.connect(chimeG).connect(audioCtx.destination);
      chimeOsc.start(now + dur * 0.85);
      chimeG.gain.linearRampToValueAtTime(0.08, now + dur * 0.88);
      chimeG.gain.exponentialRampToValueAtTime(0.001, now + dur + 0.3);
      chimeOsc.stop(now + dur + 0.4);
    } catch (e) { }
  }

  requestAnimationFrame(drawFrame);
}

// Double-click a planet to wormhole-travel to it
renderer.domElement.addEventListener('dblclick', e => {
  if (shipMode) return;
  const mouse = new THREE.Vector2(
    (e.clientX / window.innerWidth) * 2 - 1,
    -(e.clientY / window.innerHeight) * 2 + 1
  );
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);
  const meshes = [];
  Object.keys(planetObjects).forEach(k => {
    if (k.includes('_') || k === 'Moon') return;
    const po = planetObjects[k];
    if (po && po.mesh) meshes.push(po.mesh);
  });
  const hits = raycaster.intersectObjects(meshes);
  if (hits.length > 0) {
    const target = hits[0].object.userData.name || hits[0].object.parent?.userData?.name;
    if (target) {
      showPlanetPanel(target);
      openPlanetModal();
    }
  }
});

// ═══════════════════════════════════════════════════════
//  GUIDED TOUR — auto-pilot narrated journey
// ═══════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════
//  PHOTO MODE — capture screenshot with cinematic frame
// ═══════════════════════════════════════════════════════
window.takePhoto = function () {
  // Flash effect
  const flash = document.getElementById('photo-flash');
  flash.classList.remove('active');
  void flash.offsetWidth; // Force reflow
  flash.classList.add('active');
  setTimeout(() => flash.classList.remove('active'), 600);

  // Camera shutter sound
  if (audioCtx) {
    const now = audioCtx.currentTime;
    const buf = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.08, audioCtx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (audioCtx.sampleRate * 0.01));
    const src = audioCtx.createBufferSource(); src.buffer = buf;
    const g = audioCtx.createGain(); g.gain.value = 0.15;
    src.connect(g); g.connect(audioCtx.destination); src.start(now);
  }

  // Render and capture
  composer.render();
  const dataURL = renderer.domElement.toDataURL('image/png');

  // Create download canvas with watermark
  const img = new Image();
  img.onload = () => {
    const c = document.createElement('canvas');
    c.width = img.width; c.height = img.height;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);

    // Cinematic bars
    ctx.fillStyle = 'rgba(0,0,0,0.85)';
    ctx.fillRect(0, 0, c.width, c.height * 0.06);
    ctx.fillRect(0, c.height * 0.94, c.width, c.height * 0.06);

    // Watermark
    ctx.font = '16px Orbitron, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.textAlign = 'right';
    ctx.fillText('COSMIC EXPLORER', c.width - 20, c.height - 15);
    ctx.font = '12px Exo 2, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.fillText(new Date().toLocaleDateString(), c.width - 20, c.height - 35);

    // Current planet name if focused
    if (currentFocus) {
      ctx.font = 'bold 28px Orbitron, sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.textAlign = 'left';
      ctx.fillText(currentFocus.toUpperCase(), 20, 30);
    }

    // Download
    const link = document.createElement('a');
    link.download = `cosmic-explorer-${currentFocus || 'space'}-${Date.now()}.png`;
    link.href = c.toDataURL('image/png');
    link.click();
  };
  img.src = dataURL;

  unlockAchievement('photographer', '📷', 'Fotógrafo espacial', 'Capturaste tu primera captura cósmica');
};

// ═══════════════════════════════════════════════════════
//  ACHIEVEMENT SYSTEM — rewards exploration
// ═══════════════════════════════════════════════════════
const achievements = {};
const visitedPlanets = new Set();
let achievementQueue = [];
let showingAchievement = false;

function unlockAchievement(id, icon, title, desc) {
  if (achievements[id]) return;
  achievements[id] = true;
}

function showNextAchievement() {
}

// Track planet visits for achievements
function trackVisit(name) {
  visitedPlanets.add(name);
  // First visit
  if (visitedPlanets.size === 1) unlockAchievement('explorer', '🔭', 'Primer contacto', 'Exploraste tu primer cuerpo celeste');
  // All inner planets
  const inner = ['Mercury', 'Venus', 'Earth', 'Mars'];
  if (inner.every(p => visitedPlanets.has(p))) unlockAchievement('inner', '🪨', 'Sistema interior', 'Visitaste todos los planetas rocosos');
  // All gas giants
  const outer = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
  if (outer.every(p => visitedPlanets.has(p))) unlockAchievement('outer', '⛽', 'Cazador de gigantes gaseosos', 'Visitaste todos los gigantes de gas y hielo');
  // All planets + Sun
  if (visitedPlanets.size >= 9) unlockAchievement('complete', '🌟', 'Completista cósmico', 'Visitaste todos los cuerpos del sistema solar');
  // Individual planet specials
  if (name === 'Saturn') unlockAchievement('saturn', '💍', 'Señor de los anillos', 'Visitaste Saturno y sus magníficos anillos');
  if (name === 'Earth') unlockAchievement('earth', '🏠', 'Hogar, dulce hogar', 'Visitaste nuestro pálido punto azul');
  if (name === 'Jupiter') unlockAchievement('jupiter', '👁', 'Enfrenta la tormenta', 'Presenciaste la Gran Mancha Roja de Júpiter');
  if (name === 'Sun') unlockAchievement('sun', '☀', 'Demasiado cerca del sol', 'Te atreviste a acercarte al Sol');
}

// ═══════════════════════════════════════════════════════
//  EASTER EGGS — hidden surprises for curious users
// ═══════════════════════════════════════════════════════
let konamiSequence = [];
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A
let typedBuffer = '';

document.addEventListener('keydown', e => {
  // Konami code detector
  konamiSequence.push(e.keyCode);
  if (konamiSequence.length > 10) konamiSequence.shift();
  if (konamiSequence.length === 10 && konamiSequence.every((v, i) => v === konamiCode[i])) {
    konamiSequence = [];
    activateKonamiEgg();
  }

  // Typed word detector for "MURPH"
  if (e.key.length === 1) typedBuffer += e.key.toUpperCase();
  if (typedBuffer.length > 20) typedBuffer = typedBuffer.slice(-20);
  if (typedBuffer.includes('MURPH')) {
    typedBuffer = '';
    activateMurphEgg();
  }
  if (typedBuffer.includes('TARS')) {
    typedBuffer = '';
    activateTarsEgg();
  }
});

function activateKonamiEgg() {
  unlockAchievement('konami', '🕹', 'Jugador retro', 'Entered the Konami Code — a classic!');
  // Rainbow mode: all planets emit rainbow glow for 10 seconds
  const origColors = {};
  Object.keys(planetObjects).forEach(name => {
    if (name.includes('_') || name === 'Moon') return;
    const po = planetObjects[name];
    if (!po || !po.mesh || !po.mesh.material) return;
    origColors[name] = po.mesh.material.emissive ? po.mesh.material.emissive.getHex() : 0;
  });
  let ht = 0;
  const rainbowInterval = setInterval(() => {
    ht += 5;
    Object.keys(planetObjects).forEach((name, i) => {
      if (name.includes('_') || name === 'Moon') return;
      const po = planetObjects[name];
      if (!po || !po.mesh || !po.mesh.material) return;
      const hue = (ht + i * 40) % 360;
      const c = new THREE.Color().setHSL(hue / 360, 0.8, 0.5);
      if (po.mesh.material.emissive) po.mesh.material.emissive.copy(c);
      po.mesh.material.emissiveIntensity = 0.5;
    });
  }, 50);
  setTimeout(() => {
    clearInterval(rainbowInterval);
    Object.keys(origColors).forEach(name => {
      const po = planetObjects[name];
      if (!po || !po.mesh || !po.mesh.material) return;
      if (po.mesh.material.emissive) po.mesh.material.emissive.setHex(origColors[name]);
      po.mesh.material.emissiveIntensity = name === 'Sun' ? 1.0 : 0.1;
    });
  }, 10000);
}

function activateMurphEgg() {
  unlockAchievement('murph', '⏳', 'DON\'T LET ME LEAVE, MURPH!', 'El amor trasciende dimensiones de tiempo y espacio');
  // Wormhole to Earth with dramatic effect
  triggerWormhole('Earth', () => {
    const po = planetObjects['Earth'];
    if (!po) return;
    const wp = new THREE.Vector3();
    po.group.getWorldPosition(wp);
    camera.position.copy(wp).add(new THREE.Vector3(3, 1, 3));
    controls.target.copy(wp);
    controls.update();
    currentFocus = 'Earth';
  });
}

function activateTarsEgg() {
  unlockAchievement('tars', '🤖', 'Humor 75%', 'TARS en línea. Parámetro de honestidad al 90%.');
  // Display TARS message
  const msg = document.createElement('div');
  msg.style.cssText = 'position:fixed;bottom:8rem;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.85);border:1px solid rgba(79,195,247,0.4);border-radius:12px;padding:1rem 2rem;z-index:45;font-family:Orbitron,sans-serif;font-size:0.8rem;color:#4fc3f7;letter-spacing:2px;';
  const quotes = [
    'Everybody good? Plenty of slaves for my robot colony?',
    'Humor setting: 75%. Want me to lower it?',
    'Absolute honesty isn\'t always the most diplomatic...',
    'I have a cue light I can use to show you when I\'m joking.',
    'Cooper, this is no time for caution.',
    'It\'s not possible. No, it\'s necessary.',
  ];
  msg.textContent = 'TARS: ' + quotes[Math.floor(Math.random() * quotes.length)];
  document.body.appendChild(msg);
  setTimeout(() => { msg.style.transition = 'opacity 1s'; msg.style.opacity = '0'; setTimeout(() => msg.remove(), 1000); }, 5000);
}

// ═══════════════════════════════════════════════════════
//  SCREENSAVER / AMBIENT AUTOPILOT MODE
// ═══════════════════════════════════════════════════════
let screensaverMode = false;
let screensaverTimer = null;
const screensaverTargets = ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
let screensaverIdx = 0;

window.toggleScreensaver = function () {
  screensaverMode = !screensaverMode;
  const btn = document.getElementById('screensaver-btn');
  const badge = document.getElementById('screensaver-badge');
  if (screensaverMode) {
    btn.classList.add('active');
    badge.classList.add('active');
    closePanel();
    if (shipMode) toggleShipMode();
    screensaverIdx = 0;
    doScreensaverStep();
    unlockAchievement('screensaver', '🎬', 'Siéntate y relájate', 'Activaste el modo salvapantallas automático');
  } else {
    btn.classList.remove('active');
    badge.classList.remove('active');
    if (screensaverTimer) { clearTimeout(screensaverTimer); screensaverTimer = null; }
  }
};

function doScreensaverStep() {
  if (!screensaverMode) return;
  const target = screensaverTargets[screensaverIdx % screensaverTargets.length];
  screensaverIdx++;

  focusPlanet(target);

  screensaverTimer = setTimeout(() => doScreensaverStep(), 10000);
}

// ═══════════════════════════════════════════════════════
//  MINIMAP RADAR — top-down solar system view
// ═══════════════════════════════════════════════════════
function updateMinimap() {
  const canvas = document.getElementById('minimap-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = 160, h = 160;
  ctx.clearRect(0, 0, w, h);

  // Background — transparent so CSS white/10 shows through
  // No fill: the #minimap CSS handles the background

  // Border ring
  ctx.strokeStyle = 'rgba(255,255,255,0.15)';
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(80, 80, 78, 0, Math.PI * 2); ctx.stroke();

  // Grid circles
  [20, 40, 60].forEach(r => {
    ctx.strokeStyle = 'rgba(79,195,247,0.06)';
    ctx.beginPath(); ctx.arc(80, 80, r, 0, Math.PI * 2); ctx.stroke();
  });

  // Scale: map the solar system (~230 AU range) to 70px radius
  const mapScale = 70 / 230;

  // Sun at center
  ctx.fillStyle = '#FDB813';
  ctx.beginPath(); ctx.arc(80, 80, 3, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = 'rgba(253,184,19,0.2)';
  ctx.beginPath(); ctx.arc(80, 80, 6, 0, Math.PI * 2); ctx.fill();

  // Planets
  const planetColors = {
    Mercury: '#A9A9A9', Venus: '#E8B96F', Earth: '#4fc3f7', Mars: '#E74C3C',
    Jupiter: '#E8C060', Saturn: '#F0D880', Uranus: '#7DE8E8', Neptune: '#5D6CC0'
  };
  Object.keys(planetColors).forEach(name => {
    const po = planetObjects[name];
    if (!po || !po.group) return;
    const wp = new THREE.Vector3();
    po.group.getWorldPosition(wp);
    const mx = 80 + wp.x * mapScale;
    const mz = 80 + wp.z * mapScale;
    const size = (name === 'Jupiter' || name === 'Saturn') ? 2.5 : 1.5;
    ctx.fillStyle = planetColors[name];
    ctx.beginPath(); ctx.arc(mx, mz, size, 0, Math.PI * 2); ctx.fill();
    // Glow
    ctx.fillStyle = planetColors[name].replace(')', ',0.2)').replace('rgb', 'rgba');
    ctx.beginPath(); ctx.arc(mx, mz, size + 2, 0, Math.PI * 2); ctx.fill();
  });

  // Camera position indicator (triangle)
  const camX = 80 + camera.position.x * mapScale;
  const camZ = 80 + camera.position.z * mapScale;
  ctx.save();
  ctx.translate(camX, camZ);
  const dir = new THREE.Vector3();
  camera.getWorldDirection(dir);
  const angle = Math.atan2(dir.x, dir.z);
  ctx.rotate(-angle);
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.beginPath();
  ctx.moveTo(0, -4); ctx.lineTo(-2.5, 3); ctx.lineTo(2.5, 3);
  ctx.closePath(); ctx.fill();
  ctx.restore();

  // Camera FOV cone
  ctx.save();
  ctx.translate(camX, camZ);
  ctx.rotate(-angle);
  ctx.fillStyle = 'rgba(79,195,247,0.05)';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-15, -35);
  ctx.lineTo(15, -35);
  ctx.closePath(); ctx.fill();
  ctx.restore();
}
//  Deep organ drones, ticking clock, swelling pads,
//  ethereal bell melodies — evoking cosmic wonder
// ═══════════════════════════════════════════════════════
let audioCtx = null, musicPlaying = false;
window.toggleMusic = function () {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // ── CATHEDRAL REVERB — long 6-second tail ──
    const convolver = audioCtx.createConvolver();
    const reverbLen = audioCtx.sampleRate * 6;
    const impulse = audioCtx.createBuffer(2, reverbLen, audioCtx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = impulse.getChannelData(ch);
      for (let i = 0; i < reverbLen; i++) {
        const t = i / reverbLen;
        // Early reflections + long exponential tail
        const early = (i < audioCtx.sampleRate * 0.08) ? 0.6 : 0;
        d[i] = (Math.random() * 2 - 1) * (Math.pow(1 - t, 3.0) * 0.8 + early * Math.random());
      }
    }
    convolver.buffer = impulse;

    // Master mix bus
    const master = audioCtx.createGain(); master.gain.value = 0.20;
    const dryGain = audioCtx.createGain(); dryGain.gain.value = 0.35;
    const wetGain = audioCtx.createGain(); wetGain.gain.value = 0.65; // Heavy reverb
    master.connect(dryGain);
    master.connect(convolver);
    convolver.connect(wetGain);
    dryGain.connect(audioCtx.destination);
    wetGain.connect(audioCtx.destination);

    // ── PIPE ORGAN DRONE — the signature Interstellar sound ──
    // Church organ = many harmonics stacked at octaves + fifths
    // Root: C2 with full organ-like harmonic series
    const organBus = audioCtx.createGain(); organBus.gain.value = 0.0;
    const organFilter = audioCtx.createBiquadFilter();
    organFilter.type = 'lowpass'; organFilter.frequency.value = 600; organFilter.Q.value = 0.5;
    organBus.connect(organFilter); organFilter.connect(master);

    // Slow organ swell — breathe in and out like a cathedral organ
    const organLFO = audioCtx.createOscillator(); organLFO.type = 'sine'; organLFO.frequency.value = 0.012;
    const organLFOGain = audioCtx.createGain(); organLFOGain.gain.value = 0.08;
    organLFO.connect(organLFOGain); organLFOGain.connect(organBus.gain); organLFO.start();

    // Slowly open the organ filter like pulling out stops
    const filterSwell = audioCtx.createOscillator(); filterSwell.type = 'sine'; filterSwell.frequency.value = 0.018;
    const filterSwellG = audioCtx.createGain(); filterSwellG.gain.value = 400;
    filterSwell.connect(filterSwellG); filterSwellG.connect(organFilter.frequency); filterSwell.start();

    // Organ stops: fundamental + 2nd + 3rd + 4th + 5th harmonics + sub-octave
    // This creates the massive church organ pipe sound
    const organVoices = [
      // [freq, type, gain] — simulating organ pipe ranks
      [32.70, 'sine', 0.20],       // Sub-bass 16' (C1)
      [65.41, 'sine', 0.30],       // Principal 8' (C2) — root
      [65.41, 'triangle', 0.08],   // Flute 8' coloring
      [98.00, 'sine', 0.10],       // Quint 5⅓' (G2)
      [130.81, 'sine', 0.22],      // Octave 4' (C3)
      [130.81, 'triangle', 0.06],  // Flute 4' coloring
      [196.00, 'sine', 0.08],      // Quint 2⅔' (G3)
      [261.63, 'sine', 0.12],      // Super-octave 2' (C4)
      [329.63, 'sine', 0.04],      // Tierce 1⅗' (E4 — adds warmth)
      [392.00, 'sine', 0.03],      // Larigot (G4)
    ];

    organVoices.forEach(([freq, type, gain]) => {
      // Main pipe
      const o = audioCtx.createOscillator(); o.type = type; o.frequency.value = freq;
      const g = audioCtx.createGain(); g.gain.value = gain;
      o.connect(g); g.connect(organBus); o.start();
      // Slightly detuned "chorus" pipe — organs always have slight tuning differences
      const o2 = audioCtx.createOscillator(); o2.type = type; o2.frequency.value = freq * 1.002;
      const g2 = audioCtx.createGain(); g2.gain.value = gain * 0.4;
      o2.connect(g2); g2.connect(organBus); o2.start();
      // Third pipe detuned down
      const o3 = audioCtx.createOscillator(); o3.type = 'sine'; o3.frequency.value = freq * 0.998;
      const g3 = audioCtx.createGain(); g3.gain.value = gain * 0.3;
      o3.connect(g3); g3.connect(organBus); o3.start();
    });

    // Fade organ in majestically over 8 seconds
    organBus.gain.setValueAtTime(0, audioCtx.currentTime);
    organBus.gain.linearRampToValueAtTime(0.18, audioCtx.currentTime + 8);

    // ── TICKING CLOCK — the iconic Interstellar time motif ──
    // Each tick = 1.25 seconds (like 48bpm), representing the passage of time
    const tickBuf = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.04, audioCtx.sampleRate);
    const tickData = tickBuf.getChannelData(0);
    for (let i = 0; i < tickData.length; i++) {
      const t = i / audioCtx.sampleRate;
      // Sharp transient click + short resonant decay
      tickData[i] = Math.exp(-t * 200) * 0.7 * Math.sin(t * 4000 * Math.PI * 2)
        + Math.exp(-t * 80) * 0.3 * Math.sin(t * 1200 * Math.PI * 2);
    }

    const tickGain = audioCtx.createGain(); tickGain.gain.value = 0.0;
    const tickFilter = audioCtx.createBiquadFilter();
    tickFilter.type = 'highpass'; tickFilter.frequency.value = 800;
    tickGain.connect(tickFilter); tickFilter.connect(master);
    // Fade ticking in after 12 seconds
    tickGain.gain.setValueAtTime(0, audioCtx.currentTime);
    tickGain.gain.linearRampToValueAtTime(0.06, audioCtx.currentTime + 12);

    function tick() {
      if (!musicPlaying) { setTimeout(tick, 1250); return; }
      const src = audioCtx.createBufferSource();
      src.buffer = tickBuf;
      src.connect(tickGain);
      src.start();
      setTimeout(tick, 1250); // 48 BPM
    }
    setTimeout(tick, 4000); // Start ticking after 4 seconds

    // ── SUSTAIN STRING PAD — warm sustained notes like Dust ──
    const padBus = audioCtx.createGain(); padBus.gain.value = 0.0;
    const padFilter2 = audioCtx.createBiquadFilter();
    padFilter2.type = 'lowpass'; padFilter2.frequency.value = 1200; padFilter2.Q.value = 0.4;
    padBus.connect(padFilter2); padFilter2.connect(master);

    // Am chord (A2, C3, E3) — melancholic, yearning quality
    const padNotes = [
      [110.00, 'sine', 0.15],     // A2
      [110.00, 'triangle', 0.04], // A2 color
      [130.81, 'sine', 0.12],     // C3
      [164.81, 'sine', 0.10],     // E3
      [220.00, 'sine', 0.06],     // A3 (octave)
      [261.63, 'sine', 0.03],     // C4 (upper)
    ];
    padNotes.forEach(([freq, type, gain]) => {
      const o = audioCtx.createOscillator(); o.type = type; o.frequency.value = freq;
      const g = audioCtx.createGain(); g.gain.value = gain;
      o.connect(g); g.connect(padBus); o.start();
      // Vibrato — slight pitch modulation for string-like quality
      const vib = audioCtx.createOscillator(); vib.type = 'sine'; vib.frequency.value = 4.5 + Math.random();
      const vibG = audioCtx.createGain(); vibG.gain.value = freq * 0.003;
      vib.connect(vibG); vibG.connect(o.frequency); vib.start();
    });

    // Pad swell — slow breathing 30-second cycle
    const padLFO = audioCtx.createOscillator(); padLFO.type = 'sine'; padLFO.frequency.value = 0.033;
    const padLFOG = audioCtx.createGain(); padLFOG.gain.value = 0.06;
    padLFO.connect(padLFOG); padLFOG.connect(padBus.gain); padLFO.start();
    padBus.gain.setValueAtTime(0, audioCtx.currentTime);
    padBus.gain.linearRampToValueAtTime(0.10, audioCtx.currentTime + 15);

    // ── CHORD PROGRESSION — slowly shifting organ chords ──
    // Cycle: Am → Dm → F → Em → Am (each chord sustained 20 seconds)
    const chordProg = [
      // Am:  A2, C3, E3
      [[110.00, 130.81, 164.81, 220.00]],
      // Dm:  D3, F3, A3
      [[146.83, 174.61, 220.00, 293.66]],
      // F:   F2, A2, C3
      [[87.31, 110.00, 130.81, 174.61]],
      // Em:  E2, G2, B2
      [[82.41, 98.00, 123.47, 164.81]],
    ];
    let chordIdx = 0;
    const chordOscs = [];
    const chordBus = audioCtx.createGain(); chordBus.gain.value = 0;
    const chordFilter = audioCtx.createBiquadFilter();
    chordFilter.type = 'lowpass'; chordFilter.frequency.value = 500;
    chordBus.connect(chordFilter); chordFilter.connect(master);
    chordBus.gain.setValueAtTime(0, audioCtx.currentTime);
    chordBus.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 20);

    function morphChord() {
      if (!musicPlaying) { setTimeout(morphChord, 20000); return; }
      const chord = chordProg[chordIdx % chordProg.length][0];
      chordIdx++;
      const now = audioCtx.currentTime;
      // Crossfade: fade out old oscillators, create new ones
      chordOscs.forEach(({ osc, gain }) => {
        gain.gain.linearRampToValueAtTime(0.001, now + 4);
        osc.stop(now + 4.5);
      });
      chordOscs.length = 0;
      chord.forEach((freq, i) => {
        const o = audioCtx.createOscillator(); o.type = 'sine'; o.frequency.value = freq;
        const g = audioCtx.createGain();
        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime(0.08 - i * 0.01, now + 5); // Slow 5s fade-in
        o.connect(g); g.connect(chordBus); o.start(now);
        chordOscs.push({ osc: o, gain: g });
        // Detuned pair
        const o2 = audioCtx.createOscillator(); o2.type = 'sine'; o2.frequency.value = freq * 1.003;
        const g2 = audioCtx.createGain();
        g2.gain.setValueAtTime(0, now);
        g2.gain.linearRampToValueAtTime(0.03, now + 5);
        o2.connect(g2); g2.connect(chordBus); o2.start(now);
        chordOscs.push({ osc: o2, gain: g2 });
      });
      setTimeout(morphChord, 20000); // Change chord every 20 seconds
    }
    setTimeout(morphChord, 10000); // First chord change at 10s

    // ── ETHEREAL BELL MELODY — like piano in "Cornfield Chase" ──
    const bellBus = audioCtx.createGain(); bellBus.gain.value = 0;
    const bellFilter = audioCtx.createBiquadFilter();
    bellFilter.type = 'lowpass'; bellFilter.frequency.value = 3000;
    const bellReverb = audioCtx.createConvolver();
    const bellImpLen = audioCtx.sampleRate * 3;
    const bellImp = audioCtx.createBuffer(2, bellImpLen, audioCtx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = bellImp.getChannelData(ch);
      for (let i = 0; i < bellImpLen; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bellImpLen, 2);
    }
    bellReverb.buffer = bellImp;
    bellBus.connect(bellFilter); bellFilter.connect(bellReverb); bellReverb.connect(master);
    bellBus.gain.setValueAtTime(0, audioCtx.currentTime);
    bellBus.gain.linearRampToValueAtTime(0.10, audioCtx.currentTime + 18);

    // Bell tones: high register, Am pentatonic — A4, C5, D5, E5, G5, A5
    const bellNotes = [440, 523.25, 587.33, 659.25, 783.99, 880];
    // Simple descending melodic patterns inspired by the movie
    const patterns = [
      [5, 4, 3, 2],    // A5→G5→E5→D5
      [4, 3, 2, 0],    // G5→E5→D5→A4
      [3, 2, 0, 1],    // E5→D5→A4→C5
      [5, 3, 4, 2],    // A5→E5→G5→D5
      [2, 1, 0, 2],    // D5→C5→A4→D5
    ];
    let patIdx = 0;
    let noteInPat = 0;

    function playBellNote() {
      if (!musicPlaying) { setTimeout(playBellNote, 2000); return; }
      const pattern = patterns[patIdx % patterns.length];
      const freq = bellNotes[pattern[noteInPat]];
      noteInPat++;
      if (noteInPat >= pattern.length) { noteInPat = 0; patIdx++; }

      const now = audioCtx.currentTime;
      // Bell = sine + slight harmonic for shimmer
      const o1 = audioCtx.createOscillator(); o1.type = 'sine'; o1.frequency.value = freq;
      const o2 = audioCtx.createOscillator(); o2.type = 'sine'; o2.frequency.value = freq * 2.01; // octave shimmer
      const o3 = audioCtx.createOscillator(); o3.type = 'sine'; o3.frequency.value = freq * 3.0;  // 12th harmonic
      const env = audioCtx.createGain();
      env.gain.setValueAtTime(0, now);
      env.gain.linearRampToValueAtTime(0.20, now + 0.08); // Fast attack
      env.gain.exponentialRampToValueAtTime(0.10, now + 0.8);
      env.gain.exponentialRampToValueAtTime(0.001, now + 5); // Long decay like piano
      const g2 = audioCtx.createGain(); g2.gain.value = 0.06;
      const g3 = audioCtx.createGain(); g3.gain.value = 0.02;
      o1.connect(env); o2.connect(g2); g2.connect(env); o3.connect(g3); g3.connect(env);
      env.connect(bellBus);
      o1.start(now); o2.start(now); o3.start(now);
      o1.stop(now + 5.5); o2.stop(now + 5.5); o3.stop(now + 5.5);

      // Variable spacing: 1.25s (on the tick) or 2.5s
      const spacing = (noteInPat === 0) ? 3500 + Math.random() * 3000 : 1250;
      setTimeout(playBellNote, spacing);
    }
    setTimeout(playBellNote, 8000); // Bells enter after 8 seconds

    // ── DEEP RUMBLE — sub-bass swell for dramatic moments ──
    const rumble = audioCtx.createOscillator(); rumble.type = 'sine'; rumble.frequency.value = 27.5; // A0
    const rumble2 = audioCtx.createOscillator(); rumble2.type = 'sine'; rumble2.frequency.value = 55; // A1
    const rumbleG = audioCtx.createGain(); rumbleG.gain.value = 0;
    const rumbleG2 = audioCtx.createGain(); rumbleG2.gain.value = 0;
    rumble.connect(rumbleG); rumbleG.connect(master); rumble.start();
    rumble2.connect(rumbleG2); rumbleG2.connect(master); rumble2.start();

    // Dramatic rumble swell every ~45 seconds
    function rumbleSwell() {
      if (!musicPlaying) { setTimeout(rumbleSwell, 45000); return; }
      const now = audioCtx.currentTime;
      rumbleG.gain.setValueAtTime(0, now);
      rumbleG.gain.linearRampToValueAtTime(0.15, now + 8);
      rumbleG.gain.linearRampToValueAtTime(0, now + 18);
      rumbleG2.gain.setValueAtTime(0, now);
      rumbleG2.gain.linearRampToValueAtTime(0.08, now + 8);
      rumbleG2.gain.linearRampToValueAtTime(0, now + 18);
      setTimeout(rumbleSwell, 40000 + Math.random() * 15000);
    }
    setTimeout(rumbleSwell, 25000);

    // ── COSMIC WIND — filtered noise for vastness of space ──
    const nBuf = audioCtx.createBuffer(2, audioCtx.sampleRate * 4, audioCtx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = nBuf.getChannelData(ch);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    const wind = audioCtx.createBufferSource(); wind.buffer = nBuf; wind.loop = true;
    const windLP = audioCtx.createBiquadFilter(); windLP.type = 'lowpass'; windLP.frequency.value = 200;
    const windHP = audioCtx.createBiquadFilter(); windHP.type = 'highpass'; windHP.frequency.value = 40;
    const windG = audioCtx.createGain(); windG.gain.value = 0.025;
    wind.connect(windLP); windLP.connect(windHP); windHP.connect(windG); windG.connect(master);
    // Slow wind modulation
    const windLFO = audioCtx.createOscillator(); windLFO.type = 'sine'; windLFO.frequency.value = 0.06;
    const windLFOG = audioCtx.createGain(); windLFOG.gain.value = 100;
    windLFO.connect(windLFOG); windLFOG.connect(windLP.frequency); windLFO.start();
    wind.start();

    // ── HIGH SHIMMER — ethereal high-frequency wash ──
    const shimmerBuf = audioCtx.createBuffer(1, audioCtx.sampleRate * 2, audioCtx.sampleRate);
    const sD = shimmerBuf.getChannelData(0);
    for (let i = 0; i < sD.length; i++) sD[i] = Math.random() * 2 - 1;
    const shimmer = audioCtx.createBufferSource(); shimmer.buffer = shimmerBuf; shimmer.loop = true;
    const shimmerBP = audioCtx.createBiquadFilter(); shimmerBP.type = 'bandpass'; shimmerBP.frequency.value = 6000; shimmerBP.Q.value = 2;
    const shimmerG = audioCtx.createGain(); shimmerG.gain.value = 0.004;
    shimmer.connect(shimmerBP); shimmerBP.connect(shimmerG); shimmerG.connect(master);
    shimmer.start();

    musicPlaying = true;
  } else {
    if (musicPlaying) { audioCtx.suspend(); musicPlaying = false; }
    else { audioCtx.resume(); musicPlaying = true; }
  }
  const btn = document.getElementById('music-btn');
  if (btn) btn.classList.toggle('active', musicPlaying);
};

// ═══════════════════════════════════════════════════════
//  INTRO + DEFERRED LOADING — build one body per frame to stay responsive
// ═══════════════════════════════════════════════════════
const loadingEl = document.getElementById('loading');
const introTitle = document.getElementById('intro-title');
splitTextToChars(introTitle, '✦ Museo del Cosmos', 0.03);
const presentsEl = document.getElementById('intro-presents');
const presentsText = document.getElementById('presents-text');

const buildQueue = [
  { fn: () => loadRealTextures() },
  { fn: () => buildNebulaBackground() },
  { fn: () => buildSun() },
  { fn: () => buildPlanet('Mercury') },
  { fn: () => buildPlanet('Venus') },
  { fn: () => buildPlanet('Earth') },
  { fn: () => buildPlanet('Mars') },
  { fn: () => buildPlanet('Jupiter') },
  { fn: () => buildPlanet('Saturn') },
  { fn: () => buildPlanet('Uranus') },
  { fn: () => buildPlanet('Neptune') },
  { fn: () => buildAsteroidBelt() },
  { fn: () => buildKuiperBelt() },
  { fn: () => buildComet() },
];

let qi = 0;
let buildDone = false;
let phase = 'loading'; // loading -> presents -> welcome

function splitTextToChars(el, text, delay = 0.03) {
  el.innerHTML = '';
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.className = 'presents-char' + (text[i] === ' ' ? ' space' : '');
    span.style.animationDelay = `${delay + i * 0.02}s`;
    span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
    el.appendChild(span);
  }
}

function showPresents() {
  phase = 'presents';
  splitTextToChars(presentsText, '✦ Museo del Cosmos presenta Un viaje más allá de las estrellas', 0.02);

  loadingEl.classList.add('hidden');
  setTimeout(() => {
    loadingEl.remove();
    presentsEl.classList.add('active');

    setTimeout(() => {
      presentsEl.classList.add('hidden');
      setTimeout(() => {
        presentsEl.remove();
        if (buildDone) {
          showWelcomeScreen();
          phase = 'welcome';
        } else {
          phase = 'welcome';
        }
      }, 1000);
    }, 3500);
  }, 1000);
}

function processNext() {
  if (qi < buildQueue.length) {
    const step = buildQueue[qi];
    qi++;
    setTimeout(() => {
      const result = step.fn();
      if (result && typeof result.then === 'function') {
        result.then(() => processNext());
      } else {
        processNext();
      }
    }, 0);
  } else {
    buildDone = true;
    if (phase === 'welcome' || (phase === 'presents' && presentsEl && presentsEl.classList.contains('hidden'))) {
      showWelcomeScreen();
    }
  }
}

// ═══════════════════════════════════════════════════════
//  WELCOME SCREEN
// ═══════════════════════════════════════════════════════
function showWelcomeScreen() {
  const ws = document.getElementById('welcome-screen');
  if (!ws) return;
  ws.classList.add('active');


  // Generate background stars for welcome screen
  const container = document.getElementById('welcome-stars');
  if (container) {
    for (let i = 0; i < 120; i++) {
      const star = document.createElement('div');
      star.className = 'welcome-star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.width = star.style.height = (Math.random() * 2.5 + 0.5) + 'px';
      star.style.animationDelay = (Math.random() * 4) + 's';
      star.style.animationDuration = (Math.random() * 3 + 2) + 's';
      container.appendChild(star);
    }
  }

  // Parallax effect — smooth lerp-based cursor tracking
  const content = document.querySelector('.welcome-content');
  const stars = document.querySelector('.welcome-bg-stars');
  const spotlight = document.querySelector('.welcome-spotlight');
  const earth = document.querySelector('.welcome-earth');
  const telescope = document.querySelector('.welcome-telescope');
  const galaxy = document.querySelector('.welcome-galaxy');
  const bgImage = document.querySelector('.welcome-bg-image');

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let rafId = null;

  const onMove = (e) => {
    const rect = ws.getBoundingClientRect();
    targetX = (e.clientX - rect.left) / rect.width - 0.5;
    targetY = (e.clientY - rect.top) / rect.height - 0.5;
  };

  const animate = () => {
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;

    const px = (currentX + 0.5) * 100;
    const py = (currentY + 0.5) * 100;

    // Background parallax (deepest layer, subtlest)
    if (bgImage) {
      bgImage.style.transform = `translate3d(${currentX * -15}px, ${currentY * -15}px, 0)`;
    }

    // Content 3D tilt + translate
    if (content) {
      content.style.transform = `
        translate3d(${currentX * -40}px, ${currentY * -40}px, 0)
        rotateX(${currentY * -4}deg)
        rotateY(${currentX * 4}deg)
      `;
    }

    // Stars parallax
    if (stars) {
      stars.style.transform = `translate3d(${currentX * -80}px, ${currentY * -80}px, 0)`;
    }

    // Spotlight follows cursor
    if (spotlight) {
      spotlight.style.background = `radial-gradient(600px circle at ${px}% ${py}%, rgba(79, 195, 247, 0.08), transparent 60%)`;
    }

    // Parallax for decorative images
    if (galaxy) {
      galaxy.style.transform = `translate3d(${currentX * -25}px, ${currentY * -25}px, 0)`;
    }
    if (earth) {
      earth.style.transform = `translate3d(${currentX * -60}px, ${currentY * -60}px, 0)`;
    }
    if (telescope) {
      telescope.style.transform = `translate3d(${currentX * -80}px, ${currentY * -80}px, 0)`;
    }

    rafId = requestAnimationFrame(animate);
  };

  ws.addEventListener('mousemove', onMove);
  animate();

  ws._parallaxCleanup = () => {
    ws.removeEventListener('mousemove', onMove);
    if (rafId) cancelAnimationFrame(rafId);
    if (content) content.style.transform = '';
    if (stars) stars.style.transform = '';
    if (spotlight) spotlight.style.background = '';
  };
}

function launchExperience() {
  const ws = document.getElementById('welcome-screen');
  if (!ws) return;
  if (ws._parallaxCleanup) ws._parallaxCleanup();

  // Welcome exits with scale + rotate + 3D blur
  ws.style.transition = 'transform 0.4s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.4s ease, filter 0.4s ease';
  ws.style.transform = 'scale(1.8) rotateX(12deg) rotateY(8deg)';
  ws.style.opacity = '0';
  ws.style.filter = 'blur(24px)';

  setTimeout(() => {
    ws.remove();

    const canvas = renderer.domElement;
    canvas.style.transition = 'transform 0.8s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.8s ease, filter 0.8s ease';
    canvas.style.transform = 'scale(1)';
    canvas.style.opacity = '1';
    canvas.style.filter = 'blur(0)';
    cinematicIntro();
    setTimeout(() => { if (!musicPlaying && typeof toggleMusic === 'function') toggleMusic(); }, 800);
  }, 350);
}

// ── CINEMATIC INTRO FLYTHROUGH ──
function cinematicIntro() {
  const startPos = new THREE.Vector3(-60, 100, 250);
  const endPos = new THREE.Vector3(0, 40, 120);
  const startTgt = new THREE.Vector3(0, 0, 80);
  const endTgt = new THREE.Vector3(0, 0, 0);
  camera.position.copy(startPos);
  controls.target.copy(startTgt);
  controls.update();
  let t = 0;
  function introStep() {
    t += 0.006;
    if (t >= 1) {
      camera.position.copy(endPos);
      controls.target.copy(endTgt);
      controls.update();
      uiOverlays.forEach(el => {
        if (el) {
          el.style.opacity = '1';
          el.style.pointerEvents = '';
        }
      });
      animate();
      return;
    }
    const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    camera.position.lerpVectors(startPos, endPos, ease);
    controls.target.lerpVectors(startTgt, endTgt, ease);
    controls.update();
    if (starUniforms) starUniforms.uTime.value += 0.005;
    updateShootingStars();
    if (cometGroup) {
      const cd = cometGroup.userData;
      cd.angle += cd.orbitSpeed;
      cometGroup.position.x = Math.cos(cd.angle) * cd.orbitRadius;
      cometGroup.position.z = Math.sin(cd.angle) * cd.orbitRadius;
      cometGroup.position.y = Math.sin(cd.angle * 0.7) * cd.orbitRadius * cd.inclination;
      cometGroup.lookAt(0, 0, 0);
      cometGroup.rotateY(Math.PI);
    }
    const sunPO = planetObjects['Sun'];
    if (sunPO) {
      const pulse = 1 + Math.sin(t * 10) * 0.01;
      sunPO.mesh.scale.set(pulse, pulse, pulse);
    }
    composer.render();
    requestAnimationFrame(introStep);
  }
  requestAnimationFrame(introStep);
}

// Kick off: start building planets in background + intro sequence
requestAnimationFrame(() => {
  processNext();
  setTimeout(showPresents, 2000);
});

// ═══════════════════════════════════════════════════════════════
//  ASTEROID ESCAPE GAME ENGINE
// ═══════════════════════════════════════════════════════════════
(function () {
  // --- DOM refs ---
  const gameOverlay = document.getElementById('game-overlay');
  const gameCanvas = document.getElementById('game-canvas');
  const gameHud = document.getElementById('game-hud');
  const gameDamage = document.getElementById('game-damage');
  const gameStartScr = document.getElementById('game-start-screen');
  const gameOverScr = document.getElementById('game-over-screen');
  const ghudScore = document.getElementById('ghud-score');
  const ghudDist = document.getElementById('ghud-dist');
  const ghudHealth = document.getElementById('ghud-health');
  const ghudSpeed = document.getElementById('ghud-speed');
  const ghudBoost = document.getElementById('ghud-boost');
  const ghudWarning = document.getElementById('ghud-warning');
  const ghudCombo = document.getElementById('ghud-combo');
  const gameFinalScore = document.getElementById('game-final-score');
  const gameFinalDist = document.getElementById('game-final-dist');
  const gameHighScore = document.getElementById('game-high-score');

  // --- Game state ---
  let gScene, gCamera, gRenderer, gComposer, gClock;
  let gShip, gShipGroup;
  let gRunning = false, gPaused = false;
  let gAnimId = null;
  let gDifficulty = 1.0;
  let gScore = 0, gDistance = 0, gHealth = 100;
  let gBoostFuel = 100, gBoosting = false;
  let gSpeed = 80, gBaseSpeed = 80;
  let gComboCount = 0, gComboTimer = 0;
  let gAsteroids = [], gEnergies = [], gStars = [], gExplosions = [];
  let gStarField, gTunnel;
  let gInput = { left: false, right: false, up: false, down: false, boost: false };
  let gShipX = 0, gShipY = 0;
  let gHighScore = parseInt(localStorage.getItem('asteroidEscapeHigh') || '0');
  let gSpawnTimer = 0, gEnergySpawnTimer = 0;
  let gTotalTime = 0;
  let gShake = 0;
  let gNearMissTimer = 0;
  let gStarSpawnTimer = 0;
  let gCockpitView = false;
  let gLevelTransition = false, gTransitionTimer = 0, gPreTransitionSpeed = 80;
  let gWarpLines = null;

  // audio nodes for game
  let gEngineNodes = [], gMusicNodes = [];
  let gEngineGain, gMusicGain;
  let gConvolver, gMasterGain;

  // lane boundaries
  const LANE_W = 40, LANE_H = 25;
  const SPAWN_Z = -300;
  const DESPAWN_Z = 30;
  const SHIP_Z = 0;

  // === LEVEL / MISSION SYSTEM ===
  const LEVELS = [
    {
      name: 'ZONE 1 — INNER BELT', distKm: 10, asteroidRate: 1.0, desc: 'Campo de escombros ligero',
      fogColor: 0x000a1a, ambientColor: 0x223355, sunColor: 0xaaccff, tunnelColor: 0x1144aa,
      asteroidTypes: ['rocky', 'dark'], starRate: 4.5, bloomStrength: 1.5
    },
    {
      name: 'ZONE 2 — KESSLER FIELD', distKm: 15, asteroidRate: 1.4, desc: 'Densidad de asteroides aumentando',
      fogColor: 0x0a0800, ambientColor: 0x443322, sunColor: 0xffcc88, tunnelColor: 0xaa6622,
      asteroidTypes: ['rocky', 'metallic', 'dark'], starRate: 4.0, bloomStrength: 1.6
    },
    {
      name: 'ZONE 3 — SHATTERED CORE', distKm: 20, asteroidRate: 1.8, desc: 'Formaciones rocosas masivas adelante',
      fogColor: 0x0a0005, ambientColor: 0x442233, sunColor: 0xff6644, tunnelColor: 0xaa2222,
      asteroidTypes: ['volcanic', 'metallic', 'rocky'], starRate: 3.5, bloomStrength: 1.8
    },
    {
      name: 'ZONE 4 — DEBRIS STORM', distKm: 25, asteroidRate: 2.3, desc: 'Critical density — stay sharp!',
      fogColor: 0x050010, ambientColor: 0x332244, sunColor: 0xcc88ff, tunnelColor: 0x6622aa,
      asteroidTypes: ['crystal', 'icy', 'metallic', 'volcanic'], starRate: 3.0, bloomStrength: 2.0
    },
    {
      name: 'ZONE 5 — THE GAUNTLET', distKm: 30, asteroidRate: 3.0, desc: 'Final run — full speed ahead!',
      fogColor: 0x080804, ambientColor: 0x444433, sunColor: 0xffffee, tunnelColor: 0xaaaa44,
      asteroidTypes: ['volcanic', 'crystal', 'dark', 'icy', 'metallic'], starRate: 2.5, bloomStrength: 2.2
    },
  ];
  let gLevel = 0;
  let gLevelDist = 0;
  let gWon = false;

  // DOM refs for new elements
  const ghudLevel = document.getElementById('ghud-level');
  const ghudLevelFill = document.getElementById('ghud-level-fill');
  const ghudLevelDist = document.getElementById('ghud-level-dist');
  const gameLevelUp = document.getElementById('game-level-up');
  const gameVictoryScr = document.getElementById('game-victory-screen');
  const gameFinalLevel = document.getElementById('game-final-level');

  // --- Build spacecraft (large, authentic cruiser) ---
  function buildShip() {
    gShipGroup = new THREE.Group();
    const hullMat = new THREE.MeshStandardMaterial({ color: 0x8899aa, metalness: 0.85, roughness: 0.2 });
    const hullDark = new THREE.MeshStandardMaterial({ color: 0x445566, metalness: 0.9, roughness: 0.15 });
    const accentMat = new THREE.MeshStandardMaterial({ color: 0x2266aa, metalness: 0.7, roughness: 0.3 });

    // === Main hull (elongated tapered body) ===
    const hullGeo = new THREE.CylinderGeometry(0.4, 1.0, 7, 8);
    const hull = new THREE.Mesh(hullGeo, hullMat);
    hull.rotation.x = Math.PI / 2;
    gShipGroup.add(hull);

    // === Forward section (nose cone) ===
    const noseGeo = new THREE.ConeGeometry(0.4, 2.5, 8);
    const nose = new THREE.Mesh(noseGeo, hullDark);
    nose.rotation.x = -Math.PI / 2;
    nose.position.z = -4.5;
    gShipGroup.add(nose);

    // === Cockpit (illuminated canopy) ===
    const canopyGeo = new THREE.SphereGeometry(0.55, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55);
    const canopyMat = new THREE.MeshStandardMaterial({
      color: 0x88ddff, metalness: 0.1, roughness: 0.05, transparent: true, opacity: 0.5,
      emissive: 0x224466, emissiveIntensity: 0.4
    });
    const canopy = new THREE.Mesh(canopyGeo, canopyMat);
    canopy.position.set(0, 0.35, -2.5);
    canopy.rotation.x = -Math.PI * 0.1;
    gShipGroup.add(canopy);

    // === Mid-section command bridge ===
    const bridgeGeo = new THREE.BoxGeometry(1.2, 0.6, 1.8);
    const bridge = new THREE.Mesh(bridgeGeo, hullDark);
    bridge.position.set(0, 0.5, -0.5);
    gShipGroup.add(bridge);
    const winGeo = new THREE.BoxGeometry(1.22, 0.12, 1.4);
    const winMat = new THREE.MeshBasicMaterial({ color: 0x66bbff, transparent: true, opacity: 0.6 });
    const win = new THREE.Mesh(winGeo, winMat);
    win.position.set(0, 0.55, -0.5);
    gShipGroup.add(win);

    // === Main wings (large swept delta) ===
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0);
    wingShape.lineTo(0.5, -0.5);
    wingShape.lineTo(6, -1.2);
    wingShape.lineTo(5.5, -0.3);
    wingShape.lineTo(5, 0);
    wingShape.lineTo(0.8, 0.15);
    wingShape.closePath();
    const wingGeo = new THREE.ExtrudeGeometry(wingShape, { depth: 0.12, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 2 });

    const wingL = new THREE.Mesh(wingGeo, accentMat);
    wingL.position.set(0.6, -0.1, 0.5);
    wingL.rotation.set(0.05, -0.1, 0.08);
    gShipGroup.add(wingL);

    const wingR = new THREE.Mesh(wingGeo, accentMat);
    wingR.position.set(-0.6, -0.1, 0.5);
    wingR.rotation.set(0.05, 0.1, -0.08);
    wingR.scale.x = -1;
    gShipGroup.add(wingR);

    // === Wing-tip lights ===
    const tipGeoL = new THREE.SphereGeometry(0.12, 6, 6);
    const tipL = new THREE.Mesh(tipGeoL, new THREE.MeshBasicMaterial({ color: 0xff2222 }));
    tipL.position.set(6.5, -0.6, 0.1);
    gShipGroup.add(tipL);
    const tipR = new THREE.Mesh(tipGeoL, new THREE.MeshBasicMaterial({ color: 0x22ff22 }));
    tipR.position.set(-6.5, -0.6, 0.1);
    gShipGroup.add(tipR);

    // === Rear stabilizers (vertical fins) ===
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.lineTo(0, 2.5);
    finShape.lineTo(1.5, 1.8);
    finShape.lineTo(1.8, 0);
    finShape.closePath();
    const finGeo = new THREE.ExtrudeGeometry(finShape, { depth: 0.08, bevelEnabled: false });
    const finMat = new THREE.MeshStandardMaterial({ color: 0x556677, metalness: 0.8, roughness: 0.25 });
    const finTop = new THREE.Mesh(finGeo, finMat);
    finTop.position.set(-0.04, 0.5, 2.0);
    finTop.rotation.y = Math.PI / 2;
    gShipGroup.add(finTop);
    const finBtm = finTop.clone();
    finBtm.position.set(-0.04, -0.5, 2.0);
    finBtm.rotation.set(Math.PI, Math.PI / 2, 0);
    gShipGroup.add(finBtm);

    // === Engine nacelles (twin pods on wings) ===
    [-2.8, 2.8].forEach(xOff => {
      const nacGeo = new THREE.CylinderGeometry(0.3, 0.45, 2.8, 8);
      const nac = new THREE.Mesh(nacGeo, hullDark);
      nac.rotation.x = Math.PI / 2;
      nac.position.set(xOff, -0.4, 1.5);
      gShipGroup.add(nac);
      const nozGeo = new THREE.CylinderGeometry(0.35, 0.42, 0.3, 8);
      const nozMat = new THREE.MeshBasicMaterial({ color: 0xff6600, transparent: true, opacity: 0.9 });
      const noz = new THREE.Mesh(nozGeo, nozMat);
      noz.rotation.x = Math.PI / 2;
      noz.position.set(xOff, -0.4, 2.95);
      noz.name = 'engineNozzle';
      gShipGroup.add(noz);
      const innerGeo = new THREE.CircleGeometry(0.28, 8);
      const innerMat = new THREE.MeshBasicMaterial({ color: 0xffaa44, transparent: true, opacity: 0.7, side: THREE.DoubleSide });
      const inner = new THREE.Mesh(innerGeo, innerMat);
      inner.position.set(xOff, -0.4, 2.96);
      gShipGroup.add(inner);
    });

    // === Central main engine ===
    const mainEngGeo = new THREE.CylinderGeometry(0.5, 0.7, 1.5, 10);
    const mainEng = new THREE.Mesh(mainEngGeo, hullDark);
    mainEng.rotation.x = Math.PI / 2;
    mainEng.position.set(0, 0, 3.0);
    gShipGroup.add(mainEng);
    const mainNozGeo = new THREE.CylinderGeometry(0.55, 0.65, 0.4, 10);
    const mainNoz = new THREE.Mesh(mainNozGeo, new THREE.MeshBasicMaterial({ color: 0xff8844, transparent: true, opacity: 0.9 }));
    mainNoz.rotation.x = Math.PI / 2;
    mainNoz.position.set(0, 0, 3.8);
    mainNoz.name = 'engineNozzle';
    gShipGroup.add(mainNoz);

    // === Shield glow (subtle hull outline) ===
    const shieldGeo = new THREE.SphereGeometry(4.5, 16, 12);
    const shieldMat = new THREE.MeshBasicMaterial({
      color: 0x4488ff, transparent: true, opacity: 0.02,
      blending: THREE.AdditiveBlending, side: THREE.BackSide
    });
    const shield = new THREE.Mesh(shieldGeo, shieldMat);
    shield.name = 'shield';
    shield.scale.set(1.6, 0.6, 1.2);
    gShipGroup.add(shield);

    // === Antenna / sensor mast ===
    const antGeo = new THREE.CylinderGeometry(0.02, 0.02, 1.5, 4);
    const antMat = new THREE.MeshStandardMaterial({ color: 0xaabbcc, metalness: 0.9, roughness: 0.1 });
    const ant = new THREE.Mesh(antGeo, antMat);
    ant.position.set(0, 1.3, -1.5);
    gShipGroup.add(ant);
    const antTip = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), new THREE.MeshBasicMaterial({ color: 0xff4444 }));
    antTip.position.set(0, 2.05, -1.5);
    antTip.name = 'antTip';
    gShipGroup.add(antTip);

    // === Engine trail particles (wider spread for 3 engines) ===
    const trailGeo = new THREE.BufferGeometry();
    const trailCount = 120;
    const trailPos = new Float32Array(trailCount * 3);
    for (let i = 0; i < trailCount; i++) {
      const eng = i % 3;
      const xBase = eng === 0 ? 0 : eng === 1 ? -2.8 : 2.8;
      trailPos[i * 3] = xBase + (Math.random() - 0.5) * 0.6;
      trailPos[i * 3 + 1] = -0.4 + (Math.random() - 0.5) * 0.4;
      trailPos[i * 3 + 2] = 3.5 + Math.random() * 6;
    }
    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
    const trailMat = new THREE.PointsMaterial({ color: 0xff6633, size: 0.25, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending });
    const trail = new THREE.Points(trailGeo, trailMat);
    trail.name = 'trail';
    gShipGroup.add(trail);

    gShipGroup.scale.set(0.7, 0.7, 0.7);
    gShipGroup.position.set(0, 0, SHIP_Z);
    return gShipGroup;
  }

  // --- Procedural asteroid ---
  function createAsteroid(z) {
    const lvl = LEVELS[Math.min(gLevel, LEVELS.length - 1)];
    const types = lvl.asteroidTypes || ['rocky'];
    const type = types[Math.floor(Math.random() * types.length)];
    let size, geo, mat;

    switch (type) {
      case 'metallic': {
        size = 1.2 + Math.random() * 2.5;
        geo = new THREE.IcosahedronGeometry(size, 1);
        const pos = geo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const v = new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i));
          v.multiplyScalar(0.85 + Math.random() * 0.3);
          pos.setXYZ(i, v.x, v.y, v.z);
        }
        geo.computeVertexNormals();
        const ms = 0.5 + Math.random() * 0.3;
        mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(ms, ms * 0.95, ms * 1.1), roughness: 0.2, metalness: 0.9, flatShading: true });
        break;
      }
      case 'icy': {
        size = 0.6 + Math.random() * 2.0;
        geo = new THREE.OctahedronGeometry(size, 1);
        const pos = geo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const v = new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i));
          v.multiplyScalar(0.8 + Math.random() * 0.4);
          pos.setXYZ(i, v.x, v.y, v.z);
        }
        geo.computeVertexNormals();
        mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(0.6 + Math.random() * 0.3, 0.8 + Math.random() * 0.2, 0.95), roughness: 0.1, metalness: 0.3, transparent: true, opacity: 0.85, flatShading: true });
        break;
      }
      case 'volcanic': {
        size = 1.0 + Math.random() * 3.5;
        geo = new THREE.DodecahedronGeometry(size, 1);
        const pos = geo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const v = new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i));
          v.multiplyScalar(0.65 + Math.random() * 0.7);
          pos.setXYZ(i, v.x, v.y, v.z);
        }
        geo.computeVertexNormals();
        const vr = Math.random();
        mat = new THREE.MeshStandardMaterial({
          color: new THREE.Color(0.25 + vr * 0.15, 0.08, 0.05), roughness: 0.8, metalness: 0.2, flatShading: true,
          emissive: new THREE.Color(0.4 + vr * 0.3, 0.1, 0.0), emissiveIntensity: 0.3 + Math.random() * 0.3
        });
        break;
      }
      case 'crystal': {
        size = 0.5 + Math.random() * 1.8;
        geo = new THREE.TetrahedronGeometry(size, 0);
        const pos = geo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const v = new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i));
          v.multiplyScalar(0.9 + Math.random() * 0.2);
          pos.setXYZ(i, v.x, v.y, v.z);
        }
        geo.computeVertexNormals();
        const hue = Math.random();
        const cc = new THREE.Color().setHSL(hue * 0.3 + 0.7, 0.6, 0.4 + Math.random() * 0.2);
        mat = new THREE.MeshStandardMaterial({
          color: cc, roughness: 0.05, metalness: 0.7, transparent: true, opacity: 0.7, flatShading: true,
          emissive: cc.clone(), emissiveIntensity: 0.2
        });
        break;
      }
      case 'dark': {
        size = 1.5 + Math.random() * 4.0;
        geo = new THREE.DodecahedronGeometry(size, 0);
        const pos = geo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const v = new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i));
          v.multiplyScalar(0.7 + Math.random() * 0.6);
          pos.setXYZ(i, v.x, v.y, v.z);
        }
        geo.computeVertexNormals();
        const ds = 0.05 + Math.random() * 0.1;
        mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(ds, ds, ds * 1.1), roughness: 0.95, metalness: 0.05, flatShading: true });
        break;
      }
      default: { // 'rocky'
        size = 0.8 + Math.random() * 3.5;
        geo = new THREE.DodecahedronGeometry(size, 1);
        const pos = geo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const v = new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i));
          v.multiplyScalar(0.7 + Math.random() * 0.6);
          pos.setXYZ(i, v.x, v.y, v.z);
        }
        geo.computeVertexNormals();
        const shade = 0.3 + Math.random() * 0.4;
        mat = new THREE.MeshStandardMaterial({ color: new THREE.Color(shade, shade * 0.85, shade * 0.7), roughness: 0.9, metalness: 0.1, flatShading: true });
        break;
      }
    }

    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * LANE_W * 2,
      (Math.random() - 0.5) * LANE_H * 1.5,
      z || SPAWN_Z
    );
    mesh.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
    mesh.userData = {
      rotSpeed: new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
      size: size,
      driftX: (Math.random() - 0.5) * 3,
      driftY: (Math.random() - 0.5) * 2,
      type: type
    };
    return mesh;
  }

  // --- Energy collectible ---
  function createEnergy(z) {
    const group = new THREE.Group();
    const geo = new THREE.OctahedronGeometry(0.6, 0);
    const mat = new THREE.MeshBasicMaterial({ color: 0x00ff88, transparent: true, opacity: 0.8 });
    const mesh = new THREE.Mesh(geo, mat);
    group.add(mesh);

    // glow
    const glowGeo = new THREE.SphereGeometry(1.2, 8, 8);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x00ff88, transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending });
    group.add(new THREE.Mesh(glowGeo, glowMat));

    group.position.set(
      (Math.random() - 0.5) * LANE_W * 1.2,
      (Math.random() - 0.5) * LANE_H * 0.8,
      z || SPAWN_Z
    );
    group.userData = { collected: false };
    return group;
  }

  // --- Star collectible ---
  function createStar(z) {
    const weights = [0.6, 0.3, 0.1];
    let r = Math.random(), type = 'gold';
    if (r > weights[0] + weights[1]) type = 'rainbow';
    else if (r > weights[0]) type = 'crystal';

    const group = new THREE.Group();

    if (type === 'gold') {
      const geo = new THREE.TorusKnotGeometry(0.5, 0.15, 32, 8, 2, 3);
      const mat = new THREE.MeshStandardMaterial({ color: 0xFFD700, emissive: 0xFFAA00, emissiveIntensity: 0.5, metalness: 0.8, roughness: 0.2 });
      group.add(new THREE.Mesh(geo, mat));
      const glowGeo = new THREE.SphereGeometry(1.5, 8, 8);
      const glowMat = new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending });
      group.add(new THREE.Mesh(glowGeo, glowMat));
      group.userData = { type: 'gold', points: 500, collected: false };
    } else if (type === 'crystal') {
      const geo = new THREE.OctahedronGeometry(0.7, 0);
      const mat = new THREE.MeshStandardMaterial({ color: 0x00FFFF, emissive: 0x00AAAA, emissiveIntensity: 0.6, metalness: 0.5, roughness: 0.1, transparent: true, opacity: 0.8 });
      group.add(new THREE.Mesh(geo, mat));
      const glowGeo = new THREE.SphereGeometry(1.3, 8, 8);
      const glowMat = new THREE.MeshBasicMaterial({ color: 0x00FFFF, transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending });
      group.add(new THREE.Mesh(glowGeo, glowMat));
      group.userData = { type: 'crystal', points: 300, collected: false, boostFuel: 15 };
    } else {
      const geo = new THREE.IcosahedronGeometry(0.6, 1);
      const mat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, emissive: 0xFF88FF, emissiveIntensity: 0.8, metalness: 0.4, roughness: 0.1 });
      group.add(new THREE.Mesh(geo, mat));
      for (let ri = 0; ri < 3; ri++) {
        const ringGeo = new THREE.TorusGeometry(1.0 + ri * 0.3, 0.05, 8, 32);
        const ringMat = new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(ri / 3, 1, 0.6), transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.random() * Math.PI;
        ring.rotation.y = Math.random() * Math.PI;
        group.add(ring);
      }
      group.userData = { type: 'rainbow', points: 1000, collected: false, boostFuel: 30, health: 15 };
    }

    group.position.set(
      (Math.random() - 0.5) * LANE_W * 1.2,
      (Math.random() - 0.5) * LANE_H * 0.8,
      z || SPAWN_Z
    );
    return group;
  }

  // --- Star pickup sound ---
  function playStarPickupSound(type) {
    if (!audioCtx || !gMasterGain) return;
    try {
      const now = audioCtx.currentTime;
      if (type === 'gold') {
        [659.25, 783.99, 1046.5].forEach((freq, i) => {
          const osc = audioCtx.createOscillator(); osc.type = 'sine'; osc.frequency.value = freq;
          const g = audioCtx.createGain();
          g.gain.setValueAtTime(0, now + i * 0.05);
          g.gain.linearRampToValueAtTime(0.1, now + i * 0.05 + 0.02);
          g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.3);
          osc.connect(g).connect(gMasterGain);
          osc.start(now + i * 0.05); osc.stop(now + i * 0.05 + 0.35);
        });
      } else if (type === 'crystal') {
        [1046.5, 1318.5].forEach((freq, i) => {
          const osc = audioCtx.createOscillator(); osc.type = 'triangle'; osc.frequency.value = freq;
          const g = audioCtx.createGain();
          g.gain.setValueAtTime(0.08, now + i * 0.08);
          g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.4);
          osc.connect(g).connect(gMasterGain);
          osc.start(now + i * 0.08); osc.stop(now + i * 0.08 + 0.45);
        });
      } else {
        [523.25, 659.25, 783.99, 1046.5, 1318.5, 1567.98].forEach((freq, i) => {
          const osc = audioCtx.createOscillator(); osc.type = 'sine'; osc.frequency.value = freq;
          const g = audioCtx.createGain();
          g.gain.setValueAtTime(0, now + i * 0.04);
          g.gain.linearRampToValueAtTime(0.08, now + i * 0.04 + 0.02);
          g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.04 + 0.5);
          osc.connect(g).connect(gMasterGain);
          osc.start(now + i * 0.04); osc.stop(now + i * 0.04 + 0.55);
        });
      }
    } catch (e) { }
  }

  // --- Star pickup notification ---
  function showStarPickup(type, points) {
    const popup = document.getElementById('star-pickup-popup');
    const typeEl = document.getElementById('star-pickup-type');
    const ptsEl = document.getElementById('star-pickup-points');
    if (!popup || !typeEl || !ptsEl) return;
    popup.className = 'star-' + type;
    if (type === 'gold') typeEl.textContent = '\u2605 GOLD STAR';
    else if (type === 'crystal') typeEl.textContent = '\u25C6 CRYSTAL GEM';
    else typeEl.textContent = '\u2726 RAINBOW STAR';
    ptsEl.textContent = '+' + points;
    popup.classList.remove('show');
    void popup.offsetHeight;
    popup.classList.add('show');
    setTimeout(() => popup.classList.remove('show'), 1200);
  }

  // --- Toggle cockpit view ---
  function toggleCockpitView() {
    gCockpitView = !gCockpitView;
    const cockpitOvl = document.getElementById('cockpit-overlay');
    const viewBtn = document.getElementById('ghud-view-btn');
    if (gCockpitView) {
      if (cockpitOvl) cockpitOvl.classList.add('active');
      if (viewBtn) viewBtn.textContent = '\u25C9 EXTERNAL VIEW [V]';
      if (gShipGroup) gShipGroup.visible = false;
    } else {
      if (cockpitOvl) cockpitOvl.classList.remove('active');
      if (viewBtn) viewBtn.textContent = '\u25C9 COCKPIT VIEW [V]';
      if (gShipGroup) gShipGroup.visible = true;
    }
  }

  // --- Apply per-level ambiance ---
  function applyLevelAmbiance() {
    const lvl = LEVELS[Math.min(gLevel, LEVELS.length - 1)];
    if (gScene && gScene.fog) {
      gScene.fog.color.setHex(lvl.fogColor);
    }
    if (gScene) gScene.children.forEach(child => {
      if (child instanceof THREE.AmbientLight) child.color.setHex(lvl.ambientColor);
      if (child instanceof THREE.DirectionalLight) child.color.setHex(lvl.sunColor);
    });
    if (gTunnel) {
      gTunnel.children.forEach(ring => {
        ring.material.color.setHex(lvl.tunnelColor);
      });
    }
    if (gComposer && gComposer.passes) {
      gComposer.passes.forEach(pass => {
        if (pass.strength !== undefined) pass.strength = lvl.bloomStrength || 1.5;
      });
    }
  }

  // --- Explosion effect ---
  function spawnExplosion(pos) {
    const count = 25;
    const geo = new THREE.BufferGeometry();
    const ps = new Float32Array(count * 3);
    const vel = [];
    for (let i = 0; i < count; i++) {
      ps[i * 3] = pos.x;
      ps[i * 3 + 1] = pos.y;
      ps[i * 3 + 2] = pos.z;
      vel.push(new THREE.Vector3((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20));
    }
    geo.setAttribute('position', new THREE.BufferAttribute(ps, 3));
    const mat = new THREE.PointsMaterial({ color: 0xff8800, size: 0.5, transparent: true, opacity: 1, blending: THREE.AdditiveBlending });
    const pts = new THREE.Points(geo, mat);
    pts.userData = { vel, life: 1.0 };
    gScene.add(pts);
    gExplosions.push(pts);
  }

  // --- Starfield ---
  function buildStarField() {
    const count = 3000;
    const geo = new THREE.BufferGeometry();
    const ps = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      ps[i * 3] = (Math.random() - 0.5) * 600;
      ps[i * 3 + 1] = (Math.random() - 0.5) * 600;
      ps[i * 3 + 2] = -Math.random() * 800;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(ps, 3));
    const mat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.4, transparent: true, opacity: 0.7 });
    gStarField = new THREE.Points(geo, mat);
    gScene.add(gStarField);
  }

  // --- Tunnel guide markers ---
  function buildTunnel() {
    gTunnel = new THREE.Group();
    const ringCount = 40;
    for (let i = 0; i < ringCount; i++) {
      const geo = new THREE.RingGeometry(LANE_W * 0.6, LANE_W * 0.62, 32);
      const mat = new THREE.MeshBasicMaterial({ color: 0x1144aa, transparent: true, opacity: 0.08, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(geo, mat);
      ring.position.z = -i * 12;
      gTunnel.add(ring);
    }
    gScene.add(gTunnel);
  }

  // --- Create reverb impulse response ---
  function createReverbIR(duration, decay) {
    const len = audioCtx.sampleRate * duration;
    const buf = audioCtx.createBuffer(2, len, audioCtx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) {
        d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (audioCtx.sampleRate * decay));
      }
    }
    return buf;
  }

  // --- Game audio ---
  function startGameAudio() {
    if (!audioCtx) return;
    try {
      // Master gain
      gMasterGain = audioCtx.createGain();
      gMasterGain.gain.value = 0.7;
      gMasterGain.connect(audioCtx.destination);

      // Reverb for ambience
      gConvolver = audioCtx.createConvolver();
      gConvolver.buffer = createReverbIR(2.5, 0.6);
      const reverbGain = audioCtx.createGain();
      reverbGain.gain.value = 0.2;
      gConvolver.connect(reverbGain).connect(gMasterGain);

      // === Smooth engine hum (filtered noise, not oscillator) ===
      const engineBuf = audioCtx.createBuffer(1, audioCtx.sampleRate * 4, audioCtx.sampleRate);
      const ed = engineBuf.getChannelData(0);
      // brown noise (smoother than white)
      let last = 0;
      for (let i = 0; i < ed.length; i++) {
        const white = Math.random() * 2 - 1;
        last = (last + 0.02 * white) / 1.02;
        ed[i] = last * 3.5;
      }
      const engineSrc = audioCtx.createBufferSource();
      engineSrc.buffer = engineBuf;
      engineSrc.loop = true;
      const engineFilter = audioCtx.createBiquadFilter();
      engineFilter.type = 'bandpass';
      engineFilter.frequency.value = 100;
      engineFilter.Q.value = 1.5;
      gEngineGain = audioCtx.createGain();
      gEngineGain.gain.value = 0.05;
      engineSrc.connect(engineFilter).connect(gEngineGain).connect(gMasterGain);
      engineSrc.connect(engineFilter).connect(gEngineGain).connect(gConvolver);
      engineSrc.start();
      gEngineNodes.push(engineSrc);
      // store filter for dynamic pitch shifting
      gEngineGain._filter = engineFilter;

      // === Ambient music pad (lush cinematic) ===
      gMusicGain = audioCtx.createGain();
      gMusicGain.gain.value = 0.03;
      gMusicGain.connect(gMasterGain);
      gMusicGain.connect(gConvolver);

      // Chord: Cm9 — C, Eb, G, Bb, D  (cinematic space feel)
      const padNotes = [130.81, 155.56, 196.00, 233.08, 293.66];
      padNotes.forEach(freq => {
        const osc = audioCtx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = freq;
        // gentle vibrato via LFO
        const lfo = audioCtx.createOscillator();
        lfo.frequency.value = 0.3 + Math.random() * 0.4;
        const lfoG = audioCtx.createGain();
        lfoG.gain.value = freq * 0.003; // very subtle
        lfo.connect(lfoG).connect(osc.frequency);
        lfo.start();

        const padFilter = audioCtx.createBiquadFilter();
        padFilter.type = 'lowpass';
        padFilter.frequency.value = 600 + Math.random() * 200;
        padFilter.Q.value = 0.5;

        osc.connect(padFilter).connect(gMusicGain);
        osc.start();
        gMusicNodes.push(osc, lfo);
      });

      // Sub-bass pulse (very gentle sine)
      const subOsc = audioCtx.createOscillator();
      subOsc.type = 'sine';
      subOsc.frequency.value = 55;
      const subG = audioCtx.createGain();
      subG.gain.value = 0.04;
      subOsc.connect(subG).connect(gMasterGain);
      subOsc.start();
      gMusicNodes.push(subOsc);

    } catch (e) { console.log('Game audio init error:', e); }
  }

  function stopGameAudio() {
    gEngineNodes.forEach(n => { try { n.stop(); } catch (e) { } });
    gEngineNodes = [];
    gMusicNodes.forEach(n => { try { n.stop(); } catch (e) { } });
    gMusicNodes = [];
    gEngineGain = null; gMusicGain = null;
    if (gConvolver) { try { gConvolver.disconnect(); } catch (e) { } gConvolver = null; }
    if (gMasterGain) { try { gMasterGain.disconnect(); } catch (e) { } gMasterGain = null; }
  }

  function playImpactSound() {
    if (!audioCtx || !gMasterGain) return;
    try {
      const now = audioCtx.currentTime;
      // Deep thud (sine, not square)
      const thud = audioCtx.createOscillator();
      thud.type = 'sine';
      thud.frequency.setValueAtTime(120, now);
      thud.frequency.exponentialRampToValueAtTime(30, now + 0.25);
      const thudG = audioCtx.createGain();
      thudG.gain.setValueAtTime(0.2, now);
      thudG.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      thud.connect(thudG).connect(gMasterGain);
      thud.start(now); thud.stop(now + 0.4);

      // Soft crunch (filtered noise with fast decay)
      const buf = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.2, audioCtx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1);
      const noise = audioCtx.createBufferSource(); noise.buffer = buf;
      const nF = audioCtx.createBiquadFilter(); nF.type = 'bandpass'; nF.frequency.value = 800; nF.Q.value = 1;
      const nG = audioCtx.createGain();
      nG.gain.setValueAtTime(0.12, now);
      nG.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      noise.connect(nF).connect(nG).connect(gMasterGain);
      noise.connect(nF).connect(nG).connect(gConvolver);
      noise.start(now);
    } catch (e) { }
  }

  function playPickupSound() {
    if (!audioCtx || !gMasterGain) return;
    try {
      const now = audioCtx.currentTime;
      // Musical arpeggio chime — three quick ascending notes
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = freq;
        const g = audioCtx.createGain();
        g.gain.setValueAtTime(0, now + i * 0.06);
        g.gain.linearRampToValueAtTime(0.08, now + i * 0.06 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.25);
        osc.connect(g).connect(gMasterGain);
        osc.connect(g).connect(gConvolver);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.3);
      });
    } catch (e) { }
  }

  function playNearMissSound() {
    if (!audioCtx || !gMasterGain) return;
    try {
      const now = audioCtx.currentTime;
      // Soft whoosh (filtered noise sweep)
      const buf = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.3, audioCtx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1);
      const src = audioCtx.createBufferSource(); src.buffer = buf;
      const f = audioCtx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 3;
      f.frequency.setValueAtTime(2000, now);
      f.frequency.exponentialRampToValueAtTime(400, now + 0.2);
      const g = audioCtx.createGain();
      g.gain.setValueAtTime(0.06, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      src.connect(f).connect(g).connect(gMasterGain);
      src.start(now);
    } catch (e) { }
  }

  function playGameOverSound() {
    if (!audioCtx || !gMasterGain) return;
    try {
      const now = audioCtx.currentTime;
      // Cinematic descending chord dissolve
      const notes = [392, 349.23, 311.13, 261.63]; // G, F, Eb, C — minor descent
      notes.forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = freq;
        const g = audioCtx.createGain();
        const t = now + i * 0.3;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.07, t + 0.05);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.8);
        osc.connect(g).connect(gMasterGain);
        osc.connect(g).connect(gConvolver);
        osc.start(t); osc.stop(t + 1);
      });
      // Mournful low pad
      const pad = audioCtx.createOscillator();
      pad.type = 'triangle';
      pad.frequency.value = 130.81;
      const padG = audioCtx.createGain();
      padG.gain.setValueAtTime(0, now);
      padG.gain.linearRampToValueAtTime(0.05, now + 0.5);
      padG.gain.exponentialRampToValueAtTime(0.001, now + 2.5);
      const padF = audioCtx.createBiquadFilter(); padF.type = 'lowpass'; padF.frequency.value = 300;
      pad.connect(padF).connect(padG).connect(gMasterGain);
      pad.connect(padF).connect(padG).connect(gConvolver);
      pad.start(now); pad.stop(now + 3);
    } catch (e) { }
  }

  // --- Initialize game scene ---
  function initGameScene() {
    // scene
    gScene = new THREE.Scene();
    gScene.fog = new THREE.FogExp2(0x000011, 0.003);

    // camera
    gCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    gCamera.position.set(0, 5, 12);
    gCamera.lookAt(0, 0, -20);

    // renderer
    gRenderer = new THREE.WebGLRenderer({ canvas: gameCanvas, antialias: true, alpha: false });
    gRenderer.setSize(window.innerWidth, window.innerHeight);
    gRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.5));
    gRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    gRenderer.toneMappingExposure = 1.4;
    gRenderer.outputEncoding = THREE.sRGBEncoding;

    // bloom — sharper threshold for crisper glow
    const renderPass = new THREE.RenderPass(gScene, gCamera);
    const bloomPass = new THREE.UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.5, 0.5
    );
    gComposer = new THREE.EffectComposer(gRenderer);
    gComposer.addPass(renderPass);
    gComposer.addPass(bloomPass);

    // lights — richer, more defined
    const ambient = new THREE.AmbientLight(0x334466, 0.6);
    gScene.add(ambient);
    const hemi = new THREE.HemisphereLight(0x6688cc, 0x221122, 0.4);
    gScene.add(hemi);
    const sun = new THREE.DirectionalLight(0xffeedd, 1.5);
    sun.position.set(50, 30, -60);
    gScene.add(sun);
    const rimLight = new THREE.DirectionalLight(0x4488ff, 0.6);
    rimLight.position.set(-30, -10, 40);
    gScene.add(rimLight);
    const fill = new THREE.PointLight(0x4488ff, 0.5, 250);
    fill.position.set(0, 10, 10);
    gScene.add(fill);

    // ship
    gShip = buildShip();
    gScene.add(gShip);

    // stars
    buildStarField();

    // tunnel guides
    buildTunnel();

    // nebula background planes
    for (let i = 0; i < 8; i++) {
      const nGeo = new THREE.PlaneGeometry(200, 200);
      const nCol = [0x1a0033, 0x001133, 0x0a1a33, 0x110022][i % 4];
      const nMat = new THREE.MeshBasicMaterial({ color: nCol, transparent: true, opacity: 0.06, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });
      const nMesh = new THREE.Mesh(nGeo, nMat);
      nMesh.position.set((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 60, -200 - i * 40);
      nMesh.rotation.set(Math.random(), Math.random(), Math.random());
      gScene.add(nMesh);
    }

    gClock = new THREE.Clock();
  }

  // --- Cleanup ---
  function cleanupGame() {
    gRunning = false;
    if (gAnimId) cancelAnimationFrame(gAnimId);
    gAnimId = null;
    stopGameAudio();
    gAsteroids = [];
    gEnergies = [];
    gStars = [];
    gExplosions = [];
    if (gScene) {
      while (gScene.children.length > 0) {
        const c = gScene.children[0];
        gScene.remove(c);
        if (c.geometry) c.geometry.dispose();
        if (c.material) {
          if (Array.isArray(c.material)) c.material.forEach(m => m.dispose());
          else c.material.dispose();
        }
      }
    }
    if (gRenderer) { gRenderer.dispose(); gRenderer = null; }
    if (gComposer) { gComposer = null; }
    gScene = null; gCamera = null;
  }

  // --- Game input ---
  function onGameKeyDown(e) {
    if (!gRunning) return;
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') gInput.left = true;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') gInput.right = true;
    if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') gInput.up = true;
    if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') gInput.down = true;
    if (e.key === 'Shift') gInput.boost = true;
    if (e.key === 'v' || e.key === 'V') toggleCockpitView();
    if (e.key === 'Escape') { gameOver(); }
  }
  function onGameKeyUp(e) {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') gInput.left = false;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') gInput.right = false;
    if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') gInput.up = false;
    if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') gInput.down = false;
    if (e.key === 'Shift') gInput.boost = false;
  }

  // --- Game touch controls (mobile) ---
  const gameTouchUI = document.getElementById('game-touch-controls');
  const gameTouchStick = document.getElementById('game-touch-stick');
  const gameTouchKnob = document.getElementById('game-touch-knob');
  const gameTouchBoost = document.getElementById('game-touch-boost');
  const gameTouchView = document.getElementById('game-touch-view');
  const gameTouchExit = document.getElementById('game-touch-exit');
  const isGameTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

  function showGameTouch() { if (isGameTouch && gameTouchUI) gameTouchUI.classList.add('active'); }
  function hideGameTouch() { if (gameTouchUI) gameTouchUI.classList.remove('active'); }

  if (isGameTouch && gameTouchStick) {
    let gStickTouchId = null;

    gameTouchStick.addEventListener('touchstart', e => {
      e.preventDefault();
      gStickTouchId = e.changedTouches[0].identifier;
      gameTouchKnob.style.transition = 'none';
    }, { passive: false });

    gameTouchStick.addEventListener('touchmove', e => {
      e.preventDefault();
      if (gStickTouchId === null) return;
      const rect = gameTouchStick.getBoundingClientRect();
      const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
      const radius = rect.width / 2;
      let touch = null;
      for (let i = 0; i < e.touches.length; i++) {
        if (e.touches[i].identifier === gStickTouchId) { touch = e.touches[i]; break; }
      }
      if (!touch) return;
      let dx = (touch.clientX - cx) / radius, dy = (touch.clientY - cy) / radius;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 1) { dx /= dist; dy /= dist; }
      gameTouchKnob.style.left = (50 + dx * 38) + '%';
      gameTouchKnob.style.top = (50 + dy * 38) + '%';
      // Deadzone 0.2
      gInput.left = dx < -0.2;
      gInput.right = dx > 0.2;
      gInput.up = dy < -0.2;
      gInput.down = dy > 0.2;
    }, { passive: false });

    function resetGameStick() {
      gStickTouchId = null;
      gInput.left = gInput.right = gInput.up = gInput.down = false;
      gameTouchKnob.style.transition = 'left 0.15s, top 0.15s';
      gameTouchKnob.style.left = '50%';
      gameTouchKnob.style.top = '50%';
    }

    gameTouchStick.addEventListener('touchend', e => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === gStickTouchId) { resetGameStick(); break; }
      }
    });
    gameTouchStick.addEventListener('touchcancel', resetGameStick);

    // Boost button
    gameTouchBoost.addEventListener('touchstart', e => {
      e.preventDefault(); gInput.boost = true;
      gameTouchBoost.classList.add('pressed');
    }, { passive: false });
    gameTouchBoost.addEventListener('touchend', () => {
      gInput.boost = false;
      gameTouchBoost.classList.remove('pressed');
    });
    gameTouchBoost.addEventListener('touchcancel', () => {
      gInput.boost = false;
      gameTouchBoost.classList.remove('pressed');
    });

    // View toggle button
    gameTouchView.addEventListener('touchstart', e => {
      e.preventDefault();
      if (typeof toggleCockpitView === 'function') toggleCockpitView();
    }, { passive: false });

    // Exit button
    gameTouchExit.addEventListener('touchstart', e => {
      e.preventDefault();
      if (gRunning) gameOver();
    }, { passive: false });
  }

  // --- Spawn management ---
  function spawnWave(dt) {
    if (gLevelTransition) return;

    gSpawnTimer -= dt;
    if (gSpawnTimer <= 0) {
      // spawn cluster of asteroids
      const lvlRate = (gLevel < LEVELS.length) ? LEVELS[gLevel].asteroidRate : 3;
      const count = Math.floor(2 + gDifficulty * 2 * lvlRate + gTotalTime * 0.01);
      for (let i = 0; i < Math.min(count, 15); i++) {
        const ast = createAsteroid(SPAWN_Z - Math.random() * 40);
        gScene.add(ast);
        gAsteroids.push(ast);
      }
      gSpawnTimer = Math.max(0.3, 1.2 - gTotalTime * 0.008) / gDifficulty;
    }

    gEnergySpawnTimer -= dt;
    if (gEnergySpawnTimer <= 0) {
      const e = createEnergy(SPAWN_Z);
      gScene.add(e);
      gEnergies.push(e);
      gEnergySpawnTimer = 3 + Math.random() * 4;
    }

    // Spawn star collectibles
    gStarSpawnTimer -= dt;
    if (gStarSpawnTimer <= 0) {
      const star = createStar(SPAWN_Z);
      gScene.add(star);
      gStars.push(star);
      const lvlStarRate = (gLevel < LEVELS.length) ? LEVELS[gLevel].starRate : 2;
      gStarSpawnTimer = lvlStarRate + Math.random() * 3;
    }
  }

  // --- Collision detection ---
  function checkCollisions() {
    const shipBox = new THREE.Box3().setFromCenterAndSize(
      new THREE.Vector3(gShipX, gShipY, SHIP_Z),
      new THREE.Vector3(2.0, 1.2, 2.5)
    );

    // Asteroids
    for (let i = gAsteroids.length - 1; i >= 0; i--) {
      const a = gAsteroids[i];
      const aPos = a.position;
      const aSize = a.userData.size;
      const dist = Math.sqrt((aPos.x - gShipX) ** 2 + (aPos.y - gShipY) ** 2 + (aPos.z - SHIP_Z) ** 2);

      // near miss detection (within 2x radius but not colliding)
      if (dist < aSize * 2.5 && dist > aSize * 1.1 && aPos.z > SHIP_Z - 5 && aPos.z < SHIP_Z + 3) {
        if (gNearMissTimer <= 0) {
          gComboCount++;
          gComboTimer = 2;
          gScore += 50 * gComboCount;
          showCombo(gComboCount);
          playNearMissSound();
          gNearMissTimer = 0.5;
        }
      }

      // collision (invulnerable during level transitions) — tighter hitbox matches visual
      const aBox = new THREE.Box3().setFromCenterAndSize(aPos, new THREE.Vector3(aSize * 1.0, aSize * 1.0, aSize * 1.0));
      if (shipBox.intersectsBox(aBox) && !gLevelTransition) {
        // damage
        gHealth -= 25 + gDifficulty * 5;
        gScore = Math.max(0, gScore - 100);
        gComboCount = 0;
        gShake = 0.5;
        playImpactSound();
        spawnExplosion(aPos.clone());
        showDamage();
        showWarning();

        // remove asteroid
        gScene.remove(a);
        if (a.geometry) a.geometry.dispose();
        if (a.material) a.material.dispose();
        gAsteroids.splice(i, 1);

        if (gHealth <= 0) {
          gHealth = 0;
          gameOver();
          return;
        }
      }
    }

    // Energy pickups — generous collection radius
    for (let i = gEnergies.length - 1; i >= 0; i--) {
      const e = gEnergies[i];
      const dist = e.position.distanceTo(new THREE.Vector3(gShipX, gShipY, SHIP_Z));
      if (dist < 4.5) {
        gScore += 200;
        gBoostFuel = Math.min(100, gBoostFuel + 25);
        gHealth = Math.min(100, gHealth + 5);
        playPickupSound();
        gScene.remove(e);
        gEnergies.splice(i, 1);
      }
    }

    // Star pickups — generous collection radius with magnetic pull
    for (let i = gStars.length - 1; i >= 0; i--) {
      const s = gStars[i];
      const dist = s.position.distanceTo(new THREE.Vector3(gShipX, gShipY, SHIP_Z));
      // magnetic pull: stars drift toward ship when close
      if (dist < 8 && dist > 4.5) {
        s.position.x += (gShipX - s.position.x) * 0.03;
        s.position.y += (gShipY - s.position.y) * 0.03;
      }
      if (dist < 4.5) {
        const ud = s.userData;
        gScore += ud.points;
        if (ud.boostFuel) gBoostFuel = Math.min(100, gBoostFuel + ud.boostFuel);
        if (ud.health) gHealth = Math.min(100, gHealth + ud.health);
        playStarPickupSound(ud.type);
        showStarPickup(ud.type, ud.points);
        gScene.remove(s);
        gStars.splice(i, 1);
      }
    }
  }

  // --- UI helpers ---
  function showDamage() {
    gameDamage.classList.add('active');
    setTimeout(() => gameDamage.classList.remove('active'), 300);
  }
  function showWarning() {
    ghudWarning.style.display = 'block';
    setTimeout(() => ghudWarning.style.display = 'none', 600);
  }
  function showCombo(n) {
    ghudCombo.textContent = n > 1 ? `NEAR MISS x${n} +${50 * n}` : `NEAR MISS +50`;
    ghudCombo.style.display = 'block';
    ghudCombo.style.animation = 'none';
    ghudCombo.offsetHeight; // reflow
    ghudCombo.style.animation = 'comboPopup 0.8s ease-out forwards';
    setTimeout(() => { ghudCombo.style.display = 'none'; }, 800);
  }

  // --- Update HUD ---
  function updateHUD() {
    ghudScore.textContent = Math.floor(gScore);
    ghudDist.textContent = (gDistance / 1000).toFixed(2) + ' KM';
    ghudHealth.style.width = gHealth + '%';
    ghudHealth.style.background = gHealth > 50 ? '#0f0' : gHealth > 25 ? '#fa0' : '#f00';
    ghudSpeed.textContent = Math.floor(gSpeed);
    ghudBoost.style.width = gBoostFuel + '%';
    // Level progress
    if (gLevel < LEVELS.length) {
      const lvl = LEVELS[gLevel];
      const lvlDistKm = gLevelDist / 1000;
      const pct = Math.min(100, (lvlDistKm / lvl.distKm) * 100);
      ghudLevel.textContent = lvl.name;
      ghudLevelFill.style.width = pct + '%';
      ghudLevelDist.textContent = lvlDistKm.toFixed(1) + ' / ' + lvl.distKm + ' KM';
    }
  }

  // --- Level progression ---
  function checkLevelProgress() {
    if (gWon || gLevel >= LEVELS.length) return;
    const lvl = LEVELS[gLevel];
    const lvlDistKm = gLevelDist / 1000;
    if (lvlDistKm >= lvl.distKm) {
      gLevel++;
      gLevelDist = 0;
      if (gLevel >= LEVELS.length) {
        gWon = true;
        triggerVictory();
      } else {
        showLevelUp(gLevel);
      }
    }
  }

  function showLevelUp(lvlIdx) {
    const lvl = LEVELS[lvlIdx];
    document.getElementById('glvl-title').textContent = lvl.name.split(' — ')[0];
    document.getElementById('glvl-sub').textContent = lvl.desc.toUpperCase();
    gameLevelUp.classList.remove('active');
    void gameLevelUp.offsetHeight;
    gameLevelUp.classList.add('active');
    setTimeout(() => gameLevelUp.classList.remove('active'), 2600);

    // Trigger speed jump level transition
    gLevelTransition = true;
    gTransitionTimer = 2.5;
    gPreTransitionSpeed = gSpeed > 0 ? gSpeed : gBaseSpeed;

    // Play level-up chime
    if (audioCtx && gMasterGain) {
      try {
        const now = audioCtx.currentTime;
        [392, 523.25, 659.25, 783.99].forEach((f, i) => {
          const o = audioCtx.createOscillator(); o.type = 'sine'; o.frequency.value = f;
          const g = audioCtx.createGain();
          g.gain.setValueAtTime(0, now + i * 0.1);

          g.gain.linearRampToValueAtTime(0.07, now + i * 0.1 + 0.03);
          g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.4);
          o.connect(g).connect(gMasterGain);
          o.start(now + i * 0.1); o.stop(now + i * 0.1 + 0.5);
        });
      } catch (e) { }
    }
  }

  function triggerVictory() {
    gRunning = false;
    stopGameAudio();
    const finalScore = Math.floor(gScore);
    if (finalScore > gHighScore) {
      gHighScore = finalScore;
      localStorage.setItem('asteroidEscapeHigh', gHighScore.toString());
    }
    // Victory sound — triumphant ascending chord
    if (audioCtx) {
      try {
        const now = audioCtx.currentTime;
        [261.63, 329.63, 392, 523.25, 659.25, 783.99].forEach((f, i) => {
          const o = audioCtx.createOscillator(); o.type = 'sine'; o.frequency.value = f;
          const g = audioCtx.createGain();
          g.gain.setValueAtTime(0, now + i * 0.12);
          g.gain.linearRampToValueAtTime(0.1, now + i * 0.12 + 0.05);
          g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 1.5);
          o.connect(g).connect(audioCtx.destination);
          o.start(now + i * 0.12); o.stop(now + i * 0.12 + 2);
        });
      } catch (e) { }
    }
    gameHud.classList.remove('active');
    hideGameTouch();
    document.getElementById('gvic-score').textContent = finalScore.toLocaleString();
    document.getElementById('gvic-dist').textContent = (gDistance / 1000).toFixed(1);
    document.getElementById('gvic-time').textContent = Math.floor(gTotalTime);
    document.getElementById('gvic-high').textContent = 'HIGH SCORE: ' + gHighScore.toLocaleString();
    gameVictoryScr.classList.add('active');
    if (typeof unlockAchievement === 'function') {
      unlockAchievement('asteroid_escape_win', '🏅 Commander', 'Completaste todas las 5 zonas en Asteroide Escape');
      if (gDifficulty >= 2.2) unlockAchievement('insane_winner', '👑 Legendary Pilot', 'Ganaste en dificultad Infernal');
    }
  }

  // --- Game loop ---
  function gameLoop() {
    if (!gRunning) return;
    gAnimId = requestAnimationFrame(gameLoop);

    const dt = Math.min(gClock.getDelta(), 0.05);
    gTotalTime += dt;

    // --- Movement ---
    const steerSpeed = 35 * dt;
    if (gInput.left) gShipX -= steerSpeed;
    if (gInput.right) gShipX += steerSpeed;
    if (gInput.up) gShipY += steerSpeed * 0.7;
    if (gInput.down) gShipY -= steerSpeed * 0.7;

    // clamp
    gShipX = Math.max(-LANE_W * 0.8, Math.min(LANE_W * 0.8, gShipX));
    gShipY = Math.max(-LANE_H * 0.6, Math.min(LANE_H * 0.6, gShipY));

    // boost
    if (gInput.boost && gBoostFuel > 0) {
      gBoosting = true;
      gBoostFuel -= 30 * dt;
      gSpeed = gBaseSpeed * 2.0 * gDifficulty;
    } else {
      gBoosting = false;
      gSpeed = gBaseSpeed * gDifficulty * (1 + gTotalTime * 0.005);
      if (gBoostFuel < 100) gBoostFuel += 8 * dt;
    }
    gBoostFuel = Math.max(0, Math.min(100, gBoostFuel));

    // --- Level transition warp ---
    if (gLevelTransition) {
      gTransitionTimer -= dt;
      const warpMult = 3 + Math.sin(gTransitionTimer * 4) * 2;
      gSpeed = gPreTransitionSpeed * warpMult;
      const warpOvl = document.getElementById('game-warp-overlay');
      if (warpOvl && !warpOvl.classList.contains('active')) warpOvl.classList.add('active');
      if (gTransitionTimer <= 0) {
        gLevelTransition = false;
        gSpeed = gPreTransitionSpeed;
        if (warpOvl) warpOvl.classList.remove('active');
        applyLevelAmbiance();
      }
    }

    // distance + score
    const dz = gSpeed * dt;
    gDistance += dz;
    gScore += dz * 0.3 * gDifficulty;

    // update ship position + tilt
    gShipGroup.position.x += (gShipX - gShipGroup.position.x) * 8 * dt;
    gShipGroup.position.y += (gShipY - gShipGroup.position.y) * 8 * dt;
    gShipGroup.rotation.z = -(gShipX - gShipGroup.position.x) * 0.15;
    gShipGroup.rotation.x = (gShipY - gShipGroup.position.y) * 0.08;

    // trail effect
    const trail = gShipGroup.getObjectByName('trail');
    if (trail) {
      const tp = trail.geometry.attributes.position;
      for (let i = 0; i < tp.count; i++) {
        tp.setZ(i, tp.getZ(i) + dt * (gBoosting ? 30 : 10));
        if (tp.getZ(i) > 6) {
          tp.setXYZ(i, (Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.3, 2);
        }
      }
      tp.needsUpdate = true;
      trail.material.color.set(gBoosting ? 0x00aaff : 0xff4400);
      trail.material.opacity = gBoosting ? 0.9 : 0.6;
    }

    // engine audio — shift filter frequency for speed feel
    if (gEngineGain && gEngineGain._filter) {
      gEngineGain._filter.frequency.value = 80 + gSpeed * 0.5 + (gBoosting ? 150 : 0);
      gEngineGain.gain.value = 0.04 + (gBoosting ? 0.03 : 0);
    }
    // music pad evolves over time
    if (gMusicGain) {
      gMusicGain.gain.value = Math.min(0.045, 0.025 + gTotalTime * 0.0003);
    }

    // --- Move asteroids toward player ---
    for (let i = gAsteroids.length - 1; i >= 0; i--) {
      const a = gAsteroids[i];
      a.position.z += dz;
      a.position.x += a.userData.driftX * dt;
      a.position.y += a.userData.driftY * dt;
      a.rotation.x += a.userData.rotSpeed.x * dt;
      a.rotation.y += a.userData.rotSpeed.y * dt;
      a.rotation.z += a.userData.rotSpeed.z * dt;
      if (a.position.z > DESPAWN_Z) {
        gScene.remove(a);
        if (a.geometry) a.geometry.dispose();
        if (a.material) a.material.dispose();
        gAsteroids.splice(i, 1);
      }
    }

    // --- Move energies ---
    for (let i = gEnergies.length - 1; i >= 0; i--) {
      const e = gEnergies[i];
      e.position.z += dz;
      e.rotation.y += 2.5 * dt;
      if (e.position.z > DESPAWN_Z) {
        gScene.remove(e);
        gEnergies.splice(i, 1);
      }
    }

    // --- Move stars ---
    for (let i = gStars.length - 1; i >= 0; i--) {
      const s = gStars[i];
      s.position.z += dz;
      s.rotation.y += 3 * dt;
      if (s.userData.type === 'rainbow') {
        s.children.forEach((c, idx) => { if (idx > 0) c.rotation.z += (1 + idx) * dt; });
      }
      if (s.position.z > DESPAWN_Z) {
        gScene.remove(s);
        gStars.splice(i, 1);
      }
    }

    // --- Update explosions ---
    for (let i = gExplosions.length - 1; i >= 0; i--) {
      const ex = gExplosions[i];
      ex.userData.life -= dt * 2;
      if (ex.userData.life <= 0) {
        gScene.remove(ex);
        ex.geometry.dispose();
        ex.material.dispose();
        gExplosions.splice(i, 1);
        continue;
      }
      const pp = ex.geometry.attributes.position;
      for (let j = 0; j < pp.count; j++) {
        pp.setX(j, pp.getX(j) + ex.userData.vel[j].x * dt);
        pp.setY(j, pp.getY(j) + ex.userData.vel[j].y * dt);
        pp.setZ(j, pp.getZ(j) + ex.userData.vel[j].z * dt);
      }
      pp.needsUpdate = true;
      ex.material.opacity = ex.userData.life;
    }

    // --- Stars scroll ---
    if (gStarField) {
      const sp = gStarField.geometry.attributes.position;
      for (let i = 0; i < sp.count; i++) {
        let z = sp.getZ(i) + dz * 0.3;
        if (z > 50) z = -700 + Math.random() * 100;
        sp.setZ(i, z);
      }
      sp.needsUpdate = true;
    }

    // --- Tunnel scroll ---
    if (gTunnel) {
      gTunnel.children.forEach(ring => {
        ring.position.z += dz;
        if (ring.position.z > 20) ring.position.z -= 40 * 12;
        ring.material.opacity = 0.04 + Math.sin(gTotalTime * 2 + ring.position.z * 0.05) * 0.03;
      });
    }

    // --- Spawn ---
    spawnWave(dt);

    // --- Near miss timer ---
    if (gNearMissTimer > 0) gNearMissTimer -= dt;

    // --- Combo timer ---
    if (gComboTimer > 0) {
      gComboTimer -= dt;
      if (gComboTimer <= 0) gComboCount = 0;
    }

    // --- Collisions ---
    checkCollisions();

    // --- Camera shake ---
    let camOffX = 0, camOffY = 0;
    if (gShake > 0) {
      gShake -= dt * 3;
      camOffX = (Math.random() - 0.5) * gShake * 3;
      camOffY = (Math.random() - 0.5) * gShake * 3;
    }

    // --- Camera follow ---
    if (gCockpitView) {
      gCamera.position.x += (gShipX - gCamera.position.x + camOffX) * 8 * dt;
      gCamera.position.y += ((gShipY + 0.5) - gCamera.position.y + camOffY) * 8 * dt;
      gCamera.position.z = SHIP_Z + 1;
      gCamera.lookAt(gShipX, gShipY, SHIP_Z - 100);
      // Update cockpit dashboard
      const cpSpeed = document.getElementById('cp-speed');
      const cpHull = document.getElementById('cp-hull');
      const cpDist = document.getElementById('cp-dist');
      const cpScore = document.getElementById('cp-score');
      if (cpSpeed) cpSpeed.textContent = Math.floor(gSpeed);
      if (cpHull) cpHull.textContent = Math.floor(gHealth) + '%';
      if (cpDist) cpDist.textContent = (gDistance / 1000).toFixed(2);
      if (cpScore) cpScore.textContent = Math.floor(gScore);
    } else {
      gCamera.position.x += (gShipX * 0.3 - gCamera.position.x + camOffX) * 4 * dt;
      gCamera.position.y += ((gShipY * 0.3 + 5) - gCamera.position.y + camOffY) * 4 * dt;
      gCamera.position.z += (12 - gCamera.position.z) * 4 * dt;
      gCamera.lookAt(gShipX * 0.5, gShipY * 0.3, SHIP_Z - 30);
    }

    // --- HUD ---
    updateHUD();

    // --- Level check ---
    gLevelDist += dz;
    checkLevelProgress();

    // --- Ship animations (engine glow, shield pulse, antenna blink) ---
    if (gShipGroup) {
      gShipGroup.traverse(child => {
        if (child.name === 'engineNozzle') {
          child.material.opacity = 0.6 + Math.sin(gTotalTime * 8) * 0.2 + (gBoosting ? 0.2 : 0);
          child.material.color.setHex(gBoosting ? 0x44aaff : 0xff6600);
        }
        if (child.name === 'shield') {
          child.material.opacity = 0.01 + Math.sin(gTotalTime * 2) * 0.01 + (gHealth < 40 ? 0.03 : 0);
        }
        if (child.name === 'antTip') {
          child.material.color.setHex(Math.sin(gTotalTime * 4) > 0 ? 0xff4444 : 0x441111);
        }
      });
    }

    // --- Render ---
    gComposer.render();
  }

  // --- Game over (death) ---
  function gameOver() {
    if (gWon) return;
    gRunning = false;
    if (gCockpitView) toggleCockpitView();
    stopGameAudio();
    playGameOverSound();

    const finalScore = Math.floor(gScore);
    if (finalScore > gHighScore) {
      gHighScore = finalScore;
      localStorage.setItem('asteroidEscapeHigh', gHighScore.toString());
    }

    document.getElementById('game-over-title').textContent = 'MISSION FAILED';
    gameFinalScore.textContent = finalScore.toLocaleString();
    gameFinalDist.textContent = 'DISTANCE: ' + (gDistance / 1000).toFixed(2) + ' KM';
    gameFinalLevel.textContent = 'Alcanzaste: ' + (LEVELS[gLevel] ? LEVELS[gLevel].name : 'ZONE ' + (gLevel + 1));
    gameHighScore.textContent = 'HIGH SCORE: ' + gHighScore.toLocaleString();

    gameHud.classList.remove('active');
    hideGameTouch();
    gameOverScr.classList.add('active');

    // achievement check
    if (typeof unlockAchievement === 'function') {
      unlockAchievement('asteroid_escape', '🪨 Asteroid Dodger', 'Jugaste al juego Asteroide Escape');
      if (gDistance > 50000) unlockAchievement('deep_space', '🌌 Deep Space', 'Viajaste 50 km en Asteroide Escape');
      if (gDifficulty >= 2.2 && gDistance > 20000) unlockAchievement('insane_pilot', '💀 Insane Pilot', 'Sobreviviste 20 km en Infernal');
      if (gComboCount >= 5) unlockAchievement('near_miss_master', '😎 Near Miss Master', 'Conseguiste combo de 5 casi impactos');
      if (finalScore >= 10000) unlockAchievement('score_10k', '🏆 Ten Thousand', 'Obtuviste 10,000+ puntos en Asteroide Escape');
    }
  }

  // --- Public API ---
  window.launchGame = function () {
    // pause main scene audio
    if (typeof stopMusic === 'function') try { stopMusic(); } catch (e) { }

    // hide main UI elements
    document.getElementById('controls-panel').style.display = 'none';
    document.getElementById('planet-nav').style.display = 'none';
    document.getElementById('header').style.display = 'none';
    if (document.getElementById('minimap-container')) document.getElementById('minimap-container').style.display = 'none';
    if (document.getElementById('hint')) document.getElementById('hint').style.display = 'none';

    // show game overlay and start screen
    gameOverlay.classList.add('active');
    gameStartScr.classList.add('active');
    gameOverScr.classList.remove('active');
    gameHud.classList.remove('active');
  };

  window.setGameDifficulty = function (btn) {
    document.querySelectorAll('.game-speed-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    gDifficulty = parseFloat(btn.dataset.speed);
  };

  window.startGameRound = function () {
    // cleanup previous if any
    cleanupGame();

    // reset state
    gScore = 0; gDistance = 0; gHealth = 100; gBoostFuel = 100;
    gSpeed = gBaseSpeed; gTotalTime = 0; gComboCount = 0; gComboTimer = 0;
    gShipX = 0; gShipY = 0; gShake = 0; gNearMissTimer = 0;
    gSpawnTimer = 0.5; gEnergySpawnTimer = 2;
    gStarSpawnTimer = 2; gCockpitView = false; gLevelTransition = false; gTransitionTimer = 0;
    gLevel = 0; gLevelDist = 0; gWon = false;
    gInput = { left: false, right: false, up: false, down: false, boost: false };

    // init scene
    initGameScene();
    applyLevelAmbiance();

    // Reset cockpit and warp overlays
    const cockpitOvl = document.getElementById('cockpit-overlay');
    if (cockpitOvl) cockpitOvl.classList.remove('active');
    const warpOvl = document.getElementById('game-warp-overlay');
    if (warpOvl) warpOvl.classList.remove('active');
    const viewBtn = document.getElementById('ghud-view-btn');
    if (viewBtn) viewBtn.textContent = '\u25C9 COCKPIT VIEW [V]';
    if (gShipGroup) gShipGroup.visible = true;

    // UI
    gameStartScr.classList.remove('active');
    gameOverScr.classList.remove('active');
    if (gameVictoryScr) gameVictoryScr.classList.remove('active');
    if (gameLevelUp) gameLevelUp.classList.remove('active');
    gameHud.classList.add('active');
    showGameTouch();

    // pre-spawn some asteroids ahead
    for (let i = 0; i < 30; i++) {
      const a = createAsteroid(SPAWN_Z + Math.random() * 200);
      gScene.add(a);
      gAsteroids.push(a);
    }

    // keyboard
    window.addEventListener('keydown', onGameKeyDown);
    window.addEventListener('keyup', onGameKeyUp);

    // audio
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    startGameAudio();

    // GO!
    gRunning = true;
    gClock.start();
    gameLoop();
  };

  window.exitGame = function () {
    gRunning = false;
    if (gCockpitView) { gCockpitView = false; const co = document.getElementById('cockpit-overlay'); if (co) co.classList.remove('active'); if (gShipGroup) gShipGroup.visible = true; }
    const wo = document.getElementById('game-warp-overlay'); if (wo) wo.classList.remove('active');
    cleanupGame();

    window.removeEventListener('keydown', onGameKeyDown);
    window.removeEventListener('keyup', onGameKeyUp);

    // hide game UI
    gameOverlay.classList.remove('active');
    gameStartScr.classList.remove('active');
    gameOverScr.classList.remove('active');
    gameHud.classList.remove('active');
    hideGameTouch();
    if (gameVictoryScr) gameVictoryScr.classList.remove('active');
    if (gameLevelUp) gameLevelUp.classList.remove('active');

    // restore main UI
    document.getElementById('controls-panel').style.display = '';
    document.getElementById('planet-nav').style.display = '';
    document.getElementById('header').style.display = '';
    if (document.getElementById('minimap-container')) document.getElementById('minimap-container').style.display = '';
    if (document.getElementById('hint')) document.getElementById('hint').style.display = '';
  };

  // Handle resize during game
  window.addEventListener('resize', () => {
    if (gCamera && gRenderer && gComposer) {
      gCamera.aspect = window.innerWidth / window.innerHeight;
      gCamera.updateProjectionMatrix();
      gRenderer.setSize(window.innerWidth, window.innerHeight);
      gComposer.setSize(window.innerWidth, window.innerHeight);
    }
  });
})();
