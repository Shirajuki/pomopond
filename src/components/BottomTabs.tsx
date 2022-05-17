import { h } from 'preact';
import { StateUpdater, useState } from 'preact/hooks';
import { ScreenEnum } from '../types';

interface IBottomTabs {
  screen: Number;
  setScreen: StateUpdater<number>;
}

const BottomTabs = ({ screen, setScreen }: IBottomTabs) => {
  return (
    <div>
      {Object.keys(ScreenEnum)
        .filter((v) => isNaN(Number(v)) && v != 'Login')
        .map((key, index) => {
          return (
            <div
              key={index}
              onClick={() => screen != index && setScreen(index)}
            >
              {key}
            </div>
          );
        })}
    </div>
  );
};
export default BottomTabs;
