import styles from '../styles/taskslist.module.scss';
import DroppableList from './DroppableList';
import { AddIcon, OptionsIcon } from './icons';

const initialList = [
  { id: '1', text: 'testing 12312312312', checked: false },
  { id: '2', text: 'testasd totoot', checked: false },
  { id: '3', text: 'testaaaa', checked: false },
];
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
        <DroppableList list={initialList} />
        <button>
          <AddIcon />
          Add task
        </button>
      </div>
    </div>
  );
};
export default TasksList;
