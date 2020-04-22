class Timer {
    constructor(durationInput, start_pauseButton, callbacks){
        this.durationInput = durationInput;
        this.start_pauseButton = start_pauseButton;

        this.timerSetAt = this.durationInput.value;

        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;       
        }
        
        this.start_pauseButton.addEventListener('click', this.start);
    }

    toggle = () => {
        if(button.classList.contains('fa-pause')){
            button.classList.remove('fa-pause');
            button.classList.add('fa-play');
        } else if (button.classList.contains('fa-play')){
            button.classList.remove('fa-play');
            button.classList.add('fa-pause');
        }
    }

    start = () => {
        if(durationInput.value > 0.00){
            if(button.classList.contains('fa-pause')){
                this.toggle();
                clearInterval(this.interval);
            } else if (button.classList.contains('fa-play')){
                this.toggle();
                clearInterval(this.interval);
                if(this.onStart) {
                    // console.log(this.timeRemaining);
                    this.onStart(this.timerSetAt);
                }
                this.tick();
                this.interval = setInterval(this.tick, 100);
            }
        } else {
            alert("Please Enter Valid Duration");
        }
    }

    tick = () => {
        if(this.timeRemaining <= 0){
            clearInterval(this.interval);
            if(this.onComplete){
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.1;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }     
        }         
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);
    }
}