
import React from 'react';
import { Check, ShieldCheck, Zap, Lock, Star, Plus } from 'lucide-react';
import CTAButton from './CTAButton';

const stack = [
  { text: "Fechamento Brutal® — 10 módulos completos", value: "R$ 997", type: "core" },
  { text: "Teatro de Vendas® — fechamentos reais sem cortes", value: "R$ 297", type: "core" },
  { text: "Cronograma de Implementação 30 Dias", value: "R$ 97", type: "material" },
  { text: "4 Manuais Táticos em PDF + Mapa Mental", value: "R$ 97", type: "material" },
  { text: "Kit de Treinamento de Equipes (Slides Oficiais)", value: "R$ 197", type: "material" },
  { text: "Bônus 01 a 06 (Checklists + Guias + Roteiros)", value: "R$ 532", type: "bonus" },
  { text: "Superbônus: Sala de Guerra (WhatsApp + IA 24h + Suporte)", value: "R$ 297", type: "super" },
];

const OfferSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,114,20,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#FF7214]/5 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-12 space-y-4">
            <span className="inline-block py-1 px-3 rounded bg-[#FF7214]/10 border border-[#FF7214]/20 text-[#FF7214] font-dmsans font-bold text-[12px] uppercase tracking-widest">
                TUDO QUE VOCÊ LEVA HOJE
            </span>
            
            <h2 className="font-lato font-black text-white text-[32px] sm:text-[42px] md:text-[50px] leading-[1.1]">
                Uma decisão. Um método. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9E42] to-[#FF7214]">Resultados em 30 dias.</span>
            </h2>
            
            <p className="font-opensans text-gray-400 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto">
                Isso não é mais um curso de vendas. É o sistema completo para fechar mais, com confiança, do jeito certo.
            </p>
        </div>

        {/* Offer Card */}
        <div className="bg-[#141414] border border-[#FF7214]/30 rounded-3xl overflow-hidden shadow-[0_0_50px_-10px_rgba(255,114,20,0.15)] relative">
            
            {/* Top Badge */}
            <div className="bg-gradient-to-r from-[#FF9E42] to-[#FF7214] py-3 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine" />
                <p className="relative z-10 text-white font-dmsans font-bold uppercase tracking-widest text-[13px] flex items-center justify-center gap-2">
                    <Star className="fill-white text-white" size={14} />
                    Oferta Exclusiva por Tempo Limitado
                    <Star className="fill-white text-white" size={14} />
                </p>
            </div>

            <div className="p-6 md:p-10 lg:p-12 flex flex-col md:flex-row gap-10 md:gap-16">
                
                {/* Left Column: The Stack */}
                <div className="flex-1">
                    <h3 className="text-white font-lato font-bold text-[20px] mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-[#FF7214] rounded-full" />
                        O que está incluso:
                    </h3>

                    <div className="space-y-4">
                        {stack.map((item, idx) => (
                            <div key={idx} className="group flex items-start justify-between gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                                <div className="flex items-start gap-3">
                                    <div className={`
                                        mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 
                                        ${item.type === 'super' ? 'bg-red-500 text-white shadow-[0_0_10px_#ef4444]' : 
                                        item.type === 'core' ? 'bg-[#FF7214] text-white' : 'bg-[#1C1C1C] border border-white/20 text-gray-400'}
                                    `}>
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    <span className={`
                                        font-opensans text-[14px] md:text-[15px] leading-snug
                                        ${item.type === 'super' ? 'text-white font-bold' : 
                                        item.type === 'core' ? 'text-white font-medium' : 'text-gray-300'}
                                    `}>
                                        {item.text}
                                    </span>
                                </div>
                                
                                {/* Individual Value */}
                                <div className="hidden sm:block shrink-0 text-right">
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold block">Valor</span>
                                    <span className="text-[13px] text-gray-400 font-mono decoration-red-500/30 line-through decoration-2 opacity-60">
                                        {item.value}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between sm:justify-end gap-3 text-right">
                        <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Valor Total do Pacote:</span>
                        <span className="text-white/50 text-lg font-bold line-through decoration-red-500 decoration-2">R$ 2.514,00</span>
                    </div>
                </div>

                {/* Right Column: Pricing & CTA */}
                <div className="w-full md:w-[380px] shrink-0 flex flex-col justify-center relative">
                    {/* Divider for Mobile */}
                    <div className="md:hidden w-full h-px bg-white/10 my-6" />

                    <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 relative overflow-hidden text-center group hover:border-[#FF7214]/20 transition-colors duration-300">
                        
                        {/* Glow Effect */}
                        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#FF7214]/10 rounded-full blur-[60px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <p className="font-dmsans text-gray-400 text-[13px] font-bold uppercase tracking-widest mb-2">
                                Você paga hoje apenas
                            </p>
                            
                            <div className="mb-6">
                                <span className="inline-block text-[12px] text-[#0F9D58] font-bold uppercase tracking-wide bg-[#0F9D58]/10 py-1 px-3 rounded-full border border-[#0F9D58]/20 mb-3">
                                    Economia de R$ 2.317,00
                                </span>
                                <div className="flex items-end justify-center gap-1 leading-none text-white font-lato">
                                    <span className="text-[24px] font-medium mb-1.5 opacity-80">12x de</span>
                                    <span className="text-[56px] font-black tracking-tighter text-[#FF7214] drop-shadow-[0_0_15px_rgba(255,114,20,0.3)]">20,34</span>
                                </div>
                                <p className="text-gray-400 text-[14px] mt-2 font-medium">
                                    ou <strong className="text-white">R$ 197,00</strong> à vista
                                </p>
                            </div>

                            <div className="mt-8">
                                <CTAButton text="GARANTIR MINHA VAGA AGORA" />
                            </div>

                            <div className="mt-5 flex flex-col items-center gap-2.5">
                                <div className="flex items-center gap-1.5 text-gray-500 text-[11px] font-medium bg-black/20 px-3 py-1.5 rounded-full border border-white/5">
                                    <Lock size={12} className="text-[#0F9D58]" />
                                    <span>Pagamento 100% Seguro</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-gray-500 text-[11px] font-medium">
                                    <Zap size={12} className="text-[#FF7214]" />
                                    <span>Acesso Imediato ao Curso</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Bottom Guarantee Strip */}
            <div className="bg-[#111] py-4 px-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center sm:text-left">
                <div className="flex items-center gap-2 text-gray-400 group cursor-default">
                    <ShieldCheck className="text-[#0F9D58] group-hover:scale-110 transition-transform" size={20} />
                    <span className="text-[13px] font-medium group-hover:text-white transition-colors">Garantia Incondicional de 30 Dias</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-white/10" />
                <p className="text-[13px] text-gray-500">
                    Risco Zero. Se não gostar, devolvemos seu dinheiro.
                </p>
            </div>

        </div>

      </div>
    </section>
  );
};

export default OfferSection;
