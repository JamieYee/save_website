(async function () {
    var version = document.getElementById("release-version");
    var date = document.getElementById("release-date");
    var download = document.getElementById("release-download");
    if (!version || !date || !download) return;

    try {
        // The existing API requires a version; the homepage only uses its release metadata.
        var response = await fetch("/api/check-version?version=1.0.0", {
            headers: { Accept: "application/json" },
            cache: "no-store"
        });
        if (!response.ok) return;

        var release = await response.json();
        if (typeof release.version === "string" && /^\d+\.\d+\.\d+/.test(release.version)) {
            version.textContent = release.version;
        }
        if (typeof release.publishedAt === "string" && /^\d{4}-\d{2}-\d{2}/.test(release.publishedAt)) {
            date.dateTime = release.publishedAt;
            date.textContent = release.publishedAt.slice(0, 10);
        }
        if (typeof release.downloadUrl === "string") {
            var url = new URL(release.downloadUrl);
            if (url.protocol === "https:") {
                download.href = url.href;
                download.hidden = false;
            }
        }
    } catch (_) {
        // Live Server has no API; keep the version and date already rendered in HTML.
    }
})();
