import React, { ReactNode } from 'react';

export interface HeadingProps {
  size: number | 'display';
  children: ReactNode;  // Add this line
}

const Heading: React.FC<HeadingProps> = ({ size = 64, children }) => {
  const style = { fontSize: size === 'display' ? '2em' : size };
  return <h1 style={style}>{children}</h1>;
};

export default Heading;