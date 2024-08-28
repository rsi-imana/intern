// ポップアップ
function popup() {
    alert("ポップアップ画面が表示されました！");
}

// 画像のスライドショー
const images = [
    { src: "images/big_plant.jpg", title: "成長したガジュマル" },
    { src: "images/mini_plant.jpg", title: "小さかった頃のガジュマル" },
    { src: "images/ramen.jpg", title: "辛いラーメン" }
]
let num = 0;

function slideshow() {
    num = (num + 1) % images.length;
    // console.log(num);
    document.getElementById("slide-image").src = images[num].src;
    document.getElementById("slide-title").innerHTML = images[num].title;
}
setInterval(slideshow, 2000);

// アコーディオンメニュー
const accordionBtn = document.getElementsByClassName("menu");
const content = document.getElementsByClassName("content");

for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener("click", function () {
        accordionBtn[i].classList.toggle("is-active");
        content[i].classList.toggle("is-open");
    })
}