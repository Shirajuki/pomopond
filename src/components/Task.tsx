import { Draggable } from 'react-beautiful-dnd';
import { TaskType } from '../types';
import { OptionsIcon } from './icons';

// Preact refs type fix
const PDraggable = Draggable as typeof Draggable & any;

const Task = ({ task, index, updateTask }: TaskType) => {
  const handleInputChange = (_event: any) => {
    updateTask(index);
  };
  return (
    <>
      <PDraggable draggableId={task.id} index={index} key={task.id}>
        {(provided: any, snapshot: any) => (
          <div
            className={`taskContent ${snapshot.isDragging ? 'dragging' : ''}`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <input
              type="checkbox"
              checked={task.checked}
              onChange={handleInputChange}
            />
            <p>{task.text}</p>

            <button>
              <OptionsIcon />
            </button>
          </div>
        )}
      </PDraggable>
    </>
  );
};
export default Task;
