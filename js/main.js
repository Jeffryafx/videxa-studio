import { projects, categories } from './projects.js';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const grid = $('[data-project-grid]');
const filters = $('[data-filters]');
const empty = $('[data-empty]');
const modal = $('[data-video-modal]');
const modalMedia = $('[data-modal-media]');
const modalTitle = $('[data-modal-title]');
const modalDescription = $('[data-modal-description]');
const modalMeta = $('[data-modal-meta]');
let lastFocused = null;

const formatLabel = (orientation) => orientation === 'portrait' ? '9:16 / VERTICAL' : '16:9 / HORIZONTAL';

function renderFilters() {
  const available = new Set(projects.map((project) => project.category));
  filters.innerHTML = categories.filter((category) => category === 'Todos' || available.has(category)).map((category, index) => `<button class="filter-button" type="button" data-category="${category}" aria-pressed="${index === 0}">${category}</button>`).join('');
  $$('.filter-button', filters).forEach((button) => button.addEventListener('click', () => {
    $$('.filter-button', filters).forEach((item) => item.setAttribute('aria-pressed', 'false'));
    button.setAttribute('aria-pressed', 'true');
    renderProjects(button.dataset.category);
  }));
}

function thumbnailMarkup(project) {
  const image = project.thumbnail ? `<img loading="lazy" src="${project.thumbnail}" alt="Miniatura de ${project.title}" />` : '<div class="project-art" aria-hidden="true"></div>';
  return `<div class="project-thumbnail ${project.orientation === 'portrait' ? 'portrait' : ''}">${image}<span class="card-play" aria-hidden="true">▶</span><span class="project-placeholder">${project.videoType === 'placeholder' ? 'PRÓXIMAMENTE' : project.title}</span><span class="project-format">${formatLabel(project.orientation)}</span></div>`;
}

function renderProjects(category = 'Todos') {
  const visible = category === 'Todos' ? projects : projects.filter((project) => project.category === category);
  empty.hidden = visible.length > 0;
  grid.innerHTML = visible.map((project) => `<article class="project-card reveal visible" tabindex="0" role="button" data-project-id="${project.id}" aria-label="Abrir ${project.title}">${thumbnailMarkup(project)}<div class="project-details"><div class="project-category"><span>${project.category}</span><span>${project.duration || '—'}</span></div><h3>${project.title}</h3><p>${project.description || ''}</p></div></article>`).join('');
  $$('.project-card', grid).forEach((card) => {
    card.addEventListener('click', () => openProject(card.dataset.projectId));
    card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openProject(card.dataset.projectId); } });
  });
}

function youtubeEmbed(url) {
  try { const parsed = new URL(url); const id = parsed.hostname.includes('youtu.be') ? parsed.pathname.slice(1) : parsed.searchParams.get('v') || parsed.pathname.split('/').pop(); return id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0` : ''; } catch { return ''; }
}
function vimeoEmbed(url) { try { const id = new URL(url).pathname.split('/').filter(Boolean).pop(); return id ? `https://player.vimeo.com/video/${id}?autoplay=1` : ''; } catch { return ''; } }

function openProject(id) {
  const project = projects.find((item) => item.id === id);
  if (!project) return;
  lastFocused = document.activeElement;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description || '';
  modalMeta.textContent = `${project.duration || '—'} · ${formatLabel(project.orientation)}`;
  modalMedia.classList.toggle('portrait', project.orientation === 'portrait');
  modalMedia.innerHTML = '';
  if (project.videoType === 'local' && project.video && import.meta.env.DEV) {
    const video = document.createElement('video'); video.controls = true; video.autoplay = true; video.preload = 'none'; video.playsInline = true; video.setAttribute('aria-label', `Video: ${project.title}`); video.src = project.video; if (project.thumbnail) video.poster = project.thumbnail; modalMedia.append(video);
  } else if (project.videoType === 'local' && project.video) {
    modalMedia.innerHTML = `<div class="modal-placeholder"><div><strong>VIDEO<br>NO PUBLICADO</strong><small>ESTE CLIP SOLO ESTÁ DISPONIBLE EN EL EQUIPO LOCAL. ALOJA EL VIDEO EXTERNAMENTE PARA PUBLICARLO.</small></div></div>`;
  } else if (project.videoType === 'youtube' && project.video) {
    const iframe = document.createElement('iframe'); iframe.src = youtubeEmbed(project.video); iframe.title = project.title; iframe.allow = 'autoplay; fullscreen; picture-in-picture'; iframe.allowFullscreen = true; modalMedia.append(iframe);
  } else if (project.videoType === 'vimeo' && project.video) {
    const iframe = document.createElement('iframe'); iframe.src = vimeoEmbed(project.video); iframe.title = project.title; iframe.allow = 'autoplay; fullscreen; picture-in-picture'; iframe.allowFullscreen = true; modalMedia.append(iframe);
  } else {
    modalMedia.innerHTML = `<div class="modal-placeholder"><div><strong>REEL<br>PRÓXIMAMENTE</strong><small>AÑADE TU VIDEO EN JS/PROJECTS.JS</small></div></div>`;
  }
  if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
  document.body.classList.add('modal-open');
  $('[data-modal-close]').focus();
}
function closeModal() {
  const video = $('video', modalMedia); if (video) { video.pause(); video.removeAttribute('src'); video.load(); }
  const iframe = $('iframe', modalMedia); if (iframe) iframe.src = 'about:blank';
  modalMedia.innerHTML = '';
  modalMedia.classList.remove('portrait');
  if (typeof modal.close === 'function' && modal.open) modal.close(); else modal.removeAttribute('open');
  document.body.classList.remove('modal-open');
  if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
}

renderFilters(); renderProjects();
$('[data-modal-close]').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
modal.addEventListener('cancel', (event) => { event.preventDefault(); closeModal(); });
$$('[data-reel-trigger]').forEach((element) => { element.addEventListener('click', () => openProject(element.dataset.projectId)); element.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openProject(element.dataset.projectId); } }); });

const menuToggle = $('.menu-toggle'); const menu = $('.nav-menu');
menuToggle.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); });
$$('.nav-menu a').forEach((link) => link.addEventListener('click', () => { menu.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }));
const header = $('[data-header]'); window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 10), { passive: true });

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
$$('.reveal').forEach((element) => observer.observe(element));

$$('[data-section]').forEach((section) => { const anchor = section.id; if (!anchor) return; const link = $(`.nav-menu a[href="#${anchor}"]`); if (!link) return; new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { $$('.nav-menu a').forEach((item) => item.classList.remove('active')); link.classList.add('active'); } }, { rootMargin: '-30% 0px -60% 0px' }).observe(section); });
$('[data-year]').textContent = new Date().getFullYear();

$('[data-contact-form]').addEventListener('submit', (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const subject = encodeURIComponent(`Proyecto de edición — ${data.get('project')}`); const body = encodeURIComponent(`Nombre: ${data.get('name')}\nCorreo: ${data.get('email')}\nTipo de proyecto: ${data.get('project')}\n\n${data.get('message')}`); const status = $('.form-status'); status.textContent = 'Abriendo tu aplicación de correo…'; window.location.href = `mailto:jeffry.editor06@gmail.com?subject=${subject}&body=${body}`; });
