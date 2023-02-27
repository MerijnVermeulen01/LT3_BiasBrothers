document.addEventListener("DOMContentLoaded", () => {
    const cards = document.getElementsByClassName("card");

    for (const card of cards) {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    }
});