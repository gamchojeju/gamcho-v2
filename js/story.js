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
