let value = document.querySelector("#value"); /* this is th eobject not the value, the value is accessed by textContent, and the styles is accessed by style */
let counter = 0;
/* # for id, . for class */
const btns = document.querySelectorAll(".btn")

/* this is how to separately handle each nested class elem */
btns.forEach(
    function(btn) {
        btn.addEventListener('click', function(e) {
            const styles = e.currentTarget.classList;
            console.log(styles)
            if (styles.contains("reset")) {
                counter = 0;
            } else if (styles.contains("increase")) {
                counter++;
            } else {
                counter--;
            }
            if (counter > 0) {
                value.style.color = "green";
            } else if (counter < 0) {
                value.style.color = "red";
            } else {
                value.style.color = "purple";
            }
            /* cant just update variable, need it to show as text */
            value.textContent = counter
        })
    }
)

// const btnDecrease = document.querySelector("btn decrease");
// const btnIncrease = document.querySelector("btn increase");
// const btnReset = document.querySelector("btn reset");

// btnDecrease.addEventListener('click', function() {
//     console.log(counter)
//     counter--;
// });

// btnIncrease.addEventListener('click', function() {
//     counter++;
// });

// btnReset.addEventListener('click', function() {
//     counter = 0;
// });
