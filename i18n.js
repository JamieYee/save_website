// ==========================================
// Internationalization (i18n) System
// Language controlled by URL parameter: ?lang=zh or ?lang=en
// ==========================================

const translations = {
    zh: {
        // Page Meta
        page_title: "熊啾啾",
        logo: "🐻 熊啾啾",

        // Navigation
        nav_home: "首页",
        nav_about: "关于我们",
        nav_services: "产品特色",
        nav_advantages: "为什么选择我们",

        // Hero Section
        hero_title: "智能科技 腕间之选",
        hero_subtitle: "熊啾啾 - 专注亚马逊智能手表销售，为全球用户提供高品质智能穿戴设备",
        hero_cta1: "浏览产品",
        hero_cta2: "了解更多",

        // About Section
        about_title: "关于我们",
        about_subtitle: "熊啾啾 - 亚马逊智能手表专业卖家",
        about_mission_title: "我们的使命",
        about_mission_desc: "为全球用户提供高品质、高性价比的智能手表，让科技融入生活，让健康触手可及。",
        about_vision_title: "我们的愿景",
        about_vision_desc: "成为亚马逊平台最受信赖的智能手表品牌，用优质产品和服务赢得全球用户的认可。",
        about_values_title: "我们的价值观",
        about_values_desc: "品质第一、客户至上、持续创新、诚信经营。",

        // Services Section (Product Features)
        services_title: "产品特色",
        services_subtitle: "专业智能手表 功能全面覆盖",
        service_platform_title: "健康监测",
        service_platform_desc: "24小时心率监测、血氧检测、睡眠追踪、压力监测，全方位守护您的健康。",
        service_website_title: "运动模式",
        service_website_desc: "支持100+种运动模式，精准记录运动数据，科学指导您的健身计划。",
        service_logistics_title: "智能提醒",
        service_logistics_desc: "来电提醒、消息通知、久坐提醒、喝水提醒，让您不错过任何重要信息。",
        service_marketing_title: "超长续航",
        service_marketing_desc: "大容量电池设计，正常使用可续航7-15天，告别频繁充电烦恼。",
        service_sourcing_title: "精美外观",
        service_sourcing_desc: "时尚设计、多款表盘、可更换表带，适配各种场合和个人风格。",
        service_support_title: "防水防尘",
        service_support_desc: "IP68防水等级，游泳、洗手、雨天都能放心佩戴，经久耐用。",

        // Advantages Section
        advantages_title: "为什么选择我们",
        advantages_subtitle: "品质保证 服务专业",
        advantage1_title: "产品质量",
        advantage1_desc: "严格质检流程，每一款手表出厂前都经过多重测试，确保品质可靠。",
        advantage2_title: "亚马逊认证",
        advantage2_desc: "亚马逊官方认证卖家，海量好评，星级评分优秀，值得信赖。",
        advantage3_title: "快速配送",
        advantage3_desc: "亚马逊FBA仓储配送，Prime会员可享次日达，购物体验更便捷。",
        advantage4_title: "售后保障",
        advantage4_desc: "30天无忧退换、一年质保服务，专业客服团队随时为您解答疑问。",

        // Testimonials Section
        testimonials_title: "用户评价",
        testimonials_subtitle: "来自亚马逊真实用户的反馈",
        testimonial1_content: "\"性价比超高！功能齐全，续航给力，戴了一个月非常满意，强烈推荐！\"",
        testimonial1_author: "— 亚马逊用户 John",
        testimonial2_content: "\"外观时尚，运动数据准确，健康监测功能很实用，物流也很快。\"",
        testimonial2_author: "— 亚马逊用户 Sarah",
        testimonial3_content: "\"质量很好，防水效果不错，客服响应及时，购物体验五星好评！\"",
        testimonial3_author: "— 亚马逊用户 Michael",

        // Footer
        footer_company_desc: "熊啾啾 - 亚马逊智能手表专业卖家",
        footer_company_title: "公司信息",
        footer_company_name: "深圳市熊啾啾科技有限公司",
        footer_company_name_en: "Shenzhen Xiongjiujiu Technology Co., Ltd.",
        footer_contact_title: "联系我们",
        footer_location: "📍 深圳市龙岗区平湖街道禾花社区富康路6号深业物流平湖中心厂房B（宝能智创谷B栋）711",
        footer_copyright: "© 2026 深圳市熊啾啾科技有限公司. 保留所有权利。"
    },

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
        footer_company_name_en: "深圳市熊啾啾科技有限公司",
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

    if (!langData) {
        console.error('Language not found:', lang);
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
