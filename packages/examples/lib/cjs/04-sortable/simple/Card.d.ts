import React from 'react';
import { ConnectDropTarget, ConnectDragSource } from 'react-dnd';
export interface CardProps {
    id: any;
    text: string;
    index: number;
    moveCard: (dragIndex: number, hoverIndex: number) => void;
    isDragging: boolean;
    connectDragSource: ConnectDragSource;
    connectDropTarget: ConnectDropTarget;
}
declare const _default: import("react-dnd").DndComponentClass<import("react-dnd").DndComponentClass<React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>, Pick<CardProps & React.RefAttributes<HTMLDivElement>, "ref" | "text" | "connectDropTarget" | "id" | "moveCard" | "index" | "key">>, Pick<Pick<CardProps & React.RefAttributes<HTMLDivElement>, "ref" | "text" | "connectDropTarget" | "id" | "moveCard" | "index" | "key">, "ref" | "text" | "id" | "moveCard" | "index" | "key">>;
export default _default;
