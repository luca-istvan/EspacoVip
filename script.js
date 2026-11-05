/* =========================================================
   ESPAÇO VIP | Site demonstrativo
   Três funções: menu do celular, cabeçalho ao rolar e aviso
   nos links demonstrativos.
   ========================================================= */

const cabecalho = document.getElementById('topo');
const botaoMenu = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const aviso = document.getElementById('aviso');

/* 1. Menu do celular: abre e fecha */
function definirMenu(aberto) {
  menu.classList.toggle('aberto', aberto);
  botaoMenu.setAttribute('aria-expanded', String(aberto));
  botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
}

botaoMenu.addEventListener('click', () => {
  definirMenu(!menu.classList.contains('aberto'));
});

/* Fecha o menu ao clicar em um link ou apertar Esc */
menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => definirMenu(false));
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') definirMenu(false);
});

/* 2. Cabeçalho ganha fundo sólido depois que a página rola */
function atualizarCabecalho() {
  cabecalho.classList.toggle('rolou', window.scrollY > 40);
}
window.addEventListener('scroll', atualizarCabecalho, { passive: true });
atualizarCabecalho();

/* 3. Links demonstrativos (com data-demo) mostram um aviso em vez de abrir algo */
let temporizador;
document.querySelectorAll('[data-demo]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    aviso.textContent = link.dataset.demo;
    aviso.classList.add('ativo');
    clearTimeout(temporizador);
    temporizador = setTimeout(() => aviso.classList.remove('ativo'), 3500);
  });
});

/* Ano automático no rodapé */
document.getElementById('ano').textContent = new Date().getFullYear();