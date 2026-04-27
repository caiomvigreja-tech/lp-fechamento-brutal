import React from 'react';
import { MoveUpRight } from 'lucide-react';

interface CTAButtonProps {
  text: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text }) => {
  return (
    <a 
      href="#" 
      className="
        group relative inline-flex items-center justify-center 
        w-full max-w-[340px] md:w-auto md:max-w-none
        px-6 py-5 md:px-12 md:py-6 
        text-white font-dmsans font-bold 
        text-[18px] md:text-[20px] 
        leading-[1.3] uppercase tracking-wide
        bg-gradient-to-r from-[#0F9D58] via-[#34C38F] to-[#0F9D58]
        rounded-[8px] border-t-[2px] border-[#A7E8C3] 
        shadow-[0_10px_20px_0_rgba(15,157,88,0.4),0_20px_40px_0_rgba(15,157,88,0.3),0_40px_80px_0_rgba(15,157,88,0.2),0_60px_120px_0_rgba(15,157,88,0.1)]
        transition-all duration-500 ease-in-out
        hover:-translate-y-2 hover:shadow-none active:opacity-50
        overflow-hidden outline-none cursor-pointer
      "
    >
      {/* Shine Effect (::before) */}
      <div className="absolute bottom-0 w-[70px] h-[130%] bg-[linear-gradient(10deg,#CFF5E3_12.81%,rgba(207,245,227,0)_66.66%)] -skew-x-[25deg] blur-[3px] animate-shine pointer-events-none transform -translate-x-1/2 left-[-10%]" />
      
      {/* Top Glow (selector:after) - Simulating the internal top glow */}
      <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-[90%] h-[20px] bg-[radial-gradient(ellipse_at_center,#9BE8C1_20%,#9BE8C150_70%,#9BE8C100_100%)] mix-blend-screen blur-[12px] pointer-events-none z-[1]" />
      
      {/* Edge Glow Top (.elementor-button:before) */}
      <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-full h-[10px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,0.1)_40%,rgba(255,255,255,0)_70%)] pointer-events-none z-[2]" />
      
      {/* Edge Glow Bottom (.elementor-button:after) */}
      <div className="absolute -bottom-[4.5px] left-1/2 -translate-x-1/2 w-full h-[10px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,0.1)_40%,rgba(255,255,255,0)_70%)] pointer-events-none z-[2]" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center whitespace-nowrap">
        <MoveUpRight 
          className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] mr-2 text-white transition-transform duration-500 ease-out group-hover:translate-x-[5px] group-hover:rotate-[5deg]" 
          strokeWidth={3}
        />
        <span className="drop-shadow-md">{text}</span>
      </div>
    </a>
  );
};

export default CTAButton;