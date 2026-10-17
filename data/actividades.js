/* =========================================================
   ACTIVIDADES Y GALERÍA DEL CEJUP
   ---------------------------------------------------------
   Para agregar una actividad, copia un bloque { ... }:

   id          Identificador único, sin espacios ni tildes
               (se usa en el enlace: galeria.html#id)
   titulo      Nombre de la actividad
   subtitulo   (Opcional) Tema o lema
   fecha       AAAA-MM-DD
   modalidad   "Presencial", "Virtual"...
   lugar       (Opcional) Dónde se realizó
   descripcion Párrafo corto sobre la actividad
   ponentes    (Opcional) Lista de expositores
   instagram   (Opcional) Enlace a la publicación en Instagram
   fotos       Rutas de las fotos dentro de assets/img/galeria/
               (ej: ["assets/img/galeria/conferencia-1.jpg"])
               La primera foto se usa como portada.
   ========================================================= */

window.CEJUP_ACTIVIDADES = [
  {
    id: "conferencia-teoria-del-delito",
    titulo: "Conferencia Magistral: Teoría del Delito y Análisis Casuístico",
    subtitulo: "Estructura dogmática y aplicación práctica en el proceso penal · Jornada Inaugural 2026-II",
    fecha: "2026-10-12",
    modalidad: "Presencial",
    lugar: "UCSUR, sede Villa · Aula I-101",
    descripcion: "Con el aula llena, una mesa de especialistas desglosó la estructura dogmática del delito (tipicidad, antijuridicidad y culpabilidad) y su impacto en las decisiones del litigio. Cerramos con el sorteo de libros de Derecho Penal entre los asistentes.",
    ponentes: ["Mg. José Willmer Cabel Noblecilla", "Prof. Jhuliana Atahuamán", "Dra. Cecilia Madrid Valerio"],
    instagram: "https://www.instagram.com/cejupucsur/p/DeelrreFiGl/",
    fotos: []
  },
  {
    id: "bienvenida-nuevos-miembros",
    titulo: "Bienvenida a los nuevos miembros",
    fecha: "2026-09-20",
    modalidad: "Presencial",
    descripcion: "Sumamos las primeras voces al Círculo. Dimos la bienvenida a los nuevos miembros afiliados, comprometidos con la investigación y el aprendizaje constante.",
    instagram: "https://www.instagram.com/cejupucsur/p/DdhK4TClpwf/",
    fotos: []
  },
  {
    id: "expediente-cejup-conocenos",
    titulo: "Expediente CEJUP: Conócenos",
    fecha: "2026-09-05",
    modalidad: "Virtual",
    descripcion: "Sesión informativa para conocer la misión del Círculo, los beneficios de ser miembro afiliado y el trabajo de cada dirección, con resolución de dudas en vivo.",
    ponentes: ["Dr. Walter Palomino Ramírez", "Dra. Cecilia Madrid Valerio"],
    instagram: "https://www.instagram.com/cejupucsur/p/Dczit9DMSn6/",
    fotos: []
  },
  {
    id: "convocatoria-2026-ii",
    titulo: "Convocatoria 2026-II",
    fecha: "2026-08-24",
    modalidad: "Virtual",
    descripcion: "Abrimos nuestra primera convocatoria para estudiantes de Derecho comprometidos con la excelencia y el liderazgo académico. El plazo se amplió hasta el 11 de setiembre.",
    instagram: "https://www.instagram.com/cejupucsur/p/Dcccum4s7JM/",
    fotos: []
  }
];
