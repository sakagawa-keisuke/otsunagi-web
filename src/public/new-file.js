// Filename: public/ux-utils.js
// Common UX utility functions for otsunagi.co

export function smoothScrollTo(elementId, offset = 0) {
    const element = $w(`#${elementId}`);
    if (element) {
        element.scrollTo({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

export function showToast(message, type = 'info', duration = 3000) {
    const toast = $w('#toast') || createToastElement();
    
    toast.text = message;
    toast.style.backgroundColor = getToastColor(type);
    toast.show('slide', { direction: 'top' });
    
    setTimeout(() => {
        toast.hide('slide', { direction: 'top' });
    }, duration);
}

function getToastColor(type) {
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    return colors[type] || colors.info;
}

export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validatePhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

export function animateElement(elementId, animation, options = {}) {
    const element = $w(`#${elementId}`);
    if (!element) return;
    
    const defaultOptions = {
        duration: 500,
        delay: 0,
        easing: 'ease-in-out'
    };
    
    const animationOptions = { ...defaultOptions, ...options };
    
    setTimeout(() => {
        switch(animation) {
            case 'fadeIn':
                element.show('fade', { duration: animationOptions.duration });
                break;
            case 'fadeOut':
                element.hide('fade', { duration: animationOptions.duration });
                break;
            case 'slideUp':
                element.show('slide', { direction: 'bottom', duration: animationOptions.duration });
                break;
            case 'slideDown':
                element.show('slide', { direction: 'top', duration: animationOptions.duration });
                break;
            case 'bounce':
                element.show('bounce', { duration: animationOptions.duration });
                break;
            default:
                element.show();
        }
    }, animationOptions.delay);
}

export function formatJapaneseDate(date) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    };
    return date.toLocaleDateString('ja-JP', options);
}

export function formatCurrency(amount, currency = 'JPY') {
    return new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

export function trackUserInteraction(action, element = null) {
    // Basic analytics tracking
    const eventData = {
        action: action,
        timestamp: new Date().toISOString(),
        element: element ? element.id : null,
        page: window.location.pathname
    };
    
    console.log('User Interaction:', eventData);
}

export function createLoadingSpinner(containerId) {
    const container = $w(`#${containerId}`);
    if (!container) return;
    
    const spinner = $w('#spinner') || createSpinnerElement();
    container.appendChild(spinner);
    spinner.show('fade');
    
    return {
        hide: () => spinner.hide('fade')
    };
}

export function handleFormErrors(errors) {
    Object.keys(errors).forEach(fieldId => {
        const field = $w(`#${fieldId}`);
        const errorMessage = errors[fieldId];
        
        if (field) {
            field.style.borderColor = '#dc3545';
            showFieldError(fieldId, errorMessage);
        }
    });
}

function showFieldError(fieldId, message) {
    let errorElement = $w(`#${fieldId}Error`);
    
    if (!errorElement) {
        // Create error message element if it doesn't exist
        console.warn(`Error element #${fieldId}Error not found`);
        return;
    }
    
    errorElement.text = message;
    errorElement.show('fade');
}

export function clearFormErrors(formId) {
    const form = $w(`#${formId}`);
    if (!form) return;
    
    // Reset all field borders and hide error messages
    const fields = form.children;
    fields.forEach(field => {
        field.style.borderColor = '';
        const errorElement = $w(`#${field.id}Error`);
        if (errorElement) {
            errorElement.hide();
        }
    });
}