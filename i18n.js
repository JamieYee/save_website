// ==========================================
// Internationalization (i18n) System
// Language controlled by URL parameter: ?lang=zh or ?lang=en
// ==========================================

const translations = {


    en: {
        // Page Meta
        page_title: "Xiongjiujiu",
        logo: "🐻 Xiongjiujiu",

        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Features",
        nav_advantages: "Why Choose Us",

        // Hero Section
        hero_title: "Smart Tech On Your Wrist",
        hero_subtitle: "Xiongjiujiu - Specializing in Amazon smartwatch sales, providing high-quality smart wearable devices for global users",
        hero_cta1: "Browse Products",
        hero_cta2: "Learn More",

        // About Section
        about_title: "About Us",
        about_subtitle: "Xiongjiujiu - Professional Amazon Smartwatch Seller",
        about_mission_title: "Our Mission",
        about_mission_desc: "Provide high-quality, cost-effective smartwatches to global users, integrating technology into life and making health accessible.",
        about_vision_title: "Our Vision",
        about_vision_desc: "Become the most trusted smartwatch brand on Amazon, winning global user recognition with quality products and services.",
        about_values_title: "Our Values",
        about_values_desc: "Quality first, customer-centric, continuous innovation, and honest business practices.",

        // Services Section (Product Features)
        services_title: "Product Features",
        services_subtitle: "Professional Smartwatches with Comprehensive Functions",
        service_platform_title: "Health Monitoring",
        service_platform_desc: "24/7 heart rate monitoring, blood oxygen detection, sleep tracking, stress monitoring - comprehensive health protection.",
        service_website_title: "Sports Modes",
        service_website_desc: "Support 100+ sports modes, accurately record workout data, and scientifically guide your fitness plan.",
        service_logistics_title: "Smart Notifications",
        service_logistics_desc: "Call alerts, message notifications, sedentary reminders, hydration reminders - never miss important information.",
        service_marketing_title: "Long Battery Life",
        service_marketing_desc: "Large capacity battery design, 7-15 days battery life with normal use, say goodbye to frequent charging.",
        service_sourcing_title: "Elegant Design",
        service_sourcing_desc: "Fashionable design, multiple watch faces, replaceable straps - suitable for various occasions and personal styles.",
        service_support_title: "Water & Dust Resistant",
        service_support_desc: "IP68 waterproof rating, wear confidently while swimming, washing hands, or in the rain - built to last.",

        // Advantages Section
        advantages_title: "Why Choose Us",
        advantages_subtitle: "Quality Assurance & Professional Service",
        advantage1_title: "Product Quality",
        advantage1_desc: "Strict quality control process, every watch undergoes multiple tests before leaving the factory to ensure reliability.",
        advantage2_title: "Amazon Certified",
        advantage2_desc: "Official Amazon certified seller with massive positive reviews and excellent star ratings - trustworthy.",
        advantage3_title: "Fast Shipping",
        advantage3_desc: "Amazon FBA warehouse fulfillment, Prime members enjoy next-day delivery for a more convenient shopping experience.",
        advantage4_title: "After-Sales Guarantee",
        advantage4_desc: "30-day worry-free returns, 1-year warranty service, professional customer service team ready to answer your questions.",

        // Testimonials Section
        testimonials_title: "Customer Reviews",
        testimonials_subtitle: "Real Feedback from Amazon Users",
        testimonial1_content: "\"Excellent value for money! Full-featured, great battery life, very satisfied after wearing it for a month, highly recommended!\"",
        testimonial1_author: "— Amazon User John",
        testimonial2_content: "\"Stylish appearance, accurate sports data, practical health monitoring features, and fast shipping.\"",
        testimonial2_author: "— Amazon User Sarah",
        testimonial3_content: "\"Great quality, good waterproof performance, responsive customer service, five-star shopping experience!\"",
        testimonial3_author: "— Amazon User Michael",

        // Footer
        footer_company_desc: "Xiongjiujiu - Professional Amazon Smartwatch Seller",
        footer_company_title: "Company Information",
        footer_company_name: "Shenzhen Xiongjiujiu Technology Co., Ltd.",
        footer_contact_title: "Contact Us",
        footer_location: "📍 Room 711, Building B (Baoneng Smart Innovation Valley B), Shiye Logistics Pinghu Center, No. 6 Fukang Road, Hehua Community, Pinghu Street, Longgang District, Shenzhen",
        footer_copyright: "© 2026 Shenzhen Xiongjiujiu Technology Co., Ltd. All rights reserved."
    }
};

// Get language from URL parameter or default to Chinese
function getLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    return (lang === 'en' || lang === 'zh') ? lang : 'zh';
}

// Apply translations to the page
function applyTranslations(lang) {
    const langData = translations[lang];

    // If language is 'zh' (default) or data not found, do nothing (keep static HTML)
    if (lang === 'zh' || !langData) {
        if (lang !== 'zh') {
            console.warn('Language not found:', lang);
        }
        return;
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update all elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (langData[key]) {
            if (element.tagName === 'TITLE') {
                element.textContent = langData[key];
            } else {
                element.textContent = langData[key];
            }
        }
    });

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        if (lang === 'en') {
            metaDescription.content = "Xiongjiujiu - Professional Amazon smartwatch seller, providing high-quality smart wearable devices";
        } else {
            metaDescription.content = "熊啾啾 - 亚马逊智能手表专业卖家，提供高品质智能穿戴设备";
        }
    }
}

// Initialize i18n on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getLanguage();
    applyTranslations(currentLang);
});

// Export for use in other scripts if needed
window.i18n = {
    getLanguage,
    applyTranslations,
    translations
};
