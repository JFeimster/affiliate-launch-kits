(function () {
  "use strict";

  const DATA_PATHS = {
    resources: "/data/resources.json",
    categories: "/data/resource-categories.json",
    launchKits: "/data/partner-launch-kits.json",
    compliance: "/data/compliance-language.json"
  };

  const selectors = {
    input: "[data-site-search]",
    results: "[data-search-results]",
    count: "[data-search-count]",
    empty: "[data-search-empty]"
  };

  const state = {
    index: [],
    query: "",
    ready: false
  };

  function hasSearchElements() {
    return Boolean(document.querySelector(selectors.input) && document.querySelector(selectors.results));
  }

  function fetchJson(path) {
    return fetch(path, { cache: "no-cache" }).then(function (response) {
      if (!response.ok) {
        throw new Error("Unable to load " + path + ": " + response.status);
      }

      return response.json();
    });
  }

  function toArray(value) {
    if (Array.isArray(value)) return value;
    if (value === null || value === undefined || value === "") return [];
    return [value];
  }

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function slugToLabel(value) {
    return String(value || "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, function (letter) {
        return letter.toUpperCase();
      });
  }

  function clearElement(element) {
    if (!element) return;
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  function createElement(tagName, className, text) {
    const element = document.createElement(tagName);

    if (className) {
      element.className = className;
    }

    if (text !== undefined && text !== null) {
      element.textContent = text;
    }

    return element;
  }

  function createBadge(text, label) {
    const badge = createElement("span", "pill", text);

    if (label) {
      badge.setAttribute("aria-label", label + ": " + text);
    }

    return badge;
  }

  function createLinkButton(label, url, variant) {
    if (!url) return null;

    const link = createElement("a", "button " + (variant || "button-secondary"), label);
    link.href = url;

    if (/^https?:\/\//i.test(url)) {
      link.rel = "noopener";
    }

    return link;
  }

  function debounce(callback, delay) {
    let timeoutId;

    return function () {
      const args = arguments;
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(function () {
        callback.apply(null, args);
      }, delay);
    };
  }

  function getCategoryName(categoryId, categories) {
    const match = categories.find(function (category) {
      return category.id === categoryId;
    });

    return match ? match.name : slugToLabel(categoryId);
  }

  function compactText(parts) {
    return parts
      .flatMap(function (part) {
        return toArray(part);
      })
      .filter(Boolean)
      .join(" ");
  }

  function createResourceRecords(resources, categories) {
    return toArray(resources).map(function (resource) {
      const categoryName = getCategoryName(resource.category, categories);

      return {
        id: resource.id || "",
        type: "resource",
        typeLabel: "Resource",
        title: resource.title || "Untitled Resource",
        description: resource.description || "",
        category: categoryName,
        url: resource.pageUrl || resource.sourcePath || resource.downloadUrl || "",
        sourcePath: resource.sourcePath || "",
        status: resource.status || "planned",
        featured: Boolean(resource.featured),
        searchText: compactText([
          resource.title,
          resource.description,
          resource.category,
          categoryName,
          resource.resourceType,
          resource.partnerType,
          resource.audience,
          resource.useCase,
          resource.format,
          resource.status,
          resource.safeLanguageNotes,
          resource.ecosystemBrand
        ])
      };
    });
  }

  function createCategoryRecords(categories) {
    return toArray(categories).map(function (category) {
      return {
        id: category.id || "",
        type: "category",
        typeLabel: "Category",
        title: category.name || "Resource Category",
        description: category.description || "",
        category: "Resource Categories",
        url: "/pages/partner-resource-library.html",
        sourcePath: "",
        status: category.featured ? "featured" : "available",
        featured: Boolean(category.featured),
        searchText: compactText([
          category.id,
          category.name,
          category.description,
          category.audience,
          category.useCases,
          category.icon
        ])
      };
    });
  }

  function createLaunchKitRecords(launchKits) {
    return toArray(launchKits).map(function (launchKit) {
      return {
        id: launchKit.id || "",
        type: "launch-kit",
        typeLabel: "Launch Kit",
        title: launchKit.title || launchKit.partnerName || "Partner Launch Kit",
        description: launchKit.summary || launchKit.safePositioning || "",
        category: "Launch Kits",
        url: launchKit.profilePage || launchKit.sourceFolder || launchKit.downloadUrl || "",
        sourcePath: launchKit.sourceFolder || "",
        status: launchKit.status || "planned",
        featured: Boolean(launchKit.featured),
        searchText: compactText([
          launchKit.id,
          launchKit.partnerName,
          launchKit.slug,
          launchKit.status,
          launchKit.ecosystemBrand,
          launchKit.partnerType,
          launchKit.umbrellaTerm,
          launchKit.title,
          launchKit.summary,
          launchKit.safePositioning,
          launchKit.restrictedPositioning,
          launchKit.bestFitLanes,
          launchKit.primaryAudiences,
          launchKit.launchObjectives,
          launchKit.recommendedAssets,
          launchKit.resourceIds
        ])
      };
    });
  }

  function createComplianceRecords(compliance) {
    const records = [];

    toArray(compliance.approvedPhrases).forEach(function (phrase, index) {
      records.push({
        id: "approved-phrase-" + index,
        type: "compliance",
        typeLabel: "Approved Language",
        title: phrase,
        description: "Approved funding-related language for Partner resources and conversations.",
        category: "Compliance",
        url: "/pages/compliance.html",
        sourcePath: "",
        status: "approved",
        featured: false,
        searchText: compactText([
          phrase,
          "approved language",
          "safe language",
          compliance.defaultDisclaimer,
          compliance.purpose,
          compliance.ecosystemBrand
        ])
      });
    });

    toArray(compliance.restrictedPhrases).forEach(function (phrase, index) {
      records.push({
        id: "restricted-phrase-" + index,
        type: "compliance",
        typeLabel: "Restricted Language",
        title: phrase,
        description: "Restricted funding-related language that Partners should avoid.",
        category: "Compliance",
        url: "/pages/compliance.html",
        sourcePath: "",
        status: "restricted",
        featured: false,
        searchText: compactText([
          phrase,
          "restricted language",
          "avoid",
          "unsafe claims",
          compliance.defaultDisclaimer,
          compliance.purpose,
          compliance.ecosystemBrand
        ])
      });
    });

    toArray(compliance.safeRewriteExamples).forEach(function (example, index) {
      records.push({
        id: "safe-rewrite-" + index,
        type: "compliance",
        typeLabel: "Safe Rewrite",
        title: "Safe rewrite example",
        description: example.safe || "",
        category: "Compliance",
        url: "/pages/compliance.html",
        sourcePath: "",
        status: "guide",
        featured: false,
        searchText: compactText([
          example.unsafe,
          example.safe,
          "safe rewrite",
          "compliance",
          compliance.defaultDisclaimer
        ])
      });
    });

    return records;
  }

  function buildIndex(data) {
    const categories = Array.isArray(data.categories) ? data.categories : [];

    return []
      .concat(createResourceRecords(data.resources, categories))
      .concat(createCategoryRecords(categories))
      .concat(createLaunchKitRecords(data.launchKits))
      .concat(createComplianceRecords(data.compliance || {}))
      .map(function (record) {
        record.normalizedText = normalize(
          compactText([
            record.title,
            record.description,
            record.category,
            record.typeLabel,
            record.status,
            record.searchText
          ])
        );
        return record;
      });
  }

  function scoreRecord(record, terms) {
    const title = normalize(record.title);
    const description = normalize(record.description);
    const category = normalize(record.category);
    const fullText = record.normalizedText;

    let score = 0;

    terms.forEach(function (term) {
      if (!term) return;

      if (title === term) score += 20;
      if (title.includes(term)) score += 10;
      if (category.includes(term)) score += 6;
      if (description.includes(term)) score += 4;
      if (fullText.includes(term)) score += 2;
    });

    if (record.featured) score += 1;

    return score;
  }

  function search(query) {
    const cleanQuery = normalize(query);

    if (!cleanQuery) {
      return [];
    }

    const terms = cleanQuery.split(" ").filter(Boolean);

    return state.index
      .map(function (record) {
        return {
          record: record,
          score: scoreRecord(record, terms)
        };
      })
      .filter(function (result) {
        return result.score > 0;
      })
      .sort(function (a, b) {
        return b.score - a.score || a.record.title.localeCompare(b.record.title);
      })
      .map(function (result) {
        return result.record;
      });
  }

  function createResultCard(record) {
    const article = createElement("article", "card reveal");
    article.setAttribute("data-search-result-id", record.id || "");
    article.setAttribute("data-search-result-type", record.type || "");

    const eyebrow = createElement("p", "panel-label", record.typeLabel || "Result");
    const title = createElement("h3", "", record.title || "Untitled Result");
    const description = createElement("p", "", record.description || "");

    const meta = createElement("div", "hero-meta");
    meta.setAttribute("aria-label", "Search result details");

    if (record.category) {
      meta.appendChild(createBadge(record.category, "Category"));
    }

    if (record.status) {
      meta.appendChild(createBadge(slugToLabel(record.status), "Status"));
    }

    if (record.featured) {
      meta.appendChild(createBadge("Featured", "Featured result"));
    }

    const actions = createElement("div", "card-actions");
    actions.style.marginTop = "1.35rem";

    const openLink = createLinkButton("Open", record.url, "button-primary");
    const sourceLink = createLinkButton("Source", record.sourcePath, "button-secondary");

    [openLink, sourceLink].forEach(function (link) {
      if (link) {
        actions.appendChild(link);
      }
    });

    article.appendChild(eyebrow);
    article.appendChild(title);

    if (description.textContent) {
      article.appendChild(description);
    }

    if (meta.children.length) {
      article.appendChild(meta);
    }

    if (actions.children.length) {
      article.appendChild(actions);
    }

    return article;
  }

  function updateCount(count) {
    document.querySelectorAll(selectors.count).forEach(function (element) {
      element.textContent = String(count);
    });
  }

  function updateEmptyState(isEmpty, hasQuery) {
    document.querySelectorAll(selectors.empty).forEach(function (element) {
      element.hidden = !(isEmpty && hasQuery);
    });
  }

  function renderResults(results, hasQuery) {
    document.querySelectorAll(selectors.results).forEach(function (container) {
      clearElement(container);

      const fragment = document.createDocumentFragment();
      results.forEach(function (record) {
        fragment.appendChild(createResultCard(record));
      });

      container.appendChild(fragment);
    });

    updateCount(results.length);
    updateEmptyState(results.length === 0, hasQuery);

    if (window.PEOSReveal && typeof window.PEOSReveal.refresh === "function") {
      window.PEOSReveal.refresh();
    }
  }

  function handleSearchInput(input) {
    state.query = input.value || "";

    const results = search(state.query);
    renderResults(results, Boolean(normalize(state.query)));
  }

  function setupSearchInputs() {
    const debouncedHandler = debounce(function (input) {
      handleSearchInput(input);
    }, 180);

    document.querySelectorAll(selectors.input).forEach(function (input) {
      input.setAttribute("autocomplete", input.getAttribute("autocomplete") || "off");
      input.setAttribute("spellcheck", input.getAttribute("spellcheck") || "false");

      input.addEventListener("input", function () {
        debouncedHandler(input);
      });

      if (input.value) {
        handleSearchInput(input);
      }
    });
  }

  function init() {
    if (!hasSearchElements()) return;

    Promise.all([
      fetchJson(DATA_PATHS.resources),
      fetchJson(DATA_PATHS.categories),
      fetchJson(DATA_PATHS.launchKits),
      fetchJson(DATA_PATHS.compliance)
    ])
      .then(function (results) {
        state.index = buildIndex({
          resources: results[0],
          categories: results[1],
          launchKits: results[2],
          compliance: results[3]
        });
        state.ready = true;

        setupSearchInputs();
        updateCount(0);
        updateEmptyState(false, false);
      })
      .catch(function (error) {
        console.warn("Partner Enablement OS search warning:", error.message);
        updateCount(0);
        updateEmptyState(false, false);
      });
  }

  window.PEOSSearch = {
    init: init,
    search: search,
    getIndex: function () {
      return state.index.slice();
    },
    isReady: function () {
      return state.ready;
    }
  };

  document.addEventListener("DOMContentLoaded", init);
})();
