class Timer {
    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);

    }

    durationInput = () => {

    }

    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 1000);
        // by assigning the variable to this.timer, we can refer to this variable in other functions
    }

    tick = () => {
        console.log('tick')
    }

    pause = () => {
        clearInterval(this.interval);
    }
}

const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const durationInput = document.querySelector('#duration')

const timer = new Timer(durationInput, startButton, pauseButton)