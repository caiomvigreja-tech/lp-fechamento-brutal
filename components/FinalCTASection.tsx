
import React from 'react';
import { ShieldCheck, Zap, CreditCard, AlertTriangle } from 'lucide-react';
import CTAButton from './CTAButton';

const FinalCTASection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#000] overflow-hidden border-t border-white/5">
       {/* Background Effects */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,114,20,0.15)_0%,transparent_60%)] pointer-events-none" />
       
       <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 text-center">
          
          <span className="inline-block py-1 px-3 rounded bg-white/5 border border-white/10 text-white/70 font-dmsans font-bold text-[12px] uppercase tracking-widest mb-6">
             A DECISÃO É AGORA
          </span>

          <h2 className="font-lato font-black text-white text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] mb-6">
             Você pode continuar improvisando. <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9E42] to-[#FF7214]">Ou pode fechar com método.</span>
          </h2>

          <div className="font-opensans text-gray-400 text-[16px] md:text-[18px] leading-relaxed space-y-4 mb-10 max-w-2xl mx-auto">
             <p>
                Todo dia que passa sem o método é um dia de negociação perdida, de cliente que disse "vou pensar" e nunca voltou, de dinheiro que ficou na mesa.
             </p>
             <p className="text-white font-medium">
                Por <span className="text-[#FF7214] font-bold">R$ 197,00</span> você leva o curso completo, os materiais, os bônus, a Sala de Guerra e 30 dias de garantia. Sem risco. Sem desculpa.
             </p>
          </div>

          <div className="flex flex-col items-center gap-2 mb-10">
              <div className="flex items-center gap-2 text-[#FF4B4B] font-bold font-dmsans text-[13px] uppercase tracking-widest animate-pulse">
                  <AlertTriangle size={16} />
                  <span>As vagas para esta turma são limitadas</span>
              </div>
          </div>

          <div className="flex flex-col items-center">
             <CTAButton text="GARANTIR MINHA VAGA AGORA" />
             
             <div className="flex flex-wrap justify-center gap-4 mt-6 text-[12px] text-gray-500 font-medium font-dmsans uppercase tracking-wide">
                <span className="flex items-center gap-1.5"><Zap size={14} className="text-[#FF7214]" /> Acesso imediato</span>
                <span className="hidden sm:inline text-gray-700">•</span>
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#0F9D58]" /> Garantia de 30 dias</span>
                <span className="hidden sm:inline text-gray-700">•</span>
                <span className="flex items-center gap-1.5"><CreditCard size={14} className="text-blue-500" /> Parcele em até 12x</span>
             </div>
          </div>

       </div>
    </section>
  );
};

export default FinalCTASection;
