let startTime, endTime, running, duration = 0;
let timerInterval;

function startTimer() {
  if (running) return;
  running = true;
  disableTrashAnimation();
  startTime = performance.now();
}


function stopTimer() {
  running = false;
  endTime = performance.now();
  duration += (endTime - startTime) / 1000;
  enableTrashAnimation();
}

function resetTimer() {
  if (running) return;
  startTime = null;
  endTime = null;
  running = false;
  duration = 0;
  updateDisplay(0);
  document.getElementById('start-button').disabled = false;
  document.getElementById('stop-button').disabled = true;
  disableTrashAnimation();
}


function updateDisplay(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  document.getElementById('timerDisplay').textContent =
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

window.addEventListener('load', function() {
  disableTrashAnimation();
})

function disableTrashAnimation() {
  const stopwatchContainer = document.getElementById('timerContainer');
  stopwatchContainer.classList.remove('stopwatch-container');
}

function enableTrashAnimation() {
  const stopwatchContainer = document.getElementById('timerContainer');
  stopwatchContainer.classList.add('stopwatch-container');
}

function saveTimeStamp() {
  console.log(document.getElementById('timerDisplay').textContent);

  const newItem = document.createElement('li');
  newItem.classList.add('list-group-item', 'list-group-item-secondary', 'text-center');
  newItem.innerText = document.getElementById('timerDisplay').textContent;

  document.getElementById('timestamp-list').appendChild(newItem);
}

document.getElementById('start-button').addEventListener('click', function () {
  startTimer();
  this.disabled = true;
  document.getElementById('stop-button').disabled = false;
  timerInterval = setInterval(function () {
    updateDisplay(duration + (performance.now() - startTime) / 1000);
  }, 10);
});

document.getElementById('stop-button').addEventListener('click', function () {
  stopTimer();
  this.disabled = true;
  document.getElementById('start-button').disabled = false;
  clearInterval(timerInterval);
});

document.getElementById('timerContainer').addEventListener('click', function () {
  resetTimer();
})

document.addEventListener('keydown', function (event) {
  switch (event.code) {
    case 'Space':
      saveTimeStamp();
      break;
  }
});