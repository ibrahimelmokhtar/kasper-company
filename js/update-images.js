// Entry Point:
document.addEventListener('DOMContentLoaded', () => {
    // Obtain Desired Elements From The DOM:
    const landingSection = document.querySelector('#landing');
    const prevArrow = document.querySelector('#landing .left__arrow');
    const nextArrow = document.querySelector('#landing .right__arrow');
    const indicators = document.querySelectorAll('#landing ul li');

    /**
     * @description Update background image to a specific index.
     * @param {Integer} index
     */
    const updateImage = (index) => {
        landingSection.style.backgroundImage = `url('../assets/images/landing-${index}.webp')`;
    };

    /**
     * @description Update dotted indicators to a specific index.
     * @param {Integer} index
     */
    const updateIndicator = (index) => {
        // Remove active class from ALL indicators, if exists:
        indicators.forEach((indicator) => {
            if (indicator.classList.contains('active')) { indicator.classList.remove('active') }
        });
        // Add active class to the desired indicator:
        indicators[index-1].classList.add('active');
    };

    /**
     * @description Update UI depending on user's events.
     * @param {Integer} index
     */
    const updateUI = (index) => {
        updateImage(index);  // Update background image
        updateIndicator(index);  // Update indicators
    };

    /**
     * @description Swipe to the left.
     */
    const swipeLeft = () => {
        --currentIndex;
        if (currentIndex < 1) { currentIndex = 3; }
        updateUI(currentIndex);
    };

    /**
     * @description Swipe to the right.
     */
    const swipeRight = () => {
        ++currentIndex;
        if (currentIndex > 3) { currentIndex = 1; }
        updateUI(currentIndex);
    };

    /**
     * @description Detect the swipe direction for mobile devices.
     */
    const checkDirection = () => {
        if (touchEndX > touchStartX) { swipeLeft(); }
        else if (touchEndX < touchStartX) { swipeRight(); }
    };

    // Initial Setup:
    let currentIndex = 2;
    updateUI(currentIndex);

    // Decrease Image Index:
    prevArrow.addEventListener('click', () => { swipeLeft(); });

    // Increase Image Index:
    nextArrow.addEventListener('click', () => { swipeRight(); });

    // Handle click events on indicators:
    indicators.forEach((indicator) => {
        indicator.addEventListener('click', () => {
            currentIndex = indicator.dataset.index;
            updateUI(currentIndex);
        });
    });

    // Handle touch events for mobile devices:
    let touchStartX = 0;
    let touchEndX = 0;
    document.addEventListener('touchstart', (event) => { touchStartX = event.changedTouches[0].screenX; });
    document.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        checkDirection();
    });
});
