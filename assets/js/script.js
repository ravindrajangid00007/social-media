// ham burger menu 


var hamBurger = document.querySelector('.mobile-menu') ;
var navList = document.querySelector('.nav-menu-list') ;

function activeContainer(){
    navList.classList.toggle('active');
}
hamBurger.addEventListener('click' , activeContainer) ;