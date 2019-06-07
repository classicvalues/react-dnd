import React from 'react';
export interface SourceBox {
    name: string;
    type: string;
}
export interface DustbinBox {
    accepts: string[];
    lastDroppedItem: any;
}
export interface ContainerState {
    boxes: SourceBox[];
    dustbins: DustbinBox[];
    droppedBoxNames: string[];
}
declare const Container: React.FC;
export default Container;
