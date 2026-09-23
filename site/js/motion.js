(function () {
    var root = document.documentElement;
    var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var pointerX = 0;
    var pointerY = 0;
    var frame = 0;

    function syncPointerEffect() {
        var enabled = finePointer.matches && !reducedMotion.matches;
        root.classList.toggle("has-pointer-glow", enabled);
        if (!enabled) root.classList.remove("pointer-active");
    }

    window.addEventListener("pointermove", function (event) {
        if (!root.classList.contains("has-pointer-glow") || event.pointerType !== "mouse") return;
        pointerX = event.clientX;
        pointerY = event.clientY;
        if (frame) return;

        frame = window.requestAnimationFrame(function () {
            root.style.setProperty("--pointer-x", pointerX + "px");
            root.style.setProperty("--pointer-y", pointerY + "px");
            root.classList.add("pointer-active");
            frame = 0;
        });
    }, { passive: true });

    window.addEventListener("blur", function () {
        root.classList.remove("pointer-active");
    });
    document.addEventListener("pointerleave", function () {
        root.classList.remove("pointer-active");
    });

    finePointer.addEventListener("change", syncPointerEffect);
    reducedMotion.addEventListener("change", syncPointerEffect);
    syncPointerEffect();

    if (!("IntersectionObserver" in window) || reducedMotion.matches) return;

    var targets = document.querySelectorAll(".section-heading, .screenshot-panel, .feature-card");
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

    root.classList.add("motion-ready");
    targets.forEach(function (target) { observer.observe(target); });

    reducedMotion.addEventListener("change", function () {
        if (!reducedMotion.matches) return;
        root.classList.remove("motion-ready");
        observer.disconnect();
    });
})();
