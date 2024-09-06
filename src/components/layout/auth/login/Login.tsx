import { useTranslation } from 'react-i18next';
import Button from '../../../layout/form/button/Button';
import Input from '../../../layout/form/input/Input';
import './Login.scss';

function Login() {
    const { t } = useTranslation();
    function submitLogin(event: any) {
        event.preventDefault();
        console.log('event', event);
    }
    return (
        <div className='login'>
            <div className='primaryText boldText bigText'>
                {t('Login')}
            </div>
            <form onSubmit={(e) => submitLogin(e)}>
                <Input></Input>
                <Button
                    type='submit'
                    classes='primaryButton'
                >
                    {t('Login')}
                </Button>
            </form>
        </div>
    );
}

export default Login;