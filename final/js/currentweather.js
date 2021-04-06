const apiURLt = "https://api.openweathermap.org/data/2.5/onecall?lat=35.172&lon=-103.725&appid=990c5410fd389c4d2f034c55ae9f8975&units=imperial";

fetch(apiURLt)
.then((response) => response.json())
.then ((jsObject) => {
    //console.log(jsObject);

   const temperature = document.querySelector('.temperature');
   temperature.textContent = jsObject.current.temp + '°F';
   const humidity = document.querySelector('.humidity');
   humidity.textContent = jsObject.current.humidity + '%';
   const current = document.querySelector('.condition');
   current.textContent = jsObject.current.weather[0].description;
});