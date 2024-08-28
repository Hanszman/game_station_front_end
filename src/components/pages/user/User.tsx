import { useTranslation } from 'react-i18next';
import './User.scss';

function User() {
    const { t } = useTranslation();
    return (
        <div>
            {(t('User'))}
        </div>
    );
}

export default User;