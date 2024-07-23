document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll('[id^="dropdown"]');

  dropdowns.forEach((dropdown) => {
    const dropdownMenu = dropdown.querySelector('[id^="dropdownMenu"]');

    dropdown.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeAllDropdownsExcept(dropdownMenu);
      toggleDropdown(dropdownMenu);
      toggleActive(dropdown);
    });

    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) {
        closeDropdown(dropdownMenu);
          dropdown.classList.remove("active");
      }
    });
  });

  function toggleDropdown(dropdownMenu) {
    if (
      dropdownMenu.style.display === "none" ||
      dropdownMenu.style.display === ""
    ) {
      dropdownMenu.style.display = "block";
    } else {
      dropdownMenu.style.display = "none";
    }
  }

  function closeDropdown(dropdownMenu) {
    dropdownMenu.style.display = "none";
  }

  function closeAllDropdownsExcept(exceptMenu) {
    const allDropdownMenus = document.querySelectorAll('[id^="dropdownMenu"]');
    allDropdownMenus.forEach((menu) => {
      if (menu !== exceptMenu) {
        closeDropdown(menu);
      }
    });
  }

  function toggleActive(clickedDropdown) {
    dropdowns.forEach((dropdown) => {
        if (dropdown !== clickedDropdown) {
          dropdown.classList.remove("active");
        }
      });
      clickedDropdown.classList.toggle("active");
  }
});

// Function for nav-bar bottom shadow
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("header");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
