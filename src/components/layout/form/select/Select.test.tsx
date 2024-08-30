import { render, waitFor } from '../../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Select from './Select';

describe('Select Component', () => {
    test('Should render Select component', async () => {
        const { container } = render(
            <MemoryRouter>
                <Select/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.formSelect');
            expect(element).toBeInTheDocument();
        });
    });
});