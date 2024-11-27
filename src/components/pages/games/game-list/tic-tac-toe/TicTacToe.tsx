import { useTranslation } from 'react-i18next';
import Chat from '../../../../layout/chat/Chat'
import './TicTacToe.scss';

function TicTacToe() {
    const { t } = useTranslation();
    return (
        <div className='ticTacToe centerContainer'>
            <div className='primaryText boldText bigText'>{t('TicTacToe')}</div>
            <div>TESTE</div>
            <Chat></Chat>
        </div>
    );
}

export default TicTacToe;