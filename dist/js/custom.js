$(document).ready(function () {

  // ---------------------------
  // Tooltip
  // ---------------------------
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })


  // ---------------------------
  // Scrolled
  // ---------------------------
  $(window).scroll(function () {
    $('header').toggleClass('scrolled', $(this).scrollTop() > 20);
  });

  $(document).ready(function () {
    $(this).scrollTop(0);
  });

  // ---------------------------
  // active url
  // ---------------------------    
  $(function () {
    var current = location.pathname.split("/");
    var getUrl = './' + current[current.length - 1];
    console.log('path', getUrl);
    $('.navbar-nav li a').each(function () {
      var $this = $(this);
      // if the current path is like this link, make it active
      if ($this.attr('href').indexOf(getUrl) !== -1) {
        $this.addClass('active');
      }
    })
  })


  // Aos

  AOS.init({
    once: true,
  });


});


document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });
});