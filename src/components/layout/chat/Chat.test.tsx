import { render, waitFor } from '@testing-library/react';
import Chat from './Chat';
import { io } from 'socket.io-client';
jest.mock('socket.io-client');

describe('Chat Component', () => {
    // test('should connect to socket on mount and disconnect on unmount', async () => {
    //     const mockOn = jest.fn();
    //     const mockDisconnect = jest.fn();
    //     (io as jest.Mock).mockReturnValue({
    //         on: mockOn,
    //         disconnect: mockDisconnect,
    //     });
    //     console.log('Rendering Chat component');
    //     render(<Chat />);
    //     await waitFor(() => {
    //         console.log('Checking mockOn');
    //         expect(mockOn).toHaveBeenCalled();
    //         expect(mockOn).toHaveBeenCalledWith('connect', expect.any(Function));
    //     });
    //     console.log('Simulating unmount');
    //     render(<div></div>);
    //     expect(mockDisconnect).toHaveBeenCalled();
    // });
    // test('should call socket.on with connect event on mount', () => {
    //     render(<Chat />);
    //     expect(io).toHaveBeenCalled();
    // });
    // test('should call socket.on with connect event on mount', () => {
    //     const mockOn = jest.fn();
    //     (io as jest.Mock).mockReturnValue({ on: mockOn });
    //     render(<Chat />);
    //     expect(io).toHaveBeenCalled();
    //     expect(mockOn).toHaveBeenCalledWith('connect', expect.any(Function));
    // });
});