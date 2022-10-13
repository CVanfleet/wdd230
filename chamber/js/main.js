
const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
const lastmodified = new Date(document.lastModified);
document.getElementById("lastupdateddata").textContent = `${lastmodified.getMonth()+1}/${lastmodified.getDate()}/${lastmodified.getFullYear()} ${('0'+lastmodified.getHours()).substr(-2)}:${('0'+lastmodified.getMinutes()).substr(-2)}:${('0' +lastmodified.getSeconds()).substr(-2)}`

function toggleMenu(){
    document.getElementById("navList").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

document.querySelector("nav section span").textContent = today.toLocaleDateString('en-us', {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'});

function newEvent(){
    var newEvent = document.createElement("div");
    var newMessage = document.createElement("p");
    newMessage.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    newEvent.append(newMessage);
    newEvent.className = "newEvent"
    var bannerReplace = document.querySelector("#hero");
    bannerReplace.parentNode.replaceChild(newEvent, bannerReplace);
    document.querySelector("main").insertBefore(newEvent, document.querySelector('main').firstChild);

}

if (today.getDay() == 1 || today.getDay() == 2){
    newEvent();
}