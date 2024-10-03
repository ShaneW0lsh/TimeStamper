let startTime, endTime, running, duration = 0;

function startTimer() {
  if (running) return;
  running = true;
  startTime = performance.now();
}


function stopTimer() {
  endTime = performance.now();
  duration += (endTime - startTime) / 1000;
}


function updateDisplay(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  const milliseconds = Math.floor((time % 1) * 1000);

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
  document.getElementById('timer').textContent = formattedTime;
}

document.getElementById('start-button').addEventListener('click', startTimer);
document.getElementById('stop-button').addEventListener('click', stopTimer);

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

