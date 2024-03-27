export default function setCurrentLocale() {
  // wait for DOM and scripts to load
  window.addEventListener("load", () => {
    // Set the Current Locale
    const currentLocale = document.querySelector(".locales__link.w--current");
    document.querySelector("[data-element='current-locale']").textContent =
      currentLocale.textContent;
    console.log(currentLocale.textContent);
  });
}
