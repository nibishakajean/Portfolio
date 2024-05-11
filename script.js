// JavaScript for displaying date and time
function displayDateTime() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const dateTimeString = now.toLocaleString('en-US', options);
    datetimeElement.textContent = dateTimeString;
}

// Update date and time every second
setInterval(displayDateTime, 1000);

// Initial call to display date and time
displayDateTime();













const scrollContainer = document.getElementById('scrollContainer');
const imagesWrapper = document.getElementById('imagesWrapper');

// Clone the images and append them to the container
const clonedImages = imagesWrapper.cloneNode(true);
scrollContainer.appendChild(clonedImages);

// Function to continuously scroll the container
function autoScroll() {
  // Set the interval to scroll every 5 milliseconds (adjust as needed)
  setInterval(() => {
    // Increment the scroll position by 1 pixel (adjust the value for scrolling speed)
    scrollContainer.scrollLeft += 1;
    
    // Check if the scroll position has reached the end of the cloned content
    if (scrollContainer.scrollLeft >= clonedImages.offsetWidth) {
      // If it reaches the end, reset the scroll position to the beginning without any jump
      scrollContainer.scrollLeft -= clonedImages.offsetWidth;
    }
  }, 40); // Adjust the interval as needed for smoother or faster scrolling
}

// Call the autoScroll function to start automatic scrolling
autoScroll();














// Get the dark mode button
const darkModeBtn = document.getElementById('darkModeBtn');

// Add event listener to toggle dark mode
darkModeBtn.addEventListener('click', () => {
  // Toggle the dark-mode class on the body element
  document.body.classList.toggle('dark-mode');
});










