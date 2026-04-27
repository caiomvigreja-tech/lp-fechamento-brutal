
import React from 'react';
import { Play, BrainCircuit, Activity, MessageCircle, Mic, Users, BarChart3, Maximize2, TvMinimalPlay } from 'lucide-react';
import CTAButton from './CTAButton';

const TeatroVendasSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#080808] overflow-hidden">
        
        {/* Cinematic Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#f2295b]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF7214]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
            
            <div className="flex flex-col gap-16">
                
                {/* --- TOP ROW: HEADER & VIDEO --- */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    
                    {/* LEFT: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                        {/* Live Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2295b]/10 border border-[#f2295b]/20 text-[#f2295b] mb-8 animate-pulse shadow-[0_0_15px_rgba(242,41,91,0.2)]">
                            <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f2295b] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f2295b]"></span>
                            </span>
                            <span className="text-[11px] font-bold font-mono uppercase tracking-widest">GRAVAÇÃO SEM CORTES</span>
                        </div>

                        <h2 className="font-lato font-black text-white text-[42px] sm:text-[52px] md:text-[60px] leading-[1] mb-6 tracking-tight">
                            TEATRO DE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7214] to-[#f2295b]">VENDAS™</span>
                        </h2>

                        <h3 className="font-lato font-bold text-white text-[20px] md:text-[24px] mb-6 max-w-lg leading-tight">
                            Assista fechamentos acontecendo ao vivo, sem cortes.
                        </h3>

                        <p className="font-opensans text-[16px] md:text-[18px] text-gray-300 mb-8 leading-relaxed font-light border-l-2 border-[#FF7214] pl-6 max-w-lg">
                            Essa é a forma mais rápida e mais eficaz de aprender a vender. <strong className="text-white">Entenda o porquê.</strong>
                        </p>
                        
                        <div className="hidden lg:block">
                            <CTAButton text="QUERO ACESSO AO TEATRO" />
                        </div>
                    </div>

                    {/* RIGHT: Video Player Mockup */}
                    <div className="w-full lg:w-1/2">
                         {/* Perspective Container */}
                        <div className="relative perspective-1000 group">
                            
                            {/* Glow Behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-[#FF7214]/10 to-[#f2295b]/10 blur-[80px] -z-10 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

                            {/* Player Frame */}
                            <div className="relative bg-[#111] rounded-2xl border border-white/10 shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01] hover:border-[#FF7214]/30 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
                                
                                {/* Player Header */}
                                <div className="h-10 md:h-12 bg-[#1A1A1A] border-b border-white/5 flex items-center justify-between px-4">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-black/40 rounded-full border border-white/5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                        <span className="text-[10px] text-gray-400 font-mono tracking-widest">REC 00:14:23</span>
                                    </div>
                                    <Maximize2 size={14} className="text-gray-600" />
                                </div>

                                {/* Video Screen Content */}
                                <div className="relative aspect-video bg-black group-hover:bg-[#050505] transition-colors">
                                    
                                    {/* Grid Background */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                                    {/* Mockup: Split Screen Call */}
                                    <div className="absolute inset-0 p-4 grid grid-cols-2 gap-4">
                                        {/* User 1 (Seller) */}
                                        <div className="bg-[#1A1A1A] rounded border border-white/5 relative overflow-hidden flex items-center justify-center">
                                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50"></div>
                                            <Users className="text-white/5 w-16 h-16 relative z-10" />
                                            
                                            {/* Audio Waveform Simulation */}
                                            <div className="absolute bottom-10 left-4 right-4 h-6 flex items-center gap-1 opacity-30">
                                                {[...Array(10)].map((_, i) => (
                                                     <div key={i} className="w-1 bg-[#FF7214] rounded-full animate-pulse" style={{ height: Math.random() * 20 + 4 + 'px', animationDuration: '0.8s' }} />
                                                ))}
                                            </div>

                                            <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[9px] text-white/70 font-mono border border-white/10">Vendedor (Você)</div>
                                            <div className="absolute top-2 right-2">
                                                <Mic size={12} className="text-[#0F9D58]" />
                                            </div>
                                        </div>

                                        {/* User 2 (Client) */}
                                        <div className="bg-[#1A1A1A] rounded border border-white/5 relative overflow-hidden flex items-center justify-center">
                                             <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50"></div>
                                            <Users className="text-white/5 w-16 h-16 relative z-10" />
                                            <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[9px] text-white/70 font-mono border border-white/10">Cliente</div>
                                        </div>
                                    </div>

                                    {/* Floating Analysis Widget */}
                                    <div className="absolute top-6 right-6 w-48 bg-black/90 backdrop-blur-md border border-[#f2295b]/30 rounded-lg p-3 shadow-2xl transform translate-x-2 translate-y-2 z-20">
                                        <div className="flex justify-between items-center mb-2 border-b border-white/10 pb-1">
                                            <span className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">Objeção Detectada</span>
                                            <Activity size={10} className="text-[#f2295b]" />
                                        </div>
                                        <div className="text-[10px] font-bold text-white mb-2 italic">"Está muito caro..."</div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                                <div className="w-[80%] h-full bg-gradient-to-r from-[#FF7214] to-[#f2295b]" />
                                            </div>
                                            <span className="text-[8px] text-[#FF7214] font-mono">80%</span>
                                        </div>
                                        <div className="mt-2 text-[8px] text-gray-400">Técnica Recomendada: <span className="text-white font-bold">Ancoragem Reversa</span></div>
                                    </div>

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center z-30">
                                        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FF7214] group-hover:border-[#FF7214] transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.4)] cursor-pointer">
                                            <Play className="fill-white text-white ml-1" size={32} />
                                        </div>
                                    </div>

                                </div>

                                {/* Player Footer / Timeline */}
                                <div className="h-12 bg-[#111] border-t border-white/5 flex items-center px-4 gap-4">
                                    <div className="text-[10px] text-white font-mono">14:23</div>
                                    <div className="flex-1 h-1 bg-[#333] rounded-full overflow-hidden group-hover:h-1.5 transition-all">
                                        <div className="w-[45%] h-full bg-[#FF7214] relative">
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                    <div className="text-[10px] text-gray-500 font-mono">45:00</div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                {/* --- BOTTOM ROW: FEATURES --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/5">
                    
                    {/* Feature 1 */}
                    <div className="group p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#FF7214]/30 hover:bg-[#1A1A1A] transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-[#FF7214]/10 border border-[#FF7214]/20 flex items-center justify-center text-[#FF7214] mb-4 group-hover:scale-110 transition-transform">
                            <BrainCircuit size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white font-bold text-[20px] mb-3 font-lato group-hover:text-[#FF7214] transition-colors">
                            Nós aprendemos por imitação
                        </h3>
                        <p className="text-gray-400 text-[15px] leading-relaxed">
                            Seu cérebro é programado para copiar comportamentos (neurônios espelho). Ao assistir fechamentos, você absorve o tom de voz e as pausas de forma automática, sem precisar decorar nada.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="group p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#f2295b]/30 hover:bg-[#1A1A1A] transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-[#f2295b]/10 border border-[#f2295b]/20 flex items-center justify-center text-[#f2295b] mb-4 group-hover:scale-110 transition-transform">
                            <Activity size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white font-bold text-[20px] mb-3 font-lato group-hover:text-[#f2295b] transition-colors">
                            Desenvolva controle emocional
                        </h3>
                        <p className="text-gray-400 text-[15px] leading-relaxed">
                            Veja como reagir com calma quando o cliente diz que "está caro" ou é rude. Aprenda a manter o domínio da conversa apenas observando como o problema é resolvido na prática.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="group p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#0F9D58]/30 hover:bg-[#1A1A1A] transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-[#0F9D58]/10 border border-[#0F9D58]/20 flex items-center justify-center text-[#0F9D58] mb-4 group-hover:scale-110 transition-transform">
                            <MessageCircle size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white font-bold text-[20px] mb-3 font-lato group-hover:text-[#0F9D58] transition-colors">
                            Aprenda fechar de forma natural
                        </h3>
                        <p className="text-gray-400 text-[15px] leading-relaxed">
                            Assista como aplicar as técnicas sem parecer um vendedor chato. Veja como levar o cliente até o "sim" de um jeito fluido, sem pressão desnecessária e sem parecer robótico.
                        </p>
                    </div>

                </div>

                <div className="block lg:hidden text-center">
                    <CTAButton text="QUERO ACESSO AO TEATRO" />
                </div>

            </div>
        </div>
    </section>
  );
};

export default TeatroVendasSection;
