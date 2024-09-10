import { render, waitFor } from '../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Games from './Games';

describe('Games Component', () => {
    test('Should render Games component', async () => {
        const { container } = render(
            <MemoryRouter>
                <Games/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.games');
            expect(element).toBeInTheDocument();
        });
    });
});