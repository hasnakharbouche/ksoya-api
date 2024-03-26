// Product 4
const photo4 = document.querySelector("#photo-4");
const title4 = document.querySelector("#title-4");
const description4 = document.querySelector("#description-4");
const price4 = document.querySelector("#price-4");

// Product 5
const photo5 = document.querySelector("#photo-5");
const title5 = document.querySelector("#title-5");
const description5 = document.querySelector("#description-5");
const price5 = document.querySelector("#price-5");

// Product 6
const photo6 = document.querySelector("#photo-6");
const title6 = document.querySelector("#title-6");
const description6 = document.querySelector("#description-6");
const price6 = document.querySelector("#price-6");

fetch("https://fakestoreapi.com/products/category/women's clothing")
    .then((res) => res.json())
    .then((data) => {
        console.log(data[3].image);
        // Product 4
        photo4.src = data[3].image;
        title4.textContent = data[3].title;
        // description4.textContent = data[3].description4;
        price4.textContent = `${data[3].price}$`;

        // Product 5
        photo5.src = data[4].image;
        title5.textContent = data[4].title;
        // description5.textContent = data[4].description5;
        price5.textContent = `${data[4].price}$`;

        // Product 6
        photo6.src = data[5].image;
        title6.textContent = data[5].title;
        // description6.textContent = data[5].description1;
        price6.textContent = `${data[5].price}$`;
    });
