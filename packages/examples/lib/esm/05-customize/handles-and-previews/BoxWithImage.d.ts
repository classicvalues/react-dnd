import React from 'react';
import { ConnectDragPreview, ConnectDragSource } from 'react-dnd';
export interface BoxWithImageProps {
    connectDragSource: ConnectDragSource;
    connectDragPreview: ConnectDragPreview;
    isDragging: boolean;
}
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<BoxWithImageProps>, Pick<BoxWithImageProps, never>>;
export default _default;
