
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
    var newMessage = document.createElement("h3");
    var newImg = document.createElement('picture');
    var newPar = document.createElement('p');
    newImg.className = 'heroPhoto';
    newImg.innerHTML = `<source media="(100px <= width <= 400px)" srcset="images/portal/meet-greet-small.jpeg">
                        <source media="(401px <= width <= 800px)" srcset="images/portal/meet-greet-medium.jpeg">
                        <source media="(801px <= width)" srcset="images/portal/meet-greet-large.jpeg">
                        <img src="images/portal/meet-greet-large.jpeg" alt="call to action">`
    newMessage.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    newPar.innerHTML = `Join us at <a href="https://www.google.com/maps/place/Eagle,+ID/@43.6849633,-116.3766954,11.88z/data=!4m5!3m4!1s0x54afaaa29029fcdb:0x3ad04fff6ebb4a3a!8m2!3d43.6954424!4d-116.3540138" id='address'>321 North 4th West Eagle, ID 83616</a>`;    newEvent.append(newMessage);
    newEvent.append(newImg);
    newEvent.append(newPar);
    newEvent.className = "newEvent"
    var bannerReplace = document.querySelector("#hero");
    bannerReplace.parentNode.replaceChild(newEvent, bannerReplace);
    document.querySelector("main").insertBefore(newEvent, document.querySelector('main').firstChild);

}

if (today.getDay() == 1 || today.getDay() == 2){
    newEvent();
}