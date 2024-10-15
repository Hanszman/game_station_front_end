import { render } from '@testing-library/react';
import i18n from './assets/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import { AuthProvider } from './context/AuthContext';

const renderWithProviders = (ui, options) => {
  return render(
    <AuthProvider>
      <I18nextProvider i18n={i18n}>
        {ui}
      </I18nextProvider>
    </AuthProvider>,
    options
  );
};

export * from '@testing-library/react';
export { renderWithProviders as render };