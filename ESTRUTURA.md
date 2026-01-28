# Documentacao do Portfolio - Vue.js 3

## IMPORTANTE: O que usar e o que ignorar

Este projeto foi convertido de Next.js para Vue.js. Por isso voce vera duas estruturas:

### USE APENAS ESTES ARQUIVOS (Vue.js):
```
src/                    <-- SEU CODIGO FICA AQUI
public/                 <-- IMAGENS E ARQUIVOS ESTATICOS
index.html              <-- ENTRADA DO APP
vite.config.js          <-- CONFIG DO VITE
package.json            <-- DEPENDENCIAS
tailwind.config.js      <-- CONFIG DO TAILWIND
postcss.config.js       <-- CONFIG DO POSTCSS
```

### IGNORE ESTES ARQUIVOS (React/Next.js - lixo do projeto anterior):
```
app/                    <-- IGNORAR (Next.js)
components/             <-- IGNORAR (React)
components/ui/          <-- IGNORAR (shadcn React)
contexts/               <-- IGNORAR (React)
hooks/                  <-- IGNORAR (React)
lib/                    <-- IGNORAR (React)
styles/                 <-- IGNORAR (Next.js)
*.tsx                   <-- IGNORAR (TypeScript React)
next.config.mjs         <-- IGNORAR (Next.js)
tsconfig.json           <-- IGNORAR (TypeScript)
components.json         <-- IGNORAR (shadcn)
tailwind.config.ts      <-- IGNORAR (usa o .js)
postcss.config.mjs      <-- IGNORAR (usa o .js)
```

---

## ESTRUTURA VUE.JS EXPLICADA

```
portfolio/
|
|-- index.html              # Ponto de entrada HTML
|-- package.json            # Dependencias (npm install)
|-- vite.config.js          # Config do bundler Vite
|-- tailwind.config.js      # Config do Tailwind CSS
|-- postcss.config.js       # Processa o CSS
|
|-- public/                 # Arquivos estaticos (nao processados)
|   |-- images/
|       |-- profile.jpg     # SUA FOTO (troque por sua foto real)
|       |-- project-*.jpg   # PRINTS DOS PROJETOS
|       |-- university.jpg  # FOTO DA FACULDADE
|
|-- src/                    # CODIGO FONTE (voce edita aqui)
    |
    |-- main.js             # Inicializa o Vue e monta o App
    |
    |-- App.vue             # Componente raiz (junta tudo)
    |
    |-- assets/
    |   |-- css/
    |       |-- main.css    # Estilos globais + variaveis de cor
    |
    |-- i18n/
    |   |-- translations.js # TODOS OS TEXTOS (EN/PT)
    |
    |-- components/
        |
        |-- Navbar.vue              # Barra de navegacao fixa
        |-- SpotlightBackground.vue # Efeito de luz que segue mouse
        |-- MobileBottomNav.vue     # Menu inferior (mobile)
        |
        |-- sections/
            |-- HeroSection.vue       # Secao inicial (foto + nome)
            |-- ExperienceSection.vue # Timeline de experiencias
            |-- ProjectsSection.vue   # Grade de projetos
            |-- ContactSection.vue    # Formulario de contato
```

---

## COMO OS ARQUIVOS SE CONECTAM

```
index.html
    |
    v
src/main.js (cria instancia Vue)
    |
    v
src/App.vue (componente principal)
    |
    |-- Navbar.vue (cabecalho)
    |-- SpotlightBackground.vue (fundo animado)
    |-- HeroSection.vue
    |-- ExperienceSection.vue
    |-- ProjectsSection.vue
    |-- ContactSection.vue
    |-- MobileBottomNav.vue (rodape mobile)
    |
    |-- i18n/translations.js (textos em EN/PT)
    |-- assets/css/main.css (estilos)
```

### Fluxo de dados:

1. **App.vue** define o estado global:
   - `isDark` (true/false) - tema escuro/claro
   - `language` ('en'/'pt') - idioma atual
   - `activeSection` - secao visivel

2. **provide()** compartilha esses estados com todos os filhos

3. **Cada componente filho** usa `inject()` para acessar:
   ```javascript
   const isDark = inject('isDark')
   const language = inject('language')
   const t = inject('t')  // funcao de traducao
   ```

---

## ONDE EDITAR SEUS DADOS

### 1. Textos e informacoes pessoais
**Arquivo:** `src/i18n/translations.js`

```javascript
export const translations = {
  en: {
    name: "Seu Nome",           // <-- MUDE AQUI
    role: "Fullstack Developer", // <-- MUDE AQUI
    bio: "Sua descricao...",     // <-- MUDE AQUI
    
    experiences: [
      {
        title: "Seu Cargo",
        company: "Empresa",
        period: "Jan 2022 - Atual",
        description: ["O que voce fez..."]
      }
    ],
    
    projects: [
      {
        title: "Nome do Projeto",
        description: "O que faz...",
        tags: ["React", "Node.js"],
        image: "/images/project-1.jpg"
      }
    ],
    
    skills: [
      { name: "React.js", icon: "code" },
      // ...
    ]
  },
  
  pt: {
    // Mesma estrutura em portugues
  }
}
```

### 2. Cores do tema
**Arquivo:** `src/assets/css/main.css`

```css
/* Tema claro */
:root {
  --color-bg: #e8eef4;
  --color-text: #0f172a;
  --color-primary: #2563eb;
  /* ... */
}

/* Tema escuro */
.dark {
  --color-bg: #0a0f1a;
  --color-text: #e2e8f0;
  --color-primary: #3b82f6;
  /* ... */
}
```

### 3. Imagens
**Pasta:** `public/images/`

- `profile.jpg` - Sua foto de perfil
- `project-*.jpg` - Screenshots dos projetos
- `university.jpg` - Foto da faculdade

---

## COMO RODAR LOCAL

### Requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos

```bash
# 1. Baixe o ZIP e extraia

# 2. Abra o terminal na pasta do projeto

# 3. Instale as dependencias
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev

# 5. Abra no navegador
# http://localhost:5173
```

### Hot Reload
Quando voce salvar qualquer arquivo `.vue` ou `.css`, o navegador atualiza automaticamente.

---

## COMANDOS DISPONIVEIS

```bash
npm run dev      # Roda em desenvolvimento (localhost:5173)
npm run build    # Gera versao de producao (pasta dist/)
npm run preview  # Visualiza a build de producao
```

---

## NAO TEM BACKEND

Este portfolio e 100% frontend. Nao tem:
- Servidor Node.js
- Banco de dados
- API

O formulario de contato so simula envio. Para funcionar de verdade, voce precisaria:
- Usar um servico como Formspree, EmailJS ou Netlify Forms
- Ou criar uma API propria

---

## DEPLOY (PUBLICAR ONLINE)

### Vercel (mais facil)
1. Suba o codigo para GitHub
2. Va em vercel.com
3. Importe o repositorio
4. Deploy automatico

### Netlify
1. `npm run build`
2. Arraste a pasta `dist/` para netlify.com

### GitHub Pages
1. `npm run build`
2. Suba a pasta `dist/` para um branch `gh-pages`

---

## RESUMO RAPIDO

| Voce quer...                | Edite este arquivo                |
|-----------------------------|-----------------------------------|
| Mudar textos/experiencias   | `src/i18n/translations.js`        |
| Mudar cores                 | `src/assets/css/main.css`         |
| Mudar layout de uma secao   | `src/components/sections/*.vue`   |
| Mudar navegacao             | `src/components/Navbar.vue`       |
| Adicionar imagens           | `public/images/`                  |

---

## DUVIDAS COMUNS

**P: Por que tem arquivos .tsx se e Vue?**
R: Sao restos do projeto anterior (Next.js/React). Pode ignorar ou deletar.

**P: O que e a pasta components/ui/?**
R: Componentes React do shadcn. Nao sao usados no Vue. Pode ignorar.

**P: Posso deletar os arquivos que nao uso?**
R: Sim! Mantenha apenas: `src/`, `public/`, `index.html`, `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`
