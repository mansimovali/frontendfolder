//LAZY LOADING
const lazyImgs =document.querySelectorAll('.lazy');
const observer= new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            let img=entry.target
            img.src=img.dataset.src
            img.classList.remove('loading');
            img.classList.add('loaded');
            observer.unobserve(entry.target);
        }
    })
});

lazyImgs.forEach(img=>{
    observer.observe(img);
})

//FOR MOBILE NAV
const headerBtn=document.querySelector('.header__bars');
console.log('header button :', headerBtn);

const mobileNav=document.querySelector('.mobile-nav');

const mobileLinks=document.querySelectorAll('.mobile-nav__link');

//state
let isMobileOpen=false;

headerBtn.addEventListener('click',()=>{
    isMobileOpen=!isMobileOpen
    
    if(isMobileOpen){
        mobileNav.style.display='flex';
        document.body.style.overflowY='hidden'
    }else{
        mobileNav.style.display='none';
        document.body.style.overflowY='auto'
    }
});


mobileLinks.forEach( link=>{
    link.addEventListener('click',()=>{
        isMobileOpen=false;
        mobileNav.style.display='none';
        document.body.style.overflowY='auto';
    })
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 767){
        mobileNav.style.display='none'
        document.body.style.overflowY='auto'
    }
})
//END OF MOBILE NAV

//DARK THEME
const themeToggleBtns=document.querySelectorAll('#theme-toggle');
const theme=localStorage.getItem('theme')
//on mount
theme && document.body.classList.add('light-mode');
//handlers
const handleThemeToggle= () =>{
    document.body.classList.toggle('light-mode');
    if(document.body.classList.contains('light-mode')){
        localStorage.setItem('theme','light-mode');
    }else{
        localStorage.removeItem('theme');
        document.body.removeAttribute('class');
    }
    }
//events
themeToggleBtns.forEach( btn =>
    btn.addEventListener('click',handleThemeToggle)
    )
//END OF THEME
