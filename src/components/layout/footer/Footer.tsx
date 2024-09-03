import { useTranslation } from 'react-i18next';
import './Footer.scss';

function Footer() {
    const { t } = useTranslation();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <div className='footer centerContainer'>
            &copy; {currentYear} &#183; Game Station &#183; Belo Horizonte, {t('Brazil')}
        </div>
    );
}

export default Footer;