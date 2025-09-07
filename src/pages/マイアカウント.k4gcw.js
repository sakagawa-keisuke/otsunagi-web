import { showToast, animateElement, trackUserInteraction, validateEmail, validatePhone, handleFormErrors, clearFormErrors } from 'public/new-file.js';
import { DESIGN_TOKENS_2025, addKineticAnimation } from 'public/modern-styles-2025.js';

$w.onReady(function () {
    // Apply 2025 modern design to account page
    applyModernAccountStyling();
    
    // Initialize enhanced account page functionality
    initializeAccountPage();
    
    // Add modern animations
    setupModernAccountAnimations();
});

function initializeAccountPage() {
    setupProfileForm();
    setupAccountNavigation();
    setupPasswordChange();
    setupNotificationSettings();
    loadUserProfile();
}

function setupProfileForm() {
    const profileForm = $w('#profileForm');
    const saveButton = $w('#saveProfileButton');
    
    if (profileForm && saveButton) {
        // Real-time validation
        const emailField = $w('#emailField');
        const phoneField = $w('#phoneField');
        const nameField = $w('#nameField');
        
        if (emailField) {
            emailField.onInput(() => {
                validateEmailField(emailField);
            });
        }
        
        if (phoneField) {
            phoneField.onInput(() => {
                validatePhoneField(phoneField);
            });
        }
        
        if (nameField) {
            nameField.onInput(() => {
                validateNameField(nameField);
            });
        }
        
        saveButton.onClick(() => {
            handleProfileSave();
        });
    }
}

function validateEmailField(emailField) {
    const email = emailField.value;
    const isValid = validateEmail(email);
    
    if (email && !isValid) {
        emailField.style.borderColor = '#dc3545';
        showFieldError('emailField', '有効なメールアドレスを入力してください');
    } else {
        emailField.style.borderColor = '#28a745';
        hideFieldError('emailField');
    }
    
    return isValid;
}

function validatePhoneField(phoneField) {
    const phone = phoneField.value;
    const isValid = validatePhone(phone);
    
    if (phone && !isValid) {
        phoneField.style.borderColor = '#dc3545';
        showFieldError('phoneField', '有効な電話番号を入力してください');
    } else {
        phoneField.style.borderColor = '#28a745';
        hideFieldError('phoneField');
    }
    
    return isValid;
}

function validateNameField(nameField) {
    const name = nameField.value;
    const isValid = name && name.trim().length >= 2;
    
    if (name && !isValid) {
        nameField.style.borderColor = '#dc3545';
        showFieldError('nameField', '名前は2文字以上入力してください');
    } else if (name) {
        nameField.style.borderColor = '#28a745';
        hideFieldError('nameField');
    }
    
    return isValid;
}

function showFieldError(fieldId, message) {
    let errorElement = $w(`#${fieldId}Error`);
    if (errorElement) {
        errorElement.text = message;
        errorElement.show('fade');
    }
}

function hideFieldError(fieldId) {
    let errorElement = $w(`#${fieldId}Error`);
    if (errorElement) {
        errorElement.hide('fade');
    }
}

function handleProfileSave() {
    clearFormErrors('profileForm');
    
    const emailField = $w('#emailField');
    const phoneField = $w('#phoneField');
    const nameField = $w('#nameField');
    const saveButton = $w('#saveProfileButton');
    
    // Validate all fields
    let isValid = true;
    const errors = {};
    
    if (emailField && !validateEmailField(emailField)) {
        errors.emailField = '有効なメールアドレスを入力してください';
        isValid = false;
    }
    
    if (phoneField && !validatePhoneField(phoneField)) {
        errors.phoneField = '有効な電話番号を入力してください';
        isValid = false;
    }
    
    if (nameField && !validateNameField(nameField)) {
        errors.nameField = '名前は2文字以上入力してください';
        isValid = false;
    }
    
    if (!isValid) {
        handleFormErrors(errors);
        showToast('入力内容に誤りがあります', 'error');
        return;
    }
    
    // Show loading state
    const originalText = saveButton.label;
    saveButton.label = '保存中...';
    saveButton.disable();
    
    // Simulate save process
    setTimeout(() => {
        saveButton.label = originalText;
        saveButton.enable();
        
        showToast('プロフィールが保存されました', 'success');
        trackUserInteraction('profile_save', saveButton);
        
        // Add success animation
        animateElement('profileForm', 'bounce', { duration: 300 });
    }, 1500);
}

function setupAccountNavigation() {
    const navTabs = $w('#profileTab, #securityTab, #notificationsTab, #subscriptionsTab');
    
    navTabs.forEach((tab, index) => {
        if (tab) {
            tab.onClick(() => {
                switchAccountTab(index);
                trackUserInteraction('account_tab_switch', tab);
            });
            
            // Add hover effects
            tab.onMouseIn(() => {
                tab.style.backgroundColor = '#f8f9f9';
                tab.style.transition = 'background-color 0.2s ease';
            });
            
            tab.onMouseOut(() => {
                if (!tab.classList.contains('active')) {
                    tab.style.backgroundColor = 'transparent';
                }
            });
        }
    });
}

function switchAccountTab(tabIndex) {
    const tabs = $w('#profileTab, #securityTab, #notificationsTab, #subscriptionsTab');
    const contents = $w('#profileContent, #securityContent, #notificationsContent, #subscriptionsContent');
    
    // Hide all content panels
    contents.forEach((content, index) => {
        if (content) {
            if (index === tabIndex) {
                content.show('fade');
            } else {
                content.hide();
            }
        }
    });
    
    // Update tab styles
    tabs.forEach((tab, index) => {
        if (tab) {
            if (index === tabIndex) {
                tab.style.backgroundColor = '#007bff';
                tab.style.color = '#ffffff';
                tab.classList.add('active');
            } else {
                tab.style.backgroundColor = 'transparent';
                tab.style.color = '#333333';
                tab.classList.remove('active');
            }
        }
    });
}

function setupPasswordChange() {
    const changePasswordButton = $w('#changePasswordButton');
    const currentPasswordField = $w('#currentPassword');
    const newPasswordField = $w('#newPassword');
    const confirmPasswordField = $w('#confirmPassword');
    
    if (changePasswordButton) {
        changePasswordButton.onClick(() => {
            handlePasswordChange();
        });
    }
    
    if (confirmPasswordField) {
        confirmPasswordField.onInput(() => {
            validatePasswordMatch();
        });
    }
}

function validatePasswordMatch() {
    const newPassword = $w('#newPassword');
    const confirmPassword = $w('#confirmPassword');
    
    if (newPassword && confirmPassword) {
        if (confirmPassword.value && newPassword.value !== confirmPassword.value) {
            confirmPassword.style.borderColor = '#dc3545';
            showFieldError('confirmPassword', 'パスワードが一致しません');
            return false;
        } else if (confirmPassword.value) {
            confirmPassword.style.borderColor = '#28a745';
            hideFieldError('confirmPassword');
            return true;
        }
    }
    return false;
}

function handlePasswordChange() {
    const currentPassword = $w('#currentPassword');
    const newPassword = $w('#newPassword');
    const confirmPassword = $w('#confirmPassword');
    const changeButton = $w('#changePasswordButton');
    
    if (!currentPassword?.value || !newPassword?.value || !confirmPassword?.value) {
        showToast('すべてのフィールドを入力してください', 'error');
        return;
    }
    
    if (!validatePasswordMatch()) {
        return;
    }
    
    if (newPassword.value.length < 8) {
        showToast('新しいパスワードは8文字以上である必要があります', 'error');
        return;
    }
    
    // Show loading state
    const originalText = changeButton.label;
    changeButton.label = '変更中...';
    changeButton.disable();
    
    // Simulate password change
    setTimeout(() => {
        changeButton.label = originalText;
        changeButton.enable();
        
        // Clear fields
        if (currentPassword) currentPassword.value = '';
        if (newPassword) newPassword.value = '';
        if (confirmPassword) confirmPassword.value = '';
        
        showToast('パスワードが変更されました', 'success');
        trackUserInteraction('password_change', changeButton);
    }, 2000);
}

function setupNotificationSettings() {
    const notificationToggles = $w('#emailNotifications, #pushNotifications, #smsNotifications');
    
    notificationToggles.forEach(toggle => {
        if (toggle) {
            toggle.onChange(() => {
                const setting = toggle.id;
                const enabled = toggle.checked;
                
                showToast(
                    enabled ? `${setting}が有効になりました` : `${setting}が無効になりました`,
                    'info'
                );
                
                trackUserInteraction('notification_setting_change', toggle);
            });
        }
    });
}

function loadUserProfile() {
    // Simulate loading user profile data
    setTimeout(() => {
        const nameField = $w('#nameField');
        const emailField = $w('#emailField');
        const phoneField = $w('#phoneField');
        
        // Add loading animations for form fields
        [nameField, emailField, phoneField].forEach((field, index) => {
            if (field) {
                animateElement(field.id, 'fadeIn', { delay: index * 200 });
            }
        });
        
        // Show welcome message
        showToast('アカウント情報が読み込まれました', 'info');
    }, 1000);
}

function applyModernAccountStyling() {
    // Apply 2025 design system to account page
    applyModernAccountTypography();
    applyModernAccountLayout();
    applyModernAccountForms();
    applyModernAccountTabs();
}

function applyModernAccountTypography() {
    const tokens = DESIGN_TOKENS_2025;
    
    // Page title with kinetic typography
    const pageTitle = $w('#pageTitle, .account-title, .page-header');
    pageTitle.forEach(title => {
        if (title) {
            title.style.fontFamily = tokens.typography.display;
            title.style.fontSize = 'clamp(2rem, 4vw, 3.5rem)';
            title.style.fontWeight = '800';
            title.style.lineHeight = '1.1';
            title.style.letterSpacing = '-0.03em';
            title.style.marginBottom = '1rem';
            
            // Gradient text effect
            title.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            title.style.backgroundClip = 'text';
            title.style.webkitBackgroundClip = 'text';
            title.style.webkitTextFillColor = 'transparent';
        }
    });
    
    // Section headings
    const sectionHeadings = $w('.section-title, #profileTitle, #securityTitle, #notificationTitle');
    sectionHeadings.forEach(heading => {
        if (heading) {
            heading.style.fontFamily = tokens.typography.display;
            heading.style.fontSize = '1.75rem';
            heading.style.fontWeight = '700';
            heading.style.color = tokens.colors.neutral[900];
            heading.style.marginBottom = '1.5rem';
        }
    });
    
    // Form labels
    const labels = $w('.field-label, label');
    labels.forEach(label => {
        if (label) {
            label.style.fontFamily = tokens.typography.primary;
            label.style.fontSize = '0.875rem';
            label.style.fontWeight = '600';
            label.style.color = tokens.colors.neutral[700];
            label.style.marginBottom = '0.5rem';
            label.style.letterSpacing = '0.025em';
            label.style.textTransform = 'uppercase';
        }
    });
}

function applyModernAccountLayout() {
    const tokens = DESIGN_TOKENS_2025;
    
    // Main account container
    const accountContainer = $w('#accountContainer, .account-wrapper');
    accountContainer.forEach(container => {
        if (container) {
            container.style.maxWidth = '1200px';
            container.style.margin = '0 auto';
            container.style.padding = '2rem 1.5rem';
            container.style.display = 'grid';
            container.style.gridTemplateColumns = '280px 1fr';
            container.style.gap = '3rem';
            
            // Responsive layout
            container.style.gridTemplateColumns = 'minmax(280px, 300px) 1fr';
        }
    });
    
    // Content sections with modern cards
    const contentSections = $w('#profileContent, #securityContent, #notificationsContent, #subscriptionsContent');
    contentSections.forEach(section => {
        if (section) {
            section.style.background = 'rgba(255, 255, 255, 0.95)';
            section.style.backdropFilter = 'blur(20px)';
            section.style.border = `1px solid ${tokens.colors.neutral[200]}`;
            section.style.borderRadius = tokens.borderRadius['2xl'];
            section.style.padding = '2.5rem';
            section.style.boxShadow = tokens.shadows.lg;
            section.style.transition = `all ${tokens.animations.duration.normal} ${tokens.animations.easing.default}`;
        }
    });
    
    // Form sections with better spacing
    const formSections = $w('.form-section, .profile-section');
    formSections.forEach(section => {
        if (section) {
            section.style.marginBottom = '2.5rem';
            section.style.padding = '0';
        }
    });
}

function applyModernAccountForms() {
    const tokens = DESIGN_TOKENS_2025;
    
    // Form input styling
    const formInputs = $w('#nameField, #emailField, #phoneField, #currentPassword, #newPassword, #confirmPassword');
    formInputs.forEach(input => {
        if (input) {
            input.style.fontFamily = tokens.typography.primary;
            input.style.fontSize = '1rem';
            input.style.padding = '1rem 1.25rem';
            input.style.borderRadius = tokens.borderRadius.lg;
            input.style.border = `2px solid ${tokens.colors.neutral[200]}`;
            input.style.backgroundColor = tokens.colors.neutral[50];
            input.style.transition = `all ${tokens.animations.duration.normal} ${tokens.animations.easing.default}`;
            input.style.width = '100%';
            input.style.marginBottom = '1.5rem';
            
            // Modern focus state
            input.style.outline = 'none';
        }
    });
    
    // Enhanced form buttons
    const formButtons = $w('#saveProfileButton, #changePasswordButton, .form-button');
    formButtons.forEach(button => {
        if (button) {
            button.style.fontFamily = tokens.typography.primary;
            button.style.fontSize = '1rem';
            button.style.fontWeight = '600';
            button.style.padding = '1rem 2rem';
            button.style.borderRadius = tokens.borderRadius.lg;
            button.style.border = 'none';
            button.style.cursor = 'pointer';
            button.style.transition = `all ${tokens.animations.duration.normal} ${tokens.animations.easing.default}`;
            button.style.minWidth = '140px';
            
            // Primary button styling
            button.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            button.style.color = 'white';
            button.style.boxShadow = '0 10px 25px -5px rgba(102, 126, 234, 0.4)';
            
            // Hover effect
            button.style.transform = 'translateZ(0)'; // Hardware acceleration
        }
    });
    
    // Error message styling
    const errorMessages = $w('.error-message, [id*="Error"]');
    errorMessages.forEach(error => {
        if (error) {
            error.style.fontFamily = tokens.typography.primary;
            error.style.fontSize = '0.875rem';
            error.style.color = tokens.colors.error.main;
            error.style.marginTop = '0.5rem';
            error.style.marginBottom = '1rem';
            error.style.padding = '0.5rem 0.75rem';
            error.style.backgroundColor = tokens.colors.error.light;
            error.style.borderRadius = tokens.borderRadius.base;
            error.style.border = `1px solid ${tokens.colors.error.main}`;
        }
    });
}

function applyModernAccountTabs() {
    const tokens = DESIGN_TOKENS_2025;
    
    // Navigation tabs container
    const tabsContainer = $w('.tabs-container, .account-nav');
    tabsContainer.forEach(container => {
        if (container) {
            container.style.background = 'rgba(255, 255, 255, 0.95)';
            container.style.backdropFilter = 'blur(20px)';
            container.style.border = `1px solid ${tokens.colors.neutral[200]}`;
            container.style.borderRadius = tokens.borderRadius.xl;
            container.style.padding = '1rem';
            container.style.boxShadow = tokens.shadows.base;
            container.style.position = 'sticky';
            container.style.top = '2rem';
            container.style.height = 'fit-content';
        }
    });
    
    // Individual tab styling
    const tabs = $w('#profileTab, #securityTab, #notificationsTab, #subscriptionsTab');
    tabs.forEach(tab => {
        if (tab) {
            tab.style.fontFamily = tokens.typography.primary;
            tab.style.fontSize = '1rem';
            tab.style.fontWeight = '500';
            tab.style.padding = '1rem 1.25rem';
            tab.style.borderRadius = tokens.borderRadius.lg;
            tab.style.border = 'none';
            tab.style.cursor = 'pointer';
            tab.style.transition = `all ${tokens.animations.duration.normal} ${tokens.animations.easing.default}`;
            tab.style.width = '100%';
            tab.style.textAlign = 'left';
            tab.style.marginBottom = '0.5rem';
            tab.style.display = 'flex';
            tab.style.alignItems = 'center';
            tab.style.gap = '0.75rem';
            
            // Default state
            tab.style.backgroundColor = 'transparent';
            tab.style.color = tokens.colors.neutral[600];
            
            // Add subtle icons or indicators if possible
            tab.style.position = 'relative';
        }
    });
    
    // Active tab styling
    const activeTab = $w('.active-tab, [data-active="true"]');
    activeTab.forEach(tab => {
        if (tab) {
            tab.style.backgroundColor = tokens.colors.primary[500];
            tab.style.color = 'white';
            tab.style.boxShadow = '0 8px 20px -5px rgba(102, 126, 234, 0.4)';
            tab.style.fontWeight = '600';
        }
    });
}

function setupModernAccountAnimations() {
    // Page title animation
    const pageTitle = $w('#pageTitle, .account-title');
    pageTitle.forEach(title => {
        if (title) {
            addKineticAnimation(title.id, 'slide');
        }
    });
    
    // Staggered form field animations
    const formFields = $w('#nameField, #emailField, #phoneField');
    formFields.forEach((field, index) => {
        if (field) {
            // Set initial state
            field.style.opacity = '0';
            field.style.transform = 'translateY(20px)';
            
            // Animate in with stagger
            setTimeout(() => {
                field.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                field.style.opacity = '1';
                field.style.transform = 'translateY(0)';
            }, index * 150 + 300);
        }
    });
    
    // Tab container slide-in animation
    const tabsContainer = $w('.tabs-container, .account-nav');
    tabsContainer.forEach(container => {
        if (container) {
            container.style.opacity = '0';
            container.style.transform = 'translateX(-30px)';
            
            setTimeout(() => {
                container.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                container.style.opacity = '1';
                container.style.transform = 'translateX(0)';
            }, 200);
        }
    });
    
    // Content section animations
    const contentSections = $w('#profileContent, #securityContent, #notificationsContent');
    contentSections.forEach((section, index) => {
        if (section) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                section.style.transition = 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 100 + 400);
        }
    });
    
    // Button hover animations
    const buttons = $w('#saveProfileButton, #changePasswordButton');
    buttons.forEach(button => {
        if (button) {
            button.onMouseIn(() => {
                button.style.transform = 'translateY(-2px) scale(1.02)';
                button.style.boxShadow = '0 15px 35px -5px rgba(102, 126, 234, 0.5)';
            });
            
            button.onMouseOut(() => {
                button.style.transform = 'translateY(0) scale(1)';
                button.style.boxShadow = '0 10px 25px -5px rgba(102, 126, 234, 0.4)';
            });
        }
    });
}
