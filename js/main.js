
let arrow = document.querySelector('.to-up');

arrow.addEventListener("click",() => {
    arrow.animate({
        scrollTop: 0
    },1000);
})