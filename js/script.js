const header=document.querySelector('.site-header');
const menuBtn=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
const onScroll=()=>header?.classList.toggle('scrolled',window.scrollY>28);
onScroll();window.addEventListener('scroll',onScroll,{passive:true});
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false')}));

if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));}

const lightbox=document.getElementById('lightbox');
const lbImg=document.getElementById('lightbox-image');
const lbTitle=document.getElementById('lightbox-title');
const lbCaption=document.getElementById('lightbox-caption');
document.querySelectorAll('.gallery-item').forEach(btn=>btn.addEventListener('click',()=>{if(!lightbox)return;lbImg.src=btn.dataset.full;lbImg.alt=btn.querySelector('img')?.alt||'';lbTitle.textContent=btn.dataset.title||'Aurora Maria';lbCaption.textContent=btn.dataset.caption||'';lightbox.showModal();}));
document.querySelector('.lightbox-close')?.addEventListener('click',()=>lightbox.close());
lightbox?.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close();});

const restrictedButton=document.getElementById('restricted-button');
const deniedModal=document.getElementById('denied-modal');
const deniedMessage=document.getElementById('denied-message');
const deniedClose=document.querySelector('.denied-close');
const deniedOk=document.getElementById('denied-ok');
const originalLabel=restrictedButton?.textContent||'';
restrictedButton?.addEventListener('click',()=>{
  restrictedButton.disabled=true;
  restrictedButton.textContent='Verificando idade…';
  setTimeout(()=>{restrictedButton.textContent='Validando autorização…';},650);
  setTimeout(()=>{
    restrictedButton.disabled=false;
    restrictedButton.textContent=originalLabel;
    if(deniedMessage)deniedMessage.textContent='Você é +18. O problema é que a Aurora não te deu acesso. 😂';
    deniedModal?.showModal();
  },1450);
});
const closeDenied=()=>deniedModal?.close();
deniedClose?.addEventListener('click',closeDenied);deniedOk?.addEventListener('click',closeDenied);
deniedModal?.addEventListener('click',event=>{if(event.target===deniedModal)closeDenied();});

// Vídeo de fundo global: força autoplay mudo e retenta após a primeira interação se o navegador bloquear.
const backgroundVideo = document.getElementById('page-background-video');
if (backgroundVideo) {
  backgroundVideo.muted = true;
  backgroundVideo.defaultMuted = true;
  backgroundVideo.loop = true;
  backgroundVideo.playsInline = true;
  backgroundVideo.setAttribute('muted', '');
  backgroundVideo.setAttribute('playsinline', '');
  backgroundVideo.setAttribute('webkit-playsinline', '');

  let autoplayBlocked = false;
  const attemptBackgroundPlayback = async () => {
    try {
      if (backgroundVideo.readyState < 2) backgroundVideo.load();
      await backgroundVideo.play();
      autoplayBlocked = false;
      document.documentElement.classList.add('video-bg-playing');
    } catch (err) {
      autoplayBlocked = true;
      document.documentElement.classList.remove('video-bg-playing');
    }
  };

  backgroundVideo.addEventListener('loadeddata', attemptBackgroundPlayback, { once: true });
  backgroundVideo.addEventListener('canplay', attemptBackgroundPlayback, { once: true });
  window.addEventListener('pageshow', attemptBackgroundPlayback);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) attemptBackgroundPlayback();
  });

  const unlockPlayback = () => {
    if (autoplayBlocked || backgroundVideo.paused) attemptBackgroundPlayback();
  };
  ['pointerdown','touchstart','keydown','click'].forEach(eventName => {
    window.addEventListener(eventName, unlockPlayback, { once: true, passive: true });
  });

  attemptBackgroundPlayback();
}
