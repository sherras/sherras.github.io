const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
//use fetch to obatin a promise
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
//select output location
    const townEvents =  document.querySelector('.townEvents')
 let day = 0;
    towns.forEach(town => {
        if (town.name == 'Soda Springs'){
        for(i = 0; i<= towns[2].events.length; i++){
    let card = document.createElement('section');
      let events = document.createElement('p');
      let townDataE = document.createElement('div');
      //use template literals
      
      events.textContent = towns[2].events[i];
      
      
      
      townDataE.appendChild(events);
      card.append(townDataE);
      townEvents.append(card); 
        }
    }
    
  });
 
});