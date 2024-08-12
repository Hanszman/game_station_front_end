module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(axios|socket.io-client)/)',
    ],
    setupFilesAfterEnv: ['./jest.setup.js', '<rootDir>/src/setupTests.ts'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};