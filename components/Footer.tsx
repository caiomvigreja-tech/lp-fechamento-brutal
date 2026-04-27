
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1C1C1C] text-white pt-16 pb-12 border-t border-white/5 font-opensans">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
            
            {/* Column 1: Logo & Company Info */}
            <div className="flex flex-col items-start">
                <div className="w-[180px] mb-6">
                    <img 
                        src="https://www.fechamentobrutal.com.br/wp-content/uploads/2025/08/logoNEGATIVO-1-768x225.png.webp" 
                        alt="SISV Sem Isso Sem Vendas" 
                        className="w-full h-auto object-contain"
                    />
                </div>
                <div className="space-y-1 text-[#CCCCCC] text-[15px] leading-relaxed">
                    <p>Operado por <strong className="text-white font-bold">Sem Isso Sem Vendas LTDA</strong></p>
                    <p>CNPJ: 58.637.365/0001-01</p>
                </div>
            </div>

            {/* Column 2: Contact */}
            <div className="flex flex-col items-start">
                <h4 className="font-lato font-bold text-white text-[16px] uppercase mb-6">
                    FALE CONOSCO:
                </h4>
                <div className="space-y-4 text-[#CCCCCC] text-[15px] leading-relaxed">
                    <p>
                        <a href="mailto:contato@semissosemvendas.com.br" className="hover:text-white transition-colors">
                            contato@semissosemvendas.com.br
                        </a>
                    </p>
                    <p>
                        <a href="https://wa.me/5517997513372" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            WhatsApp - (17) 99751-3372
                        </a>
                    </p>
                    <p className="max-w-[300px]">
                        Av. Pres. Juscelino K. de Oliveira, 5000 - Iguatemi Business, São José do Rio Preto - SP
                    </p>
                </div>
            </div>

            {/* Column 3: Security */}
            <div className="flex flex-col items-start">
                <h4 className="font-lato font-bold text-white text-[16px] uppercase mb-6">
                    AMBIENTE SEGURO:
                </h4>
                <div className="w-[280px]">
                    <img 
                        src="https://www.fechamentobrutal.com.br/wp-content/uploads/2025/04/Selos-de-SEG.webp" 
                        alt="Site Seguro - Google Site Seguro - SiteLock - CodeGuard" 
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

        </div>

        {/* Bottom Section */}
        <div className="text-center space-y-6 pt-8 border-t border-white/10">
            
            {/* Copyright */}
            <p className="text-[#CCCCCC] text-[15px]">
                Copyright © 2025 - <strong className="text-white">Fechamento Brutal</strong> — Todos os direitos reservados.
            </p>

            {/* Links */}
            <div className="flex justify-center gap-1 text-[#CCCCCC] text-[15px]">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">Política de Reembolso</a>
            </div>

            {/* Disclaimer */}
            <p className="text-[#999999] text-[13px] leading-relaxed max-w-5xl mx-auto">
                Os resultados apresentados nesta página são reais, porém individuais, e podem variar de acordo com o nível de aplicação, comprometimento e contexto profissional de cada pessoa. O método Fechamento Brutal foi desenvolvido a partir de experiências práticas de vendas e negociação, sendo validado por milhares de alunos.
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
