import { render, waitFor } from '../../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import Button from './Button';

describe('Button Component', () => {
    test('Should render Button component', async () => {
        const { container } = render(
            <MemoryRouter>
                <Button/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.formButton');
            expect(element).toBeInTheDocument();
        });
    });
});