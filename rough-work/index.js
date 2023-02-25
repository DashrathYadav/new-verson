console.log("Js file up Running")




// ------------------------------------------------  Handling Hamburger toggle---------------------------------------------------->
let menu=document.getElementById("menu")
let hamburger=document.getElementById("hamburger")
let close=document.getElementById("close")
hamburger.onclick=()=>{

    menu.classList.add("active");
    
    }
    
    close.onclick=()=>{
        menu.classList.remove("active")
    }







// ------------------------------------------------------- Handling  Skill education tab change ----------------------------------------->
let skill=document.getElementById("skill")
let exp=document.getElementById("exp")
let edu=document.getElementById("edu")
let skills=document.getElementById("skills")
let education=document.getElementById("education")
let experience=document.getElementById("experience")
skills.classList.remove("display")
edu.classList.remove("info-title")
exp.classList.remove("info-title")





skill.onclick=()=>{
    skills.classList.remove("display")
    skill.classList.add("info-title")
    experience.classList.add("display")
    exp.classList.remove("info-title")
    education.classList.add("display")
    edu.classList.remove("info-title")
    console.log("1")
    

}

edu.onclick=()=>{
    skills.classList.add("display")
    skill.classList.remove("info-title")
    experience.classList.add("display")
    exp.classList.remove("info-title")
    education.classList.remove("display")
    edu.classList.add("info-title")
    console.log("2")

}

exp.onclick=()=>{
    skills.classList.add("display")
    skill.classList.remove("info-title")
    education.classList.add("display")
    edu.classList.remove("info-title")
    experience.classList.remove("display")
    exp.classList.add("info-title")
    console.log("3")
}



// --------------------------------------------Handling underline of tab ------------------------------------------------------------->
// Handling underline of tab

