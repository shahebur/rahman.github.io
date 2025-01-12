// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
          behavior: 'smooth'
        });
        // Close navbar if open (for mobile)
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const showMoreButton = document.getElementById('show-more-projects-button');
  const additionalProjects = document.getElementById('additional-projects');
  const projectCards = document.querySelectorAll('.project-card');

  // Initially hide projects beyond the first three
  for (let i = 3; i < projectCards.length; i++) {
      projectCards[i].classList.add('d-none');
  }

  showMoreButton.addEventListener('click', function () {
      additionalProjects.classList.toggle('show');
      projectCards.forEach(card => card.classList.remove('d-none')); // Show all cards
      showMoreButton.style.display = 'none'; // Hide the "Show More" button
  });
});