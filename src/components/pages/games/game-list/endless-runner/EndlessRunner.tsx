import { useTranslation } from 'react-i18next';
import Chat from '../../../../layout/chat/Chat'
import './EndlessRunner.scss';

function EndlessRunner() {
    const { t } = useTranslation();
    return (
        <div className='endlessRunner centerContainer'>
            <div className='primaryText boldText bigText'>{t('EndlessRunner')}</div>
            <div>TESTE</div>
            <Chat></Chat>
        </div>
    );
}

export default EndlessRunner;