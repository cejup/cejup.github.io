/* =========================================================
   CEJUP · lógica del sitio
   - Cabecera, menú y pie de página comunes
   - Listas de publicaciones y actividades (desde data/*.js)
   ========================================================= */
(function () {
  "use strict";

  const SITIO = {
    instagram: "https://www.instagram.com/cejupucsur/",
    linkedin: "https://www.linkedin.com/company/cejupucsur/",
    whatsapp: "https://wa.me/51969100823",
    telefono: "969 100 823"
  };

  const TIPOS = {
    articulo: { singular: "Artículo", plural: "Artículos", icono: "articulo", descripcion: "Análisis e investigación sobre Derecho Penal y Procesal Penal." },
    nota: { singular: "Nota", plural: "Notas", icono: "nota", descripcion: "Comentarios breves sobre casos, jurisprudencia y temas de actualidad." },
    paper: { singular: "Paper", plural: "Papers", icono: "paper", descripcion: "Investigaciones académicas extensas, con metodología y referencias." }
  };

  const porFecha = (a, b) => String(b.fecha).localeCompare(String(a.fecha));
  const PUBS = (window.CEJUP_PUBLICACIONES || []).slice().sort(porFecha);
  const ACTS = (window.CEJUP_ACTIVIDADES || []).slice().sort(porFecha);

  /* ---------- Utilidades ---------- */
  const $ = (s, c = document) => c.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const icon = n => `<svg class="i" aria-hidden="true"><use href="#i-${n}"/></svg>`;
  const fechaLarga = iso => new Date(iso + "T12:00:00").toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" });
  const normal = s => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const cuenta = (n, uno, varios) => `${n} ${n === 1 ? uno : varios}`;
  const urlPub = p => `publicacion.html?id=${encodeURIComponent(p.id)}`;

  /* ---------- Iconos ---------- */
  const ICONOS = {
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V17M8 7.2v.1M12 17v-6.5M12 13.5a2.5 2.5 0 0 1 5 0V17"/>',
    whatsapp: '<path d="M4 20l1.3-3.9A8 8 0 1 1 8.2 19z"/><path d="M9.2 8.6c-.3 2.8 3.4 6.5 6.2 6.2l.9-1.4-1.9-.9-.9.7a4.6 4.6 0 0 1-2.6-2.6l.7-.9-.9-1.9z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    "chevron-down": '<path d="M6 9l6 6 6-6"/>',
    "chevron-left": '<path d="M15 6l-6 6 6 6"/>',
    "chevron-right": '<path d="M9 6l6 6-6 6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 20a6.5 6.5 0 0 0-3-5.5"/>',
    articulo: '<path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2zM22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z"/>',
    nota: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
    paper: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/>',
    formacion: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
    difusion: '<path d="M3 10v4h3l7 4V6L6 10z"/><path d="M16 9a4 4 0 0 1 0 6M19 6.5a8 8 0 0 1 0 11"/>',
    scales: '<path d="M12 3v18M8 21h8M5 7h14M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    share: '<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.1"/>'
  };

  function sprite() {
    const symbols = Object.entries(ICONOS)
      .map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24">${v}</symbol>`).join("");
    document.body.insertAdjacentHTML("afterbegin",
      `<svg width="0" height="0" style="position:absolute" aria-hidden="true">${symbols}</svg>`);
  }

  /* ---------- Cabecera y pie ---------- */
  function cabecera(pagina) {
    const h = $("#site-header");
    if (!h) return;
    const activo = k => (k === pagina ? ' class="active" aria-current="page"' : "");

    h.insertAdjacentHTML("beforebegin", `
      <div class="utilbar"><div class="wrap">
        <div class="social">
          <a href="${SITIO.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon("instagram")}</a>
          <a href="${SITIO.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon("linkedin")}</a>
          <a href="${SITIO.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon("whatsapp")}</a>
        </div>
        <span class="uni">Universidad Científica del Sur · Carrera de Derecho</span>
      </div></div>`);

    h.className = "site-header";
    h.innerHTML = `
      <div class="wrap">
        <a class="brand" href="index.html">
          <img src="assets/img/logo.webp" alt="" width="52" height="52">
          <span><b>CEJUP</b><small>Círculo de Estudios sobre Justicia Penal</small></span>
        </a>
        <nav class="nav" id="nav" aria-label="Principal">
          <a href="index.html"${activo("inicio")}>Inicio</a>
          <a href="nosotros.html"${activo("nosotros")}>Nosotros</a>
          <div class="has-sub">
            <a href="publicaciones.html"${activo("publicaciones")}>Publicaciones ${icon("chevron-down")}</a>
            <div class="sub">
              ${Object.entries(TIPOS).map(([k, t]) => `<a href="publicaciones.html?tipo=${k}">${icon(t.icono)}${t.plural}</a>`).join("")}
              <hr><a href="publicaciones.html">${icon("arrow")}Ver todas</a>
            </div>
          </div>
          <a href="galeria.html"${activo("galeria")}>Galería</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a class="icon-btn" href="publicaciones.html#buscar" aria-label="Buscar publicaciones">${icon("search")}</a>
        <button class="menu-btn" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav">${icon("menu")}</button>
      </div>`;

    const btn = $(".menu-btn", h);
    const nav = $("#nav", h);
    const cerrar = () => { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.innerHTML = icon("menu"); };
    btn.addEventListener("click", () => {
      const abierto = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(abierto));
      btn.innerHTML = icon(abierto ? "close" : "menu");
    });
    nav.addEventListener("click", e => { if (e.target.closest("a")) cerrar(); });
  }

  function pie() {
    const f = $("#contacto");
    if (!f) return;
    f.className = "site-footer";
    f.innerHTML = `
      <div class="wrap foot-top">
        <div>
          <a class="brand" href="index.html">
            <img src="assets/img/logo.webp" alt="" width="60" height="60">
            <span><b>CEJUP</b><small>Círculo de Estudios sobre Justicia Penal</small></span>
          </a>
          <p class="about">Organización estudiantil de la carrera de Derecho de la Universidad Científica del Sur. Estudiamos, investigamos y debatimos las ciencias penales.</p>
        </div>
        <div>
          <h4>Explora</h4>
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="nosotros.html">Nosotros</a></li>
            <li><a href="galeria.html">Galería</a></li>
          </ul>
        </div>
        <div>
          <h4>Publicaciones</h4>
          <ul>
            ${Object.entries(TIPOS).map(([k, t]) => `<li><a href="publicaciones.html?tipo=${k}">${t.plural}</a></li>`).join("")}
          </ul>
        </div>
        <div class="contact">
          <h4>Contacto</h4>
          <ul>
            <li><a href="${SITIO.instagram}" target="_blank" rel="noopener">${icon("instagram")}@cejupucsur</a></li>
            <li><a href="${SITIO.linkedin}" target="_blank" rel="noopener">${icon("linkedin")}CEJUP en LinkedIn</a></li>
            <li><a href="${SITIO.whatsapp}" target="_blank" rel="noopener">${icon("whatsapp")}${SITIO.telefono}</a></li>
          </ul>
        </div>
      </div>
      <div class="foot-bottom"><div class="wrap">
        <span>© ${new Date().getFullYear()} CEJUP · Círculo de Estudios sobre Justicia Penal</span>
        <span>Universidad Científica del Sur · Lima, Perú</span>
      </div></div>`;
  }

  /* ---------- Piezas reutilizables ---------- */
  function itemPublicacion(p) {
    const t = TIPOS[p.tipo] || { singular: p.tipo };
    return `
      <article class="pub">
        <div class="pub-meta">
          <span class="badge badge-${esc(p.tipo)}">${esc(t.singular)}</span>
          ${p.ejemplo ? '<span class="badge badge-ejemplo">Ejemplo</span>' : ""}
          <time datetime="${esc(p.fecha)}">${fechaLarga(p.fecha)}</time>
        </div>
        <h3 class="pub-title"><a href="${urlPub(p)}">${esc(p.titulo)}</a></h3>
        ${p.autores && p.autores.length ? `<p class="pub-authors">${esc(p.autores.join(", "))}</p>` : ""}
        ${p.resumen ? `<p class="pub-abstract">${esc(p.resumen)}</p>` : ""}
        <div class="pub-actions">
          <a class="chip-btn" href="${urlPub(p)}">${icon("arrow")}Leer</a>
          ${p.pdf ? `<a class="chip-btn" href="${esc(p.pdf)}" target="_blank" rel="noopener">${icon("file")}PDF</a>` : ""}
        </div>
      </article>`;
  }

  function vacio(titulo, texto) {
    return `<div class="empty">${icon("file")}<strong>${titulo}</strong>${texto}</div>`;
  }

  function portada(a) {
    if (a.fotos && a.fotos.length) {
      return `<div class="cover"><img src="${esc(a.fotos[0])}" alt="${esc(a.titulo)}" loading="lazy"></div>`;
    }
    return `<div class="cover placeholder"><img class="seal" src="assets/img/logo.webp" alt=""><span>${icon("camera")}Fotos próximamente</span></div>`;
  }

  function tarjetaActividad(a) {
    return `
      <a class="act-card" href="galeria.html#${esc(a.id)}">
        ${portada(a)}
        <div class="act-body">
          <time datetime="${esc(a.fecha)}">${fechaLarga(a.fecha)}</time>
          <h3>${esc(a.titulo)}</h3>
          <p>${esc([a.modalidad, a.lugar].filter(Boolean).join(" · "))}</p>
        </div>
      </a>`;
  }

  /* ---------- Inicio ---------- */
  function inicio() {
    // Categorías
    const cats = $("#cats");
    if (cats) {
      cats.innerHTML = Object.entries(TIPOS).map(([k, t]) => {
        const n = PUBS.filter(p => p.tipo === k).length;
        return `
          <a class="cat" href="publicaciones.html?tipo=${k}">
            <span class="cat-icon">${icon(t.icono)}</span>
            <span class="cat-name">${t.plural}</span>
            <span class="cat-count">${cuenta(n, "publicación", "publicaciones")}</span>
            <p>${t.descripcion}</p>
            <span class="link-more">Ver ${t.plural.toLowerCase()} ${icon("arrow")}</span>
          </a>`;
      }).join("");
    }

    // Últimas publicaciones
    const ultimas = $("#ultimas");
    if (ultimas) {
      ultimas.innerHTML = PUBS.length
        ? PUBS.slice(0, 3).map(itemPublicacion).join("")
        : vacio("Muy pronto", "Estamos preparando nuestras primeras publicaciones.");
    }

    // Actividades recientes
    const acts = $("#actividades");
    if (acts) acts.innerHTML = ACTS.slice(0, 3).map(tarjetaActividad).join("");

    // Franja "Lo último"
    const ticker = $("#ticker");
    const items = PUBS.slice(0, 5);
    if (ticker && items.length) {
      const link = $("#tk-link");
      let i = 0, timer;
      const mostrar = n => {
        i = (n + items.length) % items.length;
        const p = items[i];
        link.style.opacity = 0;
        setTimeout(() => {
          link.href = urlPub(p);
          link.textContent = `${TIPOS[p.tipo] ? TIPOS[p.tipo].singular : ""}: ${p.titulo}`;
          link.style.opacity = 1;
        }, 200);
      };
      const auto = () => { clearInterval(timer); timer = setInterval(() => mostrar(i + 1), 6000); };
      $("#tk-prev").addEventListener("click", () => { mostrar(i - 1); auto(); });
      $("#tk-next").addEventListener("click", () => { mostrar(i + 1); auto(); });
      ticker.hidden = false;
      mostrar(0);
      if (items.length > 1) auto();
    }
  }

  /* ---------- Lista de publicaciones ---------- */
  function publicaciones() {
    const params = new URLSearchParams(location.search);
    const estado = {
      tipo: TIPOS[params.get("tipo")] ? params.get("tipo") : "",
      q: params.get("q") || ""
    };
    const tabs = $("#tabs");
    const input = $("#buscar");
    const lista = $("#lista");
    const info = $("#info");
    input.value = estado.q;

    function pintarTabs() {
      const opciones = [["", "Todas", PUBS.length]].concat(
        Object.entries(TIPOS).map(([k, t]) => [k, t.plural, PUBS.filter(p => p.tipo === k).length]));
      tabs.innerHTML = opciones.map(([k, nombre, n]) =>
        `<button class="tab" role="tab" data-tipo="${k}" aria-selected="${estado.tipo === k}">${nombre} <span class="n">${n}</span></button>`).join("");
    }

    function pintar() {
      const t = TIPOS[estado.tipo];
      $("#pubs-title").textContent = t ? t.plural : "Publicaciones";
      $("#pubs-sub").textContent = t ? t.descripcion : "Artículos, notas y papers elaborados por los miembros del CEJUP.";
      $("#pubs-crumb").textContent = t ? t.plural : "Publicaciones";
      document.title = `${t ? t.plural : "Publicaciones"} · CEJUP`;

      const q = normal(estado.q.trim());
      const res = PUBS.filter(p =>
        (!estado.tipo || p.tipo === estado.tipo) &&
        (!q || normal([p.titulo, (p.autores || []).join(" "), p.resumen, (p.etiquetas || []).join(" ")].join(" ")).includes(q)));

      info.textContent = q
        ? `${cuenta(res.length, "resultado", "resultados")} para “${estado.q.trim()}”`
        : `${cuenta(res.length, "publicación", "publicaciones")}`;
      lista.innerHTML = res.length
        ? res.map(itemPublicacion).join("")
        : (q ? vacio("Sin resultados", "Prueba con otras palabras o revisa otra sección.")
             : vacio("Aún no hay publicaciones aquí", "Muy pronto compartiremos nuevos trabajos en esta sección."));

      const url = new URLSearchParams();
      if (estado.tipo) url.set("tipo", estado.tipo);
      if (estado.q.trim()) url.set("q", estado.q.trim());
      history.replaceState(null, "", location.pathname + (url.toString() ? "?" + url : "") + location.hash);
    }

    tabs.addEventListener("click", e => {
      const b = e.target.closest(".tab");
      if (!b) return;
      estado.tipo = b.dataset.tipo;
      pintarTabs();
      pintar();
    });
    input.addEventListener("input", () => { estado.q = input.value; pintar(); });

    pintarTabs();
    pintar();
    if (location.hash === "#buscar") input.focus();
  }

  /* ---------- Detalle de publicación ---------- */
  function publicacion() {
    const app = $("#app");
    const id = new URLSearchParams(location.search).get("id");
    const p = PUBS.find(x => x.id === id);

    if (!p) {
      app.innerHTML = `
        <div class="page-hero compact"><div class="wrap">
          <nav class="crumbs"><a href="index.html">Inicio</a><span>/</span><a href="publicaciones.html">Publicaciones</a></nav>
          <h1>No encontramos esta publicación</h1>
        </div></div>
        <section><div class="wrap">
          ${vacio("El enlace no es válido o la publicación fue retirada", "Revisa la lista completa de publicaciones.")}
          <p style="text-align:center;margin-top:24px"><a class="btn btn-dark" href="publicaciones.html">Ver publicaciones</a></p>
        </div></section>`;
      return;
    }

    const t = TIPOS[p.tipo] || { singular: p.tipo, plural: "Publicaciones" };
    document.title = `${p.titulo} · CEJUP`;
    const relacionadas = PUBS.filter(x => x.id !== p.id && x.tipo === p.tipo)
      .concat(PUBS.filter(x => x.id !== p.id && x.tipo !== p.tipo)).slice(0, 4);
    const pdf = p.pdf ? esc(p.pdf) : "";

    let documento = "";
    if (p.pdf) {
      documento = `
        <div class="pdf-viewer">
          <h2>Documento completo</h2>
          <iframe class="pdf-frame" src="${pdf}#view=FitH" title="Documento: ${esc(p.titulo)}"></iframe>
          <div class="pdf-mobile side-box">
            <p>Abre el documento completo en PDF para leerlo desde tu celular.</p>
            <a class="btn btn-dark" href="${pdf}" target="_blank" rel="noopener">${icon("file")}Abrir PDF</a>
          </div>
        </div>`;
    } else if (!p.contenido) {
      documento = vacio("Documento en preparación", "El texto completo estará disponible muy pronto.");
    }

    app.innerHTML = `
      <div class="page-hero compact"><div class="wrap">
        <nav class="crumbs">
          <a href="index.html">Inicio</a><span>/</span>
          <a href="publicaciones.html">Publicaciones</a><span>/</span>
          <a href="publicaciones.html?tipo=${esc(p.tipo)}">${esc(t.plural)}</a>
        </nav>
        <div class="detail-meta">
          <span class="badge badge-${esc(p.tipo)}">${esc(t.singular)}</span>
          ${p.ejemplo ? '<span class="badge badge-ejemplo">Ejemplo</span>' : ""}
          <time datetime="${esc(p.fecha)}">${fechaLarga(p.fecha)}</time>
        </div>
        <h1>${esc(p.titulo)}</h1>
        ${p.autores && p.autores.length ? `<p class="pub-authors">${esc(p.autores.join(", "))}</p>` : ""}
        ${p.etiquetas && p.etiquetas.length ? `<div class="tags">${p.etiquetas.map(e => `<span class="tag">${esc(e)}</span>`).join("")}</div>` : ""}
      </div></div>

      <section><div class="wrap detail">
        <div>
          ${p.ejemplo ? `<div class="notice">${icon("info")}<span>Esta es una publicación de ejemplo para mostrar cómo se verá la sección. Se reemplazará por los trabajos del CEJUP.</span></div>` : ""}
          ${p.resumen ? `<div class="abstract"><h2>Resumen</h2><p>${esc(p.resumen)}</p></div>` : ""}
          ${p.contenido ? `<div class="prose">${p.contenido}</div>` : ""}
          ${documento}
        </div>
        <aside>
          <div class="side-box">
            <h3>Acciones</h3>
            <div class="actions-box">
              ${p.pdf ? `
                <a class="btn btn-dark" href="${pdf}" download>${icon("download")}Descargar PDF</a>
                <a class="btn btn-outline" href="${pdf}" target="_blank" rel="noopener">${icon("external")}Abrir en otra pestaña</a>` : ""}
              <button class="btn btn-outline" id="compartir" type="button">${icon("share")}<span>Compartir</span></button>
            </div>
          </div>
          ${relacionadas.length ? `
            <div class="side-box">
              <h3>Sigue leyendo</h3>
              <div class="related">
                ${relacionadas.map(r => `<a href="${urlPub(r)}">${esc(r.titulo)}<small>${esc((TIPOS[r.tipo] || {}).singular || "")} · ${fechaLarga(r.fecha)}</small></a>`).join("")}
              </div>
            </div>` : ""}
        </aside>
      </div></section>`;

    $("#compartir").addEventListener("click", async e => {
      const btn = e.currentTarget;
      const datos = { title: p.titulo, text: `${p.titulo} · CEJUP`, url: location.href };
      try {
        if (navigator.share) { await navigator.share(datos); return; }
        await navigator.clipboard.writeText(location.href);
        btn.querySelector("span").textContent = "¡Enlace copiado!";
        setTimeout(() => { btn.querySelector("span").textContent = "Compartir"; }, 2200);
      } catch (_) { /* el usuario canceló */ }
    });
  }

  /* ---------- Galería ---------- */
  function galeria() {
    const cont = $("#galeria");
    cont.innerHTML = ACTS.map(a => {
      const fotos = a.fotos || [];
      let media = portada(a);
      if (fotos.length) {
        media = `<button class="cover" data-act="${esc(a.id)}" data-i="0" aria-label="Ver fotos: ${esc(a.titulo)}"><img src="${esc(fotos[0])}" alt="${esc(a.titulo)}" loading="lazy"></button>`;
        if (fotos.length > 1) {
          media += `<div class="thumbs">${fotos.slice(1, 5).map((f, k) => `
            <button data-act="${esc(a.id)}" data-i="${k + 1}" aria-label="Foto ${k + 2}">
              <img src="${esc(f)}" alt="" loading="lazy">
              ${k === 3 && fotos.length > 5 ? `<span class="more">+${fotos.length - 5}</span>` : ""}
            </button>`).join("")}</div>`;
        }
      }
      return `
        <article class="act" id="${esc(a.id)}">
          <div class="act-media">${media}</div>
          <div class="act-info">
            <div class="meta">
              <span>${icon("calendar")}${fechaLarga(a.fecha)}</span>
              ${a.modalidad ? `<span>${icon("users")}${esc(a.modalidad)}</span>` : ""}
              ${a.lugar ? `<span>${icon("pin")}${esc(a.lugar)}</span>` : ""}
            </div>
            <h2>${esc(a.titulo)}</h2>
            ${a.subtitulo ? `<p class="subtitle">${esc(a.subtitulo)}</p>` : ""}
            ${a.descripcion ? `<p class="desc">${esc(a.descripcion)}</p>` : ""}
            ${a.ponentes && a.ponentes.length ? `
              <div class="speakers"><h3>Ponentes</h3><ul>${a.ponentes.map(n => `<li>${esc(n)}</li>`).join("")}</ul></div>` : ""}
            ${a.instagram ? `<a class="btn btn-outline" href="${esc(a.instagram)}" target="_blank" rel="noopener">${icon("instagram")}Ver en Instagram</a>` : ""}
          </div>
        </article>`;
    }).join("");

    // Visor de fotos
    const lb = document.createElement("dialog");
    lb.className = "lightbox";
    lb.innerHTML = `
      <img alt="">
      <button class="lb-btn lb-close" aria-label="Cerrar">${icon("close")}</button>
      <button class="lb-btn lb-prev" aria-label="Anterior">${icon("chevron-left")}</button>
      <button class="lb-btn lb-next" aria-label="Siguiente">${icon("chevron-right")}</button>
      <span class="lb-count"></span>`;
    document.body.appendChild(lb);
    let fotos = [], idx = 0;
    const ver = n => {
      idx = (n + fotos.length) % fotos.length;
      $("img", lb).src = fotos[idx];
      $(".lb-count", lb).textContent = `${idx + 1} / ${fotos.length}`;
      $(".lb-prev", lb).hidden = $(".lb-next", lb).hidden = fotos.length < 2;
    };
    cont.addEventListener("click", e => {
      const b = e.target.closest("[data-act]");
      if (!b) return;
      fotos = (ACTS.find(a => a.id === b.dataset.act) || {}).fotos || [];
      if (!fotos.length) return;
      ver(Number(b.dataset.i));
      lb.showModal();
    });
    $(".lb-close", lb).addEventListener("click", () => lb.close());
    $(".lb-prev", lb).addEventListener("click", () => ver(idx - 1));
    $(".lb-next", lb).addEventListener("click", () => ver(idx + 1));
    lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
    lb.addEventListener("keydown", e => {
      if (e.key === "ArrowLeft") ver(idx - 1);
      if (e.key === "ArrowRight") ver(idx + 1);
    });

    if (location.hash) {
      const destino = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (destino) destino.scrollIntoView();
    }
  }

  /* ---------- Arranque ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    const pagina = document.body.dataset.page;
    sprite();
    cabecera(pagina);
    pie();
    const init = { inicio, publicaciones, publicacion, galeria }[pagina];
    if (init) init();
  });
})();
