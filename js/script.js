// Add custom JavaScript here
function userScoll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("navbar-stricky");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("navbar-stricky");
    }
  });
}
document.addEventListener("DOMContentLoaded", userScoll);
