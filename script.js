"use strict"

const tools = document.getElementById("tools")
const navtools= document.querySelector(".navtools")
const dropm = document.getElementsByClassName("dropm")

tools.addEventListener("click", function(){
    
    navtools.classList.toggle("transformY")
})

    dropm.addEventListener("click", function(){
        console.log("Hello world!");
        dropm.classList.remove("transformY")

    }) 