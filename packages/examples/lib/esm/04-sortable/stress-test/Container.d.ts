import React from 'react';
export interface ContainerState {
    cardsById: {
        [key: string]: any;
    };
    cardsByIndex: any[];
}
export default class Container extends React.Component<{}, ContainerState> {
    private pendingUpdateFn;
    private requestedFrame;
    constructor(props: {});
    componentWillUnmount(): void;
    render(): JSX.Element;
    private scheduleUpdate;
    private drawFrame;
    private moveCard;
}
