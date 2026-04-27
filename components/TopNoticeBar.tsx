
import React from 'react';

const TopNoticeBar: React.FC = () => {
  return (
    <div className="w-full bg-[#121212] border-b border-white/5 relative z-50 shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-center text-center">
         <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center justify-center bg-[#f2295b] text-white border border-[#f2295b] px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(242,41,91,0.4)] animate-pulse">
              Atenção
            </span>
            <p className="font-dmsans text-gray-200 text-[10px] sm:text-[12px] font-bold uppercase tracking-wide leading-tight">
              Para vendedores, empresários e profissionais que cansaram de ouvir "vou pensar"...
            </p>
         </div>
      </div>
    </div>
  );
};

export default TopNoticeBar;
