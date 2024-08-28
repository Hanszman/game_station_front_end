import { render, screen, waitFor } from '../../../test-utils';
import User from './User';

describe('User Component', () => {
    test('Should render User component', async () => {
        render(<User/>);
        await waitFor(() => {
            expect(screen.getByText(/user/i)).toBeInTheDocument();
        });
    });
});