import React from 'react';
export interface ContainerState {
    droppedBoxNames: string[];
    dustbins: Array<{
        accepts: string[];
        lastDroppedItem: any;
    }>;
    boxes: Array<{
        name: string;
        type: string;
    }>;
}
declare const Container: React.FC;
export default Container;
