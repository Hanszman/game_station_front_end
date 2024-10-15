import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../../context/AuthContext';
import { CiLogin } from 'react-icons/ci';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { CiLogout } from 'react-icons/ci';
import Button from '../../../layout/form/button/Button';
import Input from '../../../layout/form/input/Input';
import Message from '../../../layout/form/message/Message';
import { api } from '../../../../services/Api';
import './Login.scss';

function Login() {
    const { t } = useTranslation();
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    function submitLogin(event: any) {
        event.preventDefault();
        const body = {
            username,
            password
        }
        if (username && password) {
            setShowMessage(false);
            api.post('/login', body).then(
                (res: any) => {
                    console.log('res', res);
                    const user = res?.data?.data;
                    if (user) {
                        delete user.password;
                        login(user);
                    } else {
                        setMessage(t('WrongUserOrPassword'));
                        setShowMessage(true);
                    }
                },
                (error: any) => {
                    console.log('Error:', error);
                    setMessage(t('WrongUserOrPassword'));
                    setShowMessage(true);
                }
            );
        } else {
            setMessage(t('InformAllRequiredFields'));
            setShowMessage(true);
        }
    }
    return (
        <div className='login'>
            <div className='titleText centerText'>
                <div className='primaryText boldText bigText'>{t('Login')}</div>
                <div className='secondaryText'><CiLogin className='titleIcon'/></div>
            </div>
            <form onSubmit={(e: any) => submitLogin(e)}>
                <Input
                    type='text'
                    labelText={`${t('Username')}*`}
                    name='username'
                    placeholder={t('Username')}
                    classes='formSpacing'
                    handleOnChange={(e: any) => setUsername(e.target.value)}
                />
                <Input
                    type={showPassword ? 'text' : 'password'}
                    labelText={`${t('Password')}*`}
                    name='password'
                    placeholder={t('Password')}
                    classes='formSpacing'
                    handleOnChange={(e: any) => setPassword(e.target.value)}
                >
                    <div onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEyeSlash/> : <FaEye/>}
                    </div>
                </Input>
                {showMessage ? <Message>{message}</Message> : null}
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