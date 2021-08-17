export const formatError = text => `
<span style="color: red;">
    ${text}
</span>
`;

export const showPage = (event) => {
    document.querySelectorAll('.page').forEach(elem => {
        if (!elem.classList.contains('hidden')) {
            elem.classList.add('hidden')
        }
    })
    document.getElementById(event.target.id.slice(0,-3)).classList.remove('hidden')
}

export const updateTimer = (timerData) => {
    document.getElementById('timer__result').innerText = `Осталось ${timerData.hours} час. ${timerData.minutes} мин. ${timerData.seconds} сек.`;
}