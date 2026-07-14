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
  const NB_PARTICLES = 3000; // Aumentado para llenar el museo
  
  const positions = new Float32Array(NB_PARTICLES * 3);
  const randoms = new Float32Array(NB_PARTICLES * 4);
  const sizes = new Float32Array(NB_PARTICLES);
  
  for(let i = 0; i < NB_PARTICLES; i++) {
    // Distribución esférica como estaba antes (radio de 300 a 800)
    const r = 300 + Math.random() * 500;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
    
    randoms[i * 4] = Math.random();
    randoms[i * 4 + 1] = Math.random();
    randoms[i * 4 + 2] = Math.random();
    randoms[i * 4 + 3] = Math.random();
    
    sizes[i] = Math.random() * 40 + 20;
  }
  
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 4));
  geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  
  starUniforms = {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    uCameraDist: { value: 0 }
  };
  
  const mat = new THREE.ShaderMaterial({
    uniforms: starUniforms,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    vertexShader: `
      attribute vec4 aRandom;
      attribute float aSize;
      uniform float uTime;
      uniform float uCameraDist;
      
      varying vec4 vRandom;
      varying float vSize;
      varying float vDistFactor;
      
      void main() {
        vRandom = aRandom;
        vSize = aSize;
        
        // Calculate how far camera is to apply dimming/shrinking
        vDistFactor = smoothstep(100.0, 300.0, uCameraDist);
        
        vec3 pos = position;
        pos.y += sin(uTime * 0.5 + position.x * 0.1) * 1.0;
        pos.x += cos(uTime * 0.3 + position.y * 0.1) * 0.8;
        pos.z += sin(uTime * 0.2 + position.z * 0.1) * 0.9;
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        // Shrink stars when close to planetarium
        float sizeFactor = mix(0.55, 1.0, vDistFactor);
        gl_PointSize = (aSize * sizeFactor) * (300.0 / -mvPosition.z);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying vec4 vRandom;
      varying float vSize;
      varying float vDistFactor;
      
      void main() {
        // Form star shape
        vec2 center = gl_PointCoord - 0.5;
        
        // Distances
        float d = length(center);
        float dx = length(center * vec2(8.0, 0.4));
        float dy = length(center * vec2(0.4, 8.0));
        float dDiag1 = length(mat2(0.707, -0.707, 0.707, 0.707) * center * vec2(8.0, 0.4));
        float dDiag2 = length(mat2(0.707, 0.707, -0.707, 0.707) * center * vec2(8.0, 0.4));
        
        // Sum intensities
        float starIntensity = 0.0;
        starIntensity += 0.05 / d;
        starIntensity += 0.02 / dx;
        starIntensity += 0.02 / dy;
        starIntensity += 0.01 / dDiag1;
        starIntensity += 0.01 / dDiag2;
        
        // Color palette based on vRandom.x (White, silver, and blue tones)
        vec3 color;
        if(vRandom.x < 0.3) color = vec3(1.0, 1.0, 1.0); // Pure white
        else if(vRandom.x < 0.6) color = vec3(0.85, 0.88, 0.92); // Silver
        else if(vRandom.x < 0.85) color = vec3(0.6, 0.8, 1.0); // Light blue
        else color = vec3(0.8, 0.9, 1.0); // Silver-blue
        
        // Base brightness
        float brightness = starIntensity * (vRandom.y * 0.5 + 0.5);
        
        // Twinkle
        float twinkle = sin(uTime * (vRandom.z * 5.0 + 2.0) + vRandom.w * 10.0) * 0.5 + 0.5;
        brightness *= mix(0.3, 1.0, twinkle);
        
        // Dim stars when close to planetarium
        brightness *= mix(0.45, 1.0, vDistFactor);
        
        // Soft edges
        float alpha = smoothstep(0.5, 0.0, d);
        
        gl_FragColor = vec4(color * brightness, alpha);
      }
    `
  });
  
  return new THREE.Points(geo, mat);
}
scene.add(createStarfield());

// ── PLANETS & OBJECTS ──
const planetObjects = {};
const orbitLines = [];
let animationTime = 0;
const sunClock = new THREE.Clock();

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

  const group = new THREE.Group();
  group.add(line);
  group.userData = { isOrbitLine: true, planetKey, radius, line, color: colorHex };

  orbitLines.push(group);
  return group;
}

// Update orbit line glow
function updateOrbitLines(time) {
  orbitLines.forEach(og => {
    if (!og.userData || !og.visible) return;
    const { planetKey, radius, line } = og.userData;
    if (!planetKey) return;

    const pulse = Math.sin(time * 1.5 + radius * 0.1) * 0.15 + 0.25;
    line.material.opacity = pulse;
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

  const vertexShader = `
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;
  const fragmentShader = `
precision highp float;
uniform float iTime;
uniform mat3 uCameraRotation;
varying vec2 vUv;
vec4 hash4(vec4 n){return fract(sin(n)*1399763.5453123);}
float noise4q(vec4 x){
vec4 n3=vec4(0,0.25,0.5,0.75);
vec4 p2=floor(x.wwww+n3);
vec4 b=floor(x.xxxx+n3)+floor(x.yyyy+n3)*157.0+floor(x.zzzz+n3)*113.0;
vec4 p1=b+fract(p2*0.00390625)*vec4(164352.0,-164352.0,163840.0,-163840.0);
p2=b+fract((p2+1.0)*0.00390625)*vec4(164352.0,-164352.0,163840.0,-163840.0);
vec4 f1=fract(x.xxxx+n3);
vec4 f2=fract(x.yyyy+n3);
f1=f1*f1*(3.0-2.0*f1);
f2=f2*f2*(3.0-2.0*f2);
vec4 n1=vec4(0,1.0,157.0,158.0);
vec4 n2=vec4(113.0,114.0,270.0,271.0);
vec4 vs1=mix(hash4(p1),hash4(n1.yyyy+p1),f1);
vec4 vs2=mix(hash4(n1.zzzz+p1),hash4(n1.wwww+p1),f1);
vec4 vs3=mix(hash4(p2),hash4(n1.yyyy+p2),f1);
vec4 vs4=mix(hash4(n1.zzzz+p2),hash4(n1.wwww+p2),f1);
vs1=mix(vs1,vs2,f2);vs3=mix(vs3,vs4,f2);
vs2=mix(hash4(n2.xxxx+p1),hash4(n2.yyyy+p1),f1);
vs4=mix(hash4(n2.zzzz+p1),hash4(n2.wwww+p1),f1);
vs2=mix(vs2,vs4,f2);
vs4=mix(hash4(n2.xxxx+p2),hash4(n2.yyyy+p2),f1);
vec4 vs5=mix(hash4(n2.zzzz+p2),hash4(n2.wwww+p2),f1);
vs4=mix(vs4,vs5,f2);
f1=fract(x.zzzz+n3);f2=fract(x.wwww+n3);
f1=f1*f1*(3.0-2.0*f1);f2=f2*f2*(3.0-2.0*f2);
vs1=mix(vs1,vs2,f1);vs3=mix(vs3,vs4,f1);vs1=mix(vs1,vs3,f2);
float r=dot(vs1,vec4(0.25));
return r*r*(3.0-2.0*r);
}
float noiseSpere(vec3 ray,vec3 pos,float r,mat3 mr,float zoom,vec3 subnoise,float anim){
float b=dot(ray,pos);
float c=dot(pos,pos)-b*b;
vec3 r1=vec3(0.0);
float s=0.0;
float d=0.03125;
float d2=zoom/(d*d);
float ar=5.0;
for(int i=0;i<3;i++){
float rq=r*r;
if(c<rq){
float l1=sqrt(rq-c);
r1=ray*(b-l1)-pos;
r1=r1*mr;
s+=abs(noise4q(vec4(r1*d2+subnoise*ar,anim*ar))*d);
}
ar-=2.0;d*=4.0;d2*=0.0625;r=r-r*0.02;
}
return s;
}
float ring(vec3 ray,vec3 pos,float r,float size){
float b=dot(ray,pos);
float c=dot(pos,pos)-b*b;
return max(0.0,1.0-size*abs(r-sqrt(c)));
}
float ringRayNoise(vec3 ray,vec3 pos,float r,float size,mat3 mr,float anim){
float b=dot(ray,pos);
vec3 pr=ray*b-pos;
float c=length(pr);
pr*=mr;pr=normalize(pr);
float s=max(0.0,1.0-size*abs(r-c));
float nd=noise4q(vec4(pr*1.0,-anim+c))*2.0;
nd=pow(nd,2.0);
float n=0.4;
float ns=1.0;
if(c>r){
n=noise4q(vec4(pr*10.0,-anim+c));
ns=noise4q(vec4(pr*50.0,-anim*2.5+c*2.0))*2.0;
}
n=n*n*nd*ns;
return pow(s,4.0)+s*s*n;
}
vec4 noiseSpace(vec3 ray,vec3 pos,float r,mat3 mr,float zoom,vec3 subnoise,float anim){
float b=dot(ray,pos);
float c=dot(pos,pos)-b*b;
vec3 r1=vec3(0.0);
float s=0.0;
float d=0.0625*1.5;
float d2=zoom/d;
float rq=r*r;
float l1=sqrt(abs(rq-c));
r1=(ray*(b-l1)-pos)*mr;
r1*=d2;
s+=abs(noise4q(vec4(r1+subnoise,anim))*d);
s+=abs(noise4q(vec4(r1*0.5+subnoise,anim))*d*2.0);
s+=abs(noise4q(vec4(r1*0.25+subnoise,anim))*d*4.0);
return vec4(s*2.0,
abs(noise4q(vec4(r1*0.1+subnoise,anim))),
abs(noise4q(vec4(r1*0.1+subnoise*6.0,anim))),
abs(noise4q(vec4(r1*0.1+subnoise*13.0,anim))));
}
float sphereZero(vec3 ray,vec3 pos,float r){
float b=dot(ray,pos);
float c=dot(pos,pos)-b*b;
return c<r*r?0.0:1.0;
}
void main(){
vec2 p=(vUv*2.0-1.0)*1.6;
float time=iTime;
vec3 ray=normalize(vec3(p,2.0));
vec3 pos=vec3(0.0,0.0,3.0);
mat3 mr=uCameraRotation;
float s1=noiseSpere(ray,pos,1.0,mr,0.5,vec3(0.0),time);
s1=pow(min(1.0,s1*2.4),2.0);
float s2=noiseSpere(ray,pos,1.0,mr,4.0,vec3(83.23,34.34,67.453),time);
s2=min(1.0,s2*2.2);
vec4 fragColor=vec4(mix(vec3(1.0,1.0,0.0),vec3(1.0),pow(s1,60.0))*s1,1.0);
fragColor+=vec4(mix(mix(vec3(1.0,0.0,0.0),vec3(1.0,0.0,1.0),pow(s2,2.0)),vec3(1.0),pow(s2,10.0))*s2,1.0);
fragColor.xyz-=vec3(ring(ray,pos,1.03,11.0))*2.0;
fragColor=max(vec4(0.0),fragColor);
float s3=ringRayNoise(ray,pos,0.96,1.0,mr,time);
fragColor.xyz+=mix(vec3(1.0,0.6,0.1),vec3(1.0,0.95,1.0),pow(s3,3.0))*s3;
fragColor=max(vec4(0.0),fragColor);
fragColor=min(vec4(1.0),fragColor);
gl_FragColor=fragColor;
}`;

  const sunUniforms = {
    iTime: { value: 0 },
    uCameraRotation: { value: new THREE.Matrix3() }
  };
  
  group.userData.sunUniforms = sunUniforms;

  const sunMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(13, 13),
    new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: sunUniforms,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      blending: THREE.AdditiveBlending
    })
  );
  sunMesh.frustumCulled = false;
  sunMesh.renderOrder = -50;
  group.add(sunMesh);

  scene.add(group);
  planetObjects['Sun'] = { group, mesh: sunMesh, data: PLANET_DATA['Sun'] };

  const sunLabel = createTextSprite('Sol', {
    fontSize: 36,
    color: '#ffffff',
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
  const geo = new THREE.IcosahedronGeometry(0.12, 2);
  const pos = geo.attributes.position;
  const baseNoise = [];
  for (let i = 0; i < pos.count; i++) {
    baseNoise.push(0.65 + Math.random() * 0.7);
  }
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const noise = baseNoise[i];
    const ridge = Math.abs(x * y * z) * 1.2;
    const jitter = (Math.random() - 0.5) * 0.03;
    pos.setXYZ(i, x * noise + jitter, y * noise + jitter, z * noise + jitter);
  }
  pos.needsUpdate = true;
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

// ── SHOOTING STARS — moved to comets.js ──

// ── COMET ──
let asteroidGroup;
function buildAsteroidGroup() {
  asteroidGroup = new THREE.Group();

  const asteroidColors = [0x6b6b7b, 0x7a7062, 0x5e5e6e, 0x8a7e6b, 0x4a4a5a];

  for (let i = 0; i < 25; i++) {
    const size = 0.15 + Math.random() * 0.5;
    const geo = new THREE.IcosahedronGeometry(size, 2);
    const posAttr = geo.getAttribute('position');
    const baseNoise = [];
    for (let j = 0; j < posAttr.count; j++) {
      baseNoise.push(0.6 + Math.random() * 0.8);
    }
    for (let j = 0; j < posAttr.count; j++) {
      const x = posAttr.getX(j);
      const y = posAttr.getY(j);
      const z = posAttr.getZ(j);
      const noise = baseNoise[j];
      const ridge = Math.abs(x * y * z) * 1.5;
      const jitter = (Math.random() - 0.5) * 0.02;
      posAttr.setXYZ(j, x * noise + jitter, y * noise + jitter, z * noise + jitter);
    }
    posAttr.needsUpdate = true;
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({
      color: asteroidColors[Math.floor(Math.random() * asteroidColors.length)],
      roughness: 0.9 + Math.random() * 0.1,
      metalness: Math.random() * 0.15,
      flatShading: true,
    });
    const mesh = new THREE.Mesh(geo, mat);
    const orbitAngle = Math.random() * Math.PI * 2;
    const orbitRadius = 80 + (Math.random() - 0.5) * 12;
    const orbitInclination = 0.4 + (Math.random() - 0.5) * 0.15;
    mesh.position.x = Math.cos(orbitAngle) * orbitRadius;
    mesh.position.z = Math.sin(orbitAngle) * orbitRadius;
    mesh.position.y = Math.sin(orbitAngle * 0.7) * orbitRadius * orbitInclination;
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    mesh.userData = {
      orbitAngle,
      orbitRadius,
      orbitInclination,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      orbitSpeed: 0.002 + (Math.random() - 0.5) * 0.0008,
    };
    asteroidGroup.add(mesh);
  }

  const label = createTextSprite('☄ Grupo de Asteroides', {
    fontSize: 40,
    color: '#ccaa77',
    glowColor: '#886644',
    scale: 3.0,
  });
  label.position.y = 3;
  label.visible = false;
  asteroidGroup.add(label);
  scene.add(asteroidGroup);
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
  const surfaceDist = data.radius + 2; // Always above surface
  const camPos = worldPos.clone().add(surfaceDir.clone().multiplyScalar(surfaceDist));

  cameraStartPos.copy(camera.position);
  cameraStartTarget.copy(controls.target);
  cameraTarget = worldPos.clone();
  cameraOffset = camPos;
  cameraLerpT = 0;
  isCameraAnimating = true;
  controls.minDistance = data.radius + 2;
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
  const camDist = data.radius * 3 + 5;
  cameraStartPos.copy(camera.position);
  cameraStartTarget.copy(controls.target);
  cameraTarget = worldPos.clone();
  const sunDir = worldPos.clone().negate().normalize();
  const offset = sunDir.multiplyScalar(camDist).add(new THREE.Vector3(0, camDist * 0.3, 0));
  cameraOffset = worldPos.clone().add(offset);
  cameraLerpT = 0;
  isCameraAnimating = true;

  // Set dynamic zoom limits based on planet radius
  controls.minDistance = data.radius + 2;

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
  controls.minDistance = 3;
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

const emojiToSvg = {
  '🧬': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle"><path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"/><path d="M17 6l-2.5-2.5"/><path d="M14 8l-1-1"/><path d="M7 18l2.5 2.5"/><path d="M3.5 14.5l.5.5"/><path d="M20 9l.5.5"/><path d="M6.5 12.5l1 1"/><path d="M16.5 10.5l1 1"/></svg>',
  '🔥': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  '⚡': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  '🌊': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>',
  '☄': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle"><path d="M12.2 2a10.7 10.7 0 0 0-2.4 6.3 8 8 0 0 0-4.5 4.5A10.7 10.7 0 0 0 12.2 22a10.7 10.7 0 0 0 2.4-6.3 8 8 0 0 0 4.5-4.5A10.7 10.7 0 0 0 12.2 2z"/></svg>',
  '🌡': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>',
  '🧲': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle"><path d="M6 15a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"/><path d="M12 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"/></svg>',
  '💨': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle"><path d="M17.7 7.7a7.5 7.5 0 1 0-10.1 10.8"/><path d="M18 12h.01"/><path d="M12 2v2"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M12 20v2"/></svg>',
  '🌀': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle"><path d="M12 12c-2-2.67-6-2.67-6 0 0 4 6 8 6 8s6-4 6-8c0-2.67-4-2.67-6 0Z"/></svg>',
};

function replaceEmojis(html) {
  return html.replace(/[\u{1F300}-\u{1FAFF}\u2600-\u27BF\u2B50\u2604\u26A1\u26C4\u26C5\u2B55]/gu, '');
}

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
    <div class="modal-desc">${replaceEmojis(d.description)}</div>

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
      <div class="speed-icon"></div>
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

window.openAboutOverlay = function () {
  const overlay = document.getElementById('about-overlay');
  const nameEl = overlay.querySelector('.about-name');

  if (nameEl) {
    const text = '✦ Sebastian Vasquez';
    nameEl.innerHTML = text.split('').map((c, i) =>
      c === ' ' ? ' ' : `<span class="modal-name-char" style="animation-delay:${i * 0.04}s">${c}</span>`
    ).join('');
  }

  overlay.classList.remove('active');
  overlay.offsetHeight;
  overlay.classList.add('active');

  requestAnimationFrame(() => {
    if (typeof lucide !== 'undefined') lucide.createIcons();
  });
};

window.closeAboutOverlay = function () {
  document.getElementById('about-overlay').classList.remove('active');
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

function initAboutOverlayEffects() {
  const ao = document.getElementById('about-overlay');
  const container = document.getElementById('about-stars');
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

  const spotlight = ao.querySelector('.welcome-spotlight');
  const bgImage = document.getElementById('about-bg-image');
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  ao.addEventListener('mousemove', (e) => {
    const rect = ao.getBoundingClientRect();
    targetX = (e.clientX - rect.left) / rect.width - 0.5;
    targetY = (e.clientY - rect.top) / rect.height - 0.5;
  });

  const animate = () => {
    if (ao.classList.contains('active')) {
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

      const content = ao.querySelector('.about-modal-content');
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
setTimeout(initAboutOverlayEffects, 1000);

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
  if (starUniforms) {
    starUniforms.uTime.value = animationTime;
    starUniforms.uCameraDist.value = camera.position.length();
  }

  // Background galaxy follows camera
  if (window._bgMesh) window._bgMesh.position.copy(camera.position);

  // Update luminous orbit lines — stop when focused
  if (!currentFocus) updateOrbitLines(animationTime);

  // Update nebula dust particles
  nebulaParticles.forEach(p => {
    if (p.material.uniforms && p.material.uniforms.uTime) {
      p.material.uniforms.uTime.value = animationTime;
    }
  });

  // Shooting stars
  updateShootingStars();

  // Solar effects (prominences + solar wind)
  if (typeof SolarEffects !== 'undefined') {
    SolarEffects.update(animationTime, speedMul);
  }

  // Eccentric asteroids — always
  if (typeof EccentricAsteroids !== 'undefined') {
    EccentricAsteroids.update(animationTime, speedMul);
  }

  // Asteroid group orbit — always
  if (asteroidGroup) {
    asteroidGroup.children.forEach(child => {
      if (!child.userData.orbitAngle) return;
      const ud = child.userData;
      ud.orbitAngle += ud.orbitSpeed * speedMul;
      child.position.x = Math.cos(ud.orbitAngle) * ud.orbitRadius;
      child.position.z = Math.sin(ud.orbitAngle) * ud.orbitRadius;
      child.position.y = Math.sin(ud.orbitAngle * 0.7) * ud.orbitRadius * ud.orbitInclination;
      child.rotation.x += ud.rotSpeed * speedMul;
      child.rotation.y += ud.rotSpeed * 0.7 * speedMul;
    });
  }

  // Orbit planets — STOP all orbits when any planet is focused
  ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'].forEach(key => {
    const po = planetObjects[key];
    if (!po) return;
    const d = po.data;
    // Only orbit when NO planet is focused (free exploration mode)
    if (!currentFocus) {
      po.angle = (po.angle || 0) + d.orbitalSpeed * speedMul;
    }
    po.group.position.x = Math.cos(po.angle) * d.distance;
    po.group.position.z = Math.sin(po.angle) * d.distance;

    // Update atmosphere shader sun direction
    po.group.children.forEach(child => {
      if (child.isMesh && child.material.type === 'ShaderMaterial' && child.material.uniforms && child.material.uniforms.sunDir) {
        const sunDir = new THREE.Vector3(-po.group.position.x, -po.group.position.y, -po.group.position.z).normalize();
        child.material.uniforms.sunDir.value.copy(sunDir);
      }
    });

    // Rotate planet — always
    if (po.mesh) po.mesh.rotation.y += d.rotationSpeed * speedMul;

    // Rotate cloud layer — always
    if (key === 'Earth' && planetObjects['Earth_clouds']) {
      planetObjects['Earth_clouds'].rotation.y += d.rotationSpeed * 0.7 * speedMul;
    }

    // Moons — always
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

  // Sun update — billboard toward camera + shader uniforms
  const sunPO = planetObjects['Sun'];
  if (sunPO && sunPO.group.userData.sunUniforms) {
    const su = sunPO.group.userData.sunUniforms;
    su.iTime.value = sunClock.getElapsedTime();
    const tempMatrix = new THREE.Matrix3();
    tempMatrix.getNormalMatrix(camera.matrixWorld);
    su.uCameraRotation.value.copy(tempMatrix);
    // Billboard: make the plane always face the camera
    sunPO.mesh.quaternion.copy(camera.quaternion);
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
      controls.minDistance = PLANET_DATA[key].radius + 2;
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
// ── MUSIC — piano audio file ──
let musicPlaying = false;
let pianoAudio = null;
function initMusic() {
  if (pianoAudio) return;
  pianoAudio = new Audio('audio/piano.mp3');
  pianoAudio.loop = true;
  pianoAudio.volume = 0.3;
}
window.toggleMusic = function () {
  initMusic();
  if (!musicPlaying) {
    pianoAudio.play().catch(function(){});
    musicPlaying = true;
  } else {
    pianoAudio.pause();
    musicPlaying = false;
  }
  var btn = document.getElementById('music-btn');
  if (btn) btn.classList.toggle('active', musicPlaying);
};

// ═══════════════════════════════════════════════════════
//  INTRO + DEFERRED LOADING — build one body per frame to stay responsive
// ═══════════════════════════════════════════════════════
const loadingEl = document.getElementById('loading');
const introTitle = document.getElementById('intro-title');
splitTextToChars(introTitle, '✦ Cargando', 0.03);
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
  { fn: () => buildAsteroidGroup() },
  { fn: () => {
    // Initialize solar effects (prominences + solar wind)
    if (typeof SolarEffects !== 'undefined' && planetObjects['Sun']) {
      SolarEffects.init(planetObjects['Sun'].group, PLANET_DATA['Sun'].radius);
    }
  }},
  { fn: () => {
    // Initialize eccentric asteroids
    if (typeof EccentricAsteroids !== 'undefined') {
      const eGroup = EccentricAsteroids.build(30);
      scene.add(eGroup);
    }
  }},
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
  const earthWrap = document.querySelector('.welcome-earth-wrap');
  const telescopeWrap = document.querySelector('.welcome-telescope-wrap');
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
    if (earthWrap) {
      earthWrap.style.transform = `
        translate3d(${currentX * -60}px, ${currentY * -60}px, 0)
        rotateX(${currentY * -8}deg)
        rotateY(${currentX * 8}deg)
      `;
    }
    if (telescopeWrap) {
      telescopeWrap.style.transform = `
        translate3d(${currentX * -80}px, ${currentY * -80}px, 0)
        rotateX(${currentY * -10}deg)
        rotateY(${currentX * 10}deg)
      `;
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
    if (galaxy) galaxy.style.transform = '';
    if (earthWrap) earthWrap.style.transform = '';
    if (telescopeWrap) telescopeWrap.style.transform = '';
  };
}

function launchExperience() {
  // Start music directly on user click with fade-in
  initMusic();
  if (pianoAudio && !musicPlaying) {
    pianoAudio.volume = 0;
    pianoAudio.play().catch(function(){});
    musicPlaying = true;
    // Fade in over 3 seconds
    var fadeDuration = 3000;
    var targetVolume = 0.3;
    var steps = 60;
    var stepTime = fadeDuration / steps;
    var volStep = targetVolume / steps;
    var currentStep = 0;
    var fadeInterval = setInterval(function() {
      currentStep++;
      pianoAudio.volume = Math.min(volStep * currentStep, targetVolume);
      if (currentStep >= steps) clearInterval(fadeInterval);
    }, stepTime);
    var btn = document.getElementById('music-btn');
    if (btn) btn.classList.add('active');
  }

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
    if (typeof SolarEffects !== 'undefined') SolarEffects.update(t, 1);
    if (typeof EccentricAsteroids !== 'undefined') EccentricAsteroids.update(t, 1);
    if (asteroidGroup) {
      asteroidGroup.children.forEach(child => {
        if (!child.userData.orbitAngle) return;
        const ud = child.userData;
        ud.orbitAngle += ud.orbitSpeed;
        child.position.x = Math.cos(ud.orbitAngle) * ud.orbitRadius;
        child.position.z = Math.sin(ud.orbitAngle) * ud.orbitRadius;
        child.position.y = Math.sin(ud.orbitAngle * 0.7) * ud.orbitRadius * ud.orbitInclination;
        child.rotation.x += ud.rotSpeed;
        child.rotation.y += ud.rotSpeed * 0.7;
      });
    }
    const sunPO = planetObjects['Sun'];
    if (sunPO && sunPO.group.userData.sunUniforms) {
      const su = sunPO.group.userData.sunUniforms;
      su.iTime.value = sunClock.getElapsedTime();
      const tmpMat = new THREE.Matrix3();
      tmpMat.getNormalMatrix(camera.matrixWorld);
      su.uCameraRotation.value.copy(tmpMat);
      if (sunPO.mesh) sunPO.mesh.quaternion.copy(camera.quaternion);
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
