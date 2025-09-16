function sendEmail() {
  alert('Email function triggered (placeholder).');
}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-item");
const currentPage = document.body.dataset.page;

// Highlight based on page name (e.g., testimonials.html)
function updateNavByPage() {
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    // Match based on filename or in-page anchor
    if (href.includes(`${currentPage}.html`) || href === `#${currentPage}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Scroll-based highlighting for in-page sections (like on index.html)
function updateNavByScroll() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// Run one or both depending on page type
if (currentPage === "home" || currentPage === "index") {
  // If homepage, enable scroll-based tracking
  updateNavByScroll();
  window.addEventListener("scroll", updateNavByScroll);
} else {
  // For other pages
  updateNavByPage();
}
