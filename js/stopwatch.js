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

  // const milliseconds = Math.floor((time % 1) * 100);
  // document.getElementById('timerDisplay').textContent =
  //   `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;

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

document.getElementById('start-button').addEventListener('click', function () {
  startTimer();
  this.disabled = true;
  document.getElementById('stop-button').disabled = false;
  // document.getElementById('resetBtn').disabled = true;
  timerInterval = setInterval(function () {
    updateDisplay(duration + (performance.now() - startTime) / 1000);
  }, 10);
});

document.getElementById('stop-button').addEventListener('click', function () {
  stopTimer();
  this.disabled = true;
  document.getElementById('start-button').disabled = false;
  // document.getElementById('resetBtn').disabled = false;
  clearInterval(timerInterval);
});

document.getElementById('timerContainer').addEventListener('click', function () {
  resetTimer();
})

// document.addEventListener('keydown', function (event) {
//   switch (event.key) {
//     case 'a':
//       startTimer();
//       break;
//     case 's':
//       stopTimer();
//       break;
//     case 'Backspace':
//       resetTimer();
//       break;
//     case 'Enter':
//       if (event.shiftKey) {
//         lapClear();
//       } else {
//         lap();
//       }
//       break;
//     default:
//       break;
//   }
// });
// document.getElementById('resetButton').addEventListener('click', resetTimer);
// document.getElementById('lapButton').addEventListener('click', lap);
// document.getElementById('lapClearButton').addEventListener('click', lapClear);

//
// function lap() {
//   // Create a new lap entry and append it to a list or display it in another way
//   const lapTime = `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(milliseconds, 3)}`;
//   const lapList = document.getElementById('lapList');
//   const lapEntry = document.createElement('li');
//   lapEntry.textContent = lapTime;
//   lapList.appendChild(lapEntry);
// }
//
// function lapClear() {
//   const lapList = document.getElementById('lapList');
//   lapList.innerHTML = ''; // Clears the content of the lapList
// }

// function updateDisplay() {
//   document.getElementById('timerDisplay').innerText = `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(milliseconds)}`;
// }

