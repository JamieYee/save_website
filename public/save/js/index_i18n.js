(function () {
    // Get device language
    var lang = navigator.language || navigator.userLanguage;

    // Check if language starts with 'en'
    if (lang && lang.toLowerCase().indexOf('en') === 0) {

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

        // Update Footer (if it exists)
        var footerSpan = document.querySelector('footer span');
        if (footerSpan) {
            footerSpan.textContent = "© " + new Date().getFullYear() + " 飞飞记账. All rights reserved.";
        }
    }
})();
