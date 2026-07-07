const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "..");
const sourcePath = path.join(root, "Propuesta_Dale_Pues_MVP.md");
const targetPath = path.join(__dirname, "..", "docs", "index.md");

const source = fs.readFileSync(sourcePath, "utf8").replace(/\r\n/g, "\n");
const metadata = readMetadata(source);
const body = extractBody(source);
const roadmap = [
  ["v0.1.0", "Base inicial del MVP"],
  ["v0.2.0", "Módulo cliente funcional"],
  ["v0.3.0", "Módulo comercio funcional"],
  ["v0.4.0", "Módulo repartidor funcional"],
  ["v0.5.0", "Pedidos, estados y seguimiento"],
  ["v0.6.0", "Notificaciones y comunicación"],
  ["v0.7.0", "Wallet de repartidores"],
  ["v0.8.0", "Panel administrativo"],
  ["v0.9.0", "Prueba piloto"],
  ["v1.0.0", "Primera versión productiva del MVP"]
];

const output = `---
title: Propuesta Dale Pues MVP
description: Propuesta comercial y técnica para la plataforma Dale Pues.
outline: deep
---

<section class="proposal-hero">
  <p class="proposal-eyebrow">Propuesta Comercial y Técnica</p>
  <h1>Dale Pues MVP</h1>
  <p class="proposal-subtitle">Documentación ejecutiva y técnica del MVP para una plataforma de delivery y comercio local en Venezuela.</p>
  <div class="proposal-badges">
    <span class="badge">MVP</span>
    <span class="badge">Delivery</span>
    <span class="badge">Venezuela</span>
    <span class="badge">PWA</span>
    <span class="badge">Android</span>
  </div>
  <div class="hero-actions">
    <a class="dp-button dp-button-primary" href="/#_1-resumen-ejecutivo">Ver propuesta</a>
    <a class="dp-button dp-button-secondary" href="/#_4-alcance-del-mvp">Ver alcance MVP</a>
    <a class="dp-button dp-button-secondary" href="/#roadmap-del-producto">Ver roadmap</a>
  </div>
  <dl class="proposal-meta">
${metadata.map(({ label, value }) => `    <div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("\n")}
  </dl>
</section>

<section class="summary-grid" aria-label="Resumen de propuesta">
  <article class="summary-card">
    <span class="summary-icon" aria-hidden="true">01</span>
    <p class="label">Inversión</p>
    <p class="value">USD 4.000</p>
    <p class="detail">Desarrollo del MVP Dale Pues con despliegue inicial y acompañamiento de entrega.</p>
  </article>
  <article class="summary-card">
    <span class="summary-icon" aria-hidden="true">02</span>
    <p class="label">Tiempo estimado</p>
    <p class="value">30 días</p>
    <p class="detail">Cronograma aproximado para una primera salida funcional del producto.</p>
  </article>
  <article class="summary-card">
    <span class="summary-icon" aria-hidden="true">03</span>
    <p class="label">Entregables</p>
    <p class="value">4 frentes</p>
    <p class="detail">Android, PWA, panel administrativo y backend centralizado.</p>
  </article>
  <article class="summary-card">
    <span class="summary-icon" aria-hidden="true">04</span>
    <p class="label">Actores del sistema</p>
    <p class="value">4 roles</p>
    <p class="detail">Cliente, comercio, repartidor y administrador operativo.</p>
  </article>
</section>

<section class="overview-section">
  <div class="overview-panel">
    <p class="section-eyebrow">Vista ejecutiva</p>
    <h2 id="inicio">Qué incluye el MVP</h2>
    <div class="feature-grid">
      <article class="visual-card">
        <p class="label">Operación móvil</p>
        <h3>Experiencia Mobile First</h3>
        <p>La propuesta prioriza el uso desde dispositivos móviles sin descuidar la operación administrativa web.</p>
      </article>
      <article class="visual-card">
        <p class="label">Comercio local</p>
        <h3>Pedidos trazables</h3>
        <p>El flujo conecta comercios cercanos, pedidos, estados operativos, seguimiento y notificaciones.</p>
      </article>
      <article class="visual-card">
        <p class="label">Base escalable</p>
        <h3>MVP preparado para crecer</h3>
        <p>El sistema parte de una arquitectura controlada para validar operación y evolucionar por versiones.</p>
      </article>
    </div>
  </div>
</section>

<section class="overview-section" id="roadmap-del-producto">
  <div class="overview-panel">
    <p class="section-eyebrow">Producto</p>
    <h2>Roadmap del producto</h2>
    <div class="roadmap">
${roadmap.map(([version, label], index) => {
  const state = index === 0 ? "completed" : index === 1 ? "in-progress" : "pending";
  return `      <div class="roadmap-item"><span class="roadmap-version ${state}">${version}</span><p>${label}</p></div>`;
}).join("\n")}
    </div>
  </div>
</section>

${body}
`;

fs.writeFileSync(targetPath, output, "utf8");

function readMetadata(markdown) {
  const fields = [
    "Proyecto",
    "Cliente",
    "Proveedor",
    "Fecha original",
    "Fecha de actualización",
    "Versión del producto"
  ];

  return fields.flatMap((field) => {
    const pattern = new RegExp(`\\*\\*${escapeRegex(field)}:\\*\\*\\s*(.+)`);
    const match = markdown.match(pattern);
    return match ? [{ label: field, value: stripInlineMarkdown(match[1].trim()) }] : [];
  });
}

function extractBody(markdown) {
  const lines = markdown.split("\n");
  let separators = 0;
  const body = [];

  for (const line of lines) {
    if (line.trim() === "---") {
      separators += 1;
      continue;
    }

    if (separators >= 2) {
      body.push(line);
    }
  }

  return body.join("\n").trim();
}

function stripInlineMarkdown(value) {
  return value.replace(/\*\*/g, "").replace(/\*/g, "");
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
