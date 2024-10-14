import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Auth from '../../layout/auth/Auth';
import './User.scss';

function User() {
    const { t } = useTranslation();
    const [userObj, setUserObj] = useState(null);
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUserObj(JSON.parse(user));
        }
    }, []);
    return (
        <div className='user centerContainer'>
            <div className='titleText'>
                <div className='primaryText boldText veryBigText'>{(t('UserProfile'))}&nbsp;</div>
                <div className='secondaryText boldText veryBigText'>{(t('ProfileUser'))}</div>
            </div>
            <div className='text bigText'>{(t('HereYouCanCheckoutUserInfo'))}</div>
            <div className='text italicText'>
                { userObj ? (<></>) : (t('ButFirstLogin')) }
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

export default User;