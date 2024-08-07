import { useTranslation } from 'react-i18next';
import Translation from '../../layout/translation/Translation';
import './Home.scss';

function Home() {
    const { t } = useTranslation();
    return (
        <div>
            <Translation/>
            {(t('Home'))}
        </div>
    );
}

export default Home;