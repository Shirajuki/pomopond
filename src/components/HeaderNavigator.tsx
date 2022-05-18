import { h } from 'preact';
import { useState } from 'preact/hooks';

interface IHeaderNavigator {
  title: string;
  droplets: number;
}
interface IHeaderTitleIcon {
  title: string;
}

const HeaderTitleIcon = ({ title }: IHeaderTitleIcon) => {
  switch (title) {
    case 'Pomopond':
      return (
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8.5" cy="8.5" r="8.5" fill="#051811" />
          <path
            d="M12.14 6L8.06 11.44L5 9.06"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      );
    default:
      return <></>;
  }
};

const HeaderNavigator = ({ title, droplets }: IHeaderNavigator) => {
  return (
    <>
      <div class="headerNavigator">
        <div class="headerTitle">
          <HeaderTitleIcon title={title} />
          <p>{title}</p>
        </div>
        <div class="headerButtons">
          <button>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 16C9.5913 16 11.1174 15.3679 12.2426 14.2426C13.3679 13.1174 14 11.5913 14 10C14 8.345 12.878 7.096 11.568 5.638C10.254 4.176 8.75 2.503 8 0C8 0 2 5.686 2 10C2 11.5913 2.63214 13.1174 3.75736 14.2426C4.88258 15.3679 6.4087 16 8 16ZM6.646 4.646L7.354 5.354C7.064 5.644 6.226 6.665 5.447 8.224L4.553 7.776C5.373 6.135 6.27 5.023 6.646 4.646Z"
                fill="white"
              />
            </svg>
            <span>{droplets}</span>
          </button>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V4.16667C17.5 3.72464 17.3244 3.30072 17.0118 2.98816C16.6993 2.67559 16.2754 2.5 15.8333 2.5ZM15.8333 15.8333H4.16667V4.16667H15.8333V15.8333ZM7.5 14.1667H5.83333V10H7.5V14.1667ZM10.8333 14.1667H9.16667V5.83333H10.8333V14.1667ZM14.1667 14.1667H12.5V8.33333H14.1667V14.1667Z"
                fill="white"
              />
            </svg>
          </button>
          <button>
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0C3.58065 0 0 3.58065 0 8C0 12.4194 3.58065 16 8 16C12.4194 16 16 12.4194 16 8C16 3.58065 12.4194 0 8 0ZM8 3.09677C9.56774 3.09677 10.8387 4.36774 10.8387 5.93548C10.8387 7.50323 9.56774 8.77419 8 8.77419C6.43226 8.77419 5.16129 7.50323 5.16129 5.93548C5.16129 4.36774 6.43226 3.09677 8 3.09677ZM8 14.1935C6.10645 14.1935 4.40968 13.3355 3.27419 11.9935C3.88065 10.8516 5.06774 10.0645 6.45161 10.0645C6.52903 10.0645 6.60645 10.0774 6.68064 10.1C7.1 10.2355 7.53871 10.3226 8 10.3226C8.46129 10.3226 8.90322 10.2355 9.31935 10.1C9.39355 10.0774 9.47097 10.0645 9.54839 10.0645C10.9323 10.0645 12.1194 10.8516 12.7258 11.9935C11.5903 13.3355 9.89355 14.1935 8 14.1935Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
export default HeaderNavigator;
