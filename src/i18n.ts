import { createI18n } from "vue-i18n";

// import translations
import es from "@/assets/locales/es.json";
import en from "@/assets/locales/en.json";

// configure i18n
export const i18n = createI18n({
    locale: "es",
    fallbackLocale: "es",
    globalInjection: true,
    messages: { es, en },
});
