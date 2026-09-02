/* GAMCHO MEDIA 4-LANGUAGE SYSTEM */
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".media-language [data-lang]");

  const applyLanguage = (language) => {
    if (!supportedLanguages.includes(language)) language = defaultLanguage;
    const data = translations[language];

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = data[element.dataset.i18n];
      if (value !== undefined) element.innerHTML = value;
    });

    document.documentElement.lang = language;
    localStorage.setItem("gamcho-language", language);

    buttons.forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  const saved = localStorage.getItem("gamcho-language");
  applyLanguage(saved && supportedLanguages.includes(saved) ? saved : defaultLanguage);
});
