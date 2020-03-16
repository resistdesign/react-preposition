import React from 'react';
import {
  createLayout,
  createLayoutPosition
} from '../Utils/ReactPreposition';

export const Over = createLayoutPosition();
export const Left = createLayoutPosition();
export const Right = createLayoutPosition();
export const Under = createLayoutPosition();

export const MyLayout = createLayout((props = {}) => {
  const panelStyle = {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3em'
  };

  return (
    <div
      style={{
        flex: '1 0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        fontFamily: 'sans-serif',
        height: '50vh'
      }}
      {...props}
    >
      <div
        style={{
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '5em',
          color: 'white'
        }}
      >
        <Over/>
      </div>
      <div
        style={{
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'stretch'
        }}
      >
        <div
          style={{
            ...panelStyle,
            color: 'blue'
          }}
        >
          <Left/>
        </div>
        <div
          style={{
            ...panelStyle,
            color: 'green'
          }}
        >
          <Right/>
        </div>
      </div>
      <div
        style={{
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.5em',
          color: 'white'
        }}
      >
        <Under/>
      </div>
    </div>
  );
});

export default MyLayout;
