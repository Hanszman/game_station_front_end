import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Chat from './Chat';
import { io } from 'socket.io-client';
jest.mock('socket.io-client');

describe('Chat Component', () => {
    test('simple test 2', () => {
        expect(2+2).toBe(4);
    });
});