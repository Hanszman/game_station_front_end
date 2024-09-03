import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaGamepad } from 'react-icons/fa';
import './Home.scss';

function Home() {
    const { t } = useTranslation();
    return (
        <div className='home centerContainer'>
            <div className='highText boldText veryBigText'>{(t('WelcomeToGameStation'))}</div>
            <div className='text bigText'>{(t('HereYouCanPlay'))}</div>
            <div className='gameListLink'>
                <Link className='formButton' to='/games'>
                    <FaGamepad className='linkIcon'/>
                    {t('checkOutGameList')}
                </Link>
            </div>
            <div className='text italicText'>{(t('OrLogInToPlayWithFriends'))}</div>
            <div className='loginAndSignupComponent'>
                {/* colocar componente de login/signup */}
            </div>
        </div>
    );
}

export default Home;