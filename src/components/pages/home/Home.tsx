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
            <div className='highText boldText veryBigText'>{(t('WelcomeToGameStation'))}</div>
            <div className='text bigText'>{(t('HereYouCanPlay'))}</div>
            <div className='gameListLink'>
                <Link className='formButton' to='/games'>
                    <FaGamepad className='linkIcon'/>
                    {t('checkOutGameList')}
                </Link>
            </div>
            <div className='text italicText'>{(t('OrLogInToPlayWithFriends'))}</div>
            <div className='loginAndSignup'>
                {showLoginOrSignup ? <Login/> : <Signup/>}
                <Button
                    type='button'
                    handleOnClick={() => setShowLoginOrSignup(!showLoginOrSignup)}
                >
                    {
                        showLoginOrSignup
                        ? t('DontHaveAnAccount') + ' ' + t('Signup')
                        : t('AlreadyHaveAnAccount') + ' ' + t('Login')
                    }
                </Button>
            </div>
        </div>
    );
}

export default Home;