/* =========================================================
   GAMCHO RESTAURANT 2.0
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       ELEMENTS
    ----------------------------------------------------- */

    const header =
        document.querySelector(".site-header");

    const mobileMenuButton =
        document.querySelector(".mobile-menu-button");

    const mainNav =
        document.querySelector(".main-nav");

    const languageSelector =
        document.querySelector(".media-language");

    const languageButton =
        document.querySelector(".language-button");

    const menuPreview =
        document.querySelector(".menu-preview");


    /* -----------------------------------------------------
       HEADER SCROLL
    ----------------------------------------------------- */

    const handleHeaderScroll = () => {

        if (!header) return;

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    };

    window.addEventListener(
        "scroll",
        handleHeaderScroll,
        { passive: true }
    );

    handleHeaderScroll();


    /* -----------------------------------------------------
       MOBILE MENU
    ----------------------------------------------------- */

    const closeMobileMenu = () => {

        if (!mainNav || !mobileMenuButton) return;

        mainNav.classList.remove("is-open");
        mobileMenuButton.classList.remove("is-active");

        document.body.classList.remove("menu-open");

        mobileMenuButton.setAttribute(
            "aria-label",
            "메뉴 열기"
        );

    };


    const toggleMobileMenu = () => {

        if (!mainNav || !mobileMenuButton) return;

        const isOpen =
            mainNav.classList.toggle("is-open");

        mobileMenuButton.classList.toggle(
            "is-active",
            isOpen
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

        mobileMenuButton.setAttribute(
            "aria-label",
            isOpen
                ? "메뉴 닫기"
                : "메뉴 열기"
        );

    };


    if (mobileMenuButton) {

        mobileMenuButton.addEventListener(
            "click",
            toggleMobileMenu
        );

    }


    if (mainNav) {

        const navLinks =
            mainNav.querySelectorAll("a");

        navLinks.forEach((link) => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        });

    }


    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 768) {
                closeMobileMenu();
            }

        }
    );


    /* -----------------------------------------------------
       TRANSLATION VALUE FINDER
    ----------------------------------------------------- */

    const getTranslationValue = (
        object,
        path
    ) => {

        return path
            .split(".")
            .reduce(
                (current, key) => {

                    if (
                        current &&
                        Object.prototype.hasOwnProperty.call(
                            current,
                            key
                        )
                    ) {

                        return current[key];

                    }

                    return undefined;

                },
                object
            );

    };


    /* -----------------------------------------------------
       MENU RENDERING
    ----------------------------------------------------- */

    const renderSignatureMenu = (language) => {

        if (!menuPreview) return;

        if (
            typeof menuData === "undefined" ||
            !Array.isArray(menuData)
        ) {

            console.error(
                "menu-data.js를 찾을 수 없습니다."
            );

            return;

        }


        /* 대표 메뉴 3개 */

        const signatureMenus =
            menuData
                .filter((menu) => menu.best)
                .slice(0, 3);


        menuPreview.innerHTML = "";


        signatureMenus.forEach((menu) => {

            const card =
                document.createElement("article");

            card.className =
                "menu-preview-card";


            /* 이미지 */

            const imageWrapper =
                document.createElement("div");

            imageWrapper.className =
                "menu-image";


            const image =
                document.createElement("img");

            image.src =
                menu.image;

            image.alt =
                menu.name[language] ||
                menu.name.ko;

            image.loading = "lazy";


            imageWrapper.appendChild(image);


            /* 정보 */

            const info =
                document.createElement("div");

            info.className =
                "menu-info";


            const title =
                document.createElement("h3");

            title.textContent =
                menu.name[language] ||
                menu.name.ko;


            const description =
                document.createElement("p");

            description.textContent =
                menu.description[language] ||
                menu.description.ko;


            const price =
                document.createElement("span");

            price.className =
                "menu-price";

            price.textContent =
                menu.price;


            info.appendChild(title);
            info.appendChild(description);
            info.appendChild(price);


            /* BEST */

            if (menu.best) {

                const best =
                    document.createElement("span");

                best.className =
                    "menu-best";

                best.textContent =
                    "BEST";

                card.appendChild(best);

            }


            card.appendChild(imageWrapper);
            card.appendChild(info);

            menuPreview.appendChild(card);

        });

    };


    /* -----------------------------------------------------
       LANGUAGE SYSTEM
    ----------------------------------------------------- */

    const applyLanguage = (language) => {

        if (
            typeof translations === "undefined"
        ) {

            console.error(
                "translations.js를 찾을 수 없습니다."
            );

            return;

        }


        if (
            !supportedLanguages.includes(language)
        ) {

            language =
                defaultLanguage;

        }


        const languageData =
            translations[language];


        /* ---------------------------------------------
           TEXT TRANSLATION
        --------------------------------------------- */

        const elements =
            document.querySelectorAll(
                "[data-i18n]"
            );


        elements.forEach((element) => {

            const key =
                element.dataset.i18n;

            const value =
                getTranslationValue(
                    languageData,
                    key
                );


            if (value !== undefined) {

                element.innerHTML =
                    value;

            }

        });


        /* ---------------------------------------------
           MENU TRANSLATION
        --------------------------------------------- */

        renderSignatureMenu(language);


        /* ---------------------------------------------
           LANGUAGE BUTTON
        --------------------------------------------- */

        const languageLabels = {

            ko: "KOR",
            en: "ENG",
            zh: "中文",
            ja: "日本語"

        };


        if (languageButton) {

            languageButton.textContent =
                languageLabels[language];

        }


        /* ---------------------------------------------
           HTML LANGUAGE
        --------------------------------------------- */

        document.documentElement.lang =
            language;


        /* ---------------------------------------------
           SAVE LANGUAGE
        --------------------------------------------- */

        localStorage.setItem(
            "gamcho-language",
            language
        );


        console.log(
            `Gamcho language changed to: ${language}`
        );

    };


    /* -----------------------------------------------------
       LANGUAGE SELECTOR
    ----------------------------------------------------- */

    if (
        languageButton &&
        languageSelector
    ) {

        languageButton.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                languageSelector.classList.toggle(
                    "is-open"
                );

            }
        );

    }


    /* -----------------------------------------------------
       LANGUAGE OPTION
    ----------------------------------------------------- */

    if (languageSelector) {

        const languageOptions =
            languageSelector.querySelectorAll(
                "[data-lang]"
            );


        languageOptions.forEach((option) => {

            option.addEventListener(
                "click",
                () => {

                    const language =
                        option.dataset.lang;

                    applyLanguage(language);

                    languageSelector.classList.remove(
                        "is-open"
                    );

                }
            );

        });

    }


    /* -----------------------------------------------------
       CLOSE LANGUAGE MENU
    ----------------------------------------------------- */

    document.addEventListener(
        "click",
        (event) => {

            if (
                languageSelector &&
                !languageSelector.contains(
                    event.target
                )
            ) {

                languageSelector.classList.remove(
                    "is-open"
                );

            }

        }
    );


    /* -----------------------------------------------------
       ESC KEY
    ----------------------------------------------------- */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                closeMobileMenu();

                if (languageSelector) {

                    languageSelector.classList.remove(
                        "is-open"
                    );

                }

            }

        }
    );


    /* -----------------------------------------------------
       INITIAL LANGUAGE
    ----------------------------------------------------- */

    const savedLanguage =
        localStorage.getItem(
            "gamcho-language"
        );


    const initialLanguage =
        savedLanguage &&
        supportedLanguages.includes(
            savedLanguage
        )
            ? savedLanguage
            : defaultLanguage;


    applyLanguage(initialLanguage);

});
