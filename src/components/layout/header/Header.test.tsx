import { render, waitFor } from '../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
    test('Should render Header component', async () => {
        const { container } = render(
            <MemoryRouter>
                <Header/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.header');
            expect(element).toBeInTheDocument();
        });
    });
});