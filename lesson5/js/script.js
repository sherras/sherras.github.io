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
    if (day == 1){
        document.getElementById("bannerFri").innerHTML = "Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    }
}