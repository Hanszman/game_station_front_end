import { render, waitFor } from '../../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Input from './Input';

describe('Input Component', () => {
    test('Should render Input component', async () => {
        const { container } = render(
            <MemoryRouter>
                <Input/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.formInput');
            expect(element).toBeInTheDocument();
        });
    });
});