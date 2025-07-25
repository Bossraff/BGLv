// script.js

// You can enhance this with interactive features later.
console.log("Sixeleven Portal Loaded");






document.addEventListener("DOMContentLoaded", () => {
  const elementsToReveal = document.querySelectorAll(".text-box, .image-box");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const triggerBottom = windowHeight * 0.85; // Trigger earlier

    elementsToReveal.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("resize", revealOnScroll);
  revealOnScroll(); // Initial check
});





document.addEventListener("DOMContentLoaded", () => {
  const roadmap = document.querySelector(".info-roadmap");
  const progressLine = document.querySelector(".roadmap-line-progress");

  if (!roadmap || !progressLine) return;

  roadmap.addEventListener("mousemove", (e) => {
    const rect = roadmap.getBoundingClientRect();

    // Calculate vertical mouse position relative to the top of roadmap container
    let mouseY = e.clientY - rect.top;

    // Clamp mouseY to start from 160px (top of line) to bottom of container
    const lineStart = 160; 
    if (mouseY < lineStart) mouseY = lineStart;
    if (mouseY > rect.height) mouseY = rect.height;

    // Calculate height of progress line
    const height = mouseY - lineStart;

    progressLine.style.height = `${height}px`;
  });

  roadmap.addEventListener("mouseleave", () => {
    // Optional: reset progress line height when mouse leaves roadmap area
    progressLine.style.height = `0px`;
  });
});






// Simple bounce effect on footer icons when clicked
document.querySelectorAll(".footer-icons img").forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.add("bounce");
    setTimeout(() => icon.classList.remove("bounce"), 500);
  });
});
