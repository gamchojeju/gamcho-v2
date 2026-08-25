/* =========================================================
   GAMCHO STORY
   Story language controller
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const getValue = (object, path) => {
        return path.split(".").reduce((current, key) => {
            return current && Object.prototype.hasOwnProperty.call(current, key)
                ? current[key]
                : undefined;
        }, object);
    };

    const applyStoryLanguage = (language) => {
        if (
            typeof storyTranslations === "undefined" ||
            !storyTranslations[language]
        ) {
            language = defaultStoryLanguage;
        }

        const languageData = storyTranslations[language];

        document.querySelectorAll("[data-story-i18n]").forEach((element) => {
            const value = getValue(
                languageData,
                element.dataset.storyI18n
            );

            if (value !== undefined) {
                element.innerHTML = value;
            }
        });

        document.documentElement.lang = language;
        localStorage.setItem("gamcho-story-language", language);

        document.querySelectorAll("[data-story-lang]").forEach((button) => {
            button.classList.toggle(
                "is-active",
                button.dataset.storyLang === language
            );
        });
    };

    const savedLanguage =
        localStorage.getItem("gamcho-story-language");

    const initialLanguage =
        savedLanguage &&
        supportedStoryLanguages.includes(savedLanguage)
            ? savedLanguage
            : defaultStoryLanguage;

    /* ---------------------------------------------
       LANGUAGE UI
       --------------------------------------------- */

    const languageSelector = document.createElement("div");

    languageSelector.className = "story-language-selector";
    languageSelector.setAttribute(
        "aria-label",
        "Language"
    );

    const labels = {
        ko: "KOR",
        en: "ENG",
        zh: "中文",
        ja: "日本語"
    };

    supportedStoryLanguages.forEach((language) => {

        const button = document.createElement("button");

        button.type = "button";
        button.dataset.storyLang = language;
        button.textContent = labels[language];

        button.addEventListener("click", () => {
            applyStoryLanguage(language);
        });

        languageSelector.appendChild(button);
    });

    document.body.appendChild(languageSelector);

    const style = document.createElement("style");

    style.textContent = `
        .story-language-selector {
            position: fixed;
            top: 18px;
            right: 20px;
            z-index: 9999;
            display: flex;
            gap: 4px;
            padding: 4px;
            background: rgba(255,255,255,.94);
            border: 1px solid rgba(0,0,0,.12);
            border-radius: 999px;
            box-shadow: 0 4px 18px rgba(0,0,0,.08);
            backdrop-filter: blur(8px);
        }

        .story-language-selector button {
            border: 0;
            background: transparent;
            padding: 6px 9px;
            border-radius: 999px;
            font: 600 11px/1 Pretendard, sans-serif;
            cursor: pointer;
            color: #555;
        }

        .story-language-selector button.is-active {
            background: #222;
            color: #fff;
        }

        @media (max-width: 768px) {
            .story-language-selector {
                top: 12px;
                right: 12px;
            }

            .story-language-selector button {
                padding: 5px 7px;
                font-size: 10px;
            }
        }
    `;

    document.head.appendChild(style);

    applyStoryLanguage(initialLanguage);
});
