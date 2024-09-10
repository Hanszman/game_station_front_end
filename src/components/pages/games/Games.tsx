import { useTranslation } from 'react-i18next';
import './Games.scss';

function Games() {
    const { t } = useTranslation();
    return (
        <div className='games centerContainer'>
            <div className='titleText'>
                <div className='primaryText boldText veryBigText'>{(t('GameList'))}&nbsp;</div>
                <div className='secondaryText boldText veryBigText'>{(t('ListGame'))}</div>
            </div>
            <div className='text bigText'>{(t('HaveFunWithTheGamesBellow'))}</div>
        </div>
    );
}

export default Games;