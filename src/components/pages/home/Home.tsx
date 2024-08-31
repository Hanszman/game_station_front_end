import { useTranslation } from 'react-i18next';
import './Home.scss';

function Home() {
    const { t } = useTranslation();
    return (
        <div className='home'>
            {(t('Home'))}
            <div>{(t('WelcomeToGameStation'))}</div>
            <div>{(t('HereYouCanPlay'))}</div>
            <div>{(t('OrLogInToPlayWithFriends'))}</div>
        </div>
    );
}

export default Home;