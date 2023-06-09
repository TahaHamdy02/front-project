const boxes = document.querySelectorAll(".showinScroll");
// window.addEventListener("scroll", check);
// ;

function check() {
    boxes.forEach((box) => {
        const triggerBottom = (window.innerHeight / 5) * 4;
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}
window.onscroll = () => {
    check();
};