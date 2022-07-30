// Entry Point:
document.addEventListener('DOMContentLoaded', () => {
    // Obtain Desired Elements From The DOM:
    const statsSection = document.querySelector('#statistics');
    const statsNumbers = document.querySelectorAll('#statistics .stats__number');
    // Did The Increment Started Or Not?
    let isStarted = false;
    // Desired changing speed:
    const speed = 100;
    // Scrolling Behavior:
    window.addEventListener('scroll', () => {
        if (!isStarted && statsSection.getBoundingClientRect().top <= 200) {
            isStarted = true;
            statsNumbers.forEach((statsNumber) => {
                const targetNumber = +statsNumber.dataset.number;    // desired integer
                const increment = targetNumber / speed;    //
                let innerContent = 0;   // used internally to avoid floating points

                // Increase numbers by a custom value depending on the target number
                const updateNumber = () => {
                    if (+statsNumber.textContent < targetNumber) {
                        innerContent = parseFloat(+innerContent + increment);
                        statsNumber.textContent = parseInt(innerContent);
                        setTimeout(updateNumber);
                    } else {
                        statsNumber.textContent = targetNumber;
                    }
                };

                // Actually call the function:
                updateNumber();
            });
        }
    });
});
