import { render, screen, waitFor } from './test-utils';
import App from './App';
import { api } from './services/Api';
jest.mock('./services/Api');

describe('App Component', () => {
  beforeEach(() => {
    (api.get as jest.Mock).mockClear();
  });
  test('should call API on mount', async () => {
    (api.get as jest.Mock).mockResolvedValue({ data: {} });
    render(<App/>);
    await waitFor(() => {
      expect(api.get).toHaveBeenCalledWith('/db');
    });
    await waitFor(() => {
      expect(screen.getByText(/home/i)).toBeInTheDocument();
    });
  });
});