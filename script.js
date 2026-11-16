document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("enrollForm");
  const status = document.getElementById("formStatus");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const subject = encodeURIComponent("NeuroMath Academy — Class X Registration Interest");
    const body = encodeURIComponent(
`New registration interest

Student name: ${data.get("studentName")}
Parent / guardian: ${data.get("guardianName") || "Not provided"}
Contact number: ${data.get("phone")}
Email: ${data.get("email") || "Not provided"}
School / area: ${data.get("school") || "Not provided"}
Preferred language: ${data.get("language")}
Message: ${data.get("message") || "None"}

Course: Class X Mathematics Crash Course — Maharashtra State Board
Sessions: Daily 1 hour`
    );

    if (status) status.textContent = "Your email app should open with the registration details. Please send the email to complete your enquiry.";
    window.location.href = `mailto:neuromathematics.academy@gmail.com?subject=${subject}&body=${body}`;
  });

  // Close the mobile navigation after a menu item is selected.
  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("mainNav");
      if (nav && nav.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });
});
