# 🚀 SEO e Otimizações para a Landing Page BetterDay

Este documento contém sugestões de melhorias para otimizar a landing page do BetterDay para motores de busca e performance.

## 📊 Meta Tags para SEO

Adicione estas meta tags no `<head>` do `index.html`:

```html
<!-- Meta Tags Básicas -->
<meta name="keywords" content="rastreador de hábitos, habit tracker, produtividade, hábitos diários, metas, motivação">
<meta name="author" content="BetterDay">
<meta name="robots" content="index, follow">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://betterday.com/">
<meta property="og:title" content="BetterDay - Transforme Sua Vida Um Hábito de Cada Vez">
<meta property="og:description" content="Rastreie seus hábitos com facilidade e veja seu progresso diário de forma clara e intuitiva.">
<meta property="og:image" content="https://betterday.com/og-image.jpg">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://betterday.com/">
<meta name="twitter:title" content="BetterDay - Transforme Sua Vida Um Hábito de Cada Vez">
<meta name="twitter:description" content="Rastreie seus hábitos com facilidade e veja seu progresso diário de forma clara e intuitiva.">
<meta name="twitter:image" content="https://betterday.com/twitter-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

<!-- Canonical URL -->
<link rel="canonical" href="https://betterday.com/">
```

## 🖼️ Otimização de Imagens

### 1. Criar Imagens Sociais

Crie estas imagens para compartilhamento em redes sociais:

- `og-image.jpg` - 1200x630px (para Facebook/LinkedIn)
- `twitter-image.jpg` - 1200x600px (para Twitter)

### 2. Comprimir Screenshots

Use ferramentas para comprimir as imagens sem perder qualidade:

- **Online**: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)
- **CLI**: `imagemagick`, `pngquant`

Exemplo com ImageMagick:
```bash
convert input.jpg -quality 85 -resize 800x output.jpg
```

### 3. Adicionar Lazy Loading

No `index.html`, adicione `loading="lazy"` nas imagens:

```html
<img src="screenshots/home.jpg" alt="Resumo dos seus Hábitos" loading="lazy">
```

### 4. Usar WebP

Converta imagens para WebP para melhor compressão:

```html
<picture>
  <source srcset="screenshots/home.webp" type="image/webp">
  <img src="screenshots/home.jpg" alt="Resumo dos seus Hábitos" loading="lazy">
</picture>
```

## ⚡ Performance

### 1. Minificar CSS e JS

Use ferramentas para minificar seus arquivos:

```bash
# Com Node.js
npx csso styles.css -o styles.min.css
npx terser script.js -o script.min.js
```

### 2. Adicionar Cache Headers

Configure o servidor para cachear recursos estáticos:

```
# .htaccess (Apache)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### 3. Preload de Fontes

Adicione preload para a fonte Inter:

```html
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style">
```

## 📱 PWA (Progressive Web App)

### Criar manifest.json

```json
{
  "name": "BetterDay",
  "short_name": "BetterDay",
  "description": "Transforme Sua Vida Um Hábito de Cada Vez",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0f1621",
  "theme_color": "#059669",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

Adicione no `<head>`:
```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#059669">
```

## 🔍 Schema.org (Structured Data)

Adicione dados estruturados para melhor SEO:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "BetterDay",
  "description": "Rastreie seus hábitos com facilidade e veja seu progresso diário",
  "applicationCategory": "LifestyleApplication",
  "operatingSystem": "iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1500"
  }
}
</script>
```

## 📈 Analytics

### Google Analytics 4

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Eventos de Tracking

No `script.js`, adicione tracking de eventos importantes:

```javascript
// Clique nos botões de download
document.querySelectorAll('.store-button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const store = btn.querySelector('.store-name').textContent;
        gtag('event', 'click_download', {
            'store': store,
            'location': 'hero'
        });
    });
});
```

## 🌐 Hospedagem Recomendada

### Opções Gratuitas:
- **Vercel** - Deploy automático, SSL grátis, CDN global
- **Netlify** - Similar ao Vercel, ótimo para sites estáticos
- **GitHub Pages** - Simples e gratuito
- **Cloudflare Pages** - Rápido e com CDN

### Deploy Rápido com Vercel:

```bash
npm i -g vercel
cd betterday_landing_page
vercel
```

## 🔒 Segurança

### Headers de Segurança

Configure no servidor:

```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## 📋 Checklist Final

Antes de publicar, verifique:

- [ ] Todas as imagens foram adicionadas e otimizadas
- [ ] Links para App Store e Google Play estão corretos
- [ ] Meta tags de SEO foram adicionadas
- [ ] Favicon foi criado e adicionado
- [ ] Analytics foi configurado
- [ ] Página foi testada em diferentes navegadores
- [ ] Página foi testada em dispositivos móveis
- [ ] Performance foi testada (PageSpeed Insights)
- [ ] Links internos estão funcionando
- [ ] Formulários (se houver) estão funcionando
- [ ] SSL/HTTPS está configurado
- [ ] Domínio personalizado foi configurado

## 🛠️ Ferramentas Úteis

- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Google Search Console**: https://search.google.com/search-console
- **GTmetrix**: https://gtmetrix.com/
- **Lighthouse** (integrado no Chrome DevTools)

---

Implementando estas otimizações, sua landing page terá melhor performance, 
SEO e experiência do usuário! 🚀

