//- total width item to align center item or left
var children = document.getElementById('nav-nowrap').children;
var totalWidth = 0;
for (var i = 0; i < children.length; i++) {
    totalWidth += children[i].offsetWidth;
}
if (totalWidth > $('#nav-responsive').outerWidth()) {
    $('#nav-nowrap').addClass('d-flex');
} else {
    $('#nav-nowrap').removeClass('d-flex');
}
//- Set height for nav
window.onload = function() {
    var nav_height = $('#nav-responsive .nav-item').outerHeight(true);
    $('#nav-responsive').height(nav_height);
}

//- Drag Horizontal
const slider = document.querySelector(".nav-nowrap");
const preventClick = (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
}
let isDown = false;
let isDragged = false;
let startX;
let scrollLeft;
slider.addEventListener("mousedown", e => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});
slider.addEventListener("mouseup", (e) => {
    isDown = false;
    const elements = document.querySelectorAll("a");
    if (isDragged) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", preventClick);
        }
    }
    else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].removeEventListener("click", preventClick);
        }
    }
    slider.classList.remove("active");
    isDragged = false;
});
slider.addEventListener("mousemove", e => {
    if (!isDown) return;
    isDragged = true;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});