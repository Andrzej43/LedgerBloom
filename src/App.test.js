// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LedgerBloom title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LedgerBloom/i);
    expect(titleElement).toBeInTheDocument();
});
