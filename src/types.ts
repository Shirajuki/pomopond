import { JSX } from 'preact';
import { StateUpdater } from 'preact/hooks';

export enum ScreenEnum {
  Login,
  Pomodoro,
  Calendar,
  Gallery,
  Settings,
}
export enum PopupEnum {
  Stats,
  Profile,
}
export type PopupType = {
  key: string;
  children: JSX.Element;
  isFullscreen?: boolean;
};

export type IconType = {
  color?: string;
};

export enum PomodoroStatus {
  Pomodoro,
  ShortBreak,
  LongBreak,
}

export type TaskListType = {
  id: string;
  text: string;
  checked: boolean;
};

export type TaskType = {
  task: TaskListType;
  index: number;
  updateTask: (index: number) => void;
};

export interface Screen {
  setPopups?: StateUpdater<PopupType[]>;
}
