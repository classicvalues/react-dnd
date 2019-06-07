import React from 'react';
import { DropTargetMonitor } from 'react-dnd';
export interface TargetBoxProps {
    onDrop: (props: TargetBoxProps, monitor: DropTargetMonitor) => void;
}
declare const TargetBox: React.FC<TargetBoxProps>;
export default TargetBox;
