export const padZero = (number: number) => {
  return number >= 10 ? number : '0' + number;
};

export const formatTimer = (timer: number): string => {
  const mins = Math.floor(timer / 60);
  const secs = Math.floor(timer % 60);
  return `${padZero(mins)}:${padZero(secs)}`;
};
