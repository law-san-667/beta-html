// Toggle the mobile menu
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
}

// Close the mobile menu when clicking outside
document.addEventListener('click', function (event) {
  const menu = document.querySelector('.menu-links');
  const hamburgerIcon = do cument.querySelector('.hamburger-icon');

  if (!menu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
    menu.classList.remove('open');
    hamburgerIcon.classList.remove('open');
  }
});

// Toggle the dropdown menu for "Nos services"
document.querySelector('.dropdown > a').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default link behavior
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.classList.toggle('open');
});