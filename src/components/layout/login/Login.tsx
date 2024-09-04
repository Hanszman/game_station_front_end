import { useTranslation } from 'react-i18next';
import './Login.scss';

function Login() {
    const { t } = useTranslation();
    return (
        <div className='login'>
            {t('Login')}
        </div>
    );
}

export default Login;