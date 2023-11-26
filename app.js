const timerDayEl = document.querySelector(".timer__day");
const timerHourEl = document.querySelector(".timer__hour");
const timerMinEl = document.querySelector(".timer__min");
const timerSecEl = document.querySelector(".timer__sec");

function getTimeDifference(start, end){
let miliseconds = Math.floor(end - start);
let seconds = Math.floor(milliseconds/1000);
let minutes = Math.floor(seconds/60);
let hours = Math.floor(minutes/60);
let days = Math.floor(hours/24);


}

const startDate = new Date();
const endDate = new Date("Apil 26, 2018 07:30:00");

console.log(getTimeDifference(startDate, endDate))

