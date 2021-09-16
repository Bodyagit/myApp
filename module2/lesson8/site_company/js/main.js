let mainNav = document.querySelector('.main__nav'), 
    menuBtn = document.querySelector('.mobile-toggle');;
menuBtn.addEventListener('click',function(){
  mainNav.classList.toggle('open');
})