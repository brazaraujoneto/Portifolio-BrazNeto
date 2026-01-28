/**
 * =====================================================
 * PAGINA PRINCIPAL DO PORTFOLIO
 * =====================================================
 *
 * Este arquivo e o ponto de entrada do site.
 * Ele monta todas as secoes e controla a navegacao.
 *
 * ESTRUTURA:
 * - ThemeProvider: Controla dark/light mode
 * - LanguageProvider: Controla idioma EN/PT
 * - PortfolioContent: O conteudo real da pagina
 *
 * COMO FUNCIONA A NAVEGACAO:
 * 1. Cada secao tem um "ref" (referencia ao elemento HTML)
 * 2. Quando rola a pagina, detectamos qual secao esta visivel
 * 3. handleNavigate() faz scroll suave ate a secao clicada
 */

"use client"; // Indica que este componente roda no navegador (client-side)

// ===== IMPORTS =====
// Hooks do React para gerenciar estado e efeitos
import { useState, useRef, useEffect } from "react";

// Providers de contexto (compartilham dados entre componentes)
import { LanguageProvider } from "@/contexts/language-context";
import { ThemeProvider } from "@/contexts/theme-context";

// Componentes de navegacao
import { Navbar } from "@/components/navbar";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";

// Efeito visual de fundo
import { SpotlightBackground } from "@/components/spotlight-background";

// Secoes da pagina (cada uma e um componente separado)
import { HeroSection } from "@/components/sections/hero-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";

/**
 * Componente principal que renderiza o conteudo do portfolio
 */
function PortfolioContent() {
  // ===== ESTADO =====
  // Guarda qual secao esta ativa (para destacar no menu)
  const [activeSection, setActiveSection] = useState("home");

  // ===== REFERENCIAS =====
  // useRef cria uma "referencia" para elementos HTML
  // Usamos para saber a posicao de cada secao na pagina
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  // ===== EFEITO: DETECTAR SCROLL =====
  // useEffect roda codigo quando o componente monta ou atualiza
  useEffect(() => {
    // Funcao que roda toda vez que o usuario rola a pagina
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Posicao atual + offset

      // Para cada secao, verifica se esta visivel
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop; // Posicao Y da secao
          const offsetHeight = ref.current.offsetHeight; // Altura da secao

          // Se a posicao de scroll esta dentro desta secao
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(key); // Marca como ativa
          }
        }
      });
    };

    // Adiciona o listener de scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove o listener quando o componente desmonta
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // [] = roda apenas uma vez quando monta

  // ===== FUNCAO DE NAVEGACAO =====
  // Chamada quando clica em um item do menu
  const handleNavigate = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref.current) {
      // Calcula posicao (menos 80px para compensar navbar fixa)
      const offsetTop = ref.current.offsetTop - 80;
      // Faz scroll suave ate a posicao
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setActiveSection(section);
  };

  // ===== RENDERIZACAO =====
  return (
    <main className="relative min-h-screen bg-background">
      {/* Efeito de luz que segue o mouse */}
      <SpotlightBackground />

      {/* Navbar fixa no topo (desktop) */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Container das secoes */}
      <div className="relative z-10">
        {/* SECAO 1: Hero (apresentacao inicial) */}
        <div ref={sectionRefs.home} id="home">
          <HeroSection onNavigate={handleNavigate} />
        </div>

        {/* SECAO 2: Experiencia e Skills */}
        <div ref={sectionRefs.experience} id="experience">
          <ExperienceSection onNavigate={handleNavigate} />
        </div>

        {/* SECAO 3: Projetos */}
        <div ref={sectionRefs.projects} id="projects">
          <ProjectsSection />
        </div>

        {/* SECAO 4: Contato */}
        {/* pb-20 md:pb-0 = padding bottom no mobile para nao cobrir o menu */}
        <div ref={sectionRefs.contact} id="contact" className="pb-20 md:pb-0">
          <ContactSection />
        </div>
      </div>

      {/* Menu inferior (so aparece no mobile) */}
      <MobileBottomNav activeSection={activeSection} onNavigate={handleNavigate} />
    </main>
  );
}

/**
 * Componente exportado (o que o Next.js renderiza)
 * Envolve tudo com os Providers de tema e idioma
 */
export default function Portfolio() {
  return (
    // ThemeProvider: qualquer componente filho pode usar useTheme()
    <ThemeProvider>
      {/* LanguageProvider: qualquer componente filho pode usar useLanguage() */}
      <LanguageProvider>
        <PortfolioContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
