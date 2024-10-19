import { render, waitFor } from '../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound Component', () => {
    test('Should render NotFound component', async () => {
        const { container } = render(
            <MemoryRouter>
                <NotFound/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.notFound');
            expect(element).toBeInTheDocument();
        });
    });
});