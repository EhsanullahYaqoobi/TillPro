"use client";
import { useState, useEffect, ReactNode } from 'react';

type ButtonWrapperProps = {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  name?: string;
};

export default function Button({ children, onClick, className, name }: ButtonWrapperProps) {
  return (
    <div className={`w-16 ${className}`}>
      <NeumorphismButton onClick={onClick} name={name}>
        {children}
      </NeumorphismButton>
    </div>
  );
}

type NeumorphismButtonProps = {
  onClick?: () => void;
  name?: string;
  children?: ReactNode;
};

const NeumorphismButton = ({ onClick, name, children }: NeumorphismButtonProps) => {
  const [gradientColors, setGradientColors] = useState([
    '#8f14e6',
    '#e614dc',
    '#e61453',
    '#e68414',
    '#e6e614',
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradientColors(getRandomGradientColors());
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  const getRandomGradientColors = () => {
    const colors = [];
    for (let i = 0; i < 5; i++) {
      const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      colors.push(color);
    }
    return colors;
  };

  return (
    <button
      onClick={onClick}
      className="text-white font-medium px-3 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95 py-1"
    >
      <span className="relative z-10">{name}</span>
      <div
        className="absolute z-0 inset-0 w-[400%]"
        style={{
          backgroundImage: `linear-gradient(to right, ${gradientColors.join(', ')})`,
          left: '-204.75%',
        }}
      />
      {children}
    </button>
  );
};