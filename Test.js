
const h1 = document.querySelector('h1');
const userInput = document.querySelector('input')

userInput.addEventListener('input', function (e) {
    h1.innerText = userInput.value;
})