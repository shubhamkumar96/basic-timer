const durationInput = document.querySelector('#duration');
const start_pauseButton = document.querySelector('#start_pause');
const circle = document.querySelector('circle');
const button = start_pauseButton.querySelector('i');

durationInput.addEventListener('change', function(){
    timer.timerSetAt = durationInput.value;
});

// console.log(start_pauseButton,button);

const perimeter = 2 * Math.PI * circle.getAttribute('r');
circle.setAttribute('stroke-dasharray', perimeter);

let duration = 0;
const timer = new Timer(durationInput, start_pauseButton, {
    onStart(totalDuration) {
        // document.body.setAttribute("style", "background-color: red;");
        console.log("Timer Started");
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining / duration - perimeter);
    },
    onComplete() {
        if(button.classList.contains('fa-pause')){
            button.classList.remove('fa-pause');
            button.classList.add('fa-play');
        }
        console.log("Timer is completed");
        // document.body.setAttribute("style", "background-color: green;");
    }
});
