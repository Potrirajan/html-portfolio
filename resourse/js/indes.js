const navlinks = document.querySelector('.nav-links');
const navbtn = document.querySelector('.nav-btn');

navbtn.addEventListener('click', ()=>{
    navlinks.classList.toggle('hide');
});