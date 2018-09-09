import React from 'react';

const GifTile = ({ gifObject }) => (
    <img src={gifObject.images.downsized.url} />
);

const Gifs = ({ gifList = [] }) => (
  gifList.map((item, index) => <GifTile gifObject={item} key={item.id} />)
);

export default Gifs;
