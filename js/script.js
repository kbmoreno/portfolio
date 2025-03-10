function entrance() {
    const main = document.getElementById("main");
    const footer = document.getElementById("footer");

    main.classList.add("h");
    footer.classList.add("h");
    
    setTimeout(() => {
        main.classList.remove("h");
        footer.classList.remove("h");
        main.classList.add("v");
        footer.classList.add("v");
    }, 600);

    footer.innerHTML = `© ${new Date().getFullYear()} Kim Brian Moreno.`;
}

window.addEventListener('DOMContentLoaded', () => {
    entrance();
})