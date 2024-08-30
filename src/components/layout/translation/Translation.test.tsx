import { render, waitFor } from '../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Translation from './Translation';

describe('Translation Component', () => {
    test('Should render Translation component', async () => {
        const { container } = render(
            <MemoryRouter>
                <Translation/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.dropdownTranslation');
            expect(element).toBeInTheDocument();
        });
    });
});