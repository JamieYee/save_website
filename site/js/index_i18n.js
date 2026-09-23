(function () {
    // Get device language
    var lang = navigator.language || navigator.userLanguage;
    var isEnglish = lang && lang.toLowerCase().indexOf('en') === 0;

    var footerCopyright = document.querySelector('.footer-copyright');
    var footerContactLabel = document.querySelector('.footer-contact-label');

    if (footerCopyright) {
        footerCopyright.textContent = isEnglish
            ? "© " + new Date().getFullYear() + " 飞飞记账. All rights reserved."
            : "© " + new Date().getFullYear() + " 飞飞记账. 保留所有权利。";
    }

    if (footerContactLabel) {
        footerContactLabel.textContent = isEnglish ? "Contact: " : "联系邮箱：";
    }

    // Check if language starts with 'en'
    if (isEnglish) {

        // Update Page Title and HTML Lang
        document.title = "飞飞记账";
        document.documentElement.lang = "en";

        // Update Hero Title
        var heroTitle = document.querySelector('.app-title');
        if (heroTitle) heroTitle.textContent = "飞飞记账";

        // Update Hero Description
        var heroDesc = document.querySelector('.app-description');
        if (heroDesc) heroDesc.textContent = "Save a little, secure your future.";

        // Update Nav Link
        var navLink = document.querySelector('.nav-link');
        if (navLink) navLink.textContent = "Help";
    }
})();
