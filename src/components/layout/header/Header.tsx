import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaHome, FaGamepad, FaUser, FaBars } from 'react-icons/fa';
import { BiSolidGame } from 'react-icons/bi';
import Translation from '../translation/Translation';
import Button from '../form/button/Button';
import './Header.scss';

function Header() {
    const { t } = useTranslation();
    const [stateImg, setStateImg] = useState('logoNormal');
    const [showNavList, setShowNavList] = useState(false);
    return (
        <header className='header'>
            <nav className='navbar'>
                <Link to='/'>
                    <BiSolidGame
                        className={`imgLogo ${stateImg}`}
                        onMouseOver={() => setStateImg('logoHover')}
                        onMouseOut={() => setStateImg('logoNormal')}
                    />
                </Link>
                <ul className={showNavList ? 'list active' : 'list'}>
                    <li className='item'>
                        <Link className='itemLink' to='/'>
                            <FaHome className='itemIcon'/>
                            {t('Home')}
                        </Link>
                    </li>
                    <li className='item'>
                        <Link className='itemLink' to='/games'>
                            <FaGamepad className='itemIcon'/>
                            {t('Games')}
                        </Link>
                    </li>
                    <li className='item'>
                        <Link className='itemLink' to='/user'>
                            <FaUser className='itemIcon'/>
                            {t('User')}
                        </Link>
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