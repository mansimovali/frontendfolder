
const body=document.querySelector('body');
//footer olarsa footer-de bu cur duzeldilmeli ve eynen bundaki kimi inert elave edilib-cixarilmalidir
const main=document.querySelector('main');
const btnOpen=document.querySelector('#btnOpen');
const btnClose=document.querySelector('#btnClose');

const navContent=document.querySelector('.nav__content');
const navOverlay=document.querySelector('.nav__overlay');

//1110px=69.375em, 900px=56.25em,800px=50em
const qiymet='50em'
const media=window.matchMedia(`(width < ${qiymet})`);

function set(){
  btnOpen.setAttribute('aria-expanded','true');
  body.classList.add('noscroll-y');
}
function unset(){
  btnOpen.setAttribute('aria-expanded','false');
  body.classList.remove('noscroll-y');
}

function openMobileMenu(){
  set()
  navContent.removeAttribute('inert');
  main.setAttribute('inert','');
  btnClose.focus()
};

function closeMobileMenu(){
  unset()
  navContent.setAttribute('inert','');
  main.removeAttribute('inert');
  btnOpen.focus()
};

function setupNav(a){
  if(a.matches){
    navContent.setAttribute('inert','');

    setTimeout(() => {
      navContent.style.display='block';
      navOverlay.style.display='block';
    }, 500);
  }else{
    navContent.style.display='';
    unset()
    navContent.removeAttribute('inert');
    main.removeAttribute('inert');
  };
};

//sehife yuklenen kimi desktop veya mobile olmagina baxacag ve ona uygun locig yerine yetirecek
setupNav(media);

btnOpen.addEventListener('click',openMobileMenu);
btnClose.addEventListener('click',closeMobileMenu);

media.addEventListener('change', function(e){
  setupNav(e);
});