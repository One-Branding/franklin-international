export default function localeDropdown() {
  // wait for DOM and scripts to load
  window.addEventListener("load", () => {
    //Locales Custom code
    const localesBtn = document.querySelector("[data-element='locales-btn']");
    const locales = document.querySelector("[data-element='locales']");

    localesBtn.addEventListener("click", () => {
      // chagne the attribute [data-state] to "open" or "close"
      const currentState = locales.getAttribute("data-state");
      const btnState = localesBtn.getAttribute("data-state");
      locales.setAttribute(
        "data-state",
        currentState === "open" ? "closed" : "open"
      );
      localesBtn.setAttribute(
        "data-state",
        btnState === "open" ? "closed" : "open"
      );
    });
  });
}
