import React from 'react';
import { XYCoord } from 'react-dnd';
import { Identifier } from 'dnd-core';
export interface CustomDragLayerProps {
    item?: any;
    itemType?: Identifier | null;
    initialOffset?: XYCoord | null;
    currentOffset?: XYCoord | null;
    isDragging?: boolean;
    snapToGrid: boolean;
}
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<CustomDragLayerProps>, Pick<CustomDragLayerProps, "snapToGrid">>;
export default _default;
