let seconds = 0
let minutes = 0
let timeInterval;

function startTimer()
{
    const horas = parseInt(document.getElementById("horas").value) || 0;
    const minutos = parseInt(document.getElementById("minutos").value) || 0;
    const segundos = parseInt(document.getElementById("segundos").value) 
 || 0;

    tempoRestante = horas * 3600 + minutos * 60 +segundos;

    timeInterval = setInterval(() => {
        tempoRestante--;

        if(tempoRestante < 0){
            clearInterval(timeInterval);
            tempoRestante = 0;
        }
        
    const minutosRestantes = Math.floor(tempoRestante / 60);
    const segundosRestantes = tempoRestante % 60;
    const formattedTime = `${pad(minutosRestantes)}:${pad(segundosRestantes)}`;
    document.getElementById('timer').textContent = formattedTime;
    }, 1000);
}

function stopTimer(){
    clearInterval(timeInterval);
    timeInterval = null;
}

function resetTimer(){
    stopTimer();
    seconds = 0;
    minutes = 0;
    document.getElementById('timer').textContent = '00:00';
}

function pad(number){
    return (number <10 ? '0' : '') + number;
}

// Obtenha os botões do HTML
const startButton = document.getElementById('startButton'); // Substitua 'startButton' pelo ID do seu botão de iniciar
const stopButton = document.getElementById('stopButton');  // Substitua 'stopButton' pelo ID do seu botão de parar
const resetButton = document.getElementById('resetButton');

// Adicione ouvintes de eventos aos botões
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetButton);