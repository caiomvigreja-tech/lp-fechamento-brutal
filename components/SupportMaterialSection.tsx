
import React from 'react';
import { CalendarCheck, FileText, Award, Presentation, CheckCircle2 } from 'lucide-react';
import CTAButton from './CTAButton';

const items = [
  {
    id: 'cronograma',
    title: "Cronograma de Implementação — 30 Dias",
    description: "O calendário tático que transforma o curso em resultado. Dia 1: o que fazer. Dia 30: colher resultados. Sem \"por onde começo?\". Você acorda, olha o cronograma, executa. Em 4 semanas, o método está rodando no seu processo de vendas.",
    icon: CalendarCheck,
    accent: "text-blue-400",
    bgGradient: "from-blue-600/20 to-blue-900/5",
    visualType: 'calendar'
  },
  {
    id: 'manuais',
    title: "Manuais Táticos — Resumos em PDF por Módulo",
    description: "Resumos de cada módulo para revisão rápida e fixação do conteúdo. Relembre uma técnica em 2 minutos antes de entrar na reunião de vendas. Para quando você precisar de consulta rápida sem precisa reassistir a aula inteira.",
    icon: FileText,
    accent: "text-emerald-400",
    bgGradient: "from-emerald-600/20 to-emerald-900/5",
    visualType: 'manuals'
  },
  {
    id: 'certificado',
    title: "Certificado de Conclusão",
    description: "Comprove sua habilidade como closer de vendas com um certificado válido em todo o Brasil. Inclua no seu currículo, ou LinkedIn, como prova de investimento e capacitação.",
    icon: Award,
    accent: "text-yellow-400",
    bgGradient: "from-yellow-600/20 to-yellow-900/5",
    visualType: 'certificate'
  },
  {
    id: 'slides',
    title: "Kit Treinamento de Equipes® — Slides Oficiais",
    description: "Tudo pronto para treinar seu time. Chegue na segunda-feira, abra os slides, replique o método com seus vendedores. Sem montar apresentação do zero. Para gestores e empresários, só esse material já paga o investimento. São anos de experiência em vendas condensados em slides.",
    icon: Presentation,
    accent: "text-[#FF7214]",
    bgGradient: "from-[#FF7214]/20 to-[#FF7214]/5",
    visualType: 'slides'
  }
];

const SupportMaterialSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#141414] overflow-hidden border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-20 space-y-4">
            <span className="inline-block py-1 px-3 rounded bg-[#FF7214]/10 border border-[#FF7214]/20 text-[#FF7214] font-dmsans font-bold text-[12px] uppercase tracking-widest">
                MATERIAL DE APOIO
            </span>
            
            <h2 className="font-lato font-black text-white text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1]">
                O que você recebe <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9E42] to-[#f2295b]">além das aulas</span>
            </h2>
            
            <p className="font-opensans text-gray-400 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto">
                Ferramentas práticas para você sair da teoria e executar o método no dia seguinte.
            </p>
        </div>

        {/* Content Blocks (Zig-Zag) */}
        <div className="flex flex-col gap-24 md:gap-32">
            {items.map((item, index) => (
                <div 
                    key={item.id}
                    className={`flex flex-col lg:items-center gap-10 md:gap-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                    
                    {/* Visual / Mockup Side */}
                    <div className="w-full lg:w-1/2">
                        <div className={`
                            relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] 
                            bg-gradient-to-br ${item.bgGradient} 
                            rounded-2xl border border-white/10 overflow-hidden shadow-2xl 
                            group hover:scale-[1.02] transition-transform duration-500
                        `}>
                            
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] opacity-50" />

                            {/* --- CSS MOCKUPS --- */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                
                                {/* 1. CALENDAR MOCKUP */}
                                {item.visualType === 'calendar' && (
                                    <div className="relative w-[60%] aspect-[4/3] bg-[#F5F5F5] rounded-lg shadow-2xl transform rotate-[-3deg] group-hover:rotate-0 transition-all duration-500 flex flex-col border border-gray-300">
                                        <div className="h-10 bg-blue-600 rounded-t-lg w-full flex items-center px-4">
                                            <div className="w-2 h-2 rounded-full bg-white/50 mr-2" />
                                            <div className="w-2 h-2 rounded-full bg-white/50 mr-2" />
                                            <div className="w-16 h-1.5 bg-white/30 rounded-full ml-auto" />
                                        </div>
                                        <div className="flex-1 p-4 grid grid-cols-7 gap-2 content-start">
                                            <div className="col-span-7 h-4 bg-gray-200 rounded mb-2 w-1/3" />
                                            {[...Array(20)].map((_, i) => (
                                                <div key={i} className={`aspect-square rounded ${i % 3 === 0 ? 'bg-blue-100 border border-blue-200' : 'bg-gray-100'}`} />
                                            ))}
                                            {/* Floating Check */}
                                            <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg text-blue-600">
                                                <CalendarCheck size={24} />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* 2. MANUALS MOCKUP */}
                                {item.visualType === 'manuals' && (
                                    <div className="relative w-[50%]">
                                        {/* Paper 1 */}
                                        <div className="absolute top-0 left-0 w-full aspect-[3/4] bg-gray-800 rounded-lg shadow-xl transform rotate-[-6deg] border border-white/10" />
                                        {/* Paper 2 */}
                                        <div className="absolute top-0 left-0 w-full aspect-[3/4] bg-gray-800 rounded-lg shadow-xl transform rotate-[-3deg] border border-white/10" />
                                        {/* Main Paper */}
                                        <div className="relative w-full aspect-[3/4] bg-[#1a1a1a] rounded-lg shadow-2xl border border-emerald-500/30 flex flex-col items-center pt-8 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                                            <div className="w-12 h-12 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-4">
                                                <FileText size={24} />
                                            </div>
                                            <div className="w-20 h-2 bg-gray-700 rounded mb-2" />
                                            <div className="w-12 h-2 bg-gray-800 rounded mb-8" />
                                            <div className="w-[70%] space-y-2">
                                                <div className="h-1 bg-white/10 rounded w-full" />
                                                <div className="h-1 bg-white/10 rounded w-full" />
                                                <div className="h-1 bg-white/10 rounded w-3/4" />
                                            </div>
                                            <div className="mt-auto mb-6 px-3 py-1 bg-emerald-500/10 rounded border border-emerald-500/20 text-[8px] text-emerald-400 font-bold uppercase">
                                                Módulo 04
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* 3. CERTIFICATE MOCKUP */}
                                {item.visualType === 'certificate' && (
                                    <div className="relative w-[75%] aspect-[1.4] bg-[#FFF] rounded border-[6px] border-[#1C1C1C] outline outline-2 outline-yellow-600 shadow-2xl flex flex-col items-center justify-center p-6 text-center transform group-hover:scale-105 transition-transform duration-500">
                                        {/* Corner Ornaments */}
                                        <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-yellow-600" />
                                        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-yellow-600" />
                                        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-yellow-600" />
                                        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-yellow-600" />
                                        
                                        <div className="mb-2 text-[#1C1C1C] font-serif font-bold uppercase text-[10px] tracking-[0.2em]">Certificado de Conclusão</div>
                                        <div className="w-full h-px bg-gray-200 mb-4" />
                                        <div className="font-script text-[#1C1C1C] text-[18px] mb-4 italic font-serif">Seu Nome Aqui</div>
                                        <div className="text-gray-500 text-[8px] uppercase font-bold tracking-widest mb-4">Fechamento Brutal Especialista</div>
                                        
                                        {/* Seal */}
                                        <div className="absolute bottom-4 right-6 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-300 border-dashed">
                                            <Award className="text-white w-6 h-6" />
                                        </div>
                                    </div>
                                )}

                                {/* 4. SLIDES MOCKUP */}
                                {item.visualType === 'slides' && (
                                    <div className="relative w-[70%] aspect-video bg-[#000] rounded-lg border border-white/20 shadow-2xl flex flex-col overflow-hidden transform group-hover:rotate-0 rotate-2 transition-all duration-500">
                                        <div className="h-4 bg-[#222] flex items-center px-2 gap-1 border-b border-white/10">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                        </div>
                                        <div className="flex-1 p-6 flex flex-col">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 bg-[#FF7214] rounded flex items-center justify-center">
                                                    <Presentation className="text-white w-4 h-4" />
                                                </div>
                                                <div className="text-white font-bold text-[12px] uppercase tracking-wide">
                                                    Kit Treinamento de Equipes
                                                </div>
                                            </div>
                                            <div className="flex-1 grid grid-cols-2 gap-4">
                                                <div className="bg-white/10 rounded h-full animate-pulse" />
                                                <div className="space-y-2">
                                                    <div className="h-2 bg-white/20 rounded w-full" />
                                                    <div className="h-2 bg-white/20 rounded w-3/4" />
                                                    <div className="h-2 bg-white/20 rounded w-1/2" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Slide Counter */}
                                        <div className="absolute bottom-2 right-3 text-[8px] text-gray-500 font-mono">
                                            SLIDE 12 / 45
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${item.accent}`}>
                                <item.icon size={24} />
                            </div>
                            <div className={`h-px flex-1 bg-gradient-to-r ${item.bgGradient} to-transparent opacity-50`} />
                        </div>
                        
                        <h3 className="font-lato font-bold text-white text-[24px] md:text-[28px] leading-tight mb-4">
                            {item.title}
                        </h3>
                        
                        <p className="font-opensans text-gray-400 text-[16px] leading-relaxed mb-6">
                            {item.description}
                        </p>

                        <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-gray-500">
                            <CheckCircle2 size={16} className={item.accent} />
                            <span>Incluso no Pacote</span>
                        </div>
                    </div>

                </div>
            ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center">
             <CTAButton text="QUERO ACESSO COMPLETO" />
        </div>

      </div>
    </section>
  );
};

export default SupportMaterialSection;
