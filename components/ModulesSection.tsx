
import React, { useRef } from 'react';
import { Map, Brain, Target, Users, Zap, Briefcase, Layers, Box, TvMinimalPlay, Library, ChevronLeft, ChevronRight, Lock, Clock, Timer, FileText, Presentation, MessageCircle, Award } from 'lucide-react';
import CTAButton from './CTAButton';

const modules = [
  {
    id: 1,
    title: "O Plano",
    icon: Map,
    description: "O diagnóstico inicial para identificar onde você está perdendo dinheiro e montar seu processo de venda lucrativo.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "A Anatomia da Decisão",
    icon: Brain,
    description: "Decodifique como funciona o cérebro do cliente no momento da compra  e use isso a seu favor para fechar mais rápido.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Da Prospecção ao Fechamento",
    icon: Target,
    description: "O ciclo completo da venda estruturado passo a passo. Da primeira mensagem até o \"sim\", sem pontas soltas, sem improviso.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Psicologia do Cliente & Perfis",
    icon: Users,
    description: "Descubra o tipo de cliente à sua frente em 30 segundos e adapte sua abordagem para cada perfil (nunca mais perca tempo com estratégia errada).",
    image: "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "O Método do Vendedor Brutal®",
    icon: Zap,
    description: "O coração da metodologia: feche vendas na primeira reunião, sem parecer insistente.",
    highlight: true,
    image: "https://images.unsplash.com/photo-1505238680356-6675034c9116?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Arsenal de Técnicas — Vol. 1",
    icon: Briefcase,
    description: "As 7 técnicas fundamentais que todo vendedor precisa dominar para controlar qualquer negociação do início ao fim.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Arsenal de Técnicas — Vol. 2",
    icon: Layers,
    description: "Técnicas avançadas para situações de alta pressão, clientes difíceis e negociações travadas.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Arsenal de Técnicas — Vol. 3",
    icon: Box,
    description: "O protocolo exato para quebrar as objeções mais comuns — incluindo \"está caro\", \"vou pensar\" e \"preciso falar com meu sócio\".",
    image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Teatro de Vendas®",
    icon: TvMinimalPlay,
    description: "Assista fechamentos, sem cortes, nem edição. Veja exatamente como aplicar o método sob pressão (erros, acertos e o que fazer em cada momento).",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Biblioteca de Fechamento®",
    icon: Library,
    description: "O maior acervo de fechamentos do Brasil. Copie, cole e venda.",
    image: "https://images.unsplash.com/photo-1507842217121-ad586417976c?q=80&w=800&auto=format&fit=crop"
  }
];

const overviewItems = [
  {
    icon: Clock,
    title: "+8 horas de conteúdo",
    description: "O curso de fechamento mais completo do Brasil. Tudo que você precisa para dominar vendas em um único lugar, sem precisar buscar informação em 10 fontes diferentes."
  },
  {
    icon: Timer,
    title: "Aulas práticas de 10 minutos",
    description: "Aprendizado direto ao ponto, sem enrolação. Assista no tempo do cafezinho e aplique rápido, porque você não tem tempo a perder com aulas de 2 horas cheias de blá-blá-blá."
  },
  {
    icon: FileText,
    title: "Amplo material de apoio",
    description: "Cronogramas, resumos, checklists — tudo pronto para você executar amanhã. Sem ficar perdido pensando \"e agora, por onde começo?\" — você acorda, abre o material e sabe exatamente o que fazer."
  },
  {
    icon: Presentation,
    title: "Slides profissionais",
    description: "Consulte antes das reuniões ou treine seu time inteiro sem montar nada do zero. Para gestores: replique o método com seus vendedores usando os mesmos slides oficiais do curso — economia de meses e milhares em consultoria."
  },
  {
    icon: MessageCircle,
    title: "Grupo de Networking",
    description: "Comunidade exclusiva com vendedores de diversos segmentos aplicando o método agora. Troque estratégias, faça parcerias, resolva problemas em tempo real — você nunca mais vende sozinho."
  },
  {
    icon: Award,
    title: "Certificado válido",
    description: "Comprove sua capacitação profissionalmente. Inclua no LinkedIn, mostre ao gestor, apresente em entrevistas — é a prova oficial de que você investiu no seu desenvolvimento."
  }
];

const ModulesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 344;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-dark-bg overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#252525] to-transparent pointer-events-none opacity-50" />
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-[900px] mx-auto mb-12 px-6 space-y-5">
            <span className="inline-block py-1 px-3 rounded bg-[#FF7214]/10 border border-[#FF7214]/20 text-[#FF7214] font-dmsans font-bold text-[12px] uppercase tracking-widest">
                CONTEÚDO PROGRAMÁTICO
            </span>
            
            <h2 className="font-lato font-black text-white text-[28px] sm:text-[38px] md:text-[48px] leading-[1.15] tracking-tight mx-auto">
                O método de fechamento <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9E42] to-[#FF7214]">mais completo e lucrativo</span> do&nbsp;Brasil.
            </h2>
            
            <p className="font-opensans text-gray-400 text-[16px] md:text-[18px] leading-relaxed max-w-lg mx-auto">
                Deslize para ver os <span className="text-gray-200 font-semibold">10 módulos estratégicos</span>.
            </p>
        </div>

        {/* Carousel Container Wrapper */}
        <div className="relative w-full px-4 md:px-12 mb-24">
            
            {/* Left Navigation Button */}
            <button 
                onClick={() => scroll('left')}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#252525]/80 backdrop-blur-md border border-white/10 rounded-full items-center justify-center text-white hover:bg-[#FF7214] hover:border-[#FF7214] transition-all shadow-xl group"
                aria-label="Scroll Left"
            >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Right Navigation Button */}
            <button 
                onClick={() => scroll('right')}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#252525]/80 backdrop-blur-md border border-white/10 rounded-full items-center justify-center text-white hover:bg-[#FF7214] hover:border-[#FF7214] transition-all shadow-xl group"
                aria-label="Scroll Right"
            >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Gradient Masks (Fade Effect on Sides) */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />

            {/* Scrollable Area */}
            <div 
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-6 md:px-12 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {modules.map((module) => (
                    <div 
                        key={module.id} 
                        className={`
                            snap-center shrink-0 w-[300px] md:w-[320px] h-[420px]
                            group relative rounded-2xl overflow-hidden transition-all duration-300
                            ${module.highlight ? 'shadow-[0_0_30px_-10px_rgba(255,114,20,0.4)] scale-[1.02] border-2 border-[#FF7214]' : 'border border-white/10 hover:border-[#FF7214]/50'}
                        `}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img 
                                src={module.image} 
                                alt={module.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                loading="lazy"
                            />
                            {/* Overlay Gradient: Darker at bottom for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/30" />
                            {/* Highlight Overlay */}
                            {module.highlight && <div className="absolute inset-0 bg-[#FF7214]/10 mix-blend-overlay" />}
                        </div>

                        {/* Content Container */}
                        <div className="absolute inset-0 p-6 flex flex-col z-20">
                            
                            {/* Top Row: Badge & Lock */}
                            <div className="flex justify-between items-start mb-auto">
                                <span className="font-mono text-[10px] text-white font-bold uppercase tracking-widest bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-white/10">
                                    Módulo {module.id.toString().padStart(2, '0')}
                                </span>
                                
                                {/* Lock Icon for Restriction */}
                                <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                                    <Lock size={14} className="text-white/70" />
                                </div>
                            </div>

                            {/* Icon (Floating) */}
                            <div className="mb-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#FF7214] group-hover:border-[#FF7214] transition-colors duration-300">
                                <module.icon size={24} strokeWidth={2} />
                            </div>

                            {/* Title with text-balance to avoid widows */}
                            <h3 className="font-lato font-bold text-[24px] text-white mb-2 leading-tight drop-shadow-md text-balance">
                                {module.title}
                            </h3>

                            {/* Description */}
                            <p className="font-opensans text-[14px] text-gray-300 leading-relaxed mb-6 line-clamp-4">
                                {module.description}
                            </p>

                            {/* Restricted Footer */}
                            <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-2">
                                <Lock size={12} className="text-[#FF7214]" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                                    Exclusivo para Alunos
                                </span>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>

        {/* General Overview Section */}
        <div className="max-w-[1100px] mx-auto px-6 mb-16">
            <h3 className="text-center font-lato font-bold text-white text-[24px] md:text-[32px] mb-12 relative inline-block left-1/2 -translate-x-1/2">
                Visão Geral do Treinamento
                {/* Underline decorative */}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#FF7214] rounded-full" />
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {overviewItems.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-[#FF7214]/30 hover:bg-[#1F1F1F] transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#FF7214]/10 flex items-center justify-center text-[#FF7214] mb-5 group-hover:scale-110 transition-transform duration-300 border border-[#FF7214]/10">
                            <item.icon size={24} strokeWidth={2} />
                        </div>
                        <h4 className="text-white font-bold text-[18px] md:text-[20px] mb-3 font-lato group-hover:text-[#FF9E42] transition-colors">
                            {item.title}
                        </h4>
                        <p className="text-gray-400 text-[14px] md:text-[15px] leading-relaxed font-opensans">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center px-6">
            <CTAButton text="GARANTIR MINHA VAGA AGORA" />
        </div>

      </div>
    </section>
  );
};

export default ModulesSection;
