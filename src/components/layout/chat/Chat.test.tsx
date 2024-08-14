import { render, cleanup } from '@testing-library/react';
import Chat from './Chat';
import { io } from 'socket.io-client';
jest.mock('socket.io-client');

describe('Chat Component', () => {
    let mockSocket: any;
    beforeEach(() => {
        console.log(io);
        mockSocket = io();
        console.log(mockSocket);
    });
    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });
    test('should connect to socket on mount and disconnect on unmount', () => {
        const { unmount } = render(<Chat/>);
        expect(mockSocket.on).toHaveBeenCalledWith('connect', expect.any(Function));
        const connectCallback = mockSocket.on.mock.calls[0][1];
        connectCallback();
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        expect(logSpy).toHaveBeenCalledWith('connected');
        unmount();
        expect(mockSocket.disconnect).toHaveBeenCalled();
        logSpy.mockRestore();
    });
});