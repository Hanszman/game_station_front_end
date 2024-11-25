import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'
import { api } from '../../../services/Api';
import List from '../../layout/list/List';
import './Games.scss';

function Games() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [gameList, setGameList] = useState([]);
    useEffect(() => {
        api.get('/game').then((res: any) => {
            setGameList(res?.data?.data);
        });
    }, []);
    function redirectGamePage(game: string) {
        navigate(`/games/${game.toLowerCase()}`);
    }
    return (
        <div className='games centerContainer'>
            <div className='titleText'>
                <div className='primaryText boldText veryBigText'>{t('GameList')}&nbsp;</div>
                <div className='secondaryText boldText veryBigText'>{t('ListGame')}</div>
            </div>
            <div className='text bigText'>{t('HaveFunWithTheGamesBellow')}</div>
            <div className='centerContainer'>
                <List
                    list={gameList}
                    customClass='gameList'
                    renderItem={(item) => (
                        <div className='gameListItem' onClick={() => redirectGamePage(item.name)}>
                            <div className='primaryText bigText boldText'>{item.name}&nbsp;</div>
                            <div className='secondaryText smallText'>{item.genre}</div>
                        </div>
                    )}
                />
            </div>
        </div>
    );
}

export default Games;