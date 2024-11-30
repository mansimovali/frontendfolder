window.onload=()=>{
  const transitionEl=document.querySelector('.transition');
  const anchors=document.querySelectorAll('.header__link')
  setTimeout( ()=>{
    transitionEl.classList.remove('is-active')
  }, 300);

  for(let i=0; i<anchors.length;i++){
    const anchor=anchors[i];
    anchor.addEventListener('click',e=>{
      e.preventDefault();

      let target= e.target.href;

      transitionEl.classList.add('is-active');

      setTimeout(() => {
        window.location.href=target;
      }, 300);
    })
  }
}

document.onload=transitionEl.classList.remove('is-active');