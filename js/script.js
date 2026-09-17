const header=document.querySelector('.site-header');
const menuBtn=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
const onScroll=()=>header.classList.toggle('scrolled',window.scrollY>30);
onScroll();window.addEventListener('scroll',onScroll,{passive:true});
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false')}));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const dialog=document.getElementById('lightbox');
const lbImg=document.getElementById('lightbox-image');
const lbTitle=document.getElementById('lightbox-title');
const lbCaption=document.getElementById('lightbox-caption');
document.querySelectorAll('.gallery-item').forEach(btn=>btn.addEventListener('click',()=>{
  lbImg.src=btn.dataset.full;lbImg.alt=btn.querySelector('img')?.alt||'';lbTitle.textContent=btn.dataset.title;lbCaption.textContent=btn.dataset.caption;dialog.showModal();
}));
document.querySelector('.lightbox-close')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
