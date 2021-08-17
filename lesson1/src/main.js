import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError, showPage } from "./utils.js"; // 2
import {stopTimer, startTimer} from "./timer.js"; // 2

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);
document.querySelectorAll('.cmdBtn').forEach(elem => elem.addEventListener('click',showPage))

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value;
    secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}

function handleTimerSetFormSubmit(event) {
    event.preventDefault();

    startTimer({
        hours: isNaN(parseInt(timerSetForm.timerHours.value))? 0: parseInt(timerSetForm.timerHours.value),
        minutes: isNaN(parseInt(timerSetForm.timerMinutes.value))? 0: parseInt(timerSetForm.timerMinutes.value),
        seconds: isNaN(parseInt(timerSetForm.timerSeconds.value))? 0: parseInt(timerSetForm.timerSeconds.value)
    });

    document.getElementById("stopBtn").hidden = false;
}

const timerSetForm = document.getElementById("timerSetForm");
timerSetForm.addEventListener("submit", handleTimerSetFormSubmit);

document.getElementById("stopBtn").addEventListener("click", stopTimer);



