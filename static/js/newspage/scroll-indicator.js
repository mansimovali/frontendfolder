const progressBar=document.getElementById('progress-bar');
let procressScroll=()=>{
  let 
  docEl=document.documentElement, docBody=document.body,
  indicatorScrollTop=docEl['scrollTop'] || docBody['scrollTop'],
  indicatorScrollBottom=(docEl['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
  // scrollPercent=indicatorScrollTop / indicatorScrollBottom *100 + '%' ;
  //scroll edilmese bele scrollbar-in gorsenilmesi istenerse
  scrollPercent=indicatorScrollTop / indicatorScrollBottom *100 + 2 + '%' ;
  progressBar.style.setProperty('--scrollAmount',scrollPercent)
}
document.addEventListener('scroll',procressScroll)