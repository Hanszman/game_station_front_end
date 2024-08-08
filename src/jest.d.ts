import '@testing-library/jest-dom';
declare module 'jest' {
    interface Matchers<R> {
        toBeInTheDocument(): R;
    }
}