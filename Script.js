function setAlarm() {
  let wake = document.getElementById("wakeup").value;
  document.getElementById("wakeupTime").textContent = wake;
  let lunch = document.getElementById("lunch").value;
  document.getElementById("lunchTime").textContent = lunch;
  let nap = document.getElementById("nap").value;
  document.getElementById("napTime").textContent = nap;
  let night = document.getElementById("night").value;
  document.getElementById("nightTime").textContent = night;
}

let newImage = document.getElementsByClassName("pic")[0];

function clock() {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let amPm = "AM";
  let wake = document.getElementById("wakeup").value;
  let lunch = document.getElementById("lunch").value;
  let nap = document.getElementById("nap").value;
  let night = document.getElementById("night").value;
  let alarmHourNight = parseInt(night.split(' ')[0].substring(0, 2));
  let alarmAmPmNight = night.split(' ')[1];
  let alarmHourNap = parseInt(nap.split(' ')[0].substring(0, 2));
  let alarmAmPmNap = nap.split(' ')[1];
  let alarmHourLunch = parseInt(lunch.split(' ')[0].substring(0, 2));
  let alarmAmPmLunch = lunch.split(' ')[1];
  let alarmHourWake = parseInt(wake.split(' ')[0].substring(0, 2));
  let alarmAmPmWake = wake.split(' ')[1];

  if (hour >= 12) {
    amPm = "PM";
    if (hour > 12) {
      hour -= 12;
    }
  }

  function checkTime(){
    if (alarmHourNight === hour && alarmAmPmNight === amPm) {
      newImage.style.backgroundImage = "url(goodnight_image.svg)";
      greetings = "GOOD NIGHT!!";
      enjoyText = "CLOSE YOUR EYES AND GO TO SLEEP";
    }
    else if (alarmHourNap === hour && alarmAmPmNap === amPm){
      newImage.style.backgroundImage = "url(evening.png)";
      greetings = "GOOD EVENING !!";
      enjoyText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    }
    else if (alarmHourLunch === hour && alarmAmPmLunch === amPm){
      newImage.style.backgroundImage = "url(afternoon.svg)";
      greetings = "GOOD AFTERNOON !! TAKE SOME SLEEP";
      enjoyText = "LET'S HAVE SOME LUNCH !!";
    }
    else if (alarmHourWake === hour && alarmAmPmWake === amPm){
      newImage.style.backgroundImage = "url(morning.svg)";
      greetings = "GOOD MORNING!! WAKE UP !!";
      enjoyText = "GRAB SOME HEALTHY BREAKFAST!!!";
    }
  }

  let greetings = "";
  let enjoyText = "";

  if (hour < 4 && hour <= 12 && amPm === "PM") {
    newImage.style.backgroundImage = "url(afternoon.svg)";
    greetings = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    enjoyText = "LET'S HAVE SOME LUNCH !!";
    checkTime();
  } else if (hour >= 4 && hour < 8 && amPm === "PM") {
    newImage.style.backgroundImage = "url(evening.png)";
    greetings = "GOOD EVENING !!";
    enjoyText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    checkTime();
  } else if ((hour >= 8 && amPm === "PM") || (hour < 6 && amPm === "AM")) {
    newImage.style.backgroundImage = "url(goodnight_image.svg)";
    greetings = "GOOD NIGHT !!";
    enjoyText = "CLOSE YOUR EYES AND GO TO SLEEP";
    checkTime();
  } else {
    newImage.style.backgroundImage = "url(morning.svg)";
    greetings = "GOOD MORNING!! WAKE UP !!";
    enjoyText = "GRAB SOME HEALTHY BREAKFAST!!!";
    checkTime();
  }

  document.getElementById("greetings").textContent = greetings;
  document.getElementById("enjoy").textContent = enjoyText;

  document.getElementById("hr").textContent = hour.toString().padStart(2, "0");
  document.getElementById("min").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("sec").textContent = seconds.toString().padStart(2, "0");
  document.getElementById("AM-PM").textContent = amPm;
}

setInterval(clock, 1000);

function popup1() {
  document.getElementsByClassName("sright")[0].style.display = "block";
}

function popdown1() {
  document.getElementsByClassName("sright")[0].style.display = "none";
}

function popup2() {
  document.getElementsByClassName("topspeech")[0].style.display = "block";
  document.getElementById("button").textContent = "Party Time";
}

function popdown2() {
  document.getElementsByClassName("topspeech")[0].style.display = "none";
  document.getElementById("button").textContent = "Set Alarm";
}

