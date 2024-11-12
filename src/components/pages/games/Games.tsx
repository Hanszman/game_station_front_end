import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { api } from '../../../services/Api';
import List from '../../layout/list-item/list/List';
import './Games.scss';

function Games() {
    const { t } = useTranslation();
    const [gameList, setGameList] = useState([]);
    useEffect(() => {
        api.get('/game').then((res: any) => {
            console.log('res', res);
        });
    }, []);
    return (
        <div className='games centerContainer'>
            <div className='titleText'>
                <div className='primaryText boldText veryBigText'>{(t('GameList'))}&nbsp;</div>
                <div className='secondaryText boldText veryBigText'>{(t('ListGame'))}</div>
                <div className='centerContainer'>
                    <List></List>
                </div>
            </div>
            <div className='text bigText'>{(t('HaveFunWithTheGamesBellow'))}</div>
        </div>
    );
}

export default Games;