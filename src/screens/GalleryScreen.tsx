import { useState } from 'preact/hooks';
import { HeaderBackground, HeaderNavigator } from '../components';
import { Screen } from '../types';

const GalleryScreen = ({ setPopups }: Screen) => {
  const title = 'Gallery';
  return (
    <>
      <div class="screen">
        <HeaderNavigator title={title} setPopups={setPopups} />
        <HeaderBackground />
      </div>
    </>
  );
};
export default GalleryScreen;
