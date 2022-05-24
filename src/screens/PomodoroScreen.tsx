import { useState } from 'preact/hooks';
import { HeaderNavigator, PomodoroTimer, TasksList } from '../components';

const PomodoroScreen = () => {
  const title = 'Pomopond';
  const droplets = 420;
  return (
    <>
      <div class="screen">
        <HeaderNavigator title={title} droplets={droplets} />
        <PomodoroTimer />
        <TasksList />
      </div>
    </>
  );
};
export default PomodoroScreen;
