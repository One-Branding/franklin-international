// wait for DOM and scripts to load
window.addEventListener("load", () => {
  /*/////////////////////////*/
  /*///////Custom Tabs///////*/
  /*/////////////////////////*/
  if (window.innerWidth > 992) {
    const tabLinks = document.querySelectorAll(".tab-link"); // Adjust selector as needed
    const tabContents = document.querySelectorAll(".tab-content"); // Adjust selector as needed

    // Add event listener to each tab link
    tabLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Check if the clicked element is a child of the link
        if (event.target.closest(".tab-link")) {
          const setTab = () => {
            // Deactivate all tabs
            tabContents.forEach((content) =>
              content.classList.remove("active")
            );
            tabLinks.forEach((link) => link.classList.remove("active"));

            clickedTabContent.classList.add("active");
            clickedTab.classList.add("active");

            // Add ARIA attributes for accessibility
            clickedTab.setAttribute("aria-selected", "true");
            clickedTabContent.setAttribute("aria-hidden", "false");
          };

          // Activate the clicked tab
          const clickedTab = event.target.closest(".tab-link");
          const clickedTabContent = document.querySelector(
            `.tab-content[data-tab="${clickedTab.dataset.tab}"]`
          ); // Example of targeting based on data attribute

          setTab();
        }
      });
    });
  }
});
