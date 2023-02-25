console.log("Js file up Running")

let menu=document.getElementById("menu")
let hamburger=document.getElementById("hamburger")
let close=document.getElementById("close")
let skill=document.getElementById("skill")
let exp=document.getElementById("exp")
let edu=document.getElementById("edu")
let skills=document.getElementById("skills")
let education=document.getElementById("education")
let experience=document.getElementById("experience")

skills.classList.remove("display")

hamburger.onclick=()=>{

menu.classList.add("active");

}

close.onclick=()=>{
    menu.classList.remove("active")
}


skill.onclick=()=>{
    skills.classList.remove("display")
    experience.classList.add("display")
    education.classList.add("display")
    console.log("1")

}

edu.onclick=()=>{
    skills.classList.add("display")
    experience.classList.add("display")
    education.classList.remove("display")
    console.log("2")

}

exp.onclick=()=>{
    skills.classList.add("display")
    education.classList.add("display")
    experience.classList.remove("display")
    console.log("3")
}