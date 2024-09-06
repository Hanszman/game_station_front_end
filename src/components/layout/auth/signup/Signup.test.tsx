import { render, waitFor } from '../../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Signup from './Signup';

describe('Signup Component', () => {
    test('Should render Signup component', async () => {
        const { container } = render(
            <MemoryRouter>
                <Signup/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.signup');
            expect(element).toBeInTheDocument();
        });
    });
});