/* =========================================================
   GAMCHO RESTAURANT 2.0
   STORY PAGE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const data = window.gamchoStoryData;
    if (!data) return;

    const languages = ["ko", "en", "zh", "ja"];
    const saved = localStorage.getItem("gamcho-language");
    const language = languages.includes(saved) ? saved : "ko";

    const getValue = (object, path) =>
        path.split(".").reduce((value, key) => value && value[key], object);

    document.querySelectorAll("[data-story-i18n]").forEach((element) => {
        const value = getValue(data[language], element.dataset.storyI18n);
        if (value !== undefined) element.innerHTML = value;
    });

    document.documentElement.lang = language;
});

