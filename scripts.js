// Get references to the button and the target section
const scrollButton = document.getElementById('scrollButton');
const bottomSection = document.getElementById('bottom');

// Add a click event listener to the button
scrollButton.addEventListener('click', () => {
    // Scroll to the target section
    bottomSection.scrollIntoView({ behavior: 'smooth' });
});
