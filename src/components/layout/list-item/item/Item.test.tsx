import { render, waitFor } from '../../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Item from './Item';

describe('Item Component', () => {
    test('Should render Item component', async () => {
        const { container } = render(
            <MemoryRouter>
                <Item/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.item');
            expect(element).toBeInTheDocument();
        });
    });
});