import { h } from 'preact';
import { useState } from 'preact/hooks';
import { CheckIcon, DropletIcon, ProfileIcon, StatsIcon } from './icons';

interface IHeaderNavigator {
  title: string;
  droplets: number;
}
interface IHeaderTitleIcon {
  title: string;
}

const HeaderTitleIcon = ({ title }: IHeaderTitleIcon) => {
  switch (title) {
    case 'Pomopond':
      return <CheckIcon />;
    default:
      return <></>;
  }
};

const HeaderNavigator = ({ title, droplets }: IHeaderNavigator) => {
  return (
    <>
      <div class="headerNavigator">
        <div class="headerTitle">
          <HeaderTitleIcon title={title} />
          <h1>{title}</h1>
        </div>
        <div class="headerButtons">
          <button>
            <DropletIcon />
            <span>{droplets}</span>
          </button>
          <button>
            <StatsIcon />
          </button>
          <button>
            <ProfileIcon />
          </button>
        </div>
      </div>
    </>
  );
};
export default HeaderNavigator;
