import { useState } from 'preact/hooks';
import { HeaderNavigator, PomodoroTimer, TasksList } from '../components';
import { Screen } from '../types';

const PomodoroScreen = ({ setPopups }: Screen) => {
  const [zen, setZen] = useState<boolean>(false);
  const title = 'Pomopond';
  return (
    <>
      <div class="screen">
        {!zen && <HeaderNavigator title={title} setPopups={setPopups} />}
        <PomodoroTimer zen={zen} setZen={setZen} />
        {setPopups && !zen && <TasksList setPopups={setPopups} />}
      </div>
    </>
  );
};
export default PomodoroScreen;
