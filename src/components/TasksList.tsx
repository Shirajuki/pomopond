import { h } from 'preact';
import { useState } from 'preact/hooks';
import styles from '../styles/taskslist.module.scss';
import { ProfileIcon } from './icons';

const TasksList = () => {
  return (
    <div class={styles.tasks}>
      <div class={styles.taskTitle}>
        <p>Tasks</p>
        <div class={styles.buttons}>
          <button>
            <ProfileIcon />
          </button>
        </div>
      </div>
      <div class={styles.taskWrapper}>
        <div></div>
        <button>Add task</button>
      </div>
    </div>
  );
};
export default TasksList;
