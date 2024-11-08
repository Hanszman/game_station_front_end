import { render, waitFor } from '../../../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import TicTacToe from './TicTacToe';

describe('TicTacToe Component', () => {
    test('Should render TicTacToe component', async () => {
        const { container } = render(
            <MemoryRouter>
                <TicTacToe/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.ticTacToe');
            expect(element).toBeInTheDocument();
        });
    });
});