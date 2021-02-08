//Movement animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const title = document.querySelector(".title");
const title = document.querySelector(".title");
const title = document.querySelector(".title");
const title = document.querySelector(".title");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    //console.log(e.pageX);
    let xAxis = ((window.innerWidth / 2 - e.pageX) /25);
    let yAxis = ((window.innerWidth / 2 - e.pageY) / 25);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

//StartAnimation
container.addEventListener("mouseenter", (e)=>{
    card.style.transition = "none";
});

//Stop Animation
container.addEventListener("mouseleave", (e)=>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});