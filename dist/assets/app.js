if(new URLSearchParams(location.search).get('embed')==='1') document.documentElement.classList.add('embedded');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const header = document.querySelector('.header');
const progress = document.querySelector('.progress');
const topButton = document.querySelector('.to-top');
let ticking = false;
function updateScroll() {
  const y = window.scrollY;
  header?.classList.toggle('scrolled', y > 80);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  topButton?.classList.toggle('shown', y > 900);
  ticking = false;
}
window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(updateScroll); ticking = true; } }, { passive: true });
updateScroll();
const revealObserver = new IntersectionObserver(entries => entries.forEach(e => {if (e.isIntersecting) {e.target.classList.add('visible'); revealObserver.unobserve(e.target);}}), {threshold: .08});
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
const navObserver = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) document.querySelectorAll('[data-nav]').forEach(a => {const active = a.dataset.nav === e.target.id; a.classList.toggle('active', active); if(active) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current');}); }), {rootMargin: '-20% 0px -55% 0px'});
document.querySelectorAll('main > section[id]').forEach(el => navObserver.observe(el));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(b => {b.classList.toggle('selected', b === button); b.setAttribute('aria-pressed', String(b === button));});
  let count = 0;
  document.querySelectorAll('[data-category]').forEach(card => {card.hidden = filter !== 'All' && card.dataset.category !== filter; if(!card.hidden) count++;});
  document.querySelector('#filter-status').textContent = `${count} projects shown`;
}));
topButton?.addEventListener('click', () => {window.scrollTo({top:0,behavior:reduced?'instant':'smooth'}); document.querySelector('.brand')?.focus({preventScroll:true});});
document.querySelector('[data-copy]')?.addEventListener('click', async event => {
 const button = event.currentTarget;
 try {await navigator.clipboard.writeText('abhisheknahire89@gmail.com'); document.querySelector('.toast').textContent = 'Email copied. Let’s make something happen.'; button.textContent='Copied ✓';}
 catch {document.querySelector('.toast').textContent = 'Copy this address: abhisheknahire89@gmail.com';}
 const toast = document.querySelector('.toast'); toast.classList.add('show'); clearTimeout(window.toastTimer); window.toastTimer=setTimeout(()=>{toast.classList.remove('show');button.textContent='Copy email ↗';},3000);
});
