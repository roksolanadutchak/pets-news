import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
// import resources from '../locales/es/translation.json';
const resources = {
	en: {
		translation: {
			Profile: 'Profile',
		},
	},
	es: {
		translation: {
			Profile: 'Perfil',
		},
	},
	fr: {
		translation: {
			Profile: 'Profil',
		},
	},
	ua: {
		translation: {
			Profile: 'Профіль',
		},
	},
};

i18n
	.use(initReactI18next)
	.use(
		resourcesToBackend(
			(language, namespace) => import(`../locales/es/${namespace}.json`)
		)
	)
	.init({
		resources,
		lng: 'en',
		namespace: 'translation',
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
