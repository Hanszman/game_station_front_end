import { useTranslation } from 'react-i18next';
import './Signup.scss';

function Signup() {
    const { t } = useTranslation();
    return (
        <div className='signup'>
            {t('Signup')}
        </div>
    );
}

export default Signup;