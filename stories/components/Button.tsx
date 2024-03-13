// src/components/Button.tsx
import React from 'react';
import Spinner from './Spinner';
export interface ButtonProps {
 loading?: boolean;
 spinnerColor?: string;
 size?: 'small' | 'medium' | 'large';
 theme?: { containerTheme: React.CSSProperties; textTheme: React.CSSProperties };
 rightSlot?: React.ReactNode;
 leftSlot?: React.ReactNode;
 children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
 loading = false,
 spinnerColor = 'white',
 size = 'medium',
 theme = { containerTheme: {}, textTheme: {} },
 rightSlot,
 leftSlot,
 children,
 ...props
}) => {
 const buttonStyle = {
    ...theme.containerTheme,
    cursor: loading ? 'not-allowed' : 'pointer',
 };
 const textStyle = theme.textTheme;

 return (
    <button style={buttonStyle} {...props}>
      {loading ? <Spinner color={spinnerColor} /> : (leftSlot || null)}
      {children}
      {rightSlot || null}
    </button>
 );
};

export default Button;
