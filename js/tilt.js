// tilt.js

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".wallet-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * 12;
            const rotateY = ((x - centerX) / centerX) * 12;

            card.style.transform =
                `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;

            // dynamic shadow
            const shadowX = (x - centerX) / 12;
            const shadowY = (y - centerY) / 12;

            card.style.boxShadow =
                `${-shadowX}px ${shadowY}px 35px rgba(0,0,0,0.4)`;

            // glow follow mouse
            card.style.background =
                `radial-gradient(circle at ${x}px ${y}px, rgba(0,255,255,0.15), transparent 40%)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
            card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
            card.style.background = "var(--card-bg)";

        });

    });

});