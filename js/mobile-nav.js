document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const navInner = document.querySelector(".site-nav");

  if (!nav || !navInner) return;

  let toggle = document.querySelector(".mobile-nav-toggle");
  if (!toggle) {
    toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "mobile-nav-toggle";
    toggle.setAttribute("aria-label", "Open navigation menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = "<span></span><span></span><span></span>";
    nav.parentNode.insertBefore(toggle, nav);
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");

    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
    toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  // Close when clicking a link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
    });
  });

  // Close on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
    }
  });

  const galleryCells = document.querySelectorAll('.g-cell');

  function setActiveCell(clickedCell) {
    galleryCells.forEach(cell => {
      const isActive = cell === clickedCell && !cell.classList.contains('is-active');
      cell.classList.toggle('is-active', isActive);
      cell.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });
  }

  galleryCells.forEach(cell => {
    cell.addEventListener('click', () => setActiveCell(cell));
    cell.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        setActiveCell(cell);
      }
    });
  });
});
