class Timer {
    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);

    }

    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 1000);
        // by assigning the variable to this.timer, we can refer to this variable in other functions
        this.startDeactivate();
    }

    pause = () => {
        clearInterval(this.interval);
        this.startActivate();
    }

    tick = () => {
        const timeRemaining = this.timeRemaining;
            if( this.timeRemaining <= 0 ){
            this.pause();
         } else {
            this.timeRemaining = timeRemaining - 1;
        }
    }

    startActivate = () => {
        this.startButton.disabled = false;
        console.log('start activated')
    }

    startDeactivate = () => {
        this.startButton.disabled = true;
        console.log('start disabled')
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value)
    }

    set timeRemaining(time){
       this.durationInput.value = time
    }
}

const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const durationInput = document.querySelector('#duration')

const timer = new Timer(durationInput, startButton, pauseButton)