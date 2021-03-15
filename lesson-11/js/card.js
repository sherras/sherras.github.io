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
   const townInfo =  document.querySelector('.townInfo')

    towns.forEach(town => {
      if(town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven'){
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let pimg = document.createElement('img');
      let motto = document.createElement('h3');
      let yearF = document.createElement('p');
      let population = document.createElement('p');
      let rain = document.createElement('p');
      let townData = document.createElement('div');
      //use template literals
      h2.textContent = `${town.name}`;
      motto.textContent = `${town.motto}`;
      yearF.textContent = `Year Founded: ${town.yearFounded}`;
      population.textContent = `Population: ${town.currentPopulation}`;
      rain.textContent = `Annual Rain Fall: ${town.averageRainfall}`;
      pimg.setAttribute('src', `images/${town.photo}`);
      pimg.setAttribute('alt', `${town.name} image.`);
      pimg.setAttribute("loading", "lazy");
      
      townData.append(h2);
      townData.appendChild(motto);
      townData.appendChild(yearF);
      townData.appendChild(population);
      townData.appendChild(rain);
      card.append(townData);
      card.append(pimg);
      townInfo.append(card);
      }
      
  });
});