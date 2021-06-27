import React, {
  Children,
  createContext,
  FC,
  Fragment,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { v4 as UUIDV4 } from 'uuid';

const NOOP = () => undefined;

const LAYOUT_POSITION_SIGNIFIER = {};
const childNodeIsLayoutPosition = (c?: any): boolean =>
  c instanceof Object &&
  c.type instanceof Object &&
  'layoutPositionSignifier' in c.type &&
  c.type.layoutPositionSignifier === LAYOUT_POSITION_SIGNIFIER;

type LayoutPositionMap = {
  [positionId: string]: Map<any, ReactNode>;
};
const LayoutContext = createContext<LayoutPositionMap>({});
const { Provider: LayoutContextProvider } = LayoutContext;
const ForceUpdateContext = createContext<() => void>(NOOP);
const { Provider: ForceUpdateContextProvider } = ForceUpdateContext;

export type LayoutPosition = {
  layoutPositionSignifier: any;
};

const MapRenderer: FC<{ map: Map<any, ReactNode> | undefined }> = ({ map = new Map<any, ReactNode>() }) => (
  <>
    {Array.from(map.values()).map((c, i) => (
      <Fragment key={`MappedChild:${i}`}>{c}</Fragment>
    ))}
  </>
);

export const createLayoutPosition = (): FC<PropsWithChildren<any>> & LayoutPosition => {
  const positionId = `composable-layout-position-${UUIDV4()}`;

  return Object.assign(
    (props: PropsWithChildren<any>) => {
      const { children } = props;
      const hasDirectChildren = 'children' in props;
      const internalPositionInstanceId = useMemo(() => ({}), []);
      const positionChildrenMap = useContext<LayoutPositionMap>(LayoutContext);
      const forceUpdate = useContext(ForceUpdateContext);

      if (hasDirectChildren) {
        positionChildrenMap[positionId] = positionChildrenMap[positionId] || new Map<any, React.ReactNode>();
        positionChildrenMap[positionId].set(internalPositionInstanceId, children);
      }

      useEffect(
        () => () => {
          if (hasDirectChildren && positionChildrenMap[positionId]) {
            positionChildrenMap[positionId].delete(internalPositionInstanceId);

            forceUpdate();
          }
        },
        [hasDirectChildren, forceUpdate, positionChildrenMap[positionId], internalPositionInstanceId]
      );

      return hasDirectChildren ? null : <MapRenderer map={positionChildrenMap[positionId]} />;
    },
    {
      layoutPositionSignifier: LAYOUT_POSITION_SIGNIFIER,
    } as LayoutPosition
  );
};

export const createLayout = (Layout: FC<PropsWithChildren<any>>): FC<PropsWithChildren<any>> => {
  return ({ children, ...props }) => {
    const [updateCount, setUpdateCount] = useState(0);
    const forceUpdate = useCallback(() => setUpdateCount(updateCount + 1), [updateCount, setUpdateCount]);
    const positionChildrenMap = useMemo<LayoutPositionMap>(() => ({}), []);
    const contentHoldingPositions = Children.toArray(children).filter((c) => childNodeIsLayoutPosition(c));
    const directChildren = Children.toArray(children).filter((c) => !childNodeIsLayoutPosition(c));

    return (
      <>
        <LayoutContextProvider value={positionChildrenMap}>
          <ForceUpdateContextProvider value={forceUpdate}>
            {contentHoldingPositions}
            <Layout {...props}>{directChildren}</Layout>
          </ForceUpdateContextProvider>
        </LayoutContextProvider>
      </>
    );
  };
};
