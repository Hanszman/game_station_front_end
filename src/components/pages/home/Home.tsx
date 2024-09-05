import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaGamepad } from 'react-icons/fa';
import Login from '../../layout/login/Login';
import Signup from '../../layout/signup/Signup';
import Button from '../../layout/form/button/Button';
import './Home.scss';

function Home() {
    const { t } = useTranslation();
    const [showLoginOrSignup, setShowLoginOrSignup] = useState(true);
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
                </Link>
            </div>
            <div className='text italicText'>{(t('OrLogInToPlayWithFriends'))}</div>
            <div className='loginAndSignup'>
                {showLoginOrSignup ? <Login/> : <Signup/>}
                <a
                    className='secondaryLink'
                    onClick={() => setShowLoginOrSignup(!showLoginOrSignup)}
                >
                    {
                        showLoginOrSignup
                        ? t('DontHaveAnAccount') + ' ' + t('Signup')
                        : t('AlreadyHaveAnAccount') + ' ' + t('Login')
                    }
                </a>
            </div>
        </div>
    );
}

export default Home;