
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


// $(document).ready(function() {
//     var slideIntervalCase; // Variable to store slide interval
  
//     // Initialize the carousel without automatic cycling
//     $('#carouselExampleControls').carousel({
//       interval: false
//     });
  
//     // Highlight active button when carousel slide changes
//     $('#carouselExampleControls').on('slide.bs.carousel', function (event) {
//       var slideIndexCase = $(event.relatedTarget).index();
//       $('.our-case-btn').removeClass('active-btn');
//       $('.our-case-btn').eq(slideIndexCase).addClass('active-btn');
//     });
  
//     // Pause automatic slideshow on hover
//     $('#carouselExampleControls').on('mouseenter', function() {
//       clearInterval(slideIntervalCase);
//     });
  
//     // Resume automatic slideshow on mouse leave
//     $('#carouselExampleControls').on('mouseleave', function() {
//       slideIntervalCase = setInterval(function() {
//         $('#carouselExampleControls').carousel('next');
//       }, 15000); 
//     });
  
//     // Start automatic slideshow
//     slideIntervalCase = setInterval(function() {
//       $('#carouselExampleControls').carousel('next');
//     }, 15000); 
  
//     // Function to move carousel to specific slide
//     window.moveCarousel = function(slideIndex) {
//       $('#carouselExampleControls').carousel(slideIndex);
//     }
  
//     // Attach click event to buttons
//     $('.our-case-btn').on('click', function() {
//       var slideIndex = $(this).index();
//       moveCarousel(slideIndex);
//     });
//   });

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


// JavaScript Slide Functionality

let currentSlide = 0;
const slides = document.querySelectorAll('.container.test-1');
const buttons = document.querySelectorAll('.testimonial-btn');
let touchStartX = 0;
let touchEndX = 0;

function showSlide(slideIndex) {
    slides.forEach((slide) => {
        slide.classList.remove('active-test');
    });
    slides[slideIndex].classList.add('active-test');
}

function moveCarousel(index) {
    showSlide(index);
    currentSlide = index;
    updateButtons(index);
}

function updateButtons(index) {
    buttons.forEach((button, i) => {
        if (i === index) {
            button.classList.add('active-test-btn');
        } else {
            button.classList.remove('active-test-btn');
        }
    });
}

// Connect buttons to moveCarousel function
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        moveCarousel(index);
    });
});

// Handle touch events for swipe
document.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
});

document.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 100; // Adjust as needed
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) >= swipeThreshold) {
        if (swipeDistance > 0) {
            // Swiped right
            if (currentSlide > 0) {
                moveCarousel(currentSlide - 1);
            } else {
                moveCarousel(slides.length - 1);
            }
        } else {
            // Swiped left
            if (currentSlide < slides.length - 1) {
                moveCarousel(currentSlide + 1);
            } else {
                moveCarousel(0);
            }
        }
    }
}

// Automatic slide change after 5 seconds
function autoSlide() {
    if (currentSlide === slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlide(currentSlide);
    updateButtons(currentSlide);
}

// Auto slide change every 5 seconds
setInterval(autoSlide, 5000);


// let currentBlogSlide = 0;
// const blogSlides = document.querySelectorAll('.container.about-session');
// const blogButtons = document.querySelectorAll('.testimonial-btn');
// const blogSlideInterval = 3000; // Interval time in milliseconds (e.g., 5000ms = 5 seconds)

// function showBlogSlide(index) {
//     blogSlides.forEach((slide, i) => {
//         slide.classList.toggle('active-test', i === index);
//         blogButtons[i].classList.toggle('active-test-btn', i === index);
//     });
// }

// function moveBlogCarousel(index) {
//     currentBlogSlide = index;
//     showBlogSlide(currentBlogSlide);
// }

// function nextBlogSlide() {
//     currentBlogSlide = (currentBlogSlide + 1) % blogSlides.length;
//     showBlogSlide(currentBlogSlide);
// }

// let autoBlogSlideInterval = setInterval(nextBlogSlide, blogSlideInterval);

// // blogButtons.forEach((button, index) => {
// //     button.addEventListener('click', () => {
// //         clearInterval(autoBlogSlideInterval); // Stop the auto slideshow
// //         moveBlogCarousel(index);
// //         autoBlogSlideInterval = setInterval(nextBlogSlide, blogSlideInterval); // Restart the auto slideshow
// //     });
// // });

// // Initialize the first slide as active
// document.addEventListener('DOMContentLoaded', (event) => {
//     showBlogSlide(currentBlogSlide);
// });

// // Touch swipe functionality for News and Blogs Section
// let blogTouchStartX = 0;
// let blogTouchEndX = 0;

// function handleBlogTouchStart(event) {
//     blogTouchStartX = event.changedTouches[0].screenX;
// }

// function handleBlogTouchMove(event) {
//     blogTouchEndX = event.changedTouches[0].screenX;
// }

// function handleBlogTouchEnd() {
//     if (blogTouchEndX < blogTouchStartX - 50) { // Swipe left
//         nextBlogSlide();
//         clearInterval(autoBlogSlideInterval);
//         autoBlogSlideInterval = setInterval(nextBlogSlide, blogSlideInterval);
//     }
//     if (blogTouchEndX > blogTouchStartX + 50) { // Swipe right
//         currentBlogSlide = (currentBlogSlide - 1 + blogSlides.length) % blogSlides.length;
//         showBlogSlide(currentBlogSlide);
//         clearInterval(autoBlogSlideInterval);
//         autoBlogSlideInterval = setInterval(nextBlogSlide, blogSlideInterval);
//     }
// }

// blogSlides.forEach(slide => {
//     slide.addEventListener('touchstart', handleBlogTouchStart, false);
//     slide.addEventListener('touchmove', handleBlogTouchMove, false);
//     slide.addEventListener('touchend', handleBlogTouchEnd, false);
// }); 
// =========================================================

// let currentSlideIndex = 1;
// showSlides(currentSlideIndex);

// function moveCarouseltwo(n) {
//     showSlides(currentSlideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     const slides = document.getElementsByClassName("our-testimonials-section9");
//     const buttons = document.querySelectorAll('.our-testimonials-btn button');

//     if (n > slides.length) { currentSlideIndex = 1; }
//     if (n < 1) { currentSlideIndex = slides.length; }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < buttons.length; i++) {
//         buttons[i].classList.remove('active-btn');
//     }
//     slides[currentSlideIndex - 1].style.display = "block";
//     buttons[currentSlideIndex - 1].classList.add('active-btn');
// }

// // Automatic slideshow
// let autoSlideInterval = setInterval(autoSlide, 4000);

// function autoSlide() {
//     moveCarouseltwo(currentSlideIndex + 1);
// }

// // Clear and reset interval to avoid multiple intervals
// function resetAutoSlide() {
//     clearInterval(autoSlideInterval);
//     autoSlideInterval = setInterval(autoSlide, 4000);
// }

// // Resume automatic slideshow on mouse leave
// const carouselContainer = document.querySelector('.carousel-container');
// carouselContainer.addEventListener('mouseleave', function () {
//     resetAutoSlide();
// });

// // Clicking on a button to move carousel
// const navButtons = document.querySelectorAll('.our-testimonials-btn button');
// navButtons.forEach((button, index) => {
//     button.addEventListener('click', function() {
//         moveCarouseltwo(index + 1);
//         clearInterval(autoSlideInterval); // Pause automatic slideshow
//         resetAutoSlide();
//     });
// });

// // Touch swipe functionality
// let touchStartX = 0;
// let touchEndX = 0;

// carouselContainer.addEventListener('touchstart', function(event) {
//     touchStartX = event.touches[0].clientX;
// });

// carouselContainer.addEventListener('touchmove', function(event) {
//     touchEndX = event.touches[0].clientX;
// });

carouselContainer.addEventListener('touchend', function() {
    handleSwipeGesture();
});

function handleSwipeGesture() {
    const swipeThreshold = 50; // Adjust as needed
    const deltaX = touchEndX - touchStartX;

    if (deltaX > swipeThreshold) {
        // Swipe right
        moveCarouseltwo(currentSlideIndex - 1);
    } else if (deltaX < -swipeThreshold) {
        // Swipe left
        moveCarouseltwo(currentSlideIndex + 1);
    }
    resetAutoSlide(); // Reset the interval after swipe
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


