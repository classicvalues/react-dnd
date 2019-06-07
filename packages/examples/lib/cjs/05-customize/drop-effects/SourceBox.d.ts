import React from 'react';
import { ConnectDragSource } from 'react-dnd';
export interface SourceBoxProps {
    showCopyIcon?: boolean;
    isDragging: boolean;
    connectDragSource: ConnectDragSource;
}
declare const _default: import("react-dnd").DndComponentClass<React.FunctionComponent<SourceBoxProps>, Pick<SourceBoxProps, "showCopyIcon">>;
export default _default;
