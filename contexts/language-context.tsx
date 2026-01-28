/**
 * =====================================================
 * CONTEXTO DE IDIOMA (EN/PT)
 * =====================================================
 *
 * Este arquivo controla a troca de idioma do site.
 *
 * COMO FUNCIONA:
 * 1. Definimos todas as traducoes no objeto "translations"
 * 2. O estado "language" guarda o idioma atual ("en" ou "pt")
 * 3. A funcao t() busca a traducao correta baseada no idioma
 *
 * COMO USAR EM QUALQUER COMPONENTE:
 *
 *   import { useLanguage } from "@/contexts/language-context"
 *
 *   function MeuComponente() {
 *     const { language, setLanguage, t } = useLanguage()
 *
 *     return (
 *       <div>
 *         <h1>{t("hero.name")}</h1>
 *         <button onClick={() => setLanguage("pt")}>PT</button>
 *       </div>
 *     )
 *   }
 *
 * COMO ADICIONAR NOVAS TRADUCOES:
 * 1. Adicione a chave em translations.en (ex: "minha.chave": "My Text")
 * 2. Adicione a mesma chave em translations.pt (ex: "minha.chave": "Meu Texto")
 * 3. Use t("minha.chave") no componente
 */

"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

// Tipos de idioma aceitos
type Language = "en" | "pt";

// Tipo do contexto (o que ele fornece)
interface LanguageContextType {
  language: Language; // Idioma atual
  setLanguage: (lang: Language) => void; // Funcao para mudar idioma
  t: (key: string) => string; // Funcao para buscar traducao
}

/**
 * =====================================================
 * TRADUCOES
 * =====================================================
 *
 * EDITE AQUI para mudar textos do site!
 *
 * Estrutura: "secao.elemento": "Texto"
 * Exemplo: "hero.name": "Seu Nome"
 */
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.role": "FULLSTACK DEVELOPER",
    "hero.name": "Braz Tadeu",
    "hero.bio":
      "Transitioning from Infrastructure to Fullstack Development. Building scalable apps with a foundation in cloud systems.",
    "hero.viewProjects": "View Projects",
    "hero.resume": "Resume",
    "hero.expertise": "EXPERTISE",

    // Experience
    "exp.title": "My Journey",
    "exp.subtitle": "Evolving from Infrastructure Stability to Fullstack Innovation.",
    "exp.experience": "Experience",
    "exp.education": "Education",
    "exp.skills": "Skills & Tech",
    "exp.present": "PRESENT",
    "exp.viewProjects": "View My Projects",

    // Jobs
    "job1.title": "Fullstack Developer",
    "job1.company": "INNYX Solutions",
    "job1.period": "Jan 2022 — Current",
    "job1.desc1": "Building scalable React & Node.js architectures.",
    "job1.desc2": "Transitioned legacy infra to modern CI/CD pipelines.",

    "job2.title": "Infrastructure Engineer",
    "job2.company": "MARJOM Systems",
    "job2.period": "Mar 2020 — Dec 2021",
    "job2.desc1": "Managed complex cloud environments and virtualization.",
    "job2.desc2": "Optimized database performance and network security.",

    // Education
    "edu1.title": "B.S. Computer Science",
    "edu1.school": "Tech University of Excellence",
    "edu1.period": "2016 — 2020",

    "edu2.title": "Fullstack Certification",
    "edu2.school": "Global Code Academy",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle":
      "Transitioning from Infrastructure to Fullstack. Building scalable solutions with a focus on automation and user experience.",
    "projects.all": "All",

    "project1.title": "Fullstack CRM",
    "project1.desc":
      "Enterprise-grade customer relationship management system with real-time analytics.",
    "project1.date": "Dec 2023",

    "project2.title": "K8s Dashboard",
    "project2.desc":
      "Real-time monitoring and management dashboard for Kubernetes clusters across regions.",
    "project2.date": "Nov 2023",

    "project3.title": "CI/CD Pipeline",
    "project3.desc":
      "Automated infrastructure provisioning and application deployment with Terraform.",
    "project3.date": "Oct 2023",

    "project4.title": "API Gateway",
    "project4.desc":
      "High-performance API gateway with rate limiting, caching, and authentication.",
    "project4.date": "Sep 2023",

    "project5.title": "Real-time Chat",
    "project5.desc":
      "WebSocket-based chat application with end-to-end encryption and file sharing.",
    "project5.date": "Aug 2023",

    "project6.title": "Analytics Platform",
    "project6.desc":
      "Business intelligence dashboard with custom reports and data visualization.",
    "project6.date": "Jul 2023",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle":
      "Transitioning from Infra to Fullstack. Let's build something scalable and beautiful together.",
    "contact.name": "Name",
    "contact.namePlaceholder": "John Doe",
    "contact.email": "Email",
    "contact.emailPlaceholder": "john@example.com",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell me about your project...",
    "contact.send": "Send Message",
    "contact.connect": "CONNECT WITH ME",

    // Footer
    "footer.copyright": "Developer Portfolio",
    "footer.tagline": "Transitioning to Fullstack",
  },
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    // Hero
    "hero.role": "DESENVOLVEDOR FULLSTACK",
    "hero.name": "Braz Tadeu",
    "hero.bio":
      "Transição de Infraestrutura para Desenvolvimento Fullstack. Construindo aplicações escaláveis com base em sistemas cloud.",
    "hero.viewProjects": "Ver Projetos",
    "hero.resume": "Currículo",
    "hero.expertise": "ESPECIALIDADES",

    // Experience
    "exp.title": "Minha Jornada",
    "exp.subtitle": "Evoluindo da Estabilidade de Infraestrutura para Inovação Fullstack.",
    "exp.experience": "Experiência",
    "exp.education": "Educação",
    "exp.skills": "Habilidades & Tech",
    "exp.present": "ATUAL",
    "exp.viewProjects": "Ver Meus Projetos",

    // Jobs
    "job1.title": "Desenvolvedor Fullstack",
    "job1.company": "INNYX Solutions",
    "job1.period": "Jan 2022 — Atual",
    "job1.desc1": "Construindo arquiteturas escaláveis em React & Node.js.",
    "job1.desc2": "Migrou infraestrutura legada para pipelines CI/CD modernos.",

    "job2.title": "Engenheiro de Infraestrutura",
    "job2.company": "MARJOM Systems",
    "job2.period": "Mar 2020 — Dez 2021",
    "job2.desc1": "Gerenciou ambientes cloud complexos e virtualização.",
    "job2.desc2": "Otimizou performance de banco de dados e segurança de rede.",

    // Education
    "edu1.title": "Bacharelado em Ciência da Computação",
    "edu1.school": "Universidade de Excelência em Tecnologia",
    "edu1.period": "2016 — 2020",

    "edu2.title": "Certificação Fullstack",
    "edu2.school": "Academia Global de Código",

    // Projects
    "projects.title": "Projetos",
    "projects.subtitle":
      "Transição de Infraestrutura para Fullstack. Construindo soluções escaláveis com foco em automação e experiência do usuário.",
    "projects.all": "Todos",

    "project1.title": "CRM Fullstack",
    "project1.desc":
      "Sistema de gestão de relacionamento com cliente de nível empresarial com análises em tempo real.",
    "project1.date": "Dez 2023",

    "project2.title": "Dashboard K8s",
    "project2.desc":
      "Dashboard de monitoramento e gestão em tempo real para clusters Kubernetes em várias regiões.",
    "project2.date": "Nov 2023",

    "project3.title": "Pipeline CI/CD",
    "project3.desc":
      "Provisionamento automatizado de infraestrutura e deploy de aplicações com Terraform.",
    "project3.date": "Out 2023",

    "project4.title": "API Gateway",
    "project4.desc":
      "Gateway de API de alta performance com rate limiting, cache e autenticação.",
    "project4.date": "Set 2023",

    "project5.title": "Chat em Tempo Real",
    "project5.desc":
      "Aplicação de chat baseada em WebSocket com criptografia ponta-a-ponta e compartilhamento de arquivos.",
    "project5.date": "Ago 2023",

    "project6.title": "Plataforma de Analytics",
    "project6.desc":
      "Dashboard de business intelligence com relatórios customizados e visualização de dados.",
    "project6.date": "Jul 2023",

    // Contact
    "contact.title": "Entre em Contato",
    "contact.subtitle":
      "Transição de Infra para Fullstack. Vamos construir algo escalável e bonito juntos.",
    "contact.name": "Nome",
    "contact.namePlaceholder": "João Silva",
    "contact.email": "Email",
    "contact.emailPlaceholder": "joao@exemplo.com",
    "contact.message": "Mensagem",
    "contact.messagePlaceholder": "Conte-me sobre seu projeto...",
    "contact.send": "Enviar Mensagem",
    "contact.connect": "CONECTE-SE COMIGO",

    // Footer
    "footer.copyright": "Portfolio de Desenvolvedor",
    "footer.tagline": "Transição para Fullstack",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
