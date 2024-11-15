//Click events for buttons to show portfolio and skills
const portfolio=document.querySelector('.portfolio');
const portfolioBtn=document.querySelector('.portfolio-btn');

const skills=document.querySelector('.skills');
const skillsBtn=document.querySelector('.skills-btn');

portfolioBtn.addEventListener('click', (event)=>{
  skills.style.display='none';
  portfolio.style.display='flex';
  skillsBtn.classList.remove('active-btn');
  portfolioBtn.classList.add('active-btn');
});

skillsBtn.addEventListener('click', (event)=>{
  skills.style.display='flex';
  skillsBtn.classList.add('active-btn');
  portfolio.style.display='none';
  portfolioBtn.classList.remove('active-btn');
});


//showing information about technologies
const explanationBtnS=document.querySelectorAll('.explanation-btn');
const explanationEls=document.querySelectorAll('.explanation p');

explanationBtnS.forEach(btn=>{
  btn.addEventListener('click',e=>{
    let btninfo=e.target.getAttribute('data-info');
    explanationEls.forEach(el=>{
      let elinfo=el.getAttribute('data-info');
      if(elinfo==btninfo){
        el.classList.add('exp-active');
      }
      else{
        el.classList.remove('exp-active');
      }
    })
  })
})

