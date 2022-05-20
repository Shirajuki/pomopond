import { h } from 'preact';
import { useState } from 'preact/hooks';
import { HeaderBackground, HeaderNavigator } from '../components';

const CalendarScreen = () => {
  const title = 'Calendar';
  const droplets = 420;
  return (
    <>
      <div class="screen">
        <HeaderNavigator title={title} droplets={droplets} />
        <HeaderBackground />
      </div>
    </>
  );
};
export default CalendarScreen;
