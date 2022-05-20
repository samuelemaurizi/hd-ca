import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home screen', () => {
  render(<App />);
  const text = screen.getByText('Welcome');
  expect(text).toBeInTheDocument();
});
