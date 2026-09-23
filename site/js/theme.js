(function () {
    var storageKey = "save-website-theme";
    var media = window.matchMedia("(prefers-color-scheme: dark)");
    var radios = document.querySelectorAll('input[name="theme"]');
    var mode = "system";

    try {
        var saved = localStorage.getItem(storageKey);
        if (saved === "light" || saved === "dark") mode = saved;
    } catch (_) {
        // The theme picker still works for this visit if storage is unavailable.
    }

    function applyTheme() {
        document.documentElement.dataset.theme =
            mode === "system" ? (media.matches ? "dark" : "light") : mode;
        radios.forEach(function (radio) {
            radio.checked = radio.value === mode;
        });
    }

    radios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            if (!radio.checked) return;
            mode = radio.value;
            try {
                if (mode === "system") localStorage.removeItem(storageKey);
                else localStorage.setItem(storageKey, mode);
            } catch (_) {
                // Keep the selected mode active until the page is closed.
            }
            applyTheme();
        });
    });

    if (media.addEventListener) {
        media.addEventListener("change", function () {
            if (mode === "system") applyTheme();
        });
    }

    applyTheme();
})();
