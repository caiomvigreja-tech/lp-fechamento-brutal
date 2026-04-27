
import React from 'react';

// Avatars for the social proof cluster - High quality professional headshots
const AVATARS = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=80", // Professional Man
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80", // Professional Woman
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80", // Man
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80"  // Woman
];

const SocialProof: React.FC = () => {
  return (
    <div className="
      group inline-flex items-center gap-3 md:gap-4 py-2.5 pl-3 pr-5 md:pr-6
      bg-[#222] border border-white/10
      rounded-full shadow-xl shadow-black/40
      transform transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-[#2a2a2a]
    ">
      {/* Avatars Cluster */}
      <div className="flex items-center -space-x-3">
        {AVATARS.map((src, index) => (
          <div 
            key={index} 
            className="relative w-10 h-10 rounded-full border-2 border-[#222] group-hover:border-[#2a2a2a] transition-colors overflow-hidden"
            style={{ zIndex: AVATARS.length - index }}
          >
            <img 
              src={src} 
              alt={`Aluno ${index + 1}`} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      {/* Vertical Divider */}
      <div className="w-px h-8 bg-white/10" />
      
      {/* Text */}
      <div className="flex flex-col justify-center text-left">
        <p className="font-opensans text-[13px] md:text-[14px] text-gray-400 leading-tight">
          +15 mil alunos <strong className="text-gray-200">pararam de <span className="whitespace-nowrap">perder vendas</span></strong>
        </p>
      </div>
    </div>
  );
};

export default SocialProof;