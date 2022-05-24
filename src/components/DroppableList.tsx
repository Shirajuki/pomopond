import { useState } from 'preact/hooks';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { TaskListType } from '../types';
import Task from './Task';

// Preact refs type fix
const PDragDropContext = DragDropContext as typeof DragDropContext & any;
const PDroppable = Droppable as typeof Droppable & any;

type DroppableListType = {
  list: TaskListType[];
};
const DroppableList = ({ list: initialList }: DroppableListType) => {
  const [list, setList] = useState<TaskListType[]>(initialList);
  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    else if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const newTaskList = [...list];
    newTaskList.splice(source.index, 1);
    newTaskList.splice(destination.index, 0, list[source.index]);
    setList(newTaskList);
  };
  const updateTask = (index: number) => {
    const newTaskList = [...list];
    newTaskList.splice(index, 1, {
      ...list[index],
      checked: !list[index].checked,
    });
    setList(newTaskList);
  };
  return (
    <>
      <PDragDropContext onDragEnd={onDragEnd}>
        <PDroppable droppableId={'pomodoro_task'}>
          {(provided: any, snapshot: any) => (
            <div
              className={`taskColumn ${
                snapshot.isDraggingOver ? 'hovering' : ''
              }`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {list.map((task, index) => (
                <Task task={task} index={index} updateTask={updateTask} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </PDroppable>
      </PDragDropContext>
    </>
  );
};

export default DroppableList;
