export default function navMenuMobileDropdown() {
  // wait for DOM and scripts to load
  window.addEventListener("load", () => {
    // Nav Menu Custom code
    // If the window is less than 992px run the code
    if (window.innerWidth < 992) {
      const navBtn = document.querySelector("[data-element='nav-menu-btn']");
      const navMenu = document.querySelector("[data-element='nav-menu']");
      const navMenuText = document.querySelector(
        "[data-element='nav-menu-text']"
      );

      navBtn.addEventListener("click", () => {
        const currentState = navMenu.getAttribute("data-state");
        const currentStateBtn = navBtn.getAttribute("data-state");
        navBtn.setAttribute(
          "data-state",
          currentStateBtn === "open" ? "closed" : "open"
        );
        navMenu.setAttribute(
          "data-state",
          currentState === "open" ? "closed" : "open"
        );
        navMenuText.textContent = currentState === "open" ? "Menu" : "Close";
      });
    }
  });
}
