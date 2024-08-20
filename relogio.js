const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;

    if(min < 10) min = '0' + min;

    if(seg < 10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})

const nyTime = document.getElementById('ny-time');
const londonTime = document.getElementById('london-time');
const tokyoTime = document.getElementById('tokyo-time');

const relogioGlobal = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(seg < 10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
    
    nyTime.textContent = dateToday.toLocaleString("en-US", {timeZone: "America/New_York", hour12: false ,hour: '2-digit', minute: '2-digit', second: '2-digit'});
    londonTime.textContent = dateToday.toLocaleString("en-GB", {timeZone: "Europe/London", hour: '2-digit', minute: '2-digit', second: '2-digit'});
    tokyoTime.textContent = dateToday.toLocaleString("ja-JP", {timeZone: "Asia/Tokyo", hour: '2-digit', minute: '2-digit', second: '2-digit'});
});