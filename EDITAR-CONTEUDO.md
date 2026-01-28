# Guia Rapido: Como Editar o Portfolio

## 1. Rodar o Projeto

```bash
npm install    # Primeira vez apenas
npm run dev    # Abre em http://localhost:3000
```

---

## 2. Trocar Seu Nome e Textos

**Arquivo:** `contexts/language-context.tsx`

Procure por `translations` e edite os textos:

```tsx
// Linha ~60
"hero.name": "Braz Tadeu",  // <- Coloque seu nome aqui
"hero.bio": "Sua bio...",   // <- Sua descricao
```

---

## 3. Trocar Sua Foto

1. Coloque sua foto em: `public/images/`
2. Renomeie para `profile.jpg`

OU edite o caminho em `components/sections/hero-section.tsx`:
```tsx
src="/images/sua-foto.jpg"
```

---

## 4. Editar Projetos

**Arquivo:** `components/sections/projects-section.tsx`

Procure por `// SEUS PROJETOS` e edite:

```tsx
{
  title: "Nome do Projeto",
  description: "Descricao...",
  tags: ["REACT", "NODE"],
  date: "Jan 2024",
  category: "React",
  link: "https://github.com/seu-user/projeto"
}
```

---

## 5. Editar Experiencias

**Arquivo:** `components/sections/experience-section.tsx`

Procure pelo array de experiencias e edite:

```tsx
{
  title: "Seu Cargo",
  company: "Nome da Empresa",
  period: "2022 - Atual",
  current: true,
  descriptions: ["Responsabilidade 1", "Responsabilidade 2"]
}
```

---

## 6. Mudar Cores

**Arquivo:** `app/globals.css`

Edite as variaveis:

```css
/* Modo claro */
:root {
  --background: #e8eef4;      /* Cor de fundo */
  --primary: #2563eb;         /* Cor principal (botoes) */
  --accent: #3b82f6;          /* Cor de destaque */
}

/* Modo escuro */
.dark {
  --background: #0a0f1a;      /* Fundo escuro */
  --primary: #3b82f6;         /* Cor principal */
}
```

---

## 7. Adicionar Novas Traducoes

**Arquivo:** `contexts/language-context.tsx`

```tsx
// Em translations.en:
"nova.chave": "English text",

// Em translations.pt:
"nova.chave": "Texto em portugues",
```

Depois use no componente:
```tsx
{t("nova.chave")}
```

---

## Estrutura de Arquivos Importantes

```
contexts/language-context.tsx  -> Textos EN/PT
components/sections/
  hero-section.tsx             -> Secao inicial (foto + nome)
  experience-section.tsx       -> Experiencia e skills
  projects-section.tsx         -> Grid de projetos
  contact-section.tsx          -> Formulario de contato
app/globals.css                -> Cores e estilos
public/images/                 -> Suas imagens
```

---

## Dica: Hot Reload

O projeto atualiza automaticamente quando voce salva!
Nao precisa dar refresh no navegador.
