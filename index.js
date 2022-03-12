const btn = document.querySelector(".dice")
const adviceID = document.querySelector("#adviceID")
const advice = document.querySelector("#advice")
const apiURL = "https://api.adviceslip.com/advice"

const randAdvice = () => {
    fetch(apiURL)
    .then(response => response.json())
    .then(data => renderAdvice(data))
}

const renderAdvice = (data) => {
    adviceID.textContent = `#${data.slip.id}`
    advice.textContent = `"${data.slip.advice}"`
}

randAdvice()
btn.addEventListener("click", randAdvice)