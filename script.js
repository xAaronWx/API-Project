// url to random Lorem Picsum image @ 550px
// console.log("hello");

let pictureDiv = document.getElementById("imageDiv");
let img = document.createElement("img");
pictureDiv.appendChild(img);

// const quoteUrl = "http://quotes.stormconsultancy.co.uk/random.json";  // Inspirational Quote
const quoteUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes"; // Ron Swanson Quote
const photoUrl = "https://picsum.photos/550";

document.getElementById("fetchButton").addEventListener("click", grabPhoto);
document.getElementById("fetchButton").addEventListener("click", grabQuote);

function grabPhoto() {
  fetch(photoUrl)
    .then((res) => res.json)
    .then((data) => img.setAttribute("src", photoUrl));
}
grabPhoto();

function grabQuote() {
  fetch(quoteUrl)
    .then((res) => res.json())
    .then((data) => displayQuote(data));
}
grabQuote();

function displayQuote(quote) {
  let quoteText = document.getElementById("randomQuote");
  quoteText.innerHTML = quote;
}
