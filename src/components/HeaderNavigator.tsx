import { StateUpdater } from 'preact/hooks';
import { PopupEnum } from '../types';
import { CheckIcon, DropletIcon, ProfileIcon, StatsIcon } from './icons';

interface IHeaderNavigator {
  title: string;
  setPopups?: StateUpdater<PopupEnum[]>;
}
interface IHeaderTitleIcon {
  title: string;
}

const HeaderTitleIcon = ({ title }: IHeaderTitleIcon) => {
  switch (title) {
    case 'Pomopond':
      return <CheckIcon />;
    default:
      return (
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.04293 2.2367L14.4767 8.6705V13.1817C14.4767 13.6083 14.3073 14.0174 14.0056 14.319C13.704 14.6207 13.2949 14.7901 12.8683 14.7901H3.21758C2.79099 14.7901 2.38188 14.6207 2.08023 14.319C1.77859 14.0174 1.60913 13.6083 1.60913 13.1817V8.6705L8.04293 2.2367V2.2367ZM13.4044 1.38637V5.13942L11.2598 2.99482V1.38637C11.2598 1.24417 11.3163 1.1078 11.4169 1.00725C11.5174 0.906707 11.6538 0.85022 11.796 0.85022H12.8683C13.0105 0.85022 13.1468 0.906707 13.2474 1.00725C13.3479 1.1078 13.4044 1.24417 13.4044 1.38637Z"
            fill="#051811"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.28481 0.313955C7.48589 0.11293 7.75859 0 8.04292 0C8.32726 0 8.59995 0.11293 8.80104 0.313955L15.9286 7.44046C16.0293 7.54113 16.0858 7.67768 16.0858 7.82005C16.0858 7.96243 16.0293 8.09897 15.9286 8.19965C15.8279 8.30032 15.6914 8.35688 15.549 8.35688C15.4066 8.35688 15.2701 8.30032 15.1694 8.19965L8.04292 1.07207L0.916421 8.19965C0.815746 8.30032 0.679202 8.35688 0.536827 8.35688C0.394452 8.35688 0.257908 8.30032 0.157233 8.19965C0.0565584 8.09897 0 7.96243 0 7.82005C0 7.67768 0.0565584 7.54113 0.157233 7.44046L7.28481 0.313955Z"
            fill="#051811"
          />
        </svg>
      );
  }
};

const HeaderNavigator = ({ title, setPopups }: IHeaderNavigator) => {
  const droplets = 420;
  const openPopup = (popup: PopupEnum) => {
    if (setPopups)
      setPopups((currentPopups) => [
        ...currentPopups.filter((p) => p === popup),
        popup,
      ]);
  };
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
          <button onClick={() => openPopup(PopupEnum.Stats)}>
            <StatsIcon />
          </button>
          <button onClick={() => openPopup(PopupEnum.Profile)}>
            <ProfileIcon />
          </button>
        </div>
      </div>
    </>
  );
};
export default HeaderNavigator;
