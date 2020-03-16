import React, {Fragment, Children, createContext} from 'react';

const {
  Provider: LayoutProvider,
  Consumer: LayoutConsumer
} = createContext();

export const createLayoutPosition = () => {
  const instId = {};
  const LayoutPosition = ({children} = {}) => (
    <LayoutConsumer>
      {(positionMap = new Map()) => (
        <Fragment>
          {positionMap.get(instId)}
        </Fragment>
      )}
    </LayoutConsumer>
  );

  LayoutPosition.instId = instId;

  return LayoutPosition;
};

export const createLayout = (Layout) => ({children, ...props} = {}) => {
  const positionMap = new Map();

  Children
    .toArray(children)
    .filter(c => c instanceof Object && c.type instanceof Object)
    .forEach(({
                type: {
                  instId
                } = {},
                props: {
                  children: positionChildren
                } = {}
              } = {}) => {
      if (instId instanceof Object) {
        positionMap.set(instId, positionChildren);
      }
    });

  return (
    <LayoutProvider
      value={positionMap}
    >
      <Layout
        {...props}
      />
    </LayoutProvider>
  );
};
