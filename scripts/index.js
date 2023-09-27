// JavaScript to handle smooth scrolling with offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = document.querySelector("nav").offsetHeight; // Adjust this offset as needed
      const targetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

function resume() {
  window.open("./Ajeet-Pawar-Resume.pdf", "_blank");
}
