document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.querySelector('.menu-toggle');
  var mainNav = document.querySelector('.main-nav');
  var searchInput = document.querySelector('#site-search');
  var topicCards = Array.prototype.slice.call(document.querySelectorAll('.topic-card'));
  var articleCards = Array.prototype.slice.call(document.querySelectorAll('.article-card'));
  var modal = document.querySelector('#info-modal');
  var modalTitle = document.querySelector('#modal-title');
  var modalText = document.querySelector('#modal-text');
  var modalClose = document.querySelector('.modal-close');
  var backTop = document.querySelector('.back-top');

  var topicTexts = {
    dcu: {
      title: '¿Qué es el DCU?',
      text: 'El Diseño Centrado en el Usuario, también conocido como DCU, es una forma de crear productos digitales partiendo de las necesidades reales de las personas que los van a utilizar. No se trata solamente de hacer una interfaz bonita, sino de construir una experiencia clara, útil y fácil de entender. En este enfoque, cada decisión de diseño debe responder a preguntas como: quién usará la página, qué necesita encontrar, qué dificultades puede tener y cómo se puede reducir su esfuerzo. El DCU permite que una plataforma no dependa únicamente del gusto del diseñador, sino de la observación, la investigación y la evaluación con usuarios. Por eso es importante en sitios educativos, aplicaciones móviles y páginas web, ya que ayuda a organizar la información de una manera más humana, accesible y funcional.'
    },

    investigacion: {
      title: 'Investigación de usuarios',
      text: 'La investigación de usuarios es una etapa fundamental dentro del Diseño Centrado en el Usuario porque permite conocer a las personas antes de diseñar una solución. Su objetivo es comprender qué necesitan, qué problemas enfrentan, cómo buscan información y qué esperan de una página o aplicación. Para lograrlo, se pueden utilizar entrevistas, encuestas, observación, análisis de tareas y revisión de comportamientos. Esta información ayuda a tomar decisiones de diseño con base en datos reales, no solo en suposiciones. Por ejemplo, si una wiki universitaria tiene demasiadas secciones desordenadas, la investigación puede mostrar qué categorías son más útiles para los estudiantes y cuáles generan confusión. Así, el diseño se vuelve más preciso, porque responde al contexto, habilidades, objetivos y limitaciones de los usuarios.'
    },

    entrevistas: {
      title: 'Entrevistas y encuestas',
      text: 'Las entrevistas y encuestas son herramientas que ayudan a recopilar información directa de los usuarios. Una entrevista permite escuchar con más profundidad lo que una persona piensa, siente o necesita al interactuar con una plataforma. En cambio, una encuesta permite obtener respuestas de más personas y detectar patrones generales. Ambas técnicas pueden utilizarse juntas para comprender mejor un problema de diseño. En una página educativa, por ejemplo, las entrevistas podrían revelar que los estudiantes se sienten perdidos al buscar recursos, mientras que las encuestas podrían confirmar cuántos usuarios tienen ese mismo problema. Esta información permite mejorar la estructura, los botones, los textos y las categorías del sitio. Lo importante es formular preguntas claras, evitar inducir respuestas y analizar los resultados con una intención práctica: mejorar la experiencia del usuario.'
    },

    empatia: {
      title: 'Mapas de empatía',
      text: 'Los mapas de empatía son una herramienta visual que ayuda a comprender mejor a los usuarios desde una perspectiva más humana. Su función es organizar lo que una persona piensa, siente, dice, hace, necesita o le preocupa al usar un producto digital. En lugar de ver al usuario como un dato abstracto, esta herramienta permite imaginar su situación real y detectar frustraciones que podrían pasar desapercibidas. Por ejemplo, un estudiante puede decir que una plataforma funciona, pero sentir ansiedad porque no encuentra rápido sus materiales. Esa diferencia entre lo que dice y lo que vive es importante para diseñar mejor. Los mapas de empatía ayudan a que el equipo no diseñe solo desde la lógica técnica, sino desde la experiencia emocional y práctica del usuario. Son especialmente útiles antes de crear wireframes o prototipos.'
    },

    personas: {
      title: 'User Personas',
      text: 'Las User Personas son perfiles ficticios, pero construidos a partir de datos reales o hipótesis fundamentadas sobre los usuarios. Representan grupos de personas que podrían utilizar una página, aplicación o servicio. Cada persona suele incluir nombre, edad, objetivos, necesidades, habilidades, frustraciones y contexto de uso. Su utilidad está en que ayudan al equipo de diseño a recordar para quién está creando la solución. En lugar de decir “el usuario necesita esto”, se puede pensar en una persona concreta, como una estudiante que busca recursos para una tarea desde su celular. Esto facilita tomar decisiones sobre navegación, lenguaje, botones, jerarquía visual y accesibilidad. Las User Personas no deben inventarse al azar; funcionan mejor cuando se basan en entrevistas, encuestas u observaciones. Bien usadas, evitan diseñar para todo el mundo y ayudan a enfocar mejor la experiencia.'
    },

    wireframes: {
      title: 'Prototipos y Wireframes',
      text: 'Los prototipos y wireframes permiten representar una interfaz antes de desarrollarla por completo. Un wireframe funciona como un plano visual donde se define la estructura de una página: logotipo, menú, buscador, secciones, tarjetas, artículos y footer. No necesita tener todos los colores o imágenes finales, porque su objetivo principal es mostrar cómo se organizará la información y cómo navegará el usuario. Después, el prototipo puede agregar más detalle visual e interacción para simular mejor el funcionamiento real. En Diseño Centrado en el Usuario, estas herramientas son valiosas porque permiten probar ideas temprano, detectar problemas y corregir antes de invertir más tiempo en desarrollo. También facilitan la comunicación entre diseñadores, programadores y usuarios. En una wiki educativa, un wireframe ayuda a comprobar si los temas son fáciles de encontrar y si la jerarquía visual tiene sentido.'
    },

    usabilidad: {
      title: 'Pruebas de usabilidad',
      text: 'Las pruebas de usabilidad sirven para evaluar si una página, aplicación o prototipo realmente funciona para los usuarios. Consisten en pedir a personas reales que realicen tareas específicas mientras el equipo observa cómo interactúan con el sistema. No se trata solo de preguntar si les gusta el diseño, sino de ver si pueden encontrar información, entender botones, completar acciones y navegar sin confundirse. Durante estas pruebas se pueden detectar errores, dificultades, pasos innecesarios o elementos visuales poco claros. En una wiki universitaria, por ejemplo, una prueba podría pedirle al estudiante que encuentre un tema, abra un artículo y regrese al inicio. Si tarda demasiado o se pierde, el diseño necesita ajustes. Las pruebas de usabilidad son importantes porque convierten la opinión en evidencia y ayudan a mejorar antes de publicar el sitio final.'
    },

    mejora: {
      title: 'Mejora continua',
      text: 'La mejora continua es la idea de que un producto digital nunca queda completamente terminado en su primera versión. Incluso si una página funciona bien, siempre puede optimizarse a partir de comentarios, métricas, pruebas y nuevas necesidades de los usuarios. En Diseño Centrado en el Usuario, esta etapa es clave porque el comportamiento de las personas puede cambiar con el tiempo. Una plataforma educativa puede iniciar con ciertas categorías, pero después descubrir que los estudiantes buscan más recursos, filtros o accesos rápidos. Mejorar continuamente significa revisar qué funciona, qué causa confusión y qué puede simplificarse. También implica escuchar retroalimentación y hacer ajustes sin perder la identidad visual ni la estructura principal. Este enfoque evita que el sitio se vuelva obsoleto y mantiene la experiencia útil, clara y cercana para quienes la usan.'
    }
  };

  var searchableItems = topicCards.concat(articleCards);

  function closeMenu() {
    if (!menuToggle || !mainNav) {
      return;
    }

    menuToggle.classList.remove('is-open');
    mainNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    var navLinks = mainNav.querySelectorAll('a');

    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', closeMenu);
    }
  }

  function openModal(title, text) {
    if (!modal || !modalTitle || !modalText) {
      return;
    }

    modalTitle.textContent = title;
    modalText.textContent = text;
    modal.hidden = false;
  }

  function closeModal() {
    if (!modal) {
      return;
    }

    modal.hidden = true;
  }

  for (var t = 0; t < topicCards.length; t++) {
    topicCards[t].setAttribute('tabindex', '0');
    topicCards[t].setAttribute('role', 'button');

    topicCards[t].addEventListener('click', function () {
      var key = this.getAttribute('data-topic');
      var info = topicTexts[key];

      if (info) {
        openModal(info.title, info.text);
      }
    });

    topicCards[t].addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.click();
      }
    });
  }

  for (var a = 0; a < articleCards.length; a++) {
    articleCards[a].setAttribute('tabindex', '0');
    articleCards[a].setAttribute('role', 'link');

    articleCards[a].addEventListener('click', function () {
      var url = this.getAttribute('data-url');

      if (url) {
        window.open(url, '_blank');
      }
    });

    articleCards[a].addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.click();
      }
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
      closeMenu();
    }
  });

  function normalize(text) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  var topicsGrid = document.querySelector('.topics-grid');
  var noResults = document.createElement('p');
  noResults.className = 'no-results is-hidden';
  noResults.textContent = 'No se encontraron temas o artículos relacionados con tu búsqueda.';

  if (topicsGrid) {
    topicsGrid.appendChild(noResults);
  }

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var query = normalize(searchInput.value.trim());
      var matches = 0;

      for (var s = 0; s < searchableItems.length; s++) {
        var item = searchableItems[s];
        var topicKey = item.getAttribute('data-topic');
        var extraText = '';

        if (topicKey && topicTexts[topicKey]) {
          extraText = topicTexts[topicKey].text;
        }

        var text = normalize(item.textContent + ' ' + extraText + ' ' + (item.getAttribute('data-title') || ''));
        var match = query === '' || text.indexOf(query) !== -1;

        if (match) {
          item.classList.remove('is-hidden');
          matches++;
        } else {
          item.classList.add('is-hidden');
        }
      }

      if (query === '' || matches > 0) {
        noResults.classList.add('is-hidden');
      } else {
        noResults.classList.remove('is-hidden');
      }
    });
  }

  if (backTop) {
    backTop.addEventListener('click', function () {
      var inicio = document.querySelector('#inicio');

      if (inicio) {
        inicio.scrollIntoView({ behavior: 'smooth' });
      }
    });

    window.addEventListener('scroll', function () {
      if (window.scrollY > 360) {
        backTop.classList.add('is-visible');
      } else {
        backTop.classList.remove('is-visible');
      }
    });
  }
});