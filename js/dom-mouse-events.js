(() => {
    const clickBtn = document.querySelector("#clickme");
    clickBtn.addEventListener("mouseenter", () => {
        // let top = clickBtn.style.top;
        // let left = clickBtn.style.left;
        const screenHeight = window.innerHeight;
        const screenWidth = window.innerWidth;

        const top = Math.floor(Math.random() * screenHeight);
        const left = Math.floor(Math.random() * screenWidth);

        clickBtn.style.top = top + "px";
        clickBtn.style.left = left + "px";
    });
})();
