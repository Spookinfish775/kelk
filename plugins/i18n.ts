import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import ru from "../locales/ru.json";
import tm from "../locales/tm.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: localStorage.getItem("locale") || "ru",
    // locale: "ru",
    messages: {
      en,
      ru,
      tm,
    },
  });

  vueApp.use(i18n);
});
