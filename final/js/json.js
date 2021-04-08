const businessReq = "https://sherras.github.io/final/json/businesses.json";

fetch(businessReq)
.then (function (response){
    return response.json();
})
.then(function (jsonObject){
    const businesses = jsonObject ['businesses'];
    const cards = document.querySelector('.busCards')

    businesses.forEach(name => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let website = document.createElement('a href=""');
        let address = document.createElement('p');

    })
})