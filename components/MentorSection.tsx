
import React from 'react';
import { Users, TrendingUp, BadgeDollarSign, Tv, User } from 'lucide-react';

const credentials = [
  {
    icon: Users,
    title: "Mentor de +15.000 alunos",
    description: "Treinou times comerciais de alta performance em diversos setores da economia."
  },
  {
    icon: TrendingUp,
    title: "Liderança Exponencial",
    description: "Ex-executivo que comandou operações de escala nacional, liderando mais de 1.000 vendedores na linha de frente."
  },
  {
    icon: BadgeDollarSign,
    title: "R$ 50 Milhões em Resultados",
    description: "Valor acumulado em novos negócios gerados exclusivamente através da aplicação do seu método."
  },
  {
    icon: Tv,
    title: "Autoridade de Mídia",
    description: "Especialista referenciado pela Record e SBT como voz de comando em negociação e fechamento."
  }
];

const MentorSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#181818] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FF7214]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Image Placeholder */}
          <div className="w-full lg:w-[45%] relative group">
            
            {/* Image Frame/Container */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5 bg-[#252525]">
               
                {/* Placeholder Visuals since we don't have the exact image asset */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A]">
                    <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 shadow-inner">
                        <User className="w-10 h-10 text-gray-500" />
                    </div>
                    <p className="text-white/30 font-dmsans font-bold uppercase tracking-widest text-xs border-b border-white/10 pb-2 mb-2">
                        Foto do Mentor
                    </p>
                    <p className="text-white/20 text-[11px] max-w-[240px] leading-relaxed">
                        (Sugestão: Foto executiva em plano médio, olhar confiante, fundo neutro ou levemente desfocado)
                    </p>
                </div>

                {/* Overlay Gradient at bottom for Name Tag effect if image was present */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </div>

            {/* Decorative Element behind image */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-[#FF7214]/20 rounded-2xl" />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 -right-4 md:-right-8 bg-white text-dark-bg p-4 rounded-xl shadow-xl border border-gray-200 transform hover:-translate-y-1 transition-transform duration-300">
                <span className="block font-dmsans font-bold text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                    Reconhecido por
                </span>
                <div className="flex items-center gap-3 opacity-80 grayscale hover:grayscale-0 transition-all">
                    {/* Placeholder logos for Record/SBT */}
                    <span className="font-bold text-[14px]">RECORD</span>
                    <div className="w-px h-3 bg-gray-300"></div>
                    <span className="font-bold text-[14px]">SBT</span>
                </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
            
            {/* Eyebrow */}
            <span className="inline-block mb-4 text-[#FF7214] font-dmsans font-bold text-[13px] uppercase tracking-widest pl-4 border-l-2 border-[#FF7214]">
                Quem será o seu mentor?
            </span>
            
            {/* Name & Title */}
            <h2 className="font-lato font-black text-white text-[36px] sm:text-[42px] leading-[1.1] mb-2">
                REIRIVELTON FERNANDES
            </h2>
            <h3 className="font-opensans font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9E42] to-[#f2295b] text-[18px] sm:text-[20px] uppercase tracking-wide mb-8">
                Criador do Fechamento Brutal®
            </h3>

            {/* Bio Text */}
            <div className="font-opensans text-gray-300 text-[15px] sm:text-[16px] leading-[1.7] space-y-4 mb-10 text-pretty">
                <p>
                    Reirivelton Fernandes é empresário e a mente por trás do método Fechamento Brutal®. Amplamente reconhecido como o "Rei dos Negócios", sua expertise prática e visão estratégica o tornaram uma referência nacional.
                </p>
                <p>
                    Sua autoridade não nasceu em teorias, mas no <strong className="text-white">"campo de batalha"</strong>: como executivo, foi o responsável por abrir mercado para a maior empresa de venda direta do Brasil, onde liderou e formou pessoalmente uma força de vendas com mais de 1.000 vendedores ativos.
                </p>
                <p>
                    Dessa operação de alta performance, ele extraiu e sistematizou os padrões de conversão que deram origem a uma metodologia robusta, responsável por gerar <strong className="text-white">mais de R$ 50 milhões em novos negócios.</strong>
                </p>
                <p className="italic text-gray-400 border-l-2 border-white/10 pl-4">
                    "Sua missão é clara: erradicar a ideia de que vender é um 'dom' e provar que o sucesso comercial é fruto de técnica e processo."
                </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 w-full">
                {credentials.map((cred, idx) => (
                    <div key={idx} className="flex gap-4 group">
                        <div className="shrink-0 mt-1">
                             <div className="w-10 h-10 rounded-lg bg-[#FF7214]/10 flex items-center justify-center text-[#FF7214] group-hover:scale-110 transition-transform duration-300">
                                <cred.icon size={20} />
                             </div>
                        </div>
                        <div>
                            <h4 className="font-lato font-bold text-white text-[16px] mb-1 group-hover:text-[#FF9E42] transition-colors">
                                {cred.title}
                            </h4>
                            <p className="font-opensans text-[13px] text-gray-400 leading-snug">
                                {cred.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MentorSection;
