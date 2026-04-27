
import React, { useEffect, useState } from 'react';
import { Volume2, ChevronDown } from 'lucide-react';
import SocialProof from './SocialProof';

const VideoSection: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string>('about:blank');

  useEffect(() => {
    // 1. Injeta o script do SDK do player
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    script.async = true;
    document.head.appendChild(script);

    // 2. Constrói a URL do vídeo com os parâmetros de rastreamento (similar ao onload original)
    // Isso garante que UTMs e referência sejam passados para o player
    const baseUrl = 'https://scripts.converteai.net/c4de53d2-dafc-40ea-9bc4-b6440d19b7a7/players/67f35f4071ba9c27ad1298a7/v4/embed.html';
    const search = window.location.search || '?';
    const vl = encodeURIComponent(window.location.href);
    
    setVideoSrc(`${baseUrl}${search}&vl=${vl}`);

    return () => {
      // Opcional: limpeza se necessário
    };
  }, []);

  return (
    <section className="relative w-full bg-dark-bg px-6 pb-12 pt-16 md:pt-24 md:pb-20 border-t border-white/5">
      
      {/* Visual Separator & Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#FF7214]/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[40px] bg-[#FF7214]/10 blur-[30px] -translate-y-1/2 rounded-full pointer-events-none" />
      
      {/* Optional Down Arrow Indicator at the divider */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dark-bg p-1.5 rounded-full border border-white/5 text-gray-600">
        <ChevronDown size={14} />
      </div>

      {/* 
        Video Container
      */}
      <div className="relative z-20 w-full max-w-[800px] mx-auto">
        
        {/* Glow Effect behind the video */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#FF7214]/20 blur-[50px] rounded-full -z-10" />

        {/* Border Gradient Container */}
        <div className="p-[3px] rounded-2xl bg-gradient-to-br from-[#FF9E42] via-[#FF7214] to-[#f2295b] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]">
          {/* Inner Black Background */}
          <div className="bg-black rounded-xl overflow-hidden shadow-inner w-full relative">
             
             {/* VSL Player Integration */}
             <div id="ifr_67f35f4071ba9c27ad1298a7_wrapper" style={{ margin: '0 auto', width: '100%' }}>
                <div id="ifr_67f35f4071ba9c27ad1298a7_aspect" style={{ position: 'relative', padding: '56.25% 0 0 0' }}>
                  <iframe 
                    src={videoSrc}
                    id="ifr_67f35f4071ba9c27ad1298a7" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    allowFullScreen
                    frameBorder="0"
                    referrerPolicy="origin"
                    title="Fechamento Brutal VSL"
                  />
                </div>
             </div>

          </div>
        </div>

        {/* Sound Notice - Moved below video */}
        <div className="flex items-center justify-center gap-2 mt-4 text-white/80 font-dmsans font-bold text-[11px] sm:text-[13px] tracking-[0.2em] uppercase">
          <Volume2 className="text-[#FF7214] w-4 h-4 sm:w-5 sm:h-5 animate-pulse" fill="currentColor" />
          <span>Por favor, ligue o som</span>
        </div>

      </div>

      {/* Headline below the video (First) */}
      <div className="mt-8 md:mt-10 text-center w-full max-w-[900px] mx-auto px-4">
        <h2 className="font-lato font-bold text-white text-[18px] xs:text-[20px] sm:text-[24px] md:text-[32px] leading-snug md:leading-[1.3] drop-shadow-lg">
          <span className="block">
            Vender não é um dom. <span className="text-gray-300 font-normal whitespace-nowrap">É um método.</span>
          </span>
          <span className="block bg-gradient-to-r from-[#FF9E42] to-[#FF7214] bg-clip-text text-transparent font-extrabold mt-1 md:mt-2">
            E você está prestes a <span className="whitespace-nowrap">conhecê-lo.</span>
          </span>
        </h2>
        
        <div className="mt-6 w-24 h-1 bg-[#333] mx-auto rounded-full" />
      </div>

      {/* Social Proof (Second) */}
      <div className="mt-8 flex justify-center w-full">
        <SocialProof />
      </div>

    </section>
  );
};

export default VideoSection;
