function banner(){
    let d = new Date();
    let day = d.getDay();
    if (day == 5){
        document.getElementById("bannerFri").classList.toggle('hide');
    }
}