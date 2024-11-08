import { render, waitFor } from '../../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import List from './List';

describe('List Component', () => {
    test('Should render List component', async () => {
        const { container } = render(
            <MemoryRouter>
                <List/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.list');
            expect(element).toBeInTheDocument();
        });
    });
});