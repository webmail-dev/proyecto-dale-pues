---
title: Guía visual
description: Guía breve de estilos y componentes disponibles para el sitio de propuesta Dale Pues.
outline: deep
---

# Guía visual

Esta guía resume la línea gráfica aplicada al sitio VitePress de la propuesta Dale Pues.

## Colores

| Uso | Color |
|---|---|
| Acción principal | `#C58B00` |
| Acción secundaria en oscuro | `#F2C94C` |
| Rojo de atención | `#D64545` |
| Fondo claro cálido | `#FFFDF8` |
| Superficie clara | `#FFFFFF` |
| Superficie clara suave | `#F6F5F2` |
| Texto principal claro | `#141414` |
| Texto secundario claro | `#5F6368` |
| Fondo oscuro | `#111318` |
| Superficie oscura | `#171A21` |
| Superficie oscura elevada | `#20242D` |
| Borde claro | `#E7E3DB` |
| Borde oscuro | `#2C313A` |

## Badges

Usa `.badge` para etiquetas de estado o categoría. Agrega `.red` para una variante de acción.

```html
<span class="badge">MVP</span>
<span class="badge red">Delivery</span>
```

## Botones

Los botones principales usan `.dp-button`. Las variantes disponibles son `.dp-button-primary`, `.dp-button-secondary` y `.dp-button-danger`.

```html
<a class="dp-button dp-button-primary" href="/#_1-resumen-ejecutivo">Ver propuesta</a>
<a class="dp-button dp-button-secondary" href="/#_4-alcance-del-mvp">Ver alcance MVP</a>
<a class="dp-button dp-button-danger" href="/#roadmap-del-producto">Ver roadmap</a>
```

## Cards

Para métricas ejecutivas usa `.summary-grid` con `.summary-card`.

```html
<section class="summary-grid">
  <article class="summary-card">
    <p class="label">Inversión</p>
    <p class="value">USD 4.000</p>
    <p class="detail">Desarrollo del MVP Dale Pues.</p>
  </article>
</section>
```

## Callouts

Los callouts resaltan notas operativas. La variante `.danger` sirve para advertencias.

```html
<div class="callout">
  <p>Mensaje destacado para el lector.</p>
</div>

<div class="callout danger">
  <p>Mensaje crítico o de atención.</p>
</div>
```

## Grids

`.feature-grid` organiza tarjetas funcionales en tres columnas en escritorio y una columna en móvil.

```html
<div class="feature-grid">
  <article class="visual-card">
    <p class="label">Operación móvil</p>
    <h3>Experiencia Mobile First</h3>
    <p>Descripción breve del bloque.</p>
  </article>
</div>
```

## Roadmap

El roadmap usa `.roadmap`, `.roadmap-item` y `.roadmap-version`.

```html
<div class="roadmap">
  <div class="roadmap-item">
    <span class="roadmap-version">v1.0.0</span>
    <p>Primera versión productiva del MVP</p>
  </div>
</div>
```
