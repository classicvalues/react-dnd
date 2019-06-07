import React from 'react';
import { ConnectDragSource, ConnectDragPreview } from 'react-dnd';
export interface KnightProps {
    connectDragSource: ConnectDragSource;
    connectDragPreview: ConnectDragPreview;
    isDragging?: boolean;
}
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<KnightProps>, Pick<KnightProps, never>>;
export default _default;
