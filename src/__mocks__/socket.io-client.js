export const io = jest.fn(() => {
    return {
        on: jest.fn(),
        emit: jest.fn(),
        connect: jest.fn(),
        disconnect: jest.fn(),
    };
});