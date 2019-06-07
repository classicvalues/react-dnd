import React from 'react';
import { ConnectDragSource, ConnectDropTarget } from 'react-dnd';
export interface CardProps {
    id: string;
    text: string;
    moveCard: (id: string, to: number) => void;
    findCard: (id: string) => {
        index: number;
    };
    connectDragSource: ConnectDragSource;
    connectDropTarget: ConnectDropTarget;
    isDragging: boolean;
}
declare const _default: import("react-dnd").DndComponentClass<import("react-dnd").DndComponentClass<React.FunctionComponent<CardProps>, Pick<CardProps, "text" | "connectDropTarget" | "id" | "moveCard" | "findCard">>, Pick<Pick<CardProps, "text" | "connectDropTarget" | "id" | "moveCard" | "findCard">, "text" | "id" | "moveCard" | "findCard">>;
export default _default;
