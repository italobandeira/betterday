# Auditoria SEO - BetterDay

> Análise técnica + plano de melhorias + blog. Pronto pra execução em produção.

**Data:** 01 ago 2026
**Site:** betterday.app (placeholder — ajustar após domínio final)
**Escopo:** landing page estática + blog

---

## 📊 Resumo executivo

| Categoria | Antes | Depois |
|-----------|-------|--------|
| Meta tags | Básicas | Completas (description, keywords, robots, author) |
| Open Graph / Twitter | ❌ | ✅ Todas as páginas |
| JSON-LD estruturado | ❌ | ✅ 4 schemas (Organization, WebSite, SoftwareApplication, FAQPage, Article) |
| Sitemap.xml | ❌ | ✅ Com 10 URLs + imagens |
| Robots.txt | ❌ | ✅ Com bloqueio de IA |
| Canonical URL | ❌ | ✅ Em todas as páginas |
| Favicon | ❌ | ✅ SVG + apple-touch-icon |
| Semantic HTML | Parcial | ✅ `<main>`, `<article>`, `<nav role>`, aria-labels, skip-link |
| Blog | ❌ | ✅ 5 posts + listagem + RSS |
| Linkagem interna | Fraca | ✅ Cross-linking entre posts + teaser na home |
| Rich results eligibility | Baixa | ✅ Schema.org em todas as páginas relevantes |

---

## 🔍 Análise do estado anterior

### O que estava funcionando ✅
- `lang="pt-BR"` no HTML (bom pra SEO local)
- Title tag com keyword principal
- Meta description presente
- H1 único por página
- Imagens com `alt` text
- Estrutura semântica básica (header, section, footer)
- HTTPS-ready (não usei nada que force HTTP)
- Performance: site leve, sem dependências pesadas
- Google Play URL no botão de download

### O que estava faltando ❌

1. **Open Graph / Twitter Cards**
   - Sem `og:title`, `og:description`, `og:image`
   - Sem Twitter Card markup
   - Resultado: quando alguém compartilha no WhatsApp/Twitter/LinkedIn, aparece um card genérico ou sem preview

2. **JSON-LD / Schema.org**
   - Sem nenhum dado estruturado
   - Google não conseguia entender que era um SoftwareApplication (app Android)
   - Sem FAQ rich result
   - Sem BreadcrumbList
   - Sem Organization

3. **Arquivos técnicos essenciais**
   - Sem `sitemap.xml` → Google descobre páginas mais devagar
   - Sem `robots.txt` → crawlers sem diretivas
   - Sem canonical URL → risco de conteúdo duplicado
   - Sem favicon → aba do navegador vazia

4. **Semantic HTML / Acessibilidade**
   - Sem `<main>` landmark
   - Sem `aria-label` em nav/logo
   - Sem `aria-labelledby` em seções
   - Sem skip-to-content link
   - Imagens sem `width`/`height` (CLS — Cumulative Layout Shift)
   - Sem `<article>` em cards
   - Sem `role="contentinfo"` no footer

5. **Conteúdo**
   - Sem blog = sem razão pra Google voltar a indexar
   - Sem linkagem interna estratégica
   - Sem RSS

6. **Tags meta complementares**
   - Sem `theme-color` (chrome address bar mobile)
   - Sem `color-scheme`
   - Sem `article:author`, `article:published_time`
   - Sem `app-links` (Android deep linking)

---

## ✅ O que foi implementado

### 1. Meta tags completas
Todas as páginas agora têm:
- `<title>` otimizado com keyword + branding
- `<meta name="description">` específica (155-160 chars)
- `<meta name="keywords">` (sinal secundário, mas ainda usado)
- `<meta name="author">`, `robots`, `theme-color`, `color-scheme`
- `<link rel="canonical">` apontando pra URL absoluta

### 2. Open Graph + Twitter Cards
- `og:type`, `og:title`, `og:description`, `og:image`, `og:url`, `og:site_name`, `og:locale`
- `twitter:card` (summary_large_image na home, summary nas internas)
- Imagem OG no padrão 1200x630 (placeholder: `screenshots/og-image.png` — **criar**)

### 3. JSON-LD estruturado

**index.html** (homepage) tem 4 schemas:
- `Organization` — info do BetterDay + founder
- `WebSite` — com SearchAction apontando pro blog
- `SoftwareApplication` — app Android com rating, install, features, screenshots
- `FAQPage` — 4 perguntas comuns (preço, privacidade, plataforma, personalização)

**Cada post do blog** tem 2 schemas:
- `Article` — headline, author, publisher, datePublished, wordCount
- `BreadcrumbList` — navegação estrutural (Início > Blog > Post)

**contact.html** tem:
- `Person` schema com Italo Bandeira + endereço

**blog/index.html** tem:
- `Blog` schema (publisher, language)

### 4. Arquivos técnicos

- **`robots.txt`** — permite tudo, bloqueia `/screenshots/`, bloqueia crawlers de IA (GPTBot, ClaudeBot, CCBot, PerplexityBot), aponta pro sitemap
- **`sitemap.xml`** — 10 URLs com lastmod, changefreq, priority + 1 image entry
- **`favicon.svg`** — ícone gradient verde→teal com checkmark
- **`blog/rss.xml`** — feed RSS 2.0 com todos os 5 posts

### 5. Semantic HTML / A11y

- `<main id="main">` em todas as páginas
- `role="banner"`, `role="navigation"`, `role="contentinfo"`
- `aria-label` em logos, navs, botões
- `aria-labelledby` em seções com heading
- `aria-hidden="true"` em ícones decorativos
- `aria-label` em botões de download
- Skip-link ("Pular para o conteúdo principal")
- `<article>` em feature cards, screenshot items, blog cards
- `width`/`height` em todas as imagens (evita CLS)
- `loading="eager"` no hero, `loading="lazy"` no resto

### 6. Blog completo

| Arquivo | Função | Palavras |
|---------|--------|----------|
| `blog/index.html` | Listagem dos posts | 371 |
| `blog/como-criar-habitos-que-duram.html` | Post #1 - Hábitos | 1205 |
| `blog/atomic-habits-resumo.html` | Post #2 - Resenha | 1413 |
| `blog/melhor-app-rastreamento-habitos.html` | Post #3 - Comparativo | 1329 |
| `blog/rotina-matinal-produtividade.html` | Post #4 - Rotina | 1355 |
| `blog/como-parar-de-procrastinar.html` | Post #5 - Foco | 1430 |
| `blog/rss.xml` | Feed RSS 2.0 | — |
| `css/blog-styles.css` | Estilos da listagem | — |
| `css/article-styles.css` | Estilos dos artigos | — |

**Estratégia de conteúdo do blog:**
- Cada post mira cluster de keywords de alta intenção de busca
- Conteúdo original, baseado em pesquisa real, sem fluff
- Cross-linking entre posts (related posts no final de cada um)
- Linkagem interna pra home (CTA "Baixar BetterDay" no final de cada post)
- Seção "Blog" na home (3 cards em destaque)
- Link "Blog" no nav e footer de todas as páginas
- RSS pra usuários + engines (Feedly, Inoreader, etc.)

**Tópicos escolhidos (rationale de SEO):**
1. **Como criar hábitos que duram** — keyword head, alto volume, intenção informacional
2. **Atomic Habits resumo** — book review evergreen, altíssimo volume
3. **Melhor app de hábitos 2026** — intenção comercial, posiciona BetterDay
4. **Rotina matinal ciência** — long-tail, alto volume, evergreen
5. **Como parar de procrastinar** — problema universal, alto volume

### 7. Linkagem interna estratégica

- Home → Blog (seção dedicada + nav link)
- Blog index → todos os 5 posts
- Cada post → 3 related posts + CTA pro app
- Footer → Blog + RSS em todas as páginas
- Header → Blog em todas as páginas

---

## ⚠️ O que VOCÊ precisa fazer

### Antes de subir pra produção

1. **Trocar `https://betterday.app/`** pelo seu domínio real em TODOS os arquivos:
   ```bash
   # Em todos os HTML + sitemap.xml + rss.xml
   # Substituir: https://betterday.app/
   # Por: https://seudominio.com/
   ```
   Use Find & Replace no editor. Está em ~25 lugares.

2. **Criar imagem Open Graph** (`screenshots/og-image.png`, 1200x630px):
   - Sugestão: gradient verde→teal com texto "BetterDay - App de Hábitos" + mockup do app
   - Formatos suportados: PNG ou JPG
   - Pode usar Canva, Figma, ou ferramenta específica como og-image.vercel.app

3. **Google Search Console**:
   - Adicionar a propriedade do site
   - Submeter o sitemap.xml
   - Solicitar indexação das páginas principais

4. **Google Analytics 4 / Plausible**:
   - Adicionar o script no `<head>` de todas as páginas
   - Configurar eventos de download + clique no blog

5. **Atualizar `aggregateRating`** no JSON-LD do SoftwareApplication:
   - Quando tiver rating real, atualizar `ratingValue` e `ratingCount`

6. **Atualizar datas de publicação**:
   - Os posts estão com `2026-08-01` (data de hoje)
   - Em produção, ajustar pra data real de publicação de cada um

### Pós-publicação

7. **Backlinks**: registrar BetterDay em diretórios de apps (alternativeto.net, Product Hunt, etc.)

8. **Atualizar Google Play** com link pro site:
   - Na descrição do app, adicionar "Visite: seudominio.com"
   - Adicionar site oficial no console do Google Play

9. **Monitorar com Search Console**:
   - Quais queries trazem cliques?
   - Quais páginas estão ranqueando?
   - Quais rich results aparecem?

---

## 📈 Expectativa de impacto

- **Indexação**: páginas devem aparecer em 1-2 semanas após Search Console
- **Rich results**: FAQ pode aparecer em 2-4 semanas
- **Long-tail keywords** (do blog): 1-3 meses pra começar a ranquear
- **Head keywords** ("app de hábitos", "atomic habits"): 3-6 meses, depende de backlinks

O blog é o que mais vai movimentar o SEO a médio prazo. Cada post novo vira uma porta de entrada pro site. Meta: 1-2 posts por mês, sempre com pesquisa de keyword antes.

---

## 🛠️ Arquivos modificados/criados

### Criados
- `robots.txt`
- `sitemap.xml`
- `favicon.svg`
- `blog/index.html`
- `blog/como-criar-habitos-que-duram.html`
- `blog/atomic-habits-resumo.html`
- `blog/melhor-app-rastreamento-habitos.html`
- `blog/rotina-matinal-produtividade.html`
- `blog/como-parar-de-procrastinar.html`
- `blog/rss.xml`
- `css/blog-styles.css`
- `css/article-styles.css`
- `SEO_AUDIT.md` (este arquivo)

### Atualizados
- `index.html` (SEO completo + blog teaser)
- `privacy.html` (SEO + link blog)
- `terms.html` (SEO + link blog)
- `contact.html` (SEO + Person schema + link blog)
- `css/styles.css` (skip-link, nav-link, blog-teaser, footer 3 cols)
- `script.js` (intacto, sem mudanças necessárias)

---

## 🔗 Verificações finais

```bash
# Validar sitemap
xmllint --noout sitemap.xml

# Validar RSS
xmllint --noout blog/rss.xml

# Validar JSON-LD (online)
# https://search.google.com/test/rich-results
```

---

**Próximos passos:** criar imagem OG, ajustar domínio, configurar Search Console, publicar. 🎯
