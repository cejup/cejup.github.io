# CEJUP · Círculo de Estudios sobre Justicia Penal

Sitio web del Círculo de Estudios sobre Justicia Penal (CEJUP), organización estudiantil de Derecho.

HTML, CSS y JavaScript puros: no necesita instalar nada. Para verlo en local basta con abrir `index.html` en el navegador (o usar la extensión *Live Server* de VS Code).

## Cómo está organizado el contenido

**Líneas de investigación** (para los artículos)
Derecho Penal – Parte General · Derecho Penal – Parte Especial · Derecho Procesal Penal · Política Criminal · Criminología · Compliance

**Secciones**
- *Artículos de investigación*: trabajos por línea de investigación.
- *Las reformas del mes*: análisis de proyectos de ley y de lo que se discute en el Congreso.
- *Del Perú para el mundo, del mundo para el Perú*: reformas de otros países leídas desde el ordenamiento peruano.
- *Periodismo*: comentarios sobre casos concretos y temas de actualidad, con enfoque periodístico.

Los nombres y descripciones se editan en `data/estructura.js`.

## Archivos

```
index.html            Inicio: líneas, secciones y publicaciones recientes
repositorio.html      Todas las publicaciones, con filtros por sección y línea
publicacion.html      Página de cada publicación (?id=...)
nosotros.html         Quiénes somos, misión, visión y estructura

data/estructura.js     Líneas de investigación y secciones
data/publicaciones.js  ← aquí se agregan las publicaciones
docs/                  PDFs de las publicaciones
assets/css/styles.css  Estilos (colores en el bloque :root)
assets/js/main.js      Cabecera, menú, pie y lógica de las páginas
assets/img/            Logo y foto del equipo
```

## Agregar una publicación

1. Copiar el PDF a `docs/` con un nombre sin espacios ni tildes, por ejemplo `docs/prueba-indiciaria.pdf`.
2. En `data/publicaciones.js`, copiar un bloque `{ ... }` y llenar sus datos: `seccion`, `linea`, `titulo`, `autores`, `fecha`, `resumen`.
3. Poner la ruta del PDF en `pdf: "docs/prueba-indiciaria.pdf"`.

La publicación aparece sola en Inicio, en su sección, en su línea y con su propia página.

Mientras no haya publicaciones, el sitio muestra un aviso de «Próximamente» en cada sección.

## Publicación

Se publica con GitHub Pages desde la rama `main`, carpeta raíz.

Instagram: [@cejupucsur](https://www.instagram.com/cejupucsur/) · LinkedIn: [cejupucsur](https://www.linkedin.com/company/cejupucsur/)
