class Timer {
  constructor(secs) {
    this.time = secs;
  }
  set(time) {
    this.time = time;
  }
  tick() {
    this.time--;
  }
}
const timer = new Timer(25 * 60);
let timerInt;

self.addEventListener('message', (e) => {
  const result = e.data;
  //console.log('Worker: Message received from main script::', result);

  if (result === 'stop-timer' || result[0] === 'reset-timer') {
    if (timerInt) clearInterval(timerInt);
  }
  if (result === 'start-timer' || result[0] === 'reset-timer') {
    timerInt = setInterval(() => {
      if (timer.time > 0) {
        timer.tick();
        postMessage(['tick-timer', timer.time]);
      } else {
        if (timerInt) clearInterval(timerInt);
        postMessage('finish-timer');
      }
    }, 1000);
  }
  if (result[0] === 'set-timer' || result[0] === 'reset-timer') {
    timer.set(+result[1]);
  }
});
