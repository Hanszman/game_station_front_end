import { useTranslation } from 'react-i18next';
import './RockPaperScissors.scss';

function RockPaperScissors() {
    const { t } = useTranslation();
    return (
        <div className='rockPaperScissors centerContainer'>
            <div className='primaryText boldText bigText'>{t('RockPaperScissors')}</div>
            <div>TESTE</div>
        </div>
    );
}

export default RockPaperScissors;