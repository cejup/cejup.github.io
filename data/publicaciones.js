/* =========================================================
   PUBLICACIONES DEL CEJUP
   ---------------------------------------------------------
   Para agregar una publicación, copia un bloque { ... } y
   cambia sus datos:

   id         Identificador único, sin espacios ni tildes
              (se usa en el enlace: publicacion.html?id=...)
   tipo       "articulo", "nota" o "paper"
   titulo     Título completo
   autores    Lista de autores: ["Nombre Apellido", "..."]
   fecha      Fecha de publicación en formato AAAA-MM-DD
   resumen    Uno o dos párrafos que resumen el trabajo
   etiquetas  Temas: ["Teoría del delito", "Proceso penal"]
   pdf        Ruta del PDF dentro de la carpeta docs/
              (ej: "docs/mi-articulo.pdf"). Déjalo "" si no hay.
   contenido  (Opcional) Texto completo en HTML, útil para notas
   ejemplo    true solo para contenido de muestra; bórralo en
              las publicaciones reales
   ========================================================= */

window.CEJUP_PUBLICACIONES = [
  {
    id: "ejemplo-imputacion-objetiva",
    tipo: "articulo",
    titulo: "La imputación objetiva en los delitos de resultado: criterios y límites",
    autores: ["Autor por confirmar"],
    fecha: "2026-10-15",
    resumen: "Resumen de ejemplo. Aquí aparecerá un párrafo breve con la tesis del artículo, el problema que aborda y sus principales conclusiones.",
    etiquetas: ["Teoría del delito", "Imputación objetiva"],
    pdf: "",
    ejemplo: true
  },
  {
    id: "ejemplo-prision-preventiva",
    tipo: "nota",
    titulo: "Prisión preventiva: ¿regla o excepción?",
    autores: ["Autor por confirmar"],
    fecha: "2026-10-08",
    resumen: "Nota de ejemplo. Las notas son textos breves sobre casos, jurisprudencia o temas de actualidad penal.",
    etiquetas: ["Proceso penal", "Medidas de coerción"],
    pdf: "",
    contenido: "<p>Este es un espacio de ejemplo. Cuando el CEJUP publique una nota, aquí aparecerá su texto completo, que puede leerse directamente en la página sin necesidad de descargar un PDF.</p><p>Las notas pueden incluir subtítulos, citas y enlaces a la jurisprudencia comentada.</p>",
    ejemplo: true
  },
  {
    id: "ejemplo-prueba-indiciaria",
    tipo: "paper",
    titulo: "Prueba indiciaria y estándar de condena en el proceso penal peruano",
    autores: ["Autor por confirmar", "Coautor por confirmar"],
    fecha: "2026-09-28",
    resumen: "Paper de ejemplo. Los papers son investigaciones más extensas, con metodología y referencias. Su texto completo se podrá leer y descargar en PDF.",
    etiquetas: ["Prueba", "Proceso penal"],
    pdf: "",
    ejemplo: true
  },
  {
    id: "ejemplo-principio-lesividad",
    tipo: "articulo",
    titulo: "El principio de lesividad frente a la expansión del Derecho Penal",
    autores: ["Autor por confirmar"],
    fecha: "2026-09-18",
    resumen: "Resumen de ejemplo. Aquí aparecerá un párrafo breve con la tesis del artículo, el problema que aborda y sus principales conclusiones.",
    etiquetas: ["Principios", "Política criminal"],
    pdf: "",
    ejemplo: true
  }
];
