import { render, waitFor } from '../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import User from './User';

describe('User Component', () => {
    test('Should render User component', async () => {
        const { container } = render(
            <MemoryRouter>
                <User/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.user');
            expect(element).toBeInTheDocument();
        });
    });
});