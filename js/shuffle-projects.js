// Entry Point:
document.addEventListener('DOMContentLoaded', () => {
    // Obtain Desired Elements From The DOM:
    const filters = document.querySelectorAll('#portfolio .filters li');
    const projects = document.querySelectorAll('#portfolio .projects li');

    /**
     * @description Update active class within filter list items.
     * @param {li Element} desiredFilter
     */
    const updateActiveFilter = (desiredFilter) => {
        // Remove active class from ALL filters, if exists:
        filters.forEach((filter) => {
            if (filter.classList.contains('active')) { filter.classList.remove('active'); }
        });
        // Add active class on the desired filter:
        desiredFilter.classList.add('active');
    };

    filters.forEach((filter) => {
        filter.addEventListener('click', () => {
            // Update the active filter:
            updateActiveFilter(filter);
            // Update displayed projects based on active filter:
            projects.forEach((project) => {
                if (project.classList.contains(filter.dataset.category)) { project.style.display = 'flex'; }
                else { project.style.display = 'none'; }
            });
        });
    });
});
