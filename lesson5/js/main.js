const addChaptBtn = document.querySelector("button");
const input = document.querySelector('#favchap');
const list = document.querySelector('.list');

addChaptBtn.addEventListener('click', () => {
    if(input.value.length != 0)
    {
        var liElement = document.createElement("li");
        liElement.innerHTML = input.value;
        var delBtn = document.createElement("button");
        delBtn.textContent = "❌";
        liElement.append(delBtn);
        list.append(liElement);
        input.focus();
        input.value = '';
        delBtn.addEventListener('click', () => {
            liElement.remove();
            input.focus();
        });
    }
});