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



// --------------------------------------------Handling hover of work ------------------------------------------------------------->

let work1=document.getElementById("workd1")
let work2=document.getElementById("workd2")
let work3=document.getElementById("workd3")
let work_1=document.getElementById("work-1")
let work_2=document.getElementById("work-2")
let work_3=document.getElementById("work-3")

work_1.onmouseover=()=>{
    work1.style.bottom="25%"

}
work_1.onmouseout=()=>{
    work1.style.bottom="-50%"

}


work_2.onmouseover=()=>{
    work2.style.bottom="25%"

}
work_2.onmouseout=()=>{
    work2.style.bottom="-50%"

}


work_3.onmouseover=()=>{
    work3.style.bottom="25%"

}
work_3.onmouseout=()=>{
    work3.style.bottom="-50%"

}
