"use strict"
const myNav= document.querySelector('nav');
 
addEventListener('scroll', () =>{
 
    if(scrollY>400){
        myNav.style.setProperty('background',"blue");
    }
  else {
        myNav.style.setProperty('background',"transparent");
  }
})