"use strict"

const tools = document.getElementById("tools")
const navtools= document.querySelector(".navtools")
const dropm = document.getElementsByClassName("dropm")

tools.addEventListener("click", function(){
    
    navtools.classList.toggle("transformY")
})

    for(var i = 0; i < dropm.length; i++){
        dropm[i].addEventListener("click", function(){
            navtools.classList.remove("transformY")
    
        })
    }