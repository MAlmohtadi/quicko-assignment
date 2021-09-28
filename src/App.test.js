import { render, screen } from '@testing-library/react';
import App from './App';
// Todo: need to add unit test later
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
