# Teste Econverse - Vaga Front-End

Este repositório contém a implementação do teste técnico para a vaga de **Desenvolvedor Front-end Júnior (E-commerce)** na **Econverse**. 

O projeto foi desenvolvido buscando uma alta fidelidade ao design do Figma, respeitando as exigências técnicas da vaga (sem uso de frameworks UI prontos como Bootstrap/Tailwind) e priorizando a organização e a componentização.

---

## 🚀 Tecnologias e Ferramentas Utilizadas

O desenvolvimento foi feito pensando em performance, componentização e escalabilidade para e-commerce:

- **[React 19](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)**
- **[Vite](https://vitejs.dev/)** (Para build rápido e otimizado)
- **[Sass (SCSS)](https://sass-lang.com/)** (Estilização modular e customizada)
- **[ESLint](https://eslint.org/)** (Garantia de padronização e boas práticas no código)

---

## 🎯 Requisitos e Funcionalidades Desenvolvidas

A aplicação foi montada para simular perfeitamente a estrutura de uma Home de E-commerce. Os seguintes objetivos foram alcançados:

- [x] **Construção 100% Customizada**: Todo o layout (Header, Banner, Vitrines, Rodapé, etc) foi construído baseando-se no Sass, sem uso de bibliotecas UI.
- [x] **Vitrine de Produtos**: Renderização dinâmica de produtos carregados a partir dos dados do JSON.
- [x] **Interação e Modal**: Ao clicar em qualquer produto da vitrine, um modal interativo é sobreposto contendo a imagem, preço e detalhes do respectivo produto focado.
- [x] **Fidelidade Visual (Pixel-Perfect)**: Cuidado ativo aos detalhes de fonte, alinhamentos, tamanhos de botões e cores, extraindo fielmente os estilos do Figma da Econverse.
- [x] **Semântica HTML e SEO**: Utilização de tags semânticas (como `<main>`, `<section>`, `<header>`, `<footer>`) para maximizar a acessibilidade e indexação por mecanismos de busca.

---

## 📂 Arquitetura e Organização do Projeto (`/src`)

A estrutura adotada no repositório preza pela escalabilidade e clareza, possuindo a seguinte arquitetura de diretórios:

```text
├── src/
│   ├── assets/       # Arquivos estáticos (imagens, ícones)
│   ├── components/   # Componentes isolados e independentes:
│   │   ├── BrandSection      # Seção de marcas (navegue por marcas)
│   │   ├── CategorySection   # Filtros e seções de categoria (tecnologia, supermercado...)
│   │   ├── HeroBanner        # Banner principal com chamada para ação
│   │   ├── Newsletter        # Captação de leads e assinaturas
│   │   ├── PartnerSection    # Parcerias divididas em blocos promocionais
│   │   ├── ProductCard       # Componente individual do card do produto
│   │   ├── ProductModal      # Modal de detalhamento com fechamento/interação
│   │   ├── ProductSection    # Vitrine organizadora de produtos (Produtos relacionados)
│   │   ├── Header            # Cabeçalho da loja
│   │   └── Footer            # Rodapé informativo
│   ├── data/                 # Armazenamento central do "products.json" (mock dos dados)
│   ├── pages/        # Telas completas (Home.tsx como página principal)
│   ├── services/     # Configuração de requisições de API (api.ts)
│   ├── styles/       # Variáveis globais do Sass, mixins e resets de CSS
│   ├── types/        # Interfaces globais TypeScript (ex: tipagem "Product")
│   ├── App.tsx       # Root Component do React
│   └── main.tsx      # Entrypoint de injeção da aplicação na DOM
```

---

## 🛠️ Como Clonar, Executar e Testar o Projeto

Siga as breves instruções abaixo para colocar a aplicação rodando no seu ambiente local:

### 1. Pré-Requisitos
- Ter o **[Node.js](https://nodejs.org/)** instalado.

### 2. Passo a Passo

Clone o diretório do projeto:
```bash
git clone https://github.com/Damprelli11/econverse.git
cd econverse
```

Instale as dependências contidas no pacote:
```bash
npm install
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Abra o seu navegador e acesse: **[http://localhost:5173](http://localhost:5173)**. A página carregará automaticamente as alterações e funcionalidades.

### Scripts Adicionais
- **Para executar a análise de Linter (verificação de código)**: `npm run lint`
- **Para gerar o build otimizado para produção**: `npm run build && npm run preview`

---

## 👨‍💻 Sobre o Autor

**Olá, eu sou o Renan!** 👋

Sou um Desenvolvedor Front-End apaixonado por criar interfaces web escaláveis, dinâmicas e focadas na melhor experiência para o usuário (UX). Construir este desafio para a **Econverse** foi uma excelente oportunidade para demonstrar minhas habilidades com **React**, **TypeScript** e **Sass**, além de evidenciar minha atenção aos detalhes na reprodução _pixel-perfect_ de layouts no Figma.

Estou em constante evolução e buscando sempre implementar as melhores práticas de código (como componentização, SEO e acessibilidade), me mantendo sempre atualizado com as tecnologias mais modernas do ecossistema JavaScript.

Se quiser bater um papo, dar um feedback sobre meu código ou conhecer mais sobre mim e meus projetos, sinta-se à vontade para entrar em contato:

- 💼 **LinkedIn**: [https://www.linkedin.com/in/renan-damprelli/](https://www.linkedin.com/in/renan-damprelli/)
- 🐙 **GitHub**: [@Damprelli11](https://github.com/Damprelli11)
- 📧 **E-mail**: [renandamprelli@gmail.com]

---
_Agradeço à equipe da Econverse pela oportunidade do teste técnico!_ 🚀