import React from 'react';
export interface CardProps {
    id: any;
    text: string;
    moveCard: (draggedId: string, id: string) => void;
}
declare const Card: React.FC<CardProps>;
export default Card;
