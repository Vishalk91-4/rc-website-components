import React, { ReactNode } from 'react';

export interface CardProps {
 padding?: string;
 radius?: string;
 removeShadow?: boolean;
 children: ReactNode;
}

const Card: React.FC<CardProps> = ({ padding = '16px', radius = '8px', removeShadow = false, children }) => {
 const style = {
    padding,
    borderRadius: radius,
    boxShadow: removeShadow ? 'none' : '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '300px',
    height: '200px',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'auto',
 };
 return <div style={style}>{children}</div>;
};

export default Card;

