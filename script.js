window.addEventListener("scroll", function () {
    let header = this.document.querySelector("#header")
    header.classList.toggle("scrolling", this.window.scrollY > 50)
});