document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector("[data-mobile-toggle]");
    const mobileNav = document.querySelector("[data-mobile-nav]");

    if (!toggleButton || !mobileNav) {
        return;
    }

    toggleButton.addEventListener("click", () => {
        const expanded = toggleButton.getAttribute("aria-expanded") === "true";
        toggleButton.setAttribute("aria-expanded", String(!expanded));
        mobileNav.classList.toggle("is-open");
    });
});
