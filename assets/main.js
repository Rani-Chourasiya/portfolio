 // navbar sticky
 window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".main-navbar");

    if (window.scrollY > 80) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
  // tab js
  const buttons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projects.forEach(project => {
        project.classList.remove('hide');

        if (filter !== 'all' && !project.classList.contains(filter)) {
          project.classList.add('hide');
        }
      });
    });
  });
  // pdf js
  function downloadCV() {
    // const pdfUrl = "assets/Resume Rani Chourasiya 2026.pdf";
    const pdfUrl = "assets/Rani Chourasiya 2026.pdf";


    // Open PDF only in a new tab
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  }