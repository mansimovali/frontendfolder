const navLinkEls=document.querySelectorAll('.header__link');
const windowPathname=window.location.pathname;

navLinkEls.forEach(navlink=>{
  const navlinkpathname=new URL(navlink.href).pathname;
  if( (windowPathname===navlinkpathname) || (windowPathname==='/index.html' && navlinkpathname==='/') ) {
    // navlink.parentElement.classList.add('current-page');
    navlink.classList.add('current-page')
  }
});