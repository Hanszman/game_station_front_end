import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaGamepad } from 'react-icons/fa';
import Auth from '../../layout/auth/Auth';
import './Home.scss';

function Home() {
    const { t } = useTranslation();
    const [userObj, setUserObj] = useState(null);
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUserObj(JSON.parse(user));
        }
    }, []);
    return (
        <div className='home centerContainer'>
            <div className='titleText'>
                <div className='primaryText boldText veryBigText'>{(t('WelcomeTo'))}&nbsp;</div>
                <div className='secondaryText boldText veryBigText'>{(t('GameStation'))}</div>
            </div>
            <div className='text bigText'>{(t('HereYouCanPlay'))}</div>
            <div className='gameListLink'>
                <Link className='primaryLink' to='/games'>
                    <FaGamepad className='linkIcon'/>
                    {t('checkOutGameList')}
                    <FaGamepad className='linkIcon'/>
                </Link>
            </div>
            <div className='text italicText'>
                { userObj ? (t('OrSendLinkToPlayWithFriends')) : (t('OrLogInToPlayWithFriends')) }
            </div>
            {
                userObj ? (
                    <div></div>
                ) : (
                    <Auth/>
                )
            }
        </div>
    );
}

export default Home;