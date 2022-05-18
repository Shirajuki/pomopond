import { h } from 'preact';
import { useState } from 'preact/hooks';
import { HeaderNavigator } from '../components';
import styles from '../styles/pomodoro.module.scss';

const PomodoroScreen = () => {
  const title = 'Pomopond';
  const droplets = 420;
  return (
    <>
      <div class={`screen ${styles.pomodoro}`}>
        <HeaderNavigator title={title} droplets={droplets} />
        <div class={styles.timerType}>
          <button>Pomodoro</button>
          <button>Short break</button>
          <button>Long break</button>
        </div>
        <div class={styles.timerDisplay}>
          <p>25:00</p>
          <div></div>
        </div>
        <div class={styles.timerControls}>
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
          <button>
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 13V33.4167L28.0417 23.2083L12 13Z" fill="white" />
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
              <path
                d="M12 5V1L7 6L12 11V7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13H4C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
export default PomodoroScreen;
