# CEJUP · Círculo de Estudios sobre Justicia Penal

Sitio web del Círculo de Estudios sobre Justicia Penal (CEJUP), organización estudiantil de la carrera de Derecho de la Universidad Científica del Sur.

HTML, CSS y JavaScript puros: no necesita instalar nada. Para verlo en local basta con abrir `index.html` en el navegador (o usar la extensión *Live Server* de VS Code).

## Estructura

```
index.html            Inicio
nosotros.html         Quiénes somos, misión, visión, objetivos y estructura
publicaciones.html    Lista de artículos, notas y papers (filtros y buscador)
publicacion.html      Página de cada publicación (?id=...)
galeria.html          Actividades y fotos

data/publicaciones.js  ← aquí se agregan las publicaciones
data/actividades.js    ← aquí se agregan las actividades y sus fotos
docs/                  PDFs de las publicaciones
assets/css/styles.css  Estilos (colores en el bloque :root)
assets/js/main.js      Cabecera, menú, pie y lógica de las páginas
assets/img/            Logo, foto del equipo y galería
```

## Agregar una publicación

1. Copiar el PDF a `docs/` con un nombre sin espacios ni tildes, por ejemplo `docs/imputacion-objetiva.pdf`.
2. En `data/publicaciones.js`, copiar un bloque `{ ... }` y llenar sus datos (`tipo` puede ser `"articulo"`, `"nota"` o `"paper"`).
3. Poner la ruta del PDF en `pdf: "docs/imputacion-objetiva.pdf"`.

La publicación aparece sola en Inicio, en su sección y con su propia página.

> Las publicaciones marcadas con `ejemplo: true` son de muestra: hay que borrarlas cuando lleguen las reales.

## Agregar fotos a una actividad

1. Copiar las fotos a `assets/img/galeria/` (de preferencia JPG de unos 1600 px de ancho).
2. En `data/actividades.js`, añadir las rutas en `fotos: [...]` de la actividad. La primera foto es la portada.

## Publicación

Se publica con GitHub Pages desde la rama `main`, carpeta raíz.

Instagram: [@cejupucsur](https://www.instagram.com/cejupucsur/) · LinkedIn: [cejupucsur](https://www.linkedin.com/company/cejupucsur/)
