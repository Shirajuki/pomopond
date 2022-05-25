import { useState } from 'preact/hooks';
import { HeaderBackground, HeaderNavigator } from '../components';
import { Screen } from '../types';

const CalendarScreen = ({ setPopups }: Screen) => {
  const title = 'Calendar';
  return (
    <>
      <div class="screen">
        <HeaderNavigator title={title} setPopups={setPopups} />
        <HeaderBackground />
      </div>
    </>
  );
};
export default CalendarScreen;
