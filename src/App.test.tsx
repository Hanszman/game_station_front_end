import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from './App';

test('renders Home component on initial load', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const homeElement = screen.getByText(/home/i);
  expect(homeElement).toBeInTheDocument();
});

test('renders Game component when navigating to /game', () => {
  render(
    <MemoryRouter initialEntries={['/game']}>
      <App />
    </MemoryRouter>
  );
  const gameElement = screen.getByText(/game/i);
  expect(gameElement).toBeInTheDocument();
});

test('renders User component when navigating to /user', () => {
  render(
    <MemoryRouter initialEntries={['/user']}>
      <App />
    </MemoryRouter>
  );
  const userElement = screen.getByText(/user/i);
  expect(userElement).toBeInTheDocument();
});

test('renders Chat component when navigating to /chat', () => {
  render(
    <MemoryRouter initialEntries={['/chat']}>
      <App />
    </MemoryRouter>
  );
  const chatElement = screen.getByText(/chat/i);
  expect(chatElement).toBeInTheDocument();
});