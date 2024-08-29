import { render, waitFor } from '../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer Component', () => {
    test('Should render Footer component', async () => {
        const { container } = render(
            <MemoryRouter>
                <Footer/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.footer');
            expect(element).toBeInTheDocument();
        });
    });
});