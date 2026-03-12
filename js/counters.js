// COUNTERS.JS
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".hero-stats .stat");

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.dataset.target;
            const current = +counter.innerText.replace(/,/g, '');
            const increment = target / 200; // smoothness of count

            if (current < target) {
                counter.innerText = Math.ceil(current + increment).toLocaleString();
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        // Trigger when element is in viewport
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.6 });

        observer.observe(counter);
    });
});