import { render, screen, waitFor } from '../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Component', () => {
    test('Should render home component', async () => {
        const { container } = render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.home');
            expect(element).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByText(/home/i)).toBeInTheDocument();
        });
    });
});