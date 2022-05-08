const milliseconds = document.getElementById('milliseconds');
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');

let msCounter = 0;
let secCounter = 0;
let minCounter = 0;
let loopId = 0;

function appendMs() {
    msCounter += 2
    milliseconds.innerHTML = msCounter < 10 ? '0' + msCounter : msCounter    
}

function appendSec() {
    secCounter++
    seconds.innerHTML = secCounter < 10 ? '0' + secCounter : secCounter
}

function appendMin() {
    minCounter++
    minutes.innerHTML = minCounter < 10 ? '0' + minCounter : minCounter
}

function startLoop() {
    loopId = setInterval(() => {

        if (msCounter == 98) {

            if (secCounter == 59) {
                appendMin()
                secCounter = -1
                return
            }
            appendSec()
            msCounter = 0;
            return
        }
        appendMs();
    }, 15)
}

function stopLoop() {
    clearInterval(loopId);
}

function resetLoop() {
    stopLoop()
    msCounter = 0
    secCounter = 0
    minCounter = 0
    milliseconds.innerHTML = '00'
    seconds.innerHTML = '00'
    minutes.innerHTML = '00'
}