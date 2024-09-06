import { useTranslation } from 'react-i18next';
import Button from '../../../layout/form/button/Button';
import Input from '../../../layout/form/input/Input';
import './Signup.scss';

function Signup() {
    const { t } = useTranslation();
    function submitSignup(event: any) {
        event.preventDefault();
        console.log('event', event);
    }
    return (
        <div className='signup'>
            <div className='primaryText boldText bigText'>
                {t('Signup')}
            </div>
            <form onSubmit={(e) => submitSignup(e)}>
                <Input></Input>
                <Button
                    type='submit'
                    classes='primaryButton'
                >
                    {t('Signup')}
                </Button>
            </form>
        </div>
    );
}

export default Signup;