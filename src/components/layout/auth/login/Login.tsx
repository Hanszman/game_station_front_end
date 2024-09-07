import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../../layout/form/button/Button';
import Input from '../../../layout/form/input/Input';
import './Login.scss';

function Login() {
    const { t } = useTranslation();
    const [username, setUsername] = useState('');
    function submitLogin(event: any) {
        event.preventDefault();
        console.log('event', event);
        console.log('username', username);
    }
    return (
        <div className='login'>
            <div className='primaryText boldText bigText'>
                {t('Login')}
            </div>
            <form onSubmit={(e: any) => submitLogin(e)}>
                <Input
                    type='text'
                    labelText={t('Username')}
                    name='username'
                    placeholder={t('Username')}
                    handleOnChange={(e: any) => setUsername(e.target.value)}
                />
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