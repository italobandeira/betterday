# BetterDay - Landing Page

Landing page moderna e minimalista para o aplicativo BetterDay, um rastreador de hábitos.

## 🎨 Design

A landing page feita com as cores e identidade visual do BetterDay:

- **Cor Principal**: Verde (#059669)
- **Cor Secundária**: Turquesa (#14b8a6)
- **Fundo Escuro**: Navy/Azul Escuro (#0f1621, #1a2332)
- **Estilo**: Moderno e Minimalista

## 📁 Estrutura do Projeto

```
betterday_landing_page/
├── index.html          # Página principal (PT-BR)
├── privacy.html        # Política de privacidade
├── terms.html          # Termos de uso
├── contact.html        # Contato (PT-BR)
├── robots.txt          # Diretivas para crawlers
├── sitemap.xml         # Sitemap com todas as URLs (PT + EN)
├── favicon.svg         # Ícone do site
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interatividade
├── SEO_AUDIT.md        # Auditoria SEO + plano de melhorias
├── en/                 # Versão em inglês (subpasta — padrão SEO)
│   ├── index.html      # Homepage em inglês
│   └── contact.html    # Contato em inglês
├── screenshots/        # Pasta para imagens do app
│   ├── home.jpg       # Tela principal (resumo diário)
│   ├── overview.jpg   # Rastreamento geral
│   ├── weekly.jpg     # Visão semanal
│   ├── details.jpg    # Página de detalhes do hábito
│   ├── create.jpg     # Criação de hábito
│   └── notes.jpg      # Anotações diárias
├── css/
│   ├── styles.css          # Estilos da landing page
│   ├── contact-styles.css  # Estilos da página de contato
│   ├── legal-styles.css    # Estilos das páginas legais
│   ├── blog-styles.css     # Estilos do blog (listagem)
│   └── article-styles.css  # Estilos dos artigos
├── blog/
│   ├── index.html                       # Listagem do blog
│   ├── como-criar-habitos-que-duram.html
│   ├── atomic-habits-resumo.html
│   ├── melhor-app-rastreamento-habitos.html
│   ├── rotina-matinal-produtividade.html
│   ├── como-parar-de-procrastinar.html
│   └── rss.xml                          # Feed RSS do blog
└── README.md          # Este arquivo
```

## 🚀 Como Usar

### 1. Adicionar as Capturas de Tela

Salve as imagens do seu aplicativo na pasta `screenshots/` com os seguintes nomes:

- `home.jpg` - Tela de resumo diário
- `overview.jpg` - Rastreamento geral com grid de hábitos
- `weekly.jpg` - Visualização semanal
- `details.jpg` - Página de detalhes com estatísticas
- `create.jpg` - Tela de criação de hábito
- `notes.jpg` - Tela de anotações diárias

### 2. Abrir a Landing Page

Simplesmente abra o arquivo `index.html` em seu navegador ou use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (usando npx)
npx http-server
```

Depois acesse `http://localhost:8000` no navegador.

## ✨ Funcionalidades

- ✅ Design responsivo (funciona em desktop, tablet e mobile)
- ✅ Animações suaves de scroll e entrada
- ✅ Header fixo com efeito de transparência
- ✅ Seção hero com destaque para o app
- ✅ Grid de recursos com 9 funcionalidades principais
- ✅ Galeria de capturas de tela
- ✅ Seção de download com botões para App Store e Google Play
- ✅ Footer completo com links
- ✅ Scroll suave entre seções
- ✅ Efeitos de hover em cards e botões

## 🎯 Seções da Página

1. **Header** - Logo e navegação fixa
2. **Hero** - Título principal com chamada para ação
3. **Features** - 9 cards mostrando os recursos do app
4. **Screenshots** - Galeria de imagens do aplicativo
5. **Download** - Botões para baixar nas lojas
6. **Footer** - Informações e links adicionais

## 🔧 Personalização

### Alterar Cores

Edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-green: #059669;
    --dark-bg: #1a2332;
    --darker-bg: #0f1621;
    --card-bg: #2a3544;
    --text-primary: #ffffff;
    --text-secondary: #a0aec0;
    --accent-teal: #14b8a6;
}
```

### Alterar Conteúdo

Edite o arquivo `index.html` e modifique os textos, títulos e descrições conforme necessário.

### Adicionar Links das Lojas

No arquivo `index.html`, localize os botões de download e substitua `#` pelos links reais:

```html
<a href="SUA_URL_APP_STORE" class="store-button">
<a href="SUA_URL_GOOGLE_PLAY" class="store-button">
```

## 📱 Responsividade

A landing page é totalmente responsiva e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout completo com 3 colunas
- **Tablet**: Layout adaptado com 2 colunas
- **Mobile**: Layout de coluna única, otimizado para toque

## 🌐 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge (versões modernas)
- ✅ iOS Safari
- ✅ Chrome Mobile / Android

## 🎨 Recursos Visuais

A página inclui:
- Gradientes suaves usando as cores do app
- Efeitos de parallax nos mockups
- Animações de fade-in ao fazer scroll
- Hover effects em cards e botões
- Ícones SVG inline para melhor performance
- Fontes do Google (Inter)

## 📄 Licença

Este projeto é privado e pertence ao BetterDay.

---

Desenvolvido com ❤️ para o BetterDay

---

## 🔍 SEO & Blog

O site foi otimizado para SEO técnico e inclui um blog completo pra captação de tráfego orgânico.

**SEO técnico:**
- Meta tags completas, Open Graph, Twitter Cards
- JSON-LD: Organization, WebSite, SoftwareApplication, FAQPage, Article, BreadcrumbList, Person, Blog
- `sitemap.xml` e `robots.txt`
- Favicon SVG, canonical URLs, semantic HTML, ARIA
- Mobile-first, com `theme-color` e `color-scheme`

**Blog:** 5 posts completos (1.200-1.400 palavras cada) sobre criação de hábitos, Atomic Habits, comparativo de apps, rotina matinal e procrastinação. Inclui RSS feed.

**Antes de subir pra produção**, leia [`SEO_AUDIT.md`](./SEO_AUDIT.md) — lá tem o checklist de coisas a fazer (criar imagem OG, ajustar domínio, Search Console, etc.).

