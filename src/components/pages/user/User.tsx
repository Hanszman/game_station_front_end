import { useTranslation } from 'react-i18next';
import Auth from '../../layout/auth/Auth';
import './User.scss';

function User() {
    const { t } = useTranslation();
    return (
        <div className='user centerContainer'>
            {(t('User'))}
            <Auth/>
        </div>
    );
}

export default User;