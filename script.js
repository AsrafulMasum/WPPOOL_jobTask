// navbar functionality
document.getElementById("menu").addEventListener("click", () => {
  const aside = document.getElementById("aside");
  aside.classList.remove("-right-[500px]");
  aside.classList.add("-right-[22px]");
});

document.getElementById("close").addEventListener("click", () => {
  const aside = document.getElementById("aside");
  aside.classList.remove("-right-[22px]");
  aside.classList.add("-right-[500px]")
});
