
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  document.addEventListener("DOMContentLoaded", () => {
    const balloonsContainer = document.querySelector(".balloons-container");
  
    function createBalloon() {
      const balloon = document.createElement("div");
      balloon.classList.add("balloon");
  
      // Set random color and position
      balloon.style.setProperty(
        "--balloon-color",
        `hsl(${Math.random() * 360}, 70%, 60%)`
      );
      balloon.style.left = Math.random() * 100 + "vw";
  
      // Add the balloon to the container
      balloonsContainer.appendChild(balloon);
  
      // Remove the balloon after its animation ends
      balloon.addEventListener("animationend", () => {
        balloon.remove();
      });
    }
  
    // Generate balloons every 500ms
    setInterval(createBalloon, 500);
  });