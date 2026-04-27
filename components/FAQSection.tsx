
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import CTAButton from './CTAButton';

const faqs = [
  {
    question: "O curso é ao vivo ou gravado?",
    answer: "Gravado. Você tem acesso imediato e assiste no seu ritmo, quantas vezes quiser, de qualquer dispositivo."
  },
  {
    question: "Funciona para quem nunca vendeu nada?",
    answer: "Sim. O método foi construído para funcionar mesmo sem experiência. O Módulo 1 começa do zero e o Cronograma de 30 Dias guia você passo a passo."
  },
  {
    question: "E para quem já vende há anos?",
    answer: "Especialmente para você. Vendedores experientes costumam ter vícios que custam dinheiro sem perceber. O Teatro de Vendas® é exatamente para isso — você vai ver erros que comete hoje e corrigir em dias."
  },
  {
    question: "Funciona para qualquer tipo de produto ou serviço?",
    answer: "Sim. As técnicas do Fechamento Brutal® são comportamentais, não de nicho. Foram aplicadas em mais de 30 setores — de imóveis a consultoria, de saúde a tecnologia."
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "Acesso vitalício. O curso, os bônus e os materiais de apoio ficam disponíveis para sempre na sua conta."
  },
  {
    question: "Como funciona a Sala de Guerra?",
    answer: "Após a compra, você recebe o link de acesso ao grupo exclusivo no WhatsApp e ao canal de suporte. O Mentor IA fica disponível 24h diretamente na plataforma."
  },
  {
    question: "Posso parcelar?",
    answer: "Sim. O investimento é de R$ 197,00 à vista ou 12x de R$ 20,34 no cartão de crédito."
  },
  {
    question: "E se eu não gostar?",
    answer: "Você tem 30 dias de garantia incondicional. Pediu o reembolso, recebeu — sem perguntas, sem burocracia."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#FF7214]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 w-full max-w-[900px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded bg-white/5 border border-white/10 text-gray-400 font-dmsans font-bold text-[12px] uppercase tracking-widest">
                <HelpCircle size={14} />
                PERGUNTAS FREQUENTES
            </span>
            
            <h2 className="font-lato font-black text-white text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1]">
                Ainda com dúvida? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9E42] to-[#FF7214]">Veja as respostas.</span>
            </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div 
                    key={index}
                    onClick={() => toggleFAQ(index)}
                    className={`
                        group border rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden
                        ${openIndex === index 
                            ? 'bg-[#141414] border-[#FF7214]/30 shadow-[0_4px_20px_-5px_rgba(255,114,20,0.15)]' 
                            : 'bg-[#0f0f0f] border-white/5 hover:border-white/10 hover:bg-[#121212]'
                        }
                    `}
                >
                    <div className="p-5 md:p-6 flex items-start justify-between gap-4">
                        <h3 className={`font-lato font-bold text-[16px] md:text-[18px] transition-colors ${openIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                            {faq.question}
                        </h3>
                        <div className={`
                            shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300
                            ${openIndex === index 
                                ? 'bg-[#FF7214] border-[#FF7214] text-white rotate-180' 
                                : 'bg-transparent border-white/20 text-gray-400 group-hover:border-white/40'
                            }
                        `}>
                            {openIndex === index ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
                        </div>
                    </div>
                    
                    <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="px-5 md:px-6 pb-6 pt-0">
                            <p className="font-opensans text-gray-400 text-[15px] leading-relaxed border-t border-white/5 pt-4">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
             <CTAButton text="QUERO ACESSO IMEDIATO" />
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
