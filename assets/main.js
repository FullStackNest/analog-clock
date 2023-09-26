const currentTimeDisplay = document.getElementById('current-time-display');
const hourHand = document.getElementById('hour-hand')
const minuteHand = document.getElementById('minute-hand')
const secondTand = document.getElementById('second-hand')


function showTime() {
    let currentTime = new Date();
    // console.log(currentTime);
    let hour = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds();

    /**
     * 360 deg = circle
     * 360/12(no. of hours) = 30deg,  30/60min
     *  (time taken to move from 1hour to another hour) = 0.5*min
     * 
     * 360 / 60mins (1hour = 60mins) = 6 mins
     * 360 / 60sec (1min = 60sec) = 6 secs
     */

    const hourHandRotation = 30 * hour + (minutes * 0.5);
    const minuteHandRotation = 6 * minutes;
    const secondHandRotation = 6 * seconds;

    // console.log(hourHandRotation, minuteHandRotation, secondHandRotation);

    hourHand.style.transform = `rotate(${hourHandRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteHandRotation}deg)`;
    secondTand.style.transform = `rotate(${secondHandRotation}deg)`;

    currentTimeDisplay.textContent = currentTime.toTimeString();
    currentTimeDisplay.style.paddingLeft = '1rem'

}

setInterval(() => {
    showTime();
}, 1000); // 1sec = 1000ms