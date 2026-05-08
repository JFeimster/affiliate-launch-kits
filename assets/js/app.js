(function () {
  "use strict";

  const DATA_PATHS = {
    siteConfig: "/data/site-config.json",
    navigation: "/data/navigation.json"
  };

  const state = {
    siteConfig: null,
    navigation: []
  };

  const selectors = {
    nav: "[data-site-nav]",
    footerNav: "[data-footer-nav]",
    navToggle: "[data-nav-toggle]",
    brandName: "[data-brand-name]",
    brandKicker: "[data-brand-kicker]",
    currentYear: "[data-current-year]",
    configText: "[data-config-text]"
  };

  function normalizePath(path) {
    if (!path) return "/";
    const withoutHash = path.split("#")[0];
    const withoutQuery = withoutHash.split("?")[0];
    return withoutQuery.endsWith("/") && withoutQuery !== "/"
      ? withoutQuery.slice(0, -1)
      : withoutQuery;
  }

  function isCurrentUrl(url) {
    const current = normalizePath(window.location.pathname);
    const target = normalizePath(url);

    if (target === "/index.html" && (current === "/" || current === "/index.html")) {
      return true;
    }

    return current === target;
  }

  function safeFetchJson(path) {
    return fetch(path, { cache: "no-cache" }).then(function (response) {
      if (!response.ok) {
        throw new Error("Unable to load " + path + ": " + response.status);
      }

      return response.json();
    });
  }

  function createNavLink(item) {
    const link = document.createElement("a");
    link.href = item.url;
    link.textContent = item.label;

    if (isCurrentUrl(item.url)) {
      link.setAttribute("aria-current", "page");
    }

    if (item.description) {
      link.title = item.description;
    }

    return link;
  }

  function renderNavigation(items) {
    const sortedItems = items
      .slice()
      .filter(function (item) {
        return item && item.label && item.url && item.visible !== false;
      })
      .sort(function (a, b) {
        return Number(a.order || 0) - Number(b.order || 0);
      });

    document.querySelectorAll(selectors.nav).forEach(function (nav) {
      nav.innerHTML = "";
      sortedItems.forEach(function (item) {
        nav.appendChild(createNavLink(item));
      });
    });

    document.querySelectorAll(selectors.footerNav).forEach(function (nav) {
      nav.innerHTML = "";
      sortedItems.forEach(function (item) {
        nav.appendChild(createNavLink(item));
      });
    });
  }

  function renderSiteConfig(config) {
    document.querySelectorAll(selectors.brandName).forEach(function (element) {
      element.textContent = config.siteName || "Partner Enablement OS";
    });

    document.querySelectorAll(selectors.brandKicker).forEach(function (element) {
      element.textContent = config.brandName || "Moonshine Capital";
    });

    document.querySelectorAll(selectors.configText).forEach(function (element) {
      const key = element.getAttribute("data-config-text");
      if (key && config[key]) {
        element.textContent = config[key];
      }
    });

    document.querySelectorAll(selectors.currentYear).forEach(function (element) {
      element.textContent = String(new Date().getFullYear());
    });
  }

  function setupMobileNavigation() {
    const toggle = document.querySelector(selectors.navToggle);
    const nav = document.querySelector(selectors.nav);

    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });

    nav.addEventListener("click", function (event) {
      if (event.target && event.target.tagName === "A") {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
    });

    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
    });
  }

  function setupRevealAnimations() {
    const revealElements = document.querySelectorAll(".reveal");

    if (!revealElements.length) return;

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach(function (element) {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach(function (element) {
      observer.observe(element);
    });
  }

  function setupCopyButtons() {
    document.querySelectorAll("[data-copy-text]").forEach(function (button) {
      button.addEventListener("click", function () {
        const text = button.getAttribute("data-copy-text") || "";

        if (!navigator.clipboard) {
          return;
        }

        navigator.clipboard.writeText(text).then(function () {
          const original = button.textContent;
          button.textContent = "Copied";
          window.setTimeout(function () {
            button.textContent = original;
          }, 1500);
        });
      });
    });
  }

  function hydrateFromData() {
    return Promise.all([
      safeFetchJson(DATA_PATHS.siteConfig),
      safeFetchJson(DATA_PATHS.navigation)
    ])
      .then(function (results) {
        state.siteConfig = results[0];
        state.navigation = results[1];

        renderSiteConfig(state.siteConfig);
        renderNavigation(state.navigation);
      })
      .catch(function (error) {
        console.warn("Partner Enablement OS data hydration warning:", error.message);
        renderSiteConfig({
          siteName: "Partner Enablement OS",
          brandName: "Moonshine Capital"
        });
      });
  }

  function init() {
    setupMobileNavigation();
    setupRevealAnimations();
    setupCopyButtons();
    hydrateFromData();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
