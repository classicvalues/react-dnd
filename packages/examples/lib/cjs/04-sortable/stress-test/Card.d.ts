import React from 'react';
import { ConnectDragSource, ConnectDropTarget } from 'react-dnd';
export interface CardProps {
    id: any;
    text: string;
    moveCard: (draggedId: string, id: string) => void;
    isDragging: boolean;
    connectDragSource: ConnectDragSource;
    connectDropTarget: ConnectDropTarget;
}
declare const _default: import("react-dnd").DndComponentClass<import("react-dnd").DndComponentClass<React.FunctionComponent<CardProps>, Pick<CardProps, "text" | "connectDropTarget" | "id" | "moveCard">>, Pick<Pick<CardProps, "text" | "connectDropTarget" | "id" | "moveCard">, "text" | "id" | "moveCard">>;
export default _default;
