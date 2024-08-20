let seconds = 0
let minutes = 0
let timeInterval;

function startTimer()
{
    timeInterval = setInterval(() => {
     seconds++;
     if(seconds === 60){
     minutes++
     seconds = 0
    }
    
    const formattedTime
    = `${pad(minutes)}:${pad(seconds)}`;
    document.getElementById('timer').textContent = formattedTime;
    }, 1000);
    }
    
    function stopTimer(){
     clearInterval(timeInterval);
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
    const stopButton = document.getElementById('stopButton'); // Substitua 'stopButton' pelo ID do seu botão de parar
    const resetButton = document.getElementById('resetButton');
    
    // Adicione ouvintes de eventos aos botões
    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetButton);