import React from 'react';
export interface ContainerState {
    cards: Array<{
        id: number;
        text: string;
    }>;
}
declare const Container: React.FC;
export default Container;
