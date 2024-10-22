// show menu 
const nav = document.getElementById('nav'),
headerMenu= document.getElementById('header-menu'),
      navClose = document.getElementById('nav_close');
// show menu
if(headerMenu){
   headerMenu.addEventListener('click', () =>{
      nav.classList.add('show-menu');
   })
}

// Menu hidden 
if(navClose){
    navClose.addEventListener('click', () =>{
      nav.classList.remove('show-menu');
   })
}
