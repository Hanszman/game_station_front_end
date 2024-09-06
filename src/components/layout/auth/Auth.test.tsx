import { render, waitFor } from '../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Auth from './Auth';

describe('Auth Component', () => {
    test('Should render Auth component', async () => {
        const { container } = render(
            <MemoryRouter>
                <Auth/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.auth');
            expect(element).toBeInTheDocument();
        });
    });
});