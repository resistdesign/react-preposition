import React from 'react';
import { createLayout, createLayoutPosition } from 'react-preposition';

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
    fontSize: '2em',
    width: '50%',
  };

  return (
    <div
      style={{
        flex: '0 0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        fontFamily: 'sans-serif',
        width: '30em',
        height: '30em',
        fontSize: '0.75em',
        margin: 'auto',
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
          fontSize: '4em',
          color: 'white',
          backgroundColor: '#333333',
        }}
      >
        <Over />
      </div>
      <div
        style={{
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'stretch',
        }}
      >
        <div
          style={
            {
              ...panelStyle,
              color: '#0096E4',
              backgroundColor: '#111111',
            } as any
          }
        >
          <Left />
        </div>
        <div
          style={
            {
              ...panelStyle,
              color: '#FF9B00',
              backgroundColor: '#1c1c1c',
            } as any
          }
        >
          <Right />
        </div>
      </div>
      <div
        style={{
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.25em',
          color: 'white',
          backgroundColor: '#232323',
        }}
      >
        <Under />
      </div>
    </div>
  );
});

export default MyLayout;
