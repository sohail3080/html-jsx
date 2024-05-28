if (typeof window !== "undefined") {
    window.addEventListener("scroll", function() {
        var navbar = document.querySelector("nav");
        navbar.classList.toggle("navsticky", window.scrollY > 0);
    });
}