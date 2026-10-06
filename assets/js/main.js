// Creative Writing Collaborative — header, mobile menu and home slideshow

(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  function menuOpen() {
    return !!nav && nav.classList.contains("is-open");
  }

  // Header turns solid once the page scrolls past the top (or the menu is open)
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-solid", menuOpen() || window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu toggle; the page behind it is locked while open
  if (toggle && nav) {
    var setMenu = function (open) {
      nav.classList.toggle("is-open", open);
      document.documentElement.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      header.classList.toggle("is-solid", open || window.scrollY > 40);
    };
    toggle.addEventListener("click", function () {
      setMenu(!menuOpen());
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menuOpen()) {
        setMenu(false);
        toggle.focus();
      }
    });
    // Close it if the window grows past the mobile breakpoint
    var desktop = window.matchMedia("(min-width: 901px)");
    var onDesktop = function () {
      if (desktop.matches && menuOpen()) setMenu(false);
    };
    if (desktop.addEventListener) desktop.addEventListener("change", onDesktop);
    else if (desktop.addListener) desktop.addListener(onDesktop);
  }

  // Slideshow: rotate every 5 seconds, dots jump to a slide
  document.querySelectorAll(".slideshow").forEach(function (show) {
    var slides = show.querySelectorAll(".slide");
    var dots = show.querySelectorAll(".dots button");
    var current = 0;
    var timer;

    function go(i) {
      slides[current].classList.remove("is-active");
      dots[current].removeAttribute("aria-current");
      current = (i + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      dots[current].setAttribute("aria-current", "true");
    }

    function start() {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      timer = setInterval(function () { go(current + 1); }, 5000);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        clearInterval(timer);
        go(i);
        start();
      });
    });

    start();
  });
})();
