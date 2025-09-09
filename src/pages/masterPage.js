// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

import { applyModernStyles, applyResponsiveTypography, enableDarkMode, addKineticAnimation } from 'public/modern-styles-2025.js';
import { applySiteConfig } from 'public/site-config-controls.js';

$w.onReady(function () {
    // Apply 2025 modern design system
    applyModernStyles();
    applyResponsiveTypography();
    // Apply content-driven UI toggles (banner, hero variants, etc.)
    applySiteConfig();
    
    // Enhanced Navigation and User Experience
    initializeNavigation();
    initializeAccessibility();
    initializeLoadingStates();
    initializeResponsiveHandlers();
    
    // Apply modern UI improvements
    initializeModernUI();
    setupKineticAnimations();
});

function initializeNavigation() {
    // Enhanced menu interactions with smooth transitions
    const menuItems = $w('#menu1, #menu2, #menu3, #menu4, #menu5');
    
    menuItems.forEach((menuItem, index) => {
        if (menuItem) {
            // Add hover effects
            menuItem.onMouseIn(() => {
                menuItem.style.transition = 'all 0.3s ease';
                menuItem.style.opacity = '0.8';
            });
            
            menuItem.onMouseOut(() => {
                menuItem.style.opacity = '1';
            });
            
            // Add click animation
            menuItem.onClick(() => {
                menuItem.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    menuItem.style.transform = 'scale(1)';
                }, 150);
            });
        }
    });
    
    // Mobile menu toggle enhancement
    const mobileMenuButton = $w('#mobileMenu');
    if (mobileMenuButton) {
        mobileMenuButton.onClick(() => {
            toggleMobileMenu();
        });
    }
}

function toggleMobileMenu() {
    const menuContainer = $w('#menuContainer');
    if (menuContainer) {
        if (menuContainer.isVisible) {
            menuContainer.hide('slide', { direction: 'top' });
        } else {
            menuContainer.show('slide', { direction: 'top' });
        }
    }
}

function initializeAccessibility() {
    // Add keyboard navigation support
    $w('Page').onKeyPress((event) => {
        if (event.key === 'Tab') {
            // Ensure focus indicators are visible
            const focusedElement = $w('#' + event.target.id);
            if (focusedElement) {
                focusedElement.style.outline = '2px solid #007bff';
                focusedElement.style.outlineOffset = '2px';
            }
        }
        
        // ESC key to close modals/menus
        if (event.key === 'Escape') {
            closeAllModals();
            hideMobileMenu();
        }
    });
    
    // Add aria-labels and roles where needed
    const buttons = $w('Button');
    buttons.forEach(button => {
        if (!button.ariaLabel) {
            button.ariaLabel = button.label || '操作ボタン';
        }
    });
}

function initializeLoadingStates() {
    // Add loading indicators for async operations
    const forms = $w('WixForm');
    forms.forEach(form => {
        form.onWixFormSubmit(() => {
            showLoadingIndicator();
        });
        
        form.onWixFormSubmitted(() => {
            hideLoadingIndicator();
            showSuccessMessage();
        });
    });
    
    // Page transition loading
    window.addEventListener('beforeunload', () => {
        showPageTransitionLoader();
    });
}

function showLoadingIndicator() {
    const loader = $w('#loadingIndicator');
    if (loader) {
        loader.show('fade');
    }
}

function hideLoadingIndicator() {
    const loader = $w('#loadingIndicator');
    if (loader) {
        loader.hide('fade');
    }
}

function showSuccessMessage() {
    const message = $w('#successMessage');
    if (message) {
        message.text = '送信が完了しました';
        message.show('bounce');
        setTimeout(() => {
            message.hide('fade');
        }, 3000);
    }
}

function showPageTransitionLoader() {
    const transitionLoader = $w('#pageTransitionLoader');
    if (transitionLoader) {
        transitionLoader.show('fade');
    }
}

function initializeResponsiveHandlers() {
    // Handle responsive behavior
    $w('Page').onViewportEnter('Mobile', () => {
        adjustForMobile();
    });
    
    $w('Page').onViewportEnter('Tablet', () => {
        adjustForTablet();
    });
    
    $w('Page').onViewportEnter('Desktop', () => {
        adjustForDesktop();
    });
}

function adjustForMobile() {
    // Mobile-specific adjustments
    const containers = $w('Container');
    containers.forEach(container => {
        container.style.padding = '10px';
    });
}

function adjustForTablet() {
    // Tablet-specific adjustments
    const containers = $w('Container');
    containers.forEach(container => {
        container.style.padding = '15px';
    });
}

function adjustForDesktop() {
    // Desktop-specific adjustments
    const containers = $w('Container');
    containers.forEach(container => {
        container.style.padding = '20px';
    });
}

function closeAllModals() {
    const modals = $w('Lightbox');
    modals.forEach(modal => {
        if (modal.isVisible) {
            modal.close();
        }
    });
}

function hideMobileMenu() {
    const menuContainer = $w('#menuContainer');
    if (menuContainer && menuContainer.isVisible) {
        menuContainer.hide('slide', { direction: 'top' });
    }
}

// Safe no-op stubs to avoid runtime errors if not yet implemented
function initializeModernUI() {
    // Placeholder for additional modern UI setup
}

function setupKineticAnimations() {
    // Placeholder for kinetic animations wiring
}

function initializeModernUI() {
    // Apply 2025 spacing improvements
    applyModernSpacing();
    
    // Fix alignment issues
    fixUIAlignment();
    
    // Apply modern typography
    applyModernTypography();
    
    // Add modern visual effects
    addModernVisualEffects();
    
    // Setup dark mode toggle if available
    setupDarkModeToggle();
}

function applyModernSpacing() {
    // Apply consistent 8px grid spacing
    const containers = $w('Container, Box');
    containers.forEach(container => {
        if (container) {
            // Modern padding using 8px grid system
            container.style.padding = '2rem'; // 32px
            container.style.margin = '1rem 0'; // 16px vertical margin
            
            // Modern gap between child elements
            container.style.gap = '1.5rem'; // 24px
        }
    });
    
    // Apply consistent spacing to text elements
    const textElements = $w('Text');
    textElements.forEach(text => {
        if (text) {
            text.style.marginBottom = '1rem'; // 16px
            text.style.lineHeight = '1.6'; // Optimal readability
        }
    });
}

function fixUIAlignment() {
    // Fix common alignment issues
    const sections = $w('Section, Container');
    sections.forEach(section => {
        if (section) {
            // Center content with modern max-width
            section.style.maxWidth = '1200px';
            section.style.margin = '0 auto';
            section.style.padding = '0 1.5rem'; // 24px horizontal padding
            
            // Ensure proper alignment
            section.style.textAlign = 'left';
            section.style.display = 'flex';
            section.style.flexDirection = 'column';
            section.style.alignItems = 'flex-start';
        }
    });
    
    // Fix header alignment
    const headers = $w('#header, #topNav, .header');
    headers.forEach(header => {
        if (header) {
            header.style.display = 'flex';
            header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.style.padding = '1rem 1.5rem'; // 16px vertical, 24px horizontal
        }
    });
    
    // Fix footer alignment
    const footers = $w('#footer, .footer');
    footers.forEach(footer => {
        if (footer) {
            footer.style.textAlign = 'center';
            footer.style.padding = '2rem 1.5rem'; // 32px vertical, 24px horizontal
        }
    });
}

function applyModernTypography() {
    // Apply 2025 typography trends
    const headings = $w('Text[tag=h1], Text[tag=h2], Text[tag=h3], Text[tag=h4]');
    headings.forEach(heading => {
        if (heading) {
            // Bold, high-contrast typography
            heading.style.fontFamily = "'Poppins', 'Inter', sans-serif";
            heading.style.fontWeight = '700';
            heading.style.letterSpacing = '-0.025em';
            heading.style.lineHeight = '1.2';
            
            // Modern color with high contrast
            heading.style.color = '#0a0a0a';
            
            // Size adjustments based on hierarchy
            if (heading.tag === 'h1') {
                heading.style.fontSize = 'clamp(2.25rem, 5vw, 4.5rem)'; // Responsive scaling
                heading.style.fontWeight = '800';
            } else if (heading.tag === 'h2') {
                heading.style.fontSize = 'clamp(1.875rem, 4vw, 3rem)';
            } else if (heading.tag === 'h3') {
                heading.style.fontSize = 'clamp(1.5rem, 3vw, 2.25rem)';
                heading.style.fontWeight = '600';
            }
        }
    });
    
    // Apply modern body text styling
    const bodyText = $w('Text:not([tag=h1]):not([tag=h2]):not([tag=h3]):not([tag=h4])');
    bodyText.forEach(text => {
        if (text) {
            text.style.fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
            text.style.fontSize = '1.125rem'; // 18px for better readability
            text.style.lineHeight = '1.7';
            text.style.color = '#404040';
            text.style.fontVariationSettings = '"wght" 400';
        }
    });
    
    // Style navigation text
    const navText = $w('.nav-item, #menu1, #menu2, #menu3, #menu4, #menu5');
    navText.forEach(nav => {
        if (nav) {
            nav.style.fontFamily = "'Inter', sans-serif";
            nav.style.fontSize = '1rem';
            nav.style.fontWeight = '500';
            nav.style.letterSpacing = '0.025em';
        }
    });
}

function addModernVisualEffects() {
    // Add modern glassmorphism effects to cards
    const cards = $w('.card, .feature-card, Container');
    cards.forEach(card => {
        if (card) {
            // Modern card styling with backdrop blur effect
            card.style.background = 'rgba(255, 255, 255, 0.9)';
            card.style.backdropFilter = 'blur(10px)';
            card.style.border = '1px solid rgba(255, 255, 255, 0.2)';
            card.style.borderRadius = '1.5rem'; // 24px
            card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)';
            
            // Smooth transitions
            card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        }
    });
    
    // Modern button styling
    const buttons = $w('Button');
    buttons.forEach(button => {
        if (button) {
            // 2025 button trends - Bold, rounded, with gradients
            button.style.fontFamily = "'Inter', sans-serif";
            button.style.fontSize = '1rem';
            button.style.fontWeight = '600';
            button.style.padding = '0.75rem 2rem'; // 12px vertical, 32px horizontal
            button.style.borderRadius = '1rem'; // 16px
            button.style.border = 'none';
            button.style.cursor = 'pointer';
            
            // Modern gradient background
            button.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            button.style.color = 'white';
            button.style.boxShadow = '0 10px 15px -3px rgba(102, 126, 234, 0.4)';
            
            // Smooth animations
            button.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            button.style.transform = 'translateZ(0)'; // Hardware acceleration
        }
    });
    
    // Modern input styling
    const inputs = $w('Input, TextInput, Dropdown');
    inputs.forEach(input => {
        if (input) {
            input.style.fontFamily = "'Inter', sans-serif";
            input.style.fontSize = '1rem';
            input.style.padding = '1rem 1.25rem'; // 16px vertical, 20px horizontal
            input.style.borderRadius = '0.75rem'; // 12px
            input.style.border = '2px solid #e5e5e5';
            input.style.backgroundColor = '#fafafa';
            input.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        }
    });
}

function setupKineticAnimations() {
    // Add entrance animations to key elements
    const heroElements = $w('#hero, .hero, #main-heading');
    heroElements.forEach((element, index) => {
        if (element) {
            addKineticAnimation(element.id, 'slide');
            // Stagger animations
            setTimeout(() => {
                addKineticAnimation(element.id, 'fade');
            }, index * 200);
        }
    });
    
    // Add scroll-triggered animations
    setupScrollAnimations();
}

function setupScrollAnimations() {
    // Intersection Observer for scroll animations
    if (typeof IntersectionObserver !== 'undefined') {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.style.transform = 'translateY(0)';
                    element.style.opacity = '1';
                }
            });
        }, observerOptions);
        
        // Observe cards and sections
        const animatedElements = $w('Container, .card, Section');
        animatedElements.forEach(element => {
            if (element && element.html) {
                // Set initial state
                element.style.transform = 'translateY(30px)';
                element.style.opacity = '0';
                element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                
                observer.observe(element.html);
            }
        });
    }
}

function setupDarkModeToggle() {
    const darkModeToggle = $w('#darkModeToggle, .dark-mode-toggle');
    
    darkModeToggle.forEach(toggle => {
        if (toggle) {
            toggle.onClick(() => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                document.documentElement.setAttribute('data-theme', newTheme);
                
                if (newTheme === 'dark') {
                    enableDarkMode();
                }
                
                // Save preference
                if (typeof localStorage !== 'undefined') {
                    localStorage.setItem('theme', newTheme);
                }
            });
        }
    });
    
    // Load saved theme preference
    if (typeof localStorage !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            if (savedTheme === 'dark') {
                enableDarkMode();
            }
        }
    }
}
