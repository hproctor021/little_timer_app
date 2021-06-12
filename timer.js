class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if( callbacks ){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);

    }

    start = () => {
        if( this.onStart ){
            this.onStart();
        }
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
            if( this.onComplete ){
                this.onComplete();
            }
         } else {
            this.timeRemaining = timeRemaining - 1;
            if( this.onTick ){
                this.onTick();
            }
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