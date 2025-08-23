const img = document.querySelector(".profile");
const author = document.querySelector(".profileName");
const review = document.querySelector(".reviewText p");

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const randomBtn = document.querySelector(".randomBtn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    review.textContent = item.text;
};

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
    let newItem;
    do {
        newItem = Math.floor(Math.random() * reviews.length)
    } while (newItem === currentItem);
    currentItem = newItem;
    showPerson(currentItem);
});