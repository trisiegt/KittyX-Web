const gallery = document.getElementById('imageGallery');
const images = gallery.getElementsByTagName('img');
let currentIndex = 0;

// Function to scroll to the next image
function scrollToNextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // Reset to first image
    }
    // Scroll to the next image
    gallery.scrollTo({
        left: images[currentIndex].offsetLeft,
        behavior: 'smooth'
    });
}

// Scroll every 3 seconds
setInterval(scrollToNextImage, 3000);
