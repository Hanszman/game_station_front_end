import { useTranslation } from 'react-i18next';
import './Home.scss';

function Home() {
    const { t } = useTranslation();
    return (
        <div className='home centerContainer'>
            <div className='highText boldText veryBigText'>{(t('WelcomeToGameStation'))}</div>
            <div className='text bigText'>{(t('HereYouCanPlay'))}</div>
            <div className='text italicText'>{(t('OrLogInToPlayWithFriends'))}</div>
        </div>
    );
}

export default Home;