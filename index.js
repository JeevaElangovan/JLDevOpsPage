// navBar=====>

// Function to open sidebar
function openSidebar() {
    document.querySelector('.sidebar').classList.add('active');
    document.querySelector('body').classList.add('sidebar-open');
  }

  // Function to close sidebar
  function closeSidebar() {
    document.querySelector('.sidebar').classList.remove('active');
    document.querySelector('body').classList.remove('sidebar-open');
  }


  // Function to toggle dropdown
  function toggleDropdown(id) {
    var dropdown = document.getElementById(id + '-dropdown');
    var icon = document.getElementById(id + '-icon');
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
      icon.classList.remove('bi-chevron-down');
      icon.classList.add('bi-chevron-up');
    } else {
      dropdown.style.display = "none";
      icon.classList.remove('bi-chevron-up');
      icon.classList.add('bi-chevron-down');
    }
  }

  // Toggle sidebar on navbar toggler click
  document.querySelector('.navbar-toggler').addEventListener('click', function () {
    if (document.querySelector('.sidebar').classList.contains('active')) {
      closeSidebar(); // Close sidebar if already open
    } else {
      openSidebar(); // Open sidebar if closed
    }
  });



// Section - 2 DevOps Consulting Services ====>


document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.one p[data-content]');
    const contents = document.querySelectorAll('.hidden-content .content');

    function hideAllContents() {
        contents.forEach(content => {
            content.classList.remove('visible');
        });
    }

    function deactivateAllTabs() {
        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            deactivateAllTabs();
            hideAllContents();
            const contentId = this.getAttribute('data-content');
            document.getElementById(contentId).classList.add('visible');
            this.classList.add('active-tab');
        });
    });
});


//  Section - 2 Responsive

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
  
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const accordionToggle = accordionItem.querySelector('.accordion-toggle').querySelector('.arrow');
  
            if (accordionContent.style.display === 'block') {
                accordionContent.style.display = 'none';
                accordionToggle.classList.remove('up');
                accordionToggle.classList.add('down');
            } else {
                accordionContent.style.display = 'block';
                accordionToggle.classList.remove('down');
                accordionToggle.classList.add('up');
            }
        });
    });
  });
  


// section - 4

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.two p[data-content]');
    const contents = document.querySelectorAll('.hide-all-content .content-below');

    function hideAllContents() {
        contents.forEach(content => {
            content.classList.remove('visible-content');
        });
    }

    function deactivateAllTabs() {
        tabs.forEach(tab => {
            tab.classList.remove('active-content');
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            deactivateAllTabs();
            hideAllContents();
            const contentId = this.getAttribute('data-content');
            document.getElementById(contentId).classList.add('visible-content');
            this.classList.add('active-content');
        });
    });
});
// ===


document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-header');

    accordionItems.forEach(item => {
        item.addEventListener('click', function() {
            const accordionContent = this.nextElementSibling;
            const accordionToggle = this.querySelector('.accordion-toggle').querySelector('.arrow');

            // Toggle active class on the clicked accordion item
            this.classList.toggle('active');

            // Toggle arrow direction
            // if (accordionToggle.classList.contains('down')) {
            //     accordionToggle.classList.remove('down');
            //     accordionToggle.classList.add('up');
            // } else {
            //     accordionToggle.classList.remove('up');
            //     accordionToggle.classList.add('down');
            // }

            // Toggle content visibility
            if (accordionContent.style.display === 'block') {
                accordionContent.style.display = 'none';
                accordionToggle.classList.remove('up');
                accordionToggle.classList.add('down');
            } else {
                accordionContent.style.display = 'block';
                accordionToggle.classList.remove('down');
                 accordionToggle.classList.add('up');
            }
        });
    });
});


//  Section - 7 
$(document).ready(function() {
    $('.industry-para').click(function() {
      var targetId = $(this).data('target');
      $('.industry-para').removeClass('active-industry');
      $(this).addClass('active-industry');
      $('.content-industry').addClass('hidden');
      $('#' + targetId).removeClass('hidden');
    });
  });



//  section - 8 Our Case Studies
 // Function to move carousel to a specific slide
 function moveCarousel(slideIndex) {
    $('#carouselExampleControls').carousel(slideIndex);
  }

  $(document).ready(function() {
    var slideInterval; // Variable to store slide interval

    // Highlight active button when carousel slide changes
    $('#carouselExampleControls').on('slide.bs.carousel', function (event) {
      var slideIndex = $(event.relatedTarget).index();
      $('.our-case-btn').removeClass('active-btn');
      $('.our-case-btn').eq(slideIndex).addClass('active-btn');
    });

    // Pause automatic slideshow on hover
    // $('#carouselExampleControls').on('mouseenter', function() {
    //   clearInterval(slideInterval);
    // });

    // Resume automatic slideshow on mouse leave
    $('#carouselExampleControls').on('mouseleave', function() {
      slideInterval = setInterval(function() {
        $('#carouselExampleControls').carousel('next');
      }, 4000); 
    });

    // Start automatic slideshow
    slideInterval = setInterval(function() {
      $('#carouselExampleControls').carousel('next');
    }, 4000); 
  });


// section - 9 Our testimonials


let slideIndex = 1;
showSlides(slideIndex);

function moveCarousel(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("our-testimonials-section9");
    const buttons = document.querySelectorAll('.our-testimonials-btn button');
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active-btn');
    }
    slides[slideIndex - 1].style.display = "block";
    buttons[slideIndex - 1].classList.add('active-btn');
}

// Automatic slideshow
let slideInterval = setInterval(automaticSlide, 2000); // Change 5000 to desired interval in milliseconds

function automaticSlide() {
    moveCarousel(slideIndex + 1);
}

// Pause automatic slideshow on hover
const carouselContainer = document.querySelector('.carousel');
carouselContainer.addEventListener('mouseenter', function () {
    clearInterval(slideInterval);
});

// Resume automatic slideshow on mouse leave
carouselContainer.addEventListener('mouseleave', function () {
    slideInterval = setInterval(automaticSlide, 2000); // Change 5000 to desired interval in milliseconds
});

// Clicking on a button to move carousel
const carouselButtons = document.querySelectorAll('.our-testimonials-btn button');
carouselButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        moveCarousel(index + 1);
        clearInterval(slideInterval); // Pause automatic slideshow
    });
});


// Frequently Asked Questions

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
  
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const accordionToggle = accordionItem.querySelector('.accordion-toggle').querySelector('.arrow');
  
            if (accordionContent.style.display === 'block') {
                accordionContent.style.display = 'none';
                accordionToggle.classList.remove('up');
                accordionToggle.classList.add('down');
            } else {
                accordionContent.style.display = 'block';
                accordionToggle.classList.remove('down');
                accordionToggle.classList.add('up');
            }
        });
    });
  });
  
  // script.js
//   document.addEventListener('DOMContentLoaded', function() {
//     const accordionItems = document.querySelectorAll('.accordion-header');
  
//     accordionItems.forEach(item => {
//         item.addEventListener('click', function() {
//             // Toggle active class on the clicked accordion item
//             this.classList.toggle('active');
            
//             // Toggle arrow color
//             const accordionToggle = this.querySelector('.accordion-toggle').querySelector('.arrow');
//             accordionToggle.classList.toggle('white');
  
//             // Toggle text color
//             const accordionHeader = this.querySelector('.accordion-header');
//             accordionHeader.classList.toggle('white');
//         });
//     });
//   });


//  Footer --->

document.addEventListener("DOMContentLoaded", function() {
    // Get all footer columns
    var footerColumns = document.querySelectorAll('#footer-column');
  
    // Loop through each footer column
    footerColumns.forEach(function(column) {
        // Find the h3 element
        var h3 = column.querySelector('#footer-head');
  
        // Find the ul element
        var menu = column.querySelector('#footer-menu');
  
        // Add click event listener to the icon
        h3.addEventListener('click', function() {
            // Toggle the active class on the menu when the icon is clicked
            menu.classList.toggle('active');
  
            // Toggle the icon between chevron-down and chevron-up
            h3.querySelector('i').classList.toggle('bi-chevron-down');
            h3.querySelector('i').classList.toggle('bi-chevron-up');
        });
    });
  });
