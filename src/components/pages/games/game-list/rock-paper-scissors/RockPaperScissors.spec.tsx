import { render, waitFor } from '../../../../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import RockPaperScissors from './RockPaperScissors';

describe('RockPaperScissors Component', () => {
    test('Should render RockPaperScissors component', async () => {
        const { container } = render(
            <MemoryRouter>
                <RockPaperScissors/>
            </MemoryRouter>
        );
        await waitFor(() => {
            const element = container.querySelector('.rockPaperScissors');
            expect(element).toBeInTheDocument();
        });
    });
});