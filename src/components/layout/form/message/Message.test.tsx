import { render, waitFor } from '../../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Message from './Message';

describe('Message Component', () => {
    test('Should render Message component', async () => {
        const { container } = render(
            <MemoryRouter>
                <Message/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.messageAlert');
            expect(element).toBeInTheDocument();
        });
    });
});