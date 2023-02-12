console.log("Hello");
console.log(Date());
let hour=document.getElementsByClassName("hour")[0];
let second=document.getElementsByClassName("second")[0];
let minute=document.getElementsByClassName("minute")[0];
let ampm=document.getElementById("am");




function showTime()
{
    let date=new Date();
let hrs=date.getHours();
ampm.innerHTML= hrs > 12 ? "pm" :"am";

hrs=hrs%12;
let min=date.getMinutes();
let sec=date.getSeconds();
hour.innerHTML=hrs < 10 ? "0"+hrs :hrs
minute.innerHTML=min < 10 ? "0"+min : min;
second.innerHTML= sec< 10 ? "0"+sec : sec


}

setInterval(showTime,100);