document.addEventListener("DOMContentLoaded", (event) => {
  const text =
    "Manila-based art director with years of experience in the industry. Passionate digital artist and storyteller with a penchant for sound engineering and creating visual feasts. Specializes in brand development and impactful brand identity creation. Ensures high-quality, magnificent outcomes for each project by utilizing the principles of artistry, unity, contrast, and harmony.";
  let index = 0;
  const speed = 50;
  const aboutTextElement = document.getElementById("about-text");

  function typeWriter() {
    if (index < text.length) {
      aboutTextElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
