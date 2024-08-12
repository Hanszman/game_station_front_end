import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Chat from './Chat';
import { io } from 'socket.io-client';
jest.mock('socket.io-client');

describe('Chat Component', () => {
    it('renders Chat component and connects to socket', () => {
        const socketMock = io();
        render(<Chat />);
        expect(socketMock.on).toHaveBeenCalledWith('connect', expect.any(Function));
        expect(screen.getByText('Chat')).toBeInTheDocument();
    });

    it('disconnects from socket on unmount', () => {
        const socketMock = io();
        const { unmount } = render(<Chat />);
        unmount();
        expect(socketMock.disconnect).toHaveBeenCalled();
    });
});