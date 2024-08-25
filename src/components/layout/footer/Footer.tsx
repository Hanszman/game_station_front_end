import { useTranslation } from 'react-i18next';
import './Footer.scss';

function Footer() {
    const { t } = useTranslation();
    return (
        <div className='footer'>
            &copy; 2024 &#183; Game Station &#183; Belo Horizonte, {t('Brazil')}
        </div>
    );
}

export default Footer;