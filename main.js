const reviews = [
    {
        id: 1,
        name: "Mark Zuck",
        job: "junior web developer, Notes App",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/MarkZuckerberg-crop.jpg/210px-MarkZuckerberg-crop.jpg",
        text:
          "The young man wanted a role model. He looked long and hard in his youth, but that role model never materialized. His only choice was to embrace all the people in his life he didn't want to be like.",
      },
    {
        id: 2,
        name: "Ratan Tata",
        job: "Manager , Donate your wealth",
        img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202001/ratan_tata_throwback_660_230120033543.jpg?size=948:533",
        text: "Don't be scared. The things out there that are unknown aren't scary in themselves. They are just unknown at the moment. Take the time to know them before you list them as scary. Then the world will be a much less scary place for you.",
    },
    {
        id: 3,
        name: "Socrates",
        job: "Part time Philosopher, Thinkout Loud",
        img: "https://www.randomlists.com/img/people/socrates.webp",
        text: "You know that tingly feeling you get on the back of your neck sometimes? I just got that feeling when talking with her. You know I don't believe in sixth senses, but there is something not right with her. I don't know how I know, but I just do.",
    },
    {
        id: 4,
        name: "Munna Michael",
        job: "Owner, Band Baaja Baarat",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Michael_Jackson_Dangerous_World_Tour_1993_cropped.png/220px-Michael_Jackson_Dangerous_World_Tour_1993_cropped.png",
        text: "The way of fortune is like the milky way in the sky; which is a number of small stars, not seen asunder, but giving light together: so it is a number of little and scarce discerned virtues , or rather faculties and customs, that make men fortunate.",
    },
    
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const randomBtn = document.querySelector(".random-btn");


let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

nextBtn.addEventListener('click', function() {
    currentItem++;
    showPerson(currentItem);
});



















