//1
const userInfo = document.getElementById("userInfo")

userInfo.innerHTML = `
    <p>URL страницы: ${window.location.href}</p>
    <p>Имя браузера: ${navigator.appName}</p>
    <p>Платформа: ${navigator.platform}</p>
    <p>Ширина окна браузера: ${window.innerWidth}px</p>
    <p>Высота окна браузера: ${window.innerHeight}px</p>
`

//2
const checkInternet = document.getElementById("checkInternet")
const internet = document.getElementById("internet")

checkInternet.addEventListener("click", () => {
    if (navigator.onLine) {
        internet.textContent = "Интернет есть."
        internet.style.color = "green"
    } else {
        internet.textContent = "Нет подключения к интернету."
        internet.style.color = "red"
    }
})

// 3
const countdown = document.getElementById("countdown")
let time = 10

const timer = setInterval(() => {
    time--
    countdown.textContent = time
    if (time === 0) {
        clearInterval(timer)
        location.reload()
    }
}, 1000);

//4
function back() {
  window.history.back();
}

function forward() {
  window.history.forward();
}
