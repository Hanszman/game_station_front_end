import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../../layout/form/button/Button';
import Input from '../../../layout/form/input/Input';
import './Login.scss';

function Login() {
    const { t } = useTranslation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function submitLogin(event: any) {
        event.preventDefault();
        console.log('event', event);
        console.log('username', username);
        console.log('password', password);
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
                    classes='formSpacing'
                    handleOnChange={(e: any) => setUsername(e.target.value)}
                />
                <Input
                    type='text'
                    labelText={t('Password')}
                    name='password'
                    placeholder={t('Password')}
                    classes='formSpacing'
                    handleOnChange={(e: any) => setPassword(e.target.value)}
                />
                <Button
                    type='submit'
                    classes='primaryButton formSpacing'
                >
                    {t('Login')}
                </Button>
            </form>
        </div>
    );
}

export default Login;