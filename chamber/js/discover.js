let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

if("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        
        });
    });

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    })
} else{
    imagesToLoad.forEach((img) => {
        loadImages(img);
    })
}

if(localStorage.getItem('visits') == null){
    initiateStorage();
}
else{
    updateStorage();
}

function initiateStorage(){
    var date = new Date('10/10/2022');
    window.localStorage.setItem('visits', 1);
    window.localStorage.setItem('lastVisit', date);
    document.querySelector("#timesVisited").textContent = window.localStorage.getItem('visits');
    document.querySelector("#lastVisited").textContent = 0;
}

function updateStorage(){
    var date = new Date();
    var times = parseInt(window.localStorage.getItem('visits'));
    let oldDate = Date.parse(window.localStorage.getItem('lastVisit'));
    let difference = date.getTime() - oldDate;
    let days = Math.floor(difference / (1000*3600*24));
    times += 1;
    document.querySelector("#timesVisited").textContent = times;
    window.localStorage.setItem('visits', times);
    document.querySelector("#lastVisited").textContent = days;
    window.localStorage.setItem('lastVisit', date);
    
}