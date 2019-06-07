import React from 'react';
export interface CardProps {
    id: any;
    text: string;
    index: number;
    moveCard: (dragIndex: number, hoverIndex: number) => void;
}
declare const Card: React.FC<CardProps>;
export default Card;
