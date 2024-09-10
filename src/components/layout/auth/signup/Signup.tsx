import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CiLogin } from 'react-icons/ci';
// import { CiLogout } from 'react-icons/ci';
import Button from '../../../layout/form/button/Button';
import Input from '../../../layout/form/input/Input';
import './Signup.scss';

function Signup() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function submitSignup(event: any) {
        event.preventDefault();
        console.log('event', event);
        console.log('email', email);
        console.log('username', username);
        console.log('password', password);
    }
    return (
        <div className='signup'>
            <div className='titleText centerText'>
                <div className='primaryText boldText bigText'>{t('Signup')}</div>
                <div className='secondaryText'><CiLogin className='titleIcon'/></div>
            </div>
            <form onSubmit={(e: any) => submitSignup(e)}>
                <Input
                    type='email'
                    labelText={t('Email')}
                    name='email'
                    placeholder={t('Email')}
                    classes='formSpacing'
                    handleOnChange={(e: any) => setEmail(e.target.value)}
                />
                <Input
                    type='text'
                    labelText={t('Username')}
                    name='username'
                    placeholder={t('Username')}
                    classes='formSpacing'
                    handleOnChange={(e: any) => setUsername(e.target.value)}
                />
                <Input
                    type='password'
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
                    {t('Signup')}
                </Button>
            </form>
        </div>
    );
}

export default Signup;