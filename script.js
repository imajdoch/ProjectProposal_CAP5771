// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Form submission alert
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent! We'll get back to you soon.");
});


const toggleBtn = document.getElementById('togglePDF');
const pdf = document.getElementById('pdfEmbed');

toggleBtn.addEventListener('click', () => {
  pdf.classList.toggle('expanded');
  toggleBtn.textContent = pdf.classList.contains('expanded') ? 'Collapse PDF' : 'View PDF';
});

