import styles from '../styles/taskslist.module.scss';
import DroppableList from './DroppableList';
import { AddIcon, OptionsIcon } from './icons';
import { PopupType, TaskListType } from '../types';
import { StateUpdater, useState } from 'preact/hooks';

const initialList = [
  { id: '1', text: 'testing 12312312312', checked: false },
  { id: '2', text: 'testasd totoot', checked: false },
  { id: '3', text: 'testaaaa', checked: false },
];
interface ITasksList {
  setPopups: StateUpdater<PopupType[]>;
}

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
      <div>
        <button onClick={addTask}>add task</button>
      </div>
    </>
  );
};

const TasksList = ({ setPopups }: ITasksList) => {
  const [list, setList] = useState<TaskListType[]>(initialList);

  const openAddTaskPopup = () => {
    const popup = {
      key: 'addTask',
      isFullscreen: false,
      children: <AddTask setList={setList} />,
    };
    setPopups((currentPopups) => [
      ...currentPopups.filter((p) => p.key === popup.key),
      popup,
    ]);
  };

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
        <DroppableList list={list} setList={setList} />
        <button onClick={openAddTaskPopup}>
          <AddIcon />
          Add task
        </button>
      </div>
    </div>
  );
};
export default TasksList;
