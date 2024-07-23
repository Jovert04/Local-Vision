const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

const wrapper = document.querySelector('.wrapper');
const createLink = document.querySelector('.create_link');
const registerLink = document.querySelector('.register_link');
const btnPopUp = document.querySelector('.login_popup');
const closeIcon = document.querySelector('.close_icon');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopUp.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

btnPopUp.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});