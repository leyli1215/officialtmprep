const mobileNavContainer = document.querySelector(".mobile-nav-container"); // <div class="mobile-nav-container"></div>
const openMobileNav = document.querySelector(".open-mobile-nav");
const closeBtn = document.querySelector(".close");
const body = document.querySelector("body");

// When close button is clicked, mobile nav container should become invisible
closeBtn.addEventListener("click", () => {
  mobileNavContainer.style.display = "none"; // CSS: display: none;
  body.style.overflow = null;
});

openMobileNav.addEventListener("click", () => {
  mobileNavContainer.style.display= "block";
  body.style.overflow = "hidden";
});
 