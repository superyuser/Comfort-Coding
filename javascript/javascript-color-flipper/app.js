const colors = ["red", "green", "rgba(155, 122, 200)", "#ffffff"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}
);

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length); 
    /* 0-1, 1 exclusive */
}

