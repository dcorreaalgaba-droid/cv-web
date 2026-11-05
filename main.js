(function () {
  "use strict";

  const cv = window.CV;
  const LANG_KEY = "cv-lang";
  const fullName = cv.name.join(" ");
  const emailAddress = cv.email.join("@");

  const esc = (value) =>
    String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const initials = (text) =>
    text.split(/[\s/]+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

  const icons = {
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5zm2 .9v9.6h14V7.4l-7 5.2z M6.6 7 12 11l5.4-4z" fill="currentColor"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3.3 7.2H5v8.3h2.3zM6.2 5.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zm12.8 8c0-2.5-1.3-3.6-3.1-3.6-1.4 0-2.1.8-2.4 1.3v-1.1h-2.3v8.3h2.3v-4.4c0-1.2.5-1.9 1.5-1.9s1.5.7 1.5 1.9v4.4H19z" fill="currentColor"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 4h2v9.2l3.3-3.3 1.4 1.4L12 17l-5.7-5.7 1.4-1.4L11 13.2zM5 18.5h14v2H5z" fill="currentColor"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h10v10h-2V9.4L7.4 18 6 16.6 14.6 8H8z" fill="currentColor"/></svg>',
  };

  const tile = (name, extra = "") => {
    const logos = cv.logos[name];
    if (!logos) return `<span class="tile tile-text ${extra}" aria-hidden="true">${esc(initials(name))}</span>`;
    return `<span class="tiles">${logos
      .map((l) => `<span class="tile ${extra} ${cv.wideLogos.includes(l) ? "tile-wide" : ""}"><img src="assets/logos/${esc(l)}.jpg" alt="" width="100" height="100"></span>`)
      .join("")}</span>`;
  };
  const chips = (items) =>
    items.length ? `<ul class="chips">${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : "";
  const pendingMark = (t, on) => (on ? `<span class="pending-mark">${esc(t.ui.pending)}</span>` : "");
  const sectionHead = (title, intro, aside = "") => `
    <div class="section-head reveal">
      <div>
        <h2>${esc(title)}</h2>
        <p>${esc(intro)}</p>
      </div>
      ${aside}
    </div>`;

  function renderNav(t, lang) {
    const avatar = cv.photo
      ? `<img class="avatar" src="${esc(cv.photo)}" alt="" width="40" height="40">`
      : `<span class="avatar avatar-mono" aria-hidden="true">${esc(initials(fullName))}</span>`;
    const links = Object.entries(t.ui.nav)
      .map(([id, label]) => `<a href="#${id}" data-nav="${id}">${esc(label)}</a>`)
      .join("");
    const langButton = (code) =>
      `<button type="button" data-lang="${code}" aria-pressed="${code === lang}">${code.toUpperCase()}</button>`;
    return `
      <div class="shell nav-inner">
        <a class="brand" href="#top">${avatar}<span>${esc(fullName)}</span></a>
        <nav class="nav-links" aria-label="${esc(t.ui.nav.contact)}">${links}</nav>
        <div class="nav-actions">
          <div class="lang" role="group" aria-label="Idioma / Language">${langButton("es")}${langButton("en")}</div>
          <a class="btn btn-small" href="${esc(cv.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">
            ${icons.linkedin}<span>LinkedIn</span>
          </a>
        </div>
      </div>`;
  }

  function renderHero(t) {
    const facts = t.facts
      .map(
        (f) => `
        <div class="fact">
          <dt>${esc(f.label)}</dt>
          <dd>
            <strong>${esc(f.value)}</strong>
            ${f.note ? `<span>${esc(f.note)}</span>` : ""}
            ${pendingMark(t, f.pending)}
          </dd>
        </div>`
      )
      .join("");
    const career = t.experience
      .map((e) => e.company)
      .flatMap((c) => c.split(" / "))
      .concat("Universidad Complutense")
      .map((c) => `<li>${tile(c, "tile-small")}<span>${esc(c)}</span></li>`)
      .join("");
    return `
      <section class="hero" id="top" aria-labelledby="hero-title">
        <div class="shell hero-grid">
          <div class="hero-copy">
            ${cv.photo ? `<img class="hero-photo" src="${esc(cv.photo)}" alt="${esc(cv.fullName)}" width="400" height="400">` : ""}
            <p class="eyebrow">${esc(t.hero.eyebrow)}</p>
            <h1 id="hero-title" class="hero-name">${cv.name.map((n) => `<span>${esc(n)}</span>`).join(" ")}</h1>
            <p class="hero-roles">${t.hero.roles.map((r) => `<span>${esc(r)}</span>`).join("")}</p>
            <p class="hero-statement">${esc(t.hero.statement)}</p>
            <p class="print-contact">${esc(t.ui.footer)} · ${esc(emailAddress)} · ${esc(cv.linkedinLabel)}</p>
            <div class="hero-actions">
              <a class="btn btn-solid" href="mailto:${esc(emailAddress)}">${icons.mail}${esc(t.ui.email)}</a>
              <a class="btn" href="${esc(cv.linkedin)}" target="_blank" rel="noopener">${icons.linkedin}LinkedIn</a>
              <a class="btn" href="${esc(t.ui.cvFile)}" download="David_Correa_CV.pdf">${icons.download}${esc(t.ui.download)}</a>
            </div>
          </div>
          <dl class="facts">${facts}</dl>
        </div>
        <div class="shell career">
          <p>${esc(t.ui.career)}</p>
          <ul>${career}</ul>
        </div>
      </section>`;
  }

  function renderExperience(t) {
    const jobs = t.experience
      .map(
        (e) => `
        <article class="entry reveal">
          <div class="entry-date">
            <span>${esc(e.date)}</span>
            ${e.duration ? `<small>${esc(e.duration)}</small>` : ""}
          </div>
          <div class="entry-main">
            ${e.current ? `<span class="status">${esc(t.ui.current)}</span>` : ""}
            <div class="entry-company">${tile(e.company)}<h3>${esc(e.company)}</h3></div>
            <p class="entry-role">${esc(e.role)}</p>
            <p class="entry-where">${esc(e.where)}</p>
            ${e.summary ? `<p class="entry-summary">${esc(e.summary)}</p>` : ""}
            ${pendingMark(t, e.pending)}
          </div>
          <div class="entry-detail">
            ${e.bullets.length ? `<ul class="bullets">${e.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
            ${chips(e.tags)}
          </div>
        </article>`
      )
      .join("");
    const aside = `<a class="btn btn-small head-link" href="${esc(cv.linkedin)}" target="_blank" rel="noopener">${esc(t.ui.fullProfile)}${icons.arrow}</a>`;
    return `
      <section class="section" id="experience">
        <div class="shell">
          ${sectionHead(t.ui.nav.experience, t.experienceIntro, aside)}
          <div class="timeline">${jobs}</div>
        </div>
      </section>`;
  }

  function renderEducation(t) {
    const rows = t.education
      .map((e) => {
        const stats = (e.stats || [])
          .map((s) => `<div class="stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`)
          .join("");
        return `
        <article class="entry entry-compact reveal">
          <div class="entry-date">${e.date ? `<span>${esc(e.date)}</span>` : ""}</div>
          <div class="entry-main">
            <div class="entry-company">${tile(e.school)}<h3>${esc(e.school)}</h3></div>
            <p class="entry-role">${esc(e.title)}</p>
            ${e.note ? `<p class="entry-where">${esc(e.note)}</p>` : ""}
          </div>
          <div class="entry-detail">${stats ? `<div class="stats">${stats}</div>` : ""}</div>
        </article>`;
      })
      .join("");
    return `
      <section class="section" id="education">
        <div class="shell">
          ${sectionHead(t.ui.nav.education, t.educationIntro)}
          <div class="timeline">${rows}</div>
        </div>
      </section>`;
  }

  function renderSkills(t) {
    const groups = t.skills
      .map(
        (g) => `
        <div class="card reveal">
          <h3>${esc(g.title)}</h3>
          <p>${esc(g.note)}</p>
          ${chips(g.items)}
        </div>`
      )
      .join("");
    const langs = t.languages.items
      .map((l) => `<div class="lang-row"><strong>${esc(l.name)}</strong><span>${esc(l.level)}</span></div>`)
      .join("");
    return `
      <section class="section" id="skills">
        <div class="shell">
          ${sectionHead(t.ui.nav.skills, t.skillsIntro)}
          <div class="cards">
            ${groups}
            <div class="card reveal">
              <h3>${esc(t.languages.title)}</h3>
              <div class="lang-list">${langs}</div>
            </div>
          </div>
        </div>
      </section>`;
  }

  function renderContact(t) {
    return `
      <section class="section contact" id="contact">
        <div class="shell reveal">
          <h2>${esc(t.contact.title)}</h2>
          <p>${esc(t.contact.text)}</p>
          <div class="hero-actions">
            <a class="btn btn-solid" href="mailto:${esc(emailAddress)}">${icons.mail}${esc(t.ui.email)}</a>
            <a class="btn" href="${esc(cv.linkedin)}" target="_blank" rel="noopener">${icons.linkedin}LinkedIn</a>
          </div>
        </div>
      </section>`;
  }

  let observers = [];

  function watchPage() {
    observers.forEach((o) => o.disconnect());
    observers = [];
    if (!("IntersectionObserver" in window)) return;

    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reveal = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              reveal.unobserve(entry.target);
            }
          }),
        { rootMargin: "0px 0px -6% 0px" }
      );
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("will-reveal");
        reveal.observe(el);
      });
      observers.push(reveal);
    }

    const spy = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          document.querySelectorAll("[data-nav]").forEach((a) => {
            if (a.dataset.nav === entry.target.id) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        }),
      { rootMargin: "-35% 0px -60% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => spy.observe(s));
    observers.push(spy);
  }

  function render(lang) {
    const t = cv[lang];
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]').content = t.meta.description;
    document.getElementById("skip").textContent = t.ui.skip;
    document.getElementById("nav").innerHTML = renderNav(t, lang);
    document.getElementById("main").innerHTML =
      renderHero(t) + renderExperience(t) + renderEducation(t) + renderSkills(t) + renderContact(t);
    document.getElementById("footer").innerHTML = `
      <div class="shell footer-inner">
        <span>© ${new Date().getFullYear()} ${esc(cv.fullName)}</span>
        <span>${esc(t.ui.footer)}</span>
      </div>`;
    watchPage();
  }

  function initialLang() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === "es" || saved === "en") return saved;
    } catch (_) { /* almacenamiento bloqueado: se usa el idioma del navegador */ }
    return (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
  }

  document.addEventListener("click", (event) => {
    const langButton = event.target.closest("[data-lang]");
    if (langButton) {
      const lang = langButton.dataset.lang;
      try { localStorage.setItem(LANG_KEY, lang); } catch (_) { /* preferencia solo para esta visita */ }
      const y = window.scrollY;
      render(lang);
      window.scrollTo(0, y);
    }
  });

  render(initialLang());
})();
