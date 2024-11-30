//for welcome
function remover(){document.querySelector('.welcome-svg').classList.add('hidden')};
setTimeout(remover,6000);


//for navbar
const body=document.querySelector('body');
//footer olarsa footer-de bu cur duzeldilmeli ve eynen bundaki kimi inert elave edilib-cixarilmalidir
const main=document.querySelector('main');
const btnOpen=document.querySelector('#btnOpen');
const btnClose=document.querySelector('#btnClose');

const navContent=document.querySelector('.nav__content');
const navOverlay=document.querySelector('.nav__overlay');

//800px=50em
const screenSize='50em'
const media=window.matchMedia(`(width < ${screenSize})`);

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

function setupNav(media){
  if(media.matches){
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

media.addEventListener('change', function(media){
  setupNav(media);
});

//for dark-light theme

//for scroller
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


//for typewriter
// const words=['Ali', 'FrontEnd Web Developer', 'with love for math'];
const words=['Ali', 'FrontEnd Web Developer',];

let mainTimeline=gsap.timeline({
  repeat:-1//this makes indefinetly
})

//for each word create a new timeline, use the Text-plugin, then append that timeline to the main one
words.forEach(word=>{
  let textTimeline=gsap.timeline({
    repeat:1,
    yoyo:true,//types the word and deletes the word
    // repeatDelay:2//seconds between the word typed and deleted
    // repeatDelay:6//seconds between the word typed and deleted
    repeatDelay:4//seconds between the word typed and deleted
  })

  textTimeline.to('#typewriter',{
    text:word,
    // duration:5
    duration:2,//when completed one word waits
    // duration:1,//when completed one word waits
    onUpdate:()=>{
      cursorTimeline.restart()
      cursorTimeline.pause()
    },
    onComplete:()=>{
      cursorTimeline.play()
    }
  })

  mainTimeline.add(textTimeline)
});

//blinking cursor
let cursorTimeline=gsap.timeline({
  repeat:-1,
  // repeatDelay:.8
  repeatDelay:.5
});

cursorTimeline.to('#cursor',{
  opacity:1,
  duration:0
}).to('#cursor',{
  opacity:0,
  duration:0,
  // delay:.8
  delay:.5
})


// for img gallery
const loaderContainer=document.querySelectorAll('.loader-container');
const imgContent=document.querySelectorAll('.img-content');

window.addEventListener('load',()=>{
  loaderContainer.forEach(e=>{
    e.classList.add('hidden')
  })
  imgContent.forEach(e=>{
    e.classList.add('visible')
  })
})

//for dark-light-system theme
const themeBtn=document.querySelectorAll('.toggle-btn');
const moonBtn=document.querySelector('.moon');
const sunBtn=document.querySelector('.sun');

function enableDark(btn){
  document.body.classList.add('dark-theme');
  document.body.classList.remove('light-theme');
  sunBtn.classList.add('display-none');
  moonBtn.classList.remove('display-none');
};
function enableLight(btn){
  document.body.classList.remove('dark-theme');
  document.body.classList.add('light-theme');
  // btn.classList.add('display-none');
  moonBtn.classList.add('display-none');
  sunBtn.classList.remove('display-none');
};

themeBtn.forEach(btn=>{
  btn.addEventListener('click',()=>{
    if(btn.classList.contains('sun')){
      enableDark(btn);
      localStorage.setItem('theme-mode','dark');
    }
    else if(btn.classList.contains('moon')){
      enableLight(btn);
      localStorage.setItem('theme-mode','light');
    };
  });
});

function setThemePreference(){
  if (window.matchMedia('(prefers-color-schema: dark)').matches){
    // console.log('i like it dark');
    enableDark();
    return;
  }else{ 
    // console.log('i like the light');
    enableLight();
  }
}
document.onload=setThemePreference()

function SetSaved(){
  const saved=localStorage.getItem('theme-mode');
  if(saved=='dark'){enableDark()}
  else if(saved=='light'){enableLight()}
}
document.onload=SetSaved()

//for page indicator
const navLinkEls=document.querySelectorAll('.header__link');
const windowPathname=window.location.pathname;

navLinkEls.forEach(navlink=>{
  const navlinkpathname=new URL(navlink.href).pathname;
  if( (windowPathname===navlinkpathname) || (windowPathname==='/index.html' && navlinkpathname==='/') ) {
    // navlink.parentElement.classList.add('current-page');
    navlink.classList.add('current-page')
  }
});