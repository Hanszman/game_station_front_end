import { useTranslation } from 'react-i18next';
import './EndlessRunner.scss';

function EndlessRunner() {
    const { t } = useTranslation();
    return (
        <div className='endlessRunner centerContainer'>
            <div className='primaryText boldText bigText'>{t('EndlessRunner')}</div>
            <div>TESTE</div>
        </div>
    );
}

export default EndlessRunner;