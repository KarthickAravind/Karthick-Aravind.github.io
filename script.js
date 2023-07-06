document.addEventListener('DOMContentLoaded', function() {
    var dots = document.querySelectorAll('.pagination input[type="radio"]');
    var sections = document.querySelectorAll('section');
  
    for (var i = 0; i < dots.length; i++) {
      dots[i].addEventListener('change', function() {
        var checkedDot = document.querySelector('.pagination input[type="radio"]:checked');
        var targetSectionId = checkedDot.getAttribute('id').replace('dot-', 'section-');
        var targetSection = document.getElementById(targetSectionId);
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  });
  