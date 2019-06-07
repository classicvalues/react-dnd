import React from 'react';
import { ConnectDropTarget } from 'react-dnd';
export interface ContainerProps {
    snapToGrid: boolean;
    connectDropTarget: ConnectDropTarget;
}
export interface ContainerState {
    boxes: Record<string, {
        top: number;
        left: number;
        title: string;
    }>;
}
declare class Container extends React.PureComponent<ContainerProps, ContainerState> {
    state: ContainerState;
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
    moveBox(id: string, left: number, top: number): void;
    private renderBox;
}
declare const _default: import("react-dnd").DndComponentClass<typeof Container, Pick<ContainerProps, "snapToGrid">>;
export default _default;
