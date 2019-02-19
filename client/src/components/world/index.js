import React from 'react';
import Map from '../map';
import Player from '../player/index';
import Enemy from '../enemy/index'
import Player2 from '../player2/index';
import Loot from '../loot/index'
import tiles from '../../data/maps/1';
import store from '../../store';
import { ADD_TILES } from '../../constants/actionTypes';

const World = () => {
  store.dispatch({
    type: ADD_TILES,
    payload: {
      tiles
    }
  });
  return (
    <div
      style={{
        position: 'relative'
      }}
    >
      <Map />
      <Player />
      <Enemy />
      <Player2 />
      <Loot />
    </div>
  );
};

export default World;
