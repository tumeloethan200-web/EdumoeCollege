document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");

  if (!form) return;

  const submitBtn = form.querySelector("button[type='submit']");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      name: form.querySelector("input[type='text']").value,
      email: form.querySelector("input[type='email']").value,
      phone: form.querySelector("input[type='tel']").value
    };

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";
    }

    try {
      await fetch("https://script.google.com/macros/s/AKfycbx-Dp_SLgsvoo55GwDd6BhduyttYA5lJtbzybC3DTEofOg_CNDU2PPUUtLa-MU7GNnIyw/exec", {
        method: "POST",
        body: new URLSearchParams(data)
      });
      alert("Application submitted successfully!");
      form.reset();

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit application. Try again.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Application";
      }
    }

  });

});

document.addEventListener("DOMContentLoaded", function () {

  const reveals = document.querySelectorAll(".reveal");

  function showOnScroll() {
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", showOnScroll);
  showOnScroll();

});

// Mobile nav toggle (called from the hamburger icon in index.html)
function toggleMenu() {
  const nav = document.getElementById("nav");
  const toggleBtn = document.querySelector(".menu-toggle");
  if (nav) {
    const isOpen = nav.classList.toggle("show");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }
}

// Close the mobile menu automatically after tapping a nav link
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");
  if (!nav) return;
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
      const toggleBtn = document.querySelector(".menu-toggle");
      if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
});
