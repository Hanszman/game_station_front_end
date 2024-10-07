import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CiLogin } from 'react-icons/ci';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { CiLogout } from 'react-icons/ci';
import Button from '../../../layout/form/button/Button';
import Input from '../../../layout/form/input/Input';
import './Signup.scss';

function Signup() {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    function submitSignup(event: any) {
        event.preventDefault();
        console.log('event', event);
        console.log('name', name);
        console.log('lastName', lastName);
        console.log('email', email);
        console.log('username', username);
        console.log('password', password);
    }
    return (
        <div className='signup'>
            <div className='titleText centerText'>
                <div className='secondaryText boldText bigText'>{t('Signup')}</div>
                <div className='primaryText'><CiLogin className='titleIcon'/></div>
            </div>
            <form onSubmit={(e: any) => submitSignup(e)}>
                <Input
                    type='text'
                    labelText={t('Name')}
                    name='name'
                    placeholder={t('Name')}
                    classes='formSpacing'
                    handleOnChange={(e: any) => setName(e.target.value)}
                />
                <Input
                    type='text'
                    labelText={t('LastName')}
                    name='lastName'
                    placeholder={t('LastName')}
                    classes='formSpacing'
                    handleOnChange={(e: any) => setLastName(e.target.value)}
                />
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
                    type={showPassword ? 'text' : 'password'}
                    labelText={t('Password')}
                    name='password'
                    placeholder={t('Password')}
                    classes='formSpacing'
                    handleOnChange={(e: any) => setPassword(e.target.value)}
                >
                    <div onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEyeSlash/> : <FaEye/>}
                    </div>
                </Input>
                <Button
                    type='submit'
                    classes='secondaryButton formSpacing'
                >
                    {t('Signup')}
                </Button>
            </form>
        </div>
    );
}

export default Signup;