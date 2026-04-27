
import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import CTAButton from './CTAButton';

const testimonials = [
  {
    id: 1,
    name: "Carlos M.",
    role: "Vendedor de Planos de Saúde",
    location: "São Paulo, SP",
    text: "Eu tinha vergonha de falar o preço. Depois do módulo 3, fechei 3 contratos na mesma semana. O método é cirúrgico.",
    type: "Iniciante",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Fernanda L.",
    role: "Diretora Comercial",
    location: "Rio de Janeiro, RJ",
    text: "Treinei meu time inteiro com os slides do curso. Em 30 dias, a taxa de conversão subiu de 18% para 41%. O kit de equipes sozinho pagou o investimento.",
    type: "Gestora",
    highlight: true,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Patricia R.",
    role: "Arquiteta",
    location: "Belo Horizonte, MG",
    text: "Sou arquiteta e sempre travava na hora de fechar contratos grandes. Aprendi a conduzir a negociação e fechar no mesmo dia. Mudou tudo.",
    type: "Profissional Liberal",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Ricardo S.",
    role: "Gerente Comercial",
    location: "Curitiba, PR",
    text: "Achei que já sabia tudo de vendas. O Teatro de Vendas® me mostrou que eu cometia erros que nem percebia. Corrigi em uma semana.",
    type: "Experiente",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#080808] overflow-hidden border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF7214]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16 space-y-4">
            <span className="inline-block py-1 px-3 rounded bg-[#FF7214]/10 border border-[#FF7214]/20 text-[#FF7214] font-dmsans font-bold text-[12px] uppercase tracking-widest">
                QUEM JÁ APLICOU
            </span>
            
            <h2 className="font-lato font-black text-white text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1]">
                Eles decidiram parar de improvisar. <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9E42] to-[#FF7214]">Veja o que aconteceu.</span>
            </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {testimonials.map((testimonial) => (
                <div 
                    key={testimonial.id}
                    className={`
                        group relative p-8 rounded-2xl border transition-all duration-300 flex flex-col
                        ${testimonial.highlight 
                            ? 'bg-[#181818] border-[#FF7214]/40 shadow-[0_10px_40px_-10px_rgba(255,114,20,0.15)]' 
                            : 'bg-[#141414] border-white/5 hover:border-[#FF7214]/20 hover:bg-[#181818]'
                        }
                    `}
                >
                    {/* Quote Icon Background */}
                    <div className="absolute top-6 right-8 text-white/5 group-hover:text-white/10 transition-colors">
                        <Quote size={60} fill="currentColor" stroke="none" />
                    </div>

                    {/* Stars & Type Badge */}
                    <div className="flex items-center justify-between mb-6 relative z-10">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} size={16} className="fill-[#FFB800] text-[#FFB800]" />
                            ))}
                        </div>
                        <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            {testimonial.type}
                        </span>
                    </div>

                    {/* Content */}
                    <blockquote className="font-opensans text-[16px] md:text-[17px] text-gray-300 leading-relaxed italic mb-8 relative z-10">
                        "{testimonial.text}"
                    </blockquote>

                    {/* Profile */}
                    <div className="mt-auto flex items-center gap-4 relative z-10">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-[#FF7214]/50 transition-colors">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name} 
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            {testimonial.highlight && (
                                <div className="absolute -bottom-1 -right-1 bg-[#FF7214] text-white text-[8px] font-bold px-1.5 py-0.5 rounded border border-[#181818]">
                                    TOP
                                </div>
                            )}
                        </div>
                        
                        <div>
                            <strong className="block text-white font-lato text-[16px]">
                                {testimonial.name}
                            </strong>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 text-[13px] text-gray-500 font-dmsans">
                                <span>{testimonial.role}</span>
                                <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-600" />
                                <span className="flex items-center gap-1">
                                    <MapPin size={10} />
                                    {testimonial.location}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center">
             <CTAButton text="QUERO TER ESSES RESULTADOS" />
             <p className="mt-4 text-gray-500 text-sm font-dmsans">
                Junte-se a mais de 15.000 alunos satisfeitos.
             </p>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
