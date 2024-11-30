let lastScrollTop=0;
const navbar=document.querySelector('header');
window.addEventListener('scroll',function(){
  let scrollTop=window.scrollY || document.documentElement.scrollTop;
  const windowPageYoffset=window.scrollY;
  const docElTop=document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navbar.style.top='-150px'
  }
  // else{navbar.style.top='4px'}
  else{navbar.style.top='0px'}
  lastScrollTop=scrollTop;
})