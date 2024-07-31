import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react';
import { io } from 'socket.io-client';

jest.mock('socket.io-client'); // Mocks the socket.io-client

test('renders learn react link', async () => {
  await act(async () => {
    render(<App />);
  });
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
