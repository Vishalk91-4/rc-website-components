import React from 'react';
import './Spinner.css';

interface SpinnerProps {
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ color = 'black' }) => {
  return <div className="spinner" style={{ borderColor: `${color} transparent transparent transparent` }} />;
};

export default Spinner;