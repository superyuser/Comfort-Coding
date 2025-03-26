const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let chosenColor = "#"
    for (i = 0; i < 6; i++) {
        chosenColor += getRandomLetter();
    }
    document.body.style.backgroundColor = chosenColor;
    color.textContent = chosenColor;
})


function getRandomLetter() {
    randomNumber = Math.floor(Math.random() * hex.length);
    return hex[randomNumber];
}