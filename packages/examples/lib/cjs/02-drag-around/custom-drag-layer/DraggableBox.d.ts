import React from 'react';
import { ConnectDragSource, ConnectDragPreview } from 'react-dnd';
export interface DraggableBoxProps {
    connectDragSource: ConnectDragSource;
    connectDragPreview: ConnectDragPreview;
    isDragging: boolean;
    id: string;
    title: string;
    left: number;
    top: number;
}
declare class DraggableBox extends React.PureComponent<DraggableBoxProps> {
    componentDidMount(): void;
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
}
declare const _default: import("react-dnd").DndComponentClass<typeof DraggableBox, Pick<DraggableBoxProps, "title" | "left" | "top" | "id">>;
export default _default;
