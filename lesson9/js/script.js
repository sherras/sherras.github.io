function toggleMenu(){
    document.getElementById("firstNav").classList.toggle('close');
}
/*function datesTimes() {
    let dateNow = document.lastModified;
    document.getElementById("currentdate").innerHTML = dateNow;
    
}*/
function datesTimes(){
    let dayNames = 
    [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ];
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let d = new Date();
    let dayName = dayNames[d.getDay()];
    let monthName = months[d.getMonth()];
    let year = d.getFullYear();
    let fulldate = dayName + ", " + d.getDate() + " " + monthName + " " + year;
    document.getElementById("currentdate").innerHTML = fulldate;
    let newYear = new Date().getFullYear();
    document.getElementById('year').innerHTML = newYear;
}

function banner(){
    let d = new Date();
    let day = d.getDay();
    if (day == 5){
        document.getElementById("bannerFri").classList.toggle('hide');
    }
}
//WebFont.load({google: {families: ['Rubik']}});
//code below based off of codepen from Brother Blazzard. Thank you!
function adjustRating(rating){
    document.getElementById("ratingvalue").innerHTML = rating;
}





//set the JSON souce URL 
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
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let pimg = document.createElement('img');
      let motto = document.createElement('h3');
      let yearF = document.createElement('p');
      let population = document.createElement('p');
      let rain = document.createElement('p');
      //use template literals
      h2.textContent = `${town.name}`;
      motto.textContent = `${town.motto}`;
      yearF.textContent = `Year Founded: ${town.yearFounded}`;
      population.textContent = `Population: ${town.currentPopulation}`;
      rain.textContent = `Annual Rain Fall: ${town.averageRainfall}`;
      pimg.setAttribute('src', `images/${town.photo}`);
      pimg.setAttribute('alt', `${town.name} image.`);
      

      card.append(h2);
      card.appendChild(motto);
      card.appendChild(yearF);
      card.appendChild(population);
      card.appendChild(rain);
      card.append(pimg);
      townInfo.append(card);
  });
});


  /*  const utah = document.querySelector('.utah');
    
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
