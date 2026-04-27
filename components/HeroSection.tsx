
import React from 'react';
import { ShieldCheck, Zap, Award } from 'lucide-react';
import CTAButton from './CTAButton';
import GradientText from './GradientText';

// Assets from the JSON
const DESKTOP_BG_IMAGE = "https://www.fechamentobrutal.com.br/wp-content/uploads/2025/12/Fundo4-Topaz-Gigapixel-escala-2x.webp";
const MOBILE_BG_IMAGE = "https://www.fechamentobrutal.com.br/wp-content/uploads/2026/02/Hero-BG-.webp";
const LOGO_IMAGE = "https://www.fechamentobrutal.com.br/wp-content/uploads/2025/08/logoNEGATIVO-1-768x225.png.webp";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Mobile Background */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat md:hidden"
          style={{ 
            backgroundImage: `url(${MOBILE_BG_IMAGE})`,
            backgroundPosition: 'center top', // Adjusted to fix head touching top
          }}
        />
        {/* Desktop Background */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ 
            backgroundImage: `url(${DESKTOP_BG_IMAGE})`,
            backgroundPosition: 'top center',
          }}
        />
        
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-dark-bg/10" />
        {/* Gradient adjusted to ensure text legibility at the bottom of the mobile image */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/20 to-dark-bg" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] px-6 pt-[280px] pb-16 md:pt-32 md:pb-24 mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-8">
          
          {/* Left Column - Content */}
          <div className="w-full md:w-[65%] lg:w-[60%] flex flex-col items-center md:items-start text-center md:text-left space-y-8 md:space-y-10">
            
            {/* Logo */}
            <div className="w-32 sm:w-36 md:w-[180px] lg:w-[220px] transition-transform duration-500 hover:scale-105">
              <img 
                src={LOGO_IMAGE} 
                alt="Fechamento Brutal Logo" 
                className="w-full h-auto object-contain drop-shadow-lg"
                width={768}
                height={225}
              />
            </div>

            {/* Text Block Wrapper */}
            <div className="flex flex-col gap-4 md:gap-6 w-full">
              
              {/* Headline */}
              <h1 className="font-lato font-bold text-white text-[23px] sm:text-[30px] md:text-[38px] lg:text-[47px] leading-[1.15] tracking-tight drop-shadow-md">
                Nos próximos 30 dias, você vai <br className="hidden md:block" />
                <GradientText text="fechar mais vendas" /> do que <br className="hidden md:block" />
                fechou nos últimos 3 meses.
              </h1>

              {/* Sub-headline / Description */}
              <div className="font-opensans text-[14px] sm:text-[16px] md:text-[18px] font-normal text-gray-200 leading-relaxed max-w-prose md:max-w-[600px] text-pretty">
                <p>
                  O Fechamento Brutal® permite que qualquer pessoa, mesmo sem experiência em vendas, saiba negociar e fechar com naturalidade.
                </p>
                <p className="mt-2 text-white font-bold">
                  Sem frases prontas. Sem parecer insistente.
                </p>
              </div>
            </div>

            {/* CTA & Price Section */}
            <div className="flex flex-col items-center md:items-start w-full gap-5">
              <CTAButton text="QUERO VENDER MAIS" />
              
              {/* Trust Badges - Security & Guarantee - Changed icons to Brand Orange */}
              <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 pt-1 w-full max-w-[340px] md:max-w-none">
                <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <ShieldCheck className="w-4 h-4 text-[#FF7214]" />
                  <span className="text-[10px] sm:text-[11px] font-dmsans font-bold text-gray-300 uppercase tracking-wide">
                    Compra Segura
                  </span>
                </div>
                <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <Zap className="w-4 h-4 text-[#FF7214]" />
                  <span className="text-[10px] sm:text-[11px] font-dmsans font-bold text-gray-300 uppercase tracking-wide">
                    Acesso Imediato
                  </span>
                </div>
                <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <Award className="w-4 h-4 text-[#FF7214]" />
                  <span className="text-[10px] sm:text-[11px] font-dmsans font-bold text-gray-300 uppercase tracking-wide">
                    Garantia Brutal de 30 Dias
                  </span>
                </div>
              </div>

            </div>
            
          </div>

          {/* Right Column - Spacer to keep layout balanced on desktop */}
          <div className="hidden md:block w-full md:w-[35%] lg:w-[40%] relative min-h-[500px] pointer-events-none">
             {/* Spacer content intentionally empty */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
