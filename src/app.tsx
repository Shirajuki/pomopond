import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import {
  LoginScreen,
  PomodoroScreen,
  CalendarScreen,
  GalleryScreen,
  SettingsScreen,
} from './screens';
import { BottomTabs, Popup } from './components';
import { ScreenEnum, PopupEnum } from './types';
import './styles/index.scss';

// MVC
interface IScreenHandler {
  screen: Number;
}
interface IPopupHandler {
  popup: Number;
}

const ScreenHandler = ({ screen }: IScreenHandler) => {
  switch (screen) {
    case ScreenEnum.Login:
      return <LoginScreen />;
    case ScreenEnum.Pomodoro:
      return <PomodoroScreen />;
    case ScreenEnum.Calendar:
      return <CalendarScreen />;
    case ScreenEnum.Gallery:
      return <GalleryScreen />;
    case ScreenEnum.Settings:
      return <SettingsScreen />;
    default:
      return <></>;
  }
};

const PopupHandler = ({ popup }: IPopupHandler) => {
  switch (popup) {
    case PopupEnum.Stats:
      return <Popup />;
    case PopupEnum.Profile:
      return <Popup />;
    default:
      return <></>;
  }
};

export const App = () => {
  const [screen, setScreen] = useState(1);
  const [popups, setPopups] = useState<Number[]>([]);
  useEffect(() => {
    document.title = ScreenEnum[screen];
  }, [screen]);

  return (
    <>
      {popups.map((popup) => (
        <PopupHandler popup={popup} />
      ))}
      <ScreenHandler screen={screen} />
      <BottomTabs screen={screen} setScreen={setScreen} />
    </>
  );
};
