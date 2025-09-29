// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Form submission alert
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Message sent! We'll get back to you soon.");
      form.reset(); // optional: clears the form after submit
    });
  }


  // PDF toggle (expand/collapse)
document.querySelectorAll('.togglePDF').forEach((btn, index) => {
  const pdf = document.querySelectorAll('.pdfEmbed')[index];
  
  btn.addEventListener('click', () => {
    pdf.classList.toggle('expanded');
    btn.textContent = pdf.classList.contains('expanded') ? 'Collapse PDF' : 'View PDF';
  });
});


});
