import styles from '../styles/popup.module.scss';

interface IPopup {
  children: Element | any;
  isFullscreen?: boolean;
  sticky?: boolean;
  closePopup?: () => void;
}

const Popup = ({
  children,
  isFullscreen = false,
  sticky = false,
  closePopup,
}: IPopup) => {
  return (
    <>
      <div
        class={`${styles.popupWrapper} ${
          isFullscreen ? styles.fullscreen : ''
        }`}
      >
        {closePopup && sticky && (
          <div class={styles.stickyCover} onClick={closePopup}></div>
        )}
        {closePopup && !sticky && (
          <button class={styles.closePopup} onClick={closePopup}>
            X
          </button>
        )}
        {children}
      </div>
    </>
  );
};
export default Popup;
