import { render, waitFor } from './test-utils';
import App from './App';
import i18n from './assets/i18n/i18n';
import { api } from './services/Api';
jest.mock('./services/Api');

describe('App Component', () => {
  beforeEach(() => {
    (api.get as jest.Mock).mockClear();
  });
  test('i18n should be initialized', async () => {
    expect(i18n.isInitialized).toBe(true);
  });
  test('Should call API on mount', async () => {
    (api.get as jest.Mock).mockResolvedValue({ data: {} });
    render(<App/>);
    await waitFor(() => {
      expect(api.get).toHaveBeenCalledWith('/db');
    });
  });
});