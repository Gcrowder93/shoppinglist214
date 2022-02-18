import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('tests the behavior', () => {
  render(<App />);

  const addButton = screen.getByRole('button', { name: /add/i });
  expect(addButton).toBeInTheDocument();

  // const deleteButton = screen.getByRole('button', { name: /delete hello/i });
  // expect(deleteButton).toBeInTheDocument();

  const input = screen.getByRole('textbox', { placeholder: /add item/i });
  expect(input).toBeInTheDocument();

  userEvent.type(input, 'cucumber');
  userEvent.click(addButton);

  const Listitem = screen.getByText(/cucumber/i);
  expect(Listitem).toBeInTheDocument();

  const editButton = screen.getByLabelText(/edit/i);
  expect(editButton).toBeInTheDocument();

  userEvent.type(input, 'banana');
  userEvent.click(editButton);

  const editInput = screen.getByRole('textbox', { name: /edit/i });
  expect(editInput).toBeInTheDocument();
  expect(screen.getByDisplayValue(/cucumber/i)).toBeInTheDocument();
  const saveButton = screen.getByRole('button', { name: /save/i });
  expect(saveButton).toBeInTheDocument();
});
