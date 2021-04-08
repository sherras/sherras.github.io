fetch(apiURLt)
    .then((response) => response.json())
    .then((jsObject) =>{

        let day = 0;
        const dayofWeek =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
const theFive = jsObject.daily.filter((x) => x.dt_txt.includes('18:00:00'));
console.log(theFive);
theFive.forEach(x=>{


    let d = new Date(x.dt_txt);
console.log(x.dt_txt);
    document.getElementById(`dayofWeek${day+1}`).textContent = dayofWeek[d.getDay()];
    document.getElementById(`forecast${day+1}`).textContent = x.main.temp + '°F';
    let iconID = x.weather[0].icon;
    document.getElementById(`icon${day + 1}`).src = `https://openweathermap.org/img/wn/${iconID}@2x.png`;
day++;

    
  });
  });
  