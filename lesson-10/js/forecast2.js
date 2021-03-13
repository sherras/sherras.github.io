let cityID = 5604473;
const apiURL2 = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&APPID=032db7340829273007210b4af9e37673&units=imperial`;
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
   let day = 0;
   const dayofWeek =['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
  // reduce the list array to the five forecasts.
  //filter jsObject.list.filter
  //feed the filter a condition: it has to be 1800 dt_txt and see if it includes use includes(18:00)
//loop through each of the forecast days
const theFive = jsObject.list.filter(list.dt_txt == '18:00:00');
thefive.foreach(x=>{

})
    let d = new Date(jsObject.list[4].dt_txt)

    document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
    document.getElementById(`forecast${day+1}`).textContent = jsObject.list[4].main.temp;




    
   
  });