// src/components/Card.tsx
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
    width: '300px', // Set a specific width
    height: '200px', // Set a specific height
    maxWidth: '100%', // Ensure it doesn't exceed the parent's width
    maxHeight: '100%', // Ensure it doesn't exceed the parent's height
    overflow: 'auto', // Add scrollbars if content exceeds the set size
 };
 return <div style={style}>{children}</div>;
};

export default Card;

