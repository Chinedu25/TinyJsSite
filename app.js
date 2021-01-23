//Movement animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    //console.log(e.pageX);
    let xAxis = ((window.innerWidth / 2 - e.pageX) /10);
    let yAxis = ((window.innerWidth / 2 - e.pageY) / 10);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});