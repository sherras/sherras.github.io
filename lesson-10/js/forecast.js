const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=032db7340829273007210b4af9e37673&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
   
    const temperature = document.querySelector('#temp');
   temperature.textContent = jsObject.main.temp;
   
   const current = document.querySelector('#current');
   current.textContent = jsObject.weather.main;
   
   const humidity = document.querySelector('#humidity');
   humidity.textContent = jsObject.main.humidity;
   
   const speed = document.querySelector('#speed');
   speed.textContent = jsObject.wind.speed;

   const low = document.querySelector('#low');
   low.textContent = jsObject.main.temp_min; 
   
   const high = document.querySelector('#high');
   high.textContent = jsObject.main.temp_max;
   
   const imagesrc = `https://openweathermap.org/img/w/'${jsObject.weather[0].icon}.png`;  // note the concatenation
   const desc = jsObject.weather[0].description;  // note how we reference the weather array
   
  });