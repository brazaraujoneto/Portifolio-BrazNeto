// importação do botão do whatsapp flutuante

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function FloatingWhatsApp() {
  // Personalize aqui seu número e mensagem
  const phoneNumber = "5592933008304"; 
  const message = "Olá! Gostaria de falar sobre seus serviços.";
  
  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-40 p-2 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-110 flex items-center justify-center"
      aria-label="Contato pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Link>
  );
}