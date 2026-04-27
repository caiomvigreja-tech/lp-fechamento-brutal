
import React from 'react';
import { CheckSquare, Filter, RefreshCw, ShieldAlert, Users, BookOpen, Lock } from 'lucide-react';
import CTAButton from './CTAButton';

const bonuses = [
  {
    id: 1,
    title: "Kit Operação Brutal® — O Ciclo Completo",
    subtitle: "3 Checklists Exclusivas",
    description: "Preparação Pré-Reunião. Qualificação de Leads. Protocolo de Pós-Venda. Antes, durante e depois — cada passo coberto. Imprima. Cole na parede. Use antes de cada negociação.",
    type: "checklist",
    accent: "text-blue-400",
    bg: "bg-blue-500"
  },
  {
    id: 2,
    title: "Decodificador de Perfis®",
    subtitle: "Negociação por Tipo de Cliente",
    description: "Identifique o perfil do cliente nos primeiros 60 segundos e adapte tom, argumento e ritmo automaticamente. Não existe cliente difícil — existe cliente que você não sabe ler.",
    type: "disc",
    accent: "text-yellow-400",
    bg: "bg-yellow-500"
  },
  {
    id: 3,
    title: "Guia Anti-Objeções®",
    subtitle: "Respostas Prontas para Fechar na Hora",
    description: "O guia com respostas prontas para as objeções mais comuns do mercado. \"Tá caro\", \"vou pensar\", \"preciso falar com meu sócio\" — abra no celular, leia a resposta, entre preparado.",
    type: "pocket",
    accent: "text-red-400",
    bg: "bg-red-500"
  }
];

const BonusSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#121212] overflow-hidden border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,114,20,0.05)_0%,transparent_40%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
            <span className="inline-block py-1 px-3 rounded bg-[#FF7214]/10 border border-[#FF7214]/20 text-[#FF7214] font-dmsans font-bold text-[12px] uppercase tracking-widest">
                BÔNUS EXCLUSIVOS
            </span>
            
            <h2 className="font-lato font-black text-white text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1]">
                3 ferramentas que eliminam <br className="hidden md:block" />
                os <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9E42] to-[#FF7214]">buracos do seu processo.</span>
            </h2>
            
            <p className="font-opensans text-gray-400 text-[16px] md:text-[18px] leading-relaxed">
                Cada bônus foi criado para resolver um problema específico que faz vendedores perderem dinheiro todos os dias.
            </p>
        </div>

        {/* Grid 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
                <div 
                    key={bonus.id}
                    className="group relative bg-[#1A1A1A] border border-white/5 rounded-2xl overflow-hidden hover:border-[#FF7214]/40 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-2xl"
                >
                    {/* Watermark Number */}
                    <span className="absolute top-2 right-4 text-[60px] font-black text-white/[0.03] font-lato pointer-events-none group-hover:text-white/[0.06] transition-colors">
                        {String(bonus.id).padStart(2, '0')}
                    </span>

                    {/* Visual Area (Top) */}
                    <div className="h-48 w-full bg-[#161616] border-b border-white/5 flex items-center justify-center relative overflow-hidden">
                        
                        {/* Glow */}
                        <div className={`absolute w-32 h-32 rounded-full blur-[60px] opacity-10 ${bonus.bg}`} />

                        {/* CSS MOCKUPS */}
                        <div className="transform transition-transform duration-500 group-hover:scale-105 z-10">
                            
                            {/* 1. Checklist Mockup (Kit Operação) */}
                            {bonus.type === 'checklist' && (
                                <div className="relative">
                                     {/* Stack of 3 sheets */}
                                     <div className="absolute top-0 left-0 w-28 aspect-[3/4] bg-white rounded-md shadow-lg rotate-[-10deg] border border-gray-300 transform -translate-x-2" />
                                     <div className="absolute top-0 left-0 w-28 aspect-[3/4] bg-white rounded-md shadow-lg rotate-[-5deg] border border-gray-300 transform -translate-x-1" />
                                     <div className="relative w-28 aspect-[3/4] bg-white rounded-md shadow-lg rotate-[0deg] transition-transform duration-300 flex flex-col items-center pt-3 border-t-4 border-blue-500">
                                         {/* Lines */}
                                        <div className="w-20 h-2 bg-gray-200 rounded-full mb-3 mt-2" />
                                        <div className="flex flex-col gap-2 w-full px-4">
                                            {[1,2,3,4].map(i => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <div className={`w-3 h-3 rounded border ${i <= 2 ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`} />
                                                    <div className="h-1.5 w-14 bg-gray-100 rounded-full" />
                                                </div>
                                            ))}
                                        </div>
                                         {/* Icon Badge */}
                                        <div className={`absolute bottom-2 right-2 p-1.5 rounded-full ${bonus.bg} text-white shadow-md`}>
                                            <CheckSquare size={12} />
                                        </div>
                                     </div>
                                </div>
                            )}

                            {/* 2. DISC Manual Mockup */}
                            {bonus.type === 'disc' && (
                                <div className="relative w-32 aspect-[4/3] bg-[#F5F5F5] rounded shadow-xl group-hover:rotate-2 transition-transform duration-300 flex overflow-hidden border border-gray-200">
                                    <div className="w-1/2 h-full bg-red-500/80" />
                                    <div className="w-1/2 h-full bg-yellow-500/80" />
                                    <div className="absolute bottom-0 w-1/2 h-1/2 bg-green-500/80" />
                                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500/80" />
                                    
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white px-3 py-1 rounded shadow-lg">
                                            <span className="font-black text-gray-800 text-[10px] tracking-[0.2em]">PERFIS</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                             {/* 3. Pocket Guide Mockup */}
                             {bonus.type === 'pocket' && (
                                <div className="relative w-24 aspect-[2/3] bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-xl rotate-[5deg] group-hover:rotate-0 transition-transform duration-300 flex flex-col items-center justify-center border-l border-white/20">
                                    <ShieldAlert className="text-white/20 w-12 h-12 absolute" />
                                    <div className="z-10 text-center">
                                        <div className="w-8 h-8 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-1 backdrop-blur-sm">
                                            <ShieldAlert size={14} className="text-white" />
                                        </div>
                                        <p className="text-[6px] text-white font-bold uppercase tracking-widest">Anti<br/>Objeção</p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Content Area (Bottom) */}
                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-lato font-bold text-white text-[18px] leading-tight mb-1 group-hover:text-[#FF7214] transition-colors">
                            {bonus.title}
                        </h3>
                        <p className="text-[12px] text-gray-400 font-bold uppercase tracking-wider mb-3">
                             {bonus.subtitle}
                        </p>
                        <p className="font-opensans text-gray-400 text-[14px] leading-relaxed mb-4 flex-1">
                            {bonus.description}
                        </p>
                        
                        {/* Tag */}
                        <div className="flex items-center gap-2 mt-auto">
                            <span className="inline-flex items-center px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold text-gray-300 uppercase tracking-wider">
                                <Lock size={10} className="mr-1 text-[#FF7214]" />
                                Bônus Exclusivo
                            </span>
                        </div>
                    </div>

                </div>
            ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
             <CTAButton text="GARANTIR TODOS OS BÔNUS" />
        </div>

      </div>
    </section>
  );
};

export default BonusSection;
