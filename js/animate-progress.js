// Entry Point:
document.addEventListener('DOMContentLoaded', () => {
    // Obtain Desired Elements From The DOM:
    const skillsSection = document.querySelector('#our__skills');
    const progressBars = document.querySelectorAll('#our__skills .progress__bar');
    // Did The Increment Started Or Not?
    let isStarted = false;
    // Scrolling Behavior:
    window.addEventListener('scroll', () => {
        if (!isStarted && skillsSection.getBoundingClientRect().top <= 200) {
            progressBars.forEach((progressBar) => { progressBar.style.width = progressBar.dataset.progress; });
        }
    });
});
