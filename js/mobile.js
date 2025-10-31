
  document.addEventListener("DOMContentLoaded", () => {
    const bars = document.getElementById("bars");
    const mobileMenu = document.getElementById("mobileMenu");

    bars.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      bars.classList.toggle("fa-xmark"); // swap icon for close symbol
    });
  });

