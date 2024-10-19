import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../context/AuthContext';
import Auth from '../../layout/auth/Auth';
import './User.scss';

function User() {
    const { t } = useTranslation();
    const { userObj, logout } = useAuth();
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
                    <div className='userFields'>
                        <div className='userInfo text'>
                            <div className='boldText infoTitle'>{t('Name')}:</div>
                            <div>{userObj.name}</div>
                        </div>
                        <div className='userInfo text'>
                            <div className='boldText infoTitle'>{t('Lastname')}:</div>
                            <div>{userObj.lastname}</div>
                        </div>
                        <div className='userInfo text'>
                            <div className='boldText infoTitle'>{t('Email')}:</div>
                            <div>{userObj.email}</div>
                        </div>
                        <div className='userInfo text'>
                            <div className='boldText infoTitle'>{t('Username')}:</div>
                            <div>{userObj.username}</div>
                        </div>
                        <div
                            className='link primaryLink'
                            onClick={() => logout()}
                        >
                            Sair
                        </div>
                    </div>
                ) : (
                    <Auth/>
                )
            }
        </div>
    );
}

export default User;