export const io = jest.fn(() => {
    return {
        on: jest.fn(),
        disconnect: jest.fn(),
    };
});