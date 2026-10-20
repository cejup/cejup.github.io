/* =========================================================
   PUBLICACIONES DEL CEJUP
   ---------------------------------------------------------
   Para agregar una publicación, copia la plantilla de abajo
   dentro de los corchetes [ ] y cambia sus datos.
   Si hay varias, sepáralas con una coma.

   id         Identificador único, sin espacios ni tildes
              (se usa en el enlace: publicacion.html?id=...)
   seccion    "articulos", "reformas-del-mes", "peru-mundo"
              o "periodismo"  (ver data/estructura.js)
   linea      Línea de investigación: "derecho-penal" (Parte General),
              "derecho-penal-parte-especial", "derecho-procesal-penal",
              "politica-criminal", "criminologia" o "compliance"
   titulo     Título completo
   autores    Lista de autores: ["Nombre Apellido", "..."]
   revision   (Opcional) Edición y revisión: ["Nombre Apellido"]
   fecha      Fecha de publicación en formato AAAA-MM-DD
   resumen    Uno o dos párrafos que resumen el trabajo
   etiquetas  Temas: ["Prueba", "Proceso penal"]
   pdf        Ruta del PDF dentro de docs/ (ej: "docs/mi-articulo.pdf").
              Déjalo "" si no hay PDF.
   contenido  (Opcional) Texto completo en HTML

   PLANTILLA:

  {
    id: "prueba-indiciaria-estandar-de-condena",
    seccion: "articulos",
    linea: "derecho-procesal-penal",
    titulo: "Prueba indiciaria y estándar de condena en el proceso penal peruano",
    autores: ["Nombre Apellido"],
    fecha: "2026-11-01",
    resumen: "Breve resumen del trabajo.",
    etiquetas: ["Prueba", "Estándar de prueba"],
    pdf: "docs/prueba-indiciaria.pdf"
  }
   ========================================================= */

window.CEJUP_PUBLICACIONES = [
  {
    id: "entre-el-deber-de-reinsercion-y-el-de-sancionar",
    seccion: "periodismo",
    linea: "derecho-procesal-penal",
    titulo: "Entre el deber de reinserción y el de sancionar: Caso Liceo Naval y otros más",
    autores: ["Adriana Naomi Vilchez Bances", "Ninel Ashley Cordero Salvatierra"],
    revision: ["Santos Voltaire Pantigoso Mamani"],
    fecha: "2026-10-20",
    resumen: "A partir del caso Liceo Naval, las autoras explican en qué se diferencia el proceso que enfrentan los adolescentes infractores del proceso penal de adultos: su finalidad de reinserción, el equipo interdisciplinario, los plazos y las medidas socioeducativas. Analizan además el papel de los medios frente a la presunción de inocencia y la protección de la identidad de los menores, y lo contrastan con un caso similar ocurrido en Nueva Jersey.",
    etiquetas: ["Adolescentes infractores", "Presunción de inocencia", "Medios de comunicación", "Caso Liceo Naval"],
    pdf: "docs/entre-el-deber-de-reinsercion-y-el-de-sancionar.pdf"
  }
];
