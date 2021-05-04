// create empty div with clock id 

// create get time function 

// using JS date object: 
// working off the date object
function getTime () {
const date = new Date; 
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSecond = date.getSeconds();

// function setSeconds() {
//     const date = new Date;
//     let currentMiliSecond = date.getMilliseconds();
//     return currentMiliSecond
// }

let clock = document.querySelector('#clock') 
clock.innerHTML = `${currentHour}:${currentMinute}:${currentSecond}`
setTimeout(getTime,1000)
};

getTime();

