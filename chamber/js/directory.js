
const cardview = document.querySelector("div#card-view");
const tableview = document.querySelector("div#table-view");
const cardicon = document.querySelector("img#icon-card");
const tableicon = document.querySelector("img#icon-table");


cardicon.addEventListener('click', ()=>{

    cardview.style.display = 'grid';
    tableview.style.display="none";
    cardicon.style.opacity=1.0;
    tableicon.style.opacity=0.5;

});

tableicon.addEventListener('click', ()=>{

    cardview.style.display = 'none';
    tableview.style.display="block";
    cardicon.style.opacity=0.5;
    tableicon.style.opacity=1.0;

});

const requestURL = "./data/data.json";
        fetch(requestURL)
            .then(function (response) {
                return response.json();
            })
            .then(function(jsonObject) {
                console.table(jsonObject);
                let businesses = jsonObject["business"];
                businesses.forEach(displayGrid);
                businesses.forEach(displayTable);
            });

function displayGrid(card){
    let cardhtml = `<section class="bizcards">
                        <img src="${card.imageurl}" alt="company logo" class="comp-logo">
                        <p>${card.address}</p>
                        <p>${card.phone}</p>
                        <a href="${card.website}">Visit Website &#10132;</a> 
                    </section>`

    let bizcard = document.createElement('section');

    bizcard.innerHTML = cardhtml;

    document.querySelector('div#card-view').appendChild(bizcard);

};

function displayTable(business){
    let rowhtml =   `<td>${business.name}</td>
                    <td>${business.address}</td>
                    <td>${business.phone}</td>
                    <td><a href="${business.website}">Visit Website &#10132;</a></td>`
    let row = document.createElement("tr");
    row.innerHTML = rowhtml;

    document.querySelector("div#table-view table").appendChild(row);
};