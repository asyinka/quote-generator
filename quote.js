let btton = document.getElementById("Button")
let displayedQuote = document.querySelector("quote");

let quoteUrl = 'https://api.quotable.io/random';

btton.addEventListener("click", () => {
    handleSubmitButton;
})

async function handleSubmitButton() {
    let result = await fetch(quoteUrl);
    let actualResult = await result.json();


}