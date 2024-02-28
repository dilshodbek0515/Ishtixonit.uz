const btnEl = document.querySelector(".kun_tun")
const kunEl = document.querySelector(".kun")
const tunEl = document.querySelector(".tun")
const body = document.querySelector("body")
const containerEl = document.querySelector(".container")
const backgroundEl = document.querySelector(".background_color")

kunEl.addEventListener('click', () => {
    containerEl.style.backgroundColor = "white"
    backgroundEl.style.backgroundColor = "white"
})

tunEl.addEventListener('click', () => {
    backgroundEl.style.backgroundColor = "black"
    containerEl.style.backgroundColor = "black"
})