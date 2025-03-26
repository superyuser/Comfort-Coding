const reviews = [
    {
        id: 1,
        name: "Chon yejun",
        job: "Korean climber and super flighty personality",
        img: "https://cdn.imago-images.com/bild/sp/1046865272/s.jpg",
        text: "the climber whom princess catleap has confessed her unreciprocated love to in an email in july 2023",
    },
    {
        id: 2,
        name: "Julian Wittig",
        job: "Chem student at stanford",
        img: "https://ethicalbliss.com/wp-content/uploads/2023/08/xl6fcgmfj58.jpg",
        text: "Bestie and future world cup climber for sure",
    },
    {
        id: 3,
        name: "Nancy Jiang",
        job: "Math student at stanford",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHifFkZ3Dd59TYpvWDmzsAnvsR4lWK3zBRg&s",
        text: "super cool girlie",
    },
    {
        id: 4,
        name: "Cristofer arellano",
        job: "Symsys student at stanford",
        img: "https://ichef.bbci.co.uk/images/ic/1040x1040/p03t268b.jpg",
        text: "kindest person ive ever known",
    },
];

// first locate where objects are
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

// query selectors for buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// when window loads (DOMContentloaded), then load index 0 in list
window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);  
});

prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener('click', function() {;
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})



