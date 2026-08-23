/* =========================================================
   GAMCHO RESTAURANT 2.0
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       ELEMENTS
    ----------------------------------------------------- */

    const header = document.querySelector(".site-header");
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const mainNav = document.querySelector(".main-nav");
    const languageSelector = document.querySelector(".language-selector");
    const languageButton = document.querySelector(".language-button");


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
       MOBILE NAVIGATION
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


    /* -----------------------------------------------------
       CLOSE MOBILE MENU WHEN LINK CLICKED
    ----------------------------------------------------- */

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


    /* -----------------------------------------------------
       CLOSE MOBILE MENU ON RESIZE
    ----------------------------------------------------- */

    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 768) {
                closeMobileMenu();
            }

        }
    );


    /* -----------------------------------------------------
       LANGUAGE SELECTOR
    ----------------------------------------------------- */

    if (languageButton && languageSelector) {

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
       LANGUAGE OPTION CLICK
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

                    const selectedLanguage =
                        option.dataset.lang;

                    console.log(
                        "Selected language:",
                        selectedLanguage
                    );

                    /*
                     * 실제 언어 변경 기능은
                     * translations.js와 연결하는
                     * 다음 단계에서 구현합니다.
                     */

                    if (languageButton) {

                        const languageNames = {
                            ko: "KOR",
                            en: "ENG",
                            zh: "中文",
                            ja: "日本語"
                        };

                        languageButton.textContent =
                            languageNames[
                                selectedLanguage
                            ] || "KOR";

                    }

                    languageSelector.classList.remove(
                        "is-open"
                    );

                }
            );

        });

    }


    /* -----------------------------------------------------
       CLOSE LANGUAGE MENU
       WHEN CLICKING OUTSIDE
    ----------------------------------------------------- */

    document.addEventListener(
        "click",
        (event) => {

            if (
                languageSelector &&
                !languageSelector.contains(event.target)
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

});
