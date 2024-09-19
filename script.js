// Selecting elements:-
let title = document.getElementsByClassName("title")[0];
let info = document.getElementById("info");
let uses = document.getElementsByClassName("uses")[0];
let uses_title = document.getElementById("uses_title");
let exp_btn = document.getElementById("exp_btn");
let keys = document.getElementById("keys");
let explanation = document.getElementById("explanation");
let shortcuts = document.getElementById("shortcuts");
let uses_ok = document.getElementById("uses_ok");
let backgrounds = document.getElementById("backgrounds");
let changeBackground = document.getElementsByClassName("changeBackground")[0];
let standard_backgroundr = document.getElementById("standard_backgroundr");
let standard_backgroundl = document.getElementById("standard_backgroundl");
let background1r = document.getElementById("background1r");
let background1l = document.getElementById("background1l");
let background2r = document.getElementById("background2r");
let background2l = document.getElementById("background2l");
let background3r = document.getElementById("background3r");
let background3l = document.getElementById("background3l");
let background4r = document.getElementById("background4r");
let background4l = document.getElementById("background4l");
let backgrounds_ok = document.getElementById("backgrounds_ok");
let sounds = document.getElementById("sounds");
let changeSound = document.getElementsByClassName("changeSound")[0];
let sound1r = document.getElementById("sound1r");
let sound1l = document.getElementById("sound1l");
let sound2r = document.getElementById("sound2r");
let sound2l = document.getElementById("sound2l");
let sound3r = document.getElementById("sound3r");
let sound3l = document.getElementById("sound3l");
let sound4r = document.getElementById("sound4r");
let sound4l = document.getElementById("sound4l");
let sound5r = document.getElementById("sound5r");
let sound5l = document.getElementById("sound5l");
let sounds_ok = document.getElementById("sounds_ok");
let studying = document.getElementById("studying");
let shortBreak = document.getElementById("shortBreak");
let longBreak = document.getElementById("longBreak");
let timer = document.getElementsByClassName("timer")[0];
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let milliseconds = document.getElementById("milliseconds");
let tup = document.getElementById("tup");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let ok = document.getElementById("ok");
let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let period = document.getElementById("period");
let day = document.getElementById("day");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
let modes = document.getElementById("modes");
let currentTimeMode = document.getElementsByClassName("currentTimeMode")[0];
let pomodoroTimerMode = document.getElementsByClassName("pomodoroTimerMode")[0];
// Building sounds and variables:-
let currentmins;
let currentsecs = 60;
let currentmsecs = 100;
let interval;
let newcurrentmins;
let days = ["Sunday, ","Monday, ","Tuesday, ","Wednesday, ","Thursday, ","Friday, ","Saturday, "];
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let currentTime;
let playTimer = new Audio("Sounds/Play Timer.mp3");
let sound1 = new Audio("Sounds/Timer Ended 1.mp3");
let sound2 = new Audio("Sounds/Timer Ended 2.mp3");
let sound3 = new Audio("Sounds/Timer Ended 3.mp3");
let sound4 = new Audio("Sounds/Timer Ended 4.mp3");
let sound5 = new Audio("Sounds/Timer Ended 5.mp3");
// Building basic functions:-
function default_settings(){
    localStorage.setItem("mode","pomodoroTimer");
    localStorage.setItem("minutes","25");
    localStorage.setItem("firstTime","true");
    localStorage.setItem("timer","stopped");
    localStorage.getItem("uses","undefined");
    localStorage.setItem("sound","4");
    localStorage.setItem("key","undefined");
    studying.style.backgroundColor = "lightgreen";
    shortBreak.style.backgroundColor = "#fff";
    longBreak.style.backgroundColor = "#fff";
    minutes.textContent = "25";
    seconds.textContent = "00";
    milliseconds.textContent = ". 00";
    document.body.style.background = "linear-gradient(to right,yellow,orange 40%,red 80%)";
}
function date_and_time(){
    setInterval(() => {
        currentTime = new Date;
        if(currentTime.getHours() == 0){
            hrs.textContent = (currentTime.getHours() + 12);
            period.textContent = "AM";
            if(hrs.textContent < 10){
                hrs.textContent = "0" + currentTime.getHours();
            }
        }
        else if(currentTime.getHours() < 12 && currentTime.getHours() > 0){
            hrs.textContent = currentTime.getHours();
            period.textContent = "AM";
            if(hrs.textContent < 10){
                hrs.textContent = "0" + currentTime.getHours();
            }
        }
        else if(currentTime.getHours() == 12){
            hrs.textContent = currentTime.getHours();
            period.textContent = "PM";
            if(hrs.textContent < 10 && period.textContent == "PM"){
                hrs.textContent = "0" + currentTime.getHours();
            }
        }
        else if(currentTime.getHours() > 12){
            hrs.textContent = (currentTime.getHours() - 12);
            period.textContent = "PM";
            if(hrs.textContent < 10 && period.textContent == "PM"){
                hrs.textContent = "0" + (currentTime.getHours() - 12);
            }
        }
        mins.textContent = currentTime.getMinutes();
        secs.textContent = currentTime.getSeconds();
        if(currentTime.getMinutes() < 10){
            mins.textContent = "0" + currentTime.getMinutes();
        }
        if(currentTime.getSeconds() < 10){
            secs.textContent = "0" + currentTime.getSeconds();
        }
        day.textContent = days[currentTime.getDay()];
        date.textContent = currentTime.getDate();
        if(currentTime.getDate() < 10){
            date.textContent = "0" + currentTime.getDate();
        }
        month.textContent = months[currentTime.getMonth()];
        year.textContent = currentTime.getFullYear();
    })
}
// Building (uses) container functions:-
function info_click(){
    localStorage.setItem("mode","how_to_use");
    localStorage.setItem("uses","explanation");
    uses.style.display = "block";
    info.style.removeProperty("transform");
    exp_btn.style.color = "#fff";
    exp_btn.style.backgroundColor = "orange";
    keys.style.color = "orange";
    keys.style.backgroundColor = "#fff";
    explanation.style.visibility = "visible";
    shortcuts.style.visibility = "hidden";
    uses_title.innerHTML = "<u>How to use</u>";
    info.style.color = "steelblue";
    info.style.backgroundColor = "#fff";
    info.setAttribute("disabled","");
    backgrounds.setAttribute("disabled","");
    sounds.setAttribute("disabled","");
    studying.setAttribute("disabled","");
    shortBreak.setAttribute("disabled","");
    longBreak.setAttribute("disabled","");
    play.setAttribute("disabled","");
    pause.setAttribute("disabled","");
    reset.setAttribute("disabled","");
    ok.setAttribute("disabled","");
    modes.setAttribute("disabled","");
    title.textContent = "Pomodoro Studying";
    modes.textContent = "Show Current Time";
    currentTimeMode.style.visibility = "hidden";
    pomodoroTimerMode.style.visibility = "visible";
}
function exp_btn_click(){
    exp_btn.style.color = "#fff";
    exp_btn.style.backgroundColor = "orange";
    keys.style.color = "orange";
    keys.style.backgroundColor = "#fff";
    explanation.style.visibility = "visible";
    shortcuts.style.visibility = "hidden";
    uses_title.innerHTML = "<u>How to use</u>";
    uses_title.setAttribute("title","Title of explanation");
}
function keys_click(){
    keys.style.color = "#fff";
    keys.style.backgroundColor = "orange";
    exp_btn.style.color = "orange";
    exp_btn.style.backgroundColor = "#fff";
    explanation.style.visibility = "hidden";
    shortcuts.style.visibility = "visible";
    uses_title.innerHTML = "<u>Keyboard shortcuts (for computers)</u>";
    uses_title.setAttribute("title","Title of keyboard shortcuts");
}
function uses_ok_click(){
    localStorage.setItem("mode","pomodoroTimer");
    localStorage.setItem("uses","keyboardShortcuts");
    uses.style.display = "none";
    info.style.color = "#fff";
    info.style.backgroundColor = "steelblue";
    info.removeAttribute("disabled");
    backgrounds.removeAttribute("disabled");
    sounds.removeAttribute("disabled");
    studying.removeAttribute("disabled");
    shortBreak.removeAttribute("disabled");
    longBreak.removeAttribute("disabled");
    play.removeAttribute("disabled");
    pause.removeAttribute("disabled");
    reset.removeAttribute("disabled");
    ok.removeAttribute("disabled");
    modes.removeAttribute("disabled");
}
// Building (backgrounds) container functions:-
function backgrounds_click(){
    localStorage.setItem("mode","changeBackground");
    changeBackground.style.display = "block";
    backgrounds.style.removeProperty("transform");
    backgrounds.style.color = "#f00";
    backgrounds.style.backgroundColor = "#fff";
    info.setAttribute("disabled","");
    backgrounds.setAttribute("disabled","");
    sounds.setAttribute("disabled","");
    studying.setAttribute("disabled","");
    shortBreak.setAttribute("disabled","");
    longBreak.setAttribute("disabled","");
    play.setAttribute("disabled","");
    pause.setAttribute("disabled","");
    reset.setAttribute("disabled","");
    ok.setAttribute("disabled","");
    modes.setAttribute("disabled","");
    title.textContent = "Pomodoro Studying";
    modes.textContent = "Show Current Time";
    currentTimeMode.style.visibility = "hidden";
    pomodoroTimerMode.style.visibility = "visible";
    timer.style.visibility = "visible";
}
function change_backgrounds(){
    standard_backgroundr.onclick = () => {
        document.body.style.background = 'linear-gradient(to right,yellow,orange 40%,red 80%)';
    }
    standard_backgroundl.onclick = () => {
        document.body.style.background = 'linear-gradient(to right,yellow,orange 40%,red 80%)';
    }
    background1r.onclick = () => {
        document.body.style.background = 'url("Backgrounds/1.png")';
    }
    background1l.onclick = () => {
        document.body.style.background = 'url("Backgrounds/1.png")';
    }
    background2r.onclick = () => {
        document.body.style.background = 'url("Backgrounds/2.png")';
    }
    background2l.onclick = () => {
        document.body.style.background = 'url("Backgrounds/2.png")';
    }
    background3r.onclick = () => {
        document.body.style.background = 'url("Backgrounds/3.png")';
    }
    background3l.onclick = () => {
        document.body.style.background = 'url("Backgrounds/3.png")';
    }
    background4r.onclick = () => {
        document.body.style.background = 'url("Backgrounds/4.png")';
    }
    background4l.onclick = () => {
        document.body.style.background = 'url("Backgrounds/4.png")';
    }
}
function backgrounds_ok_click(){
    localStorage.setItem("mode","pomodoroTimer");
    changeBackground.style.display = "none";
    backgrounds.style.color = "#fff";
    backgrounds.style.backgroundColor = "#f00";
    info.removeAttribute("disabled");
    backgrounds.removeAttribute("disabled");
    sounds.removeAttribute("disabled");
    studying.removeAttribute("disabled");
    shortBreak.removeAttribute("disabled");
    longBreak.removeAttribute("disabled");
    play.removeAttribute("disabled");
    pause.removeAttribute("disabled");
    reset.removeAttribute("disabled");
    ok.removeAttribute("disabled");
    modes.removeAttribute("disabled");
}
// Building (sounds) container functions:-
function sounds_click(){
    localStorage.setItem("mode","changeSound");
    changeSound.style.display = "block";
    sounds.style.removeProperty("transform");
    sounds.style.color = "#0f0";
    sounds.style.backgroundColor = "#fff";
    info.setAttribute("disabled","");
    backgrounds.setAttribute("disabled","");
    sounds.setAttribute("disabled","");
    studying.setAttribute("disabled","");
    shortBreak.setAttribute("disabled","");
    longBreak.setAttribute("disabled","");
    play.setAttribute("disabled","");
    pause.setAttribute("disabled","");
    reset.setAttribute("disabled","");
    ok.setAttribute("disabled","");
    modes.setAttribute("disabled","");
    title.textContent = "Pomodoro Studying";
    modes.textContent = "Show Current Time";
    currentTimeMode.style.visibility = "hidden";
    pomodoroTimerMode.style.visibility = "visible";
    timer.style.visibility = "visible";
}
function change_sounds(){
    sound1r.onclick = () => {
        sound1.pause();
        sound1.currentTime = 0;
        sound2.pause();
        sound2.currentTime = 0;
        sound3.pause();
        sound3.currentTime = 0;
        sound4.pause();
        sound4.currentTime = 0;
        sound5.pause();
        sound5.currentTime = 0;
        setTimeout(() => {
            sound1.play();
            localStorage.setItem("sound","1");
        },200)
    }
    sound1l.onclick = () => {
        sound1.pause();
        sound1.currentTime = 0;
        sound2.pause();
        sound2.currentTime = 0;
        sound3.pause();
        sound3.currentTime = 0;
        sound4.pause();
        sound4.currentTime = 0;
        sound5.pause();
        sound5.currentTime = 0;
        setTimeout(() => {
            sound1.play();
            localStorage.setItem("sound","1");
        },200)
    }
    sound2r.onclick = () => {
        sound1.pause();
        sound1.currentTime = 0;
        sound2.pause();
        sound2.currentTime = 0;
        sound3.pause();
        sound3.currentTime = 0;
        sound4.pause();
        sound4.currentTime = 0;
        sound5.pause();
        sound5.currentTime = 0;
        setTimeout(() => {
            sound2.play();
            localStorage.setItem("sound","2");
        },200)
    }
    sound2l.onclick = () => {
        sound1.pause();
        sound1.currentTime = 0;
        sound2.pause();
        sound2.currentTime = 0;
        sound3.pause();
        sound3.currentTime = 0;
        sound4.pause();
        sound4.currentTime = 0;
        sound5.pause();
        sound5.currentTime = 0;
        setTimeout(() => {
            sound2.play();
            localStorage.setItem("sound","2");
        },200)
    }
    sound3r.onclick = () => {
        sound1.pause();
        sound1.currentTime = 0;
        sound2.pause();
        sound2.currentTime = 0;
        sound3.pause();
        sound3.currentTime = 0;
        sound4.pause();
        sound4.currentTime = 0;
        sound5.pause();
        sound5.currentTime = 0;
        setTimeout(() => {
            sound3.play();
            localStorage.setItem("sound","3");
        },200)
    }
    sound3l.onclick = () => {
        sound1.pause();
        sound1.currentTime = 0;
        sound2.pause();
        sound2.currentTime = 0;
        sound3.pause();
        sound3.currentTime = 0;
        sound4.pause();
        sound4.currentTime = 0;
        sound5.pause();
        sound5.currentTime = 0;
        setTimeout(() => {
            sound3.play();
            localStorage.setItem("sound","3");
        },200)
    }
    sound4r.onclick = () => {
        sound1.pause();
        sound1.currentTime = 0;
        sound2.pause();
        sound2.currentTime = 0;
        sound3.pause();
        sound3.currentTime = 0;
        sound4.pause();
        sound4.currentTime = 0;
        sound5.pause();
        sound5.currentTime = 0;
        setTimeout(() => {
            sound4.play();
            localStorage.setItem("sound","4");
        },200)
    }
    sound4l.onclick = () => {
        sound1.pause();
        sound1.currentTime = 0;
        sound2.pause();
        sound2.currentTime = 0;
        sound3.pause();
        sound3.currentTime = 0;
        sound4.pause();
        sound4.currentTime = 0;
        sound5.pause();
        sound5.currentTime = 0;
        setTimeout(() => {
            sound4.play();
            localStorage.setItem("sound","4");
        },200)
    }
    sound5r.onclick = () => {
        sound1.pause();
        sound1.currentTime = 0;
        sound2.pause();
        sound2.currentTime = 0;
        sound3.pause();
        sound3.currentTime = 0;
        sound4.pause();
        sound4.currentTime = 0;
        sound5.pause();
        sound5.currentTime = 0;
        setTimeout(() => {
            sound5.play();
            localStorage.setItem("sound","5");
        },200)
    }
    sound5l.onclick = () => {
        sound1.pause();
        sound1.currentTime = 0;
        sound2.pause();
        sound2.currentTime = 0;
        sound3.pause();
        sound3.currentTime = 0;
        sound4.pause();
        sound4.currentTime = 0;
        sound5.pause();
        sound5.currentTime = 0;
        setTimeout(() => {
            sound5.play();
            localStorage.setItem("sound","5");
        },200)
    }
}
function sounds_ok_click(){
    localStorage.setItem("mode","pomodoroTimer");
    changeSound.style.display = "none";
    sounds.style.color = "#fff";
    sounds.style.backgroundColor = "#0f0";
    info.removeAttribute("disabled");
    backgrounds.removeAttribute("disabled");
    sounds.removeAttribute("disabled");
    studying.removeAttribute("disabled");
    shortBreak.removeAttribute("disabled");
    longBreak.removeAttribute("disabled");
    play.removeAttribute("disabled");
    pause.removeAttribute("disabled");
    reset.removeAttribute("disabled");
    ok.removeAttribute("disabled");
    modes.removeAttribute("disabled");
    sound1.pause();
    sound1.currentTime = 0;
    sound2.pause();
    sound2.currentTime = 0;
    sound3.pause();
    sound3.currentTime = 0;
    sound4.pause();
    sound4.currentTime = 0;
    sound5.pause();
    sound5.currentTime = 0;
}
// Building sections functions:-
function studying_click(){
    localStorage.setItem("minutes","25");
    studying.style.backgroundColor = "lightgreen";
    shortBreak.style.backgroundColor = "#fff";
    longBreak.style.backgroundColor = "#fff";
    minutes.textContent = "25";
    newcurrentmins = undefined;
}
function shortBreak_click(){
    localStorage.setItem("minutes","05");
    studying.style.backgroundColor = "#fff";
    shortBreak.style.backgroundColor = "lightgreen";
    longBreak.style.backgroundColor = "#fff";
    minutes.textContent = "05";
    newcurrentmins = undefined;
}
function longBreak_click(){
    localStorage.setItem("minutes","30");
    studying.style.backgroundColor = "#fff";
    shortBreak.style.backgroundColor = "#fff";
    longBreak.style.backgroundColor = "lightgreen";
    minutes.textContent = "30";
    newcurrentmins = undefined;
}
// Building timer control functions:-
function minutes_click(){
    if(localStorage.getItem("timer") == "stopped" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
        newcurrentmins = prompt("Enter the number of minutes:");
    }
    if(typeof newcurrentmins == "object"){
        newcurrentmins = undefined;
    }
    if(newcurrentmins == ""){
        alert("Wrong input, please try again!");
        newcurrentmins = undefined;
    }
    if(newcurrentmins != null && newcurrentmins != ""){
        newcurrentmins = +newcurrentmins;
        minutes.textContent = newcurrentmins;
    }
    if(minutes.textContent == "NaN" || newcurrentmins == 0){
        alert("Wrong input, please try again!");
        newcurrentmins = undefined;
        minutes.textContent = localStorage.getItem("minutes");
    }
    if((minutes.textContent).includes(".") == true){
        alert("Sorry, decimal numbers are not allowed!");
        newcurrentmins = undefined;
        minutes.textContent = localStorage.getItem("minutes");
    }
    if(newcurrentmins < 10){
        minutes.textContent = "0" + newcurrentmins;
    }
}
function play_timer(){
    play.style.display = "none";
    pause.style.display = "block";
    playTimer.play();
    studying.setAttribute("disabled","");
    shortBreak.setAttribute("disabled","");
    longBreak.setAttribute("disabled","");
    localStorage.setItem("timer","played");
    if(localStorage.getItem("firstTime") == "true"){
        if(typeof newcurrentmins == "undefined"){
            currentmins = Number(localStorage.getItem("minutes"));
        }
        else if(typeof newcurrentmins != "undefined"){
            currentmins = newcurrentmins;
        }
        currentmsecs--;
        currentsecs--;
        currentmins--;
    }
    interval = setInterval(() => {
        currentmsecs--;
        if(currentmsecs < 1){
            currentsecs--;
            currentmsecs = 99;
        }
        if(currentsecs < 0 && currentmins > 0){
            currentmins--;
            currentsecs = 59;
        }
        if(currentmins < 1 && currentsecs <= 5 && currentmsecs > 90){
            playTimer.play();
        }
        milliseconds.textContent = ". " + currentmsecs;
        if(currentmsecs < 10){
        milliseconds.textContent = ". 0" + currentmsecs;
        }
        seconds.textContent = currentsecs;
        if(currentsecs < 10){
            seconds.textContent = "0" + currentsecs;
        }
        minutes.textContent = currentmins;
        if(currentmins < 10){
            minutes.textContent = "0" + currentmins;
        }
        if(currentmins < 1 && currentsecs < 0){
            clearInterval(interval);
            playTimer.pause();
            timer.style.visibility = "hidden";
            tup.style.visibility = "visible";
            play.style.display = "none";
            pause.style.display = "none";
            reset.style.display = "none";
            ok.style.display = "block";
            tup.style.marginBottom = "23px";
            if(localStorage.getItem("mode") == "currentTime"){
                localStorage.setItem("mode","pomodoroTimer");
                title.textContent = "Pomodoro Studying";
                modes.textContent = "Show Current Time";
                currentTimeMode.style.visibility = "hidden";
                pomodoroTimerMode.style.visibility = "visible";
                modes.setAttribute("disabled","");
            }
            info.setAttribute("disabled","");
            backgrounds.setAttribute("disabled","");
            sounds.setAttribute("disabled","");
            localStorage.setItem("timer","timeEnded");
            info.style.removeProperty("transform");
            backgrounds.style.removeProperty("transform");
            sounds.style.removeProperty("transform");
            modes.style.removeProperty("transform");
            modes.setAttribute("disabled","");
            localStorage.setItem("mode","pomodoroTimer");
            uses.style.display = "none";
            info.style.color = "#fff";
            info.style.backgroundColor = "steelblue";
            backgrounds.style.color = "#fff";
            backgrounds.style.backgroundColor = "#f00";
            sounds.style.color = "#fff";
            sounds.style.backgroundColor = "#0f0";
            modes.style.backgroundColor = "#fff";
            modes.style.color = "#0ff";
            ok.removeAttribute("disabled");
            if(localStorage.getItem("sound") == "1"){
                sound1.play();
                sound1.loop = true;
            }
            else if(localStorage.getItem("sound") == "2"){
                sound2.play();
                sound2.loop = true;
            }
            else if(localStorage.getItem("sound") == "3"){
                sound3.play();
                sound3.loop = true;
            }
            else if(localStorage.getItem("sound") == "4"){
                sound4.play();
                sound4.loop = true;
            }
            else if(localStorage.getItem("sound") == "5"){
                sound5.play();
                sound5.loop = true;
            }
        }
    },9)
}
function pause_timer(){
    play.style.display = "block";
    pause.style.display = "none";
    clearInterval(interval);
    localStorage.setItem("firstTime","false");
    localStorage.setItem("timer","paused");
}
function reset_timer(){
    play.style.display = "block";
    pause.style.display = "none";
    clearInterval(interval);
    minutes.textContent = localStorage.getItem("minutes");
    seconds.textContent = "00";
    milliseconds.textContent = ". 00";
    localStorage.setItem("firstTime","true");
    currentmins = Number(localStorage.getItem("minutes"));
    currentsecs = 60;
    currentmsecs = 100;
    newcurrentmins = undefined;
    studying.removeAttribute("disabled");
    shortBreak.removeAttribute("disabled");
    longBreak.removeAttribute("disabled");
    localStorage.setItem("timer","stopped");
}
function ok_click(){
    play.style.display = "block";
    pause.style.display = "none";
    reset.style.display = "block";
    ok.style.display = "none";
    minutes.textContent = localStorage.getItem("minutes");
    seconds.textContent = "00";
    milliseconds.textContent = ". 00";
    currentmins = Number(localStorage.getItem("minutes"));
    currentsecs = 60;
    currentmsecs = 100;
    newcurrentmins = undefined;
    tup.style.removeProperty("margin");
    timer.style.visibility = "visible";
    tup.style.visibility = "hidden";
    studying.removeAttribute("disabled");
    shortBreak.removeAttribute("disabled");
    longBreak.removeAttribute("disabled");
    modes.removeAttribute("disabled");
    info.removeAttribute("disabled");
    backgrounds.removeAttribute("disabled");
    sounds.removeAttribute("disabled");
    localStorage.setItem("timer","stopped");
    modes.removeAttribute("disabled");
    info.removeAttribute("disabled");
    backgrounds.removeAttribute("disabled");
    sounds.removeAttribute("disabled");
    play.removeAttribute("disabled");
    pause.removeAttribute("disabled");
    reset.removeAttribute("disabled");
    sound1.pause();
    sound1.currentTime = 0;
    sound2.pause();
    sound2.currentTime = 0;
    sound3.pause();
    sound3.currentTime = 0;
    sound4.pause();
    sound4.currentTime = 0;
    sound5.pause();
    sound5.currentTime = 0;
}
// Building basic functions:-
function modes_click(){
    if(localStorage.getItem("mode") == "pomodoroTimer"){
        localStorage.setItem("mode","currentTime");
        title.textContent = "Current Time";
        modes.textContent = "Show Pomodoro Timer";
        currentTimeMode.style.visibility = "visible";
        pomodoroTimerMode.style.visibility = "hidden";
        timer.style.visibility = "hidden";
    }
    else if(localStorage.getItem("mode") == "currentTime"){
        localStorage.setItem("mode","pomodoroTimer");
        title.textContent = "Pomodoro Studying";
        modes.textContent = "Show Current Time";
        currentTimeMode.style.visibility = "hidden";
        pomodoroTimerMode.style.visibility = "visible";
        timer.style.visibility = "visible";
    }
}
function buttons_hover(){
    info.onmouseenter = () => {
        if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            info.style.transform = "scale(1.2)";
        }
    }
    info.onmouseleave = () => {
        if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            info.style.removeProperty("transform");
        }
    }
    backgrounds.onmouseenter = () => {
        if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            backgrounds.style.transform = "scale(1.2)";
        }
    }
    backgrounds.onmouseleave = () => {
        if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            backgrounds.style.removeProperty("transform");
        }
    }
    sounds.onmouseenter = () => {
        if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            sounds.style.transform = "scale(1.2)";
        }
    }
    sounds.onmouseleave = () => {
        if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            sounds.style.removeProperty("transform");
        }
    }
    uses_ok.onmouseenter = () => {
        uses_ok.style.transform = "scale(1.15)";
        uses_ok.style.color = "#fff";
        uses_ok.style.backgroundColor = "#f00";
    }
    uses_ok.onmouseleave = () => {
        uses_ok.style.removeProperty("transform");
        uses_ok.style.removeProperty("color");
        uses_ok.style.removeProperty("background");
    }
    backgrounds_ok.onmouseenter = () => {
        backgrounds_ok.style.transform = "scale(1.15)";
        backgrounds_ok.style.color = "#fff";
        backgrounds_ok.style.backgroundColor = "#f00";
    }
    backgrounds_ok.onmouseleave = () => {
        backgrounds_ok.style.removeProperty("transform");
        backgrounds_ok.style.removeProperty("color");
        backgrounds_ok.style.removeProperty("background");
    }
    sounds_ok.onmouseenter = () => {
        sounds_ok.style.transform = "scale(1.15)";
        sounds_ok.style.color = "#fff";
        sounds_ok.style.backgroundColor = "#f00";
    }
    sounds_ok.onmouseleave = () => {
        sounds_ok.style.removeProperty("transform");
        sounds_ok.style.removeProperty("color");
        sounds_ok.style.removeProperty("background");
    }
    play.onmouseenter = () => {
        if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            play.style.transform = "scale(1.2)";
        }
    }
    pause.onmouseenter = () => {
        if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            pause.style.transform = "scale(1.2)";
        }
    }
    reset.onmouseenter = () => {
        if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            reset.style.transform = "scale(1.2)";
        }
    }
    ok.onmouseenter = () => {
        if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            ok.style.transform = "scale(1.2)";
            ok.style.color = "#fff";
            ok.style.backgroundColor = "#f00";
        }
    }
    play.onmouseleave = () => {
        if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            play.style.removeProperty("transform");
        }
    }
    pause.onmouseleave = () => {
        if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            pause.style.removeProperty("transform");
        }
    }
    reset.onmouseleave = () => {
        if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            reset.style.removeProperty("transform");
        }
    }
    ok.onmouseleave = () => {
        if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            ok.style.removeProperty("transform");
            ok.style.removeProperty("color");
            ok.style.removeProperty("background");
        }
    }
    modes.onmouseenter = () => {
        if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            modes.style.transform = "scale(1.2)";
            modes.style.color = "#fff";
            modes.style.backgroundColor = "#0ff";
        }
    }
    modes.onmouseleave = () => {
        if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            modes.style.removeProperty("transform");
            modes.style.removeProperty("color");
            modes.style.removeProperty("background");
        }
    }
}
function keyboard_shortcuts(){
    document.addEventListener("keydown", (ev) => {
        localStorage.setItem("key",ev.key);
        if((ev.key).toLowerCase() === "i" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            info_click();
        }
        if((ev.key).toLowerCase() === "b" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeSound"){
            backgrounds_click();
        }
        if((ev.key).toLowerCase() === "s" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground"){
            sounds_click();
        }
        if(ev.key === "Alt" && localStorage.getItem("timer") == "stopped" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            minutes_click();
        }
        if(ev.key === " "){
            if(localStorage.getItem("timer") == "paused" || localStorage.getItem("timer") == "stopped" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
                play_timer();
            }
            else if(localStorage.getItem("timer") == "played" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
                pause_timer();
            }
        }
        if(ev.key === "Backspace" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            reset_timer();
        }
        if(ev.key === "Enter"){
            if(localStorage.getItem("mode") == "how_to_use"){
                uses_ok_click();
            }
            else if(localStorage.getItem("mode") == "changeBackground"){
                backgrounds_ok_click();
            }
            else if(localStorage.getItem("mode") == "changeSound"){
                sounds_ok_click();
            }
            else if(localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("timer") == "timeEnded" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
                ok_click();
            }
        }
        if(ev.key === "Shift" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            modes_click();
        }
        if(ev.key === "ArrowRight" && localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            if(localStorage.getItem("minutes") == "25"){
                shortBreak_click();
            }
            else if(localStorage.getItem("minutes") == "05"){
                longBreak_click();
            }
        }
        if(ev.key === "ArrowLeft" && localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("timer") != "timeEnded" && localStorage.getItem("mode") != "how_to_use" && localStorage.getItem("mode") != "changeBackground" && localStorage.getItem("mode") != "changeSound"){
            if(localStorage.getItem("minutes") == "30"){
                shortBreak_click();
            }
            else if(localStorage.getItem("minutes") == "05"){
                studying_click();
            }
        }
        if(ev.key === "ArrowRight" && localStorage.getItem("uses") != "undefined"){
            keys_click();
        }
        if(ev.key === "ArrowLeft" && localStorage.getItem("uses") != "undefined"){
            exp_btn_click();
        }
    })
}
// Running basic functions:-
default_settings();
date_and_time();
change_backgrounds();
change_sounds();
buttons_hover();
keyboard_shortcuts();