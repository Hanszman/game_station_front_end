import { useTranslation } from 'react-i18next';
import './Home.scss';

function Home() {
    const { t } = useTranslation();
    return (
        <div>
            {(t('Home'))}
        </div>
    );
}

export default Home;