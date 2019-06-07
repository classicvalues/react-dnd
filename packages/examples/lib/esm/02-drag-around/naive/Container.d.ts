import React from 'react';
import { ConnectDropTarget } from 'react-dnd';
export interface ContainerProps {
    hideSourceOnDrag: boolean;
    connectDropTarget: ConnectDropTarget;
}
export interface ContainerState {
    boxes: {
        [key: string]: {
            top: number;
            left: number;
            title: string;
        };
    };
}
declare class Container extends React.Component<ContainerProps, ContainerState> {
    state: ContainerState;
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
    moveBox(id: string, left: number, top: number): void;
}
declare const _default: import("react-dnd").DndComponentClass<typeof Container, Pick<ContainerProps, "hideSourceOnDrag">>;
export default _default;
