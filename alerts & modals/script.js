var modalBtn = document.querySelector('.mymodal-btn');
var mymodalbgCSS = document.querySelector('.mymodal-bg');
var mymodalClose = document.querySelector('.mymodal-close');


modalBtn.addEventListener('click', function() {
   
    mymodalbgCSS.classList.add('activate');
    
});
mymodalClose.addEventListener('click', function() {
    mymodalbgCSS.classList.remove('activate');
});