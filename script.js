window.addEventListener("scroll", function () {
    let header = document.querySelector("#header");
    header.classList.toggle("scrolling", window.scrollY > 50);
});


const aboutTitle = document.getElementById("aboutTitle");
const menuHead = document.getElementById("menuHead");
const pinAnimate1 = document.getElementById("pinAnimate1");
const pinAnimate2 = document.getElementById("pinAnimate2");
const pinAnimate3 = document.getElementById("pinAnimate3");
const observerAbout = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeInDown");
        }
    });
}, { threshold: 0.5 });

observerAbout.observe(aboutTitle);
observerAbout.observe(menuHead);
observerAbout.observe(pinAnimate1);
observerAbout.observe(pinAnimate2);
observerAbout.observe(pinAnimate3);

const pinIcon1 = document.getElementById("pinIcon1");
const pinIcon2 = document.getElementById("pinIcon2");
const pinIcon3 = document.getElementById("pinIcon3");

observerAbout.observe(pinIcon1);
observerAbout.observe(pinIcon2);
observerAbout.observe(pinIcon3);


const observerDifferences = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeInUp");
        }
    });
}, { threshold: 0.5 });

["containerDifferences1", "containerDifferences2", "containerDifferences3"].forEach(id => {
    const el = document.getElementById(id);
    if (el) observerDifferences.observe(el);
});

function alertNavBtns() {
    alert("This button doesn't work because it's a portfolio project")
}

document.querySelector(".homeBtn").addEventListener("click", () => {
    window.location.href = "index.html"
})