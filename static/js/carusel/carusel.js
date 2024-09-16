let nextButton=document.getElementById('next');
let backButton=document.getElementById('back');
let prevButton=document.getElementById('prev');
let seeMoreButtons=document.querySelectorAll('.seeMore');

let carusel=document.querySelector('.carusel')
let listHTML=document.querySelector('.carusel .list')

nextButton.onclick=function(){
    showSlider('next')
}
prevButton.onclick=function(){
    showSlider('prev')
}

let unAcceptClick;
const showSlider=(type)=>{
    
    let items=document.querySelectorAll('.carusel .list .item')
    if (type=='next'){
        listHTML.appendChild(items[0]);
        carusel.classList.remove('prev')
        carusel.classList.add('next')
        nextButton.style.pointerEvents='none'
        nextButton.innerText='X'
    }
    else if(type=='prev'){
        let positionLast=items.length-1;
        listHTML.prepend(items[positionLast])
        carusel.classList.remove('next')
        carusel.classList.add('prev')
        prevButton.style.pointerEvents='none'
        prevButton.innerText='X'
    }

    clearTimeout(unAcceptClick);

    unAcceptClick=setTimeout(() => {
        nextButton.style.pointerEvents='auto'
        nextButton.innerText='>'
        prevButton.style.pointerEvents='auto'
        prevButton.innerText='<'
    }, 1000);
}


seeMoreButtons.forEach(btn=>{
    btn.onclick=function(){
        carusel.classList.add('showDetail')
    }
})

backButton.onclick=function(){
    carusel.classList.remove('showDetail')
}