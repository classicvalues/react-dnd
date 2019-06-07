import React from 'react';
import { ConnectDragSource } from 'react-dnd';
interface ParentProps {
    isDragging: boolean;
    connectDragSource: ConnectDragSource;
}
declare const Example: import("react-dnd").DndComponentClass<React.FunctionComponent<ParentProps>, Pick<ParentProps, never>>;
export default Example;
