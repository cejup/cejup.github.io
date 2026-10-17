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
];
