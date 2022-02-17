import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('tests the behavior', () => {
  render(<App />);
  const deleteButton = screen.getByRole('button', { name: /delete hello/i });
  expect(deleteButton).toBeInTheDocument();

  const input = screen.getByRole('textbox', { placeholder: /add item/i });
  expect(input).toBeInTheDocument();
  const addButton = screen.getByRole('button', { name: /add/i });
  expect(addButton).toBeInTheDocument();

  userEvent.type(input, 'cucumber');
  userEvent.click(addButton);

  const Listitem = screen.getByText(/cucumber/i);
  expect(Listitem).toBeInTheDocument();

  const editButton = screen.getByLabelText(/edit cucumber/i);
  expect(editButton).toBeInTheDocument();

  userEvent.click(editButton);
});
