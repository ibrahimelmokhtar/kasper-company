// Entry Point:
document.addEventListener('DOMContentLoaded', () => {
    // Obtain Desired Elements From The DOM:
    const skillsSection = document.querySelector('#our__skills');
    const progressBars = document.querySelectorAll('.progress__bar');
    // Scrolling Behavior:
    window.onscroll = () => {
        if (skillsSection.getBoundingClientRect().top <= 200) {
            progressBars.forEach((progressBar) => { progressBar.style.width = progressBar.dataset.progress; });
        }
    };
});
