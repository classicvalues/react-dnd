import React from 'react';
import { ConnectDropTarget } from 'react-dnd';
export interface ContainerProps {
    connectDropTarget: ConnectDropTarget;
}
export interface ContainerState {
    cards: any[];
}
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<ContainerProps>, Pick<ContainerProps, never>>;
export default _default;
