import { useState } from 'preact/hooks';
import styles from '../styles/popup.module.scss';

interface IProfileModal {
  closePopup: () => void;
}

const ProfileModal = ({ closePopup }: IProfileModal) => {
  return (
    <div class={styles.modal}>
      <div class={styles.modalTitle}>
        <h2>Profile</h2>
        <button class={styles.profileClose} onClick={closePopup}>
          X
        </button>
      </div>
      <div class={styles.profileInfo}>
        <div class={styles.profileImage}></div>
        <p>profile name</p>
      </div>
      <div class={styles.profileStats}>
        <p>❤ total droplets:</p>
        <p>13</p>
        <p>❤ fishes:</p>
        <p>13</p>
        <p>❤ templates:</p>
        <p>1</p>
        <p>❤ tags:</p>
        <p>4</p>
      </div>
    </div>
  );
};
export default ProfileModal;
