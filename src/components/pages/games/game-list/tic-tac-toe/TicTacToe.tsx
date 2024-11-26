import { useTranslation } from 'react-i18next';
import './TicTacToe.scss';

function TicTacToe() {
    const { t } = useTranslation();
    return (
        <div className='ticTacToe centerContainer'>
            <div className='primaryText boldText bigText'>{t('TicTacToe')}</div>
            <div>TESTE</div>
        </div>
    );
}

export default TicTacToe;