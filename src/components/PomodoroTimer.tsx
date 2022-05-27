import {
  StateUpdater,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'preact/hooks';
import { formatTimer } from '../utils/TimerUtils';
import { ReplayIcon, ForwardIcon, PlayIcon, StopIcon } from './icons';
import styles from '../styles/pomodoro.module.scss';
import workerString from '../timer.js?raw';
import { PomodoroStatus } from '../types';
import useStore from '../stores';
const workerBlob = new Blob([workerString], { type: 'text/javascript' });
const workerUrl = URL.createObjectURL(workerBlob);
const createWorker = () => new Worker(workerUrl, { type: 'classic' });

type TimerType = {
  buttons: string[];
  active: number;
  interval: number;
  breakInterval: number;
};
interface IToggleableButtons {
  buttons: TimerType;
  activeClass: string;
  setButtons: StateUpdater<TimerType>;
}
const initialButtons: TimerType = {
  buttons: ['Pomodoro', 'Short break', 'Long break'],
  active: 0,
  interval: 0,
  breakInterval: 4,
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
  const [pomodoroStatus, setPomodoroStatus] = useState<PomodoroStatus>(
    PomodoroStatus.Pomodoro
  );
  const zen = useStore((state) => state.zen);
  const setZen = useStore((state) => state.setZen);
  const worker = useMemo(createWorker, [createWorker]);
  const workerRef = useRef<Worker>(worker);

  const finishTimer = () => {
    setTimer({ time: 0, ticking: false });
    setButtons((buttons) => {
      console.log(buttons);
      const interval = (buttons.interval + 1) % buttons.breakInterval;
      if (
        buttons.active === PomodoroStatus.ShortBreak ||
        buttons.active === PomodoroStatus.LongBreak
      ) {
        return {
          ...buttons,
          active: PomodoroStatus.Pomodoro,
          interval,
        };
      } else {
        const statusBreak =
          buttons.interval + 1 === buttons.breakInterval
            ? PomodoroStatus.LongBreak
            : PomodoroStatus.ShortBreak;
        return {
          ...buttons,
          active: statusBreak,
          interval: buttons.interval,
        };
      }
    });
  };
  const finishTimerRef = useRef(finishTimer);

  const setPomodoroStatusCustom = (status: PomodoroStatus) => {
    if (pomodoroStatus === status) return;
    setPomodoroStatus(status);
    switch (status) {
      case PomodoroStatus.Pomodoro:
        workerRef.current.postMessage('stop-timer');
        workerRef.current.postMessage(['set-timer', initialTimer.time]);
        setTimer({ time: initialTimer.time, ticking: false });
        break;
      case PomodoroStatus.ShortBreak:
        workerRef.current.postMessage('stop-timer');
        workerRef.current.postMessage(['set-timer', 5 * 60]);
        setTimer({ time: 5 * 60, ticking: false });
        break;
      case PomodoroStatus.LongBreak:
        workerRef.current.postMessage('stop-timer');
        workerRef.current.postMessage(['set-timer', 15 * 60]);
        setTimer({ time: 15 * 60, ticking: false });
        break;
      default:
        break;
    }
  };

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
      workerRef.current.postMessage(['reset-timer', initialTimer.time]);
      setTimer({ time: initialTimer.time, ticking: true });
    }
  };

  const nextTimer = () => {
    if (timer.ticking) {
      finishTimer();
    }
  };

  useEffect(() => {
    finishTimerRef.current = finishTimer;
    workerRef.current = worker;
    workerRef.current.postMessage(['set-timer', timer.time]);
    workerRef.current.onmessage = function (e) {
      const result = e.data;
      if (result === 'finish-timer') {
        finishTimerRef.current();
      } else if (result[0] === 'tick-timer')
        setTimer({ time: result[1], ticking: true });
    };
    const cleanup = () => {
      worker.terminate();
      setTimer(initialTimer);
    };
    return cleanup;
  }, [worker, finishTimerRef]);

  useEffect(() => {
    document.title = `${formatTimer(timer.time)} - Pomopond!`;
  }, [timer]);

  useEffect(() => {
    setPomodoroStatusCustom(buttons.active);
  }, [buttons]);

  useEffect(() => {
    console.log(zen);
  }, [zen]);

  return (
    <div class={`${styles.pomodoro} ${zen ? styles.zen : ''}`}>
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
      <div class={styles.timerDisplay} onClick={() => setZen(!zen)}>
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
          disabled={!timer.ticking}
        >
          <ReplayIcon />
        </button>
        {!timer.ticking ? (
          <button onClick={startTimer}>
            <PlayIcon />
          </button>
        ) : (
          <button onClick={stopTimer}>
            <StopIcon />
          </button>
        )}
        <button
          onClick={nextTimer}
          class={!timer.ticking ? styles.hidden : ''}
          disabled={!timer.ticking}
        >
          <ForwardIcon />
        </button>
      </div>
    </div>
  );
};
export default PomodoroTimer;
