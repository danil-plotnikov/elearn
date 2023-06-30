let popup = document.querySelector('.popup')
let popupOpenBtn = document.querySelectorAll('.popup-open')
let popupCloseBtn = document.querySelectorAll('.popup-close')

popupOpenBtn.forEach(function(btn){
  btn.addEventListener("click", function(){
    popup.classList.add('open');
  })
})

popupCloseBtn.forEach(function(btn){
  btn.addEventListener("click", function(){
    popup.classList.remove('open');
  })
})


let popupInput = document.querySelectorAll('.popup-input input');

popupInput.forEach(function(input){
 input.addEventListener("focusin", function(){
  input.parentNode.classList.add('active');
 })
 
 input.addEventListener("focusout", function(){
   if(input.value.length < 1){
   input.parentNode.classList.remove('active');
  }
 })

})

let passwordShow = document.querySelectorAll('.popup-password__show');

passwordShow.forEach(function(password){

 password.addEventListener("click", function(){
  input = password.parentNode.children[0]
  input.type="text"
  password.parentNode.classList.add('password-show')
 })

})

let passwordHide = document.querySelectorAll('.popup-password__hide');

passwordHide.forEach(function(password){

 password.addEventListener("click", function(){
  input = password.parentNode.children[0]
  input.type="password"
  password.parentNode.classList.remove('password-show')
 })

})

const popupSelect = customSelect(".popup-select");


let burger = document.querySelector('.header-burger');
let nav = document.querySelector('.header-nav');

burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
})
