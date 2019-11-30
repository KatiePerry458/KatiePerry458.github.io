const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let photo = document.createElement('photo');
      let motto = document.createElement('p');
      let yearFounded = document.createElement('p');
      let currentPopulation = document.createElement('p');
      let averageRainfall = document.createElement('p');

      h2.textContent = towns[i].name;
      image.setAttribute('src', towns[i].imageurl);
      image.setAttribute('alt', towns[i].name + ' ' + prophets[i].lastname) + ' ' + prophets[i].order;


      birthPlace.textContent = "Place of Birth:" + ' ' + towns[i].birthplace;

      card.appendChild(h2);
      card.appendChild(image);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      document.querySelector('div.cards').appendChild(card);


    }


  });