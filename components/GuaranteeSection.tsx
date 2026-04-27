
import React from 'react';
import { ShieldCheck, RefreshCcw, CheckCircle2 } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#080808] overflow-hidden border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[400px] bg-[#FF7214]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* CARD 1: 7 DAYS (Standard) */}
          <div className="bg-[#141414] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors duration-300">
             
             {/* Icon Background */}
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />

             <div className="relative z-10">
                <div className="w-14 h-14 bg-[#1C1C1C] rounded-xl border border-white/10 flex items-center justify-center mb-8 shadow-lg">
                    <RefreshCcw className="text-[#0F9D58] w-7 h-7" />
                </div>

                <span className="inline-block py-1 px-3 rounded bg-[#0F9D58]/10 border border-[#0F9D58]/20 text-[#0F9D58] font-dmsans font-bold text-[11px] uppercase tracking-widest mb-4">
                    GARANTIA INCONDICIONAL — 7 DIAS
                </span>

                <h3 className="font-lato font-bold text-white text-[24px] md:text-[28px] leading-tight mb-4">
                    Não gostou por qualquer motivo. Sem explicar nada.
                </h3>

                <p className="font-opensans text-gray-400 text-[15px] leading-relaxed mb-6">
                    Manda uma mensagem e devolvo 100% do seu dinheiro em até 7 dias úteis. Sem perguntas. Sem burocracia. É lei — e eu respeito.
                </p>

                <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 text-gray-500 text-[13px] font-medium">
                        <CheckCircle2 size={16} className="text-[#0F9D58]" />
                        <span>Risco Zero para você testar.</span>
                    </div>
                </div>
             </div>
          </div>

          {/* CARD 2: 30 DAYS (Brutal/Bold) */}
          <div className="bg-[#141414] border border-[#FF7214]/30 rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden shadow-[0_0_40px_-10px_rgba(255,114,20,0.1)] group">
             
             {/* Glow Effect */}
             <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FF7214] to-transparent opacity-50" />
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#FF7214]/10 rounded-full blur-[60px]" />

             <div className="relative z-10">
                <div className="w-14 h-14 bg-[#1C1C1C] rounded-xl border border-[#FF7214]/30 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,114,20,0.15)]">
                    <ShieldCheck className="text-[#FF7214] w-7 h-7" />
                </div>

                <span className="inline-block py-1 px-3 rounded bg-[#FF7214]/10 border border-[#FF7214]/20 text-[#FF7214] font-dmsans font-bold text-[11px] uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(255,114,20,0.2)]">
                    GARANTIA 10X BRUTAL — 30 DIAS
                </span>

                <h3 className="font-lato font-bold text-white text-[24px] md:text-[28px] leading-tight mb-4">
                    Essa não é uma garantia comum.
                </h3>

                <p className="font-opensans text-gray-300 text-[15px] leading-relaxed mb-4">
                    Não estou só dizendo que você pode pedir o dinheiro de volta. Estou dizendo que, se você aplicar o método por 30 dias e não faturar pelo menos <strong className="text-white">R$ 1.970</strong> — 10 vezes o que investiu —, eu devolvo os seus R$ 197.
                </p>
                <p className="font-opensans text-gray-300 text-[15px] leading-relaxed mb-6">
                    Integrais. Sem perguntas. Sem burocracia. <br />
                    <span className="text-[#FF7214] font-bold">Simples assim: ou o método funciona para você, ou eu pago a conta.</span>
                </p>

                <div className="mt-auto pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 text-gray-400 text-[13px] font-medium">
                        <ShieldCheck size={16} className="text-[#FF7214]" />
                        <span>Compromisso público de resultado.</span>
                    </div>
                </div>
             </div>
          </div>

        </div>

        {/* Legal Disclaimer / Trust Footer */}
        <div className="mt-12 text-center">
            <p className="text-gray-600 text-[12px] max-w-2xl mx-auto">
                * A garantia de 30 dias requer comprovação de aplicação do método (exercícios e tentativas reais de venda) conforme descrito nos termos de uso. A garantia de 7 dias é incondicional.
            </p>
        </div>

      </div>
    </section>
  );
};

export default GuaranteeSection;
