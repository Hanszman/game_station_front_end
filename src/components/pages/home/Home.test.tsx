import { render, screen, waitFor } from '../../../test-utils';
import Home from './Home';

describe('Home Component', () => {
    test('Should render home component', async () => {
        render(<Home/>);
        await waitFor(() => {
            expect(screen.getByText(/home/i)).toBeInTheDocument();
        });
    });
});