const businessReq = "https://sherras.github.io/final/json/businesses.json";

fetch(businessReq)
.then (function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const stores = jsonObject ['stores'];
    const cards = document.querySelector('.busCards')

    stores.forEach(store => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let logo = document.createElement('img');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let website = document.createElement('p');
        let address = document.createElement('p');

        h2.textContent = `${store.name}`;
        logo.setAttribute('src', store.logo);
        logo.setAttribute('alt', `${store.name} Logo`);
        phone.textContent = `${store.phone}`;
        email.textContent = `${store.email}`;
        website.textContent = `${store.website}`;
        address.textContent = `${store.address}`;

        card.append(h2);
        card.append(logo);
        card.append(phone);
        card.append(email);
        card.append(website);
        card.append(address);
        
    });
});