import { render, waitFor } from '../../../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import EndlessRunner from './EndlessRunner';

describe('EndlessRunner Component', () => {
    test('Should render EndlessRunner component', async () => {
        const { container } = render(
            <MemoryRouter>
                <EndlessRunner/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.endlessRunner');
            expect(element).toBeInTheDocument();
        });
    });
});