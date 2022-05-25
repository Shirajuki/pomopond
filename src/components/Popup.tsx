import { useState } from 'preact/hooks';
import styles from '../styles/popup.module.scss';
import { PopupEnum } from '../types';

interface IPopup {
  children: Element | any;
  isFullscreen?: boolean;
  closePopup?: () => void;
}

const Popup = ({
  children,
  isFullscreen = false,
  closePopup = undefined,
}: IPopup) => {
  return (
    <>
      <div
        class={`${styles.popupWrapper} ${
          isFullscreen ? styles.fullscreen : ''
        }`}
      >
        {closePopup && <button onClick={closePopup}>X</button>}
        {children}
      </div>
    </>
  );
};
export default Popup;
