/* =========================================================
   GAMCHO RESTAURANT 2.0
   Main JavaScript
   - Page translation
   - Signature menu rendering
   Header / mobile navigation interactions are handled only
   by site-common.js to prevent duplicate click handlers.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuPreview = document.querySelector(".menu-preview");
    const languageSelector = document.querySelector(".media-language");
    const languageButton = document.querySelector(".language-button");

    const getTranslationValue = (object, path) => {
        return path.split(".").reduce((current, key) => {
            return current &&
                Object.prototype.hasOwnProperty.call(current, key)
                ? current[key]
                : undefined;
        }, object);
    };

    const renderSignatureMenu = (language) => {

        if (!menuPreview) return;

        if (typeof menuData === "undefined" || !Array.isArray(menuData)) {
            console.error("menu-data.js를 찾을 수 없습니다.");
            return;
        }

        const signatureMenus = menuData
            .filter((menu) => menu.best)
            .slice(0, 3);

        menuPreview.innerHTML = "";

        signatureMenus.forEach((menu) => {

            const card = document.createElement("article");
            card.className = "menu-preview-card";

            const imageWrapper = document.createElement("div");
            imageWrapper.className = "menu-image";

            const image = document.createElement("img");
            image.src = menu.image;
            image.alt = menu.name[language] || menu.name.ko;
            image.loading = "lazy";

            imageWrapper.appendChild(image);

            const info = document.createElement("div");
            info.className = "menu-info";

            const title = document.createElement("h3");
            title.textContent = menu.name[language] || menu.name.ko;

            const description = document.createElement("p");
            description.textContent =
                menu.description[language] || menu.description.ko;

            const price = document.createElement("span");
            price.className = "menu-price";
            price.textContent = menu.price;

            info.appendChild(title);
            info.appendChild(description);
            info.appendChild(price);

            if (menu.best) {
                const best = document.createElement("span");
                best.className = "menu-best";
                best.textContent = "BEST";
                card.appendChild(best);
            }

            card.appendChild(imageWrapper);
            card.appendChild(info);
            menuPreview.appendChild(card);
        });
    };

    const applyLanguage = (language) => {

        if (typeof translations === "undefined") {
            console.error("translations.js를 찾을 수 없습니다.");
            return;
        }

        if (
            typeof supportedLanguages === "undefined" ||
            !supportedLanguages.includes(language)
        ) {
            language =
                typeof defaultLanguage !== "undefined"
                    ? defaultLanguage
                    : "ko";
        }

        const languageData = {
            ...translations[language],
            ...(typeof pageTranslations !== "undefined"
                ? pageTranslations[language] || {}
                : {})
        };

        document.querySelectorAll("[data-i18n]").forEach((element) => {

            const value = getTranslationValue(
                languageData,
                element.dataset.i18n
            );

            if (value !== undefined) {
                element.innerHTML = value;
            }
        });

        renderSignatureMenu(language);

        const languageLabels = {
            ko: "KOR",
            en: "ENG",
            zh: "中文",
            ja: "日本語"
        };

        if (languageButton) {
            languageButton.textContent =
                languageLabels[language] || "KOR";
            languageButton.setAttribute("aria-expanded", "false");
        }

        if (languageSelector) {
            languageSelector
                .querySelectorAll("[data-lang]")
                .forEach((option) => {

                    const active =
                        option.dataset.lang === language;

                    option.classList.toggle("active", active);
                    option.setAttribute(
                        "aria-pressed",
                        active ? "true" : "false"
                    );
                });
        }

        document.documentElement.lang =
            language === "zh" ? "zh-CN" : language;

        localStorage.setItem(
            "gamcho-language",
            language
        );
    };

    if (languageSelector) {
        languageSelector
            .querySelectorAll("[data-lang]")
            .forEach((option) => {

                option.addEventListener("click", () => {
                    applyLanguage(option.dataset.lang);
                    languageSelector.classList.remove("is-open");
                });
            });
    }

    const savedLanguage =
        localStorage.getItem("gamcho-language");

    const initialLanguage =
        savedLanguage &&
        typeof supportedLanguages !== "undefined" &&
        supportedLanguages.includes(savedLanguage)
            ? savedLanguage
            : (
                typeof defaultLanguage !== "undefined"
                    ? defaultLanguage
                    : "ko"
            );

    applyLanguage(initialLanguage);
});
