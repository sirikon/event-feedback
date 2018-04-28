const talks = {
    'del-sql-a-codigo-funcional-migrable': {
        name: 'Del SQL a código funcional migrable',
        description: 'Caso práctico de cómo, a partir de código SQL original, reconvertirlo a código funcional y hacerlo funcionar sobre distintas fuentes.',
        speaker: 'Emilio Aguilera Montoto',
        speakerImage: 'emilio.jpg',
        speakerTitle: 'Arquitecto IT en Everis, con conocimiento no sólo sobre los sistemas específicos sino especialmente sobre el global de los mismos, considerando las interacciones entre ellos y los pros y contras del global.',
        track: '1',
        when: 'VIE 11:30-12:30'
    },
    'infraestructura-escalable-con-kubernetes': {
        name: 'Infraestructura escalable con Kubernetes',
        description: `Soy desarrolladora de Software y siempre voy un paso por detrás en la parte de sistemas. Pero cuando trabajas en un equipo pequeño en una startup necesitas aprender un poco más de todo. En esta charla veremos las diferentes herramientas que Kubernetes nos provee para ayudarnos a crear una infraestructura escalable.`,
        speaker: 'Laura Morillo-Velarde Rodríguez',
        speakerImage: 'laura.png',
        speakerTitle: 'Backend Engineer en Seedtag. Ha peleado con muchas tecnologías desde C++ a Javascript y a ratos lidia con servidores. En su tiempo libre además organiza meetups para el GDG Madrid y para grupos en los que promueve la mayor participación de las mujeres en tecnología (AgileGirls y Tech&Ladies).',
        track: '2',
        when: 'VIE 11:30-13:30'
    },
    'self-racing-car': {
        name: 'Self Racing Car',
        description: 'Cómo hacer el software para un pequeño coche radio control autoconducido de carreras, empezando por la visión artificial y terminando con la ley de control. Se puede ver más sobre el tema en diyrobocars.com.',
        speaker: 'Javi Santana',
        speakerImage: 'santana.png',
        speakerTitle: 'Javi Santana es una persona de pueblo que además le gusta hacer software. Fundó Agroguía donde creó productos para hacer mejor la vida a los agricultores y la mantuvo rentable durante 12 años. En el camino se cruzó con CARTO donde fue desarrollador y después CTO, ayudando a hacerla crecer desde ser una pequeña empresa de consultoría a ser una startup de referencia.',
        track: '3',
        when: 'VIE 11:30-13:30'
    },
    'live-coding-bea-hernandez': {
        name: 'Charla corta / Live Coding: Bea Hernández',
        speaker: 'Bea Hernández',
        speakerImage: 'bea.png',
        speakerTitle: 'Bea Hernández es Data Scientist. Actualmente trabaja con tecnología Deep Learning y Visualización de Datos aplicados a varios proyectos. En su tiempo libre co-organiza R-Ladies Madrid y es integrante con la comunidad de NASADatanauts.',
        track: '1',
        when: 'VIE 13:30-14:00'
    },
    'rock-n-grid': {
        name: 'Rock’n’Grid',
        description: 'CSS Grid ha llegado para que nos olvidemos de horribles trucos e infinitas líneas de código para desarrollar layouts originales. Es fácil, intuitivo y limpio.<br><br>Vamos a demostrarlo realizando en vivo unos cuantos diseños reales que, por supuesto, algo tendrán que ver con el Rock’n’Roll.',
        speaker: 'Diana Aceves',
        speakerImage: 'diana.png',
        speakerTitle: 'Química de carrera, programadora Java de rebote y actual Frontend Developer de vocación. CSS lover. Me engañaron con cervezas y vengo obligada.',
        track: '1',
        when: 'VIE 15:00-17:00'
    },
    'cambios-en-paralelo-cambios-grandes-pasos-pequenos': {
        name: 'Cambios en paralelo. Cambios grandes, pasos pequeños',
        description: 'Aprende a hacer cualquier cambio grande en tu sistema mediante una secuencia de pasos pequeños de bajo riesgo.<br><br>Haremos ejemplos sobre refactors grandes de código, BD, arquitectura, performance, etc. Mejora tu habilidad para realizar cambios en paralelo mediante ejercicios y problemas simulados, compartiendo en comunidad tácticas y estrategias para realizarlos.',
        speaker: 'Eduardo Ferro',
        speakerImage: 'eferro.png',
        speakerTitle: 'Más de 20 años de experiencia trabajando para aportar valor mediante la creación de software en diferentes industrias. Alineado con el movimiento de Software Craftsmanship, de desarrollo ágil y con el mindset de crecimiento asociado a estos movimientos.',
        track: '2',
        when: 'VIE 15:00-17:00'
    },
    'separando-comportamientos-y-datos-con-type-classes-en-scala': {
        name: 'Separando comportamientos y datos con Type Classes en Scala',
        description: `En esta charla / workshop interactivo exploraremos como podemos separar comportamientos de implementaciones y escribir programas y librerías que funcionan con diferentes tipos de retorno.<br><br>
        Normalmente las librerías estan escritas de forma que los usuarios que las usan estan obligados a lidiar con los tipos de retorno que los autores de dichas librerías enfuerzan. Gracias al poder de type classes y programación polimórfica en Scala y en otros lenguajes que soportan Higher Kinded Types y type classes podemos escribir programas libres de interpretación donde los usuarios pueden elegir sus propios tipos de retorno.<br><br>
        Exploraremos un problema sencillo donde la audiencia aprenderá los conceptos necesarios para escribir programas que son enteramente polimórficos y no están acoplados a un runtime especifico.`,
        speaker: 'Raúl Raja',
        speakerImage: 'raul.png',
        speakerTitle: 'Raúl es CTO y cofundador de 47 Degrees. Entusiasta de la programación funcional. Ingeniero de Software autodidacta y emprendedor con sólida experiencia en backend con Scala. Problem-solver creativo. Siempre intentando probar lo último en cada tecnología.',
        track: '1',
        when: 'VIE 17:30-18:30'
    },
    'taller-de-r': {
        name: 'Taller de programación en R',
        description: `Taller de 2h en el que podrás asistir a cualquiera de los tres niveles siguientes:<br><br>
        <i>Nivel introductorio</i>: se introduccirán conceptos básicos de programación en R.<br><br>
        <b>Marta Gómez Macías y Paloma de las Cuevas</b><br><br>
        <i>Nivel intermedio</i>: se verán funciones para procesar los datos de forma funcional y paralela, y distintas representaciones con ggplot2.<br><br>
        <b>M.ª Cristina Heredia Gómez</b><br><br>
        <i>Nivel avanzado</i>: se abordará un reto real de machine learning de la competición Kaggle.<br><br>
        <b>Ana Valdivia</b>`,
        speaker: 'Geek & Tech Girls',
        speakerImage: 'geektechgirls.jpg',
        speakerTitle: 'Comunidad que a través del Software Libre acerca la tecnología a mujeres de todas las edades, a la vez que lucha por una sociedad igualitaria e inclusiva. Porque somos Tech, somos Geek, y somos Girls.',
        track: '2',
        when: 'VIE 17:30-19:30'
    },
    'live-coding-sorpresa': {
        name: 'Charla corta / live coding: sorpresa',
        speaker: 'Sorpresa',
        speakerImage: 'sorpresa.png',
        speakerTitle: 'Sorpresa',
        track: '1',
        when: 'SAB 9:30-10:00'
    },
    'os-scratch': {
        name: 'Open Space: Scratch',
        description: '',
        speaker: 'Dani Carrión',
        speakerImage: 'danicarrion.jpg',
        track: '1',
        when: 'SAB 11:00-12:00'
    },
    'taller-de-machine-learning-h2oai': {
        name: 'Taller de Machine learning H2O.ai',
        description: `H2O provee de unas librerías open source capaces de ejecutar estos algoritmos de machine learning de una forma sencilla y óptima cuando nuestros datos aumentan en volumen.<br><br>
        En este taller explicaremos cómo trabajar con H2O, paralelamente con R y con su interfaz web, Machine Learning para coders y non-coders.<br><br>
        <b>Bea Hernández y Leticia Martín-Fuertes</b>`,
        speaker: 'R-Ladies Madrid',
        speakerImage: 'rladies.png',
        speakerTitle: '¡La primera comunidad de España de R para mujeres! Aquí encontrarás compañeras en el mundo de la programación en R, desde profesionales que tienen R como herramienta principal de trabajo hasta aficionadas que quieren aprender y seguir mejorando. ¡Unete, te esperamos!',
        track: '2',
        when: 'SAB 11:00-13:00'
    },
    'refactorizando-a-funciones-para-un-software-mas-barato': {
        name: 'Refactorizando a funciones para un software más barato',
        description: `El cielo se abrirá, un rayo de luz se proyectará sobre mi barba y dos losas de piedra tallada bajarán lentamente hasta posarse en mis brazos revelando, por fin, la verdad final sobre el desarrollo de software. No.<br><br>
        Durante este taller de 2 horas exploraremos distintas opciones de refactorización a funciones, estado inmutable y libre de efectos laterales analizando su relación con la economía de software.`,
        speaker: 'Guillermo Gutiérrez Almazor',
        speakerImage: 'guillermo.png',
        speakerTitle: 'Ser humano y, sin embargo, programador. Trabajo en Nafundi manteniendo OpenDataKit. Me interesa mucho la técnica pero, sobre todo, la economía del software. En mis ratos libres me aguanta @amaiaFisio, cuido de una huerta, de mis tres gatos, cocino, bebo cerveza y veo series.',
        track: '3',
        when: 'SAB 11:00-13:00'
    },
    'git-bajo-el-capo-del-core-a-merges-imposibles': {
        name: 'Git bajo el capó: del core a merges imposibles',
        description: `Durante 2h de taller diseccionarás Git y aprenderás cómo está diseñado y cómo funciona realmente. Los principios e ideas básicas en los que se fundamenta, que te permitirán tener una visión mucho más amplia y profunda para sacar el máximo partido de Git.<br><br>
        Se profundizará en la estructura de los repositorios, almacenamiento interno, cómo funciona el merge, cómo funciona el push/pull y el índice.<br><br>
        Tras este taller Git no tendrá más secretos para ti :-).<br><br>
        <b>Pablo Santos y Rubén de Alba</b>`,
        speaker: 'PlasticSCM',
        speakerImage: 'plasticscm.png',
        speakerTitle: 'Plastic SCM is a distributed version control, but can work centralized too. It is excellent with branching and merging, can deal with huge projects and big binary assets natively, and it comes with GUIs and tools to make everything simpler. Plastic solves problems.',
        track: '4',
        when: 'SAB 11:00-13:00'
    },
    'os-midiendo-todas-las-cosas': {
        name: 'Open Space: Debate: Midiendo todas las cosas',
        description: '',
        speaker: 'Roberto Luis Bisbé',
        speakerImage: 'robertobisbe.jpg',
        track: '1',
        when: 'SAB 12:00-13:00'
    },
    'service-discovery-como-un-moderno': {
        name: 'Service discovery como un moderno',
        description: `No siempre empieza uno un negocio montando una plataforma serverless con microservicios inmutables dockerizados. A veces porque no aporta nada en ese momento, porque es complejo de mantener o incluso caro. Pero, si tienes suerte y maña, en algún momento necesitarás escalar y distribuir carga. Ahí puedes querer aplicar estrategias más modernas para hacer tu plataforma más ágil.<br><br>
        En esta charla contaré un caso de éxito implementando Consul como sistema de discovery de servicios para reemplar técnicas poco escalables sin parar el ritmo de la plataforma. Hablaré sobre como exprimir toda la capacidad de Consul y lo veremos en acción a través de una demo.`,
        speaker: 'Luis Bosque',
        speakerImage: 'luis.png',
        speakerTitle: 'Mi pasión es desayunar pero no conseguí encontrarle salida profesional. Llevo años en las trincheras haciendo sistemas, backend, frontend y de vez en cuando me las doy de diseñador para ser aceptado en los saraos. Hace años me uní a lo que hoy es CARTO y paso los días como Head de Infraestructura intentando marcar la diferencia en tecnología y cultura de equipo.',
        track: '1',
        when: 'SAB 13:00-14:00'
    },
    'scala-que-y-porque': {
        name: 'Scala, ¿qué y porqué?',
        description: 'Introducción al lenguaje Scala, (qué es y qué funcionalidades ofrece), con ejemplos de código para ilustrar conceptos, que tratarán desde la declaración de variables hasta la programación funcional',
        speaker: 'Geek & Tech Girls',
        speakerImage: 'geektechgirls.jpg',
        speakerTitle: 'Comunidad que a través del Software Libre acerca la tecnología a mujeres de todas las edades, a la vez que lucha por una sociedad igualitaria e inclusiva. Porque somos Tech, somos Geek, y somos Girls.',
        track: '2',
        when: 'SAB 13:00-14:00'
    },
    'os-legacy': {
        name: 'Open Space: Legacy',
        description: '',
        speaker: 'Toño de la Torre',
        speakerImage: 'antoniodelatorre.jpg',
        track: '3',
        when: 'SAB 13:00-14:00'
    },
    'os-experiencias-educacion-online': {
        name: 'Open Space: Debate: Experiencias en educación online',
        description: '',
        speaker: 'Elena Torró',
        speakerImage: 'elena.png',
        track: '4',
        when: 'SAB 13:00-14:00'
    },
    'live-coding-guillermo-gutierrez': {
        name: 'Charla corta / live coding: Guillermo Gutiérrez',
        speaker: 'Guillermo Gutiérrez Almazor',
        speakerImage: 'guillermo.png',
        speakerTitle: 'Ser humano y, sin embargo, programador. Trabajo en Nafundi manteniendo OpenDataKit. Me interesa mucho la técnica pero, sobre todo, la economía del software. En mis ratos libres me aguanta @amaiaFisio, cuido de una huerta, de mis tres gatos, cocino, bebo cerveza y veo series.',
        track: '1',
        when: 'SAB 15:00-15:30'
    },
    'escapando-del-framework': {
        name: 'Escapando del framework',
        description: 'En esta charla vamos a poner los pies en el suelo con la arquitectura hexagonal, DDD y cómo podemos desplegarlo para conseguir escalabilidad.<br><br>Vamos a explicar la aplicación poquito a poquito, evitando las megaconstrucciones y tecnopajas. Explicaré una implementación de PubSub para los eventos de dominio, IDD para la capa de servicios de aplicación y GraphQL para hacer el mecanismo de entrega. También revisaremos el código del frontend para desacoplarlo de los frameworks y evitar la fatiga Javascript.',
        speaker: 'Néstor Salceda',
        speakerImage: 'nestor.png',
        speakerTitle: 'Llevo haciendo software quince años, me encanta. Me encanta darle forma a una idea, desarrollarla y ponerla en producción para que pueda aportar valor. Cuando saco un ratico, lo dedico a Mamba y un nuevo recolector de basura basado en pañales y biberones. A veces me dicen que soy el Arguiñano del Continuous Delivery.',
        track: '1',
        when: 'SAB 15:30-16:30'
    },
    'taller-de-python-django': {
        name: 'Taller de Python & Django',
        description: `Taller de 2h en el que podrás asistir a cualquiera de los tres niveles siguientes:<br><br>
        <i>Nivel introductorio</i>: conceptos básicos de programación explicados con Python.<br><br>
        <b>M.ª Cristina Heredia y Paloma de las Cuevas</b><br><br>
        <i>Nivel intermedio</i>: introducción a Numpy y a la programación funcional.<br><br>
        <b>Marta Gómez Macías</b><br><br>
        <i>Nivel avanzado</i>: conceptos básicos sobre Django.<br><br>
        <b>Marta Gómez Macías</b>`,
        speaker: 'Geek & Tech Girls',
        speakerImage: 'geektechgirls.jpg',
        speakerTitle: 'Comunidad que a través del Software Libre acerca la tecnología a mujeres de todas las edades, a la vez que lucha por una sociedad igualitaria e inclusiva. Porque somos Tech, somos Geek, y somos Girls.',
        track: '2',
        when: 'SAB 15:30-17:30'
    },
    'os-bus-factor': {
        name: 'Open Space: Bus factor',
        description: '',
        speaker: 'Miguel González',
        speakerImage: 'miguelgonzalez.jpg',
        track: '3',
        when: 'SAB 15:30-16:30'
    },
    'os-pairing': {
        name: 'Open Space: Pairing',
        description: '',
        speaker: 'Demi',
        speakerImage: 'demitralla.jpg',
        track: '4',
        when: 'SAB 15:30-16:30'
    },
    'os-effects-coeffects': {
        name: 'Open Space: Effects y coeffects',
        description: '',
        speaker: 'Manuel Rivero',
        speakerImage: 'manuelrivero.jpeg',
        track: '1',
        when: 'SAB 16:30-17:30'
    },
    'os-kata-99-bottles': {
        name: 'Open Space: Kata 99 bottles',
        description: '',
        speaker: 'Juan',
        speakerImage: 'juan.png',
        track: '1',
        when: 'SAB 16:30-17:30'
    },
    'os-big-data': {
        name: 'Open Space: Debate Big Data',
        description: '',
        speaker: 'Ana Valdivia',
        speakerImage: 'anavaldi.jpg',
        track: '2',
        when: 'SAB 16:30-17:30'
    },
    'os-codelaw': {
        name: 'Open Space: Codelaw',
        description: '',
        speaker: 'J. Sendin',
        speakerImage: 'kuartillo.jpg',
        track: '2',
        when: 'SAB 18:00-19:00'
    },
    'os-playing-with-android-things': {
        name: 'Open Space: Playing with Android Things',
        description: '',
        speaker: 'Javier Gamarra',
        track: '2',
        when: 'SAB 18:00-20:00'
    },
    'descubriendo-los-cuellos-de-botella-y-mejorando-el-rendimiento-de-tu-aplicacion-java': {
        name: 'Descubriendo los cuellos de botella y mejorando el rendimiento de tu aplicación Java',
        description: `Taller práctico donde aprenderás a usar las principales herramientas del ecosistema Java.<br><br>
        Dividido en dos partes, primero descubriremos los distintos problemas que puede tener tu aplicación mediante herramientas de profiling y análisis de ejecución (memory leaks, consumo cpu, latencias, etc), y luego veremos con microbenchmarking cómo medir el rendimiento de partes clave de tu aplicación.`,
        speaker: 'Jerónimo López',
        speakerImage: 'jero.png',
        speakerTitle: 'Desarrollador de software vocacional, y emprendedor ocasional. 15 años desarrollado en torno a tecnologías Java. Declarado troll de Javascript y PHP, y coordinador de MadridJUG. Creador del mejor comparador y buscador de ofertas de videojuegos (Otogami) y zapatillas (Runnics) del mundo. Actualmente trabaja en Nextail repartiendo ropa por todo el mundo.',
        track: '3',
        when: 'SAB 18:00-20:00'
    },
    'gildedrose-refactoring-kata': {
        name: 'GildedRose Refactoring Kata',
        description: `Se trata de una Kata muy divertida de refactorización de "legacy code". Hice esta Kata en theAntievent, un Open Space de Bilbao, conducida por Sergio Revilla. Me gustó tanto que me apetece mucho hacerla de nuevo, esta vez siendo yo quien la conduzca.<br><br>
        Al contrario que la mayoría de Katas, ¡la solución ya existe! Sólo que tenemos que discutir como cambiarla.`,
        speaker: 'Elena Torró',
        speakerImage: 'elena.png',
        speakerTitle: "Programadora. En mi tiempo libre intento sin éxito mantener un blog personal y arreglar el cuello de botella de mi lista de TODO's, entre otros. Actualmente trabajo como desarrolladora Front End en CARTO.",
        track: '4',
        when: 'SAB 18:00-20:00'
    },
    'os-powerpoint-karaoke': {
        name: 'Open Space: Powerpoint Karaoke',
        description: '',
        speaker: 'Laura Morillo',
        speakerImage: 'lauramorillo.jpg',
        track: '1',
        when: 'SAB 19:00-20:00'
    }
};

Object.keys(talks).forEach((k) => {
    talks[k].slug = k;
});

module.exports = {
    all () {
        return Object.keys(talks).map((id) => talks[id]);
    },
    getBySlug (slug) {
        return talks[slug];
    }
};
