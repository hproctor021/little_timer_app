const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const durationInput = document.querySelector('#duration')

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(){
        console.log('onStart hit')
    },
    onTick(){
        console.log('Timer ticked')
    },
    onComplete(){
        console.log('Timer is completed')
    }
});