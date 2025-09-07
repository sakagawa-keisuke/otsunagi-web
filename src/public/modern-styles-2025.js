// Modern 2025 UI/UX Styles for otsunagi.co
// Based on latest design trends: Variable fonts, high contrast, bold typography, modern color schemes

export const DESIGN_TOKENS_2025 = {
    // 2025 Typography System
    typography: {
        // Primary font stack - Variable font with fallbacks
        primary: `'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif`,
        // Display font for headings - Bold geometric style
        display: `'Poppins Variable', 'Poppins', 'Inter Variable', sans-serif`,
        // Monospace for code/technical content
        mono: `'JetBrains Mono Variable', 'SF Mono', Monaco, 'Cascadia Code', monospace`,
        
        // Font weights (Variable font support)
        weights: {
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900
        },
        
        // Modern scale system
        sizes: {
            xs: '0.75rem',    // 12px
            sm: '0.875rem',   // 14px  
            base: '1rem',     // 16px
            lg: '1.125rem',   // 18px
            xl: '1.25rem',    // 20px
            '2xl': '1.5rem',  // 24px
            '3xl': '1.875rem', // 30px
            '4xl': '2.25rem', // 36px
            '5xl': '3rem',    // 48px
            '6xl': '3.75rem', // 60px
            '7xl': '4.5rem'   // 72px
        },
        
        // Line heights for optimal readability
        lineHeights: {
            tight: 1.2,
            normal: 1.5,
            relaxed: 1.75
        }
    },
    
    // 2025 Color System - High contrast, modern palettes
    colors: {
        // Primary brand colors - Deep blues with high contrast
        primary: {
            50: '#eff6ff',
            100: '#dbeafe', 
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554'
        },
        
        // Neutral colors - Warm grays for modern feel
        neutral: {
            0: '#ffffff',
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
            950: '#0a0a0a'
        },
        
        // Semantic colors with high contrast
        success: {
            light: '#d1fae5',
            main: '#10b981',
            dark: '#065f46'
        },
        error: {
            light: '#fef2f2', 
            main: '#ef4444',
            dark: '#7f1d1d'
        },
        warning: {
            light: '#fef3c7',
            main: '#f59e0b', 
            dark: '#78350f'
        },
        info: {
            light: '#dbeafe',
            main: '#3b82f6',
            dark: '#1e3a8a'
        },
        
        // 2025 Gradient trends
        gradients: {
            primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            success: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            sunset: 'linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)',
            ocean: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            neon: 'linear-gradient(135deg, #ff0099 0%, #493240 100%)'
        }
    },
    
    // Modern spacing system - 8px grid
    spacing: {
        0: '0',
        0.5: '0.125rem', // 2px
        1: '0.25rem',    // 4px
        2: '0.5rem',     // 8px
        3: '0.75rem',    // 12px
        4: '1rem',       // 16px
        5: '1.25rem',    // 20px
        6: '1.5rem',     // 24px
        8: '2rem',       // 32px
        10: '2.5rem',    // 40px
        12: '3rem',      // 48px
        16: '4rem',      // 64px
        20: '5rem',      // 80px
        24: '6rem',      // 96px
        32: '8rem'       // 128px
    },
    
    // Border radius - Modern rounded corners
    borderRadius: {
        none: '0',
        sm: '0.25rem',   // 4px
        base: '0.5rem',  // 8px
        md: '0.75rem',   // 12px
        lg: '1rem',      // 16px
        xl: '1.5rem',    // 24px
        '2xl': '2rem',   // 32px
        full: '9999px'
    },
    
    // Shadow system - Modern depth
    shadows: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        glow: '0 0 20px rgba(59, 130, 246, 0.15)'
    },
    
    // Animation and transitions
    animations: {
        duration: {
            fast: '150ms',
            normal: '300ms', 
            slow: '500ms'
        },
        easing: {
            default: 'cubic-bezier(0.4, 0, 0.2, 1)',
            in: 'cubic-bezier(0.4, 0, 1, 1)',
            out: 'cubic-bezier(0, 0, 0.2, 1)',
            bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        }
    },
    
    // Breakpoints for responsive design
    breakpoints: {
        mobile: '480px',
        tablet: '768px', 
        desktop: '1024px',
        wide: '1280px',
        ultrawide: '1920px'
    }
};

// Apply modern styles to Wix elements
export function applyModernStyles() {
    // Load Google Fonts - Variable fonts for 2025
    loadGoogleFonts();
    
    // Apply global styles
    applyGlobalStyles();
    
    // Apply component styles
    applyComponentStyles();
    
    // Apply modern interactions
    applyModernInteractions();
}

function loadGoogleFonts() {
    // Load modern variable fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
    
    // Load variable font versions
    const variableFontLink = document.createElement('link'); 
    variableFontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap';
    variableFontLink.rel = 'stylesheet';
    document.head.appendChild(variableFontLink);
}

function applyGlobalStyles() {
    const globalStyles = `
        :root {
            /* Typography */
            --font-primary: ${DESIGN_TOKENS_2025.typography.primary};
            --font-display: ${DESIGN_TOKENS_2025.typography.display};
            --font-mono: ${DESIGN_TOKENS_2025.typography.mono};
            
            /* Colors */
            --color-primary: ${DESIGN_TOKENS_2025.colors.primary[600]};
            --color-primary-hover: ${DESIGN_TOKENS_2025.colors.primary[700]};
            --color-text: ${DESIGN_TOKENS_2025.colors.neutral[900]};
            --color-text-secondary: ${DESIGN_TOKENS_2025.colors.neutral[600]};
            --color-background: ${DESIGN_TOKENS_2025.colors.neutral[0]};
            --color-surface: ${DESIGN_TOKENS_2025.colors.neutral[50]};
            
            /* Spacing */
            --spacing-xs: ${DESIGN_TOKENS_2025.spacing[1]};
            --spacing-sm: ${DESIGN_TOKENS_2025.spacing[2]};
            --spacing-md: ${DESIGN_TOKENS_2025.spacing[4]};
            --spacing-lg: ${DESIGN_TOKENS_2025.spacing[6]};
            --spacing-xl: ${DESIGN_TOKENS_2025.spacing[8]};
            
            /* Animations */
            --duration-normal: ${DESIGN_TOKENS_2025.animations.duration.normal};
            --easing-default: ${DESIGN_TOKENS_2025.animations.easing.default};
        }
        
        /* Global text improvements */
        body, html {
            font-family: var(--font-primary);
            font-optical-sizing: auto;
            font-variation-settings: "wght" 400;
            line-height: ${DESIGN_TOKENS_2025.typography.lineHeights.normal};
            color: var(--color-text);
            background-color: var(--color-background);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
        }
        
        /* Modern headings with variable fonts */
        h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-display);
            font-weight: ${DESIGN_TOKENS_2025.typography.weights.bold};
            line-height: ${DESIGN_TOKENS_2025.typography.lineHeights.tight};
            letter-spacing: -0.025em;
            color: var(--color-text);
        }
        
        h1 {
            font-size: ${DESIGN_TOKENS_2025.typography.sizes['5xl']};
            font-weight: ${DESIGN_TOKENS_2025.typography.weights.extrabold};
        }
        
        h2 {
            font-size: ${DESIGN_TOKENS_2025.typography.sizes['4xl']};
            font-weight: ${DESIGN_TOKENS_2025.typography.weights.bold};
        }
        
        h3 {
            font-size: ${DESIGN_TOKENS_2025.typography.sizes['3xl']};
            font-weight: ${DESIGN_TOKENS_2025.typography.weights.semibold};
        }
        
        /* Improved button styles */
        button, .button {
            font-family: var(--font-primary);
            font-weight: ${DESIGN_TOKENS_2025.typography.weights.medium};
            border-radius: ${DESIGN_TOKENS_2025.borderRadius.lg};
            transition: all var(--duration-normal) var(--easing-default);
            box-shadow: ${DESIGN_TOKENS_2025.shadows.sm};
            border: none;
            cursor: pointer;
        }
        
        button:hover, .button:hover {
            transform: translateY(-2px);
            box-shadow: ${DESIGN_TOKENS_2025.shadows.md};
        }
        
        /* Modern form elements */
        input, textarea, select {
            font-family: var(--font-primary);
            border-radius: ${DESIGN_TOKENS_2025.borderRadius.base};
            border: 2px solid ${DESIGN_TOKENS_2025.colors.neutral[200]};
            transition: all var(--duration-normal) var(--easing-default);
            font-size: ${DESIGN_TOKENS_2025.typography.sizes.base};
        }
        
        input:focus, textarea:focus, select:focus {
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px ${DESIGN_TOKENS_2025.colors.primary[100]};
            outline: none;
        }
        
        /* Modern cards and containers */
        .card, .container {
            background: var(--color-background);
            border-radius: ${DESIGN_TOKENS_2025.borderRadius.xl};
            box-shadow: ${DESIGN_TOKENS_2025.shadows.base};
            transition: all var(--duration-normal) var(--easing-default);
        }
        
        .card:hover {
            box-shadow: ${DESIGN_TOKENS_2025.shadows.lg};
            transform: translateY(-4px);
        }
        
        /* Modern navigation */
        .nav-item {
            font-weight: ${DESIGN_TOKENS_2025.typography.weights.medium};
            border-radius: ${DESIGN_TOKENS_2025.borderRadius.base};
            transition: all var(--duration-normal) var(--easing-default);
        }
        
        .nav-item:hover {
            background-color: ${DESIGN_TOKENS_2025.colors.primary[50]};
            color: var(--color-primary);
        }
    `;
    
    // Inject styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = globalStyles;
    document.head.appendChild(styleSheet);
}

function applyComponentStyles() {
    // Apply styles to specific Wix components
    const components = [
        'Button', 'Text', 'Container', 'Box', 'Image',
        'Input', 'TextInput', 'WixForm', 'Lightbox'
    ];
    
    components.forEach(componentType => {
        const elements = $w(componentType);
        if (elements && elements.length > 0) {
            elements.forEach(element => {
                applyModernStyling(element, componentType);
            });
        }
    });
}

function applyModernStyling(element, type) {
    if (!element || !element.style) return;
    
    const tokens = DESIGN_TOKENS_2025;
    
    switch(type) {
        case 'Button':
            element.style.fontFamily = tokens.typography.primary;
            element.style.fontWeight = tokens.typography.weights.medium;
            element.style.borderRadius = tokens.borderRadius.lg;
            element.style.transition = `all ${tokens.animations.duration.normal} ${tokens.animations.easing.default}`;
            element.style.boxShadow = tokens.shadows.sm;
            break;
            
        case 'Text':
            element.style.fontFamily = tokens.typography.primary;
            element.style.lineHeight = tokens.typography.lineHeights.normal;
            element.style.color = tokens.colors.neutral[900];
            break;
            
        case 'Container':
        case 'Box':
            element.style.borderRadius = tokens.borderRadius.xl;
            element.style.boxShadow = tokens.shadows.base;
            element.style.transition = `all ${tokens.animations.duration.normal} ${tokens.animations.easing.default}`;
            break;
            
        case 'Input':
        case 'TextInput':
            element.style.fontFamily = tokens.typography.primary;
            element.style.borderRadius = tokens.borderRadius.base;
            element.style.border = `2px solid ${tokens.colors.neutral[200]}`;
            element.style.transition = `all ${tokens.animations.duration.normal} ${tokens.animations.easing.default}`;
            break;
    }
}

function applyModernInteractions() {
    // Add modern hover and focus states
    const interactiveElements = $w('Button, Container, Box');
    
    interactiveElements.forEach(element => {
        if (!element) return;
        
        // Add hover effects
        element.onMouseIn(() => {
            if (element.type === 'Button') {
                element.style.transform = 'translateY(-2px)';
                element.style.boxShadow = DESIGN_TOKENS_2025.shadows.md;
            } else {
                element.style.boxShadow = DESIGN_TOKENS_2025.shadows.lg;
                element.style.transform = 'translateY(-4px)';
            }
        });
        
        element.onMouseOut(() => {
            element.style.transform = 'translateY(0)';
            element.style.boxShadow = DESIGN_TOKENS_2025.shadows.base;
        });
    });
    
    // Add focus states for accessibility
    const focusableElements = $w('Button, Input, TextInput');
    focusableElements.forEach(element => {
        if (!element) return;
        
        element.onFocus(() => {
            element.style.outline = `2px solid ${DESIGN_TOKENS_2025.colors.primary[500]}`;
            element.style.outlineOffset = '2px';
        });
        
        element.onBlur(() => {
            element.style.outline = 'none';
        });
    });
}

// Responsive typography adjustments
export function applyResponsiveTypography() {
    const mediaQueries = {
        mobile: `(max-width: ${DESIGN_TOKENS_2025.breakpoints.mobile})`,
        tablet: `(max-width: ${DESIGN_TOKENS_2025.breakpoints.tablet})`,
        desktop: `(min-width: ${DESIGN_TOKENS_2025.breakpoints.desktop})`
    };
    
    // Mobile adjustments
    if (window.matchMedia(mediaQueries.mobile).matches) {
        const headings = $w('Text[tag=h1], Text[tag=h2], Text[tag=h3]');
        headings.forEach(heading => {
            if (heading) {
                heading.style.fontSize = DESIGN_TOKENS_2025.typography.sizes['3xl'];
                heading.style.lineHeight = DESIGN_TOKENS_2025.typography.lineHeights.tight;
            }
        });
    }
}

// Dark mode support
export function enableDarkMode() {
    const darkModeStyles = `
        [data-theme="dark"] {
            --color-text: ${DESIGN_TOKENS_2025.colors.neutral[100]};
            --color-text-secondary: ${DESIGN_TOKENS_2025.colors.neutral[400]};
            --color-background: ${DESIGN_TOKENS_2025.colors.neutral[900]};
            --color-surface: ${DESIGN_TOKENS_2025.colors.neutral[800]};
        }
        
        [data-theme="dark"] .card,
        [data-theme="dark"] .container {
            background: ${DESIGN_TOKENS_2025.colors.neutral[800]};
            border: 1px solid ${DESIGN_TOKENS_2025.colors.neutral[700]};
        }
    `;
    
    const darkStyleSheet = document.createElement('style');
    darkStyleSheet.textContent = darkModeStyles;
    document.head.appendChild(darkStyleSheet);
}

// Animation utilities
export function addKineticAnimation(elementId, animationType = 'fade') {
    const element = $w(`#${elementId}`);
    if (!element) return;
    
    const animations = {
        fade: {
            from: { opacity: 0 },
            to: { opacity: 1 },
            duration: DESIGN_TOKENS_2025.animations.duration.normal
        },
        slide: {
            from: { transform: 'translateY(30px)', opacity: 0 },
            to: { transform: 'translateY(0)', opacity: 1 },
            duration: DESIGN_TOKENS_2025.animations.duration.slow
        },
        scale: {
            from: { transform: 'scale(0.9)', opacity: 0 },
            to: { transform: 'scale(1)', opacity: 1 },
            duration: DESIGN_TOKENS_2025.animations.duration.normal
        }
    };
    
    const anim = animations[animationType] || animations.fade;
    
    // Apply initial state
    Object.assign(element.style, anim.from);
    
    // Animate to final state
    setTimeout(() => {
        element.style.transition = `all ${anim.duration} ${DESIGN_TOKENS_2025.animations.easing.default}`;
        Object.assign(element.style, anim.to);
    }, 100);
}