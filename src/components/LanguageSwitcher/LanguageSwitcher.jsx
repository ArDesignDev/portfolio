import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss';  // Assuming you have a CSS file for styling

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'active' : ''}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('de')}
        className={i18n.language === 'de' ? 'active' : ''}
      >
        DE
      </button>
    </div>
  );
}

export default LanguageSwitcher;
