let interval = setInterval(timer, 1000);
const sec = document.querySelector('h1#counter');
const pause = document.querySelector('button#pause');
const likeBtn = document.querySelector('button#heart');
const input = document.getElementById('comment-input');

function timer() {
    sec.innerText++
}

function increment() {
    sec.innerText++
}

function decrement() {
    sec.innerText--
}

function pauseEvent() {
    if (pause.innerText == "pause") {
        clearInterval(interval);
        pause.innerText = "resume"
        document.getElementById('minus').disabled = true;
        document.getElementById('plus').disabled = true;
        document.getElementById('heart').disabled = true;
        document.getElementById('submit').disabled = true;
    } else {
        interval = setInterval(increment, 1000);
        pause.innerText = "pause"
        document.getElementById('minus').disabled = false;
        document.getElementById('plus').disabled = false;
        document.getElementById('heart').disabled = false;
        document.getElementById('submit').disabled = false;
    }
}

likeBtn.addEventListener('click', function() {
    const newLi = document.createElement('li');
    newLi.innerText = `${sec.innerText} got liked.`
    document.querySelector('.likes').appendChild(newLi);
})

input.addEventListener('change', function() {
    const newLi = document.createElement('li');
    newLi.innerText = this.value
    document.querySelector('.comments').appendChild(newLi);
})