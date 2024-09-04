import { render, waitFor } from '../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Chat from './Chat';

describe('Chat Component', () => {
    test('Should render Chat component', async () => {
        const { container } = render(
            <MemoryRouter>
                <Chat/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.chat');
            expect(element).toBeInTheDocument();
        });
    });
});