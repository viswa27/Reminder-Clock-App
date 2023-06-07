function clock(){
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let amPm = "AM";
    let newImage=document.getElementsByClassName("pic")[0];

    switch (true) {
        case (hour >= 12 && hour < 16):
          newImage.style.backgroundImage = 'url(afternoon.svg)';
          document.getElementById('enjoy').textContent = "LET'S HAVE SOME LUNCH !!";
          document.getElementById('greetings').textContent = "GOOD AFTERNOON !! TAKE SOME SLEEP";
          break;
        case (hour >= 16 && hour < 20):
          newImage.style.backgroundImage = 'url(evening.png)';
          document.getElementById('enjoy').textContent = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
          document.getElementById('greetings').textContent = "GOOD EVENING !!";
          break;
        case (hour >= 20 || hour < 6):
          newImage.style.backgroundImage = 'url(goodnight_image.svg)';
          document.getElementById('enjoy').textContent = "CLOSE YOUR EYES AND GO TO SLEEP";
          document.getElementById('greetings').textContent = "GOOD NIGHT !!";
          break;
        default:
          newImage.style.backgroundImage = 'url(morning.svg)';
          document.getElementById('enjoy').textContent = "GRAB SOME HEALTHY BREAKFAST!!!";
          document.getElementById('greetings').textContent = "GOOD MORNING!! WAKE UP !!";
          break;
    }
    if(hour > 12){
        hour -= 12;
        amPm = "PM"
    }
    let hrs = hour.toString().padStart(2, '0');
    document.getElementById("hr").textContent = hrs;
    let mins = minutes.toString().padStart(2,'0');
    document.getElementById("min").textContent = mins;
    let secs = seconds.toString().padStart(2,'0');
    document.getElementById("sec").textContent = secs;
    document.getElementById("AM-PM").textContent = amPm;
}
setInterval(clock, 1000);

function setAlarm() {
    let wake = document.getElementById('wakeup').value;
    document.getElementById('wakeupTime').textContent = wake;
    let lunch = document.getElementById('lunch').value;
    document.getElementById('lunchTime').textContent = lunch;
    let nap = document.getElementById('nap').value;
    document.getElementById('napTime').textContent = nap;
    let night = document.getElementById('night').value;
    document.getElementById('nightTime').textContent = night;
}

function popup1() {
    document.getElementsByClassName("sright")[0].style.display = "block";
}
function popdown1() {
    document.getElementsByClassName("sright")[0].style.display = "none";
}

function popup2() {
    document.getElementsByClassName("topspeech")[0].style.display = "block";
}
function popdown2() {
    document.getElementsByClassName("topspeech")[0].style.display = "none";
}
