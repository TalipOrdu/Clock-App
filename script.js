
const hourHand =document.querySelector("#data-hour-hand");
const minuteHand =document.querySelector("#data-minute-hand");
const secondHand =document.querySelector("#data-second-hand");
const button = document.querySelector(".btn");
const all = document.querySelectorAll(".all");
function setClock(){
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const secondsRatio = ((seconds/60) * 360);
    const mins = currentDate.getMinutes();

    const minuteRatio = ((mins/60) * 360 ) + (seconds/60);
    const hour = currentDate.getHours();
    const hoursRatio = ((hour/12)*360) + ((mins/60));
    setRotation(secondHand,secondsRatio);
    setRotation(minuteHand,minuteRatio);
    setRotation(hourHand,hoursRatio);
}
function setRotation(element,rotationRatio){
    element.style.transform = `rotate(${rotationRatio}deg)`;

}
setInterval(setClock,1000);

setClock();