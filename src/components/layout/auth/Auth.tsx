import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Login from '../../layout/auth/login/Login';
import Signup from '../../layout/auth/signup/Signup';
import './Auth.scss';

function Auth() {
    const { t } = useTranslation();
    const [showLoginOrSignup, setShowLoginOrSignup] = useState(true);
    return (
        <div className='auth centerContainer'>
            <div className='loginOrSignup'>
                {showLoginOrSignup ? <Login/> : <Signup/>}
            </div>
            <div
                className='link secondaryLink'
                onClick={() => setShowLoginOrSignup(!showLoginOrSignup)}
            >
                {
                    showLoginOrSignup
                    ? t('DontHaveAnAccount') + ' ' + t('Signup')
                    : t('AlreadyHaveAnAccount') + ' ' + t('Login')
                }
            </div>
        </div>
    );
}

export default Auth;