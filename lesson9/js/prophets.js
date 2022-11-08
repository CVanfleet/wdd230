

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
        fetch(requestURL)
            .then(function (response) {
                return response.json();
            })
            .then(function(jsonObject) {
                console.table(jsonObject);
                let prophets = jsonObject["prophets"];
                prophets.forEach(displayProphets);
            });

function displayProphets(prophet) {  // Create elements to add to the document
    let cardhtml = `<section class="card">
        <h2>${prophet.name} ${prophet.lastname}</h2>
        <p>Date of birth: ${prophet.birthdate}</p>
        <p>Place of birth: ${prophet.birthplace}</p>
        <img src="${prophet.imageurl}" alt="picture of prophet">
        </section>`
    let card = document.createElement('section');

    card.innerHTML = cardhtml;

    document.querySelector('div.cards').appendChild(card);
};