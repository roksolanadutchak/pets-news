import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        translation: {
            "Profile": "Profile"
        }
    },
    es: {
        translation: {
            "Profile": "Perfil"
        }
    },
    fr: {
        translation: {
            "Profile": "Profil"
        }
    },
    ua: {
        "Profile": "Профіль"
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;