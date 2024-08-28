import { useTranslation } from 'react-i18next';
import './Games.scss';

function Games() {
    const { t } = useTranslation();
    return (
        <div>
            {(t('Games'))}
        </div>
    );
}

export default Games;