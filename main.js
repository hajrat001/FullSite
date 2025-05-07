let body = document.querySelector("body");
let slide = document.querySelector(".slide");
let left = document.querySelector(".left");
left.addEventListener('click', function(e) {
  e.stopPropagation();
  slide.classList.toggle("active");
})
body.addEventListener('click', function(e) {
  slide.classList.remove("active");
})



function btn1() {
  window.open("https://hajrateali.github.io/Video-To-json/")
}

function btn4() {
  window.open("https://hajrateali.github.io/ImageVideoUploadSite/");
}

function btn3() {
  window.open("https://hajrateali.github.io/MyFinalSite/");
}
