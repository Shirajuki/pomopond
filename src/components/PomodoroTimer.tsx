import { h } from 'preact';
import { useState } from 'preact/hooks';
import styles from '../styles/pomodoro.module.scss';

const PomodoroTimer = () => {
  return (
    <div class={styles.pomodoro}>
      <div class={styles.timerType}>
        <button class={styles.active}>Pomodoro</button>
        <button>Short break</button>
        <button>Long break</button>
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
        <p>25:00</p>
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
        <button>
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
        <button>
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
