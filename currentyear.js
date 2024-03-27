export default function currentYear() {
  // wait for DOM and scripts to load
  window.addEventListener("load", () => {
    document.querySelectorAll("[ob-current-year]").forEach((element) => {
      element.textContent = new Date().getFullYear();
    });
  });
}
