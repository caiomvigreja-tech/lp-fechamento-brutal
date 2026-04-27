
import React from 'react';
import { Users, MessageCircle, Bot, Zap, Shield, ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';

const tools = [
  {
    id: 1,
    title: "Comunidade Exclusiva + Acesso ao Criador",
    subtitle: "Grupo Privado",
    description: "Grupo privado com o criador do Fechamento Brutal e outros alunos que estão aplicando o método agora. Troque experiências, faça networking, parcerias e tire dúvidas em tempo real. Travou em uma negociação? Pergunte no grupo e tenha uma resposta direta.",
    highlight: "Você não vai mais vender sozinho.",
    icon: Users,
    visualType: 'whatsapp',
    color: "text-green-400",
    gradient: "from-green-500/20 to-green-600/5",
    border: "group-hover:border-green-500/50"
  },
  {
    id: 2,
    title: "Simulador de Vendas 24h",
    subtitle: "Treinador IA",
    description: "Uma inteligência artificial treinada no Fechamento Brutal® disponível 24 horas por dia para você simular vendas, testar argumentos e corrigir erros antes de falar com o cliente real. Treine quanto quiser, quando quiser, sem julgamento.",
    highlight: "É como ter um sparring de vendas disponível a qualquer hora.",
    icon: Bot,
    visualType: 'ai',
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-purple-600/5",
    border: "group-hover:border-purple-500/50",
    isAi: true
  },
  {
    id: 3,
    title: "Canal de Suporte Tira-Dúvidas",
    subtitle: "Suporte Técnico e Metodológico",
    description: "Não fique com dúvidas acumuladas. Travou em uma negociação ou não entendeu uma aula? Pergunte diretamente ao mentor e tenha a resposta — sem enrolar, sem chatbot, sem esperar.",
    highlight: "Linha direta com quem criou o método.",
    icon: MessageCircle,
    visualType: 'support',
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-blue-600/5",
    border: "group-hover:border-blue-500/50"
  }
];

const WarRoomSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      
      {/* Tactical Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#121212] to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-[900px] mx-auto mb-16 space-y-5">
            <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 py-1 px-4 rounded bg-red-500/10 border border-red-500/30 text-red-500 font-dmsans font-bold text-[12px] uppercase tracking-widest shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                    <Shield size={12} className="fill-current" />
                    O QUE NINGUÉM OFERECE POR ESSE PREÇO
                </span>
            </div>
            
            <h2 className="font-lato font-black text-white text-[32px] sm:text-[42px] md:text-[52px] leading-[1.1]">
                SALA DE GUERRA DO FECHAMENTO BRUTAL® - <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-[#FF7214]">PARA GARANTIR QUE VOCÊ NÃO TRAVE, NUNCA.</span>
            </h2>
            
            <p className="font-opensans text-gray-400 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto">
                Conhecimento sem suporte é teoria. A Sala de Guerra existe para garantir que você execute.
            </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {tools.map((tool) => (
                <div 
                    key={tool.id}
                    className={`
                        group relative bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden 
                        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col
                        ${tool.border}
                    `}
                >
                    {/* Visual Header */}
                    <div className={`relative h-48 w-full bg-gradient-to-br ${tool.gradient} flex items-center justify-center overflow-hidden border-b border-white/5`}>
                        
                        {/* Background Effect */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] opacity-50" />

                        {/* CSS Visuals */}
                        <div className="transform group-hover:scale-105 transition-transform duration-500 z-10">
                            
                            {/* 1. WHATSAPP VISUAL */}
                            {tool.visualType === 'whatsapp' && (
                                <div className="relative w-32 h-32 flex items-center justify-center">
                                    {/* Chat Bubbles */}
                                    <div className="absolute top-0 right-0 bg-[#25D366] p-3 rounded-2xl rounded-tr-none shadow-lg transform rotate-6 opacity-90">
                                        <div className="w-12 h-1.5 bg-white/40 rounded-full mb-1.5" />
                                        <div className="w-8 h-1.5 bg-white/30 rounded-full" />
                                    </div>
                                    <div className="absolute bottom-4 left-2 bg-[#128C7E] p-3 rounded-2xl rounded-bl-none shadow-lg transform -rotate-6 z-10">
                                        <div className="w-10 h-1.5 bg-white/40 rounded-full mb-1.5" />
                                        <div className="w-14 h-1.5 bg-white/30 rounded-full" />
                                    </div>
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-20">
                                        <Users className="text-[#25D366] w-8 h-8" />
                                    </div>
                                </div>
                            )}

                            {/* 2. SUPPORT VISUAL */}
                            {tool.visualType === 'support' && (
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <div className="w-48 h-24 bg-[#1a1a1a] rounded-xl border border-blue-500/30 flex items-center p-4 gap-3 shadow-lg relative">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="w-full h-2 bg-white/10 rounded-full" />
                                            <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                                        </div>
                                        {/* Direct Line Badge */}
                                        <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-[9px] font-bold px-2 py-1 rounded-full border border-[#0f0f0f]">
                                            DIRECT
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 3. AI MENTOR VISUAL */}
                            {tool.visualType === 'ai' && (
                                <div className="relative w-32 h-32 flex items-center justify-center">
                                    {/* Rotating Rings */}
                                    <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute inset-4 border border-purple-400/20 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
                                    
                                    {/* Core */}
                                    <div className="w-16 h-16 bg-purple-500/10 backdrop-blur-md rounded-xl border border-purple-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                                        <Bot className="text-purple-400 w-8 h-8" />
                                    </div>

                                    {/* Pulse */}
                                    <div className="absolute -bottom-6 flex gap-1">
                                        <div className="w-1 h-4 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                                        <div className="w-1 h-6 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '100ms' }} />
                                        <div className="w-1 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                                        <div className="w-1 h-5 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${tool.color}`}>
                                <tool.icon size={20} />
                            </div>
                            {tool.isAi && (
                                <span className="px-2 py-0.5 rounded bg-purple-500/20 border border-purple-500/30 text-purple-400 text-[10px] font-bold uppercase tracking-wider animate-pulse">
                                    24h Online
                                </span>
                            )}
                        </div>

                        <h3 className="font-lato font-bold text-white text-[20px] leading-tight mb-1">
                            {tool.title}
                        </h3>
                        {tool.subtitle && (
                            <p className="text-[12px] text-gray-400 font-bold uppercase tracking-wider mb-3">
                                {tool.subtitle}
                            </p>
                        )}
                        {!tool.subtitle && <div className="mb-3" />}

                        <p className="font-opensans text-gray-400 text-[14px] leading-relaxed mb-6">
                            {tool.description}
                        </p>

                        <div className="mt-auto pt-4 border-t border-white/5">
                            <p className={`font-dmsans font-bold text-[13px] ${tool.color} flex items-center gap-2`}>
                                <Zap size={14} className="fill-current" />
                                {tool.highlight}
                            </p>
                        </div>
                    </div>

                </div>
            ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center">
             <div className="inline-flex items-center gap-2 text-gray-500 text-sm mb-4">
                <ArrowRight size={16} />
                <span>O suporte que garante sua execução</span>
                <ArrowRight size={16} className="rotate-180" />
             </div>
             <CTAButton text="QUERO ACESSO À SALA DE GUERRA" />
        </div>

      </div>
    </section>
  );
};

export default WarRoomSection;
