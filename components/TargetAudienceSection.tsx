
import React from 'react';
import { Building2, Briefcase, TrendingUp } from 'lucide-react';
import LogoCarousel from './LogoCarousel';

const audiences = [
  {
    title: "Empresários e Gestores",
    tag: "Pare de Perder Vendas",
    icon: Building2,
    description: (
      <>
        Para você que está cansado de ver o time perder vendas e quer transformar seus vendedores em <strong className="text-gray-900">máquinas de fechamento</strong> e resultado para o seu caixa.
      </>
    )
  },
  {
    title: "Profissionais e Prestadores",
    tag: "Feche Mais Contratos",
    icon: Briefcase,
    description: (
      <>
        Para você que é expert no que faz – advogado, médico, arquiteto, consultor – mas se sente <strong className="text-gray-900">desconfortável na hora de fechar</strong> um contrato de alto valor.
      </>
    )
  },
  {
    title: "Vendedores",
    tag: "Do Iniciante ao Avançado",
    icon: TrendingUp,
    description: (
      <>
        Para você que lucra com comissões e quer colocar <strong className="text-gray-900">muito dinheiro no bolso, com constância</strong>, todos os meses, dominando um processo de vendas que funciona.
      </>
    )
  }
];

const TargetAudienceSection: React.FC = () => {
  return (
    <section className="relative w-full pt-20 md:pt-32 pb-10 bg-white overflow-hidden flex flex-col">
      
      {/* Background Ambience - Centered Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FF7214]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 mb-20">
        
        {/* --- SECTION HEADER (Centered) --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
            
            {/* Tag */}
            <span className="inline-block py-1.5 px-4 mb-6 rounded-full bg-[#FF7214]/10 border border-[#FF7214]/20 text-[#FF7214] font-dmsans font-bold text-[12px] uppercase tracking-widest">
                TREINAMENTO SOB MEDIDA
            </span>

            {/* Headline */}
            <h2 className="font-lato font-bold text-[#1C1C1C] text-[32px] sm:text-[40px] md:text-[48px] leading-[1.15] tracking-tight mb-6 text-balance">
              O Fechamento Brutal® é perfeito para empresários, gestores, profissionais liberais, autônomos e <span className="text-[#FF7214] whitespace-nowrap">vendedores</span>.
            </h2>
            
            {/* Subtitle */}
            <p className="font-opensans text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-2xl text-pretty">
              Não importa se você fecha contratos de <span className="whitespace-nowrap font-bold text-gray-800">R$ 500</span> ou de <span className="whitespace-nowrap font-bold text-gray-800">R$ 500 mil</span>. Se negociar faz parte do seu dia, o método funciona para você.
            </p>

        </div>

        {/* --- CARDS GRID (3 Columns) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {audiences.map((item, index) => (
              <div 
                key={index} 
                className="
                  group relative bg-white p-8 rounded-3xl
                  border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]
                  hover:border-[#FF7214]/30 hover:shadow-[0_20px_50px_-10px_rgba(255,114,20,0.15)] hover:-translate-y-2
                  transition-all duration-300 ease-out
                  flex flex-col items-start h-full
                "
              >
                
                {/* 1. Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#FF7214]/5 border border-[#FF7214]/10 flex items-center justify-center text-[#FF7214] mb-6 group-hover:bg-[#FF7214] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#FF7214]/30 transition-all duration-300 transform group-hover:scale-110">
                  <item.icon 
                    size={28} 
                    strokeWidth={1.5}
                  />
                </div>

                {/* 2. Title */}
                <h3 className="font-lato font-bold text-[#1C1C1C] text-[22px] leading-tight group-hover:text-[#FF7214] transition-colors mb-3">
                  {item.title}
                </h3>

                {/* 3. Tag (Pill) */}
                {item.tag && (
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-500 font-dmsans text-[11px] font-bold uppercase tracking-wider group-hover:bg-[#FF7214]/10 group-hover:text-[#FF7214] group-hover:border-[#FF7214]/20 transition-all">
                            {item.tag}
                        </span>
                    </div>
                )}

                {/* 4. Description */}
                <p className="font-opensans text-gray-600 text-[15px] leading-relaxed font-medium text-pretty border-t border-gray-100 pt-5 mt-auto w-full">
                  {item.description}
                </p>

              </div>
            ))}
        </div>

      </div>

      {/* Validation / Authority Bar integrated at bottom */}
      <LogoCarousel />

    </section>
  );
};

export default TargetAudienceSection;
