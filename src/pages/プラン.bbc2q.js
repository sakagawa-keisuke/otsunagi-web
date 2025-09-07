import { showToast, animateElement, trackUserInteraction, formatCurrency } from 'public/new-file.js';
import { DESIGN_TOKENS_2025, addKineticAnimation } from 'public/modern-styles-2025.js';

$w.onReady(function () {
    // Apply 2025 modern design to plan page
    applyModernPlanStyling();
    
    // Initialize enhanced plan page functionality
    initializePlanPage();
    
    // Add modern animations
    setupModernPlanAnimations();
});

function initializePlanPage() {
    setupPlanCards();
    setupPricingAnimations();
    setupSubscriptionHandling();
    setupComparisonTable();
}

function setupPlanCards() {
    const planCards = $w('#planCard1, #planCard2, #planCard3, #planCard4');
    
    planCards.forEach((card, index) => {
        if (card) {
            // Add hover effects
            card.onMouseIn(() => {
                animateElement(card.id, 'bounce', { duration: 300 });
                card.style.transform = 'scale(1.05)';
                card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                card.style.transition = 'all 0.3s ease';
            });
            
            card.onMouseOut(() => {
                card.style.transform = 'scale(1)';
                card.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            });
            
            // Add click tracking
            card.onClick(() => {
                trackUserInteraction('plan_card_click', card);
                selectPlan(index);
            });
            
            // Staggered entrance animation
            animateElement(card.id, 'slideUp', { delay: index * 200 });
        }
    });
}

function setupPricingAnimations() {
    const priceElements = $w('#price1, #price2, #price3, #price4');
    
    priceElements.forEach((priceEl, index) => {
        if (priceEl) {
            // Format pricing display
            const currentPrice = parseFloat(priceEl.text.replace(/[^\d]/g, ''));
            if (!isNaN(currentPrice)) {
                priceEl.text = formatCurrency(currentPrice);
            }
            
            // Add price highlight animation
            setTimeout(() => {
                animateElement(priceEl.id, 'bounce', { duration: 600 });
            }, 1000 + (index * 300));
        }
    });
}

function setupSubscriptionHandling() {
    const subscribeButtons = $w('#subscribeBtn1, #subscribeBtn2, #subscribeBtn3, #subscribeBtn4');
    
    subscribeButtons.forEach((button, index) => {
        if (button) {
            button.onClick(() => {
                handleSubscription(index);
            });
            
            // Add loading state capability
            button.onMouseIn(() => {
                button.style.transform = 'translateY(-2px)';
                button.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                button.style.transition = 'all 0.2s ease';
            });
            
            button.onMouseOut(() => {
                button.style.transform = 'translateY(0)';
                button.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            });
        }
    });
}

function setupComparisonTable() {
    const comparisonTable = $w('#comparisonTable');
    if (comparisonTable) {
        // Add smooth scroll to comparison
        const compareButton = $w('#compareButton');
        if (compareButton) {
            compareButton.onClick(() => {
                comparisonTable.scrollTo({ behavior: 'smooth' });
                trackUserInteraction('comparison_view', compareButton);
            });
        }
        
        // Animate table rows on scroll into view
        animateTableRows();
    }
}

function selectPlan(planIndex) {
    // Visual feedback for plan selection
    const allCards = $w('#planCard1, #planCard2, #planCard3, #planCard4');
    
    allCards.forEach((card, index) => {
        if (card) {
            if (index === planIndex) {
                card.style.borderColor = '#007bff';
                card.style.borderWidth = '3px';
                card.style.backgroundColor = '#f8f9ff';
                
                // Add selected indicator
                const selectedIndicator = $w(`#selectedIndicator${index + 1}`);
                if (selectedIndicator) {
                    selectedIndicator.show('bounce');
                }
            } else {
                card.style.borderColor = '#e0e0e0';
                card.style.borderWidth = '1px';
                card.style.backgroundColor = '#ffffff';
                
                const selectedIndicator = $w(`#selectedIndicator${index + 1}`);
                if (selectedIndicator) {
                    selectedIndicator.hide();
                }
            }
        }
    });
    
    showToast('プランが選択されました', 'info');
}

function handleSubscription(planIndex) {
    const button = $w(`#subscribeBtn${planIndex + 1}`);
    if (!button) return;
    
    // Show loading state
    const originalText = button.label;
    button.label = '処理中...';
    button.disable();
    
    // Simulate subscription process
    setTimeout(() => {
        button.label = originalText;
        button.enable();
        
        showToast('プラン登録を開始しています...', 'success');
        
        // Redirect to subscription flow
        trackUserInteraction('subscription_start', { planIndex });
        
        // You would typically navigate to a subscription page here
        // wixLocation.to('/subscription-checkout');
        
    }, 2000);
}

function animateTableRows() {
    const tableRows = $w('#tableRow1, #tableRow2, #tableRow3, #tableRow4, #tableRow5');
    
    tableRows.forEach((row, index) => {
        if (row) {
            // Staggered animation for table rows
            setTimeout(() => {
                animateElement(row.id, 'fadeIn', { duration: 400 });
            }, index * 150);
        }
    });
}

function applyModernPlanStyling() {
    // Apply 2025 design system to plan page
    applyModernPlanTypography();
    applyModernPlanLayout();
    applyModernPlanColors();
    applyModernPlanCards();
}

function applyModernPlanTypography() {
    // Apply bold, oversized typography trend for 2025
    const planTitles = $w('#planTitle, .plan-title, .page-title');
    planTitles.forEach(title => {
        if (title) {
            title.style.fontFamily = "'Poppins', 'Inter', sans-serif";
            title.style.fontSize = 'clamp(2.5rem, 6vw, 5rem)'; // Extra large, responsive
            title.style.fontWeight = '800'; // Extra bold
            title.style.lineHeight = '1.1';
            title.style.letterSpacing = '-0.04em'; // Tighter spacing for modern look
            title.style.color = '#0a0a0a'; // High contrast black
            title.style.marginBottom = '1.5rem';
            
            // Add text gradient effect (2025 trend)
            title.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            title.style.backgroundClip = 'text';
            title.style.webkitBackgroundClip = 'text';
            title.style.webkitTextFillColor = 'transparent';
        }
    });
    
    // Apply modern subtitle styling
    const planSubtitles = $w('#planSubtitle, .plan-subtitle, .subtitle');
    planSubtitles.forEach(subtitle => {
        if (subtitle) {
            subtitle.style.fontFamily = "'Inter', sans-serif";
            subtitle.style.fontSize = '1.5rem'; // 24px
            subtitle.style.fontWeight = '500';
            subtitle.style.lineHeight = '1.6';
            subtitle.style.color = '#525252'; // Modern gray
            subtitle.style.marginBottom = '3rem';
        }
    });
    
    // Plan card typography
    const planCardTitles = $w('.plan-name, #planName1, #planName2, #planName3, #planName4');
    planCardTitles.forEach(cardTitle => {
        if (cardTitle) {
            cardTitle.style.fontFamily = "'Poppins', sans-serif";
            cardTitle.style.fontSize = '1.5rem';
            cardTitle.style.fontWeight = '700';
            cardTitle.style.color = '#171717';
            cardTitle.style.marginBottom = '0.5rem';
        }
    });
    
    // Plan descriptions
    const planDescriptions = $w('.plan-description, #planDesc1, #planDesc2, #planDesc3, #planDesc4');
    planDescriptions.forEach(desc => {
        if (desc) {
            desc.style.fontFamily = "'Inter', sans-serif";
            desc.style.fontSize = '1rem';
            desc.style.lineHeight = '1.7';
            desc.style.color = '#525252';
            desc.style.marginBottom = '1.5rem';
        }
    });
}

function applyModernPlanLayout() {
    // Apply modern grid layout with proper spacing
    const planContainer = $w('#planContainer, .plans-container, .plans-grid');
    planContainer.forEach(container => {
        if (container) {
            container.style.display = 'grid';
            container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
            container.style.gap = '2rem'; // 32px gap between cards
            container.style.padding = '0 1.5rem';
            container.style.maxWidth = '1200px';
            container.style.margin = '0 auto';
        }
    });
    
    // Apply modern section spacing
    const planSections = $w('Section, .plan-section');
    planSections.forEach(section => {
        if (section) {
            section.style.padding = '5rem 0'; // Large vertical padding
            section.style.margin = '0';
        }
    });
}

function applyModernPlanColors() {
    // Apply 2025 color trends with high contrast
    const tokens = DESIGN_TOKENS_2025;
    
    // Update primary colors
    const primaryElements = $w('.primary, .featured-plan');
    primaryElements.forEach(element => {
        if (element) {
            element.style.background = tokens.colors.gradients.primary;
            element.style.color = tokens.colors.neutral[0];
        }
    });
    
    // Apply modern background colors
    const backgroundSections = $w('.bg-section, .hero-section');
    backgroundSections.forEach(section => {
        if (section) {
            // Subtle gradient background
            section.style.background = `linear-gradient(135deg, ${tokens.colors.neutral[50]} 0%, ${tokens.colors.primary[50]} 100%)`;
        }
    });
}

function applyModernPlanCards() {
    const planCards = $w('#planCard1, #planCard2, #planCard3, #planCard4, .plan-card');
    
    planCards.forEach((card, index) => {
        if (card) {
            // Modern card design with glassmorphism
            card.style.background = 'rgba(255, 255, 255, 0.95)';
            card.style.backdropFilter = 'blur(20px)';
            card.style.border = '1px solid rgba(255, 255, 255, 0.3)';
            card.style.borderRadius = '2rem'; // Extra rounded for 2025
            card.style.padding = '2.5rem'; // Generous padding
            card.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15)'; // Modern shadow
            card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.position = 'relative';
            card.style.overflow = 'hidden';
            
            // Add subtle border gradient
            card.style.borderImage = 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%) 1';
            
            // Featured plan styling (middle card typically)
            if (index === 1 || card.id.includes('2')) {
                card.style.transform = 'scale(1.05)';
                card.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                card.style.color = 'white';
                card.style.boxShadow = '0 30px 60px -12px rgba(102, 126, 234, 0.4)';
                
                // Add "Most Popular" badge
                addPopularBadge(card);
            }
        }
    });
    
    // Modern pricing display
    const priceElements = $w('#price1, #price2, #price3, #price4, .price');
    priceElements.forEach(price => {
        if (price) {
            price.style.fontFamily = "'Poppins', sans-serif";
            price.style.fontSize = '3rem'; // Large pricing
            price.style.fontWeight = '800';
            price.style.lineHeight = '1';
            price.style.marginBottom = '0.5rem';
            
            // Add currency styling
            price.style.position = 'relative';
        }
    });
    
    // Modern button styling for plan cards
    const planButtons = $w('#subscribeBtn1, #subscribeBtn2, #subscribeBtn3, #subscribeBtn4, .plan-button');
    planButtons.forEach(button => {
        if (button) {
            button.style.width = '100%';
            button.style.padding = '1rem 2rem';
            button.style.fontSize = '1.125rem';
            button.style.fontWeight = '600';
            button.style.borderRadius = '1rem';
            button.style.border = 'none';
            button.style.cursor = 'pointer';
            button.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Primary button gradient
            button.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            button.style.color = 'white';
            button.style.boxShadow = '0 10px 25px -5px rgba(102, 126, 234, 0.4)';
        }
    });
}

function addPopularBadge(card) {
    // Add "Most Popular" badge to featured plan
    const badge = document.createElement('div');
    badge.textContent = '最も人気';
    badge.style.position = 'absolute';
    badge.style.top = '-10px';
    badge.style.left = '50%';
    badge.style.transform = 'translateX(-50%)';
    badge.style.background = 'linear-gradient(135deg, #ff0099 0%, #493240 100%)';
    badge.style.color = 'white';
    badge.style.padding = '0.5rem 1.5rem';
    badge.style.borderRadius = '2rem';
    badge.style.fontSize = '0.875rem';
    badge.style.fontWeight = '600';
    badge.style.fontFamily = "'Inter', sans-serif";
    badge.style.boxShadow = '0 10px 25px -5px rgba(255, 0, 153, 0.4)';
    badge.style.zIndex = '10';
    
    if (card.html) {
        card.html.appendChild(badge);
    }
}

function setupModernPlanAnimations() {
    // Add modern entrance animations
    const planCards = $w('#planCard1, #planCard2, #planCard3, #planCard4');
    
    planCards.forEach((card, index) => {
        if (card) {
            // Set initial state for animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px) scale(0.95)';
            
            // Staggered entrance animation
            setTimeout(() => {
                card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, index * 200 + 300); // Delay each card
        }
    });
    
    // Add scroll-triggered animations for comparison table
    const comparisonTable = $w('#comparisonTable, .comparison-table');
    comparisonTable.forEach(table => {
        if (table) {
            // Intersection Observer for table animation
            if (typeof IntersectionObserver !== 'undefined') {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            animateTableRows();
                        }
                    });
                }, { threshold: 0.3 });
                
                if (table.html) {
                    observer.observe(table.html);
                }
            }
        }
    });
    
    // Add kinetic typography animation to title
    const planTitles = $w('#planTitle, .plan-title');
    planTitles.forEach(title => {
        if (title) {
            addKineticAnimation(title.id, 'slide');
        }
    });
}
