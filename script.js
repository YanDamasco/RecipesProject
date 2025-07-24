window.addEventListener("scroll", function () {
    let header = document.querySelector("#header");
    header.classList.toggle("scrolling", window.scrollY > 50);
});

const aboutTitle = document.getElementById("aboutTitle");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeInDown");
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutTitle);

["containerDifferences1", "containerDifferences2", "containerDifferences3"].forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
});