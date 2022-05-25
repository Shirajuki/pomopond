import { useState } from 'preact/hooks';
import { HeaderBackground, HeaderNavigator } from '../components';
import { Screen } from '../types';

const SettingsScreen = ({ setPopups }: Screen) => {
  const title = 'Settings';
  return (
    <>
      <div class="screen">
        <HeaderNavigator title={title} setPopups={setPopups} />
        <HeaderBackground />
      </div>
    </>
  );
};
export default SettingsScreen;
