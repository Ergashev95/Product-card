const elBtnClick = [...document.querySelectorAll(".btn-click")];
const elBtnActive = [...document.querySelectorAll('.btn-active')];

for (let i = 0; i < elBtnClick.length; i++) {
    elBtnClick[i].addEventListener("click", function () {
        elBtnActive[i].classList.toggle("d-none");
    })
}
