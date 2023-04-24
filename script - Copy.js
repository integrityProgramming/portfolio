// Smooth scroll to section when clicking on navbar links
$(document).on('click', 'a.nav-link', function (event) {
  event.preventDefault();
  $('html, body').animate({
  scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
  });
  
  // Show and hide mobile navbar when clicking on hamburger icon
  $(document).on('click', '#navbar-toggler', function () {
  $('.navbar-collapse').toggleClass('show');
  });
  
  // Close mobile navbar when clicking on a link
  $(document).on('click', 'a.nav-link', function () {
  $('.navbar-collapse').removeClass('show');
  });
  
  // Change color of navbar when it reaches the second section
  $(window).on('scroll', function () {
  var position = $(this).scrollTop();
  
  $('section').each(function () {
  var target = $(this).offset().top;
  var id = $(this).attr('id');
  var navLinks = $('.navbar-nav a');
  // Check if the current section is the second section
if (id === 'second-section' && position >= target - 100) {
  $('.navbar').addClass('bg-secondary'); // Add background color to navbar
} else {
  $('.navbar').removeClass('bg-secondary'); // Remove background color from navbar
}

// Change active class on navbar links based on scroll position
if (position >= target - 100) {
  navLinks.removeClass('active');
  $('.navbar-nav').find('[href="#' + id + '"]').addClass('active');
}


});
});
  