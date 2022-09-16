
const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
const lastmodified = new Date(document.lastModified);
document.getElementById("lastupdateddata").textContent = `${lastmodified.getMonth()+1}/${lastmodified.getDate()}/${lastmodified.getFullYear()} ${('0'+lastmodified.getHours()).substr(-2)}:${('0'+lastmodified.getMinutes()).substr(-2)}:${('0' +lastmodified.getSeconds()).substr(-2)}`
