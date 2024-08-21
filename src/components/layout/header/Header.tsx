import './Header.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaHome, FaBars } from 'react-icons/fa';
import Translation from '../translation/Translation';
import Button from '../form/button/Button';

function Header() {
    const { t } = useTranslation();
    const [stateImg, setStateImg] = useState('logoBlue');
    const [showNavList, setShowNavList] = useState(false);
    return (
        <header className='header'>
            <nav className='navbar'>
                <Link to='/'>
                    <FaHome
                        className={`imgLogo ${stateImg}`}
                        onMouseEnter={() => setStateImg('logoWhite')}
                        onMouseOut={() => setStateImg('logoBlue')}
                    />
                </Link>
                <ul className={showNavList ? 'list active' : 'list'}>
                    <li className='item'>
                        <Link to='/'>{t('Home')}</Link>
                    </li>
                    <li className='item'>
                        <Link to='/game'>{t('Game')}</Link>
                    </li>
                    <li className='item'>
                        <Link to='/user'>{t('User')}</Link>
                    </li>
                    <li className='item'>
                        <Link to='/chat'>{t('Chat')}</Link>
                    </li>
                </ul>
                <div className='displayFlex'>
                    <Translation/>
                    <div className='btnMenu'>
                        <Button
                            type='button'
                            handleOnClick={() => setShowNavList(!showNavList)}
                        >
                            <FaBars/>
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;