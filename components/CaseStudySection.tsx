
import React, { useEffect, useState, useRef } from 'react';
import { Star, TrendingUp, ArrowRight, Quote } from 'lucide-react';

// --- Helper Component for Animated Numbers ---
const AnimatedCounter: React.FC<{ 
  end: number; 
  duration?: number; 
}> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Easing function (Out Quart)
      const percentage = 1 - Math.pow(1 - Math.min(progress / duration, 1), 4);
      
      setCount(Math.round(percentage * end));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, end, duration]);

  return (
    <span ref={countRef}>
      {count}
    </span>
  );
};

const CaseStudySection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-28 px-6 overflow-hidden">
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Coluna Visual (Imagem + Card de Resultado) */}
        <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            {/* Imagem Principal */}
            <div className="group relative w-full rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] z-10">
                {/* Overlay Darken (Hover Effect) */}
                <div className="absolute inset-0 bg-dark-bg/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                
                <img 
                  src="https://www.fechamentobrutal.com.br/wp-content/uploads/2025/12/A-equipe-da-Cobertura-DNews-acompanhou-na-tarde-de-quarta-feira-08-05-a-inauguracao-da-nova-fi.jpg" 
                  alt="Equipe Solidy Dourados" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Legenda Overlay - Moved to TOP */}
                <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent pb-16 pt-5 px-5 z-20 pointer-events-none">
                    <p className="text-white/90 text-[10px] sm:text-[11px] font-opensans font-medium leading-tight text-center sm:text-left">
                        Inauguração da nova filial da Solidy em Dourados/MS <span className="text-white/60 ml-1 font-light block sm:inline mt-1 sm:mt-0">– Crédito: Dourados News</span>
                    </p>
                </div>
            </div>

            {/* 
               Elemento Visual: Card Flutuante de Resultado 
               Mobile: Negative margin (-mt-8) to overlap bottom of image
               Desktop: Absolute positioning overlapping corner
            */}
            <div className="relative z-30 -mt-8 ml-auto mr-4 md:mt-0 md:absolute md:-bottom-8 md:-right-10 bg-white p-5 md:p-6 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-gray-100 max-w-[260px] md:max-w-[280px] hover:-translate-y-1 transition-transform duration-500">
                <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                    <div className="flex items-center gap-2">
                        <span className="text-[12px] uppercase font-bold text-gray-400 tracking-wider">Crescimento</span>
                        <span className="bg-[#0F9D58]/10 text-[#0F9D58] border border-[#0F9D58]/20 text-[10px] font-bold px-1.5 py-0.5 rounded">4x mais</span>
                    </div>
                    <TrendingUp className="text-[#FF7214] w-5 h-5 animate-pulse" />
                </div>
                <div className="flex items-end gap-3">
                    <div>
                        <span className="block text-[11px] text-gray-400 font-semibold mb-0.5">Antes</span>
                        <span className="text-[18px] font-bold text-gray-400 font-lato">
                            50
                        </span>
                    </div>
                    <div className="mb-1.5">
                         <ArrowRight className="w-5 h-5 text-gray-300" />
                    </div>
                    <div>
                        <span className="block text-[11px] text-[#FF7214] font-bold mb-0.5 uppercase">Depois</span>
                        <span className="text-[32px] font-black text-dark-bg leading-none font-lato">
                            <AnimatedCounter end={200} duration={2000} />
                        </span>
                    </div>
                </div>
                <div className="mt-3 pt-2 bg-gray-50 rounded-lg px-2 py-1 text-center">
                   <span className="text-[12px] font-bold text-dark-bg">Contratos / mês</span>
                </div>
            </div>
        </div>

        {/* Coluna de Conteúdo */}
        <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 md:space-y-8 order-1 lg:order-2">
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FF7214]/10 border border-[#FF7214]/20">
                <span className="text-[#FF7214] font-dmsans font-bold text-[11px] sm:text-[12px] uppercase tracking-widest">
                    Resultado Comprovado
                </span>
            </div>

            {/* Headline e Subheadline */}
            <div className="space-y-4 md:space-y-5">
              {/* Headline Aumentada no Mobile */}
              <h2 className="font-lato font-black text-dark-bg text-[40px] leading-[1.05] tracking-tight sm:text-[38px] lg:text-[44px] md:leading-[1.05]">
                  De <span className="text-gray-300 line-through decoration-brand-red decoration-4">50</span> para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9E42] to-[#f2295b]">200 contratos</span> em apenas 30 dias.
              </h2>

              {/* Subheadline Reduzida no Mobile para caber em ~4 linhas */}
              <p className="font-opensans text-gray-600 text-[15px] sm:text-[19px] leading-[1.6] sm:leading-relaxed">
                  O mesmo time, o mesmo produto, o mesmo mercado. <strong className="text-dark-bg">A única diferença foi o método.</strong> Veja como uma equipe comum se tornou uma máquina de vendas.
              </p>
            </div>

            {/* Card de Depoimento (Separado do Fundo) */}
            <div className="w-full mt-2 relative bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                
                {/* Ícone de Citação Decorativo */}
                <Quote className="absolute top-6 right-6 text-gray-200 w-8 h-8 md:w-10 md:h-10 fill-current" />

                <div className="flex gap-1 mb-4 relative z-10">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} className="fill-[#FFB800] text-[#FFB800]" />
                    ))}
                </div>

                <blockquote className="font-opensans text-dark-bg text-[15px] md:text-[16px] italic leading-[1.6] mb-6 font-medium relative z-10">
                    "No primeiro mês, saltamos de 50 para 200 contratos. O resultado foi rápido. Hoje usamos o Fechamento Brutal para treinar todos os vendedores."
                </blockquote>

                {/* Autor */}
                <div className="flex items-center gap-5 relative z-10 pt-5 border-t border-gray-200/60">
                    <div className="relative shrink-0">
                        <img 
                            src="https://www.fechamentobrutal.com.br/wp-content/uploads/2025/09/Ian.jpg"
                            alt="Ian Oliveira Maciel"
                            className="relative w-[85px] h-[85px] md:w-[110px] md:h-[110px] object-cover rounded-full border-[4px] border-white shadow-lg"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <strong className="text-dark-bg font-lato text-[18px] md:text-[20px] font-black leading-tight">
                            Ian Oliveira Maciel
                        </strong>
                        <span className="text-gray-600 font-dmsans text-[14px] md:text-[15px] font-semibold tracking-wide mt-1">
                            Diretor Comercial
                        </span>
                        <div className="flex items-center gap-1.5 mt-1">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#FF7214]" />
                             <span className="text-[#FF7214] font-dmsans text-[11px] md:text-[12px] font-bold uppercase tracking-widest">
                                Solidy Benefícios
                             </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>

      </div>
    </section>
  );
};

export default CaseStudySection;
