import { h } from 'preact';
import {
  StateUpdater,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'preact/hooks';
import { formatTimer } from '../utils/TimerUtils';
import styles from '../styles/pomodoro.module.scss';
import workerString from '../timer.js?raw';
const workerBlob = new Blob([workerString], { type: 'text/javascript' });
const workerUrl = URL.createObjectURL(workerBlob);
const createWorker = () => new Worker(workerUrl, { type: 'classic' });

type TimerType = {
  buttons: string[];
  active: number;
};
interface IToggleableButtons {
  buttons: TimerType;
  activeClass: string;
  setButtons: StateUpdater<TimerType>;
}
const initialButtons: TimerType = {
  buttons: ['Pomodoro', 'Short break', 'Long break'],
  active: 0,
};

const ToggleableButtons = ({
  buttons,
  activeClass,
  setButtons,
}: IToggleableButtons) => {
  return (
    <>
      {buttons.buttons.map((button, index) => {
        return (
          <button
            class={buttons.active == index ? activeClass : ''}
            onClick={() => setButtons({ ...buttons, active: index })}
          >
            {button}
          </button>
        );
      })}
    </>
  );
};

type Timer = {
  time: number;
  ticking: boolean;
};
const initialTimer = {
  time: 25 * 60,
  ticking: false,
};
const PomodoroTimer = () => {
  const [buttons, setButtons] = useState<TimerType>(initialButtons);
  const [timer, setTimer] = useState<Timer>(initialTimer);
  const worker = useMemo(createWorker, [createWorker]);
  const workerRef = useRef<Worker>(worker);

  const startTimer = () => {
    if (!timer.ticking) {
      workerRef.current.postMessage('start-timer');
      setTimer({ ...timer, ticking: true });
    }
  };

  const stopTimer = () => {
    if (timer.ticking) {
      workerRef.current.postMessage('stop-timer');
      setTimer({ ...timer, ticking: false });
    }
  };

  const resetTimer = () => {
    if (timer.ticking) {
      workerRef.current.postMessage('reset-timer');
      setTimer({ time: initialTimer.time, ticking: true });
    }
  };

  useEffect(() => {
    workerRef.current = worker;
    worker.postMessage(['set-timer', timer.time]);
    worker.onmessage = function (e) {
      const result = e.data;
      console.log('got', result, timer);
      if (result === 'finish-timer') {
        setTimer({ time: 0, ticking: false });
      } else if (result[0] === 'tick-timer')
        setTimer({ time: result[1], ticking: true });
    };
    const cleanup = () => {
      worker.terminate();
      setTimer(initialTimer);
    };
    return cleanup;
  }, [worker]);

  useEffect(() => {
    console.log(timer);
  }, [timer]);

  return (
    <div class={styles.pomodoro}>
      <div class={styles.timerType}>
        <ToggleableButtons
          buttons={buttons}
          setButtons={setButtons}
          activeClass={styles.active}
        />
      </div>
      <svg
        class={styles.topConnect}
        width="122"
        height="17"
        viewBox="0 0 122 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 17C42.5 8.28004 35.5 0 0 0H122C82 0 78 8.28004 92 17H30Z"
          fill="#C3EFBE"
        />
      </svg>
      <div class={styles.timerDisplay}>
        <p>{formatTimer(timer.time)}</p>
        <div></div>
      </div>
      <svg
        class={styles.bottomConnect}
        width="138"
        height="49"
        viewBox="0 0 138 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5 49C50 34.1889 35.5 19.5889 0 0H138C101.5 19.5889 86 34.1889 100 49H37.5Z"
          fill="#C3EFBE"
        />
      </svg>

      <div class={styles.timerControls}>
        <button
          onClick={resetTimer}
          class={!timer.ticking ? styles.hidden : ''}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V1L7 6L12 11V7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13H4C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5Z"
              fill="white"
            />
          </svg>
        </button>
        {!timer.ticking ? (
          <button onClick={startTimer}>
            <svg
              width="24"
              height="24"
              viewBox="-2 0 14 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0V20.4167L16.0417 10.2083L0 0Z" fill="white"></path>
            </svg>
          </button>
        ) : (
          <button
            onClick={stopTimer}
            class={!timer.ticking ? styles.hidden : ''}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 20.7084H6.58333V0.291687H0.75V20.7084ZM12.4167 0.291687V20.7084H18.25V0.291687H12.4167Z"
                fill="white"
              />
            </svg>
          </button>
        )}
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 18L14.5 12L6 6V18ZM16 6V18H18V6H16Z" fill="white" />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default PomodoroTimer;
