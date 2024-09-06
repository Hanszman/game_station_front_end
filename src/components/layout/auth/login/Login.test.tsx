import { render, waitFor } from '../../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

describe('Login Component', () => {
    test('Should render Login component', async () => {
        const { container } = render(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.login');
            expect(element).toBeInTheDocument();
        });
    });
});