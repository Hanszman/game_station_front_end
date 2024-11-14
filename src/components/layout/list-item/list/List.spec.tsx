import { render, waitFor } from '../../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import List from './List';

describe('List Component', () => {
    test('Should render List component', async () => {
        const { container } = render(
            <MemoryRouter>
                <List 
                    list={[]} 
                    renderItem={(item) => <div>{JSON.stringify(item)}</div>} 
                />
            </MemoryRouter>
        );
        await waitFor(() => {
            expect(container).toBeInTheDocument();
        });
    });
});