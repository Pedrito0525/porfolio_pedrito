(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      menu.classList.toggle("is-open");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        menu.classList.remove("is-open");
      });
    });
  }

  const profileImg = document.getElementById("profile-photo");
  const profilePaths = [
    "assets/images/profile.JPG",
    "assets/images/profile.jpg",
    "assets/images/profile.png",
  ];

  if (profileImg && !profileImg.getAttribute("src")) {
    let index = 0;

    function tryNextProfile() {
      if (index >= profilePaths.length) return;
      const testImg = new Image();
      testImg.onload = () => {
        profileImg.src = profilePaths[index];
        profileImg.removeAttribute("data-placeholder");
        const placeholder = document.getElementById("profile-placeholder");
        if (placeholder) placeholder.hidden = true;
      };
      testImg.onerror = () => {
        index += 1;
        tryNextProfile();
      };
      testImg.src = profilePaths[index];
    }

    tryNextProfile();
  }

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__menu a[href^='#']");

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            link.style.color =
              href === `#${id}` ? "var(--text)" : "";
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
  }
})();
