(function () {
    var isEnglish = (navigator.language || "").toLowerCase().startsWith("en");
    var copyright = document.querySelector(".footer-copyright");

    if (copyright) {
        copyright.textContent = isEnglish
            ? "© " + new Date().getFullYear() + " 飞飞记账. All rights reserved."
            : "© " + new Date().getFullYear() + " 飞飞记账. 保留所有权利。";
    }

    if (!isEnglish) return;

    document.documentElement.lang = "en";
    document.title = "飞飞记账 — A simpler way to track your money";

    var translations = {
        navFeatures: "Features",
        navScreenshots: "Screenshots",
        navHelp: "Help",
        heroTitle: "飞飞记账",
        heroDescription: "Save a little. Feel more secure. Look ahead. Track your everyday income and expenses, and see where your money goes.",
        screenshotsKicker: "APP SCREENSHOT",
        screenshotsTitle: "Your money, at a glance.",
        featuresKicker: "CORE FEATURES",
        featuresTitle: "Make tracking easier and your money clearer.",
        featureOneTitle: "Quick entries",
        featureOneDescription: "Capture everyday income and expenses as they happen.",
        featureTwoTitle: "Spending insights",
        featureTwoDescription: "See trends and category breakdowns to understand where your money goes.",
        featureThreeTitle: "Asset overview",
        featureThreeDescription: "See your accounts, assets, and debts together.",
        featureFourTitle: "Make it yours",
        featureFourDescription: "Set up books, categories, and icons to match your habits.",
        featureFiveTitle: "Budget planning",
        featureFiveDescription: "Set category budgets and follow your progress.",
        featureSixTitle: "Local-first, your backup",
        featureSixDescription: "Keep records on your device and back them up to your own WebDAV storage.",
        footerDescription: "Keep every entry simple and your money in view.",
        releaseVersionLabel: "Version",
        releaseUpdatedLabel: "Updated",
        releaseDownload: "Download APK",
        footerProduct: "EXPLORE THE APP",
        footerLegal: "HELP & LEGAL",
        footerContact: "CONTACT",
        backToTop: "Back to top",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        themeLegend: "Theme",
        themeLight: "Light",
        themeSystem: "System",
        themeDark: "Dark"
    };

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        var translation = translations[element.dataset.i18n];
        if (translation) element.textContent = translation;
    });

    document.querySelectorAll(".store-button-apple").forEach(function (button) {
        button.setAttribute("aria-label", "Download 飞飞记账 on the App Store");
    });
    document.querySelectorAll(".store-button-google").forEach(function (button) {
        button.setAttribute("aria-label", "Get 飞飞记账 on Google Play");
    });

    var socialLinks = document.querySelectorAll(".footer-socials .social-link");
    if (socialLinks[0]) socialLinks[0].setAttribute("aria-label", "Email 898763215@qq.com");
    if (socialLinks[1]) socialLinks[1].setAttribute("aria-label", "Visit 飞飞记账 on Xiaohongshu");

    var screenshotGallery = document.querySelector(".screenshot-gallery");
    if (screenshotGallery) screenshotGallery.setAttribute("aria-label", "飞飞记账 app screenshots");

    var screenshotDescriptions = [
        "飞飞记账 transaction list",
        "飞飞记账 spending trends and category insights",
        "飞飞记账 asset overview",
        "飞飞记账 profile and settings"
    ];
    document.querySelectorAll(".screenshot-panel img").forEach(function (image, index) {
        image.alt = screenshotDescriptions[index];
    });
})();
