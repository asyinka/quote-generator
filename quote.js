let btton = document.getElementById("btn")
let quoteContainer = document.querySelector("#quote");
let authorContainer = document.querySelector("#author");

let quoteUrl = 'https://api.quotable.io/randomlllllll';

btton.addEventListener("click", () => {
    handleSubmitButton();
})

async function handleSubmitButton() {
    
    try {
        let result = await fetch(quoteUrl);
        let actualResult = await result.json();
        quoteContainer.innerHTML = actualResult.content;
        authorContainer.innerHTML = actualResult.author;
    } catch(error) {
        alert("An unknow error occured. Please again later.")
    }
}
