import { beforeAll, describe, expect, test, vi } from 'vitest';
import { waitFor } from '@testing-library/react';
import { render } from '@reactTodo/testUtils';
import { Todo } from './Todo';

beforeAll(() => {
  vi.mock('./TodoList', () => ({
    TodoList: () => 'TodoListComponent'
  }))
});

describe('Todo', () => {
  test('Should render Todo heading', async () => {

    const { getByText } = render(<Todo />);
    await waitFor(() => {
      expect(getByText('Todo list')).toBeInTheDocument();
      expect(getByText('TodoListComponent')).toBeInTheDocument();
    });
  });
});
