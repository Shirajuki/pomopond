import { h } from 'preact';
import { useState } from 'preact/hooks';
import { HeaderNavigator } from '../components';

const GalleryScreen = () => {
  const title = 'Gallery';
  const droplets = 420;
  return (
    <>
      <div class="screen">
        <HeaderNavigator title={title} droplets={droplets} />
      </div>
    </>
  );
};
export default GalleryScreen;
