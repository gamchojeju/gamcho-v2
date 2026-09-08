/* =========================================================
   GAMCHO STORY
   Unified 4-language controller
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const getValue = (object, path) => {
        return path.split(".").reduce((current, key) => {
            return current && Object.prototype.hasOwnProperty.call(current, key)
                ? current[key]
                : undefined;
        }, object);
    };

    const buttons = document.querySelectorAll(
        ".media-language [data-lang]"
    );

    const applyStoryLanguage = (language) => {

        if (
            typeof storyTranslations === "undefined" ||
            !storyTranslations[language]
        ) {
            language = defaultStoryLanguage;
        }

        const languageData = storyTranslations[language];

        document
            .querySelectorAll("[data-story-i18n]")
            .forEach((element) => {

                const value = getValue(
                    languageData,
                    element.dataset.storyI18n
                );

                if (value !== undefined) {
                    element.innerHTML = value;
                }
            });

        /* 공통 헤더 / 푸터 언어도 함께 변경 */
        if (typeof translations !== "undefined" && translations[language]) {
            const getCommonValue = (object, path) => {
                return path.split(".").reduce((current, key) => {
                    return current && Object.prototype.hasOwnProperty.call(current, key)
                        ? current[key]
                        : undefined;
                }, object);
            };

            document.querySelectorAll("[data-i18n]").forEach((element) => {
                const value = getCommonValue(
                    translations[language],
                    element.dataset.i18n
                );
                if (value !== undefined) element.innerHTML = value;
            });
        }

        const languageButton =
            document.querySelector(".language-button");

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

        document.documentElement.lang =
            language === "zh" ? "zh-CN" : language;

        /* INDEX / MEDIA와 동일한 저장 키 사용 */
        localStorage.setItem(
            "gamcho-language",
            language
        );

        buttons.forEach((button) => {

            const active =
                button.dataset.lang === language;

            button.classList.toggle(
                "active",
                active
            );

            button.setAttribute(
                "aria-pressed",
                active ? "true" : "false"
            );
        });
    };

    /*
     * 모든 페이지가 gamcho-language 하나만 사용합니다.
     * 기존 gamcho-story-language는 더 이상 사용하지 않습니다.
     */
    const savedLanguage =
        localStorage.getItem("gamcho-language");

    const initialLanguage =
        savedLanguage &&
        typeof supportedStoryLanguages !== "undefined" &&
        supportedStoryLanguages.includes(savedLanguage)
            ? savedLanguage
            : defaultStoryLanguage;

    buttons.forEach((button) => {

        button.addEventListener("click", () => {
            applyStoryLanguage(button.dataset.lang);
        });

    });

    applyStoryLanguage(initialLanguage);
});
