import i18next from 'i18next';
import english from './english.json';
import french from './french.json';
import dutch from './dutch.json';
import {initReactI18next} from 'react-i18next';

i18next.use(initReactI18next).init({
  lng: 'english',
  resources: {
    english: english,
    french: french,
    dutch: dutch,
  },
  react: {
    useSuspense: false,
  },
});
export default i18next;
