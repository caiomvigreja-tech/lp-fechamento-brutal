
import React from 'react';
import { 
  XCircle, 
  MessageSquare, 
  CircleDollarSign, 
  ShieldCheck, 
  TrendingUp, 
  Crown,
  Image as ImageIcon
} from 'lucide-react';
import CTAButton from './CTAButton';

const benefits = [
  {
    icon: XCircle,
    title: "O fim das desculpas",
    description: "Isole a verdadeira objeção do cliente e feche a venda antes dele falar que \"vai pensar\" ou que \"precisa ver com a esposa\"."
  },
  {
    icon: MessageSquare,
    title: "Domínio total da conversa",
    description: "Pare de ser \"atropelado\" por clientes difíceis e assuma as rédeas da negociação do início ao fim com confiança."
  },
  {
    icon: CircleDollarSign,
    title: "Fale o preço sem medo",
    description: "Acabe com a insegurança, o gaguejar e o nervosismo na hora de passar o preço para o cliente. Valorize sua oferta."
  },
  {
    icon: ShieldCheck,
    title: "Quebre objeções naturalmente",
    description: "Saiba exatamente o que fazer quando o cliente apresentar qualquer objeção, das mais fáceis às mais complicadas."
  },
  {
    icon: TrendingUp,
    title: "Fature com previsibilidade",
    description: "Pare de depender da sorte. Tenha um processo claro para saber o quanto vai cair na sua conta no final do mês."
  },
  {
    icon: Crown,
    title: "Autoridade antes de falar o preço",
    description: "Conduza os 3 primeiros minutos da conversa de forma que o cliente te veja como autoridade, antes mesmo de apresentar a solução.",
    highlight: true
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-dark-bg overflow-hidden">
      
      {/* Background Ambience - Orange Glow Right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF7214]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      {/* Background Ambience - Green/Blue Glow Left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0F9D58]/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        
        {/* Header Content - Layout: Text Left / Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-24">
            
            {/* Left Column: Text Content */}
            <div className="flex flex-col items-start text-left space-y-6">
                
                {/* Tag */}
                <span className="inline-block py-1 px-3 rounded bg-[#FF7214]/10 border border-[#FF7214]/20 text-[#FF7214] font-dmsans font-bold text-[12px] uppercase tracking-widest">
                    COMO FUNCIONA
                </span>

                {/* Main Title */}
                <h2 className="font-lato font-black text-white text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1]">
                    O que é o <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9E42] to-[#FF7214]">Fechamento Brutal®</span>
                </h2>

                {/* Description */}
                <div className="font-opensans text-gray-300 text-[16px] md:text-[18px] leading-relaxed text-pretty space-y-4 max-w-xl">
                    <p>
                    O Fechamento Brutal® permite que qualquer pessoa, mesmo sem experiência, saiba como fechar vendas com segurança e naturalidade. Sem frases prontas. Sem parecer insistente.
                    </p>
                    <p>
                    São <strong className="text-white">mais de 21 técnicas de fechamento</strong> com um único objetivo: transformar clientes indecisos em vendas fechadas na hora.
                    </p>
                    <p className="text-gray-400 text-[15px]">
                    É um passo a passo comprovado, simples de aplicar, que funciona em qualquer nicho.
                    </p>
                </div>

            </div>

            {/* Right Column: Image Placeholder */}
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[400px] bg-[#252525] border border-white/5 rounded-2xl overflow-hidden flex items-center justify-center group shadow-2xl">
                {/* Placeholder Visuals */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7214]/5 to-transparent opacity-60" />
                
                {/* Dashed Border Container */}
                <div className="relative z-10 w-[80%] h-[80%] border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center gap-3 text-center p-6 transition-colors group-hover:border-[#FF7214]/30">
                    <div className="p-4 bg-white/5 rounded-full mb-2">
                        <ImageIcon className="w-8 h-8 text-gray-500" />
                    </div>
                    <p className="text-gray-400 font-dmsans font-bold uppercase tracking-widest text-xs">
                        Espaço para Imagem
                    </p>
                    <p className="text-gray-600 text-[11px] max-w-[200px]">
                        (Insira aqui uma foto do especialista em ação ou mockup do método)
                    </p>
                </div>
            </div>

        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`
                group relative bg-[#252525] border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1
                ${benefit.highlight 
                  ? 'bg-[#2A2A2A] border-[#FF7214]/60 shadow-[0_10px_40px_-10px_rgba(255,114,20,0.15)]' 
                  : 'border-white/5 hover:bg-[#2A2A2A] hover:border-[#FF7214]/30'
                }
              `}
            >
              {/* Icon Container */}
              <div className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#FF7214]/10 text-[#FF7214] group-hover:scale-110 transition-transform duration-300">
                <benefit.icon size={22} strokeWidth={2.5} />
              </div>
              
              {/* Title */}
              <h3 className={`
                font-lato font-bold text-[20px] mb-3 transition-colors
                ${benefit.highlight ? 'text-[#FF9E42]' : 'text-white group-hover:text-[#FF9E42]'}
              `}>
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="font-opensans text-gray-400 text-[15px] leading-relaxed">
                {benefit.description}
              </p>

              {/* Highlight Crown Badge (Visual detail for the highlighted card) */}
              {benefit.highlight && (
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Crown size={20} className="text-[#FF7214]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-4">
          <CTAButton text="QUERO VENDER MAIS" />
          <p className="text-[#FF4B4B] text-[13px] md:text-[14px] font-dmsans font-black uppercase tracking-widest mt-2 animate-pulse">
            Vagas Limitadas para essa turma
          </p>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
