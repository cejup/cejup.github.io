/* =========================================================
   CEJUP · Círculo de Estudios sobre Justicia Penal
   - Cabecera, menú y pie de página comunes
   - Líneas, secciones y publicaciones (desde data/*.js)
   ========================================================= */
(function () {
  "use strict";

  const SITIO = {
    instagram: "https://www.instagram.com/cejupucsur/",
    linkedin: "https://www.linkedin.com/company/cejupucsur/",
    whatsapp: "https://wa.me/51929340631",
    telefonos: [
      { numero: "51929340631", texto: "+51 929 340 631" },
      { numero: "51997985282", texto: "+51 997 985 282" }
    ],
    correo: "cejupucsur@gmail.com"
  };

  const LINEAS = window.CEJUP_LINEAS || [];
  const SECCIONES = window.CEJUP_SECCIONES || [];
  const PUBS = (window.CEJUP_PUBLICACIONES || []).slice()
    .sort((a, b) => String(b.fecha).localeCompare(String(a.fecha)));

  const linea = id => LINEAS.find(l => l.id === id);
  const seccion = id => SECCIONES.find(s => s.id === id);
  const SECCIONES_FIJAS = SECCIONES.filter(s => s.id !== "articulos");

  /* ---------- Utilidades ---------- */
  const $ = (s, c = document) => c.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const icon = n => `<svg class="i" aria-hidden="true"><use href="#i-${n}"/></svg>`;
  const fechaLarga = iso => new Date(iso + "T12:00:00").toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" });
  const normal = s => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const cuenta = (n, uno, varios) => `${n} ${n === 1 ? uno : varios}`;
  const urlPub = p => `publicacion.html?id=${encodeURIComponent(p.id)}`;
  const urlRepo = (params = {}) => {
    const u = new URLSearchParams(Object.entries(params).filter(([, v]) => v));
    return "repositorio.html" + (u.toString() ? "?" + u : "");
  };

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
    share: '<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.1"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6 8.5-6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    formacion: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
    difusion: '<path d="M3 10v4h3l7 4V6L6 10z"/><path d="M16 9a4 4 0 0 1 0 6M19 6.5a8 8 0 0 1 0 11"/>',
    /* Líneas de investigación */
    columns: '<path d="M3 21h18M4 18h16M5 18V9M9.5 18V9M14.5 18V9M19 18V9M3 9l9-6 9 6z"/>',
    scales: '<path d="M12 3v18M8 21h8M5 7h14M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0z"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    book: '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20v-3M9 7h7M9 11h5"/>',
    fingerprint: '<path d="M7 18.5c1.2-1.8 2-4 2-6.5a3 3 0 0 1 6 0c0 1.2-.1 2.4-.4 3.5M12 12c0 3.4-1.1 6.4-3 8.5M17.5 16.5c.3-1.4.5-2.9.5-4.5a6 6 0 0 0-11.3-2.8M4.5 15c.3-1 .5-2 .5-3a7 7 0 0 1 1-3.6M15.2 19.5c.4-.8.8-1.6 1-2.5"/>',
    shield: '<path d="M12 3l8 3v6c0 4.6-3.4 8.3-8 9-4.6-.7-8-4.4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    /* Secciones */
    articulo: '<path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2zM22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z"/>',
    landmark: '<path d="M3 21h18M5 21V11M19 21V11M9 21V11M15 21V11M2 11h20M12 3l9 5H3z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    newspaper: '<path d="M4 5h13v14a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2z"/><path d="M17 9h3v10a2 2 0 0 1-4 0M7.5 9h6M7.5 13h6M7.5 17h4"/>'
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
        <span class="uni">Lima · Perú</span>
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
          <div class="has-sub">
            <a href="index.html#lineas">Líneas ${icon("chevron-down")}</a>
            <div class="sub">
              ${LINEAS.map(l => `<a href="${urlRepo({ linea: l.id })}">${icon(l.icono)}${esc(l.nombre)}</a>`).join("")}
            </div>
          </div>
          <div class="has-sub">
            <a href="index.html#secciones">Secciones ${icon("chevron-down")}</a>
            <div class="sub">
              ${SECCIONES_FIJAS.map(s => `<a href="${urlRepo({ seccion: s.id })}">${icon(s.icono)}${esc(s.nombre)}</a>`).join("")}
            </div>
          </div>
          <a href="repositorio.html"${activo("repositorio")}>Repositorio</a>
          <a href="nosotros.html"${activo("nosotros")}>Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a class="icon-btn" href="repositorio.html#buscar" aria-label="Buscar en el repositorio">${icon("search")}</a>
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
          <p class="about">Organización estudiantil dedicada al estudio, la investigación y el debate de las ciencias penales.</p>
        </div>
        <div>
          <h4>Líneas</h4>
          <ul>${LINEAS.map(l => `<li><a href="${urlRepo({ linea: l.id })}">${esc(l.nombre)}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Secciones</h4>
          <ul>
            ${SECCIONES.map(s => `<li><a href="${urlRepo({ seccion: s.id })}">${esc(s.nombre)}</a></li>`).join("")}
            <li><a href="nosotros.html">Nosotros</a></li>
          </ul>
        </div>
        <div class="contact">
          <h4>Contacto</h4>
          <ul>
            <li><a href="${SITIO.instagram}" target="_blank" rel="noopener">${icon("instagram")}Instagram</a></li>
            <li><a href="${SITIO.linkedin}" target="_blank" rel="noopener">${icon("linkedin")}LinkedIn</a></li>
            <li class="tels">${icon("whatsapp")}<span>${SITIO.telefonos.map(t => `<a href="https://wa.me/${t.numero}" target="_blank" rel="noopener">${t.texto}</a>`).join("<i>·</i>")}</span></li>
            <li><a href="mailto:${SITIO.correo}">${icon("mail")}${SITIO.correo}</a></li>
          </ul>
        </div>
      </div>
      <div class="wrap"><div class="greca" aria-hidden="true"></div></div>
      <div class="foot-bottom"><div class="wrap">
        <span>© ${new Date().getFullYear()} CEJUP · Círculo de Estudios sobre Justicia Penal</span>
        <span>Lima, Perú</span>
      </div></div>`;
  }

  /* ---------- Piezas reutilizables ---------- */
  function etiquetasPub(p) {
    const s = seccion(p.seccion);
    const l = linea(p.linea);
    return `
      ${s ? `<span class="badge badge-sec">${esc(s.corto)}</span>` : ""}
      ${l ? `<span class="badge badge-linea">${esc(l.nombre)}</span>` : ""}
      ${p.ejemplo ? '<span class="badge badge-ejemplo">Ejemplo</span>' : ""}
      <time datetime="${esc(p.fecha)}">${fechaLarga(p.fecha)}</time>`;
  }

  function itemPublicacion(p, destacada) {
    const s = seccion(p.seccion);
    const l = linea(p.linea);
    const kicker = [s ? s.corto : "", l ? l.nombre : ""].filter(Boolean).join(" · ");
    return `
      <article class="card${destacada ? " featured" : ""}">
        <div class="card-body">
          <span class="card-kicker">${esc(kicker)}</span>
          <h3><a href="${urlPub(p)}">${esc(p.titulo)}</a></h3>
          ${p.autores && p.autores.length ? `<p class="card-authors">${esc(p.autores.join(", "))}</p>` : ""}
          ${p.resumen ? `<p class="card-text">${esc(p.resumen)}</p>` : ""}
          <a class="more" href="${urlPub(p)}">Leer más</a>
        </div>
        <div class="card-foot">
          <time datetime="${esc(p.fecha)}">${fechaLarga(p.fecha)}</time>
          ${p.ejemplo ? '<span class="badge badge-ejemplo">Ejemplo</span>' : ""}
          ${p.pdf ? `<a class="pdf" href="${esc(p.pdf)}" target="_blank" rel="noopener">${icon("file")}PDF</a>` : ""}
        </div>
      </article>`;
  }

  function listaLineas(activa) {
    return LINEAS.map(l => {
      const n = PUBS.filter(p => p.linea === l.id).length;
      return `<a href="${urlRepo({ linea: l.id })}" data-linea="${l.id}" class="${activa === l.id ? "on" : ""}">${icon(l.icono)}<span>${esc(l.nombre)}</span><b>${n || ""}</b></a>`;
    }).join("");
  }

  function listaSecciones() {
    return SECCIONES.map(s => {
      const n = PUBS.filter(p => p.seccion === s.id).length;
      return `<a href="${urlRepo({ seccion: s.id })}">${icon(s.icono)}<span>${esc(s.nombre)}</span><b>${n || ""}</b></a>`;
    }).join("");
  }

  function vacio(titulo, texto) {
    return `<div class="empty"><img class="empty-seal" src="assets/img/logo.webp" alt=""><strong>${titulo}</strong>${texto}</div>`;
  }

  /* ---------- Inicio ---------- */
  function inicio() {
    // Cifras de la portada
    const dos = n => String(n).padStart(2, "0");
    if ($("#stat-lineas")) $("#stat-lineas").textContent = dos(LINEAS.length);
    if ($("#stat-secciones")) $("#stat-secciones").textContent = dos(SECCIONES_FIJAS.length);

    // Publicaciones destacadas
    const dest = $("#destacadas");
    if (dest) {
      dest.innerHTML = PUBS.length
        ? PUBS.slice(0, 3).map((p, i) => itemPublicacion(p, i === 0)).join("")
        : `
          <div class="coming">
            <img class="coming-seal" src="assets/img/logo.webp" alt="">
            <span class="eyebrow">Repositorio CEJUP</span>
            <h3>Productos <span>académicos</span></h3>
            <p>Artículos de investigación, reformas del mes, análisis de derecho comparado y periodismo jurídico, organizados en seis líneas de investigación.</p>
            <div class="coming-tags">
              ${SECCIONES.map(s => `<a href="${urlRepo({ seccion: s.id })}">${icon(s.icono)}${esc(s.nombre)}</a>`).join("")}
            </div>
          </div>`;
    }
    const sl = $("#side-lineas");
    if (sl) sl.innerHTML = listaLineas();
    const ss = $("#side-secciones");
    if (ss) ss.innerHTML = listaSecciones();

    // Marquesina con las líneas
    const marquee = $("#marquee");
    if (marquee) {
      const items = LINEAS.map(l => `<a class="marquee-item" href="${urlRepo({ linea: l.id })}">${esc(l.nombre)}</a>`).join("");
      marquee.innerHTML = items + items.replace(/<a /g, '<a tabindex="-1" aria-hidden="true" ');
    }

    // Líneas de investigación
    const lineas = $("#lineas-grid");
    if (lineas) {
      lineas.innerHTML = LINEAS.map(l => {
        const n = PUBS.filter(p => p.linea === l.id).length;
        return `
          <a class="line" href="${urlRepo({ linea: l.id })}">
            <span>
              <span class="line-name">${esc(l.nombre)}</span>
              <span class="line-desc">${esc(l.descripcion)}</span>
              ${n ? `<span class="line-count">${cuenta(n, "publicación", "publicaciones")}</span>` : ""}
            </span>
            <span class="line-go">${icon("arrow")}</span>
          </a>`;
      }).join("");
    }

    // Secciones fijas
    const secs = $("#secciones-grid");
    if (secs) {
      const romanos = ["I", "II", "III", "IV", "V", "VI"];
      secs.innerHTML = SECCIONES_FIJAS.map((s, k) => {
        const ultima = PUBS.find(p => p.seccion === s.id);
        return `
          <article class="sec-card">
            <span class="numeral" aria-hidden="true">${romanos[k] || ""}</span>
            ${icon(s.icono)}
            <h3>${esc(s.nombre)}</h3>
            <p>${esc(s.descripcion)}</p>
            ${ultima ? `
            <div class="sec-latest">
              <small>Última entrega</small>
              <a href="${urlPub(ultima)}">${esc(ultima.titulo)}</a>
            </div>` : ""}
            <a class="more" href="${urlRepo({ seccion: s.id })}">Ver sección</a>
          </article>`;
      }).join("");
    }
  }

  /* ---------- Repositorio ---------- */
  function repositorio() {
    const params = new URLSearchParams(location.search);
    const estado = {
      seccion: seccion(params.get("seccion")) ? params.get("seccion") : "",
      linea: linea(params.get("linea")) ? params.get("linea") : "",
      q: params.get("q") || ""
    };
    const tabs = $("#tabs");
    const select = $("#filtro-linea");
    const input = $("#buscar");
    const lista = $("#lista");
    const info = $("#info");
    const lateral = $("#lineas-lateral");

    select.innerHTML = `<option value="">Todas las líneas</option>` +
      LINEAS.map(l => `<option value="${l.id}">${esc(l.nombre)}</option>`).join("");
    input.value = estado.q;

    function pintarFiltros() {
      const opciones = [{ id: "", corto: "Todo" }].concat(SECCIONES.map(s => ({ id: s.id, corto: s.id === "articulos" ? "Artículos" : s.corto })));
      tabs.innerHTML = opciones.map(o => {
        const n = PUBS.filter(p => !o.id || p.seccion === o.id).length;
        return `<button class="tab" role="tab" type="button" data-seccion="${o.id}" aria-selected="${estado.seccion === o.id}">${esc(o.corto)}${n ? ` <span class="n">${n}</span>` : ""}</button>`;
      }).join("");
      select.value = estado.linea;
      lateral.innerHTML = listaLineas(estado.linea);
    }

    function pintar() {
      const s = seccion(estado.seccion);
      const l = linea(estado.linea);
      let kicker = "CEJUP", titulo = "Repositorio", sub = "Artículos, reformas del mes, derecho comparado y periodismo jurídico elaborados por los miembros del CEJUP.";
      if (s) { kicker = "Sección"; titulo = s.nombre; sub = s.descripcion; }
      else if (l) { kicker = "Línea de investigación"; titulo = l.nombre; sub = l.descripcion; }
      if (s && l) sub = `${s.descripcion} Línea: ${l.nombre}.`;
      $("#repo-kicker").textContent = kicker;
      $("#repo-title").textContent = titulo;
      $("#repo-sub").textContent = sub;
      $("#repo-crumb").textContent = titulo;
      document.title = `${titulo} · CEJUP`;

      const q = normal(estado.q.trim());
      const res = PUBS.filter(p =>
        (!estado.seccion || p.seccion === estado.seccion) &&
        (!estado.linea || p.linea === estado.linea) &&
        (!q || normal([p.titulo, (p.autores || []).join(" "), p.resumen, (p.etiquetas || []).join(" ")].join(" ")).includes(q)));

      info.textContent = q
        ? `${cuenta(res.length, "resultado", "resultados")} para “${estado.q.trim()}”`
        : (res.length ? cuenta(res.length, "publicación", "publicaciones") : "");
      lista.innerHTML = res.length
        ? res.map(itemPublicacion).join("")
        : (q ? vacio("Sin resultados", "Prueba con otras palabras o quita algún filtro.")
             : vacio("Nuevas publicaciones en camino", "Mientras tanto, explora nuestras líneas de investigación y secciones."));

      try {
        history.replaceState(null, "", urlRepo({ seccion: estado.seccion, linea: estado.linea, q: estado.q.trim() }) + location.hash);
      } catch (_) { /* al abrir el archivo localmente el navegador no permite cambiar la URL */ }
    }

    const actualizar = () => { pintarFiltros(); pintar(); };
    tabs.addEventListener("click", e => {
      const b = e.target.closest(".tab");
      if (!b) return;
      estado.seccion = b.dataset.seccion;
      actualizar();
    });
    select.addEventListener("change", () => { estado.linea = select.value; actualizar(); });
    lateral.addEventListener("click", e => {
      const a = e.target.closest("[data-linea]");
      if (!a) return;
      e.preventDefault();
      estado.linea = estado.linea === a.dataset.linea ? "" : a.dataset.linea;
      actualizar();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    input.addEventListener("input", () => { estado.q = input.value; pintar(); });

    actualizar();
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
          <nav class="crumbs"><a href="index.html">Inicio</a><span>/</span><a href="repositorio.html">Repositorio</a></nav>
          <h1>No encontramos esta publicación</h1>
        </div></div>
        <section><div class="wrap">
          ${vacio("El enlace no es válido o la publicación fue retirada", "Revisa el repositorio completo.")}
          <p style="text-align:center;margin-top:24px"><a class="btn btn-dark" href="repositorio.html">Ir al repositorio</a></p>
        </div></section>`;
      return;
    }

    const s = seccion(p.seccion);
    const l = linea(p.linea);
    document.title = `${p.titulo} · CEJUP`;
    const relacionadas = PUBS.filter(x => x.id !== p.id && (x.linea === p.linea || x.seccion === p.seccion))
      .concat(PUBS.filter(x => x.id !== p.id && x.linea !== p.linea && x.seccion !== p.seccion)).slice(0, 4);
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
          <a href="repositorio.html">Repositorio</a>
          ${s ? `<span>/</span><a href="${urlRepo({ seccion: s.id })}">${esc(s.nombre)}</a>` : ""}
        </nav>
        <div class="detail-meta">${etiquetasPub(p)}</div>
        <h1>${esc(p.titulo)}</h1>
        ${p.autores && p.autores.length ? `<p class="pub-authors">${esc(p.autores.join(", "))}</p>` : ""}
        ${p.etiquetas && p.etiquetas.length ? `<div class="tags">${p.etiquetas.map(e => `<span class="tag">${esc(e)}</span>`).join("")}</div>` : ""}
      </div></div>

      <section><div class="wrap with-side">
        <div>
          ${p.ejemplo ? `<div class="notice">${icon("info")}<span>Esta es una publicación de ejemplo para mostrar cómo se verá la sección. Se reemplazará por los trabajos del CEJUP.</span></div>` : ""}
          ${p.resumen ? `<div class="abstract"><h2>Resumen</h2><p>${esc(p.resumen)}</p></div>` : ""}
          ${p.contenido ? `<div class="prose">${p.contenido}</div>` : ""}
          ${documento}
        </div>
        <aside class="side">
          <div class="side-box">
            <h3>Acciones</h3>
            <div class="actions-box">
              ${p.pdf ? `
                <a class="btn btn-dark" href="${pdf}" download>${icon("download")}Descargar PDF</a>
                <a class="btn btn-line" href="${pdf}" target="_blank" rel="noopener">${icon("external")}Abrir en otra pestaña</a>` : ""}
              <button class="btn btn-line" id="compartir" type="button">${icon("share")}<span>Compartir</span></button>
            </div>
          </div>
          ${l ? `
            <a class="side-box line-box" href="${urlRepo({ linea: l.id })}">
              <span class="line-icon">${icon(l.icono)}</span>
              <span><small>Línea de investigación</small>${esc(l.nombre)}</span>
            </a>` : ""}
          ${relacionadas.length ? `
            <div class="side-box">
              <h3>Sigue leyendo</h3>
              <div class="related">
                ${relacionadas.map(r => `<a href="${urlPub(r)}">${esc(r.titulo)}<small>${esc((seccion(r.seccion) || {}).corto || "")} · ${fechaLarga(r.fecha)}</small></a>`).join("")}
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

  /* ---------- Detalles de navegación ---------- */
  function comportamientos() {
    // Cabecera compacta al desplazarse y botón para volver arriba
    const h = $("#site-header");
    const arriba = document.createElement("button");
    arriba.className = "to-top";
    arriba.type = "button";
    arriba.setAttribute("aria-label", "Volver arriba");
    arriba.innerHTML = icon("arrow");
    arriba.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    document.body.appendChild(arriba);
    const alDesplazar = () => {
      const y = window.scrollY;
      if (h) h.classList.toggle("scrolled", y > 60);
      arriba.classList.toggle("show", y > 700);
    };
    const barra = document.createElement("div");
    barra.className = "progress";
    document.body.appendChild(barra);
    const progreso = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      barra.style.setProperty("--p", max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    window.addEventListener("scroll", () => { alDesplazar(); progreso(); }, { passive: true });
    alDesplazar();
    progreso();

    // Brillo que sigue al cursor en la portada
    const hero = $(".hero");
    if (hero && window.matchMedia("(pointer: fine)").matches) {
      hero.addEventListener("pointermove", e => {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty("--mx", `${e.clientX - r.left}px`);
        hero.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    }

    // Cifras que suben
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll(".stat b").forEach(b => {
      const fin = parseInt(b.textContent, 10);
      if (!fin || quieto) return;
      const desde = fin > 100 ? fin - 30 : 0;
      const ancho = b.textContent.length;
      const t0 = performance.now();
      const paso = t => {
        const k = Math.min((t - t0) / 1400, 1);
        const v = Math.round(desde + (fin - desde) * (1 - Math.pow(1 - k, 3)));
        b.textContent = String(v).padStart(ancho, "0");
        if (k < 1) requestAnimationFrame(paso);
      };
      requestAnimationFrame(paso);
    });

    // Aparición suave de los bloques
    const bloques = document.querySelectorAll(".sec-head, .card, .line, .sec-card, .side-block, .side-box, .about-grid > *, .mv-block, .goal, .pillar, .org-item, .cta, .quote-band blockquote, .abstract, .prose");
    if (!("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("js");
    const obs = new IntersectionObserver(entradas => {
      entradas.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    bloques.forEach((b, i) => {
      b.setAttribute("data-reveal", "");
      b.style.transitionDelay = `${(i % 3) * 80}ms`;
      obs.observe(b);
    });
  }

  /* ---------- Arranque ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    const pagina = document.body.dataset.page;
    sprite();
    cabecera(pagina);
    pie();
    const init = { inicio, repositorio, publicacion }[pagina];
    if (init) init();
    comportamientos();
  });
})();
