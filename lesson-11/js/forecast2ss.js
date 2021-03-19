let cityID = 5607916;
const apiURL2 = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&APPID=032db7340829273007210b4af9e37673&units=imperial`;
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
   let day = 0;
   const dayofWeek =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // reduce the list array to the five forecasts.
  //filter jsObject.list.filter
  //feed the filter a condition: it has to be 1800 dt_txt and see if it includes use includes(18:00)
//loop through each of the forecast days
const theFive = jsObject.list.filter((x) => x.dt_txt.includes('18:00:00'));
//console.log(theFive);
theFive.forEach(x=>{


    let d = new Date(x.dt_txt);
//console.log(x.dt_txt);
    document.getElementById(`dayofWeek${day+1}`).textContent = dayofWeek[d.getDay()];
    document.getElementById(`forecast${day+1}`).textContent = x.main.temp + '°F';
    let iconID = x.weather[0].icon;
    document.getElementById(`icon${day + 1}`).src = `https://openweathermap.org/img/wn/${iconID}@2x.png`;
day++;

    
  });
  });
  