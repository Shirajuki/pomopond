import { h } from 'preact';
import { StateUpdater, useEffect, useState } from 'preact/hooks';
import {
  LoginScreen,
  PomodoroScreen,
  CalendarScreen,
  GalleryScreen,
  SettingsScreen,
} from './screens';
import { BottomTabs, Popup } from './components';
import { ScreenEnum, PopupType } from './types';
import './styles/index.scss';

// MVC
interface IScreenHandler {
  screen: Number;
  setPopups: StateUpdater<PopupType[]>;
}

const ScreenHandler = ({ screen, setPopups }: IScreenHandler) => {
  switch (screen) {
    case ScreenEnum.Login:
      return <LoginScreen setPopups={setPopups} />;
    case ScreenEnum.Pomodoro:
      return <PomodoroScreen setPopups={setPopups} />;
    case ScreenEnum.Calendar:
      return <CalendarScreen setPopups={setPopups} />;
    case ScreenEnum.Gallery:
      return <GalleryScreen setPopups={setPopups} />;
    case ScreenEnum.Settings:
      return <SettingsScreen setPopups={setPopups} />;
    default:
      return <></>;
  }
};

export const App = () => {
  const [screen, setScreen] = useState(1);
  const [popups, setPopups] = useState<PopupType[]>([]);

  const closePopup = (popupKey: string) => {
    setPopups((currentPopup) => currentPopup.filter((p) => p.key != popupKey));
  };
  useEffect(() => {
    document.title = ScreenEnum[screen];
  }, [screen]);

  return (
    <>
      {popups.map((popup) => (
        <Popup
          children={popup.children}
          isFullscreen={popup.isFullscreen || false}
          closePopup={() => closePopup(popup.key)}
        />
      ))}
      <ScreenHandler screen={screen} setPopups={setPopups} />
      <BottomTabs screen={screen} setScreen={setScreen} />
    </>
  );
};
