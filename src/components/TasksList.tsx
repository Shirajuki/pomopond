import { h } from 'preact';
import { useState } from 'preact/hooks';
import styles from '../styles/taskslist.module.scss';
import { AddIcon, OptionsIcon } from './icons';

const TasksList = () => {
  return (
    <div class={styles.tasks}>
      <div class={styles.taskTitle}>
        <p>Tasks</p>
        <div class={styles.buttons}>
          <button>
            <OptionsIcon />
          </button>
        </div>
      </div>
      <div class={styles.taskWrapper}>
        <div></div>
        <button>
          <AddIcon />
          Add task
        </button>
      </div>
    </div>
  );
};
export default TasksList;
