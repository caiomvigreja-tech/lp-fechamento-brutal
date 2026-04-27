import React from 'react';

interface GradientTextProps {
  text: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text }) => {
  return (
    <b className="relative inline-block font-poppins font-extrabold tracking-tight">
      <span 
        className="bg-gradient-to-br from-[#FF9E42] to-[#FF7214] bg-clip-text text-transparent whitespace-nowrap"
      >
        {text}
      </span>
    </b>
  );
};

export default GradientText;