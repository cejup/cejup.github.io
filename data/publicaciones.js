/* =========================================================
   PUBLICACIONES DEL REPOSITORIO
   ---------------------------------------------------------
   Para agregar una publicación, copia un bloque { ... } y
   cambia sus datos:

   id         Identificador único, sin espacios ni tildes
              (se usa en el enlace: publicacion.html?id=...)
   seccion    "articulos", "reformas-del-mes", "peru-mundo"
              o "caso-en-foco"  (ver data/estructura.js)
   linea      Línea de investigación: "derecho-procesal-penal",
              "derecho-penal", "politica-criminal",
              "derecho-penal-parte-especial", "criminologia"
              o "compliance"
   titulo     Título completo
   autores    Lista de autores: ["Nombre Apellido", "..."]
   fecha      Fecha de publicación en formato AAAA-MM-DD
   resumen    Uno o dos párrafos que resumen el trabajo
   etiquetas  Temas: ["Prueba", "Proceso penal"]
   pdf        Ruta del PDF dentro de docs/ (ej: "docs/mi-articulo.pdf").
              Déjalo "" si no hay PDF.
   contenido  (Opcional) Texto completo en HTML
   ejemplo    true solo para contenido de muestra; bórralo en
              las publicaciones reales
   ========================================================= */

window.CEJUP_PUBLICACIONES = [
  {
    id: "ejemplo-prueba-indiciaria",
    seccion: "articulos",
    linea: "derecho-procesal-penal",
    titulo: "Prueba indiciaria y estándar de condena en el proceso penal peruano",
    autores: ["Autor por confirmar"],
    fecha: "2026-10-15",
    resumen: "Resumen de ejemplo. Aquí aparecerá un párrafo breve con la tesis del artículo, el problema que aborda y sus principales conclusiones.",
    etiquetas: ["Prueba", "Estándar de prueba"],
    pdf: "",
    ejemplo: true
  },
  {
    id: "ejemplo-reformas-del-mes",
    seccion: "reformas-del-mes",
    linea: "politica-criminal",
    titulo: "Análisis de un proyecto de ley que modifica el Código Penal",
    autores: ["Autor por confirmar"],
    fecha: "2026-10-10",
    resumen: "Entrega de ejemplo. Cada mes, esta sección revisará los proyectos de ley en materia penal que se discuten en el Congreso: qué proponen, qué problemas resuelven y qué riesgos presentan.",
    etiquetas: ["Congreso", "Reforma penal"],
    pdf: "",
    contenido: "<p>Este es un espacio de ejemplo. Aquí aparecerá el análisis completo del proyecto de ley, que puede leerse directamente en la página o descargarse en PDF.</p><h2>Qué propone</h2><p>Resumen del proyecto y de los artículos que modifica.</p><h2>Nuestra lectura</h2><p>Comentario crítico desde la dogmática y la política criminal.</p>",
    ejemplo: true
  },
  {
    id: "ejemplo-peru-mundo",
    seccion: "peru-mundo",
    linea: "compliance",
    titulo: "Responsabilidad penal de las personas jurídicas: lo que el Perú puede aprender de otras reformas",
    autores: ["Autor por confirmar"],
    fecha: "2026-10-02",
    resumen: "Entrega de ejemplo. Esta sección tomará reformas o propuestas legislativas de otros países y analizará cómo podrían encajar en el ordenamiento jurídico peruano.",
    etiquetas: ["Derecho comparado", "Personas jurídicas"],
    pdf: "",
    ejemplo: true
  },
  {
    id: "ejemplo-caso-en-foco",
    seccion: "caso-en-foco",
    linea: "derecho-penal",
    titulo: "Comentario a una sentencia de la Corte Suprema sobre imputación objetiva",
    autores: ["Autor por confirmar"],
    fecha: "2026-09-25",
    resumen: "Entrega de ejemplo. Aquí se comentará un caso concreto: los hechos, lo que resolvió el tribunal y una opinión crítica, con un lenguaje claro y cercano.",
    etiquetas: ["Jurisprudencia", "Imputación objetiva"],
    pdf: "",
    ejemplo: true
  }
];
