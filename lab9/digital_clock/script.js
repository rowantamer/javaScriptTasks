let clock = document.getElementById("hours");
let day = document.getElementById("days")
let periodTime = document.getElementById("period");
let setAlarmBtn = document.getElementById("done");
let cancelAlarmBtn = document.getElementById("cancel");
let hourInput = document.getElementById("hour");
let minInput = document.getElementById("min");
let secInput = document.getElementById("sec");

let removeTime;


Time();

setAlarmBtn.addEventListener('click', setAlarm);
cancelAlarmBtn.addEventListener('click', cancelAlarm);

function Time() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let today = weekDay[date.getDay()];
    let state = "";
    if (hour >= 12) {
        state = "PM";
    }
    else {
        state="AM";
    }
    if (hour === 0) {
        hour = 12;
    }
    else if(hour>12) {
        hour = hour-12 ;
    }
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    day.innerHTML = `${today}`;
    clock.innerHTML = `${hour} : ${minute} : ${second}`;
    periodTime.innerHTML = `${state}`;
    setTimeout(Time, 1000);
    return `${hour} ${minute} ${second}`;
}
function update(t) {
    if (t < 10) {
        return `0 ${t}`;
    }
    else {
        return t;
    }
}
function setAlarm() {
   
    let getHour = hourInput.value;
    let getMinute = minInput.value;
    let getSec = secInput.value;


    let alarm = `${update(getHour)} ${update(getMinute)} ${update(getSec)}`;
    console.log(alarm);
    hourInput.disabled = true;
    minInput.disabled = true; 
    secInput.disabled = true;
    let newClock = document.getElementById('hours');
    removeTime = setInterval(function () {
        let now = Time();
        if (alarm == now) {
            alert("as7aaaa ya shalabiiii");
        }
    }, 1000);


}

function cancelAlarm() {
    hourInput.disabled = false;
    minInput.disabled = false; 
    secInput.disabled = false;
    clearInterval(removeTime);

}
