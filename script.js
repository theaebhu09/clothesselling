// Select all elements with the class 'product-card'
const productCards = document.querySelectorAll('.product-card');

// Loop through each product card
productCards.forEach(card => {
    // Add a click event listener to each card
    card.addEventListener('click', () => {
        console.log('Product card clicked!'); // Log a message to the console

        // Optional: Add a visual effect on click
        card.classList.add('clicked'); // Add a 'clicked' class

        // Remove the 'clicked' class after a short delay
        setTimeout(() => {
            card.classList.remove('clicked');
        }, 300); // Remove class after 300 milliseconds
    });
});
const sliderContainer = document.getElementById('sliderContainer');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

showSlide(currentIndex);
