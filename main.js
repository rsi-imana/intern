// TOPへボタン
const topBtn = document.getElementById("top-btn");
// 押されたら上に行く
topBtn.addEventListener("click", function () {
    window.scroll({ top: 0, behavior: "smooth" });
})
// 画面がスクロールされたらボタンを表示
window.addEventListener("scroll", function () {
    // console.log("スクロール量を取得：" + window.scrollY);
    if (window.scrollY > 100) {
        topBtn.style.opacity = "1";
    } else if (window.scrollY < 100) {
        topBtn.style.opacity = "0";
    }
})

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

// アコーディングメニュー
const accordionBtn = document.getElementsByClassName("menu");
const content = document.getElementsByClassName("content");

for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener("click", function () {
        accordionBtn[i].classList.toggle("is-active");
        content[i].classList.toggle("is-open");
    })
}

// バリデーションチェック
document.getElementById("sample-form").addEventListener("submit", function (e) {
    // フォームが持つデフォルトの動作は「フォーム内容を指定した送信先へ送る」。
    // e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");

    if (!name && !email) {
        nameError.innerHTML = "名前を入力してください";
        emailError.innerHTML = "メールアドレスを入力してください";
        e.preventDefault();
    } else if (!name) {
        nameError.innerHTML = "名前を入力してください";
        emailError.innerHTML = "";
        e.preventDefault();
    } else if (!email) {
        emailError.innerHTML = "メールアドレスを入力してください";
        nameError.innerHTML = "";
        e.preventDefault();
    }
});

// ボタンを押すと文字を表示
function displayText() {
    let inputText = document.getElementById("input-text").value;
    const showMessage = document.getElementById("show-message");
    console.log(inputText);
    if (inputText) {
        showMessage.innerHTML = inputText;
        showMessage.className = "text-color";
    } else {
        showMessage.innerHTML = "文字が入力されていません。";
        showMessage.className = "error"
    }
}

// ボタンを押すと計算する
function calculate() {
    let num01 = parseInt(document.getElementById("input-number01").value);
    let num02 = parseInt(document.getElementById("input-number02").value);
    let calcRadio = document.getElementsByName("calc");
    let calc = "";
    let result = "";
    const outputText = document.getElementById("output-text");


    if (isNaN(num01) || isNaN(num02)) {
        outputText.innerHTML = "数字が入力されていません。";
        outputText.className = "error";
    } else {
        for (let i = 0; i < calcRadio.length; i++) {
            if (calcRadio.item(i).checked) {
                console.log("チェックされているのは" + calcRadio.item(i).value);
                calc = calcRadio.item(i).value;
                if (calc == "add") {
                    result = (num01 + num02);
                } else if (calc == "sub") {
                    result = (num01 - num02);
                } else if (calc == "mul") {
                    result = (num01 * num02);
                } else {
                    result = (num01 / num02).toFixed(2);
                }
            }
        }
        outputText.innerHTML = result;
        outputText.classList = "text-color";
    }

}

// 戻るボタン
function move() {
    location.href = "index.html";
}