import { h } from 'preact';
import { IconType } from '../../types';

const CalendarIcon = ({ color = '#C4C4C4' }: IconType) => {
  return (
    <svg
      width="25"
      height="19"
      viewBox="0 0 25 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="1" width="25" height="18" rx="3" fill={color} />
      <path d="M7 0V4.5" stroke="#707070" />
      <path d="M18 0V4.5" stroke="#707070" />
      <path d="M4 8H21" stroke="white" />
    </svg>
  );
};

export default CalendarIcon;
