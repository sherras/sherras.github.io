
fetch(apiURLt)
    .then((response) => response.json())
    .then((jsObject) =>{

        let day = 0;
        const dayofWeek =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
       let i=0;
        for(i=0; i < 3; i++){
            let d = new Date();
            document.getElementById(`dayofWeek${day+1}`).textContent = dayofWeek[d.getDay()+day];
            document.getElementById(`forecast${day+1}`).textContent = Math.ceil(jsObject.daily[day+1].temp.day) + "°F";
            
            let weatherIcon= jsObject.daily[0].weather[0].icon;
            document.getElementById(`icon${day+1}`).src =`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            day++;
            
        };
      
    });