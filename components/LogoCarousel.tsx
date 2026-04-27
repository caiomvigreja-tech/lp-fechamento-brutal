
import React from 'react';
import { Hexagon, Triangle, Circle, Box, Globe, Layers, Zap, Activity, Briefcase, Command, Aperture, Target, Anchor, Cpu, Database } from 'lucide-react';

const logos = [
  { name: "Alpha Holding", icon: Hexagon },
  { name: "Vortex Sales", icon: Activity },
  { name: "Global Partners", icon: Globe },
  { name: "Nexus Corp", icon: Layers },
  { name: "Prime Energy", icon: Zap },
  { name: "Apex Solutions", icon: Triangle },
  { name: "Sphere Group", icon: Circle },
  { name: "Block Capital", icon: Box },
  { name: "Iron Forge", icon: Briefcase },
  { name: "Cmd Systems", icon: Command },
  { name: "Open Lens", icon: Aperture },
  { name: "Target Media", icon: Target },
  { name: "Blue Harbor", icon: Anchor },
  { name: "Tech Core", icon: Cpu },
  { name: "Data Flow", icon: Database },
];

// Duplicate list for seamless scrolling
const allLogos = [...logos, ...logos, ...logos];

const LogoCarousel: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 border-t border-gray-100 py-10 md:py-14 relative overflow-hidden">
      
      {/* Light Gradient Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Caption Label - Enhanced Typography */}
        <div className="shrink-0 flex flex-col items-center md:items-start z-20 bg-gray-50 md:bg-transparent px-4 md:px-0">
           <span className="text-[10px] md:text-[11px] font-dmsans font-bold uppercase tracking-[0.2em] text-gray-400 mb-1.5">
              Método validado por
           </span>
           <span className="font-lato font-black text-[#1C1C1C] text-[24px] md:text-[28px] leading-none tracking-tight">
              <span className="text-[#FF7214]">+500</span> Empresas
           </span>
        </div>

        {/* Divider (Desktop Only) */}
        <div className="hidden md:block w-px h-12 bg-gray-200" />

        {/* Marquee Container */}
        <div className="flex-1 w-full overflow-hidden relative">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                {allLogos.map((logo, index) => (
                <div 
                    key={index} 
                    className="flex items-center gap-2.5 px-6 md:px-8 opacity-40 hover:opacity-100 transition-all duration-300 cursor-default group grayscale hover:grayscale-0"
                >
                    {/* Logo Icon */}
                    <div className="text-gray-600 group-hover:text-[#FF7214] transition-colors duration-300 transform group-hover:scale-110">
                        <logo.icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
                    </div>
                    
                    {/* Logo Text */}
                    <span className="font-lato font-bold text-[16px] md:text-[18px] text-gray-500 group-hover:text-black transition-colors whitespace-nowrap tracking-tight">
                    {logo.name}
                    </span>
                </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default LogoCarousel;
