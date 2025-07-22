window.addEventListener("scroll", function () {
    let header = this.document.querySelector("#header")
    header.classList.toggle("scrolling", this.window.scrollY > 50)
});

const aboutTitle = document.getElementById("aboutTitle");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutTitle.classList.add("animate__animated", "animate__fadeInDown");
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutTitle);