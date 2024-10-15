import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../context/AuthContext';
import Auth from '../../layout/auth/Auth';
import './User.scss';

function User() {
    const { t } = useTranslation();
    const { userObj } = useAuth();
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