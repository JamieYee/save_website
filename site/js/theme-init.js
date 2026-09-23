(function () {
    var mode = "system";
    try {
        var saved = localStorage.getItem("save-website-theme");
        if (saved === "light" || saved === "dark") mode = saved;
    } catch (_) {
        // The system appearance still works when storage is unavailable.
    }

    var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme =
        mode === "system" ? (dark ? "dark" : "light") : mode;
})();
