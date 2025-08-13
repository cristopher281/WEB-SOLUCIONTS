// Año en footer
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// Menú responsive
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    toggle.setAttribute('aria-expanded', String(!open));
  });
}

// WhatsApp con datos del formulario (landing)
const wpa = document.getElementById('wpa');
if (wpa) {
  wpa.addEventListener('click', (e) => {
    const form = e.target.closest('form');
    const nombre = form?.querySelector('[name="nombre"]')?.value || '';
    const email  = form?.querySelector('[name="email"]')?.value || '';
    const msg    = form?.querySelector('[name="mensaje"]')?.value || '';
    const text = `Hola WEB-SOLUCIONTS,%0A%0A
      Nombre: ${encodeURIComponent(nombre)}%0A
      Correo: ${encodeURIComponent(email)}%0A
      Mensaje: ${encodeURIComponent(msg)}`;
    wpa.href = `https://wa.me/50583574654?text=${text}`;
  });
}

// GSAP animaciones
if (window.gsap) {
  gsap.registerPlugin(ScrollTrigger);

  // Hero: título glow + leve parallax del glow
  gsap.from(".hero__title", {y:20, opacity:0, duration:0.9, ease:"power3.out"});
  gsap.from(".hero__subtitle", {y:20, opacity:0, duration:0.8, delay:0.1});
  gsap.from(".hero__cta .btn", {y:12, opacity:0, stagger:0.1, duration:0.6, delay:0.2});
  gsap.to(".hero__glow", {yPercent:10, ease:"none", scrollTrigger:{trigger:".hero", scrub:0.4}});

  // Contadores simples (animación numérica)
  document.querySelectorAll(".metric__num").forEach(el=>{
    const end = +el.dataset.count || 0;
    gsap.fromTo(el, {innerText:0}, {
      innerText:end, duration:1.2, ease:"power1.out", snap:{innerText:1},
      scrollTrigger:{trigger:el, start:"top 80%"}
    });
  });

  // Reveal en scroll para .reveal
  gsap.utils.toArray(".reveal").forEach((el)=>{
    gsap.to(el, {
      opacity:1, y:0, duration:0.7, ease:"power2.out",
      scrollTrigger:{trigger:el, start:"top 85%"}
    });
  });
}