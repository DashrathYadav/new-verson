console.log("Js file up Running")

let menu=document.getElementById("menu")
let hamburger=document.getElementById("hamburger")
let close=document.getElementById("close")



hamburger.onclick=()=>{

menu.classList.add("active");

}

close.onclick=()=>{
    menu.classList.remove("active")
}