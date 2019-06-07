import React from 'react';
export interface CardProps {
    id: string;
    text: string;
    moveCard: (id: string, to: number) => void;
    findCard: (id: string) => {
        index: number;
    };
}
declare const Card: React.FC<CardProps>;
export default Card;
