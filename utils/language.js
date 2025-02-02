document.addEventListener("DOMContentLoaded", () => {
  const langButton = document.querySelector(".dropdown__button");
  const langOptions = document.querySelectorAll(".dropdown__menu li a");

  const translations = {
    en: {
      "how-it-works": "How it works",
      about: "About",
      instructions: "Instructions",
      accounts: "Accounts",
      platforms: "Platforms",
      contact: "Contact",
      "sign-in": "SIGN IN FOR FREE",
      language: "Language",
    },
    ua: {
      "how-it-works": "Як це працює",
      about: "Про нас",
      instructions: "Інструкції",
      accounts: "Рахунки",
      platforms: "Платформи",
      contact: "Контакти",
      "sign-in": "УВІЙТИ БЕЗКОШТОВНО",
      language: "Мова",
    },
  };

  function updateLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    localStorage.setItem("language", lang);
  }

  langOptions.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.preventDefault();
      const selectedLang = event.target.getAttribute("data-lang");
      updateLanguage(selectedLang);
    });
  });

  const savedLang = localStorage.getItem("language") || "en";
  updateLanguage(savedLang);
});
