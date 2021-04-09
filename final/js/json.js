const businessReq = "https://sherras.github.io/final/json/businesses.json";

fetch(businessReq)
.then (function (response){
    return response.json();
})
.then(function (jsonObject){
    const businesses = jsonObject ['businesses'];
    const cards = document.querySelector('.busCards')

    businesses.forEach(business => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let logo = document.createElement('img');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let website = document.createElement('a');
        let address = document.createElement('p');

        h2.textContent = `${business.name}`;
        logo.setAttribute('src', business.logo);
        logo.setAttribute('alt', `${business.name} Logo`);
        logo.setAttribute('loading', 'lazy');
        phone.textContent = `${business.phone}`;
        email.textContent = `${business.email}`;
        website.textContent = `${business.name} Website`;
        website.setAttribute( 'href', business.website);
        website.setAttribute( 'target', 'blank_');
        address.textContent = `${business.address}`;

        card.append(h2);
        card.append(logo);
        card.append(phone);
        card.append(email);
        card.append(website);
        card.append(address);
        cards.append(card);
        
    });
});