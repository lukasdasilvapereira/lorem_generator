let ranger = document.getElementById("ranger");
let firstSpan = document.querySelector(".pr");
let rangerir = document.getElementById("rangerir");
let secondSpan = document.querySelector(".pra");


ranger.addEventListener("input", () => {
    firstSpan.textContent = ranger.value;
})

rangerir.addEventListener("input",  () => {
    secondSpan.textContent = rangerir.value;
})