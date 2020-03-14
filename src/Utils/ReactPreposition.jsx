import React, {Fragment, Children, createContext} from 'react';

const {
  Provider: LayoutProvider,
  Consumer: LayoutConsumer
} = createContext();

export const createLayoutArea = () => {
  const instId = {};
  const LayoutArea = ({children} = {}) => (
    <LayoutConsumer>
      {(areaMap = new Map()) => (
        <Fragment>
          {areaMap.get(instId)}
        </Fragment>
      )}
    </LayoutConsumer>
  );

  LayoutArea.instId = instId;

  return LayoutArea;
};

export const createLayout = (Layout) => ({children, ...props} = {}) => {
  const areaMap = new Map();

  Children
    .toArray(children)
    .filter(c => c instanceof Object && c.type instanceof Object)
    .forEach(({
                type: {
                  instId
                } = {},
                props: {
                  children: areaChildren
                } = {}
              } = {}) => {
      if (instId instanceof Object) {
        areaMap.set(instId, areaChildren);
      }
    });

  return (
    <LayoutProvider
      value={areaMap}
    >
      <Layout
        {...props}
      />
    </LayoutProvider>
  );
};
