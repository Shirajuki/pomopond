import { h } from 'preact';
import { StateUpdater, useEffect, useState } from 'preact/hooks';
import {
  LoginScreen,
  PomodoroScreen,
  CalendarScreen,
  GalleryScreen,
  SettingsScreen,
} from './screens';
import { BottomTabs, Popup, ProfileModal, StatsModal } from './components';
import { ScreenEnum, PopupEnum } from './types';
import './styles/index.scss';

// MVC
interface IScreenHandler {
  screen: Number;
  setPopups: StateUpdater<PopupEnum[]>;
}
interface IPopupHandler {
  popup: Number;
  setPopups: StateUpdater<PopupEnum[]>;
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

const PopupHandler = ({ popup, setPopups }: IPopupHandler) => {
  const closePopup = (closingPopup: PopupEnum) => {
    setPopups((currentPopup) => currentPopup.filter((p) => p != closingPopup));
  };
  switch (popup) {
    case PopupEnum.Stats:
      return (
        <Popup
          children={<StatsModal />}
          isFullscreen={true}
          closePopup={() => closePopup(PopupEnum.Stats)}
        />
      );
    case PopupEnum.Profile:
      return (
        <Popup
          children={<ProfileModal />}
          isFullscreen={true}
          closePopup={() => closePopup(PopupEnum.Profile)}
        />
      );
    default:
      return <></>;
  }
};

export const App = () => {
  const [screen, setScreen] = useState(1);
  const [popups, setPopups] = useState<PopupEnum[]>([PopupEnum.Stats]);
  useEffect(() => {
    document.title = ScreenEnum[screen];
  }, [screen]);

  return (
    <>
      {popups.map((popup) => (
        <PopupHandler popup={popup} setPopups={setPopups} />
      ))}
      <ScreenHandler screen={screen} setPopups={setPopups} />
      <BottomTabs screen={screen} setScreen={setScreen} />
    </>
  );
};
