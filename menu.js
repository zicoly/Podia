document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNav = document.getElementById('mobile-nav');

    // Hide mobile nav initially
    mobileNav.style.display = 'none';

    // Toggle mobile nav when mobile menu is clicked
    mobileMenu.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the event from bubbling up
        if (mobileNav.style.display === 'block') {
            mobileNav.style.display = 'none';
        } else {
            mobileNav.style.display = 'block';
        }
    });

    // Hide mobile nav when clicking outside the menu
    document.addEventListener('click', function() {
        mobileNav.style.display = 'none';
    });

    // Prevent hiding the mobile nav when clicking on the menu itself
    mobileNav.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cancelIcon = document.querySelector(".cancel-icon");
    const mobileNav = document.getElementById("mobile-nav");
    
    cancelIcon.addEventListener("click", function() {
        if (mobileNav.style.display === "block") {
            mobileNav.style.display = "none";
        } else {
            mobileNav.style.display = "block";
        }
    });
});
