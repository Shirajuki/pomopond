import { useState } from 'preact/hooks';
import { HeaderNavigator, PomodoroTimer, TasksList } from '../components';
import { Screen } from '../types';

const PomodoroScreen = ({ setPopups }: Screen) => {
  const title = 'Pomopond';
  return (
    <>
      <div class="screen">
        <HeaderNavigator title={title} setPopups={setPopups} />
        <PomodoroTimer />
        {setPopups && <TasksList setPopups={setPopups} />}
      </div>
    </>
  );
};
export default PomodoroScreen;
