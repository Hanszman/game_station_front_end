import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaHome, FaBars } from 'react-icons/fa';
import Translation from '../translation/Translation';
import Button from '../form/button/Button';
import './Header.scss';

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
                        onMouseOver={() => setStateImg('logoWhite')}
                        onMouseOut={() => setStateImg('logoBlue')}
                    />
                </Link>
                <ul className={showNavList ? 'list active' : 'list'}>
                    <li className='item'>
                        <Link className='itemLink' to='/'>{t('Home')}</Link>
                    </li>
                    <li className='item'>
                        <Link className='itemLink' to='/games'>{t('Games')}</Link>
                    </li>
                    <li className='item'>
                        <Link className='itemLink' to='/user'>{t('User')}</Link>
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