document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const slideText = document.querySelector(".slide-text");
  let playing = true;
  let slideInterval = setInterval(nextSlide, 5000);

  const pausePlayBtn = document.getElementById("pausePlayBtn");
  const pauseIcon = '<i class="fa-solid fa-pause"></i>';
  const playIcon = '<i class="fa-solid fa-play"></i>';

  const titles = [
    "FLOW", "LIKE", "KINGS & QUEENS", "FLOW", "LIKE",
    "KINGS & QUEENS", "FLOW", "LIKE", "KINGS & QUEENS", ""
  ];
  const numbers = ["01","02","03","04","05","06","07","08","09","10", "11"];
  const slideTitle = document.getElementById("slideTitle");
  const slideNumber = document.getElementById("slideNumber");

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    slideTitle.textContent = titles[index];
    slideNumber.textContent = numbers[index];

    // Restart text animation
    slideText.style.animation = "none";
    void slideText.offsetWidth; // trigger reflow
    slideText.style.animation = "slideUp 1s ease forwards";
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  function resetInterval() {
    if (playing) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    }
  }

  document.querySelector(".next").addEventListener("click", () => { nextSlide(); resetInterval(); });
  document.querySelector(".prev").addEventListener("click", () => { prevSlide(); resetInterval(); });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => { slideIndex = i; showSlide(slideIndex); resetInterval(); });
  });

  pausePlayBtn.addEventListener("click", () => {
    if (playing) { clearInterval(slideInterval); pausePlayBtn.innerHTML = playIcon; }
    else { slideInterval = setInterval(nextSlide, 5000); pausePlayBtn.innerHTML = pauseIcon; }
    playing = !playing;
  });

  // Initialize first slide
  showSlide(slideIndex);
});
