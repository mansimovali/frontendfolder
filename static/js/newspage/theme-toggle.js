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