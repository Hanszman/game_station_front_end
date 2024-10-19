import { useTranslation } from 'react-i18next';
import './NotFound.scss';

function NotFound() {
    const { t } = useTranslation();
    return (
        <div className='notFound centerContainer'>
            <div className='titleText'>
                <div className='primaryText boldText veryBigText'>404&nbsp;</div>
                <div className='secondaryText boldText veryBigText'>{(t('PageNotFound'))}</div>
            </div>
            <div className='text bigText'>{(t('ThePageDoesntExist'))}</div>
        </div>
    );
}

export default NotFound;