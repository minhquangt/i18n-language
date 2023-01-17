import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HOME_EN from '../locales/en/home.json';
import NAVBAR_EN from '../locales/en/navbar.json'
import PRODUCT_EN from '../locales/en/product.json'
import HOME_VI from '../locales/vi/home.json';
import NAVBAR_VI from '../locales/vi/navbar.json'
import PRODUCT_VI from '../locales/vi/product.json'

export const locales = {
    en:'English',
    vi:'Tiếng Việt',
}

const resources = {
  en: {
    home:HOME_EN,
    navbar:NAVBAR_EN,
    product:PRODUCT_EN,
  },
  vi: {
    home:HOME_VI,
    navbar:NAVBAR_VI,
    product:PRODUCT_VI,
  }
};

const defaultNS = 'product';

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en",
    ns: ['home','navbar','product'],
    defaultNS,
    interpolation: {
      escapeValue: false 
    }
  });
