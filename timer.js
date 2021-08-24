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

    start = (totalDuration) => {
        if( this.onStart ){
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 20);
        // by assigning the variable to this.timer, we can refer to this variable in other functions
        // running tick() every <= 50ms so animation runs smoother
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
            this.timeRemaining = timeRemaining - .02;
            // subtracting <= .05 to match up with the 50ms count of running tick above in line 22
            if( this.onTick ){
                this.onTick(this.timeRemaining);
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
       this.durationInput.value = time.toFixed(2)
    }
}