
import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';

const ThreePathsSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      
      {/* Background Decor - Clean & Subtle */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF7214]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        
        {/* Header - Simplified */}
        <div className="text-center mb-16 md:mb-20">
            <h2 className="font-lato font-black text-white text-[32px] sm:text-[40px] md:text-[48px] leading-tight mb-4">
                Você tem <span className="text-[#FF7214]">3 escolhas</span> agora.
            </h2>
            <p className="font-opensans text-gray-500 text-[16px] md:text-[18px]">
                Apenas uma delas coloca dinheiro no seu bolso em 30 dias.
            </p>
        </div>

        {/* Paths Grid - Visual Hierarchy Cleanup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 items-start">
            
            {/* Path 1: Faded / Negative Space */}
            <div className="group p-8 rounded-2xl border border-dashed border-white/10 hover:border-white/20 transition-colors opacity-60 hover:opacity-100">
                <div className="flex items-center gap-3 mb-4 text-gray-500 group-hover:text-gray-300 transition-colors">
                    <XCircle size={20} />
                    <h3 className="font-bold text-[18px] font-lato uppercase tracking-wide">
                        Ignorar tudo
                    </h3>
                </div>
                <p className="text-gray-600 group-hover:text-gray-400 text-[15px] leading-relaxed mb-4 transition-colors">
                    Continuar fazendo exatamente o que faz hoje. O mesmo script, as mesmas objeções, a mesma frustração no fim do mês.
                </p>
                <p className="text-[13px] font-bold text-gray-700 uppercase tracking-wider">
                    Resultado: Nada muda.
                </p>
            </div>

            {/* Path 2: Faded / Negative Space */}
            <div className="group p-8 rounded-2xl border border-dashed border-white/10 hover:border-white/20 transition-colors opacity-60 hover:opacity-100">
                <div className="flex items-center gap-3 mb-4 text-gray-500 group-hover:text-gray-300 transition-colors">
                    <XCircle size={20} />
                    <h3 className="font-bold text-[18px] font-lato uppercase tracking-wide">
                        Tentar Sozinho
                    </h3>
                </div>
                <p className="text-gray-600 group-hover:text-gray-400 text-[15px] leading-relaxed mb-4 transition-colors">
                    Passar anos testando dicas gratuitas da internet, errando com clientes reais e perdendo vendas valiosas por falta de técnica.
                </p>
                <p className="text-[13px] font-bold text-gray-700 uppercase tracking-wider">
                    Resultado: Tempo e Dinheiro perdidos.
                </p>
            </div>

            {/* Path 3 (Recommended): The Hero Card */}
            <div className="relative bg-[#141414] rounded-2xl p-8 md:p-10 flex flex-col shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-[#FF7214] transform md:-translate-y-6 md:scale-105 z-10">
                
                {/* Glow Behind */}
                <div className="absolute inset-0 bg-[#FF7214]/5 blur-xl rounded-2xl -z-10" />

                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#FF7214] flex items-center justify-center text-white shadow-lg shadow-[#FF7214]/40">
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <span className="block text-[10px] font-bold text-[#FF7214] uppercase tracking-widest mb-0.5">
                            Caminho Comprovado
                        </span>
                        <h3 className="text-white font-bold text-[22px] font-lato leading-none">
                            Aplicar o Método
                        </h3>
                    </div>
                </div>

                <p className="text-gray-300 text-[16px] leading-relaxed mb-8">
                    Copiar e colar o processo de quem já formou 15.000 vendedores. Ter o script, a técnica e o suporte para fechar vendas todo santo dia.
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/10">
                     <div className="flex items-center justify-between">
                        <span className="text-[13px] font-bold text-gray-400 uppercase tracking-wide">
                            Resultado:
                        </span>
                        <span className="text-[14px] font-bold text-white flex items-center gap-2">
                            Lucro e Previsibilidade <ArrowRight size={14} className="text-[#FF7214]" />
                        </span>
                     </div>
                </div>
            </div>

        </div>

        {/* Footer CTA */}
        <div className="flex flex-col items-center">
             <CTAButton text="QUERO O CAMINHO COMPROVADO" />
        </div>

      </div>
    </section>
  );
};

export default ThreePathsSection;
