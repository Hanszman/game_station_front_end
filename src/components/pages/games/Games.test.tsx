import { render, screen, waitFor } from '../../../test-utils';
import Games from './Games';

describe('Games Component', () => {
    test('Should render Games component', async () => {
        render(<Games/>);
        await waitFor(() => {
            expect(screen.getByText(/games/i)).toBeInTheDocument();
        });
    });
});