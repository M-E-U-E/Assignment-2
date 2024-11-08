document.addEventListener("DOMContentLoaded", function() {
    const pricePerNight = 134;
    const startDateInput = document.getElementById("start-date");
    const endDateInput = document.getElementById("end-date");
    const travelerBox = document.getElementById("traveler-box");
    const travelerOptions = document.getElementById("traveler-options");
    const totalTravelers = document.getElementById("total-travelers");
    const adultCountElement = document.getElementById("adult-count");
    const childCountElement = document.getElementById("child-count");
    const totalInfo = document.getElementById("total-info");
    const totalPriceElement = document.getElementById("total-price");

    let adultCount = 2;
    let childCount = 0;

    function updateTotal() {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);
        const nights = (endDate - startDate) / (1000 * 60 * 60 * 24);
        const travelerCount = adultCount + childCount;

        if (nights > 0 && travelerCount > 0) {
            const totalPrice = nights * pricePerNight * travelerCount;
            totalInfo.textContent = `Total for ${travelerCount} traveler${travelerCount > 1 ? 's' : ''}, ${nights} night${nights > 1 ? 's' : ''}`;
            totalPriceElement.textContent = `$${totalPrice}`;
            document.getElementById("charge-message").textContent = `You will be charged $${totalPrice} USD`;
        } else {
            totalInfo.textContent = "Please select valid dates";
            totalPriceElement.textContent = "$0";
            document.getElementById("charge-message").textContent = "You will not be charged yet";
        }
    }

    startDateInput.addEventListener("change", function() {
        endDateInput.min = startDateInput.value;
        updateTotal();
    });
    
    endDateInput.addEventListener("change", updateTotal);

    travelerBox.addEventListener("click", function() {
        travelerOptions.style.display = travelerOptions.style.display === "none" ? "block" : "none";
    });

    function updateTravelerDisplay() {
        const total = adultCount + childCount;
        totalTravelers.textContent = `${total} traveler${total > 1 ? 's' : ''}`;
        updateTotal();
    }

    document.getElementById("adult-increment").addEventListener("click", function() {
        adultCount++;
        adultCountElement.textContent = adultCount;
        document.getElementById("adult-decrement").disabled = adultCount <= 1;
        updateTravelerDisplay();
    });

    document.getElementById("adult-decrement").addEventListener("click", function() {
        if (adultCount > 1) {
            adultCount--;
            adultCountElement.textContent = adultCount;
            document.getElementById("adult-decrement").disabled = adultCount <= 1;
            updateTravelerDisplay();
        }
    });

    document.getElementById("child-increment").addEventListener("click", function() {
        childCount++;
        childCountElement.textContent = childCount;
        document.getElementById("child-decrement").disabled = childCount <= 0;
        updateTravelerDisplay();
    });

    document.getElementById("child-decrement").addEventListener("click", function() {
        if (childCount > 0) {
            childCount--;
            childCountElement.textContent = childCount;
            document.getElementById("child-decrement").disabled = childCount <= 0;
            updateTravelerDisplay();
        }
    });

    document.getElementById("done-btn").addEventListener("click", function() {
        travelerOptions.style.display = "none";
    });
});

// Function to open the gallery lightbox
function openGallery(index) {
    currentIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCounter = document.getElementById('lightboxCounter');

    // Set the current image, title, and counter
    lightboxImage.src = images[currentIndex].src;
    lightboxTitle.textContent = images[currentIndex].title;
    lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`;
    lightbox.style.display = 'flex';
}

// Function to close the gallery lightbox
function closeGallery() {
    document.getElementById('lightbox').style.display = 'none';
}

// Function to navigate through the images
function changeImage(direction) {
    // Update current index
    currentIndex += direction;

    // Wrap around if going beyond the bounds of the array
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Update the lightbox content
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCounter = document.getElementById('lightboxCounter');

    lightboxImage.src = images[currentIndex].src;
    lightboxTitle.textContent = images[currentIndex].title;
    lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`;
}

// Add the "View Gallery" button to each gallery item
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    const button = document.createElement('button');
    button.classList.add('action-btn', 'gallery-button', 'absolute', 'bottom-4', 'right-4', 'bg-blue-500', 'text-white', 'rounded', 'px-4', 'py-2', 'hover:bg-blue-700');
    button.setAttribute('data-index', index);
    button.textContent = 'View Gallery';
    button.addEventListener('click', () => openGallery(index));
    item.appendChild(button);
});

// Add click event listeners to the images
document.querySelectorAll('.gallery-item img').forEach((img, index) => {
    img.addEventListener('click', () => openGallery(index));
});

// Add a new "Explore Property" button
const exploreButton = document.createElement('button');
exploreButton.classList.add('action-btn', 'explore-button', 'absolute', 'bottom-4', 'left-4', 'bg-green-500', 'text-white', 'rounded', 'px-4', 'py-2', 'hover:bg-green-700');
exploreButton.textContent = 'Explore Property';
exploreButton.addEventListener('click', () => {
    // Add your custom functionality here, e.g., navigate to a different page
    console.log('Explore Property button clicked');
});

// Add the new button to the page
document.querySelector('.gallery-container').appendChild(exploreButton);

// Sample image data
const images = [
    { src: 'image1.png', title: 'Juneau Vacation Rental | 2BR | 1BA | 1,115 Sq Ft | Stairs Required' },
    { src: 'image2.png', title: 'Exterior | Driveway (2 Vehicles) | RV Parking Allowed' },
    { src: 'image3.png', title: 'Living Room | Free WiFi' },
    { src: 'image4.png', title: 'Living area' },
    { src: 'image5.png', title: 'Living area' },
    { src: 'image6.png', title: 'Living area' },
    { src: 'image7.png', title: 'Kitchen | Cooking Basics | Coffee Maker | Paper Towels/Trash Bags Provided' },
    { src: 'image8.png', title: 'Interior' },
    { src: 'image9.png', title: 'Private kitchen' },
    { src: 'image10.png', title: 'Laundry Area' },
    { src: 'image11.png', title: 'Bedroom 1 | Queen Bed | Linens Provided' },
    { src: 'image12.png', title: 'Room' },
    { src: 'image13.png', title: 'Room' },
    { src: 'image14.png', title: 'Bedroom 1 | Loft | Full Floor Mattress' },
    { src: 'image15.png', title: 'Interior' },
    { src: 'image16.png', title: 'Bathroom | Towels Provided' },
    { src: 'image17.png', title: 'Bedroom 2 | Extra Long Twin Bed' },
    { src: 'image18.png', title: 'Room' },
    { src: 'image19.png', title: 'Exterior | Keyless Entry' },
    { src: 'image20.png', title: 'Exterior' },
    { src: 'image21.png', title: 'Property grounds' },
    { src: 'image22.png', title: 'Private Deck | Water Views' },
    { src: 'image23.png', title: 'Property grounds' },
    { src: 'image24.png', title: 'Beach Access' },
    { src: 'image25.png', title: 'Property grounds' },
    { src: 'image26.png', title: 'Property grounds' },
    { src: 'image27.png', title: 'Additional Private Deck' },
    { src: 'image28.png', title: 'Exterior' },
    { src: 'image29.png', title: 'Private Beach' },
    { src: 'image30.png', title: 'Recreation Area | Walking Distance' },
    { src: 'image31.png', title: 'Sport court' }
];

let currentIndex = 0;
const saveButton = document.getElementById('saveButton');
let isFavorited = false;

// Check if the page was previously favorited
if (localStorage.getItem('isFavorited') === 'true') {
    saveButton.querySelector('p').textContent = '❤️';
    isFavorited = true;
}

saveButton.addEventListener('click', () => {
    if (!isFavorited) {
        saveButton.querySelector('p').textContent = '❤️';
        isFavorited = true;
        localStorage.setItem('isFavorited', 'true');
    } else {
        saveButton.querySelector('p').textContent = '♥️';
        isFavorited = false;
        localStorage.setItem('isFavorited', 'false');
    }
});
function showAllImages() {
    // This function will show all images in the gallery
    // Implement your gallery display logic here
    alert("Displaying all images...");
  }
