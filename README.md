# Portfolio - Documentacao para Dev Jr

## Como Rodar o Projeto

```bash
# 1. Instale as dependencias (so precisa fazer 1x)
npm install

# 2. Rode o servidor de desenvolvimento
npm run dev

# 3. Abra no navegador
# http://localhost:3000
```

---

## Estrutura de Pastas (O que cada coisa faz)

```
/
├── app/                      # Paginas do site (Next.js App Router)
│   ├── layout.tsx           # Layout global (envolve todas as paginas)
│   ├── page.tsx             # Pagina principal (localhost:3000)
│   └── globals.css          # Estilos globais e variaveis de cor
│
├── components/              # Componentes reutilizaveis
│   ├── navbar.tsx           # Barra de navegacao fixa no topo
│   ├── mobile-bottom-nav.tsx # Menu inferior (so aparece no celular)
│   ├── spotlight-background.tsx # Efeito de luz que segue o mouse
│   │
│   ├── sections/            # Secoes da pagina
│   │   ├── hero-section.tsx      # Secao inicial com foto e nome
│   │   ├── experience-section.tsx # Experiencia, educacao e skills
│   │   ├── projects-section.tsx  # Grid de projetos
│   │   └── contact-section.tsx   # Formulario de contato
│   │
│   └── ui/                  # Componentes base do shadcn/ui
│       ├── button.tsx       # Botoes estilizados
│       ├── card.tsx         # Cards com bordas arredondadas
│       └── input.tsx        # Campos de texto
│
├── contexts/                # Gerenciamento de estado global
│   ├── language-context.tsx # Controla idioma (EN/PT) e traducoes
│   └── theme-context.tsx    # Controla tema (dark/light)
│
├── public/                  # Arquivos estaticos
│   └── images/              # Suas imagens (profile.jpg, projetos, etc)
│
└── lib/
    └── utils.ts             # Funcao cn() para juntar classes CSS
```

---

## Conceitos Importantes

### 1. Componentes React (O Basico)

Um componente e uma funcao que retorna HTML (JSX):

```tsx
// Componente simples
function MeuBotao() {
  return <button>Clique aqui</button>
}

// Componente com propriedades (props)
function Saudacao({ nome }: { nome: string }) {
  return <h1>Ola, {nome}!</h1>
}

// Usando:
<Saudacao nome="Braz" />  // Renderiza: <h1>Ola, Braz!</h1>
```

### 2. useState - Guardar Dados que Mudam

```tsx
import { useState } from "react"

function Contador() {
  // [valor, funcaoParaMudar] = useState(valorInicial)
  const [contador, setContador] = useState(0)
  
  return (
    <div>
      <p>Voce clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Clique
      </button>
    </div>
  )
}
```

### 3. useContext - Compartilhar Dados entre Componentes

Usado neste projeto para tema e idioma:

```tsx
// Em qualquer componente, voce pode usar:
const { language, setLanguage, t } = useLanguage()

// t() busca a traducao automaticamente
<h1>{t("hero.greeting")}</h1>  // "Hello, I'm" ou "Ola, eu sou"

// setLanguage() muda o idioma
<button onClick={() => setLanguage("pt")}>PT</button>
```

### 4. Tailwind CSS - Classes Utilitarias

Em vez de escrever CSS separado, usamos classes direto no HTML:

```tsx
// CSS tradicional:
// .botao { padding: 16px; background: blue; border-radius: 8px; }

// Tailwind:
<button className="p-4 bg-blue-500 rounded-lg">
  Botao
</button>

// Classes comuns:
// p-4      = padding: 16px (4 x 4px)
// m-2      = margin: 8px
// text-lg  = font-size grande
// flex     = display: flex
// gap-4    = espaco entre itens flex
// rounded  = border-radius
// bg-*     = background-color
// text-*   = color do texto
```

### 5. Responsividade com Tailwind

Prefixos para diferentes tamanhos de tela:

```tsx
<div className="
  flex-col      // Mobile: coluna
  md:flex-row   // Tablet (768px+): linha
  lg:gap-8      // Desktop (1024px+): gap maior
">
```

- Sem prefixo = mobile first (padrao)
- `md:` = 768px+ (tablets)
- `lg:` = 1024px+ (laptops)
- `xl:` = 1280px+ (monitores grandes)

---

## Como Editar o Conteudo

### Mudar Seu Nome e Bio

Arquivo: `contexts/language-context.tsx`

Procure por `translations` e edite:

```tsx
const translations = {
  en: {
    "hero.greeting": "Hello, I'm",
    "hero.name": "Braz Tadeu",           // <- Seu nome aqui
    "hero.title": "FULLSTACK DEVELOPER", // <- Seu titulo
    "hero.bio": "Transitioning from...", // <- Sua bio
    // ...
  },
  pt: {
    "hero.greeting": "Ola, eu sou",
    "hero.name": "Braz Tadeu",           // <- Mesmo nome
    "hero.title": "DESENVOLVEDOR FULLSTACK",
    "hero.bio": "Em transicao de...",    // <- Bio em portugues
    // ...
  }
}
```

### Trocar Sua Foto

1. Coloque sua foto em `/public/images/`
2. Renomeie para `profile.jpg` (ou edite o caminho)
3. Arquivo: `components/sections/hero-section.tsx`

```tsx
<Image
  src="/images/profile.jpg"  // <- Caminho da sua foto
  alt="Profile photo"
  // ...
/>
```

### Adicionar/Editar Projetos

Arquivo: `components/sections/projects-section.tsx`

Procure pelo array `projects`:

```tsx
const projects = {
  en: [
    {
      title: "Fullstack CRM",
      description: "Enterprise-grade customer...",
      tags: ["REACT", "POSTGRESQL"],
      date: "Dec 2023",
      category: "React",            // Para o filtro
      image: "/images/project-crm.jpg",
      link: "https://github.com/..." // Link do projeto
    },
    // Adicione mais projetos aqui...
  ],
  pt: [
    // Mesma estrutura em portugues
  ]
}
```

### Editar Experiencias

Arquivo: `components/sections/experience-section.tsx`

Procure por `experiences`:

```tsx
const experiences = {
  en: [
    {
      title: "Fullstack Developer",
      company: "INNYX Solutions",
      period: "Jan 2022 - Current",
      current: true,                    // Marca como emprego atual
      description: [
        "Building scalable React...",   // Lista de responsabilidades
        "Transitioned legacy infra...",
      ],
    },
    // ...
  ],
  pt: [
    // Mesma estrutura em portugues
  ]
}
```

### Editar Skills

Mesmo arquivo, procure por `skills`:

```tsx
const skills = [
  { name: "React.js", icon: "code" },
  { name: "Node.js", icon: "code" },
  { name: "AWS / GCP", icon: "cloud" },
  // Adicione mais...
]
```

---

## Como o Tema Dark/Light Funciona

Arquivo: `contexts/theme-context.tsx`

```tsx
// O tema e guardado no estado
const [theme, setTheme] = useState<"dark" | "light">("dark")

// Quando muda, adiciona/remove classe "dark" no <html>
useEffect(() => {
  document.documentElement.classList.toggle("dark", theme === "dark")
}, [theme])
```

Arquivo: `app/globals.css`

```css
/* Cores do modo claro (padrao) */
:root {
  --background: #e8eef4;
  --foreground: #0f172a;
  /* ... */
}

/* Cores do modo escuro */
.dark {
  --background: #0a0f1a;
  --foreground: #e2e8f0;
  /* ... */
}
```

Para mudar cores, edite as variaveis no `globals.css`.

---

## Como o Idioma Funciona

Arquivo: `contexts/language-context.tsx`

1. **Estado global** guarda o idioma atual ("en" ou "pt")
2. **Objeto translations** tem todas as strings em ambos idiomas
3. **Funcao t()** busca a traducao correta:

```tsx
// Definicao
function t(key: string): string {
  return translations[language][key] || key
}

// Uso em qualquer componente
const { t } = useLanguage()
<h1>{t("hero.name")}</h1>
```

Para adicionar nova traducao:
1. Adicione a chave em `translations.en`
2. Adicione a mesma chave em `translations.pt`
3. Use `t("sua.chave")` no componente

---

## Dicas de Debug

Adicione `console.log` para ver o que esta acontecendo:

```tsx
function MeuComponente() {
  const { language } = useLanguage()
  
  console.log("[v0] Idioma atual:", language)
  
  return <div>...</div>
}
```

Abra o DevTools (F12) > Console para ver os logs.

---

## Comandos Uteis

```bash
# Rodar em desenvolvimento (com hot reload)
npm run dev

# Criar versao de producao
npm run build

# Rodar versao de producao
npm start

# Verificar erros de TypeScript
npx tsc --noEmit
```

---

## Proximos Passos para Aprender

1. **Tailwind CSS**: https://tailwindcss.com/docs
2. **React Basics**: https://react.dev/learn
3. **Next.js**: https://nextjs.org/docs
4. **TypeScript**: https://www.typescriptlang.org/docs

---

## Estrutura Visual do Site

```
+--------------------------------------------------+
|  NAVBAR (fixo no topo)                           |
|  [Logo]              [Home][Exp][Projects][Contact] [EN|PT] [Theme] |
+--------------------------------------------------+
|                                                  |
|  HERO SECTION                                    |
|  +--------------------+  +------------------+    |
|  | Texto              |  |    Foto          |    |
|  | - Titulo           |  |    (circular)    |    |
|  | - Bio              |  |                  |    |
|  | - Botoes           |  +------------------+    |
|  | - Tags             |                          |
|  +--------------------+                          |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  EXPERIENCE SECTION                              |
|  +---------------+  +------------------------+   |
|  | Timeline      |  | Skills Grid            |   |
|  | - Job 1       |  | [React] [Node] [AWS]   |   |
|  | - Job 2       |  | [Docker] [MongoDB]     |   |
|  +---------------+  +------------------------+   |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  PROJECTS SECTION                                |
|  [All] [React] [Node.js] [Docker] <- Filtros    |
|  +--------+  +--------+  +--------+             |
|  |Projeto1|  |Projeto2|  |Projeto3|             |
|  +--------+  +--------+  +--------+             |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  CONTACT SECTION                                 |
|  +---------------------------+                   |
|  | Formulario de Contato     |                   |
|  | [Nome] [Email] [Mensagem] |                   |
|  | [Enviar]                  |                   |
|  +---------------------------+                   |
|  [GitHub] [LinkedIn] [Email]                     |
|                                                  |
+--------------------------------------------------+
```

Boa sorte nos estudos! Qualquer duvida, o codigo esta comentado.
