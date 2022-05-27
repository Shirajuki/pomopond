import { StateUpdater } from 'preact/hooks';
import { TaskListType } from '../types';
import styles from '../styles/popup.module.scss';

interface IAddTask {
  setList: StateUpdater<TaskListType[]>;
}

const AddTask = ({ setList }: IAddTask) => {
  const addTask = () => {
    setList((currentList) => {
      const task = {
        id: String(Math.random()),
        text: 'newboy',
        checked: false,
      };
      return [...currentList, task];
    });
  };
  return (
    <>
      <div class={styles.modal}>
        <button onClick={addTask}>add task</button>
      </div>
    </>
  );
};

export default AddTask;
