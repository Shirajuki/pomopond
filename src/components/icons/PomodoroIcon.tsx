import { h } from 'preact';
import { IconType } from '../../types';

const PomodoroIcon = ({ color = '#C4C4C4' }: IconType) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.5" cy="12.5" r="12.5" fill={color} />
      <path
        d="M18.5 9L12.5 17L8 13.5"
        stroke="white"
        stroke-width="2"
        style={{ fill: 'none' }}
      />
    </svg>
  );
};

export default PomodoroIcon;
