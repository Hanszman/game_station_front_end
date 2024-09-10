import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaGamepad } from 'react-icons/fa';
import Auth from '../../layout/auth/Auth';
import './Home.scss';

function Home() {
    const { t } = useTranslation();
    return (
        <div className='home centerContainer'>
            <div className='titleText'>
                <div className='primaryText boldText veryBigText'>{(t('WelcomeTo'))}&nbsp;</div>
                <div className='secondaryText boldText veryBigText'>{(t('GameStation'))}</div>
            </div>
            <div className='text bigText'>{(t('HereYouCanPlay'))}</div>
            <div className='gameListLink'>
                <Link className='primaryLink' to='/games'>
                    <FaGamepad className='linkIcon'/>
                    {t('checkOutGameList')}
                    <FaGamepad className='linkIcon'/>
                </Link>
            </div>
            <div className='text italicText'>{(t('OrLogInToPlayWithFriends'))}</div>
            <Auth/>
        </div>
    );
}

export default Home;