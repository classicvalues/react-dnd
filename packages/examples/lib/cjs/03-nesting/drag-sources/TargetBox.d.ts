import React from 'react';
import { ConnectDropTarget } from 'react-dnd';
export interface TargetBoxProps {
    onDrop: (item: any) => void;
    lastDroppedColor?: string;
    isOver: boolean;
    canDrop: boolean;
    draggingColor: string;
    connectDropTarget: ConnectDropTarget;
}
export interface StatefulTargetBoxState {
    lastDroppedColor: string | null;
}
declare const StatefulTargetBox: React.FC;
export default StatefulTargetBox;
