let url = new URL(window.location);
let params = url.searchParams;

for(const p of params) {
    console.log(p);
}

document.querySelector('#senderName').textContent = `${params.get('fname')} ${params.get('lname')}`;
document.querySelector('#senderEmail').textContent = `${params.get('email')}`;
document.querySelector('#senderNum').textContent = `${params.get('cellphone')}`;
document.querySelector('#senderMsg').textContent = `${params.get('message')}`;

