// Basic script for the black & white starter layout.
// You can safely replace or remove this later.

(function () {
  // Keep footer year up to date
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  const body = document.body;
  const toggleBtn = document.querySelector("[data-theme-toggle]");
  const iconSpan = toggleBtn
    ? toggleBtn.querySelector(".theme-toggle-icon")
    : null;
  const textSpan = toggleBtn
    ? toggleBtn.querySelector(".theme-toggle-text")
    : null;
  const logoImg = document.querySelector(".logo");
  const logoLightSrc =
    logoImg && logoImg.getAttribute("data-light-src")
      ? logoImg.getAttribute("data-light-src")
      : logoImg
      ? logoImg.getAttribute("src")
      : null;
  const logoDarkSrc =
    logoImg && logoImg.getAttribute("data-dark-src")
      ? logoImg.getAttribute("data-dark-src")
      : logoLightSrc;

  function applyTheme(theme) {
    const isDark = theme === "dark";
    body.classList.toggle("theme-dark", isDark);

    if (toggleBtn && iconSpan && textSpan) {
      if (isDark) {
        iconSpan.textContent = "☾";
        textSpan.textContent = "Dark";
        toggleBtn.setAttribute("aria-pressed", "true");
      } else {
        iconSpan.textContent = "☀";
        textSpan.textContent = "Light";
        toggleBtn.setAttribute("aria-pressed", "false");
      }
    }

    if (logoImg && logoLightSrc && logoDarkSrc) {
      logoImg.setAttribute("src", isDark ? logoDarkSrc : logoLightSrc);
    }
  }

  // Figure out initial theme
  let storedTheme = null;
  try {
    storedTheme = window.localStorage.getItem("yay-theme");
  } catch (e) {
    storedTheme = null;
  }

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initialTheme =
    storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : prefersDark
      ? "dark"
      : "light";

  applyTheme(initialTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      const nextTheme = body.classList.contains("theme-dark") ? "light" : "dark";
      applyTheme(nextTheme);
      try {
        window.localStorage.setItem("yay-theme", nextTheme);
      } catch (e) {
        // ignore storage errors
      }
    });
  }

  // Smooth scrolling for hero buttons
  const scrollButtons = document.querySelectorAll("[data-scroll-to]");
  scrollButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetSelector = btn.getAttribute("data-scroll-to");
      if (!targetSelector) return;
      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Interactive product cards + detail panel
  const productCards = Array.from(
    document.querySelectorAll(".product-card")
  );
  const productDetail = document.getElementById("product-detail");
  const productDetailTitle = productDetail
    ? productDetail.querySelector(".product-detail-title")
    : null;
  const productDetailBody = productDetail
    ? productDetail.querySelector(".product-detail-body")
    : null;

  if (productCards.length && productDetail && productDetailTitle && productDetailBody) {
    productCards.forEach((card) => {
      card.addEventListener("click", () => {
        productCards.forEach((c) => c.classList.remove("is-active"));
        card.classList.add("is-active");

        const titleEl = card.querySelector("h3");
        const bodyEl = card.querySelector("p");

        productDetailTitle.textContent = titleEl
          ? titleEl.textContent
          : "Selected device";
        productDetailBody.textContent = bodyEl
          ? bodyEl.textContent
          : "Details coming soon.";
      });
    });
  }

  // Fake contact form submission feedback
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thanks for reaching out to yAy! (Demo only, not actually sending.)");
    });
  }

  console.log("yAy site loaded with theme toggle, interactive buttons, and products.");
})();
