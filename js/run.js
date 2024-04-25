window.onload = function() {
    setTimeout(function() {
      var loader = document.querySelector('.preloader-container');
      loader.classList.add("active_new");
    //  $('.preloader').addClass('active');
      // Display your page content after preloader animation completes
     // document.body.style.overflow = 'auto'; // Restore scrolling
    }); // Adjust the duration as needed

    // Apply animations to each span element with a delay
    const spans = document.querySelectorAll('.preloader-text span');
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.animation = ' expandWidth 10s forwards, fadeOut 5s forwards'; // Add fade-out animation
      }, index * 20); // Adjust the delay between each letter's animation
    });
  };
  


  // accordian js
  document.querySelectorAll(".accordion-item").forEach((item) => {
    item.querySelector(".accordion-item-header").addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
  



