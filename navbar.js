"use strict"
const myNav= document.querySelector('nav');
 
addEventListener('scroll', () =>{
 
    if(scrollY>530){
        myNav.style.setProperty('background',"#1e0d60");
    }
  else {
        myNav.style.setProperty('background',"transparent");
  }
})
