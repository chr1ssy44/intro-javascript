let milliseconds = 0
let seconds = 0
let minutes = 0

let digits = document.getElementById('digits')


let start = document.getElementById('start-button')

let interval;

function startButton () {

    startButton.disabled = true

    interval = setInterval(function () {
        milliseconds = milliseconds + 10
    

    if (milliseconds >= 1000) {
        seconds = seconds + 1
        milliseconds = 0
    }
    if (seconds >= 60){
        minutes += 1
        seconds = 0
    }

digits.innerHTML = minutes + ':' + String(seconds).padStart(2,'0') + ':' + milliseconds /10     
    },    10)
}

function stopButton () {
    clearInterval(interval)
}
   

function resetButton () {
    clearInterval(interval)
    milliseconds = 0
    seconds = 0
    minutes = 0
}

function lapButton () {
    const myList = document.getElementById('myList')

    let newListItem = document.createElement('li')
    newListItem.textContent = minutes + ':' + String(seconds).padStart(2,'0') + ':' + milliseconds /10     

    myList.appendChild(newListItem)

}




