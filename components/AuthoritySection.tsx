
import React from 'react';

const LOGO_URL = "https://www.fechamentobrutal.com.br/wp-content/uploads/2025/08/Logo-FB.png";

const AuthoritySection: React.FC = () => {
  return (
    <section className="relative w-full py-10 md:py-12 bg-gradient-to-r from-[#FF9E42] to-[#FF7214] overflow-hidden">
      
      {/* Background Decor: Subtle Top Highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      
      {/* Background Decor: Radial Glow for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      {/* --- LOGO INTEGRATION (Watermark) --- */}
      {/* Placed centered behind the numbers, large and subtle to create texture/branding */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] opacity-[0.07] pointer-events-none select-none mix-blend-color-burn md:mix-blend-overlay">
          <img src={LOGO_URL} alt="" className="w-full h-auto" />
      </div>

      {/* Floating Particles Animation (New Dynamic Element) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" style={{ animationDuration: '4s' }} />
          <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-white/10 rounded-full animate-float" style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-float" style={{ animationDuration: '5s', animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-float" style={{ animationDuration: '7s', animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 gap-6 md:gap-0">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center text-center p-2 md:px-6 group hover:-translate-y-1 transition-transform duration-300">
            <div className="font-lato font-black text-white text-[36px] md:text-[42px] lg:text-[48px] leading-none drop-shadow-md group-hover:scale-105 transition-transform duration-300">
              <span>+15.000</span>
            </div>
            <p className="mt-2 font-dmsans font-bold text-white/90 text-[11px] md:text-[12px] uppercase tracking-[0.15em] group-hover:text-white transition-colors">
              Profissionais Treinados
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center text-center p-2 md:px-6 group hover:-translate-y-1 transition-transform duration-300">
            <div className="font-lato font-black text-white text-[36px] md:text-[42px] lg:text-[48px] leading-none drop-shadow-md group-hover:scale-105 transition-transform duration-300">
               <span>+50 milhões</span>
            </div>
            <p className="mt-2 font-dmsans font-bold text-white/90 text-[11px] md:text-[12px] uppercase tracking-[0.15em] group-hover:text-white transition-colors">
              Em novos negócios
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center text-center p-2 md:px-6 group hover:-translate-y-1 transition-transform duration-300">
            <div className="font-lato font-black text-white text-[36px] md:text-[42px] lg:text-[48px] leading-none drop-shadow-md group-hover:scale-105 transition-transform duration-300">
              <span>+30</span>
            </div>
            <p className="mt-2 font-dmsans font-bold text-white/90 text-[11px] md:text-[12px] uppercase tracking-[0.15em] group-hover:text-white transition-colors">
              Setores Atendidos
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
