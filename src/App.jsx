import { useTranslation } from 'react-i18next';
import './App.css';
import { locales } from './i18n/i18n';

function App() {
    const { t, i18n } = useTranslation(['home', 'product', 'navbar']);
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const currentLanguage = locales[i18n.language];
    console.log(currentLanguage);
    return (
        <div className="App">
            <nav>
                <a href="/home">
                    <p>{t('navbar.home', { ns: 'navbar' })}</p>
                </a>
                <a href="/product">
                    <p>{t('navbar.product', { ns: 'navbar' })}</p>
                </a>
            </nav>
            <button onClick={() => changeLanguage('en')}>
                Change Language EN
            </button>
            <button onClick={() => changeLanguage('vi')}>
                Change Language VI
            </button>
            <h1>{t('home.intro')}</h1>
            <h1>{t('home.company')}</h1>
            <h1>{t('product.shampoo', { ns: 'product' })}</h1>
            <h1>{t('product.conditioner', { ns: 'product' })}</h1>
        </div>
    );
}

export default App;
