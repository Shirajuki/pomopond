class Timer {
  constructor(secs) {
    this.initTime = secs;
    this.time = this.initTime;
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

  if (result === 'stop-timer' || result === 'reset-timer') {
    if (timerInt) clearInterval(timerInt);
  }
  if (result === 'reset-timer') {
    timer.set(timer.initTime);
  }
  if (result === 'start-timer' || result === 'reset-timer') {
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
  if (result[0] === 'set-timer') {
    timer.set(+result[1]);
  }
});
