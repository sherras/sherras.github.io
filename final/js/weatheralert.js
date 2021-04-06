
fetch(apiURLt)
.then((response) => response.json())
.then ((jsObject) => {

   const alert = document.querySelector('#weatherAlerts');
   alert.textContent = jsObject.alerts[0].description;
   
});

function closeAlert(){
   document.getElementById("weatherAlerts").classList.toggle('hide');
}