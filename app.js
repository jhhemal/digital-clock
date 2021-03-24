const clock = document.getElementById('clock');

setInterval(clockTime,1000);

function clockTime() {
    const time = new Date().toLocaleTimeString();
    clock.textContent = time;
}
