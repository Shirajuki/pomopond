import { h } from 'preact';
import { IconType } from '../../types';

const AddIcon = ({ color = '#00CA8E' }: IconType) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 7.5C-1.46764e-08 6.51509 0.193993 5.53982 0.570903 4.62987C0.947814 3.71993 1.50026 2.89314 2.1967 2.1967C2.89314 1.50026 3.71993 0.947814 4.62987 0.570904C5.53982 0.193993 6.51509 0 7.5 0C8.48491 0 9.46018 0.193993 10.3701 0.570904C11.2801 0.947814 12.1069 1.50026 12.8033 2.1967C13.4997 2.89314 14.0522 3.71993 14.4291 4.62987C14.806 5.53982 15 6.51509 15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15C5.51088 15 3.60322 14.2098 2.1967 12.8033C0.790176 11.3968 2.96403e-08 9.48912 0 7.5V7.5ZM7.5 3.75C7.33424 3.75 7.17527 3.81585 7.05806 3.93306C6.94085 4.05027 6.875 4.20924 6.875 4.375V6.875H4.375C4.20924 6.875 4.05027 6.94085 3.93306 7.05806C3.81585 7.17527 3.75 7.33424 3.75 7.5C3.75 7.66576 3.81585 7.82473 3.93306 7.94194C4.05027 8.05915 4.20924 8.125 4.375 8.125H6.875V10.625C6.875 10.7908 6.94085 10.9497 7.05806 11.0669C7.17527 11.1842 7.33424 11.25 7.5 11.25C7.66576 11.25 7.82473 11.1842 7.94194 11.0669C8.05915 10.9497 8.125 10.7908 8.125 10.625V8.125H10.625C10.7908 8.125 10.9497 8.05915 11.0669 7.94194C11.1842 7.82473 11.25 7.66576 11.25 7.5C11.25 7.33424 11.1842 7.17527 11.0669 7.05806C10.9497 6.94085 10.7908 6.875 10.625 6.875H8.125V4.375C8.125 4.20924 8.05915 4.05027 7.94194 3.93306C7.82473 3.81585 7.66576 3.75 7.5 3.75Z"
        fill={color}
      />
    </svg>
  );
};

export default AddIcon;
