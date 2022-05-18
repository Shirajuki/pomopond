import { h } from 'preact';
import { StateUpdater } from 'preact/hooks';
import { ScreenEnum } from '../types';
import { CalendarIcon, GalleryIcon, PomodoroIcon, SettingsIcon } from './icons';

interface IBottomTabs {
  screen: number;
  setScreen: StateUpdater<number>;
}
interface ITabIcon {
  tab: number;
}

const TabIcon = ({ tab }: ITabIcon) => {
  switch (tab) {
    case ScreenEnum.Pomodoro:
      return <PomodoroIcon />;
    case ScreenEnum.Calendar:
      return <CalendarIcon />;
    case ScreenEnum.Gallery:
      return <GalleryIcon />;
    case ScreenEnum.Settings:
      return <SettingsIcon />;
    default:
      return <></>;
  }
};

const BottomTabs = ({ screen, setScreen }: IBottomTabs) => {
  return (
    <div class="bottomTabs">
      {Object.keys(ScreenEnum)
        .filter((v) => isNaN(Number(v)) && v != 'Login')
        .map((key, index) => {
          const tab = Object.values(ScreenEnum).indexOf(key);
          return (
            <div
              class={`tabs ${screen == tab ? 'active' : ''}`}
              key={index}
              onClick={() => screen != tab && setScreen(tab)}
            >
              <TabIcon tab={tab} />
              <p>{key}</p>
            </div>
          );
        })}
    </div>
  );
};
export default BottomTabs;
