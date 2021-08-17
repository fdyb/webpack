import {Duration} from "./luxon.js";
import {updateTimer} from "./utils.js";

let timerTick = null;

export function startTimer(timerObj) {

    let timerData = Duration.fromObject(timerObj);
    updateTimer(timerData);
    let dif = Duration.fromObject({hours: 0, seconds: 1, minutes: 0});

    timerTick = setInterval(() => {
        timerData = timerData.minus(dif);
        updateTimer(timerData);
        if (timerData.seconds === 0) {
            clearInterval(timerTick);
            let audioElem = document.getElementById('doneSound');
            audioElem.play();
            alert('Timer stopped!');
        }
        }  ,1000)
}

export function stopTimer() {
    clearInterval(timerTick);
}
