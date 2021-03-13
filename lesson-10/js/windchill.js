function windChill(){
    let t= parseFloat(document.getElementById("temp").innerHTML);
    let s = parseFloat(document.getElementById('speed').innerHTML);
    let f;
    let chill;
    let newf;
    if(t <= 50 && s > 3){
        f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
        chill= f.toFixed(2) + "°F";
    }
        else{
         chill= "N/A";
        }
        document.getElementById('windC').innerHTML = chill;
}