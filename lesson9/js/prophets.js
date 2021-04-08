//set the JSON souce URL 
const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
//use fetch to obatin a promise
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
//select output location
   const cards =  document.querySelector('.cards')

    prophets.forEach(prophet => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let pimg = document.createElement('img');
      let birthD = document.createElement('p');
      let birthP = document.createElement('p');
      //use template literals
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      birthD.textContent = `Date of birth: ${prophet.birthdate}`;
      birthP.textContent = `Place of birth: ${prophet.birthplace}`;
      pimg.setAttribute('src', prophet.imageurl);
      pimg.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);
      

      card.append(h2);
      card.appendChild(birthD);
      card.appendChild(birthP);
      card.append(pimg);
      cards.append(card);
  });
});
WebFont.load({google: {families: ['Montserrat']}});
WebFont.load({google: {families: ['Merriweather']}});
   /* const utah = document.querySelector('.utah');
    
    const utahfilter = prophets.filter(x => x.birthplace =="Utah");
    utahfilter.forEach(prophet => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let pimg = document.createElement('img');
      //use template literals
      h2.innerHTML = `${utahprophet.name} ${utahprophet.lastname}`;
      pimg.setAttribute('alt,' `Portrait of ${utahprophet.name} who was born in ${utahprophet.birthplace} in the year ${utahprophet.birthdate.substring(utahprophet.birthdate.length - 4)}!`)
      pimg.style.boxshadow = '0 0 30px #333';
      pimg.style.width = '200px';

      card.append(h2);
      utah.append(card);
      card.append(img);

  });*/
