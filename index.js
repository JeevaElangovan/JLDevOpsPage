
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
            menu.classList.toggle('active-footer');
  
            // Toggle the icon between chevron-down and chevron-up
            h3.querySelector('i').classList.toggle('bi-chevron-down');
            h3.querySelector('i').classList.toggle('bi-chevron-up');
        });
    });
  });



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

function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId + '-dropdown');
    var icon = document.getElementById(dropdownId + '-icon');

    // Close all dropdowns except the one being opened
    var dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(function (d) {
        if (d.id !== dropdownId + '-dropdown' && d.style.display === 'block') {
            d.style.display = 'none';
            var associatedIcon = document.getElementById(d.id.replace('-dropdown', '-icon'));
            associatedIcon.classList.remove('bi-chevron-up');
            associatedIcon.classList.add('bi-chevron-down');
        }
    });

    // Toggle the display and icon class of the current dropdown
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        icon.classList.remove('bi-chevron-up');
        icon.classList.add('bi-chevron-down');
    } else {
        dropdown.style.display = 'block';
        icon.classList.remove('bi-chevron-down');
        icon.classList.add('bi-chevron-up');
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

// document.addEventListener('DOMContentLoaded', function() {
//     const accordionHeaders = document.querySelectorAll('.accordion-header');
  
//     accordionHeaders.forEach(header => {
//         header.addEventListener('click', function() {
//             const accordionItem = this.parentElement;
//             const accordionContent = accordionItem.querySelector('.accordion-content');
//             const accordionToggle = accordionItem.querySelector('.accordion-toggle').querySelector('.arrow');
  
//             if (accordionContent.style.display === 'block') {
//                 accordionContent.style.display = 'none';
//                 accordionToggle.classList.remove('up');
//                 accordionToggle.classList.add('down');
//             } else {
//                 accordionContent.style.display = 'block';
//                 accordionToggle.classList.remove('down');
//                 accordionToggle.classList.add('up');
//             }
//         });
//     });
//   });
  


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


// === Accordion


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

$(document).ready(function() {
    var slideIntervalCase; // Variable to store slide interval

    // Initialize the carousel without automatic cycling
    $('#carouselExampleControls').carousel({
        interval: false
    });

    // Highlight active button when carousel slide changes
    $('#carouselExampleControls').on('slide.bs.carousel', function(event) {
        var slideIndexCase = $(event.relatedTarget).index();
        $('.our-case-btn').removeClass('active-btn');
        $('.our-case-btn').eq(slideIndexCase).addClass('active-btn');
    });

    // Pause automatic slideshow on hover
    $('#carouselExampleControls').on('mouseenter', function() {
        clearInterval(slideIntervalCase);
    });

    // Resume automatic slideshow on mouse leave
    $('#carouselExampleControls').on('mouseleave', function() {
        slideIntervalCase = setInterval(function() {
            $('#carouselExampleControls').carousel('next');
        }, 15000);
    });

    // Start automatic slideshow
    slideIntervalCase = setInterval(function() {
        $('#carouselExampleControls').carousel('next');
    }, 15000);

    // Function to move carousel to specific slide
    window.moveCarousel = function(slideIndex) {
        $('#carouselExampleControls').carousel(slideIndex);
    }

    // Attach click event to buttons
    $('.our-case-btn').on('click', function() {
        var slideIndex = $(this).index();
        moveCarousel(slideIndex);
    });
});


// section - 9 Our testimonials

    let slideIndex = 0;
    const slides = document.querySelectorAll('.test-1');
    const buttons = document.querySelectorAll('.testimonial-btn');
    
    function showSlide(n) {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        slides[n].style.display = 'block';
        setActiveButton(n);
    }
    
    function setActiveButton(n) {
        buttons.forEach((button, index) => {
            if (index === n) {
                button.classList.add('active-test-btn');
            } else {
                button.classList.remove('active-test-btn');
            }
        });
    }
    
    function moveCarouseltest(n) {
        showSlide(n);
        slideIndex = n;
    }
    
    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }
    
    function prevSlide() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        showSlide(slideIndex);
    }
    
    // Automatic slideshow
    let slideshowInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Swipe functionality for touch devices
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (event) => {
        touchStartX = event.touches[0].clientX;
    });

    document.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].clientX;
        handleGesture();
    });

    function handleGesture() {
        if (touchEndX < touchStartX) {
            nextSlide();
        } else if (touchEndX > touchStartX) {
            prevSlide();
        }
    }


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


