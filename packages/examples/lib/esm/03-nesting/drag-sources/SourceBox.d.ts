import React from 'react';
import { ConnectDragSource } from 'react-dnd';
export interface SourceBoxProps {
    color?: string;
    forbidDrag?: boolean;
    onToggleForbidDrag?: () => void;
    connectDragSource: ConnectDragSource;
    isDragging: boolean;
}
export interface StatefulSourceBoxProps {
    color: string;
}
declare const StatefulSourceBox: React.FC<StatefulSourceBoxProps>;
export default StatefulSourceBox;
