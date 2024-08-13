import { render } from '@testing-library/react';
import i18n from './assets/i18n';
import { I18nextProvider } from 'react-i18next';

const renderWithTranslation = (ui, options) => {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>, options);
};

export * from '@testing-library/react';
export { renderWithTranslation as render };