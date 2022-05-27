import { useState } from 'preact/hooks';
import { HeaderNavigator, PomodoroTimer, Pond, TasksList } from '../components';
import useStore from '../stores';
import { Screen } from '../types';

const PomodoroScreen = ({ setPopups }: Screen) => {
  const zen = useStore((state) => state.zen);
  const title = 'Pomopond';
  return (
    <>
      <div class="screen">
        {zen && <Pond />}
        {!zen && <HeaderNavigator title={title} setPopups={setPopups} />}
        <PomodoroTimer />
        {setPopups && !zen && <TasksList setPopups={setPopups} />}
      </div>
    </>
  );
};
export default PomodoroScreen;
