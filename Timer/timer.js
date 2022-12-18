//Timer class
// Callbacks are optional so an if statement was grouped in an if statement
class Timer {
    constructor(durationInput, startButton, pauseButton, callBacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        // Callback reference is at Index.js file
        
        if(callBacks){
            this.onStart = callBacks.onStart;
            this.onTick = callBacks.onTick;
            this.onComplete = callBacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
       
    };

    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);

        }
        this.tick();
        this.interval = setInterval(this.tick, 20);
       

    };

    pause =() => {
        //claearInterval function is to stop the count down activity
        clearInterval(this.interval);
    };

    tick = () => {
        if(this.timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }

        }else{
            this.timeRemaining = this.timeRemaining - 0.02;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }

        }

       
    };

    get timeRemaining(){
        return parseFloat(this.durationInput.value)
    }

    set timeRemaining(time){

        this.durationInput.value = time.toFixed(2);
    }
};