document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar(); // Pastikan saat load pertama kali juga dijalankan
});
