// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // Se for o logo (href="#"), volta ao topo
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        // Caso contrário, vai para a seção específica
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header com background ao fazer scroll
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.background = 'rgba(15, 22, 33, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(15, 22, 33, 0.9)';
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Animação de entrada para elementos quando aparecem no viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.feature-card, .screenshot-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Menu mobile (se necessário no futuro)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav');
    const navLinks = nav.innerHTML;
    
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    `;
    
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = navLinks;
    
    // Funcionalidade do menu mobile pode ser adicionada aqui
};

// Analytics de cliques nos botões de download (exemplo)
document.querySelectorAll('.store-button, .btn-download-nav').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const storeName = btn.querySelector('.store-name')?.textContent || 'Download';
        console.log(`Clique no botão: ${storeName}`);
        // Aqui você pode adicionar tracking analytics (Google Analytics, etc)
    });
});

// Log de carregamento
console.log('BetterDay Landing Page carregada com sucesso! 🚀');

// --- Language switcher dropdown ---------------------------------------------
// Pequeno controller para o dropdown PT | EN. Sem dependências externas.
(function initLangSwitcher() {
    const switchers = document.querySelectorAll('.lang-switcher');
    if (!switchers.length) return;

    switchers.forEach((switcher) => {
        const button = switcher.querySelector('.lang-btn');
        const menu = switcher.querySelector('.lang-menu');
        if (!button || !menu) return;

        const setOpen = (isOpen) => {
            button.setAttribute('aria-expanded', String(isOpen));
            switcher.classList.toggle('is-open', isOpen);
        };

        // Toggle no clique do botão
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = button.getAttribute('aria-expanded') === 'true';
            // Fecha qualquer outro dropdown aberto
            document.querySelectorAll('.lang-switcher.is-open').forEach((s) => {
                if (s !== switcher) s.classList.remove('is-open');
                const b = s.querySelector('.lang-btn');
                if (b) b.setAttribute('aria-expanded', 'false');
            });
            setOpen(!isOpen);
        });

        // Fecha ao clicar fora
        document.addEventListener('click', (e) => {
            if (!switcher.contains(e.target)) setOpen(false);
        });

        // Fecha com Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                setOpen(false);
                button.focus();
            }
        });
    });
})();


