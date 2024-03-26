const discoverButton = document.getElementById("discover-button");
const indispensableSection = document.getElementById("indispensable");

discoverButton.addEventListener("click", function () {
    indispensableSection.scrollIntoView({ behavior: "smooth" });
});

const moreButton = document.getElementById("more-button");
moreButton.addEventListener("click", function () {
    window.location.href = "shop.html";
});

// Fetch...

// Product 1
const photo1 = document.querySelector("#photo-1");
const title1 = document.querySelector("#title-1");
const description1 = document.querySelector("#description-1");
const price1 = document.querySelector("#price-1");

// Product 2
const photo2 = document.querySelector("#photo-2");
const title2 = document.querySelector("#title-2");
const description2 = document.querySelector("#description-2");
const price2 = document.querySelector("#price-2");

// Product 3
const photo3 = document.querySelector("#photo-3");
const title3 = document.querySelector("#title-3");
const description3 = document.querySelector("#description-3");
const price3 = document.querySelector("#price-3");

fetch("https://fakestoreapi.com/products/category/women's clothing")
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0].image);
        console.log(photo1);
        // Product 1
        photo1.src = data[0].image;
        title1.textContent = data[0].title;
        // description1.textContent = data[0].description1;
        price1.textContent = `${data[0].price}$`;

        // Product 2
        photo2.src = data[1].image;
        title2.textContent = data[1].title;
        // description1.textContent = data[1].description1;
        price2.textContent = `${data[1].price}$`;

        // Product 3
        photo3.src = data[2].image;
        title3.textContent = data[2].title;
        // description1.textContent = data[2].description1;
        price3.textContent = `${data[2].price}$`;
    });
