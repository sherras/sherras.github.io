function windChill(){
    let t= parseFloat(document.getElementById("temp").innerHTML);
    let s = parseFloat(document.getElementById('speed').innerHTML);
    if(t <= 50 && s > 3){
        let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
        var chill= f + "°F";
    }
        else{
         chill= "N/A";
        }
        document.getElementById('windC').innerHTML = chill;
}