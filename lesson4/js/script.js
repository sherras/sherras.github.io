function toggleMenu(){
    document.getElementById("firstNav").classList.toggle('close');
}
function datesTimes() {
    let dateNow = document.lastModified;
    document.getElementById("currentdate").innerHTML = dateNow;
    let newYear = new Date().getFullYear();
    document.getElementById('year').innerHTML = newYear;
}