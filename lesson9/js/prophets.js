const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let image= document.createElement('img');
      let birthDate= document.createElement('p')
      let birthPlace= document.createElement('p')

      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      
      document.querySelector('div.cards').appendChild(card);
      
      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      birthDate.textContent = "Date of Birth:" + ' ' + prophets[i].birthDate
      birthPlace.textContent = "Place of Birth" + ' ' + prophets[i].birthPlace;
      let image = document.createElement('image');
      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname) + ' ' + prophets[i].order;

      card.appendChild(h2);
      card.appendChild(image);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);


    }


  });