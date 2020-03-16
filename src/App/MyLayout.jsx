import React from 'react';
import {
  createLayout,
  createLayoutArea
} from '../Utils/ReactPreposition';

export const HeaderSection = createLayoutArea();

export const LeftPanel = createLayoutArea();

export const RightPanel = createLayoutArea();

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
        fontFamily: 'sans-serif'
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
        <HeaderSection/>
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
          <LeftPanel/>
        </div>
        <div
          style={{
            ...panelStyle,
            color: 'green'
          }}
        >
          <RightPanel/>
        </div>
      </div>
    </div>
  );
});

export default MyLayout;
